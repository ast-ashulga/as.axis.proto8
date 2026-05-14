---
type: wireframe
screen: Scholar Review Interface
route: /scholar (internal, authenticated)
status: draft
date: 2026-05-13
primary-user: Cultural Domain Expert / designated RU reviewer
audience: internal only — never public
---

# Scholar Review Interface

**Route**: `/scholar` (internal tool — not accessible without authentication)  
**Authentication**: Required. Session-based auth with per-role access control.  
**Purpose**: Internal review tool for scholars to confirm or reject candidate annotations, summaries, and parallels  
**Design philosophy**: Functional over beautiful. This is a professional tool for a small number of expert users. It does not need to be visually polished. It must be fast, correct, and unambiguous about the epistemic status of every record.

---

## Purpose

Every piece of AI-generated content and every computationally-detected relationship starts as a `candidate`. It becomes `confirmed` only after a scholar reviews it here. The Scholar Review Interface is the human gate in the AI pipeline.

The interface has three primary queues:
1. **Summary Review** — Surface-layer (Layer 0) summaries awaiting review
2. **Annotation Review** — Structural annotation candidates awaiting confirmation
3. **Parallel Review** — Cross-tradition parallel candidates awaiting confirmation

Every record in every queue shows:
- Its content
- Its source (AI-generated? Which model? Which pipeline step?)
- The fragments it is grounded in (with NAS addresses and their own confidence tiers)
- A clear Confirm / Reject decision with required note

Every confirmed record shows its reviewer attribution, date, and review note. The audit log is always accessible.

---

