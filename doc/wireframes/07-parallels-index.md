---
type: wireframe
screen: Parallels Index
route: /{locale}/gilgamesh/parallels
status: draft
date: 2026-05-13
primary-journey: Explorer (A) discovering cross-tradition scope; Scholar (B) scanning parallel inventory
---

# Parallels Index

**Route**: `/{locale}/gilgamesh/parallels`  
**NAS context**: tradition level — `nms://gilgamesh` (parallel relationships, not a single Fragment)  
**Phase 1 state**: One confirmed parallel — the flood narrative

---

## Purpose

The Parallels Index lists all confirmed cross-tradition parallels for the Gilgamesh tradition. It is the answer to the navigation entry on the Tradition Overview: "Cross-tradition resonances in this epic →".

In Phase 1, it contains exactly one entry. The design must make that one entry feel complete and principled — not sparse or half-finished. One parallel is enough to demonstrate the platform's promise. The index exists so that Explorers who arrive at any episode (not just the flood episode) can find the cross-tradition dimension.

The index is also the right place to explain, once, what a "structural resonance" means and what the parallel types represent. This explanation does not need to appear on every parallel card or on the Fragment View.

---

## ASCII Wireframe — Desktop

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  MNEMOSYNE ENGINE                    Gilgamesh   Parallels          [EN]  /  [RU]        │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  Gilgamesh  ›  Cross-tradition resonances                                                 │
│                                                                                           │
│  CROSS-TRADITION RESONANCES                                                               │
│  Structural parallels in the Epic of Gilgamesh                                            │
│  1 confirmed parallel                                                                     │
│                                                                                           │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  About structural resonances                                                              │
│                                                                                           │
│  A structural resonance is not a claim that one tradition borrowed from another.          │
│  It is a documented observation that two or more traditions share a recognizable          │
│  narrative shape — a similar sequence of events, a similar human situation, a similar     │
│  structural function for a character or event.                                            │
│                                                                                           │
│  All parallels here have been confirmed by a scholar after review. Computationally-       │
│  detected candidate parallels are never shown publicly until a scholar has reviewed       │
│  and confirmed them.                                                                      │
│                                                                                           │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐     │
│  │                                                                                 │     │
│  │  [● DOCUMENTED]  The Great Flood                                                │     │
│  │  Gilgamesh (Tablet XI) ↔ Genesis 6–9 (KJV)                                    │     │
│  │                                                                                 │     │
│  │  Both traditions depict a divine judgment by flood, a chosen survivor           │     │
│  │  warned through an indirect channel, and birds sent to find dry land.           │     │
│  │  The structure is shared; what the survivor receives is not.                    │     │
│  │                                                                                 │     │
│  │  Type: Shared human condition — not a shared source                             │     │
│  │  Traditions: Mesopotamian · Hebrew / Biblical                                   │     │
│  │  Traditions fully onboarded in Phase 1: Mesopotamian (Gilgamesh)                │     │
│  │                                                                                 │     │
│  │                                          [Read this parallel →]                 │     │
│  │                                                                                 │     │
│  └─────────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                           │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  PARALLEL TYPES                                                                           │
│                                                                                           │
│  ┌──────────────────────────┐  ┌──────────────────────────┐  ┌──────────────────────┐  │
│  │  Shared human condition  │  │  Shared narrative shape  │  │  Shared social       │  │
│  │                          │  │                          │  │  pattern             │  │
│  │  Two traditions address  │  │  Two traditions share a  │  │  Two traditions      │  │
│  │  the same fundamental    │  │  recognizable narrative  │  │  exhibit a parallel  │  │
│  │  human situation — grief,│  │  sequence — possibly     │  │  social or           │  │
│  │  mortality, fate — from  │  │  through historical      │  │  institutional       │  │
│  │  their own theological   │  │  contact, or through     │  │  pattern,            │  │
│  │  or philosophical angle. │  │  convergent evolution.   │  │  independently       │  │
│  │                          │  │                          │  │  arrived at.         │  │
│  │  (psychological_typo-    │  │  (literary_typological)  │  │  (socio_typological) │  │
│  │  logical)                │  │                          │  │                      │  │
│  └──────────────────────────┘  └──────────────────────────┘  └──────────────────────┘  │
│                                                                                           │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## ASCII Wireframe — Mobile

