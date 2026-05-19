---
type: navigator-design
role: dimensional-specification
status: draft
date: 2026-05-19
---

# The Navigator Space — Dimensional Specification

This document describes the full navigation manifold of Mnemosyne Engine — the metric tensor of the space any navigator variant must traverse. It is the authoritative reference for navigator design: any variant that collapses or conflates axes described here must do so as an explicit, documented tradeoff, not by accident.

---

## The Seven Dimensions

### Dimension 1 — Depth (D)

**Symbol**: D  
**Type**: Ordinal, bounded, 3-value in Phase 1  
**Phase 1 range**: { 0: Surface, 2: Translated, 4: Scholaria } — layers 1 (Narrated) and 3 (Original) are defined but not implemented  
**Phase 3 range**: { 0, 1, 2, 3, 4 } — all five Onion Model layers active  

**Navigation semantics**: Moving along D is a vertical descent into the same fragment at increasing epistemic density. The reader moves from an AI-generated accessible summary (layer 0) to a full translation of primary source text (layer 2) to manuscript variants and scholarly apparatus (layer 4). The fragment identity (NAS address) does not change. The URL query parameter `?layer=` tracks position on this axis. Layer switching is a content swap, not a page navigation.

**Data model backing**: Onion layer field on Fragment node (`layer: 0|1|2|3|4`); `translation_of` edge connects layer-2 fragments to layer-3 source-text fragments; `annotates` edge connects layer-4 Scholaria records to their fragment.

**Collapse implications**: If D is hidden (navigator presents only a single layer), the core depth-navigation bet is voided. Users lose the ability to calibrate epistemic risk — to understand that a readable summary is an AI construction, not a primary source. A navigator that collapses D is incompatible with Mnemosyne Engine's product contract.

---

### Dimension 2 — Sequence (S)

**Symbol**: S  
**Type**: Continuous (ordered integer sequence), 1D  
**Phase 1 range**: ~600 fragments ordered within Tablet I through Tablet XII of Gilgamesh; cross-tablet transitions follow the `precedes`/`follows` graph edges  
**Phase 3 range**: ~3000+ fragments across 6 traditions; each tradition has its own ordered sequence; sequences do not merge across traditions (each is an independent 1D axis within its tradition subgraph)  

**Navigation semantics**: Moving along S is horizontal traversal within a tradition — reading forward or backward through the narrative. "Previous fragment" and "next fragment" are both S-axis movements. Sequence is the axis of reading comprehension, not analysis: a user who wants to read Gilgamesh cover-to-cover navigates entirely on S (with D optionally fixed).

**Data model backing**: `precedes` and `follows` edges in the Fragment Graph, which encode linear narrative order within a tradition. Sequence position is not a sortable integer column — it is a graph traversal. This means the navigator must resolve sequence at query time, not via a simple ORDER BY.

**Collapse implications**: Hiding S makes the text unreadable as a narrative. The user can only jump to named fragments by address; they cannot follow story. Acceptable only in search/index navigator variants where linear reading is not the goal.

---

### Dimension 3 — Containment (C)

**Symbol**: C  
**Type**: Hierarchical (DAG), 4 levels in standard form  
**Phase 1 range**: `gilgamesh` → `tablet-xi` → `flood` → fragment unit (e.g., `1`, `ark-dimensions`); the NAS schema is `nms://{tradition}/{division-1}/{division-2}/{unit}`  
**Phase 3 range**: 6 traditions, each with its own division hierarchy; the maximum depth of 4 NAS levels is fixed by the address scheme (additional granularity is encoded within the unit level, not as a new NAS level)  

**Navigation semantics**: Moving up C is zooming out (from a verse to an episode to a tablet to a tradition). Moving down C is drilling in. C is the "where am I?" axis — the containment hierarchy that provides the user's locational frame. Breadcrumb navigation is a common C-axis affordance. Critically, the Fragment Graph is a directed graph, not a tree: a fragment can participate in multiple containment hierarchies (e.g., a verse that belongs to both a thematic episode and a narrative sub-unit). The NAS hierarchy is the canonical containment, but the underlying data is a graph.

**Data model backing**: `contains` edges in the Fragment Graph, plus the NAS address structure itself. The tradition-level node is the root of each containment subgraph.

**Collapse implications**: Hiding C leaves users unable to answer "where is this in the text?" — they lose structural context. Tolerable in narrow deep-link scenarios (user arrives at a specific fragment and needs only D and S), but dangerous as a default because it divorces fragments from the narrative units they belong to.

