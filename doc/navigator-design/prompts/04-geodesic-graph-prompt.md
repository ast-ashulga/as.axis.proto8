---
type: image-generation-prompt
variant: 4
name: Geodesic Graph Navigator
date: 2026-05-19
aspect-ratio: 16:9
target-tools: Midjourney, DALL-E 3, Stable Diffusion XL, Nano Banana
---

# Image Generation Prompt — Variant 4: Geodesic Graph Navigator

## Primary Prompt

```
UI screenshot of a scholarly digital reading application called "Mnemosyne Engine". Desktop browser 1440px wide. Scholarly editorial design with warm parchment-white background for navigating ancient epic traditions.

OVERALL LAYOUT:
Minimal top navigation bar: "MNEMOSYNE ENGINE" IBM Plex Mono caps left, "Gilgamesh · Parallels" center, "EN / RU" locale right. Warm parchment #F7F3EE background throughout. Hairline border below nav. Breadcrumb: "Gilgamesh › Tablet XI › The Flood" in 14px EB Garamond secondary color. NAS line: "gilgamesh / tablet-xi / flood  [copy]" in IBM Plex Mono 11px muted.

MAIN CONTENT AREA (left ~62%):
"THE FLOOD EPISODE" in EB Garamond 24px near-black. Tier badge inline. Body text of the flood narrative in EB Garamond 16px, comfortable long-form reading typography. Warm dark text #1A1714, warm parchment background.

RIGHT RAIL — NAVIGATOR COMPONENT (~320px):
A GEODESIC GRAPH navigator — a node-edge diagram that directly renders the Fragment Graph data structure. Three zoom level tabs at the top: "[Node ●] [Tablet ○] [Tradition ○]" in IBM Plex Mono 11px chips — Node level is active (●).

THE NODE-VIEW GRAPH (the main diagram, ~280×320px):
Rendered as clean SVG line art on warm parchment. Five nodes connected by typed edges:

NODE 1 — CONTAINS parent (top center):
Rectangular box at the top, labeled "TABLET-XI" in IBM Plex Mono 12px, secondary color. Labeled "[CONTAINS]" in tiny IBM Plex Mono 10px muted above the vertical edge connecting down to the current node. The box has a 1px warm gray border.

NODE 2 — LEFT SEQUENCE node (left side):
Rectangular box on the left, labeled "◑ Utnapishtim Arrives" in IBM Plex Mono 11px. Connected to the center by a horizontal solid line. Between them, the edge is labeled "FOLLOWS" in IBM Plex Mono 9px muted above the line, with a ← arrow indicating direction. The ◑ is in the reconstructed tier color (ochre-gray, #6B5A30).

NODE 3 — CURRENT NODE (center):
Slightly larger rectangular box, center-positioned, with a 2px accent border ring in near-black (#3D3830) — the active node indicator. Contains:
- "● THE FLOOD" in IBM Plex Mono 13px near-black (the ● is the documented tier glyph)
- "[● SURFACE]" chip below the name in IBM Plex Mono 11px — the current depth layer
- "parallel_to: 1" in IBM Plex Mono 10px muted at the bottom of the box
The box background is slightly tinted warm: #F0EBE3.

NODE 4 — RIGHT SEQUENCE node (right side):
Connected to center by a solid horizontal line. Edge labeled "PRECEDES" in IBM Plex Mono 9px muted with → arrow. Box labeled "◑ Plant of Immortality" in IBM Plex Mono 11px.

NODE 5 — PARALLEL node (bottom center):
Connected to the current node by a DASHED vertical line — visually distinct from the solid sequence and containment edges. The dashed line is labeled "PARALLEL_TO" in IBM Plex Mono 9px along its length. The parallel node box has a 2px left-border accent in Mesopotamian amber-gold (#9B6B2F) — tradition identity color. Box labeled:
- "● Genesis" in IBM Plex Mono 12px, first line
- "flood-narrative" in IBM Plex Mono 11px secondary, second line
- "BIBLICAL" in IBM Plex Mono 10px muted, third line
The amber-gold left border is the only warm color accent in the navigator.

EDGE STYLING SYSTEM:
- Solid horizontal lines: sequence edges (FOLLOWS/PRECEDES)
- Solid vertical line: containment edge (CONTAINS)
- Dashed vertical line: parallel edge (PARALLEL_TO) — this visual distinction is crucial
- Edge labels in IBM Plex Mono 9–10px, positioned along the edge line

BELOW THE GRAPH:
"gilgamesh / tablet-xi / flood  [copy]" in IBM Plex Mono 11px muted. Thin rule. Track toggle chips: "[□ PROPP]  [□ BAKHTIN]  [□ TMI]" in IBM Plex Mono 11px.

VISUAL CHARACTER:
The geodesic graph navigator exposes the underlying Fragment Graph data structure directly to the user. It feels like a data visualization tool built for scholars who understand graph topology. The node-edge metaphor is explicit: this fragment exists in a web of typed relationships. The visual language is that of entity-relationship diagrams from technical documentation, but rendered with editorial warmth.

Key visual contrasts:
1. Solid lines (narrative sequence) vs. dashed lines (cross-tradition parallel) — immediately legible
2. Current node has an accent border ring (you are here)
3. The Genesis parallel node has the amber-gold left border (tradition identity)
4. The zoom level tabs (Node/Tablet/Tradition) hint at the graph's multi-scale nature

The graph should look precise and geometric — equal spacing between nodes, clean orthogonal edges, no curved lines. Think entity-relationship diagram or knowledge graph notation, not force-directed network visualization.

VISUAL STYLE:
Same editorial restraint as all variants. No gradients, no shadows, no decoration. The graph diagram looks like a technical reference diagram from a formal specification document. Warm background throughout. All typographic elements in the navigator are IBM Plex Mono.

COLOR PALETTE:
- Background: #F7F3EE
- Panel: #F0EBE3
- Text primary: #1A1714
- Text secondary: #5C5650
- Muted: #9B948C
- Borders/edges: #C4BCB1
- Current node border: #3D3830 (2px ring)
- Parallel (BIBLICAL) left-border: #9B6B2F (amber-gold)
- Dashed edge: slightly lighter than solid edges
- ◑ Reconstructed glyph: #6B5A30 (ochre)
- ● Documented glyph: #4A6B4A or #3D3830

TYPOGRAPHY:
- Content area: EB Garamond 16px
- Navigator: exclusively IBM Plex Mono, 9–13px range
- Edge type labels: IBM Plex Mono 9px muted
- Node content: IBM Plex Mono 11–13px

ATMOSPHERE:
The graph navigator communicates: "this fragment exists in a structured relational space — it has neighbors, ancestors, and cross-civilization echoes. You can traverse any of these relationships directly." It feels like you're looking at the actual data model of ancient narrative, rendered as a navigable map.

RENDER STYLE:
Photorealistic browser UI screenshot, high DPI, no OS chrome, 1440×900. The graph lines should be crisp, not blurry or antialiased in a way that looks like illustration.
```

---

## Negative Prompt

```
No dark mode. No force-directed network graph with curved lines and floating nodes. No glowing nodes. No gradient edges. No network visualization library look (no D3.js force-directed aesthetics). No circular/radial graph layout. No node sizes varying by importance. No color-coded node clusters. No legend with color keys. No parchment texture. No drop shadows. No dark background. Background must be warm #F7F3EE. No sans-serif body text. No sci-fi. No knowledge graph that looks like a neural network visualization.
```

---

## Composition Notes

- Full browser window 1440×900
- The node-edge graph in the right rail should have exactly 5 nodes in the positions described: parent above, current center, sequence left/right, parallel below
- Orthogonal layout (no diagonals) — nodes connected by right-angle edges
- The dashed edge to the Genesis parallel node is the most important visual distinction — must be clearly dashed vs. solid for other edges
- The amber-gold left border on the Genesis node is the only warm accent color

---

## Style Reference Description

Think: entity-relationship (ER) diagram notation from software engineering documentation, rendered with the warmth and care of a museum catalog. The graph should look like something a computer scientist who loves ancient literature would design. Precise, readable, purposeful. Not decorative, not "data visualization" flashy.
