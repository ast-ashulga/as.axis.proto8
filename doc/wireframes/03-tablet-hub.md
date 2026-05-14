---
type: wireframe
screen: Tablet Hub (Episode Navigation)
route: /{locale}/gilgamesh/tablet-xi
status: draft
date: 2026-05-13
primary-journey: Explorer (A), Scholar (B)
---

# Tablet Hub

**Route**: `/{locale}/gilgamesh/tablet-xi` (example; applies to all tablets)  
**NAS context**: `nms://gilgamesh/tablet-xi`  
**Phase 1 state**: Six tablets, with Tablet XI having confirmed parallels

---

## Purpose

The Tablet Hub is a navigation screen. It presents the episode list for a specific tablet of Gilgamesh, with enough context about each episode to help the user choose where to go. It does not contain reading content — it routes the user to the Fragment View.

The Tablet Hub also serves scholars who need to navigate quickly to a specific episode by NAS address. The NAS address is visible in small text beneath each episode title.

The key feature is the `[●]` parallel marker on episodes with confirmed cross-tradition parallels. This marker appears in the Tradition Overview (on the tablet card) and propagates to the episode list here, maintaining visual continuity.

---

## ASCII Wireframe — Desktop

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  MNEMOSYNE ENGINE                    Gilgamesh   Parallels          [EN]  /  [RU]        │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  Gilgamesh  ›  Tablet XI                                                                  │
│                                                                                           │
│  TABLET XI                                                          [◑ RECONSTRUCTED]    │
│  The Flood Tablet                                                                         │
│                                                                                           │
│  The best-preserved tablet of the Standard Babylonian Version. Lines 1–196               │
│  contain the flood narrative; the rest records Utnapishtim's challenge and               │
│  Gilgamesh's failure, followed by a coda added in the 12th century BCE.                  │
│                                                                                           │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  EPISODES                                                                                 │
│                                                                                           │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐     │
│  │                                                                                 │     │
│  │  [●] THE FLOOD EPISODE                                                          │     │
│  │      The gods decree a flood to destroy humanity. Utnapishtim is warned by      │     │
│  │      Ea and builds a great boat. The flood comes, subsides, and the gods         │     │
│  │      quarrel over the outcome.                                                  │     │
│  │      nms://gilgamesh/tablet-xi/flood             [●] 1 confirmed parallel       │     │
│  │                                                                                 │     │
│  └─────────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                           │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐     │
│  │                                                                                 │     │
│  │  UTNAPISHTIM'S CHALLENGE                                                        │     │
│  │  Utnapishtim offers Gilgamesh a challenge: stay awake for seven days.            │     │
│  │  Gilgamesh sleeps immediately. The failure is documented by loaves of bread.    │     │
│  │  nms://gilgamesh/tablet-xi/sleep-challenge                                      │     │
│  │                                                                                 │     │
│  └─────────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                           │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐     │
│  │                                                                                 │     │
│  │  THE PLANT OF IMMORTALITY                                                       │     │
│  │  Utnapishtim's wife reveals the location of a plant that restores youth.        │     │
│  │  Gilgamesh dives for it, finds it — and then loses it to a serpent.             │     │
│  │  nms://gilgamesh/tablet-xi/plant                                                │     │
│  │                                                                                 │     │
│  └─────────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                           │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│  ←  Tablet V · The Search for Immortality               Tablet XII · The Netherworld  → │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## ASCII Wireframe — Mobile

