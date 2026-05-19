---
type: navigator-design
variant: 1
name: Celestial Sphere
status: draft
date: 2026-05-19
---

# Navigator Variant 1: Celestial Sphere

## 1. Concept and Metaphor

The observer stands at the center of a bounded sphere of reachable content. Every position in the narrative manifold projects onto the inner surface of that sphere, the same way ancient astronomers projected stars onto the celestial dome. The fragment currently in view is not "on" the sphere — it is the observing point at the center. Everything else is a bearing and a distance.

Depth (Onion layer) maps to elevation: Surface is at the horizon, Translated is above it, Scholaria is at the zenith — the sky directly overhead. Sequence maps to the left-right azimuth: preceding fragments are west, following fragments are east. Containment (tradition/tablet/episode) maps to sectors of sky, labeled at the compass points. Parallels are a different "stellar region" entirely — a separate band of sky, conceptually distinct from the sequential arc, reached by rotating your gaze to a different register of the sphere. There is no "center cluster" that implies hierarchy across traditions: the sphere is isotropic. If the Mahabharata had parallels to this fragment, its stars would appear in that same parallel-sky band as Genesis — at equal distance.

The physics connection: a homogeneous, isotropic universe looks the same in every direction from any observer position. No direction is privileged. The navigator borrows this property deliberately — it structurally enforces the non-hierarchical commitment.

This is a **replacement** component: it supersedes the breadcrumb, layer indicator, episode navigation strip, and parallel strip as an integrated orientational instrument. The Fragment View content area stays. The sphere is a compact instrument panel (roughly 220×220px on desktop) in the right rail, using the Constellation Rail position defined in `00-styling.md §14`.

---

## 2. Navigation Axes

| Dimension | Surface in this variant | How |
|---|---|---|
| **Depth** (layer 0/2/4) | Yes — vertical elevation | Upper arc = deeper layers |
| **Sequence** (prev/next) | Yes — left-right azimuth | West/east labeled points |
| **Containment** (NAS hierarchy) | Partially — sector labels at compass points | Tablet/episode shown in sector label; tradition is ambient context |
| **Parallel** (cross-tradition) | Yes — separate sky band | Parallel band below the horizon line, labeled by type |
| **Annotation track** (Propp/Bakhtin) | Collapsed — track toggles appear as a separate control strip below the sphere | Not spatial |
| **Confidence tier** | Yes — point glyph style | Tier badge icons used as point markers (`● ◑ ◈ ▲`) |
| **Locale** | Hidden — global chrome handles it | Not in navigator |

**Collapsed dimensions**: Annotation track is too abstract to spatialize on the sphere without confusing depth cues. Confidence tier is encoded in the visual style of each point (using existing tier glyphs), not as a navigable axis.

---

## 3. Key Interactions

**Changing depth**: Click or keyboard-activate the upper-arc zone (labeled Surface / Translated / Scholaria from horizon to zenith). The sphere does not rotate — the elevation markers update to show current layer as filled `●`, inactive as `○`. Content area swaps inline.

**Moving in sequence**: Click the `←` (west) or `→` (east) azimuth markers. They label the nearest preceding and following fragment by episode name, abbreviated. Keyboard: `[` and `]` for prev/next.

**Opening a parallel**: The parallel band appears as a visually distinct lower arc (below the horizon, rendered with `--color-border-subtle` ring). Each confirmed parallel appears as a single labeled point in this band. Click navigates to the Parallel View. No hover card — the label is the affordance. Keyboard: Tab into the parallel band, then Enter.

**Orientation reading**: The sphere at all times shows a text readout below it: `gilgamesh / tablet-xi / flood` in `--type-meta` mono. This is the NAS address of the current position, always visible.

**Track activation**: A row of three toggle chips below the sphere (`PROPP` / `BAKHTIN` / `TMI`), using `--type-meta-label`. Toggling activates the track overlay on the content area. Independent of the sphere's spatial model.

**Tradition context**: The sphere's outer ring bears a thin left-edge accent in `--color-trad-mesopotamian` (active tradition hue). In Phase 3, when a user jumps via a parallel to another tradition, the ring recolors to that tradition's hue.

---

## 4. Honest Absence

**No parallels on this fragment**: The parallel band arc is shown but contains no points. A single label in `--type-meta`, `--color-text-muted` reads: `no confirmed parallels at this position`. This label is not a placeholder and not a call to action. It describes an epistemic fact about the fragment. The arc's ring is still rendered — absence of points in a present arc is visually legible as "this region is empty, not broken."

**Parallels exist**: Each parallel renders as a labeled point in the band. Multiple parallels stack as adjacent points with tradition-hue glyphs.

---

## 5. Phase 3 Scaling

**Phase 1 (1 tradition, 1 parallel)**: Works trivially. The sphere has one point in the parallel band. The sequential arc has 12 tablet positions. Clean and uncluttered.

**Phase 3 (6 traditions, dozens of parallels)**: The parallel band can support up to ~8 labeled points before becoming illegible at 220px diameter. Beyond that, points cluster and a label `(12 more →)` links to the Parallels Index. This degrades gracefully — the band shows the most structurally significant parallels (by confirmed confidence tier) first, with overflow labeled honestly. The sequential arc across traditions would require tradition switching first — the sphere only ever shows the sequence of the *current* tradition, not a cross-tradition timeline (which would have no meaningful ordering).

