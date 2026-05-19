---
type: navigator-design
variant: 5
name: Onion with Radial Parallels
status: draft
date: 2026-05-19
---

# Navigator Variant 5: Onion with Radial Parallels

## 1. Concept and Metaphor

Ptolemaic cosmology organized the universe as nested crystalline spheres — each sphere containing the one inside it, the outermost sphere being the realm of fixed stars, the innermost being the sublunar world of change. This model was geometrically satisfying precisely because it expressed both depth (how many spheres out from center) and the coexistence of multiple celestial bodies at the same depth level (all planets exist at different depths, but they are simultaneously present in the same universe).

This variant adapts that model. The Onion layers (Surface / Translated / Scholaria) are concentric rings centered on the current fragment. The user's depth position is a point within those rings. Cross-tradition parallels are spokes extending outward from the ring system — radial lines that pass through all three rings and point toward other traditions. A spoke's presence indicates a confirmed parallel exists. The spoke's absence (no line) indicates none does.

The integrated visual: from the center looking outward, you see three concentric circles and then, extending past the outermost, a set of directional spokes pointing toward other traditions. If no spokes exist, the rings are complete uninterrupted circles — whole, self-contained. If a spoke exists, it creates a visual break in the ring, pointing outward. The observer understands immediately: "this fragment has depth and this fragment has reach."

The astronomical reference: the armillary sphere — a model of the cosmos as nested rings. Used by every ancient astronomical tradition, from Greek to Chinese to Islamic. It is itself a cross-cultural instrument.

**Design commitment**: This is the only variant where depth and parallels exist in the same visual composition simultaneously, not in separate sections. The integrated diagram is the core conceptual claim. If the rings and spokes are separated into independent components, this variant collapses into something interchangeable with V1 or V2.

This is a **replacement** component. Right rail position.

---

## 2. Navigation Axes

| Dimension | Surface | How |
|---|---|---|
| **Depth** (layer 0/2/4) | Yes — ring system | User position within the three rings; active ring highlighted |
| **Sequence** (prev/next) | Yes — compass points on outermost ring | North (`↑`) and south (`↓`) markers on the outermost ring |
| **Containment** | Partially — outer ring label | Tablet label displayed on the outer ring arc |
| **Parallel** | Yes — radial spokes | Each confirmed parallel is a labeled spoke extending outward |
| **Annotation track** | Collapsed — toggle below diagram | Not spatial |
| **Confidence tier** | Yes — spoke glyph | Tier icon at the spoke root |
| **Locale** | Hidden | Global chrome |

**Design commitment**: This is the only variant where depth and parallels exist in the same visual composition simultaneously, not in separate sections. This is the defining conceptual commitment that distinguishes it from all other variants.

---

## 3. Key Interactions

**Changing depth**: The three concentric rings are labeled at 3 o'clock: innermost ring = Surface, middle ring = Translated, outermost ring = Scholaria. The user's current depth is shown as a filled arc segment (a short thick arc) on the active ring. Clicking the ring label or pressing `1`, `2`, `3` changes depth. The thick arc moves to that ring. Content swaps inline.

**Moving in sequence**: The outermost ring has two labeled points at north (`↑ next`) and south (`↓ prev`). Each point shows the neighboring episode name. Clicking navigates. Keyboard: Up/Down arrows.

**Opening a parallel**: Each confirmed parallel is a labeled spoke extending outward past the outermost ring. The spoke is a line from the center outward, terminating in a labeled box: `[● GENESIS]`. Spoke labels are tradition-hued using `--color-trad-*`. Clicking the terminal box navigates to the Parallel View. Keyboard: Tab to spoke terminal boxes.

**Tradition context**: The center of the diagram shows the fragment's episode name in `--type-small`. Below the diagram, the NAS address.

---

## 4. Honest Absence

**No parallels**: No spokes extend outward. The three rings are complete, uninterrupted circles. A text label below the diagram reads: "no radial connections — no confirmed parallels at this position." This is distinct from a "coming soon" message and distinct from a broken state.

