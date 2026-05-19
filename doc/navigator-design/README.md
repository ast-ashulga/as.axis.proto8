---
type: navigator-design
role: index
status: draft
date: 2026-05-19
---

# Navigator Design Exploration

This directory contains design exploration for the Mnemosyne Engine **Navigator Component** — a component that shows users where they can move from any given position across all spatial axes of the content space.

---

## The problem

Mnemosyne Engine's content occupies a 7-dimensional manifold:

| Axis | Type | What it means |
|---|---|---|
| Depth (D) | Ordinal | Surface → Translated → Scholaria (Onion layers) |
| Sequence (S) | Linear | Prev/next fragment within a tradition |
| Containment (C) | Hierarchical | tradition → tablet → episode → unit (NAS hierarchy) |
| Parallel (P) | Discrete jumps | Cross-tradition structural resonances (confirmed only) |
| Track (T) | Overlay | Propp / Bakhtin / TMI annotation dimensions |
| Confidence Tier (K) | Field | Documented / Reconstructed / Contested / Inspired |
| Locale (L) | Orthogonal | EN / RU (NAS-neutral) |

No existing navigation pattern covers this space. A breadcrumb covers C. A layer switcher covers D. A prev/next strip covers S. A constellation rail covers P. None of them shows the user "what can I see from here, across all axes simultaneously."

The conceptual brief: draw on the mathematics and physics of the observable universe — a closed, self-similar space that looks homogeneous and isotropic from any observer position — to design a navigator that feels like an instrument for exploring a structured epistemic space.

---

## Documents in this directory

| File | What it is |
|---|---|
| `00-navigator-space.md` | Dimensional specification — the full 7-axis manifold; authoritative reference for all variants |
| `evaluation.md` | Evaluation framework — 8-criterion scoring rubric with weights; worked example; verdict protocol |
| `01-celestial-sphere.md` | Variant 1: observer at center of a sphere; depth = elevation, sequence = azimuth, parallels = separate sky band |
| `02-spacetime-cursor.md` | Variant 2: explicit coordinate HUD; 4-tuple readout with per-axis increment controls |
| `03-light-cone.md` | Variant 3: past/future cones for narrative sequence; parallels as spacelike-separated |
| `04-geodesic-graph.md` | Variant 4: typed-edge graph; current fragment as node; zoom levels (Node/Tablet/Tradition) |
| `05-onion-radial.md` | Variant 5: concentric depth rings × radial parallel spokes; integrated single diagram |

---

## Evaluation sequence

1. Read `00-navigator-space.md` first — establishes what every variant must cover
2. Read `evaluation.md` — establishes how variants are scored
3. Read each variant document independently
4. Apply the scoring template from `evaluation.md` to each variant
5. Use the Verdict Protocol to determine shippable candidates

---

## Hard constraints (from PRD and design system)

- All visual values must reference `00-styling.md` tokens — no new token names introduced here
- `candidate` status parallels are **never** shown to users — only `confirmed` parallels appear in any navigator
- NAS addresses are locale-neutral — navigator displays NAS, not URL paths
- Honest absence is a product-integrity requirement — the navigator must represent "no parallels confirmed here" explicitly, not silently hide it
- Phase 1 has 1 tradition and 1 confirmed parallel; every variant must demonstrate it does not break at Phase 3 scale (6 traditions, ~30 parallels)
