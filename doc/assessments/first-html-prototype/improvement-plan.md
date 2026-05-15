# Mnemosyne Engine — Prototype Improvement Plan & Technical Direction

**Derived from:** Four assessments in this directory, dated 2026-05-15.
**Status:** Ready for team review. Implementation begins after review and sign-off.

---

## Context

Four assessments of the static HTML prototype at `doc/ui-prototype/` were completed on 2026-05-15: two UX/UI reviews (Claude, GPT-5.5), one graphics improvements review (GPT-5.5), and one visual enrichment recommendations document. They converge on a coherent picture:

- The prototype is unusually strong in **visual identity, typography, accessibility, bilingual i18n, and editorial voice** — these are the platform's brand assets and must be preserved.
- Its weaknesses cluster in three areas: **broken navigation paths** (dead-end overview cards, footer placeholders), **insufficient teaching of core systems** (epistemic tiers, depth layers), and **trust-language inconsistency** that would alarm a scholarly audience.
- It is **visually under-evidenced**: there is no imagery, no narrative-structure visualization, no cross-tradition resonance diagram. For a product whose core promise is "show the evidence," the absence of artifact photographs and structural diagrams is a missed credibility lever.

A direct survey of the prototype confirmed: 4,200 lines of HTML across 10 files with ~35–45% duplicated chrome, two ~1,000-line tradition-specific reader files with parallel layer-state machines, 450 i18n keys mirrored manually between EN and RU, and inline `<style>` blocks duplicated per page. Every shared element is a manual sync hazard, and Phase 2's four additional traditions would multiply the reader-file fork pattern.

Two clarifications from the user reshape the plan:

1. **No fixed demo deadline** — sequence by impact-per-day, not by countdown.
2. **PRD §9.1 Next.js commitment is under review** — the production stack is open to revisit.

The goal is "the most impressive prototype demo for scientists as well as a wide audience." Both audiences are served by the same restraint and the same evidence — never by decoration.

---

## Stale findings to drop

Two items in the UX assessments are wrong against the current code. Calling them out so they don't consume a sprint:

1. **GPT-5.5 UX: "`?episode=plant` still shows the Great Flood parallel strip"** — **false under JS.** `FRAG_EPISODES.plant` carries `parallelStrip: false` and `applyEpisode` hides the strip on init (`fragment-view.html` lines 728, 845). The static-extract test that flagged this missed the JS step. The real issue is a no-JS fallback would expose the default Flood markup — that is a fail-open hardening item, not a content bug.
2. **Claude W6: "All five mode buttons appear equally selectable, unavailable revealed post-click"** — **partial.** `updateLayerTabAvailability` adds `layer-tab--disabled` + `aria-disabled` on hydration (line 887+). The remaining issue is the pre-hydration flash and that the disabled styling is only `color: var(--text-dis)`, which is too subtle. Fix is a no-JS markup default and a stronger disabled treatment, not a state-machine rewrite.

---

## Technical direction: **Migrate to Astro + TypeScript**

### The three options, weighed

