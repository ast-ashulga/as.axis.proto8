---
type: navigator-design
variant: 3
name: Light Cone
status: draft
date: 2026-05-19
---

# Navigator Variant 3: Light Cone

## 1. Concept and Metaphor

In special relativity, the light cone divides spacetime into three regions around any event: the past (causally connected — what could have influenced this event), the future (causally connected — what this event can influence), and the spacelike region (causally disconnected — reachable only by a jump, not by any continuous path within the narrative). The metaphor maps directly to the fragment manifold.

For this variant, "past" means causal narrative precedence within a tradition: fragments that the current fragment follows from (Tablet X precedes Tablet XI — the flood story is told because Gilgamesh arrived at the World's End, which required crossing the Waters of Death, which required the earlier journey). "Future" means what follows causally. These are not simply "earlier/later in sequence" — they are what this fragment's meaning depends on (past) and what depends on this fragment's meaning (future).

Cross-tradition parallels are **spacelike separated**: not causally connected within the narrative sequence (Genesis is not "before" or "after" Gilgamesh in any meaningful sequential sense) but structurally reachable via a jump. The navigator renders this distinction. The jump is labeled as a jump — not a traversal.

Depth (Onion layer) maps to the cone's temporal axis: Surface is "close" (at the present moment), Scholaria is "far in the future-past" — deeper understanding requires more context, which is a kind of epistemic distance. This is the most abstract mapping in this variant and must be legible without physics literacy.

**Design commitment**: In this variant, "past" means exclusively what is narratively prior in the tradition (causal reading order), NOT session reading history. User reading history is not exposed in this navigator — that would conflate personal experience with structural knowledge.

This is a **replacement** component. Right rail position.

---

## 2. Navigation Axes

| Dimension | Surface | How |
|---|---|---|
| **Depth** (layer 0/2/4) | Yes — depth control row below the cone | Chip row: `[● SURFACE]  [○ TRANSLATED]  [○ SCHOLARIA]` |
| **Sequence** (prev/next) | Yes — cone spread | Nodes rendered within each cone half |
| **Containment** | Partially — visible in node labels | NAS fragment labels visible; truncated by default |
| **Parallel** (cross-tradition) | Yes — spacelike region (outside cones) | Separate labeled points flanking the cone structure |
| **Annotation track** | Collapsed — toggle strip below cone | Not spatial |
| **Confidence tier** | Yes — node glyph style | Tier icons on each node (`● ◑ ◈ ▲`) |
| **Locale** | Hidden | Global chrome |

**Collapsed**: Containment is readable from node labels but not navigable directly through the cone structure. The cone shows immediate neighbors (2–3 past, 2–3 future), not the full graph.

---

## 3. Key Interactions

**Reading the cone**: The current fragment is at the center (waist of the two cones). The upper cone contains fragments that will follow in the narrative (future cone). The lower cone contains fragments that precede (past cone). Each shows the 2–3 nearest neighbors labeled by episode name.

**Moving in sequence**: Click any node in the future or past cone to navigate to that fragment. The entire cone re-renders around the new current position. Keyboard: Tab navigates to cone nodes, Enter activates.

**Changing depth**: A depth control row below the cone diagram shows three chips: `[● SURFACE]  [○ TRANSLATED]  [○ SCHOLARIA]`. Current depth is `●` filled. Clicking a chip changes the layer. The cone structure does not move — only the depth indicator updates.

**Opening a parallel**: The spacelike region is shown as labeled points flanking the cone, preceded by a dashed boundary line that visually signals "this is outside the causal order." Each parallel point: `[●]  Genesis  ─ ─ ─|  [spacelike]`. Clicking navigates to the Parallel View. Keyboard: Tab to reach the spacelike region, then navigate rows with up/down arrows, Enter to activate.

---

## 4. Honest Absence

**No parallels**: The spacelike region is rendered. A dashed boundary line appears to either side of the cone. Within the spacelike region: a text label in `--type-small`, `--color-text-muted`: "no confirmed parallels at this position." The visual structure of the spacelike region (dashed lines) is always present to establish the concept; its population varies.

A user who has never seen a parallel fragment learns that the parallel-space concept *exists* before they ever encounter a populated parallel band — which prepares them to recognize it when they do. This is the strongest honest-absence affordance of any variant.

---

## 5. Phase 3 Scaling

**Phase 1**: One parallel point in the spacelike region. 2–3 nodes per cone half. Clean diagram with obvious meaning.

**Phase 3 (6 traditions, many parallels)**: The spacelike region can accommodate ~6–8 labeled parallel points before crowding. Beyond that: points cluster by tradition, with a count badge. The spacelike region may expand horizontally. The past/future cones never show more than 3 neighbors per half — they show immediate narrative neighbors only, not the full graph depth. This is a firm design constraint, not a degradation.

**Potential failure**: The depth chip row below the cone is a secondary control, detached from the cone's visual language. The cone geometry itself does not encode depth — it only encodes sequence and causality. This creates a slight conceptual split that must be mitigated by proximity and labeling.

---

## 6. ASCII Wireframes

### Desktop (right rail)

```
┌───────────────────────────────────────────────────┐
│                                                   │
│          ╱ FUTURE CONE ╲                          │
│         ╱               ╲                         │
│        ╱                 ╲                        │
│       ╱  ◑ Plant of       ╲                       │
│      ╱     Immortality     ╲                      │
│     ╱─────────────────────── ╲                    │
│    ╱    ○ Tablet XI end ○     ╲                   │
│   ╱─────────────────────────────╲                 │
│  ──── ● THE FLOOD  [SURFACE] ────                 │
│   ╲─────────────────────────────╱                 │
│    ╲    ○ Utnapishtim Arrives ○ ╱                 │
│     ╲──────────────────────────╱                  │
│      ╲  ◑ Tablet X · Journey  ╱                   │
│       ╲                      ╱                    │
│        ╲                    ╱                     │
│         ╲  PAST CONE       ╱                      │
│          ╲                ╱                       │
│                                                   │
│   ─ ─ ─ SPACELIKE ─ ─ ─ │ ─ ─ SPACELIKE ─ ─ ─  │
│   ● Genesis / flood      │                       │
│     socio-typological    │  (no other parallels) │
│   ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │
│                                                   │
│  DEPTH:                                           │
│  ● SURFACE  ○ TRANSLATED  ○ SCHOLARIA             │
│                                                   │
│  gilgamesh / tablet-xi / flood         [copy]     │
│                                                   │
│  TRACKS: [□ PROPP]  [□ BAKHTIN]  [□ TMI]         │
└───────────────────────────────────────────────────┘
```

**No-parallels state (spacelike region):**
```
   ─ ─ ─ SPACELIKE ─ ─ ─ ── ─ ─ SPACELIKE ─ ─ ─
   no confirmed parallels     no confirmed parallels
   at this position
   ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
```

### Mobile (< 768px) — vertical stack with cone simplified

On mobile, the cone geometry is replaced by a simple directional stack. The causal topology metaphor is preserved through labeling and layout direction, not geometry:

```
┌────────────────────────────────────────────────────────────┐
│  FUTURE ↑                                                  │
│  ◑ Plant of Immortality  →                                 │
│  ○ Tablet XI · Conclusion  →                               │
│  ─────────────────────────────────────────────────────     │
│  ● THE FLOOD · gilgamesh/tablet-xi/flood    [SURFACE]      │
│  ─────────────────────────────────────────────────────     │
│  ○ Utnapishtim Arrives  →                                  │
│  ◑ Tablet X · Journey   →                                  │
│  PAST ↓                                                    │
│  ─────────────────────────────────────────────────────     │
│  PARALLELS (spacelike)                                     │
│  ● Genesis / flood-narrative  →                            │
│  ─────────────────────────────────────────────────────     │
│  DEPTH: [● SURFACE]  [○ TRANSLATED]  [○ SCHOLARIA]        │
└────────────────────────────────────────────────────────────┘
```

---

## 7. Component Anatomy

1. **Future cone** — SVG path, upper half; renders 2–3 nearest future-sequence nodes
2. **Past cone** — SVG path, lower half; renders 2–3 nearest past-sequence nodes
3. **Current position node** — center element; episode name in `--type-body-medium`, layer indicator chip `[SURFACE]` inline
4. **Cone nodes** — each node: tier glyph (`● ◑ ◈ ▲`) + episode name in `--type-small`, `--color-text-secondary`; interactive (click to navigate)
5. **Depth control row** — three labeled chips below the cone diagram; current depth is `●` filled
6. **Spacelike boundary** — dashed horizontal rules to left and right of cone, labeled `SPACELIKE`; `--color-border-subtle`
7. **Parallel points in spacelike region** — labeled rows; tier glyph + tradition label + relation type + `→`; or "no confirmed parallels" text
8. **NAS readout** — `--type-meta`, below diagram
9. **Track toggles** — below NAS readout
10. **Mobile vertical stack** — hidden at ≥768px; replaces cone geometry with a directed list, direction labels `FUTURE ↑` / `PAST ↓`

---

## 8. Interaction States

**a) Fragment with no parallels**: Spacelike region is rendered on both sides. Both sides show the text label "no confirmed parallels at this position." The dashed spacelike boundary is still rendered — absence of parallels does not make the concept invisible. Keyboard focus skips the spacelike region's interactive zone.

**b) Fragment with 3+ parallels**: Multiple labeled points in the spacelike region, stacked vertically. If more than ~5 points: a `(N more →)` overflow link to the Parallels Index. Tradition hues from `--color-trad-*` differentiate parallel points from each other; each also has a tradition name label (not color-only).

**c) Scholaria layer active**: The depth chip row shows `SCHOLARIA` as `●`, others as `○`. The cone structure and spacelike region are unchanged — layer change does not alter narrative topology. If the Scholaria layer is unavailable for a given fragment, the `SCHOLARIA` chip is rendered in `--color-text-disabled` with `aria-disabled="true"`.

**d) Mobile**: Cone geometry removed; vertical stack with FUTURE/PAST direction labels. Current position is visually centered. Parallels listed below with "PARALLELS (spacelike)" label — preserving the metaphor as a word even in list form. Depth control is a row of three chips.