The complete circle is semantically rich: this fragment is whole and self-contained. The absence of spokes is the information. This is the variant where "honest absence" has the strongest visual design expression — completeness signals epistemic self-containment, not failure.

**One parallel**: One spoke extends outward. The ring is broken at that spoke's angle. The visual contrast between "complete rings" and "ring with spokes" is immediately legible without requiring prior knowledge of the metaphor.

---

## 5. Phase 3 Scaling

**Phase 1 (1 parallel)**: One spoke. Clean diagram. The armillary metaphor is immediately legible.

**Phase 3 (6 traditions, up to 10 parallels per fragment)**: Up to 10 spokes can radiate from the ring system without overlap — at even angular distribution, 10 spokes at 36° each are readable. Beyond 10 parallels (exceptional case): spokes for traditions with multiple parallels collapse to one spoke per tradition, with a count badge at the spoke terminus: `[● GILGAMESH (3)]`.

**Potential failure**: If multiple parallels exist within the *same tradition* (Phase 3: several Mahabharata fragments parallel to this one), the single-spoke-per-tradition aggregation loses precision. The collapsed spoke would need to expand into a mini-list on click. This is a product edge case but must be stated in the implementation spec.

---

## 6. ASCII Wireframes

### Desktop (right rail)

```
                ↑ NEXT: Plant of Immortality

         ╔═══════════════════════════╗  ← SCHOLARIA ring
         ║  ┌─────────────────┐      ║  ← TRANSLATED ring
         ║  │  ┌───────────┐  │      ║  ← SURFACE ring
         ║  │  │  FLOOD ●  │  │      ║
         ║  │  └───────────┘  │      ║
         ║  └─────────────────┘      ║
──────── ╬ ──────────────────────── ╬ ──── ● GENESIS  ──→
         ║  (Genesis spoke extends)  ║       flood-narrative
         ╚═══════════════════════════╝       DOCUMENTED

                ↓ PREV: Utnapishtim's Journey

  ● = active depth indicator (on SURFACE ring)
  No other spokes = no other confirmed parallels
```

**Full wireframe with UI chrome:**

```
┌───────────────────────────────────────────────────────┐
│                                                       │
│                   ↑ Plant of Immortality              │
│                   (next episode)                      │
│                                                       │
│         ╔═══════════════════════════════════╗         │
│         ║  ┌─────────────────────────┐      ║         │
│         ║  │  ┌───────────────────┐  │      ║         │
│         ║  │  │  FLOOD  ●  SURFACE│  │      ║         │
│         ║  │  └───────────────────┘  │      ║         │
│         ║  └─────────────────────────┘      ║         │
│  ─ ─ ─ ─╬─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─╬─ ─ ─ ─  │
│  ● GENESIS                                 ║         │
│    flood-narrative                          ║         │
│    DOCUMENTED                              ║         │
│         ╚═══════════════════════════════════╝         │
│                                                       │
│                   ↓ Utnapishtim's Journey             │
│                   (previous episode)                  │
│                                                       │
│  Ring labels (at 3 o'clock):                          │
│  innermost = SURFACE · middle = TRANSLATED            │
│  outermost = SCHOLARIA                                │
│                                                       │
│  gilgamesh / tablet-xi / flood            [copy]      │
│                                                       │
│  TRACKS: [□ PROPP]  [□ BAKHTIN]  [□ TMI]             │
└───────────────────────────────────────────────────────┘
```

**No-parallels state:**
```
         ╔═══════════════════════════╗
         ║  ┌─────────────────┐      ║
         ║  │  ┌───────────┐  │      ║
         ║  │  │  FLOOD ●  │  │      ║
         ║  │  └───────────┘  │      ║
         ║  └─────────────────┘      ║
         ╚═══════════════════════════╝
  (complete unbroken rings — no spokes)

  no radial connections — no confirmed parallels
```