```
┌────────────────────────────────────┐
│  MNEMOSYNE ENGINE       [EN]/[RU]  │
│  ────────────────────────────────  │
│  Gilgamesh › Tablet XI             │
│                                    │
│  TABLET XI                         │
│  The Flood Tablet                  │
│  [◑ RECONSTRUCTED]                 │
│                                    │
│  The best-preserved tablet of the  │
│  Standard Babylonian Version.      │
│  Lines 1–196 contain the flood.    │
│                                    │
│  ────────────────────────────────  │
│  EPISODES                          │
│                                    │
│  ┌──────────────────────────────┐  │
│  │  [●] THE FLOOD EPISODE       │  │
│  │  The gods decree a flood...  │  │
│  │  nms://…/tablet-xi/flood     │  │
│  │  [●] 1 confirmed parallel    │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │  UTNAPISHTIM'S CHALLENGE     │  │
│  │  Gilgamesh fails to stay     │  │
│  │  awake for seven days.       │  │
│  │  nms://…/sleep-challenge     │  │
│  └──────────────────────────────┘  │
│                                    │
│  ┌──────────────────────────────┐  │
│  │  THE PLANT OF IMMORTALITY    │  │
│  │  Gilgamesh finds and loses   │  │
│  │  the plant of youth.         │  │
│  │  nms://…/plant               │  │
│  └──────────────────────────────┘  │
│                                    │
│  ────────────────────────────────  │
│  ← Tablet V                        │
│  → Tablet XII                      │
└────────────────────────────────────┘
```

---

## Component Inventory

| Component | Token Reference | Notes |
|---|---|---|
| Breadcrumb | `--type-caption`, `--color-text-secondary` | "Gilgamesh › Tablet XI" |
| Tablet number | `--type-heading-1` serif | "TABLET XI" |
| Tablet title | `--type-heading-2` serif, `--color-text-primary` | "The Flood Tablet" |
| Tablet tier badge | Tier badge component per 00-styling.md §5 | Tablet completeness tier |
| Tablet description | `--type-body` serif | 2–3 sentences; contextual |
| Section label "EPISODES" | `--type-mono-heading` | |
| Episode card | `--color-bg-surface`, full-width, `--color-border-subtle` border | Vertically stacked |
| Episode title | `--type-heading-3` serif | |
| Episode description | `--type-caption` serif | 2–3 sentences; narrative register |
| NAS address (in card) | `--type-meta` mono, `--color-text-muted` | Always visible beneath title |
| Parallel marker `[●]` | Icon + `--type-meta` mono | Inline with episode title; small count label below |
| Tablet navigation | `--type-caption`, `--color-link` | ← → between tablets |

---

## States and Variants

### Episode Card: No Parallel
Standard card. No `[●]` marker. NAS address in muted mono.

### Episode Card: Has Parallel
Identical to standard card with additions:
- `[●]` marker immediately after episode title
- A secondary line at bottom of card: "[●] N confirmed parallel(s)"
- The `[●]` marker is informational here; clicking it does not navigate to the parallel (user must open the episode first, then use the Parallel strip)

### Episode Card Hover
- Background shifts to `--color-bg-overlay`
- NAS address does not change color
- Entire card is clickable (not just the title)

---

## Interaction Notes

1. Each episode card is a full-width link. Clicking navigates to the Fragment View at Layer 0 for that episode: `/{locale}/gilgamesh/tablet-xi/flood`.
2. NAS address in the card is displayable text, not a hyperlink. Copying it requires right-click or a manual copy gesture (no `[copy]` affordance on list view — the `[copy]` affordance is on the Fragment View).
3. Tablet navigation links (← →) navigate to adjacent tablet hubs.
4. Tablet tier badge is clickable — opens the badge expansion showing tablet-level epistemic context (e.g., "Partially reconstructed: several lines in this tablet are missing or damaged").
5. No layer selection on this screen. Episodes always open at Layer 0.

---

## Accessibility

- Episode list: `role="list"`, cards are `role="listitem"` wrapping `<a>`.
- Parallel marker: `aria-label="This episode has confirmed cross-tradition parallels"`.
- Episode title link: `aria-label="Open [Episode Title]"`.
- Tablet navigation: `aria-label="Previous tablet"` and `aria-label="Next tablet"`.
- NAS address: `aria-label="NAS address: nms://gilgamesh/tablet-xi/flood"`.
- Breadcrumb: `aria-label="Breadcrumb navigation"`, current page marked `aria-current="page"`.

---

## Locale Considerations

- Episode titles and descriptions are localized from the editorial content database.
- NAS addresses are locale-neutral — `nms://gilgamesh/tablet-xi/flood` regardless of interface locale.
- Tablet tier badge labels are localized from the message catalog.
- "1 confirmed parallel" count line is constructed from a message catalog template: `{count} confirmed parallel(s)`.