---

### Dimension 4 — Parallel (P)

**Symbol**: P  
**Type**: Discrete, typed, confirmed-only  
**Phase 1 range**: 1 confirmed parallel (`nms://gilgamesh/tablet-xi/flood` ↔ `nms://genesis/flood-narrative`); parallel type is `socio-typological` (shared human condition, not shared textual source)  
**Phase 3 range**: ~30+ confirmed parallels across 6 traditions; all three parallel types (`socio-typological`, `literary-typological`, `psychological-typological`) active  

**Navigation semantics**: Moving along P is a cross-topology jump — the user leaves one tradition's subgraph entirely and enters another. Parallel navigation is not continuous: it is a discrete edge traversal. The destination is always a structurally resonant fragment in another tradition, not the next fragment in sequence. P-axis movement always lands on a Parallel View, not a Fragment View in the destination tradition. Absence of a P-axis affordance at a given fragment is semantically meaningful: there are no confirmed parallels here. That absence must not be hidden.

**Data model backing**: `parallel_to` edges in the Fragment Graph, with mandatory fields: `parallel_type` (one of three values), `confidence_tier`, `reviewer_id`, `review_date`, `scholarly_note_id`. Edges with status `candidate` are never exposed to the navigator — only `confirmed` edges are traversable.

**Collapse implications**: Hiding P makes Mnemosyne Engine a single-tradition text reader. The core cross-civilization insight — structural resonances in humanity's narrative imagination — disappears. Collapsing P is architecturally acceptable only in a tradition-local reading mode, but that mode must not be the default.

---

### Dimension 5 — Annotation Track (T)

**Symbol**: T  
**Type**: Discrete, composable, orthogonal overlay  
**Phase 1 range**: Propp morphological functions; Bakhtin chronotope annotations. Both are optional; neither is required to view a fragment.  
**Phase 3 range**: Propp, Bakhtin, Thompson Motif Index (TMI), and potentially additional schema-defined annotation types. Tracks remain composable — multiple tracks can be active simultaneously.  

**Navigation semantics**: Activating a track does not move the user to a new fragment or layer — it overlays a structural annotation schema on the current fragment view. T-axis movement is selection and composition, not traversal. The Genome Browser Track Model is the reference visualization metaphor: tracks are horizontal lanes in a genome-browser layout, each representing an independent annotation dimension, all anchored to the same fragment sequence. A user can enable Propp and Bakhtin simultaneously and see both overlaid.

**Data model backing**: `annotates` edges from annotation records to Fragment nodes, with a mandatory `track_schema` field identifying which annotation system the record belongs to. Track records carry their own confidence tier and reviewer attribution. The Track View query filters `annotates` edges by `track_schema` value.

**Collapse implications**: Hiding T removes the structural analysis layer — the ability to see narrative functions, motif occurrences, and chronotope patterns across fragments. Tolerable for general audience navigator variants. Not tolerable for scholar-path navigator variants, where track access is a primary affordance.

---

### Dimension 6 — Confidence Tier (K)

**Symbol**: K  
**Type**: Field/colorable (not navigable). Ordinal 4-value domain.  
**Phase 1 range**: { 1: Documented, 2: Reconstructed, 3: Contested, 4: Inspired }  
**Phase 3 range**: Same four values; domain is fixed by DB schema CHECK constraint and does not expand.  

**Navigation semantics**: K is not a movement axis. The user does not navigate to a different tier — they read the tier as a property of what they are already looking at. K varies across the manifold as a marking property: every fragment, every layer, every annotation carries a K value. The user perceives K everywhere but moves to it nowhere. Typical affordances: confidence tier badge (text + icon, never color-only), color-coded background or border, filter controls that narrow a list view to a specific tier. K is the epistemic labeling system that gives Mnemosyne Engine its primary product differentiator — it is not an axis of traversal, but it is a dimension of the content space that the navigator must surface.

**Data model backing**: `confidence_tier` field on Fragment, Parallel, and Annotation nodes; enforced as a DB schema CHECK constraint. Cannot be set higher than the tier ceiling of source fragments. AI-generated content defaults to tier 4 (Inspired) and cannot be promoted without scholar review.

**Collapse implications**: Hiding K is the most severe collapse possible. Without K, users cannot distinguish between what is known, what is reconstructed, and what is interpretive speculation. The product's epistemic contract with users is broken. K must be visible at every layer. A navigator variant that buries K behind a toggle or omits it entirely fails the product's core integrity criterion.