**Multi-parallel state (Phase 3 example, 3 parallels):**
```
              ↑ Next

     ● MAHABHARATA               ● GENESIS
     (spoke NW)   ╔═══════════╗  (spoke NE)
                  ║  │ FLOOD │ ║
         ─────────╬───────────╬─────────
                  ║  └───────┘ ║
                  ╚═══════════╝
                      ● ILIAD
                   (spoke south)

              ↓ Prev
```

### Mobile (< 768px) — simplified single-ring

On mobile, the full nested ring diagram collapses to a simplified single-ring view (outermost ring only) with depth shown as a label inside, and spokes rendered as short tick marks extending outward:

```
┌────────────────────────────────────────────────────────────┐
│            ↑ Plant of Immortality                          │
│                                                            │
│       ╔══════════════════════════════╗                     │
│  ─────╫─────── ● GENESIS ────────── ╫─────                │
│       ║    FLOOD  [● SURFACE]        ║                     │
│       ╚══════════════════════════════╝                     │
│                                                            │
│            ↓ Utnapishtim's Journey                         │
│                                                            │
│  DEPTH: [● SURFACE]  [○ TRANSLATED]  [○ SCHOLARIA]        │
│  ─────────────────────────────────────────────────────     │
│  PARALLELS:  ● Genesis / flood-narrative  →               │
│  ─────────────────────────────────────────────────────     │
│  TRACKS: [□ PROPP]  [□ BAKHTIN]  [□ TMI]                  │
└────────────────────────────────────────────────────────────┘
```

The single ring on mobile preserves the concept (ring = boundary of this fragment's epistemic space; spoke = parallel connection) at minimum viable rendering size. The three nested rings from desktop are reduced to one ring with a text depth indicator inside.

---

## 7. Component Anatomy

1. **Ring set** — three concentric SVG circles; innermost = Surface, middle = Translated, outermost = Scholaria; each ring rendered with `--color-border-subtle`; ring labels at 3 o'clock in `--type-meta-label`
2. **Depth indicator arc** — a short thick arc segment on the active ring; `--color-accent-primary`; moves between rings on depth change; `aria-label="current depth: [layer name]"`
3. **Fragment label** — center of diagram; episode name in `--type-small`, `--color-text-primary`
4. **Sequence points** — north (`↑`) and south (`↓`) points on the outermost ring; labeled with neighboring episode names in `--type-small`; interactive
5. **Parallel spokes** — radial SVG lines from center outward, extending past outermost ring; one per confirmed parallel; labeled at terminus with tradition name + tier glyph in `--color-trad-*`; interactive at terminus
6. **Spoke terminus box** — small rectangular label at the outer end of each spoke; tradition-hued border; episode name and tier badge
7. **No-parallels label** — text below diagram when no spokes exist; "no radial connections — no confirmed parallels" in `--type-meta`, `--color-text-muted`
8. **NAS readout** — below diagram, `--type-meta`
9. **Track toggles** — below NAS
10. **Mobile single-ring view** — hidden at ≥768px; single-ring SVG + depth chip row + parallel list

---

## 8. Interaction States

**a) Fragment with no parallels**: No spokes are rendered. The three rings are complete, unbroken circles. The text label "no radial connections — no confirmed parallels at this position" appears below the diagram in `--type-meta`, `--color-text-muted`. The complete circle visual is actively informative — it communicates epistemic self-containment of this fragment.

**b) Fragment with 3+ parallels**: Three spokes extend from the ring system. Each spoke is angled to minimize overlap — spokes are distributed across the full 360° if possible. Each spoke terminus renders in the tradition's hue. If multiple parallels are from the same tradition, one spoke with a count badge `(N)`.

**c) Scholaria layer active**: The depth indicator arc moves to the outermost ring (Scholaria). The sequence north/south points remain on the outermost ring regardless of depth. The spoke structure is unchanged — depth does not affect parallel topology.

**d) Mobile**: Single-ring rendering. Depth shown as a chip row below the ring. Spokes rendered as short tick marks extending outward from the ring with text next to them. If insufficient display space for spokes on the ring, they fall back to a labeled list below the ring (labeled `PARALLELS`) with spoke tick replaced by a tradition-hue left-border on each list item.