## ASCII Wireframe — Desktop: Dashboard

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  MNEMOSYNE ENGINE — SCHOLAR REVIEW                                                        │
│  Logged in as: Dr. A. Kovacs  ·  Cultural Domain Expert                [Sign out]        │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  REVIEW DASHBOARD                                                                         │
│                                                                                           │
│  ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐            │
│  │  SUMMARIES           │  │  ANNOTATIONS         │  │  PARALLELS           │            │
│  │  Candidate: 12       │  │  Candidate: 47       │  │  Candidate: 3        │            │
│  │  Confirmed: 8        │  │  Confirmed: 89       │  │  Confirmed: 1        │            │
│  │  Rejected: 2         │  │  Rejected: 14        │  │  Rejected: 0         │            │
│  │                      │  │                      │  │                      │            │
│  │  [Review summaries]  │  │  [Review annot.]     │  │  [Review parallels]  │            │
│  └──────────────────────┘  └──────────────────────┘  └──────────────────────┘            │
│                                                                                           │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  RECENT ACTIVITY                                                                          │
│                                                                                           │
│  2026-04-22 · Dr. A. Kovacs · CONFIRMED annotation  PROPP-15 · nms://gilgamesh/…/flood  │
│  2026-04-22 · Dr. A. Kovacs · CONFIRMED summary     Surface [EN] · nms://gilgamesh/…    │
│  2026-04-21 · Dr. A. Kovacs · REJECTED  annotation  BAKHTIN-CT · nms://gilgamesh/…      │
│                                          note: "Chronotope assignment incorrect…"        │
│                                                                                           │
│  [View full audit log]                                                                    │
│                                                                                           │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## ASCII Wireframe — Desktop: Summary Review Queue

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  MNEMOSYNE ENGINE — SCHOLAR REVIEW                                              [← Back] │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  SUMMARY REVIEW QUEUE                                                                     │
│  12 candidates · Showing: EN summaries · [EN]  [RU]                                      │
│                                                                                           │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐     │
│  │  [CANDIDATE]  Surface summary — EN                                              │     │
│  │  Fragment: nms://gilgamesh/tablet-xi/flood                                      │     │
│  │  Generated: 2026-04-18 · Model: claude-sonnet-4-6 · Pipeline: summary-gen-v3   │     │
│  │  Grounding fragments:                                                            │     │
│  │    · nms://gilgamesh/tablet-xi/flood   [● DOCUMENTED]  (Layer 2, translation)  │     │
│  │    · nms://gilgamesh/tablet-xi/flood   [◑ RECON.]     (Layer 4, scholaria)     │     │
│  │  Grounding check: PASSED (all claims traceable to NAS-addressed fragment)       │     │
│  │  ──────────────────────────────────────────────────────────────────────────   │     │
│  │                                                                                 │     │
│  │  SUMMARY TEXT:                                                                  │     │
│  │                                                                                 │     │
│  │  Gilgamesh, stricken by the death of Enkidu and unable to accept his own        │     │
│  │  mortality, seeks out Utnapishtim — the one mortal who has been granted         │     │
│  │  eternal life by the gods. Utnapishtim lives beyond the waters of death.        │     │
│  │  Gilgamesh crosses them.                                                        │     │
│  │  [...]                                                                          │     │
│  │                                                                                 │     │
│  │  ──────────────────────────────────────────────────────────────────────────   │     │
│  │                                                                                 │     │
│  │  REVIEW DECISION                                                                │     │
│  │                                                                                 │     │
│  │  Review note (required):                                                        │     │
│  │  ┌────────────────────────────────────────────────────────────────────────┐   │     │
│  │  │                                                                        │   │     │
│  │  │  [text area — scholar enters note here]                                │   │     │
│  │  │                                                                        │   │     │
│  │  └────────────────────────────────────────────────────────────────────────┘   │     │
│  │                                                                                 │     │
│  │  Assign confidence tier:  (○) Reconstructed  (○) Inspired                     │     │
│  │  (AI-generated summaries cannot be assigned Documented or Contested)           │     │
│  │                                                                                 │     │
│  │  [ CONFIRM ]                  [ REJECT ]                    [ Skip for now ]   │     │
│  │                                                                                 │     │
│  └─────────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                           │
│  Next in queue:  nms://gilgamesh/tablet-xi/utnapishtim-speech  [→ 11 remaining]           │
│                                                                                           │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## ASCII Wireframe — Desktop: Annotation Review Queue

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  MNEMOSYNE ENGINE — SCHOLAR REVIEW                                              [← Back] │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  ANNOTATION REVIEW QUEUE                                                                  │
│  47 candidates · Filter: [All frameworks ▾]  [All tablets ▾]                             │
│                                                                                           │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐     │
│  │  [CANDIDATE]  Annotation · PROPP-15 · Spatial translocation                    │     │
│  │  Fragment: nms://gilgamesh/tablet-xi/flood                                      │     │
│  │  Generated: 2026-04-20 · Model: claude-sonnet-4-6 · Pipeline: annot-gen-v2     │     │
│  │  Framework: Propp's Morphology · Function 15                                   │     │
│  │  ──────────────────────────────────────────────────────────────────────────   │     │
│  │                                                                                 │     │
│  │  CONTEXT (relevant passage from Layer 2):                                       │     │
│  │                                                                                 │     │
│  │  "Utnapishtim said: 'Shurippak — a city which thou knowest — that city was      │     │
│  │   old, and the gods dwelling therein — their hearts moved the great gods        │     │
│  │   to make a flood...'"                                                          │     │
│  │                                                                                 │     │
│  │  MODEL RATIONALE (from AI pipeline):                                            │     │
│  │  "The hero (Gilgamesh) moves geographically from his known world (Uruk) to a   │     │
│  │   remote location (beyond the Waters of Death) to seek specific knowledge.      │     │
│  │   This matches Propp function 15: the hero moves to a different location to    │     │
│  │   perform an action or acquire something."                                      │     │
│  │                                                                                 │     │
│  │  ──────────────────────────────────────────────────────────────────────────   │     │
│  │                                                                                 │     │
│  │  REVIEW DECISION                                                                │     │
│  │                                                                                 │     │
│  │  Review note (required for REJECT; recommended for CONFIRM):                   │     │
│  │  ┌────────────────────────────────────────────────────────────────────────┐   │     │
│  │  │                                                                        │   │     │
│  │  └────────────────────────────────────────────────────────────────────────┘   │     │
│  │                                                                                 │     │
│  │  Assign confidence tier:  (●) Documented  (◑) Reconstructed  (◈) Contested    │     │
│  │                                                                                 │     │
│  │  [ CONFIRM ]                  [ REJECT ]                    [ Skip for now ]   │     │
│  │                                                                                 │     │
│  └─────────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                           │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## ASCII Wireframe — Desktop: Parallel Review Queue

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  MNEMOSYNE ENGINE — SCHOLAR REVIEW                                              [← Back] │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  PARALLEL REVIEW QUEUE                                                                    │
│  3 candidates                                                                             │
│                                                                                           │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐     │
│  │  [CANDIDATE]  Cross-tradition Parallel                                          │     │
│  │  Fragment A: nms://gilgamesh/tablet-xi/flood           [● DOCUMENTED]           │     │
│  │  Fragment B: nms://genesis/chapter-07/flood/opening   [● DOCUMENTED]            │     │
│  │  Detection method: Automated (vector + annotation framework match)              │     │
│  │  Similarity score: 0.81  ·  Framework match: 7/10 Propp functions               │     │
│  │  ──────────────────────────────────────────────────────────────────────────   │     │
│  │                                                                                 │     │
│  │  GILGAMESH FRAGMENT (Layer 2):                                                  │     │
│  │  "The great gods decided to make a flood. Anu, their father, swore..."          │     │
│  │                                                                                 │     │
│  │  GENESIS FRAGMENT (Layer 2):                                                    │     │
│  │  "And God saw that the wickedness of man was great in the earth, and that       │     │
│  │   every imagination of the thoughts of his heart was only evil continually..."  │     │
│  │                                                                                 │     │
│  │  MATCHING PROPP FUNCTIONS:                                                      │     │
│  │  ✓ PROPP-8 (Villainy/Lack)  ✓ PROPP-15 (Spatial translocation)                │     │
│  │  ✓ PROPP-19 (Return)  ✓ PROPP-31 (Recognition)                                │     │
│  │  ✗ PROPP-12 (Testing)  ✗ PROPP-14 (Guidance)                                  │     │
│  │                                                                                 │     │
│  │  ──────────────────────────────────────────────────────────────────────────   │     │
│  │                                                                                 │     │
│  │  REVIEW DECISION                                                                │     │
│  │                                                                                 │     │
│  │  If confirming, you must provide:                                               │     │
│  │                                                                                 │     │
│  │  Parallel type:                                                                 │     │
│  │  (○) psychological_typological   (○) literary_typological                      │     │
│  │  (○) socio_typological                                                         │     │
│  │                                                                                 │     │
│  │  Scholarly note (required for CONFIRM — four sections):                         │     │
│  │                                                                                 │     │
│  │  What resonates:                                                                │     │
│  │  ┌────────────────────────────────────────────────────────────────────────┐   │     │
│  │  └────────────────────────────────────────────────────────────────────────┘   │     │
│  │  Why it resonates:                                                              │     │
│  │  ┌────────────────────────────────────────────────────────────────────────┐   │     │
│  │  └────────────────────────────────────────────────────────────────────────┘   │     │
│  │  Where it diverges:                                                             │     │
│  │  ┌────────────────────────────────────────────────────────────────────────┐   │     │
│  │  └────────────────────────────────────────────────────────────────────────┘   │     │
│  │  What the divergence reveals:                                                   │     │
│  │  ┌────────────────────────────────────────────────────────────────────────┐   │     │
│  │  └────────────────────────────────────────────────────────────────────────┘   │     │
│  │                                                                                 │     │
│  │  Confidence tier for this parallel relationship:                                │     │
│  │  (○) Documented  (○) Reconstructed                                             │     │
│  │  (Contested and Inspired tiers are not valid for confirmed parallels)           │     │
│  │                                                                                 │     │
│  │  [ CONFIRM ]                  [ REJECT ]                    [ Skip for now ]   │     │
│  │                                                                                 │     │
│  └─────────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                           │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Mobile Scholar Interface