---

## 6. ASCII Wireframes

### Desktop (Constellation Rail, right panel alongside Fragment View)

```
                  CONSTELLATION RAIL
┌─────────────────────────────────────────────────┐
│                                                 │
│              S C H O L A R I A                  │
│                    ○                            │
│               ·         ·                      │
│          ·                   ·                  │
│       ·    T R A N S L A T E D  ·               │
│      ·            ○              ·              │
│  ← ──────────────●──────────────── →            │
│  PREV           SURFACE           NEXT          │
│  Utnapishtim    (current)    Plant of           │
│  Journey                     Immortality        │
│      ·                           ·              │
│       ·   ─ ─ ─ ─ ─ ─ ─ ─ ─   ·               │
│        · ·  parallel band  · · ·                │
│         ·  ● Genesis 6–9   ·                    │
│          · ─ ─ ─ ─ ─ ─ ─  ·                    │
│           ·               ·                    │
│                ─────                            │
│                                                 │
│  gilgamesh / tablet-xi / flood        [copy]    │
│                                                 │
│  PROPP   BAKHTIN   TMI                          │
│  [off]   [off]     [off]                        │
│                                                 │
│  Tradition: MESOPOTAMIAN ███────────           │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Legend:**
- `●` = current position (Surface layer active)
- `○` = inactive layer position (Translated, Scholaria)
- `·` = sphere arc guides
- dashed arc `─ ─` = parallel band
- Outer ring left edge: rendered with `--color-trad-mesopotamian` 2px border

### No-parallels state (parallel band region):

```
         ·   ─ ─ ─ ─ ─ ─ ─ ─ ─   ·
          · ·  parallel band  · · ·
           ·  no confirmed parallels
            · ─ ─ ─ ─ ─ ─ ─ ─ ─  ·
```

### Mobile (< 768px) — collapsed horizontal strip

On mobile the sphere cannot render at meaningful size. It collapses to a horizontal instrument strip:

```
┌────────────────────────────────────────────────────────────┐
│  ← Utnapishtim    gilgamesh/tablet-xi/flood    Plant →     │
├────────────────────────────────────────────────────────────┤
│  DEPTH:  [ Surface ● ]  [ Translated ○ ]  [ Scholaria ○ ] │
├────────────────────────────────────────────────────────────┤
│  PARALLELS:  ● Genesis 6–9  (socio-typological)            │
└────────────────────────────────────────────────────────────┘
```

The sphere metaphor is not rendered on mobile — its semantic content is preserved in text form. The design does not fake a small sphere; it acknowledges that the metaphor requires display width and degrades with integrity to a functional strip.

---

## 7. Component Anatomy

1. **Sphere frame** — SVG circle, `--color-border-subtle`, radius proportional to rail width
2. **Horizon line** — horizontal diameter across sphere, `--color-border-strong`, 1px
3. **Parallel band arc** — dashed lower arc, `--color-border-subtle`, distinct from horizon
4. **Layer markers** — three points on the vertical axis: `●` (active) or `○` (inactive), labeled with `--type-meta-label`
5. **Sequence arms** — left/right extensions from horizon center, terminating in episode name labels (`--type-small`, `--color-text-secondary`)
6. **Parallel points** — labeled glyphs in the parallel band; each uses the parallel's tradition hue from `--color-trad-*`; glyph is the confidence tier icon
7. **Empty parallel label** — `--type-meta`, `--color-text-muted`, text "no confirmed parallels at this position"
8. **NAS readout** — below sphere, `--type-meta`, `--color-text-secondary`, with `[copy]` affordance
9. **Track toggles** — row of three chips below NAS readout, `--type-meta-label`
10. **Tradition accent ring** — 2px left-border on the rail container, colored `--color-trad-*` for active tradition
11. **Mobile strip** — hidden at ≥768px; block display at <768px; contains all four navigable dimensions as text affordances

---

## 8. Interaction States

**a) Fragment with no parallels**: Parallel band arc is present. Contains the text label "no confirmed parallels at this position" in `--color-text-muted`. No click affordance in the band. Keyboard Tab skips the band's interactive zone (nothing to activate). The parallel band ring is rendered at `--color-border-ghost` rather than `--color-border-subtle` to signal emptiness without hiding it.

**b) Fragment with 3+ parallels**: Three labeled points appear in the parallel band, each with tradition-hue glyph and short name. If there are more than can legibly fit (~8), a text label "(N more)" appears as a link to the Parallels Index. The band expands vertically by ~8px to accommodate crowding, within a max-height constraint.

**c) Scholaria layer active**: The top layer marker (`SCHOLARIA`) becomes `●`. Surface and Translated become `○`. The sphere's vertical composition now shows the reader at the top arc — maximum depth. The sequence arms remain unchanged. The NAS readout appends `?layer=scholaria` in `--type-meta`, `--color-text-muted`.

**d) Mobile**: Full sphere does not render. The mobile strip renders with identical semantic content: sequence navigation (prev/next), depth control (Surface/Translated/Scholaria chips), and parallel list. Track toggles are accessible via a `[tracks ▾]` expandable at the bottom of the strip. NAS address is visible but truncated to `tablet-xi/flood` at <480px, full address at 480–767px.
