# Mnemosyne Engine — Visual Enrichment Recommendations

**Prototype:** https://ast-ashulga.github.io/as.axis.proto8/index.html  
**Assessment date:** 2026-05-15  
**Scope:** Art and graphics additions to improve user impression and platform depth

---

## Strategic Context

The prototype's visual restraint — warm parchment, serif body type, monospace metadata, no imagery — is not a deficit. It is a deliberate positioning signal that reads as "scholarly tool" rather than "consumer app." Before adding any art, the team must answer one question: **which audience are you optimizing for?**

- **Scholars and graduate students** → current restraint is correct and credible
- **Educated general readers** ("serious Substack reader" tier) → a single strong visual moment on the homepage would convert them faster than any copy

This is a product strategy call, not a UX call. All recommendations below are annotated for which audience they serve.

---

## What NOT to Add

### AI-Generated Illustrations — Do Not Use

AI-generated depictions of Gilgamesh, Achilles, or any ancient figure are the single most brand-corrosive choice possible. The platform's entire identity is built on epistemic provenance — every claim marked for how confident scholars are in it. Placing an AI-generated "Gilgamesh fighting Humbaba" in the header signals to any scholar who sees it that the platform's commitment to intellectual honesty is cosmetic. This cannot be recovered from.

### Generic Decorative Imagery — Avoid

Stock photography, abstract textures, and ornamental flourishes with no cultural grounding shift the perceived audience toward educational apps and away from the scholarly positioning the design has earned.

---

## The Novel Idea: Tier-Marked Imagery

Before the specific recommendations, note this: **the platform should extend its epistemic tier system to imagery itself.** No major digital humanities platform does this. It would be genuinely unprecedented and coherent with the existing brand:

| Tier | Application to images |
|---|---|
| `● DOCUMENTED` | A photograph of an actual artifact — the clay tablet, the vase painting |
| `◑ RECONSTRUCTED` | A 19th-century scholarly engraving based on partial evidence |
| `◈ CONTESTED` | An artist's reconstruction where the depicted subject is actively debated |
| `▲ AI-REVIEWED` | A modern visualization reviewed for accuracy by a named scholar |

Every image displayed on the platform should carry a tier badge and a source citation, identical in treatment to text content. This turns a potential legal and editorial risk into a direct brand reinforcement.

---

## Recommendations

Organized by impact tier. Each section includes an actionable implementation plan.

---

### Tier 1 — Structure-Revealing Diagrams

These make the platform's existing intellectual architecture visible. No brand risk, no image rights issues, no external dependencies — all original data visualization built on content already in the prototype.

---

#### R1 — Epic Structure Map on Hub Pages

**What:** On `tablet-hub.html` and `iliad-book-hub.html`, replace the current text-only episode list with a visual timeline showing all tablets/books, their availability status, and the reader's current position. Available episodes render full-contrast with their tradition accent color; unavailable episodes are muted with a "coming soon" marker.

**Why:** Solves navigation weakness W7 (no index/TOC) while simultaneously creating a memorable visual identity for each tradition. As content is released, the map fills in — it becomes a visible record of the platform's growth.

**Audience fit:** Both scholars and general readers.

**Todo:**

- [ ] Design the map as a horizontal sequence of numbered panels (one per tablet or book), rendered as SVG or CSS grid
- [ ] Available panels: full tradition accent color border (`--mesopotamian` / `--greek`), episode title in EB Garamond, episode count in IBM Plex Mono
- [ ] Unavailable panels: `opacity: 0.4`, no link, small "Phase 2" or "Coming soon" label in `--text-dis`
- [ ] Mark current position (if navigated to from a specific episode) with a subtle indicator (filled dot above the panel)
- [ ] Ensure the map is scrollable on mobile and keyboard-navigable (each panel is a focusable element)
- [ ] Add `aria-label` to each panel describing its availability status
- [ ] Add corresponding EN and RU string keys to `translations.js` for all labels

---

#### R2 — Parallels Constellation on `parallels-index.html`

**What:** Replace the current two-card layout with a visual network diagram — traditions as labeled nodes, documented parallels as connecting lines, each line labeled with the parallel type (psychological-typological, literary-typological, socio-typological). As more parallels are documented, the constellation grows.

