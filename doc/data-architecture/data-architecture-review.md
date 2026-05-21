---
title: "Mnemosyne Engine — Data Architecture Review"
status: draft
date: 2026-05-21
reviews: doc/data-architecture.md
author: claude-sonnet-4-6 + advisor
---

# Data Architecture Review

Critical review of `doc/data-architecture.md`. Grouped by severity: blocking bugs, design gaps, and polish.

---

## Strengths worth preserving

These are the document's most valuable contributions. Any revision should protect them.

**Candidate physical isolation** — The argument for structurally separate tables over a `status` column is concrete and correct. "A query bug cannot accidentally surface a candidate via a missing `WHERE status = 'confirmed'` clause" is exactly the kind of constraint-first reasoning the system needs.

**NAS immutability trigger** — The `BEFORE UPDATE` trigger is right. The DOI analogy is the clearest way to explain write-once semantics to a new engineer. Keep it.

**PRD vs. prototype divergence table** (§7) — The most operationally useful section in the document. Documents the `ai-reviewed`/`inspired` gap, Campbell/Bakhtin substitution, and the 3-parallel expansion beyond PRD scope in one readable place. A new engineer will reach for this on day one.

**Technology comparison matrices with escalation criteria** (§14) — Concrete thresholds ("3 hops / 5,000 nodes / 200ms p95") rather than vague recommendations. Qdrant and Apache AGE escalation paths are grounded in measurable conditions, not opinion.

**Feature flag discipline** — All nine flags seeded `FALSE` with phase labels. The `bakhtin_track` flag in particular is well-judged: schema-ready but not activated, waiting on a Cultural Expert decision.

---

## Blocking bugs — fix before any production schema deploy

### 1. DDL forward reference in `fragment_edges`

`fragment_edges` is defined with `parallel_id UUID REFERENCES parallels(id)` before `parallels` is created. This DDL ships broken as written — `CREATE TABLE fragment_edges` will fail with `relation "parallels" does not exist`. The migration order in §16 Stage 1 lists `fragment_edges` at step 5, `parallels` at step 6.

**Fix**: either reorder DDL so `parallels` precedes `fragment_edges`, or split the FK into a deferred `ALTER TABLE` after `parallels` is created:

```sql
-- Create fragment_edges without the FK first
CREATE TABLE fragment_edges ( ... parallel_id UUID, ... );

-- Add FK after parallels exists
ALTER TABLE fragment_edges
  ADD CONSTRAINT fk_edges_parallel
  FOREIGN KEY (parallel_id) REFERENCES parallels(id) ON DELETE RESTRICT;
```

---

### 2. `locale_content` UNIQUE constraint silently allows duplicates

```sql
UNIQUE (nas, locale, layer, content_type, parallel_id)
```

PostgreSQL treats multiple NULLs as distinct for UNIQUE constraints. When `parallel_id IS NULL` (the common case for summaries), this constraint permits unlimited duplicate `(nas, locale, 0, 'summary', NULL)` rows. The document's own "constraint-first" principle is violated here.

**Fix**: two partial unique indexes:

```sql
CREATE UNIQUE INDEX uq_locale_content_summary
  ON locale_content (nas, locale, layer, content_type)
  WHERE parallel_id IS NULL;

CREATE UNIQUE INDEX uq_locale_content_parallel_note
  ON locale_content (nas, locale, layer, content_type, parallel_id)
  WHERE parallel_id IS NOT NULL;
```

---

### 3. ERD relationship direction in §2 is backward

```
PARALLELS ||--o{ PARALLEL_CANDIDATES : "promoted from"
```

The crow's foot notation says one Parallel has many Parallel Candidates. The actual relationship is the reverse: candidates are promoted *to* confirmed Parallels. The label "promoted from" makes it worse — it describes the direction the record travels, not the data relationship.

**Fix**: `PARALLEL_CANDIDATES }o--|| PARALLELS : "promoted to"`, or remove the arrow and describe the lifecycle in prose only.

---

### 4. Embedding model attribution error

§13 and §19 both cite `text-embedding-3-small` as the embedding model, then say "via OpenAI/Anthropic API." `text-embedding-3-small` is an OpenAI model. Anthropic does not offer this model. If the team intends to use OpenAI for embeddings, that is a third-party dependency that should be declared explicitly. If the intent is Anthropic-only, the model name is wrong.

**Fix**: decide the dependency and state it explicitly. If OpenAI: document that the AI pipeline has two providers (Anthropic for generation, OpenAI for embeddings). If Anthropic-only: replace with the correct Anthropic embedding model identifier.

---

### 5. Candidate promotion has a consistency window

The `parallel_candidates` table keeps a `status` column (`pending / confirmed / rejected`). The isolation argument assumes confirmed parallels live only in `parallels` — but `parallel_candidates WHERE status = 'confirmed'` is queryable by any role with SELECT on that table. Worse, if the promotion transaction (UPDATE status + INSERT into parallels) fails after the status update, you have a confirmed candidate with no corresponding row in `parallels`.

