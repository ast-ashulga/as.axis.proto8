---
type: navigator-design
role: evaluation-framework
status: draft
date: 2026-05-19
---

# Navigator Variant Evaluation Framework

---

## Philosophy

**Why an objective framework over pure taste.** Navigator design for Mnemosyne Engine involves a seven-dimensional navigation manifold, two concurrent user journeys (Explorer and Scholar), Phase 1-to-Phase-3 scalability requirements, and hard epistemic integrity constraints. Pure aesthetic judgment cannot adjudicate between these competing demands. A team member who finds a design "elegant" and another who finds it "opaque" are not disagreeing about taste — they are applying different implicit weights to different criteria. This framework makes those weights explicit so disagreements can be resolved by evidence, not by whoever speaks last.

**The universe metaphor as a coherence criterion.** Mnemosyne Engine's product framing treats epic traditions as celestial objects in a navigable universe: discrete bodies (traditions), gravitational relationships (parallels), orbital structure (containment and sequence), and surface features visible at different magnifications (Onion layers). A navigator variant that uses an incompatible metaphor — filing cabinet, search results list, flashcard deck — is not merely aesthetically mismatched. It imports cognitive assumptions (items are independent, order is arbitrary, depth is a secondary filter) that actively conflict with the structure of the manifold. Metaphor coherence is a navigability criterion.

**Scalability as a non-negotiable.** Phase 1 with one tradition and ~600 fragments is the smallest the system will ever be. A navigator variant that is beautiful at Phase 1 scale and unusable at Phase 3 scale (6 traditions, 3000+ fragments, 30+ parallels) is not a Phase 1 solution — it is a prototype that will require a full rebuild at the worst possible moment (when the product is acquiring its first serious users). Scalability scoring evaluates whether the design degrades gracefully or breaks structurally at Phase 3 volume. "We'll deal with that later" is not acceptable; Phase 3 degradation is assessed at evaluation time.

**Honest absence as a product-integrity criterion.** Mnemosyne Engine's primary differentiator is epistemic honesty — the system cannot serve content that overstates its evidential basis. A navigator variant that silently hides missing parallels, empty tracks, or absent layers fails this standard at the UI level regardless of the schema enforcement below it. "Honest absence" is scored as a product-integrity criterion, not an edge-case consideration. A navigator that scores low here fails on the product's core promise.

---

## Evaluation Criteria Matrix

Weights sum to 1.00. Each criterion is scored 1–5 using the anchor descriptions below.

---

### Criterion 1 — Dimensional Coverage

**Weight**: 0.20

**Definition**: How many of the 7 navigation axes are surfaced as accessible affordances, and how many interactions does it take to reach each one?

| Score | Description |
|---|---|
| **1** | Surfaces 0–2 of the 7 axes as accessible affordances. The other axes are not reachable from the navigator UI — the user would need to manually edit the URL or know a direct link. Confidence Tier (K) is not visually present on any content. |
| **3** | Surfaces 4–5 axes as accessible affordances. One or two non-critical axes (e.g., annotation tracks, locale) require navigating to a settings panel or a separate page. Confidence Tier is present but only on hover or behind a disclosure control. Parallel axis is accessible but not prominently afforded. |
| **5** | All 7 axes are surfaced or reachable within ≤2 interactions from any Fragment View. The three orthogonal axes (Depth, Annotation Track, Locale) do not require leaving the current NAS context to activate. Confidence Tier is visible on every content item without interaction. The Parallel axis is visually distinct from sequence navigation and includes an explicit honest-absence state. |

---

### Criterion 2 — Cognitive Load at First Encounter

**Weight**: 0.15

**Definition**: Can a new user who has never used Mnemosyne Engine understand what they are looking at within 5 seconds of landing on a Fragment View, without reading any documentation?

| Score | Description |
|---|---|
| **1** | A new user cannot identify: (a) what tradition/tablet/episode they are in, (b) what the confidence tier of the content means, or (c) how to navigate to adjacent content. The UI presents multiple competing affordances of roughly equal visual weight with no clear primary action. User testing would show mean comprehension below 40% at 5 seconds. |
| **3** | A new user can identify where they are (containment context is clear) and can find a primary action (e.g., read the passage). The Depth switcher (Onion layers) and Parallel affordance are visible but their meaning is not self-evident — a tooltip or label is needed. User testing would show mean comprehension of spatial context around 60–70% at 5 seconds. |
| **5** | A new user can state, without assistance: (a) what tradition and episode they are reading, (b) what layer of depth they are at and that other layers exist, (c) that the confidence badge represents the evidentiary status of the content, and (d) how to go to the next episode or an adjacent parallel if one exists. Each affordance has a visible text label, not only an icon. User testing would show mean comprehension above 85% at 5 seconds. |