```
┌────────────────────────────────────┐
│  MNEMOSYNE ENGINE       [EN]/[RU]  │
│  Gilgamesh › Resonances           │
│  ────────────────────────────────  │
│                                    │
│  CROSS-TRADITION RESONANCES        │
│  1 confirmed parallel              │
│                                    │
│  About structural resonances       │
│  A structural resonance is not a   │
│  claim that one tradition borrowed │
│  from another. It is a documented  │
│  observation of shared narrative   │
│  shape...                          │
│  [read more ▾]                     │
│                                    │
│  ────────────────────────────────  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │  [● DOCUMENTED]              │  │
│  │  The Great Flood             │  │
│  │  Gilgamesh ↔ Genesis 6–9    │  │
│  │                              │  │
│  │  Divine flood judgment,      │  │
│  │  chosen survivor, birds to   │  │
│  │  find land. Same structure;  │  │
│  │  different answers.          │  │
│  │                              │  │
│  │  Type: Shared human          │  │
│  │  condition                   │  │
│  │                              │  │
│  │  [Read this parallel →]      │  │
│  └──────────────────────────────┘  │
│                                    │
│  ────────────────────────────────  │
│  PARALLEL TYPES                    │
│  ────────────────────────────────  │
│                                    │
│  Shared human condition            │
│  Two traditions address the same   │
│  fundamental human situation from  │
│  their own angle.                  │
│                                    │
│  Shared narrative shape            │
│  A recognizable narrative sequence │
│  — possibly through contact, or    │
│  convergent evolution.             │
│                                    │
│  Shared social pattern             │
│  A parallel social or institutional│
│  pattern, independently arrived at.│
└────────────────────────────────────┘
```

---

## Component Inventory

| Component | Token Reference | Notes |
|---|---|---|
| Page heading | `--type-heading-1` serif | "CROSS-TRADITION RESONANCES" |
| Parallel count | `--type-caption` mono, `--color-text-muted` | "1 confirmed parallel" |
| About section | `--type-body` serif, `--color-text-secondary` | Explains what a structural resonance is |
| Parallel card | `--color-bg-surface`, `--color-border-subtle` border | Full-width on this page |
| Card confidence badge | Tier badge component | `[● DOCUMENTED]` |
| Card title | `--type-heading-2` serif | "The Great Flood" |
| Traditions line | `--type-caption` mono | "Gilgamesh ↔ Genesis 6–9 (KJV)" |
| Card description | `--type-body` serif | 2–3 sentence summary of what resonates |
| Parallel type | `--type-caption`, `--color-text-secondary` | Plain language type |
| Traditions list | `--type-meta` mono | Bullet list of traditions in parallel |
| "Traditions fully onboarded" | `--type-meta`, `--color-text-muted` | Phase 1 scope disclosure |
| CTA link | `--type-body-medium`, `--color-link` | "Read this parallel →" |
| Parallel types section | `--color-bg-inset`, 3-column grid | Explanation of the three parallel type labels |
| Type card | `--color-bg-surface`, `--space-4` padding | Explanation of one parallel type |
| Technical type name | `--type-meta` mono, `--color-text-muted`, italic | Database value shown in parentheses for scholar reference |

---

## States and Variants

### Parallel Card (Phase 1 — One Entry)
The card looks exactly the same as when there are multiple entries. The page does not apologize for having one parallel. The "About structural resonances" section provides enough context that one entry reads as authoritative rather than sparse.

### Empty State (if all parallels are pending review)
This should not occur in production for Phase 1 — one parallel is confirmed. But if it did:
```
No confirmed parallels are available for this tradition yet.
Candidate parallels are under scholarly review.
```
No spinner, no "check back soon", no placeholder card.

---

## Interaction Notes

1. "Read this parallel →" links to `/{locale}/gilgamesh/parallels/flood`.
2. "About structural resonances" text is visible by default — not hidden behind a toggle. On mobile, a `[read more ▾]` can truncate after 2 sentences if necessary for space.
3. Parallel type cards at the bottom are informational only — not navigational. They are not links.
4. Locale switcher preserves current route `/{locale}/gilgamesh/parallels`.

---

## Accessibility

- Page uses `<main>` landmark.
- Parallel card: `role="article"`.
- CTA link: descriptive `aria-label="Read the Great Flood parallel — Gilgamesh and Genesis 6–9"`.
- Parallel type explanation cards: `role="list"` + `role="listitem"`, purely informational.
- "About structural resonances" section: `role="note"` or `<aside>`.

---

## Phase 2 Scope Hinge

When additional parallels are confirmed, this index grows as a simple list of Parallel cards. If the count exceeds 6–8, filtering by parallel type becomes useful. In Phase 2 with multiple traditions, a global parallels index at `/{locale}/parallels` lists all confirmed parallels across all active traditions. The tradition-specific index (`/{locale}/gilgamesh/parallels`) remains as the tradition-filtered view.