**Fix**: either remove the `status = 'confirmed'` value (promotion = DELETE from candidates + INSERT into parallels in one transaction, no intermediate status update) or document the promotion as an explicit stored procedure with a transaction guarantee:

```sql
CREATE OR REPLACE PROCEDURE promote_parallel_candidate(p_candidate_id UUID, p_reviewer_id UUID)
LANGUAGE plpgsql AS $$
BEGIN
  INSERT INTO parallels (...) SELECT ... FROM parallel_candidates WHERE id = p_candidate_id;
  DELETE FROM parallel_candidates WHERE id = p_candidate_id;
  INSERT INTO review_log (...) VALUES ('parallel_candidate', p_candidate_id, 'confirmed', ...);
END;
$$;
```

---

## Design gaps — structural issues that will surface in Phase 2 if not addressed now

### 6. Episode/Fragment hierarchy is unresolved

The PRD example `nms://gilgamesh/tablet-xi/flood/1` implies a 4-level hierarchy: tradition / tablet / episode / verse. The prototype uses 3-segment episode-level addresses only. The production schema has a single `fragments` table with a `contains` edge type in `fragment_edges`. But the document never answers: is an Episode a Fragment that contains verse-Fragments via `contains` edges, or is the current 3-segment episode the leaf node?

This ambiguity has concrete downstream effects:
- Which NAS level does `locale_content` reference? (Episode? Verse? Both?)
- Which level carries `annotation_records`? If Propp-8 is on the episode-level Fragment, all verses in that episode inherit it — is that intended?
- The `contains` edge type in `fragment_edges` would create zero rows in Phase 1 if episodes are the leaf nodes.

**Fix**: declare the Phase 1 resolution explicitly: "All Phase 1 Fragments are episode-level (3-segment NAS). Verse-level Fragments and `contains` edges are Phase 2. `locale_content` and `annotation_records` reference episode-level NAS only in Phase 1."

---

### 7. `parallels.episode_nas_uris TEXT[]` is the wrong model

An array column loses per-participant metadata. A 3-way flood parallel (Gilgamesh / Genesis / Ovid Metamorphoses) cannot express that Genesis↔Gilgamesh has higher evidential confidence than either has with Ovid. There is no per-side attribution, role, or tier. More critically, `TEXT[]` carries no FK constraint — you can store a NAS in `episode_nas_uris` that does not exist in `fragments.nas` and the DB will not object.

**Fix**: a `parallel_participants` join table:

```sql
CREATE TABLE parallel_participants (
  parallel_id   UUID NOT NULL REFERENCES parallels(id) ON DELETE CASCADE,
  fragment_nas  TEXT NOT NULL REFERENCES fragments(nas),
  role          TEXT,          -- optional: 'primary', 'comparative'
  tier          confidence_tier NOT NULL,
  notes         TEXT,
  PRIMARY KEY (parallel_id, fragment_nas)
);
```

The GIN index on `episode_nas_uris` can be replaced with a standard B-tree index on `parallel_participants.fragment_nas`.

---

### 8. Embedding chunking strategy is absent

"One embedding per (fragment, layer, locale, model)" does not handle variable-length content. A Layer 4 Scholaria entry for the flood episode is several paragraphs of manuscript context, historical debate, and variant citations. A single 1536d vector over long text has poor retrieval precision — the embedding averages over all content and becomes semantically diffuse.

The document claims "read patterns drive index design" but never defines the embedding retrieval pattern or the chunking policy needed to serve it.

**Fix**: specify the chunking strategy and add an `embedding_chunks` table:

```sql
CREATE TABLE embedding_chunks (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  fragment_nas   TEXT NOT NULL REFERENCES fragments(nas),
  layer          INTEGER NOT NULL,
  locale         TEXT NOT NULL,
  chunk_index    INTEGER NOT NULL,   -- 0-based position within the fragment
  char_offset    INTEGER NOT NULL,   -- character offset into body for highlight rendering
  body_excerpt   TEXT NOT NULL,      -- the chunk text
  model          TEXT NOT NULL,
  vector         vector(1536),
  created_at     TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE (fragment_nas, layer, locale, model, chunk_index)
);

CREATE INDEX idx_chunks_hnsw ON embedding_chunks
  USING hnsw (vector vector_cosine_ops)
  WITH (ef_construction = 128, m = 16);
```

---

### 9. Cascade behavior is undefined

Only one cascade rule is declared (`parallels(id) ON DELETE RESTRICT` on `fragment_edges.parallel_id`). All other FK relationships default to `NO ACTION`, which means any attempt to delete a Tradition, Fragment, or Parallel will raise a constraint violation at runtime, not follow a documented cleanup path.

**Fix**: for each FK relationship, declare the intended cascade explicitly. Minimum required decisions:

| Relationship | Recommended cascade | Rationale |
|---|---|---|
| `fragments.tradition_id → traditions` | `ON DELETE RESTRICT` | Traditions are archived, not deleted |
| `locale_content.nas → fragments` | `ON DELETE CASCADE` | Content without a Fragment is orphaned |
| `artifacts.fragment_nas → fragments` | `ON DELETE CASCADE` | Same |
| `annotation_records.fragment_nas → fragments` | `ON DELETE RESTRICT` | Preserve annotation history |
| `review_log.reviewer_id → users` | `ON DELETE SET NULL` | Preserve log on user removal |

Also declare the archival strategy: "Traditions are not deleted; `status = 'archived'` replaces deletion."

---

### 10. No content versioning model

`locale_content` is treated as effectively immutable once `reviewed_at` is set. But editorial workflows always produce revisions — a scholar approves a Surface summary, then finds an error and requests a correction. The `review_log` captures decisions, not body changes. There is no way to diff versions or roll back to a prior approved body.

**Fix**: declare the versioning policy explicitly. Two viable options:

- **Immutable append**: each revision is a new `locale_content` row; add a `version INTEGER NOT NULL DEFAULT 1` and `superseded_by UUID REFERENCES locale_content(id)`. The current version is the latest with `reviewed_at IS NOT NULL AND superseded_by IS NULL`.
- **In-place update**: revisions overwrite `body`; `review_log` captures the change history with old/new body snapshots.

The choice has schema implications and must be made before the scholar review interface is built.

---

### 11. PostHog analytics alignment is missing

The data-architect's own quality gate states: "Analytics alignment: PostHog event properties match data model (tradition IDs, parallel IDs, NAS addresses)." The project's `CLAUDE.md` requires instrumentation on every interactive surface. There is no section documenting which entity fields flow into PostHog events — a new engineer instrumenting a page has no reference for what the `tradition` property should contain (`slug`, `id`, or `label_en`?).

**Fix**: add a short analytics alignment section mapping each event from `CLAUDE.md` to the data model fields it should use:

| PostHog event | Property | Data model source |
|---|---|---|
| `tradition_selected` | `tradition` | `traditions.slug` |
| `parallel_opened` | `parallel_id` | `parallels.id` (UUID) |
| `layer_changed` | `from`, `to` | Onion layer integer (0–4) |
| `track_toggled` | `track_name` | `annotation_framework` enum value |

---

## Polish — lower severity

**ENUM vs CHECK constraint inconsistency.** The schema uses PostgreSQL `ENUM` for `confidence_tier`, `edge_type`, and `annotation_framework` — and `CHECK (x IN (...))` for `parallels.type`, `parallel_candidates.status`, and `locale_content.locale`. Pick one pattern and apply it consistently. ENUMs auto-validate in ORMs; CHECK constraints are easier to extend online (`ALTER TYPE` requires a brief lock). The document should state the choice and the reason.

**Language code mismatch.** `language TEXT` on `fragments` claims ISO 639-1 in comments, then uses `'akk'` as an example for Akkadian. `akk` is ISO 639-3; ISO 639-1 does not have a code for Akkadian. Use ISO 639-3 (or BCP 47) consistently and update the comment.

**NAS format validation is too permissive.** `CHECK (nas LIKE 'nms://%')` accepts `nms://` as a valid NAS. A minimal regex catches most accidental malformations:

```sql
CHECK (nas ~ '^nms://[a-z0-9-]+/[a-z0-9-]+/[a-z0-9-]+')
```

**No read query patterns section.** The document claims "read patterns drive index design" but never shows the queries that justify the indexes. A short section showing the three primary read patterns (navigate by NAS, get parallels for a tradition, get all annotations for a fragment) would validate the index choices and give engineers a reference.

---

## Summary table

| # | Category | Issue | Severity |
|---|---|---|---|
| 1 | Blocking bug | DDL forward reference: `fragment_edges → parallels` | Must fix |
| 2 | Blocking bug | `locale_content` UNIQUE constraint allows duplicates via NULL | Must fix |
| 3 | Blocking bug | ERD relationship direction reversed | Must fix |
| 4 | Blocking bug | Embedding model: `text-embedding-3-small` is OpenAI, not Anthropic | Must fix |
| 5 | Blocking bug | Candidate promotion has consistency window | Must fix |
| 6 | Design gap | Episode/Fragment hierarchy is undeclared | High |
| 7 | Design gap | `parallels.episode_nas_uris TEXT[]` loses FK integrity and per-participant data | High |
| 8 | Design gap | Embedding chunking policy absent | High |
| 9 | Design gap | Cascade behavior undefined for all relationships | Medium |
| 10 | Design gap | No content versioning model | Medium |
| 11 | Design gap | PostHog analytics alignment missing | Medium |
| 12 | Polish | ENUM vs CHECK inconsistency | Low |
| 13 | Polish | Language code mismatch (ISO 639-1 vs 639-3) | Low |
| 14 | Polish | NAS validation regex too permissive | Low |
| 15 | Polish | No read query patterns to justify index choices | Low |
