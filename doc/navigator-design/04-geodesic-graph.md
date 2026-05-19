---
type: navigator-design
variant: 4
name: Geodesic Graph
status: draft
date: 2026-05-19
---

# Navigator Variant 4: Geodesic Graph

## 1. Concept and Metaphor

A geodesic is the shortest path between two points on a curved surface — in general relativity, matter follows geodesics, bending spacetime around it. The topology of the Fragment Graph is the underlying reality of this content; the Geodesic Graph navigator makes that topology visible and traversable directly.

The current Fragment is a node. The navigator renders its immediate neighborhood: all nodes connected by typed edges — `precedes`, `follows`, `contains`, `parallel_to`. The edge types are visually labeled, not color-coded alone (accessibility). The space is self-similar at every zoom level: zooming out reveals the same graph structure at higher abstraction. A node is always a node whether it represents a single flood episode or an entire tablet — the shape and edge logic are the same.

The physics connection: geodesic flow on a manifold. The path from any point to any other point is a sequence of typed edge traversals. The metaphor also connects to the concept of the universe as a curved space with no privileged center — from any fragment node, the graph looks structurally similar to what it looks like from any other node. This reinforces the non-hierarchical editorial principle.

**Design commitment**: This is the most literal rendering of the underlying Fragment Graph data model. It exposes the actual data structure to the user as the navigation metaphor. Three zoom levels are defined: Node View (immediate neighborhood, current fragment + 1 hop), Tablet View (all fragments within one division, 2 hops), Tradition View (all fragments, full graph). This is the only variant that meaningfully shows the difference between Phase 1 and Phase 3 scale.

This is a **replacement** component. Right rail or expandable overlay position.

---

## 2. Navigation Axes

| Dimension | Surface | How |
|---|---|---|
| **Depth** (layer 0/2/4) | Yes — node interior state | Current depth shown as a sub-label chip on the active node |
| **Sequence** (prev/next) | Yes — `PRECEDES`/`FOLLOWS` edges | Horizontal edges in the graph |
| **Containment** | Yes — `CONTAINS` edges | Vertical edges; container nodes are larger |
| **Parallel** (cross-tradition) | Yes — `PARALLEL_TO` edges | Visually distinct edge style (dashed); cross-tradition nodes use tradition hue |
| **Annotation track** | Yes — shown as node attribute badge | Toggle changes which badges are visible on nodes |
| **Confidence tier** | Yes — node glyph | Each node renders its tier glyph |
| **Locale** | Hidden | Global chrome |

---

## 3. Key Interactions

**Reading the graph**: The current node is rendered at center, visually distinguished (`--color-accent-primary` ring, slightly larger). Adjacent nodes (1 hop) are rendered in their typed positions: sequence nodes (`PRECEDES`/`FOLLOWS`) to left and right; containment parent (`TABLET-XI`) above; parallel nodes below with dashed edge style.

**Moving in sequence**: Click a `PRECEDES` or `FOLLOWS` node. Graph re-centers on the new node. Keyboard: Left/Right arrows when a sequence node is focused.

**Changing depth**: A small depth chip on the active node: clicking cycles through Surface → Translated → Scholaria. The chip uses the existing layer marker pattern (`● ○ ○`).

**Opening a parallel**: Click a `PARALLEL_TO` node. Its edge is dashed, visually distinct from sequence edges. The node renders in the tradition's hue from `--color-trad-*`. Clicking navigates to the Parallel View.

**Zooming out**: A zoom control (three buttons: `[Node]` / `[Tablet]` / `[Tradition]`). At Node zoom, the graph shows immediate neighbors. At Tablet zoom, all fragments within the current tablet are visible as a constellation. At Tradition zoom, tablets are collapsed to single nodes with an edge count badge. Zoom levels are discrete levels, not continuous pinch-to-zoom.

**Track toggle**: Toggle chips below the graph control which node attributes are shown. When PROPP is active, nodes with Propp annotations show a small `[P]` badge. The graph structure does not change.

---

## 4. Honest Absence

