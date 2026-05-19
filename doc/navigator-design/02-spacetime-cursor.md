---
type: navigator-design
variant: 2
name: Spacetime Coordinate Cursor
status: draft
date: 2026-05-19
---

# Navigator Variant 2: Spacetime Coordinate Cursor

## 1. Concept and Metaphor

In physics, a coordinate system makes a position in spacetime legible — not by painting a picture of the space, but by naming the values along each independent axis. A particle's state is a 4-tuple. You know exactly where it is. You know exactly how to increment any coordinate independently of the others. The interface as instrument: precise, honest, inspectable.

This variant treats the navigator as a heads-up display (HUD) — an explicit readout of the user's current position in the manifold, with directional affordances per axis. The user sees their coordinates at all times. Changing any coordinate is a discrete, labeled operation. The design deliberately avoids spatial metaphor: there is no sphere, no graph, no cone. There is a position and a set of axes you can traverse.

The physics analogy: Minkowski spacetime uses four independent coordinates (three spatial, one temporal). Our manifold has seven, but three of them (locale, annotation track, confidence tier) are not "positional" — they are filters or views on the same position. The navigator exposes the four positional axes as primary, and the three view-modifiers as secondary. The instrument shows the 4-tuple `(tradition, division, unit, layer)` prominently, with the remaining three as toggle controls.

This is a **replacement** component: it replaces breadcrumb, layer indicator, episode navigation, and parallel strip. It sits in the right rail (Constellation Rail position). The content area is unchanged.

---

## 2. Navigation Axes