**Why:** Makes the platform's cross-tradition structural ambition immediately visible at a glance. Currently the parallels section feels like two isolated cards; the constellation reveals that this is a system for mapping relationships across all of human epic tradition.

**Audience fit:** Both audiences; especially compelling for general readers who may not grasp the scope from card titles alone.

**Todo:**

- [ ] Implement as an SVG diagram with nodes for each tradition (Gilgamesh, Iliad, Metamorphoses, Mahabharata, Manas, Jangar)
- [ ] Position Phase 1 traditions (Gilgamesh, Iliad) with full opacity and tradition accent colors; Phase 2 traditions with `opacity: 0.4` and a "Phase 2" label
- [ ] Draw connecting lines between traditions that share a documented parallel; label each line with the parallel name and type
- [ ] Make each connection line clickable, linking to the corresponding `parallel-view.html` or `iliad-parallel-view.html`
- [ ] Add a legend below the diagram explaining the three parallel type classifications
- [ ] Make the SVG responsive (scales within the 720px content column)
- [ ] Provide a text fallback below the SVG listing all parallels as an accessible list for screen readers
- [ ] Add EN and RU translation keys to `translations.js` for all diagram labels

---

#### R3 — Monomyth Arc and Propp Morphology Visuals in Scholaria Layer

**What:** In the Scholaria reading mode on fragment-view pages, add a small diagram for each annotation track: a Campbell monomyth circle with the current episode's position marked; a linear Propp function sequence with the current functions highlighted; Thompson Motif Index shown as a tag cluster with motif codes.

**Why:** The Scholaria layer currently presents structural annotations as text. Most users — even educated ones — cannot visualize what "Call to Adventure" or "F1 — Magic object" means in the context of the whole. A diagram makes the annotation layer explanatory, not just labeling.

**Audience fit:** Primarily scholars and graduate students. General readers benefit from the monomyth arc (widely known from Campbell popularizations); Propp and Thompson are specialist.

**Todo:**

- [ ] Campbell monomyth: render as a circular arc SVG with 17 named stages; highlight the stage(s) active in the current episode using the tradition accent color; add a tooltip on hover with the stage description
- [ ] Propp morphology: render as a horizontal sequence of 31 function slots; fill in the functions present in the current episode; gray out absent functions; clicking a function reveals its definition
- [ ] Thompson Motif Index: render highlighted motif codes as pill-shaped tags using IBM Plex Mono; each tag links to an anchor or tooltip with the motif description
- [ ] All three diagrams should appear inside the existing Scholaria panel, above the text annotations
- [ ] Ensure diagrams degrade gracefully if Scholaria data is incomplete for an episode (hide diagram, do not show empty state)
- [ ] Add EN and RU translation keys for all diagram labels and tooltips

---

### Tier 2 — Artifact Photography

Photographs of historical artifacts are not decoration — they are primary sources. A photo of the cuneiform tablet containing the Flood narrative is a `● DOCUMENTED` object with its own epistemic weight. Treating it as such is directly on-brand.

---

#### R4 — Cuneiform Tablet Photos in the Original Reading Layer

**What:** When a user selects "Original" mode on a Gilgamesh fragment, display a photograph of the actual cuneiform tablet or fragment alongside the transliteration text. Each photo carries a tier badge (`● DOCUMENTED`), a museum source citation, and an accession number.

**Why:** The single most emotionally powerful addition possible for the Gilgamesh content. Seeing the actual clay tablet — cracked, ancient, real — transforms the reading experience from abstract to visceral. It is also the most epistemically honest thing the platform could do: showing the literal primary source.

**Audience fit:** Both audiences strongly. Scholars want the artifact reference; general readers are moved by it.

**Image sources (confirmed open access):**

| Institution | Collection | License |
|---|---|---|
| British Museum | Cuneiform tablets incl. Standard Babylonian Gilgamesh tablets (K.3375, K.2252, etc.) | Open access (CC BY-NC-SA 4.0) |
| Metropolitan Museum of Art | Near Eastern antiquities | Open access (CC0) |
| Smithsonian Institution | Near Eastern collections | Open access |