| Option | Verdict | Why |
|---|---|---|
| **Stay HTML (with small build helpers)** | Reject as long-term path | Solves duplication via runtime chrome injection and an `episodes.json`, but leaves the two ~1,000-line reader forks, no type safety on i18n, no missing-key tooling, no clean place for the artifact manifest, and a known scaling cliff at Phase 2's four new traditions. Fine for a single demo, wrong as a foundation — especially once visual enrichment lands. |
| **Astro + TypeScript** | **Recommended** | Outputs static HTML — preserves the "literary document" feel both UX assessments praised. Component model eliminates the 35–45% chrome duplication *and* gives the visual recommendations (`<ArtifactFigure>`, `<NarrativeMap>`, `<ParallelStructureDiagram>`, `<ConstellationDiagram>`, `<TraditionDivider>`, `<DropCap>`) a single canonical implementation. Islands architecture: only the layer switcher and the constellation interactivity need hydration. Content Collections turn fragments into typed `.md` files with typed frontmatter for `artifacts: [{ src, institution, accession, tier }]` — exactly the artifact manifest the visual reports prescribe. Built-in `/en/.../ru/...` locale routing matches PRD §6.5. TypeScript enforces the **tier-marked imagery rule** at the type level: no image renders without an `EpistemicTier` field. Migration is mechanical (~1.5–2 weeks, full-time equivalent) because the markup ports nearly 1:1. |
| **Next.js / React SPA** | Reject for the prototype | Correct as a *production* target if Phase 2 needs heavy interactivity (search, scholar review UI, character voice), but overkill now. SPA bundle + hydration undermines the document feel; bigger blast radius for accessibility regressions; 3–4 weeks to feature parity; locks the prototype to the production stack when its job is to be cheap to iterate. Astro can be extended with React inside islands later if Phase 2 demands it — it is not a dead end. |

### Why Astro is the right call now (and not later)

- **Visual enrichment is component-shaped.** Every recommendation in the graphics and visual-enrichment reports — artifact figures with tier badges, structure maps, constellation diagrams, Scholaria visualizations, tradition dividers, drop caps — is a reusable visual primitive. Implementing them in 10 hand-edited HTML files would force re-implementation per page; implementing them once as Astro components means every tradition page gets them automatically.
- **Tier-marked imagery becomes a type, not a guideline.** TypeScript lets us model `EpistemicTier` as a discriminated union and require every `<ArtifactFigure>` and `<Image>` component to carry one. The novel "imagery has an epistemic tier" concept stops being aspirational and starts being enforced by the compiler.
- **The duplication pain is real and asymmetric.** Adding the four Phase 2 traditions in plain HTML means 4 more 1,000-line reader forks and 40+ footer touch-ups. In Astro, it's 4 content drops against one `<Reader>` component.
- **No demo deadline removes the migration-eats-polish risk** that would otherwise dominate the call.
- **Accessibility, typography, and color tokens port unchanged.** The CSS custom-property system in the prototype was a deliberate choice that survives any framework move; Astro inherits it. The risk of regression is low if migration preserves markup verbatim.

---

## Visual language: governing principles

Before any visual enrichment is implemented, the team holds these principles. They are non-negotiable because they protect the platform's central brand asset (trust through restraint and evidence).

### The design principle

> **More visual intelligence, not more decoration.**

A visual element earns its place only if it answers one of:
- What am I looking at?
- Where am I in the epic?
- What evidence supports this claim?
- How does this passage relate to another tradition?
- How deep into the scholarly stack am I?

If it does not, it is decoration, and decoration on a trust-aware humanities platform is brand-corrosive.

### What this plan will **not** add

- **No AI-generated illustrations of figures, scenes, or events.** Placing an AI-generated "Gilgamesh fighting Humbaba" on a platform whose entire identity is epistemic provenance would signal that the intellectual honesty is cosmetic. This is unrecoverable.
- **No stock photography or generic parchment textures.** Decoration without provenance pulls the perceived audience toward edutainment.
- **No fantasy maps, cinematic hero portraits, or battle art.**
- **No background images behind long-form reading text.** Reading is the product.

### The novel system: tier-marked imagery

Every image displayed on the platform carries an epistemic tier badge and a source citation, identical in treatment to text content. No major digital humanities platform does this. It turns a category of risk into a category of differentiation.

