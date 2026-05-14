---
type: wireframe
screen: Tradition Overview
route: /{locale}/gilgamesh
status: draft
date: 2026-05-13
primary-journey: Explorer (A), Resonance Seeker (C)
---

# Tradition Overview

**Route**: `/{locale}/gilgamesh`  
**NAS context**: `nms://gilgamesh` (tradition level, not Fragment level)  
**Phase 1 state**: Gilgamesh only

---

## Purpose

The Tradition Overview gives context about the Gilgamesh tradition before the user selects an episode. It establishes:
- What this epic is, where and when it comes from, why it matters
- The tablet structure (6 tablets in Phase 1 scope)
- Which episodes have confirmed cross-tradition parallels
- That cross-tradition exploration exists and is accessible from this level (via the "Cross-tradition resonances" navigation entry)

It is an orientation screen, not a reading screen. Users pass through it to reach episodes. A user who deep-links directly to an episode never sees this screen — that is correct behavior.

---

## ASCII Wireframe — Desktop

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  MNEMOSYNE ENGINE                    Gilgamesh   Parallels          [EN]  /  [RU]        │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  ─────  MESOPOTAMIAN                                                                      │
│                                                                                           │
│  The Epic of Gilgamesh                                                                    │
│  c. 2100–1200 BCE                                                                         │
│  Standard Babylonian Version · Cuneiform · Oral-to-written tradition                      │
│                                                                                           │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  The oldest surviving epic narrative. Gilgamesh, king of Uruk, is two-thirds god         │
│  and one-third human — larger than life, and unable to come to terms with the            │
│  human part. After the death of his companion Enkidu, Gilgamesh sets out to find          │
│  the secret of eternal life. He does not find it. What he finds instead is the           │
│  oldest recorded argument that a mortal life, fully lived, is enough.                    │
│                                                                                           │
│  The text survives in fragments across hundreds of clay tablets, found in                 │
│  libraries from Nineveh to Megiddo. The most complete version — the Standard             │
│  Babylonian Version, assembled in the 12th century BCE — is what we have here.           │
│                                                                                           │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  Cross-tradition resonances in this epic →                                                │
│  1 confirmed parallel — the flood narrative appears in Babylonian and Biblical traditions │
│                                                                                           │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  TABLETS                                                                                  │
│                                                                                           │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐                      │
│  │  TABLET I                    │  │  TABLET II                   │                      │
│  │  The Coming of Enkidu        │  │  The Forest Journey          │                      │
│  │                              │  │                              │                      │
│  │  Gilgamesh, king of Uruk,    │  │  Gilgamesh and Enkidu        │                      │
│  │  tyrannizes his city. The    │  │  journey to the Cedar        │                      │
│  │  gods create Enkidu to       │  │  Forest to fight Humbaba,    │                      │
│  │  balance him.                │  │  guardian of the forest.     │                      │
│  │                              │  │                              │                      │
│  │  4 episodes                  │  │  3 episodes                  │                      │
│  └──────────────────────────────┘  └──────────────────────────────┘                      │
│                                                                                           │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐                      │
│  │  TABLET III                  │  │  TABLET IV                   │                      │
│  │  The Bull of Heaven          │  │  The Death of Enkidu         │                      │
│  │                              │  │                              │                      │
│  │  Ishtar seeks Gilgamesh's    │  │  Enkidu dies as punishment   │                      │
│  │  love; he refuses. She       │  │  for killing Humbaba and     │                      │
│  │  sends the Bull of Heaven.   │  │  the Bull of Heaven.         │                      │
│  │                              │  │                              │                      │
│  │  2 episodes                  │  │  3 episodes                  │                      │
│  └──────────────────────────────┘  └──────────────────────────────┘                      │
│                                                                                           │
│  ┌──────────────────────────────┐  ┌──────────────────────────────┐                      │
│  │  TABLET V                    │  │  TABLET XI  [●]              │                      │
│  │  The Search for Immortality  │  │  The Flood                   │                      │
│  │                              │  │                              │                      │
│  │  Gilgamesh, devastated by    │  │  Utnapishtim tells           │                      │
│  │  grief, leaves the city to   │  │  Gilgamesh how he survived   │                      │
│  │  find Utnapishtim.           │  │  the great flood and was     │                      │
│  │                              │  │  granted eternal life.       │                      │
│  │  3 episodes                  │  │                              │                      │
│  └──────────────────────────────┘  │  [●] 1 confirmed parallel    │                      │
│                                    │  3 episodes                  │                      │
│                                    └──────────────────────────────┘                      │
│                                                                                           │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

**Note**: The `[●]` marker on Tablet XI signals that one or more episodes in this tablet have a confirmed cross-tradition parallel. It is a navigation affordance, not a ranking signal.

---

## ASCII Wireframe — Mobile