**No parallels**: The `PARALLEL_TO` edge type simply does not appear. There is no dashed edge, no empty placeholder node. However, this could be indistinguishable from "the graph failed to load."

To address this: a small annotation adjacent to the active node reads: `parallel_to: none confirmed` in `--type-meta`, `--color-text-muted`. This mirrors the coordinate display convention (showing zero is an explicit value, not an absence of information).

---

## 5. Phase 3 Scaling

**Phase 1 (1 tradition, 1 parallel)**: The Node View shows ~5 nodes: current fragment, prev, next, container tablet, and 1 Genesis parallel node. Extremely readable. The Tablet View shows 12 fragments within Tablet XI. The Tradition View shows all Gilgamesh tablets as nodes.

**Phase 3 (6 traditions, 100+ fragments)**: At Node zoom, the graph is unchanged — still shows 1-hop neighborhood regardless of total graph size. This is the variant's primary scaling advantage: the view is always *locally* manageable. At Tradition zoom, the full graph is visible but compressed — meaningful only for orientation, not readability. The transition from Phase 1 to Phase 3 is entirely additive at Node zoom; the user's immediate environment does not change in complexity.

**Potential failure**: At Tradition zoom with 6 traditions and hundreds of fragments, the graph becomes a visual mass. The designer must commit to aggressive node compression at higher zoom levels — traditions collapse to single labeled nodes, tablets collapse to count badges. The Tradition View is a high-altitude schematic, not a full graph render.

---

## 6. ASCII Wireframes

### Desktop (right rail, expandable to overlay on zoom-out click)

**Node View (default, 1-hop neighborhood):**

```
┌─────────────────────────────────────────────────────────┐
│  GRAPH  [Node ●]  [Tablet ○]  [Tradition ○]             │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│         ┌─────────────────────────────────────┐         │
│         │  TABLET-XI           [CONTAINS]     │         │
│         └──────────────┬──────────────────────┘         │
│                        │                               │
│  ┌──────────────┐  FOLLOWS  ┌──────────────────────┐   │
│  │  ◑ Utnapishtim│ ←──────  │  ● THE FLOOD         │   │
│  │  Arrives     │           │  [● SURFACE]          │   │
│  │  prev        │  ──────→  │  parallel_to: 1       │   │
│  └──────────────┘  PRECEDES └──────┬───────────────┘   │
│                                    │                    │
│                              PARALLEL_TO                │
│                            (dashed edge)                │
│                                    │                    │
│                         ┌──────────┴──────────┐         │
│                         │  ● Genesis          │         │
│                         │  flood-narrative    │         │
│                         │  BIBLICAL           │         │
│                         └─────────────────────┘         │
│                                                         │
│  gilgamesh / tablet-xi / flood              [copy]      │
│                                                         │
│  TRACKS: [□ PROPP]  [□ BAKHTIN]  [□ TMI]               │
└─────────────────────────────────────────────────────────┘
```

**No-parallels state (active node label):**
```
│  ● THE FLOOD         │
│  [● SURFACE]          │
│  parallel_to: none    │
```

**Tablet View (all fragments within TABLET-XI):**

```
┌─────────────────────────────────────────────────────────┐
│  GRAPH  [Node ○]  [Tablet ●]  [Tradition ○]             │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  TABLET-XI ─────────────────────────────────────────    │
│  ○ ── ○ ── ○ ── ○ ── ● ── ○ ── ○ ── ○ ── ○ ── ○       │
│     Arrival Journey  Flood Vigil  Plant  Return         │
│                        ↕                                │
│                    ┄ ┄ Genesis ┄ ┄ (PARALLEL_TO)        │
│                                                         │
│  ── 10 fragments in TABLET-XI ─────────────────────     │
│  ● = current position                                   │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Tradition View:**

```
┌─────────────────────────────────────────────────────────┐
│  GRAPH  [Node ○]  [Tablet ○]  [Tradition ●]             │
│  ─────────────────────────────────────────────────────  │
│                                                         │
│  GILGAMESH ─────────────────────────────────────────    │
│  I ── II ── III ── IV ── V ── VI ── VII ──              │
│  VIII ── IX ── X ── [XI] ── XII                         │
│                      │                                  │
│                ┄ ┄ BIBLICAL ┄ ┄  (1 parallel)           │
│                                                         │
│  Phase 1: 1 tradition · 12 tablets · 1 parallel         │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