---

### Criterion 3 — Phase 3 Scalability

**Weight**: 0.15

**Definition**: Does the navigator variant remain navigable and non-broken at Phase 3 projected volume (6 traditions, ~3000 fragments, ~30+ confirmed parallels)?

| Score | Description |
|---|---|
| **1** | The variant structurally breaks at Phase 3 volume. A tradition-selector affordance that works as 6 items overflows its container and requires a redesign. A parallels list that shows 1 item in Phase 1 becomes unusable at 30+ items with no filtering or grouping affordance. Navigation between traditions requires a full-page reload with no state preservation. |
| **3** | The variant degrades at Phase 3 but does not break. Primary navigation paths remain functional. Secondary affordances (e.g., a full traditions dropdown, a parallels index link) become visually cluttered but remain usable. A developer would need to revisit component sizing and information density but not rebuild the navigation model. |
| **5** | The variant anticipates Phase 3 scale without requiring a redesign. Tradition selection is represented as a composable component that scales from 1 to 6 items with the same affordance model. Parallel navigation uses a pattern (e.g., typed parallel list with filtering by relationship type) that remains navigable at 30+ items. Sequence navigation across ~3000 fragments uses a virtualized or pagination-aware affordance that does not load all fragments simultaneously. |

---

### Criterion 4 — Honest Absence

**Weight**: 0.15

**Definition**: Does the navigator correctly and legibly represent the state where no confirmed parallels exist for the current fragment — without hiding it, disguising it as an error, or filling it with placeholder content?

| Score | Description |
|---|---|
| **1** | When no confirmed parallels exist: (a) the Constellation Rail or equivalent affordance is hidden entirely with no explanation, or (b) it shows teaser content ("More parallels coming soon") that implies absence is temporary rather than factual, or (c) it shows a generic error state (spinner, broken icon) that is indistinguishable from a loading failure. The user has no way to know whether the absence is real or a UI bug. |
| **3** | When no confirmed parallels exist, an empty state is displayed. The empty state is distinct from a loading state. However, the copy is generic ("No parallels found" or "No results") rather than semantically tuned — it does not communicate that the absence is a factual scholarly state, not a data gap. A user who reads it carefully can infer the meaning, but the affordance does not actively inform. |
| **5** | When no confirmed parallels exist, the navigator displays a labeled empty state that: (a) uses copy explicitly stating that no confirmed structural parallels have been identified by scholars for this fragment, (b) is visually distinct from loading states (different icon, different copy register) and from error states (no red, no warning language), and (c) treats the absence as information, not as a problem. The Confidence Tier badge remains visible on the fragment itself. The user understands they are reading a real content state, not a broken UI. |

---

### Criterion 5 — Mobile Viability

**Weight**: 0.10

**Definition**: Is the navigator usable at 375px viewport width (iPhone SE / smallest common modern phone) without losing access to any primary navigation dimension?

| Score | Description |
|---|---|
| **1** | At 375px, one or more primary navigation affordances (Depth layer switcher, sequence navigation, parallel strip) are hidden by overflow, truncated to illegibility, or require horizontal scroll to access. The user cannot reach at least one of the axes D, S, C, or P without zooming or a desktop breakpoint. The confidence tier badge is too small to read without zooming. |
| **3** | At 375px, all primary affordances are reachable but two or more are collapsed into a menu or bottom sheet that requires a deliberate additional tap to open. The reading experience (content area) remains functional. Annotation tracks (T) and locale (L) may be moved to a secondary navigation layer without penalty at this score level. |
| **5** | At 375px, the fragment reading experience, Depth layer switching, and Parallel access (or explicit honest-absence state) are all accessible without additional navigation steps. Sequence navigation (prev/next) is reachable with one tap. The Confidence Tier badge is legible at mobile font sizes without zoom. Annotation tracks and Locale switcher may be in a secondary nav (hamburger or bottom bar) without penalty. |

---

### Criterion 6 — Implementation Cost

**Weight**: 0.10

**Definition**: How complex is it to build this navigator variant with the current stack (Astro + TypeScript + Fragment Graph backend), and does it introduce architecture that is difficult to evolve?