```
┌────────────────────────────────────┐
│  MNEMOSYNE ENGINE       [EN]/[RU]  │
│  ────────────────────────────────  │
│  ─ MESOPOTAMIAN ─────────────────  │
│                                    │
│  The Epic of Gilgamesh             │
│  c. 2100–1200 BCE                  │
│  Standard Babylonian Version       │
│                                    │
│  The oldest surviving epic.        │
│  After the death of Enkidu,        │
│  Gilgamesh searches for            │
│  immortality — and finds the       │
│  oldest argument that a mortal     │
│  life, fully lived, is enough.     │
│                                    │
│  ────────────────────────────────  │
│  Cross-tradition resonances →      │
│  1 confirmed parallel              │
│  ────────────────────────────────  │
│                                    │
│  TABLETS                           │
│                                    │
│  ┌──────────────────────────────┐  │
│  │  TABLET I                    │  │
│  │  The Coming of Enkidu        │  │
│  │  4 episodes →               │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │  TABLET II                   │  │
│  │  The Forest Journey          │  │
│  │  3 episodes →               │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │  TABLET III                  │  │
│  │  The Bull of Heaven          │  │
│  │  2 episodes →               │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │  TABLET IV                   │  │
│  │  The Death of Enkidu         │  │
│  │  3 episodes →               │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │  TABLET V                    │  │
│  │  The Search for Immortality  │  │
│  │  3 episodes →               │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │  TABLET XI  [●]              │  │
│  │  The Flood                   │  │
│  │  [●] 1 confirmed parallel    │  │
│  │  3 episodes →               │  │
│  └──────────────────────────────┘  │
└────────────────────────────────────┘
```

---

## Component Inventory

| Component | Token Reference | Notes |
|---|---|---|
| Tradition label | `--type-meta-label` mono, `--color-trad-mesopotamian` | "MESOPOTAMIAN" |
| Tradition name | `--type-display` serif | "The Epic of Gilgamesh" |
| Tradition metadata | `--type-meta` mono, `--color-text-muted` | Date, version, medium |
| Description text | `--type-body` serif | 2 paragraphs; not a Wikipedia article; uses present-tense narrative register |
| Cross-tradition link | `--type-body-medium` serif, `--color-link` | "Cross-tradition resonances in this epic →" |
| Parallel count line | `--type-caption`, `--color-text-secondary` | "1 confirmed parallel — ..." |
| Section label "TABLETS" | `--type-mono-heading` | Section separator |
| Tablet card | `--color-bg-surface`, border `--color-border-strong` | 2-col desktop, 1-col mobile |
| Tablet number | `--type-heading-3` serif, `--color-text-secondary` | "TABLET I" |
| Tablet title | `--type-heading-2` serif | "The Coming of Enkidu" |
| Tablet description | `--type-caption` serif | 2–3 sentences |
| Episode count | `--type-meta` mono | "4 episodes" |
| Parallel marker `[●]` | `--color-tier-documented`, with `aria-label` | Appears on tablet card and episode count line |

---

## States and Variants

### Tablet Card (Default)
- White/surface background, visible border, narrative description

### Tablet Card (Hover)
- Background shifts to `--color-bg-overlay`
- No border change; no shadow

### Tablet Card with Parallel (`[●]`)
- Same card as default, but a small `[●]` badge appears top-right of card title area
- A secondary line below episode count: "[●] [N] confirmed parallel(s)"
- This is a navigation affordance — clicking the card takes the user to the Tablet Hub, not directly to the parallel

### Cross-tradition Resonances Link
- Default: `--color-link`
- Hover: `--color-link-hover`, underline
- This link is always visible on the Tradition Overview — it does not hide when parallel count is 0 (Phase 1 has one confirmed parallel, so this state won't occur in Phase 1)

---

## Interaction Notes

1. Clicking a Tablet Card navigates to the Tablet Hub (`/{locale}/gilgamesh/tablet-xi`).
2. "Cross-tradition resonances in this epic →" navigates to `/{locale}/gilgamesh/parallels`.
3. The description text does not have an expand/collapse — it is shown in full. If the description is longer than ~4 sentences, the copywriter should revise, not the designer hide.
4. Locale switcher preserves current route (`/{locale}/gilgamesh`).
5. No depth selection at this level. Tablet cards always open at Layer 0 when the user navigates through the Tablet Hub to an episode.

---

## Accessibility

- Tradition label, name, and metadata are in a `<header>` landmark.
- The cross-tradition resonances link is not buried; it appears above the tablet grid, before any card.
- Tablet grid: `role="list"`, each card is `role="listitem"`.
- Parallel marker `[●]` on a card: `aria-label="Has confirmed cross-tradition parallel"`.
- Each tablet card is a link (or a `<a>` wrapper) to its Tablet Hub URL.
- Tab order: locale switcher → cross-tradition link → tablet cards (in grid order, left-right then top-bottom) → page footer.

---

## Locale Considerations

- The tradition description is authored separately in EN and RU. It is not machine-translated.
- Tradition name "Epic of Gilgamesh" is rendered in the interface locale's conventional form: English ("The Epic of Gilgamesh") vs. Russian ("Эпос о Гильгамеше").
- The "1 confirmed parallel" count and the parallel marker `[●]` are locale-agnostic (same count everywhere).
- Tablet names ("The Coming of Enkidu") are translated in the message catalog.

---

## Phase 2 Scope Hinge

When additional traditions are added, this screen pattern (tradition name + description + tablet/book grid) replicates for each tradition at its own route (`/iliad`, `/mahabharata`, etc.). The parallel count line becomes more significant when multiple parallels exist. The design does not change structurally — only the content populates differently.