| Dimension | Surface | How |
|---|---|---|
| **Depth** (layer 0/2/4) | Yes — axis 4 (`LAYER`) | Increment/decrement chips |
| **Sequence** (prev/next) | Yes — axis 3 (`UNIT`) | ← → affordances per unit |
| **Containment** (NAS hierarchy) | Yes — axes 1–3 (`TRADITION / DIVISION / UNIT`) | Inline breadcrumb-style clickable labels |
| **Parallel** (cross-tradition) | Yes — listed as `PARALLELS` below the 4-tuple | Not an axis (it's a typed edge, not a coordinate increment) |
| **Annotation track** | Yes — toggle bank labeled `TRACKS` | Independent row of toggles |
| **Confidence tier** | Yes — `TIER FILTER` toggle (show all / show documented only) | Discrete filter |
| **Locale** | Hidden — global chrome | Not in navigator |

**Design commitment**: Parallels are not on a numeric axis — you cannot increment "parallel coordinate" from 1 to 2 to 3. They are discrete named edges. The instrument shows them as a list with typed labels, not as an axis with arrows.

---

## 3. Key Interactions

**4-tuple readout**: The primary display shows four rows, each a labeled coordinate:
- `T:` tradition name (e.g., `GILGAMESH`)
- `D:` division label (e.g., `TABLET-XI`)
- `U:` unit label (e.g., `FLOOD`)
- `L:` layer label (e.g., `SURFACE`)

Each row has `←` and `→` affordances where applicable:
- `T:` tradition arrows are present only in Phase 3 (multiple traditions loaded); in Phase 1, no arrows, the label is static
- `D:` arrows move between tablets/divisions
- `U:` arrows move between units/episodes within the division
- `L:` arrows step through available layers (Surface → Translated → Scholaria)

**Moving in sequence**: Press `U →` to advance to the next unit. Press `U ←` for the previous. The readout updates. Content swaps.

**Changing layer**: Press `L →` / `L ←` or click the layer name to cycle. Current layer is displayed in full uppercase, inactive layers are shown in `--color-text-muted` below as a breadcrumb hint.

**Opening a parallel**: Parallels are listed in a compact block below the 4-tuple, labeled with `PARALLELS (N)`. Each parallel is a row: `[●]  Genesis / flood-narrative  →`. Clicking navigates to the Parallel View. Keyboard: Tab to reach the parallels block, then navigate rows with up/down arrows, Enter to activate.

**Track toggles**: A row of three labeled toggle chips: `[PROPP]  [BAKHTIN]  [TMI]`. State: `[■ PROPP]` = active, `[□ PROPP]` = inactive. Using standard `--type-meta-label` mono.

**Tier filter**: A single chip `[TIER: ALL]` toggles to `[TIER: DOCUMENTED]` to restrict the view to Tier 1 content only. This is a view filter — it does not navigate, it re-renders the fragment list context.

**Full NAS address**: Always displayed below the 4-tuple in `--type-meta`: `gilgamesh/tablet-xi/flood`. Copyable.

---

## 4. Honest Absence

**No parallels**: The parallels block displays: `PARALLELS  none confirmed at this position`. No arrows, no empty rows, no placeholder chips. The word "none" is rendered in `--color-text-secondary` as a direct factual statement. The block is the same height whether it contains parallels or the "none" statement, so there is no layout jump between fragments.

---

## 5. Phase 3 Scaling

**Phase 1**: Trivially works. The 4-tuple has 1 tradition, 12 divisions, ~50 units, 3 layers. The parallels block has at most 1 entry. The display is clean.

**Phase 3 (6 traditions)**: The `T:` axis now has arrows. Navigating tradition changes the entire fragment context. The 4-tuple readout remains the same four rows — only the values change. This is the model's strongest scaling property: it scales linearly. The parallels block may grow to 10–15 entries at highly connected fragments; at that scale, it becomes a scrollable list within a fixed-height block (max-height ~160px, overflow scroll). No structural breakdown.

**Potential failure mode**: The `D:` axis across all traditions may have different division schemas — Gilgamesh has Tablets, the Mahabharata has Parvas, the Iliad has Books. The `D:` label must be a free label, not a fixed schema label. This is a data requirement, not a display problem.

---

## 6. ASCII Wireframes

### Desktop (right rail, Constellation Rail position)

```
┌────────────────────────────────────────────────┐
│  POSITION                                      │
│  ──────────────────────────────────────────────│
│                                                │
│  T:  ○  GILGAMESH                              │
│                                                │
│  D:  ←  TABLET-XI  →                          │
│         ──────────                             │
│         Tablet X     Tablet XII                │
│                                                │
│  U:  ←  FLOOD  →                              │
│         ──────                                 │
│         Utnapishtim   Plant of                 │
│         Journey       Immortality              │
│                                                │
│  L:  ←  SURFACE  →                            │
│         ───────                                │
│         ·  TRANSLATED                          │
│         ·  SCHOLARIA                           │
│                                                │
│  ──────────────────────────────────────────────│
│  gilgamesh / tablet-xi / flood        [copy]   │
│  ──────────────────────────────────────────────│
│                                                │
│  PARALLELS                                     │
│  ● Genesis / flood-narrative →                 │
│    socio-typological · DOCUMENTED              │
│                                                │
│  ──────────────────────────────────────────────│
│                                                │
│  TRACKS                                        │
│  [□ PROPP]  [□ BAKHTIN]  [□ TMI]              │
│                                                │
│  TIER  [ALL ▾]                                 │
│                                                │
└────────────────────────────────────────────────┘
```

**No-parallels state (parallels block):**
```
│  PARALLELS                                     │
│  none confirmed at this position               │
```

### Mobile (< 768px) — vertical accordion

On mobile, the 4-tuple collapses to a single header line showing the current position as a compact string, with a `[▾]` to expand:

```
┌────────────────────────────────────────────────────────────┐
│  gilgamesh / tablet-xi / flood / surface   [▾]             │
└────────────────────────────────────────────────────────────┘
```

Expanded state:

```
┌────────────────────────────────────────────────────────────┐
│  gilgamesh / tablet-xi / flood / surface   [▲]             │
├────────────────────────────────────────────────────────────┤
│  ← TABLET-XI →    ← FLOOD →    ← SURFACE →                │
├────────────────────────────────────────────────────────────┤
│  PARALLELS:  ● Genesis / flood-narrative                   │
├────────────────────────────────────────────────────────────┤
│  TRACKS: [□ PROPP] [□ BAKHTIN] [□ TMI]                    │
└────────────────────────────────────────────────────────────┘
```

The mobile version compresses the four axes into one horizontal nav strip (showing current value with prev/next arrows) rather than the full four-row readout. The NAS address stays visible as the header even in collapsed state, ensuring orientation is never lost.

---

## 7. Component Anatomy

1. **POSITION header** — section label, `--type-meta-label`, `--color-text-muted`
2. **4-tuple rows** — four rows for T/D/U/L; each row has label (`--type-meta-label`, `--color-text-muted`), current value (`--type-body-medium`, `--color-text-primary`), and `←`/`→` affordances where applicable
3. **Axis hint labels** — below the active value, inactive adjacent values shown in `--type-small`, `--color-text-muted` (what's one step away)
4. **NAS address bar** — below the 4-tuple, full NAS address in `--type-meta`, with `[copy]` affordance; persistent horizontal rule above and below
5. **Parallels block** — section label `PARALLELS`; list of parallel rows or "none confirmed" statement; each parallel row: tier glyph + tradition/unit label + relation type in `--type-small` + `→` navigate affordance
6. **Track toggles** — section label `TRACKS`; three chips with `■`/`□` filled/unfilled state, `--type-meta-label`
7. **Tier filter chip** — single chip `TIER [ALL ▾]`; dropdown of tier options
8. **Mobile collapsed header** — single line showing full positional address, `[▾]` expand affordance; keyboard-activatable
9. **Mobile expanded strip** — inline axis controls + parallels + tracks in stacked sections

---

## 8. Interaction States

**a) Fragment with no parallels**: Parallels block shows "none confirmed at this position" in `--color-text-secondary`. Section label `PARALLELS` remains rendered in the same weight. No ellipsis, no loading indicator, no ghost row. The block height is fixed at one text line minimum so the layout does not collapse.

**b) Fragment with 3+ parallels**: Each parallel renders as a row. Block grows vertically to accommodate up to 5 rows without scroll; beyond 5, a fixed-height block with vertical scroll (overflow-y: auto). A small count `(3)` appears next to the `PARALLELS` label.

**c) Scholaria layer active**: The `L:` row reads `SCHOLARIA`. The `→` affordance on the `L:` axis is absent (Scholaria is the deepest layer; there is no layer beyond it). The `←` affordance takes the user back to Translated. The NAS address line gains `?layer=scholaria` in `--type-meta`, `--color-text-muted`.

**d) Mobile**: Collapsed state shows the full NAS address as a monospace string. Tapping the header expands the accordion. Within the expanded state, axis controls are inline: `← TABLET-XI →`. At <480px, parallel relation type (`socio-typological`) is truncated to a three-letter code (`STC`).