**Todo:**

- [ ] Source and download high-resolution photographs of the key Gilgamesh tablets from the British Museum and Met open access collections; verify license for each image before use
- [ ] Create an image manifest file (`/assets/artifacts/manifest.json`) mapping each `nms://` episode URI to its artifact photograph(s), with fields: `file`, `institution`, `accession_number`, `description`, `license`, `epistemic_tier`
- [ ] In `fragment-view.html`, when the "Original" layer is selected, render the artifact photo above the transliteration text inside a styled `<figure>` element
- [ ] Style the figure: `max-width: 100%`, subtle warm border (`1px solid var(--border)`), caption in 13px IBM Plex Mono showing institution + accession number
- [ ] Apply the epistemic tier badge (`● DOCUMENTED`) to the figure caption, identical in treatment to text content badges
- [ ] Add a "View in collection →" link pointing to the institutional record (use `rel="noopener noreferrer"`)
- [ ] Add EN and RU captions and alt text to `translations.js`
- [ ] For episodes where the corresponding tablet is lost or fragmentary, display an honest disclosure ("The original tablet for this section has not survived; the text is reconstructed from parallel manuscripts") with `◑ RECONSTRUCTED` tier badge

---

#### R5 — Greek Pottery and Vase Paintings in Iliad Episodes

**What:** In Iliad fragment views (and the `iliad-fragment-view.html` page), display photographs of Attic black-figure or red-figure pottery depicting the episode's events. Each image carries a tier badge, museum source, and date range.

**Why:** The Iliad is depicted extensively on Greek pottery contemporary with or earlier than the textual tradition. These are primary sources in their own right — not illustrations of the text but parallel documents of the same mythological tradition. Showing them alongside the text makes the literary parallel system tangible.

**Audience fit:** Both audiences. Art historians and classicists will recognize specific vessels; general readers are visually captivated.

**Image sources (confirmed open access):**

| Institution | Collection | License |
|---|---|---|
| Metropolitan Museum of Art | Greek and Roman art (thousands of vases) | Open access (CC0) |
| Museum of Fine Arts, Boston | Greek vases | Open access |
| British Museum | Greek pottery | Open access (CC BY-NC-SA 4.0) |

**Todo:**