---

### Dimension 7 — Locale (L)

**Symbol**: L  
**Type**: Discrete, orthogonal, NAS-neutral  
**Phase 1 range**: { en, ru } — two locales, both fully implemented  
**Phase 3 range**: Additional locales are additive, not structural rework; each new locale is a content-collection entry, not a new navigation dimension  

**Navigation semantics**: Switching L is not a content or narrative movement — the user remains at the exact same NAS address (same fragment, same layer, same sequence position). Only the interface language and content locale change. The URL changes from `/en/...` to `/ru/...`, but the `?layer=` and `?track=` parameters are preserved. Locale is encoded in the URL path prefix, not in the NAS address itself; NAS addresses are locale-neutral by design.

**Data model backing**: URL path prefix (`/en/`, `/ru/`); content-collection locale field on localized Fragment content; locale switcher preserves current NAS context. The NAS address (`nms://...`) never carries a locale segment — this is a write-once architectural constraint.

**Collapse implications**: Hiding L (no locale switcher) is tolerable only in single-locale deployments. In a Phase 1 build with EN and RU required, omitting L is a product defect. More subtly: a navigator that encodes locale into the NAS address or breaks locale switching violates the NAS-neutral architecture and creates permanent addressing debt.

---

## Phase 1 Content Volume

| Dimension | Phase 1 State |
|---|---|
| Traditions | 1 (Gilgamesh) |
| Divisions | ~12 (Tablets I–XII) |
| Fragments | Up to ~600 |
| Confirmed parallels | 1 (Gilgamesh flood ↔ Genesis flood, `nms://gilgamesh/tablet-xi/flood`) |
| Parallel types active | 1 (`socio-typological`) |
| Onion layers implemented | 3 (0: Surface, 2: Translated, 4: Scholaria) |
| Annotation tracks | 2 (Propp, Bakhtin) |
| Locales | 2 (EN, RU) |
| Confidence tiers | 4 (all active, schema-enforced) |

---

## Phase 3 Projected Volume

| Dimension | Phase 3 Projection |
|---|---|
| Traditions | 6 |
| Divisions | ~50+ |
| Fragments | ~3000+ |
| Confirmed parallels | ~30+ |
| Parallel types active | All 3 (`socio-typological`, `literary-typological`, `psychological-typological`) |
| Onion layers implemented | 5 (0–4, all layers) |
| Annotation tracks | Propp, Bakhtin, TMI, plus additional schema-defined types |
| Locales | EN, RU + additive |

---

## Topological Notes

These are hard constraints on the shape of the space. Any navigator variant must respect all four.

**1. The Fragment Graph is a directed graph, not a tree.** A fragment can have multiple `contains` parents (e.g., a verse that belongs to both a thematic episode cluster and a linear narrative sub-unit). Navigator variants that assume a single-parent tree structure will fail at edge cases in Phase 1 and fail systematically in Phase 3. Breadcrumb trails must resolve to the canonical NAS path, not assume uniqueness.

**2. The Parallel axis creates cross-topology jumps between otherwise separate tradition subgraphs.** In Phase 1, with one tradition and one confirmed parallel, this looks like a single bridge. In Phase 3, with 30+ parallels across 6 traditions, the cross-tradition graph becomes dense enough that navigation between traditions via parallels is a first-class movement pattern. Navigator variants must not treat cross-tradition jumps as exceptional exits — they are traversals of a confirmed edge type.

**3. The Depth axis is orthogonal to all positional axes.** A user at `nms://gilgamesh/tablet-xi/flood` at layer 0 and a user at the same address at layer 4 are at the same position in the Sequence, Containment, Parallel, and Locale dimensions. Layer switching does not change the user's position in the narrative — it changes their epistemic depth. Navigator variants that conflate depth with position (e.g., a UI where switching layers looks like forward/backward movement through the text) create systematic user confusion.

**4. Honest absence is a first-class state.** When no confirmed parallels exist for a fragment, the Parallel dimension does not have a "not yet loaded" state or a "hidden" state — it has an explicit empty state. This empty state is semantically informative: it tells the user that scholars have not confirmed structural resonances at this fragment. A navigator must render this state distinctly from loading states and error states. Collapsing honest absence into a hidden affordance (showing no Constellation Rail at all, with no explanation) violates the product's epistemic contract.