The Scholar Review Interface is not optimized for mobile in Phase 1. The tool is used by scholars in a professional context, typically on desktop. A minimal responsive layout is acceptable — the review forms should be usable on a tablet (768px+), but mobile-first is not a priority here.

---

## Component Inventory

| Component | Token Reference | Notes |
|---|---|---|
| Dashboard stat card | Functional layout, minimal styling | Count of candidate/confirmed/rejected |
| Queue item | `--color-bg-surface`, `--color-border-strong` | Full-width container |
| Status badge `[CANDIDATE]` | `--type-meta-label` mono, `--color-warning` tint | Clear candidate status |
| NAS address | `--type-meta` mono | Always visible with grounding fragment list |
| Pipeline metadata | `--type-meta` mono, `--color-text-muted` | Model, date, pipeline version |
| Context passage | `--type-body` serif, `--color-bg-inset` | The relevant source text |
| Model rationale | `--type-caption`, `--color-text-secondary`, italic | What the AI pipeline identified |
| Review note textarea | Standard form textarea | Required for REJECT; recommended for CONFIRM |
| Tier radio buttons | Standard radio group | With tier labels and explanations |
| Confirm button | `--color-accent-primary`, high contrast | Primary action |
| Reject button | `--color-error` text, bordered | Destructive enough to be distinct |
| Skip button | `--type-caption`, `--color-text-secondary` | Available to move forward without deciding |
| Audit log row | Monospace, compact | Date · Scholar · Action · NAS address |

---

## Required Review Note

For CONFIRM: a review note is recommended but not technically required (except for Parallel confirmations, where the full scholarly note is required).

For REJECT: a review note is required. The system will not accept a REJECT without a note. This creates an audit trail that explains why content was rejected, which is valuable for improving the AI pipeline.

The system validates:
- REJECT with empty note: form cannot be submitted
- CONFIRM on Parallel without all four scholarly note sections: form cannot be submitted
- Tier selection for summary: only Reconstructed or Inspired allowed (enforced by UI and by API validation)

---

## Audit Log

Every CONFIRM and REJECT action is logged:
```
2026-04-22  14:23:07  Dr. A. Kovacs  CONFIRMED  summary/EN  nms://gilgamesh/tablet-xi/flood
    Note: "Accurate summary of the flood episode. Tone is accessible without being reductive."
    
2026-04-21  09:14:22  Dr. A. Kovacs  REJECTED   annotation  BAKHTIN-CT  nms://gilgamesh/tablet-xi/flood  
    Note: "The chronotope assignment is incorrect. This passage does not exhibit..."
```

The audit log is read-only. Actions cannot be reversed through the UI — a CONFIRM can only be undone by changing the record's status back to CANDIDATE via a separate admin action (not exposed in the standard scholar UI).

---

## Accessibility

The Scholar Review Interface uses standard HTML form elements throughout. It does not need to be visually sophisticated, but it must be:
- Fully keyboard-navigable (the scholar's workflow is repetitive; keyboard shortcuts for CONFIRM, REJECT, SKIP should be available)
- Screen-reader compatible (form labels on all inputs; error messages associated with their fields)
- Clear about which action is primary (Confirm) and which is destructive (Reject)

Keyboard shortcuts (displayed in interface):
```
C — Confirm current record
R — Reject current record  
S — Skip current record
N — Focus on review note textarea
```