- [ ] Source photographs for the documented Iliad episodes: focus on Book XXIV scenes (Priam at Achilles' tent, ransom of Hector) from the Met and MFA open access collections
- [ ] Extend the artifact manifest (`/assets/artifacts/manifest.json`) to include Iliad episode mappings
- [ ] Apply identical rendering treatment as R4: `<figure>` with tier badge, caption, accession link
- [ ] Note pottery date range in caption (e.g., "Attic red-figure, ca. 490–480 BCE") — this is epistemically meaningful since some vessels predate surviving manuscript traditions
- [ ] For scenes that do not appear on surviving pottery, do not show a placeholder — omit the figure entirely; show no false affordance

---

### Tier 3 — Cultural Micro-Ornaments

Low-effort additions that reinforce the scholarly book aesthetic without illustration or image rights complexity.

---

#### R6 — Tradition-Specific Section Dividers

**What:** Replace plain `1px` horizontal rules at section breaks with thin ornamental SVG dividers grounded in each tradition's visual culture: a cuneiform-inspired geometric pattern for Mesopotamian content; a Greek key (meander) pattern for Iliad content.

**Why:** Reinforces cultural identity at the micro-level without heavy imagery. Consistent with the scholarly book aesthetic.

**Todo:**

- [ ] Design two SVG dividers: one cuneiform-geometric (based on the angular patterns common in Mesopotamian decorative art), one Greek meander/key pattern
- [ ] Keep each divider to 8–12px height, full content column width, using the tradition accent color at `opacity: 0.3`
- [ ] Replace existing `<hr>` elements in tradition-specific content with `<div class="divider divider--mesopotamian">` or `divider--greek`
- [ ] Ensure dividers are `aria-hidden="true"` (purely decorative)
- [ ] Test that dividers render correctly at all three responsive breakpoints

---

#### R7 — Drop Capitals at Episode Openings

**What:** The first letter of each Surface-layer episode text, rendered as a 3-line drop capital in EB Garamond at a slightly heavier weight, colored with the tradition accent color.

**Why:** Classical manuscript tradition, directly consistent with the scholarly book aesthetic. Creates a visual anchor at the start of each episode that signals "this is where the reading begins."

**Todo:**

- [ ] Target the first `<p>` element inside each Surface-layer content block on fragment-view pages
- [ ] Apply a CSS `::first-letter` pseudo-element with `float: left; font-size: 3.5em; line-height: 0.85; margin-right: 0.05em; color: var(--tradition-accent)`
- [ ] Verify the drop cap does not break on mobile (reduce to 2-line drop cap at mobile breakpoint or remove the float)
- [ ] Test with both English and Russian text — ensure Cyrillic first letters render correctly with the same EB Garamond treatment

---

### Tier 4 — Homepage Hero Image

**What:** A single, carefully chosen archival photograph on the homepage — a close-up of a cuneiform tablet in raking light, or a detail of Greek pottery depicting a scene from the Trojan War.

**Why:** Currently the homepage is pure typography. One strong image creates an immediate emotional hook that text alone cannot: it signals "this is real" — real clay, real paint, real ancient hands. It also communicates scale and gravitas before the user reads a single word.

**Risk:** This is the highest-risk recommendation. A hero image tips the visual language toward consumer/editorial (think literary magazine) and away from the austere scholarly tool positioning. If the primary audience is academic, the current restraint may be more credible. Treat this as a positioning bet that requires an explicit strategic decision, not a default improvement.

**Todo (if the strategic decision is made to proceed):**

- [ ] Select one image: recommend a detail photograph of the Standard Babylonian Gilgamesh tablet (Tablet XI, Flood account) from the British Museum — it is the most famous ancient tablet in the world and directly relevant to Phase 1 content
- [ ] Verify British Museum open access license for the specific accession (confirm CC BY-NC-SA 4.0 applies)
- [ ] Position as a full-width image at the top of `index.html`, constrained to `max-height: 480px`, `object-fit: cover`, `object-position: center`
- [ ] Apply a subtle warm overlay (`background: rgba(26, 23, 20, 0.25)`) to ensure the homepage headline text remains legible over the image
- [ ] Add `aria-hidden="false"` with a descriptive `alt` attribute citing the artifact (e.g., "Tablet XI of the Standard Babylonian Gilgamesh, British Museum, ME K.3375, ca. 7th century BCE")
- [ ] Add a small `● DOCUMENTED` tier badge and source caption below the image, identical in treatment to artifact photos in the Original layer
- [ ] Test: the homepage headline must remain legible at all viewport widths over the image; fall back to the plain parchment background if the image fails to load

---

## Summary Table

| # | Recommendation | Impact | Brand Fit | Effort | Audience |
|---|---|---|---|---|---|
| R1 | Epic structure map on hub pages | High | Perfect | Medium | Both |
| R2 | Parallels constellation diagram | High | Perfect | Medium | Both |
| R3 | Scholaria layer diagrams (Propp, Campbell, Thompson) | High | Perfect | High | Scholars |
| R4 | Cuneiform tablet photos in Original layer | High | Perfect | Medium | Both |
| R5 | Greek pottery in Iliad episodes | High | Perfect | Medium | Both |
| R6 | Tradition-specific section dividers | Medium | Good | Low | Both |
| R7 | Drop capitals at episode openings | Low–Medium | Good | Low | Both |
| R8 | Homepage hero image | Medium–High | Positioning bet | Low–Medium | General readers |
| — | AI-generated illustrations | Negative | Brand-corrosive | — | — |

## Implementation Order

Given the epistemic commitment of the platform, implement in this sequence:

1. **R1 + R2** — structure-revealing diagrams first; no rights issues, directly address existing navigation weaknesses
2. **R4 + R5** — artifact photography; source images carefully, implement the tier-marked imagery system before adding any image to any page
3. **R6 + R7** — micro-ornaments; low effort, can be done in parallel with R4/R5
4. **R3** — Scholaria diagrams; highest effort, requires Propp/Campbell data to be structured in a queryable format
5. **R8** — homepage hero; only after the strategic audience question is settled