| Score | Description |
|---|---|
| **1** | Requires introducing a third-party visualization library with no existing project precedent (e.g., a force-directed graph renderer, a custom WebGL canvas). Requires Fragment Graph traversal on the client side (shipping graph data structures to the browser). Requires state management infrastructure not currently in the project. Estimated build time: 6–10 weeks for a senior engineer. |
| **3** | Requires one non-trivial custom component (e.g., a multi-column parallel layout, a track overlay) but uses only existing Astro component patterns and TypeScript types. Fragment Graph queries are resolved server-side; the client receives flat data. Requires careful but not extraordinary CSS layout work for responsive behavior. Estimated build time: 2–4 weeks for a senior engineer. |
| **5** | Built entirely from composable Astro components following existing project patterns. No new architectural dependencies. Fragment Graph queries are standard NAS-addressed lookups. All responsive behaviors follow existing breakpoint patterns from the design system. The navigator could be implemented by a mid-level engineer reading the existing codebase without architectural guidance. Estimated build time: under 2 weeks for a senior engineer. |

---

### Criterion 7 — Metaphor Coherence

**Weight**: 0.10

**Definition**: How faithfully does the navigator embody the universe/cosmological navigation metaphor — traditions as distinct celestial bodies, parallels as gravitational relationships, depth layers as magnification — without importing contradictory metaphors?

| Score | Description |
|---|---|
| **1** | The navigator's primary spatial metaphor is explicitly contradictory: e.g., a filing cabinet (items are independent and categorically stored), a search results list (items are ranked by relevance, not structurally related), or a timeline (items are chronologically ordered, traditions are sequential). Users would form a mental model of the content space that the actual navigation structure contradicts. |
| **3** | The navigator does not use a contradictory metaphor, but does not actively reinforce the universe/cosmological framing. It is spatially neutral — functional but not evocative. It treats the product like a structured document reader or a knowledge base. No interaction design element communicates that traditions are peer civilizations or that parallels are structural resonances rather than ranked similarities. |
| **5** | The navigator's visual and interaction design actively reinforces the universe metaphor. Traditions are represented as peer, equally-weighted bodies — no tradition is subordinated or listed as secondary. Parallel relationships are visually distinguished from hierarchical containment (different edge/affordance type). Depth layers are communicated as magnification or epistemic altitude, not as a linear sequence of separate documents. Cross-tradition navigation feels like traversal across a connected graph, not like switching between isolated wikis. |

---

### Criterion 8 — Accessibility

**Weight**: 0.05

**Definition**: Does the navigator work for users who navigate via keyboard, use screen readers, or cannot rely on color as the sole affordance for meaning?

| Score | Description |
|---|---|
| **1** | One or more of: (a) Confidence Tier is communicated by color alone with no text label or icon — users with color vision deficiency cannot distinguish tiers; (b) depth layer switcher, sequence navigation, or parallel strip is not keyboard-reachable (no focus state, no tab order); (c) screen reader announces no meaningful landmark structure — all navigation is in generic `div` elements with no ARIA roles. |
| **3** | Confidence Tier uses both color and a text label (tier name visible). Primary navigation elements (depth switcher, next/prev, locale) are keyboard-reachable in logical tab order. Screen reader can navigate to primary content. However: some secondary affordances (parallel strip, annotation track controls) do not have ARIA labels; focus styles are present but not clearly visible (low contrast). |
| **5** | All confidence tier affordances use color + text label + icon (three independent signals; none alone carries the full meaning). All interactive affordances — including parallel strip, annotation track toggles, depth layer switcher, locale switcher — are keyboard-reachable with visible high-contrast focus states. Screen reader users can navigate by landmark (`<main>`, `<nav>`, `<aside>` for constellation rail). Empty states (honest absence) are announced by screen readers with meaningful text, not silent DOM removal. |

---

## Weight Summary

| Criterion | Weight |
|---|---|
| Dimensional coverage | 0.20 |
| Cognitive load at first encounter | 0.15 |
| Phase 3 scalability | 0.15 |
| Honest absence | 0.15 |
| Mobile viability | 0.10 |
| Implementation cost | 0.10 |
| Metaphor coherence | 0.10 |
| Accessibility | 0.05 |
| **Total** | **1.00** |

---

## Scoring Template

Fill in each cell with a score (1–5) and a one-line justification. Compute weighted score per criterion. Sum for final score.

| Criterion | Weight | V1 Celestial Sphere | V2 Spacetime Cursor | V3 Light Cone | V4 Geodesic Graph | V5 Onion Radial |
|---|---|---|---|---|---|---|
| Dimensional coverage | 0.20 | — | — | — | — | — |
| Cognitive load | 0.15 | — | — | — | — | — |
| Phase 3 scalability | 0.15 | — | — | — | — | — |
| Honest absence | 0.15 | — | — | — | — | — |
| Mobile viability | 0.10 | — | — | — | — | — |
| Implementation cost | 0.10 | — | — | — | — | — |
| Metaphor coherence | 0.10 | — | — | — | — | — |
| Accessibility | 0.05 | — | — | — | — | — |
| **Weighted total** | — | — | — | — | — | — |