### Mobile (< 768px) — labeled adjacency list

On mobile, graph rendering is impractical at small sizes. The graph is replaced by a labeled adjacency list — preserving the typed-edge vocabulary without the spatial layout:

```
┌────────────────────────────────────────────────────────────┐
│  ● THE FLOOD  [SURFACE]  gilgamesh/tablet-xi/flood         │
│  ─────────────────────────────────────────────────────     │
│  CONTAINS     Tablet XI                          →         │
│  FOLLOWS      ◑ Utnapishtim Arrives              →         │
│  PRECEDES     ◑ Plant of Immortality             →         │
│  PARALLEL_TO  ● Genesis / flood-narrative        →         │
│  ─────────────────────────────────────────────────────     │
│  parallel_to: 1 confirmed                                  │
│  ─────────────────────────────────────────────────────     │
│  DEPTH: [● SURFACE]  [○ TRANSLATED]  [○ SCHOLARIA]        │
└────────────────────────────────────────────────────────────┘
```

**No-parallels mobile state:**
```
│  PARALLEL_TO  none confirmed at this position              │
```

The edge-type labels (`CONTAINS`, `FOLLOWS`, `PRECEDES`, `PARALLEL_TO`) are in `--type-meta-label` mono, preserving the data model vocabulary even in list form.

---

## 7. Component Anatomy

1. **Graph container** — SVG canvas, bounded within rail; re-renders on node navigation or zoom level change
2. **Current node** — center position; rendered with `--color-accent-primary` ring; shows episode name, depth chip `[● SURFACE]`, and `parallel_to: N` count label
3. **Adjacent nodes** — neighboring nodes; each renders tier glyph, episode name; interactive (click to navigate)
4. **Edge lines** — typed SVG lines between nodes; `PRECEDES`/`FOLLOWS`: solid horizontal; `CONTAINS`: solid vertical; `PARALLEL_TO`: dashed; edge type label rendered in `--type-meta` along the line
5. **Parallel nodes** — rendered below in tradition hue; left-edge 2px accent in `--color-trad-*`
6. **Zoom level control** — three labeled buttons: Node / Tablet / Tradition; current level is `●` filled
7. **"parallel_to: none" annotation** — small text on current node when no parallel edges exist; `--type-meta`, `--color-text-muted`
8. **NAS readout** — below graph, `--type-meta`
9. **Track toggle chips** — below NAS
10. **Mobile adjacency list** — hidden at ≥768px; typed-edge labeled list replacing graph canvas

---

## 8. Interaction States

**a) Fragment with no parallels**: Current node shows `parallel_to: none confirmed` in `--type-meta`. No dashed edge, no placeholder node below. The absence is explicit text on the node, distinguishing it from a loading failure. In mobile list, the `PARALLEL_TO` row reads "none confirmed at this position."

**b) Fragment with 3+ parallels**: Three nodes appear below the current node, each connected by a dashed edge. Each parallel node is labeled with tradition name and unit label, with tradition hue. At Node zoom, if >3 parallels exist, the additional parallel nodes stack vertically, or a `(+N more →)` overflow link appears.

**c) Scholaria layer active**: The depth chip on the current node reads `[● SCHOLARIA]`. The chip's other states (`SURFACE`, `TRANSLATED`) are shown as a compact dropdown on click. The graph topology is unchanged. Node labels do not change — the graph shows what is structurally connected regardless of what layer the user is currently viewing.

**d) Mobile**: Adjacency list with typed edge labels. Each row is independently tappable/keyboard-navigable. Focus management: Tab moves through rows, Enter navigates. The depth control is a row of three chips below the list.