| Tier | What it means for imagery | Example |
|---|---|---|
| `● DOCUMENTED` | Photograph of an actual surviving artifact | British Museum cuneiform tablet K.3375 |
| `◑ RECONSTRUCTED` | 19th- or early 20th-century scholarly engraving based on partial evidence | Smith's 1875 reconstruction of Tablet XI |
| `◈ CONTESTED` | Artist's reconstruction where the depicted subject is actively debated | Reconstruction of Humbaba's appearance |
| `▲ AI-REVIEWED` | Modern visualization (diagram, map) reviewed for accuracy by a named scholar | Narrative structure maps, Scholaria diagrams (these are the platform's *own* output) |

This rule applies to artifact photographs, scholarly engravings, **and** to the platform's own diagrams: a narrative-structure map is `▲ AI-REVIEWED` content because it is a modern interpretive visualization. The tier badge appears in the caption alongside the source citation.

### Audience positioning

Both UX assessments and both visual reports flag that the prototype targets a dual audience. The plan resolves this by:

- **Default to scholarly restraint** in chrome, typography, and information density — the existing brand wins both audiences.
- **Add one strong visual moment** for general readers on the homepage: a tier-marked artifact photograph (recommend the British Museum Standard Babylonian Gilgamesh tablet, Tablet XI) — not an illustration. This is the only "hero image" the plan endorses, and it must carry its tier badge and citation.
- **Add structural diagrams** that serve both audiences simultaneously — scholars read them as analytical grids, general readers read them as orientation aids.
- **Reserve framework-specific diagrams** (Propp morphology, Thompson Motif Index) for the Scholaria layer where they meet the audience already opting into specialist depth.

---

## Improvement plan, sequenced by impact-per-day

Each phase is a coherent shippable increment. Visual enrichment is interleaved with UX fixes — they share components and translation keys, so doing them together is cheaper than doing them in sequence. After Phase A migration, file paths become Astro routes (`src/pages/...`) — noted where relevant.

### Phase 0 — Pre-migration safety net (≈3 hours)

Done in plain HTML so the live prototype is never visibly broken during the migration window. These are the irreducible trust-killers from both UX assessments.

- **Disable dead-end overview cards** (Claude W1). In `tradition-overview.html` lines 162–190 and `iliad-overview.html` lines 136–164, replace each placeholder `<a href="...overview.html">` with a `<div role="group" aria-disabled="true">`. Apply `opacity: 0.55; cursor: default; pointer-events: none`. Add a visible "Phase 2" badge inside the card body.
- **Disable dead-end Iliad Book XXIV episodes** (Claude W2). In `iliad-book-hub.html` lines 161, 172, same treatment. Promote the existing 11px "coming in next release" line to 14px in the card body.
- **Audit and fix the trust-language conflict** (GPT-5.5 UX R4). Grep `translations.js` for "AI-generated", "not scholar-reviewed", "reviewed by". Any content object that currently carries both "reviewed" and "not scholar-reviewed" labels gets one canonical status. Demo content gets `AI-generated demo · not scholar-reviewed`. Reviewed content gets `AI-generated · reviewed by [Name] · [Date]`. Never both.

### Phase A — Astro migration (≈1.5–2 weeks full-time)

Bring the prototype into Astro with **zero visible content change**. Migration is a substrate move, not a redesign. Visual enrichment lands in subsequent phases.

Order of operations:

1. Scaffold `astro.config.mjs` with i18n routes (`en` default, `ru`), output `static`, no SSR.
2. Port the design tokens from `00-styling.md` and the inline `<style>` blocks into a single `src/styles/tokens.css` + `src/styles/global.css`. Verify visual parity against the live prototype.
3. Extract `<BaseLayout>`, `<Header>`, `<Footer>`, `<Breadcrumb>`, `<TierBadge>`, `<EpistemicLegend>`, `<TraditionCard>`, `<TabletCard>`, `<EpisodeCard>`, `<ParallelStrip>` as `.astro` components. Identical markup to current pages — just deduplicated.
4. Define `src/content/episodes/` as a Content Collection with typed frontmatter:
   ```ts
   { nas, tradition, tablet, tier, layers: ["surface", "translated", "scholaria"],
     parallelTo?: NasUri,
     artifacts?: Array<{ src, institution, accessionNumber, license, tier: EpistemicTier, caption_en, caption_ru }> }
   ```
   Migrate the three Gilgamesh episodes and one Iliad episode into typed `.md` files.
5. Build `<FragmentReader>` as a **single Astro component** that consumes a Content Collection entry, replacing both `fragment-view.html` (1,083 lines) and `iliad-fragment-view.html` (899 lines). The layer-switcher is an Astro Island (`client:idle`) — pure markup until hydration. Remove the fork.
6. Port `translations.js` to `src/i18n/{en,ru}.ts` with a shared `type Keys = …` union. Build fails if any RU key is missing relative to EN.
7. Replace `localStorage` locale toggle with Astro's locale routing: `/en/...` and `/ru/...` paths. NAS addresses remain locale-neutral (PRD §6.5).
8. Introduce the `EpistemicTier` discriminated union and the `<ArtifactFigure>` component (no images consumed yet, but the type is in place). The component requires `tier`, `institution`, `accessionNumber`, `license`, `caption`, `src`. The compiler now refuses untiered images.
9. CI: `astro build` must succeed; one Playwright smoke test per top-level route confirming title + first paragraph render in both locales.

**Acceptance:** the deployed Astro build is visually indistinguishable from the current prototype, all existing links work, locale switch is now URL-based, build catches missing translation keys, the `<ArtifactFigure>` component exists and refuses to render without an epistemic tier.

### Phase B — Trust, clarity, and tradition identity (≈1 week post-migration)

The highest-leverage user-visible work, now cheap because components exist. Combines UX clarity wins with the lowest-risk visual additions.

- **Epistemic Tiers explainer page** (Claude W3 + GPT-5.5 R6). New route `src/pages/[locale]/epistemic-tiers.astro`. Sections per tier with definition, one example sourced from existing Tablet XI content, and the editorial rule that candidates are never surfaced. Extend the page to cover tier-marked imagery — the same four tiers applied to artifacts, engravings, and diagrams. Footer links across the site now resolve.
- **Homepage tier legend** (Claude W4). Inline `<EpistemicLegend>` component below the hero on `src/pages/[locale]/index.astro`, with the four badges visible at first scroll. Link "Learn more →" to the explainer.
- **First-run onboarding panel** (GPT-5.5 UX R1). New `<HowToReadThisPage>` island on `<FragmentReader>`, dismissible, state in `localStorage`. Copy: one sentence per layer in plain language; one sentence per tier badge. Persistent "Help" link in the global header to reopen.
- **Plain-language layer labels** (GPT-5.5 UX R3 + Graphics R5). In `src/i18n/{en,ru}.ts` add `layer.summary`, `layer.interpretation`, `layer.translation`, `layer.original`, `layer.scholarly_notes`. Render the plain label as primary text, keep the poetic term as a small secondary line (`Summary · Surface`). Tooltips on hover.
- **About + Contact pages** (GPT-5.5 UX R10). Minimal but real. About explains the mission, Phase 1 scope, the editorial policy in one paragraph including the tier-marked imagery rule. Contact lists one email and a note welcoming scholar collaboration.
- **Strengthen unavailable-layer treatment** (Claude W6). Static `data-disabled` attribute on the markup itself (works without JS), border + diagonal hatch background, `(unavailable)` inline label at 11px mono, `aria-disabled` and `tabindex="-1"`.
- **No-JS fallback for parallel strip** (GPT-5.5 UX notable issue). When the static page is requested without JS, the parallel strip is `hidden` by default; JS reveals it only when `parallelStrip: true`. Inverts the fail-open behavior.
- **Tradition-specific section dividers** (Visual R6). Two SVG dividers — cuneiform-geometric for Mesopotamian, Greek meander for Iliad — at 8–12 px height, tradition accent color at `opacity: 0.3`, `aria-hidden="true"`. `<TraditionDivider tradition="mesopotamian" />` component replaces `<hr>` in tradition-scoped content.
- **Drop capitals at episode openings** (Visual R7). `<DropCap>` component used at the start of Surface-layer text on each `<FragmentReader>`. 3-line drop cap on desktop, 2-line on mobile, tradition accent color. Tested with both Latin and Cyrillic in EB Garamond.

### Phase C — Engagement, depth, and structural visualization (≈1.5–2 weeks)

The phase where the platform's analytical character becomes visible. These additions are why a literate general reader stays past the first page, and why a scholar takes the platform seriously enough to cite it.

- **Two-column parallel comparison view with structural beat diagram** (GPT-5.5 UX R7 + Graphics R4 + Visual R2). Rebuild the parallel views from a shared `<ParallelView>` component:
  - **Top: `<ParallelStructureDiagram>`** — rows of shared narrative beats (Divine decision → Chosen survivor warned → Vessel preserves life → Birds test dry land → Aftermath); columns per tradition; each cell anchors to the relevant quoted passage; divergence points highlighted. `▲ AI-REVIEWED` tier on the diagram caption with named scholar reviewer.
  - **Middle:** paired text columns with numbered motif anchors (◇1 ◇2 ◇3 …) tying back to the diagram beats.
  - **Bottom:** existing long-form scholarly note.
  - On mobile, the diagram collapses to vertical rows with motif numbers preserved as anchor labels.
- **Parallels Constellation on `parallels-index`** (Visual R2 / R4). Replace the two-card layout with an SVG network diagram — six traditions as labeled nodes (Phase 1 traditions full opacity, Phase 2 at 0.4), documented parallels as labeled connecting lines (psychological-typological / literary-typological / socio-typological), each line clickable to the corresponding parallel view. Text-list fallback below for screen readers. Tier-marked `▲ AI-REVIEWED`.
- **Epic Structure Map on hub pages** (Visual R1). On `tablet-hub.astro` and `iliad-book-hub.astro`, an SVG horizontal sequence — one panel per tablet/book — with availability state, tradition accent color, focusable panels, and a current-position indicator. Solves the navigation-orientation problem and makes Phase 2 growth visible as new panels light up.
- **Episode-level narrative structure mini-maps** (Graphics R3 / Visual R1). On each `<FragmentReader>`, a small inline diagram above the Surface text: decree → warning → boat → flood → birds → sacrifice → immortality for the Flood; Companion dies → confrontation → grief → resolution for Grief. Reuses the `<NarrativeMap>` component.
- **Cross-tradition nav in the chrome** (Claude W5). Gilgamesh ↔ Iliad as sibling tabs in `<Header>` on all interior pages. `aria-current` kept correct.
- **Mobile layer navigation** (GPT-5.5 UX R5 + Graphics R5). Below 480 px the layer tabs become a horizontally scrollable segmented control with snap points. Tap height ≥ 44 px. Active layer gets stronger contrast. Sticky mini-layer pill on long scroll.
- **Next-best-action block** (GPT-5.5 UX R8). At the end of each `<FragmentReader>`, a 3-card "Continue exploring" component: deeper layer if unvisited, parallel if it exists, related episode in the same tablet. Driven by Content Collection metadata.

### Phase D — Material grounding, scholarly depth, and scale (≈2–3 weeks)

The phase that earns scholar respect. Each addition must clear the rights and review process before it ships.

- **Cuneiform tablet photographs in the Original layer** (Visual R4). Source high-resolution images from British Museum (CC BY-NC-SA 4.0) and Met (CC0). Each image rendered via `<ArtifactFigure>` with `● DOCUMENTED`, museum citation, accession number, "View in collection →" link. For tablets that are lost or fragmentary, an honest `◑ RECONSTRUCTED` figure with a 19th-century engraving instead of nothing.
- **Greek pottery and vase paintings in Iliad episodes** (Visual R5). Same `<ArtifactFigure>` treatment. Met (CC0), MFA Boston, British Museum. Pottery dated in caption (e.g., "Attic red-figure, ca. 490–480 BCE"). For scenes with no surviving vessel, omit the figure entirely — no placeholders.
- **Homepage hero artifact** (Visual R8 — strategic decision). Tablet XI Flood account from British Museum, full-width, `max-height: 480px`, subtle warm overlay for headline legibility, `● DOCUMENTED` badge and citation below. Fall back to plain parchment if image fails.
- **Scholaria layer visualizations** (Visual R3 + Graphics R6):
  - **Campbell monomyth arc**: SVG circular arc with 17 named stages; current episode's stages highlighted in tradition accent color; hover for stage descriptions.
  - **Propp morphology**: horizontal sequence of 31 function slots; present functions filled, absent greyed; click for function definition.
  - **Thompson Motif Index**: highlighted motif codes as IBM Plex Mono pill tags; each links to a tooltip with the motif description.
  - All three are `▲ AI-REVIEWED` tier-marked. Degrade gracefully when per-episode Propp/Campbell data is not yet authored.
- **Episode index page** (Claude W7). New `src/pages/[locale]/episodes.astro`. Two-column index, tradition accent borders, availability badges. Driven by Content Collection — new episode = one `.md` file, no template edits.
- **Tablet VIII fragment view to complete the Grief parallel** (Claude W8). Author the lament-of-Gilgamesh-for-Enkidu content with appropriate tier markers and a `<ParallelStructureDiagram>` aligned to the Iliad Book XXIV beats. Remove the "Phase 1 disclosure" line.
- **Phase 2 tradition stubs** as Content Collection placeholders so the homepage tradition spine, the parallels constellation, and the episode index are data-driven and grow with content rather than requiring template edits.

---

## Critical files

**Current prototype (pre-migration):**
- `doc/ui-prototype/tradition-overview.html` — dead-end cards (W1), lines 162–190
- `doc/ui-prototype/iliad-overview.html` — dead-end cards (W1), lines 136–164
- `doc/ui-prototype/iliad-book-hub.html` — dead-end episode cards (W2), lines 161, 172
- `doc/ui-prototype/fragment-view.html` lines 675–742 (`FRAG_EPISODES`, `LAYER_DEFS`), 845, 887 — reader state machine, partial disabled-tab handling
- `doc/ui-prototype/iliad-fragment-view.html` — second reader fork (899 lines, near-identical to fragment-view)
- `doc/ui-prototype/parallel-view.html`, `iliad-parallel-view.html` line 250 — Tablet VIII disclosure
- `doc/ui-prototype/translations.js` — 450 keys × 2 locales, manual mirror, trust-language conflicts
- `doc/wireframes/00-styling.md` — design tokens (port verbatim into Astro)

**Post-migration Astro structure:**
- `astro.config.mjs` — i18n routes, static output
- `src/styles/{tokens.css, global.css}` — extracted design system
- `src/layouts/BaseLayout.astro` — shared chrome
- `src/components/` — chrome (`Header`, `Footer`, `Breadcrumb`), cards (`TraditionCard`, `TabletCard`, `EpisodeCard`, `ParallelStrip`), epistemic (`TierBadge`, `EpistemicLegend`), reader (`FragmentReader`, `LayerSwitcher` island, `HowToReadThisPage` island), visual primitives (`ArtifactFigure` tier-required, `DropCap`, `TraditionDivider`), diagrams (`NarrativeMap`, `ParallelStructureDiagram`, `ConstellationDiagram` island, `MonomythArc`, `ProppMorphology`, `MotifTagCloud`)
- `src/content/config.ts` — Content Collection schema with typed `EpistemicTier` on every artifact
- `src/content/episodes/{flood, sleep-challenge, plant, ransom-of-hector, grief-tablet-viii, ...}.md`
- `src/content/parallels/{flood, grief, ...}.md` — typed parallel definitions including structural beats
- `src/i18n/{en, ru}.ts` — typed translations with build-time parity check
- `src/pages/[locale]/{index, epistemic-tiers, about, contact, episodes, gilgamesh, iliad, ...}.astro`
- `public/assets/artifacts/` — image files with license-manifest enforcement in CI

---

## Verification

**Phase 0 (HTML safety net):**
- Manual click-through: every card on the three overview/hub pages either navigates or is visibly disabled. No card silently reloads the same page.
- Keyboard test: disabled cards are not focusable.
- Grep audit: no `<a>` links back to the same page.
- Trust-language grep: no content object carries both "reviewed by" and "not scholar-reviewed".

**Phase A (Astro migration):**
- `astro build` produces static output visually matching the current prototype at 1280 px and 375 px.
- Removing a key from `src/i18n/ru.ts` fails the build with a typed error.
- Adding an `<ArtifactFigure>` without an `epistemic_tier` prop fails the build.
- Locale switch preserves the NAS URI between `/en/...` and `/ru/...`.
- Lighthouse accessibility ≥ 95 on the four most-visited routes.

**Phase B (Trust, clarity, tradition identity):**
- New user can identify what `● ◑ ◈ ▲` mean from the homepage before clicking into any fragment.
- Footer links reach real pages on every route.
- Onboarding panel appears on first fragment visit, stays dismissed across reloads.
- Tradition dividers are `aria-hidden`, drop caps render correctly in Cyrillic.

**Phase C (Engagement and depth):**
- `<ParallelStructureDiagram>` renders above the fold on desktop; motif anchors cross-link to quoted passages.
- Parallels constellation shows two parallel lines, each clickable; screen-reader list fallback present.
- Hub pages show Epic Structure Map with correct availability states and keyboard-navigable panels.
- Layer switching is thumb-reachable one-handed on a 375-px viewport.
- No `<FragmentReader>` page ends without three contextual next-action cards.

**Phase D (Material grounding and scale):**
- Every `<ArtifactFigure>` carries: tier badge, institution, accession number, license, EN/RU caption + alt text, "View in collection →" link.
- Adding a new episode requires one `.md` file — no layout, nav, or index edits.
- Homepage hero falls back to parchment background if image fails to load.
- Scholaria diagrams are `aria-hidden` when data is absent; no empty-state shown.

---

## What this plan does **not** do

- Does not rebuild in Next.js or React SPA. Deferred to Phase 2 and only if Contextual Personification / Life-Case Query genuinely require an app shell.
- Does not introduce a backend, database, or user accounts.
- Does not change the editorial voice, the typography, or the warm-paper color system.
- **Does not add AI-generated illustrations of figures, scenes, or events.** Brand-corrosive.
- **Does not add decorative stock imagery, fantasy maps, parchment textures, hero portraits, or battle scenes.** Any imagery that ships must be a tier-marked artifact, scholarly engraving, or platform-produced analytical diagram.
- Does not touch the wireframes in `doc/wireframes/`.

---

## Risks and mitigations

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| Astro migration drifts visually from prototype | Medium | Loss of brand asset | Pixel-diff CI gate on Phase A; markup preserved verbatim, only deduplicated |
| Artifact image licensing complications | Medium | Delays Phase D | Source only from confirmed open-access institutions; record license per file in manifest; CI lint fails if `license` field absent |
| SVG diagrams become heavy on mobile | Low | UX regression | Inline SVG with `viewBox`; no JS where possible; constellation uses `client:visible` |
| Tier-marked imagery rule creates friction | Low | Friction during content development | The friction is the feature. Override path: scholar reviewer elevates an image's tier via the same review pipeline as text. |
| Scholaria diagrams blocked by absent data | High | Phase D Propp/Campbell work delayed | Cultural Domain Expert authors per-episode Propp/Campbell mappings in episode frontmatter before visualization ships; visualization degrades gracefully when data absent |
| Plan over-scopes for a small ideation team | Medium | Phases C–D slip | Phases A + B alone resolve every critical UX issue. Phase C is the differentiator for first-impression demos. Phase D is the scholarly credibility pass. Each phase is independently shippable. |