Weighted total for each variant = sum of (score × weight) across all 8 criteria.

---

## Worked Example — V0: Simple Breadcrumb Trail

This variant uses a top-of-page breadcrumb showing `Gilgamesh > Tablet XI > The Flood`, a layer switcher row (three tabs: Surface / Translated / Scholaria), prev/next arrows for sequence navigation, and no visible parallel affordance or track controls. The confidence tier badge appears on the content header only.

**Dimensional coverage — score: 2 (weighted: 0.40)**  
Surfaces D (layer tabs), C (breadcrumb), S (prev/next arrows) — 3 of 7 axes. P (parallel) has no affordance and no honest-absence state. T (annotation tracks) has no entry point. L (locale) is in the global header but not in the navigator component. K (confidence tier) appears on the content header only — not in the breadcrumb, not in layer tabs.

**Cognitive load — score: 4 (weighted: 0.60)**  
New users can immediately identify their location (breadcrumb is universally understood), the layer they are at (tab label), and how to move forward/back (arrows with text labels). Minor deduction: "Scholaria" is not self-explanatory to a first-time user.

**Phase 3 scalability — score: 3 (weighted: 0.45)**  
Breadcrumb degrades gracefully at Phase 3. Adding traditions adds one more breadcrumb level but does not break the model. Deduction: no parallel navigation affordance means there is nothing in this navigator to scale up to as the parallel graph grows to 30+ edges.

**Honest absence — score: 1 (weighted: 0.15)**  
No parallel affordance exists. The user cannot distinguish "this fragment has no confirmed parallels" from "this navigator doesn't support parallels."

**Mobile viability — score: 4 (weighted: 0.40)**  
Breadcrumb + 3 tabs + prev/next arrows fit cleanly at 375px. Minor deduction: the breadcrumb may truncate at deep NAS paths.

**Implementation cost — score: 5 (weighted: 0.50)**  
Standard Astro component patterns. No new architectural dependencies. Build estimate: under 1 week.

**Metaphor coherence — score: 2 (weighted: 0.20)**  
Breadcrumb + tabs is a document viewer metaphor. No reinforcement of the cosmological framing. Functionally neutral — no contradictory metaphor introduced, but no universe metaphor support.

**Accessibility — score: 3 (weighted: 0.15)**  
Confidence tier uses color + text label. Breadcrumb, tabs, and arrows are keyboard-reachable. Deduction: no landmark structure around the navigator component.

**Weighted total: 0.40 + 0.60 + 0.45 + 0.15 + 0.40 + 0.50 + 0.20 + 0.15 = 2.85**

**Verdict: Discard.** Fatal weakness: Dimensional Coverage (score 2) and Honest Absence (score 1). The Parallel axis is entirely absent. Acceptable as a sub-component inside a more complete navigator, not as the primary navigation model.

---

## Verdict Protocol

### Score Interpretation

| Weighted Total | Verdict | Action |
|---|---|---|
| 4.0 – 5.0 | **Shippable for Phase 1** | Proceed to implementation. Document any criterion scoring below 3 as a known gap with a Phase 2 remediation plan. |
| 3.0 – 3.9 | **Needs iteration** | Identify the two lowest-scoring criteria. Return the variant with explicit design changes targeting those criteria. Re-score before building. Do not proceed to implementation without re-score. |
| Below 3.0 | **Discard** | The variant has structural weaknesses that cannot be patched without redesigning the core model. Document which criteria blocked it and feed those findings into the next variant's design brief. |

### Minimum per-criterion floors

A variant may reach a weighted total of 4.0 and still require iteration if any of the following criteria score below 2:

- **Dimensional Coverage**: a score of 1 means core navigation axes are inaccessible, regardless of other criterion scores.
- **Honest Absence**: a score of 1 means the product's epistemic integrity contract is broken at the UI level. This is a hard floor — a variant that scores 1 here does not ship regardless of weighted total.
- **Confidence Tier visibility** (as component of Dimensional Coverage and Accessibility): if the confidence tier is communicated by color only with no text label, the variant does not ship regardless of weighted total.

### Tie-breaking

If two variants reach scores within 0.2 weighted points of each other in the "shippable" band, prefer the variant with the higher **Dimensional Coverage** score. If Dimensional Coverage scores are equal, prefer the variant with higher **Phase 3 Scalability**, as architectural debt at Phase 1 scale is more expensive to carry than any aesthetic shortfall.

### Score auditing

Scores are not final until at least two team members have applied the rubric independently and compared results. Disagreements of 2 or more points on any criterion must be resolved before the score is recorded — either by returning to the anchor descriptions to identify which observable behavior the variant actually exhibits, or by building a throwaway prototype to test the contested behavior directly.
