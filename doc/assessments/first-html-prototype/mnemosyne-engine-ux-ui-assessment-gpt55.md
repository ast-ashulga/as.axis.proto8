# Mnemosyne Engine UX/UI Assessment

**Prototype reviewed:** <https://ast-ashulga.github.io/as.axis.proto8/index.html>  
**Assessment date:** 2026-05-15  
**Reviewer:** GPT-5.5  
**Scope:** Product understanding, user experience, user interface, user impression, strengths, weaknesses, and actionable recommendations.

## Executive Summary

Mnemosyne Engine is a prototype for exploring world epic traditions through layered reading, source grounding, scholarly transparency, and cross-tradition comparison. The active prototype currently presents Gilgamesh and the Iliad, with several additional traditions marked as forthcoming.

The strongest impression is that the product has a distinctive and valuable intellectual premise: it is not just a reading interface, but a trust-aware humanities exploration system. Its best idea is that every claim can be located within an epistemic framework: documented source, scholarly reconstruction, contested debate, or AI-generated interpretation reviewed by a named scholar.

The interface is visually restrained, literary, and credible. It feels more like a digital critical edition, humanities atlas, or scholarly reading room than a conventional consumer reading app. This is a strong identity, but it also creates risk: the most differentiated features are currently too quiet. Many first-time users may not immediately understand what is interactive, how the evidence tiers work, or why the layered model matters.

Overall, the prototype has a strong product soul and a memorable design direction. The next iteration should focus on making the core system more legible, fixing trust-language inconsistencies, strengthening interaction affordances, and improving mobile usability.

## What The App Is About

Mnemosyne Engine is an explorable interface for major epic traditions. It lets users move from tradition overview to book/tablet hub, then into individual episodes/fragments, and from there into parallel passages across traditions.

The product has four central ideas:

- **Layered depth:** users can start with a surface summary and move deeper into narrated interpretation, translation, original-language text, and scholarly notes.
- **Epistemic transparency:** claims are labeled by confidence or provenance, such as documented, reconstructed, contested, or AI-reviewed.
- **Cross-tradition resonance:** passages can be compared across cultures without flattening the differences or implying simplistic borrowing.
- **Scholarly trust:** AI-generated material is intended to be reviewed by named scholars, with sources and manuscript status exposed.

## User Journey Observed

The main flow starts on the landing page, where users see active traditions: Gilgamesh and the Iliad. Each tradition opens into an overview page with introductory context and a grid of tablets or books.

From Gilgamesh, the most developed path is:

1. Landing page.
2. Gilgamesh overview.
3. Tablet XI hub.
4. Flood Episode fragment view.
5. Layer switching between surface, narrated, translated, original, and scholaria.
6. Cross-tradition parallel to Genesis flood material.

From the Iliad, the most developed path is:

1. Landing page.
2. Iliad overview.
3. Book XXIV hub.
4. Ransom of Hector fragment view.
5. Cross-tradition parallel to Gilgamesh grief material.

The parallel index provides a second main route into the product, organizing the experience around resonance cards rather than around individual traditions.

## Product Impression

### General Readers

The app feels beautiful, quiet, and serious. The summaries are emotionally engaging and written in an accessible style. However, general readers may not notice the deeper interactive affordances. The interface assumes a level of patience and interpretive curiosity that may need onboarding.

### Students And Educators

The product has strong educational potential. It could teach not only epic literature, but also how knowledge is constructed: textual transmission, translation choices, scholarly debate, manuscript gaps, and interpretive uncertainty.

### Scholars

The premise is attractive, but scholars will be sensitive to provenance language. Any inconsistency between "AI-reviewed," "demo content," and "not scholar-reviewed" will damage trust. The scholarly audience will also expect stable citations, clear editorial policies, and precise distinction between primary text, interpretation, and generated content.

### Funders, Partners, Or Cultural Institutions

The prototype communicates premium cultural technology. It has a distinctive identity and a strong mission. To feel investment-ready, it needs clearer onboarding, fewer prototype artifacts, and a more polished trust framework.

## Strong Points

### Distinctive Concept

The product promise is unusually clear and differentiated: great epics become navigable through depth, evidence, and comparison. This is not just another archive or reading app.

### Strong Editorial Voice

The Gilgamesh and Iliad summaries are compelling. They are accessible without feeling shallow and interpretive without feeling careless.

### Trust-Centered Architecture

The strongest product idea is epistemic transparency. Badges, source panels, manuscript status, debates, and named reviewers together create a trust model that could become the product's signature.

### Elegant Visual Identity

The warm paper palette, serif typography, subdued borders, and restrained use of color support the subject matter. The app feels literary and serious.

### Layered Reading Model

Surface, narrated, translated, original, and scholaria layers are a powerful structure. They let different audiences use the same object at different depths.

### Cross-Tradition Resonance

The resonance feature is the most product-defining experience. The Great Flood and Grief and the Hero examples show how the product can create insight that ordinary text archives do not.

### Accessibility Foundations

The prototype includes a skip link, semantic navigation, ARIA labels, keyboard-focus styles, tab roles, and shareable URL states for layers.

## Weak Points

### Core Interactions Are Too Quiet

Many interactive elements look like static editorial furniture. Cards, badges, layer tabs, future-tradition panels, and structure controls need stronger affordance.

### The Layer System Is Not Immediately Legible

The layer controls are elegant but cryptic. A first-time user may not know why `[ Surface ● ]` differs from `[ Narrated ○ ]`, what the dot means, or which layer they should choose.

### Epistemic Badges Need Better Teaching

The symbols and labels are meaningful, but they require interpretation. Users need an early and persistent explanation of what the tiers mean.

### Trust Language Is Inconsistent

Some screens communicate that AI-generated content has been reviewed by named scholars, while other text says "AI-generated demo content — not scholar-reviewed." This conflict directly undermines the app's central promise.

### Prototype Artifacts Are Visible

Placeholder footer links, "coming in next release" states, and incomplete fragment views are acceptable for an internal prototype, but they reduce product confidence when viewed as a new product experience.

### Mobile Layer Navigation Is Weak

On mobile, the layer tabs become narrow, tiny, and crowded. The most important navigation mechanism is therefore least usable on small screens.

### Parallel Views Are Dense

The parallel pages are intellectually rich, but visually they read as long vertical documents. The comparison concept would benefit from stronger visual structure.

### Homepage Undersells The Product Magic

The homepage states the mission but does not demonstrate the layered evidence model quickly enough. Users should see the product's distinctive interaction earlier.

## Notable UX And Product Issues

- `fragment-view.html?episode=plant` shows Plant of Immortality content but still displays the Great Flood parallel strip. This feels contextually incorrect.
- Query-based episode pages appear dependent on JavaScript for accurate content state. Static extraction of `?episode=sleep-challenge` returned Flood Episode content.
- Footer links for About, Epistemic tiers, and Contact are placeholders.
- Badge popover close buttons exist in markup but appear hidden by CSS.
- The taxonomy around "Structural resonance" and "Shared human condition" needs clearer hierarchy and naming.

## Recommendation 1: Add First-Run Onboarding For The Reading Model

Users need a quick explanation of how to read a fragment page. The product's system is powerful, but the UI currently expects users to infer too much.

### Actionable Todo Plan

- [ ] Add a compact "How to read this page" panel above the first fragment content area.
- [ ] Explain the five layers in plain language: Summary, Interpretation, Translation, Original, Scholarly Notes.
- [ ] Explain the evidence badges with one sentence each.
- [ ] Include a short example: "Start with Surface, then open Translation or Scholaria when you want the source or debate."
- [ ] Make the panel dismissible, but provide a persistent way to reopen it.
- [ ] Store dismissal state locally so repeat users are not interrupted.
- [ ] Test the onboarding copy with at least three first-time users and ask them what they think the layers do.

## Recommendation 2: Strengthen Click And Tap Affordances

Interactive elements should look interactive before hover or click. This matters especially because the visual style is intentionally minimal.

### Actionable Todo Plan

- [ ] Make tradition, tablet, book, episode, and parallel cards fully clickable.
- [ ] Add consistent hover states for all clickable cards.
- [ ] Add visible "Open", "Read", or "Explore" CTA text to cards where the whole card navigates.
- [ ] Increase tap target sizes for small links and badge controls.
- [ ] Use cursor, border, background, or arrow treatments consistently across clickable cards.
- [ ] Add focus-visible states that make keyboard navigation obvious on card components.
- [ ] Audit each page and classify every interactive element as button, link, tab, disclosure, or static text.

## Recommendation 3: Rename Or Supplement Layer Labels

The current layer labels are elegant but not self-explanatory enough. Users should not have to decode the product vocabulary before reading.

### Actionable Todo Plan

- [ ] Replace or supplement `Surface` with `Summary`.
- [ ] Replace or supplement `Narrated` with `Interpretation`.
- [ ] Keep `Translated`, but consider `Translation`.
- [ ] Keep `Original`, but clarify that it means original-language text.
- [ ] Replace or supplement `Scholaria` with `Scholarly Notes`.
- [ ] Add short tooltips or helper text for each layer.
- [ ] Preserve the more poetic internal terms if desired, but expose plain-language labels in the UI.
- [ ] Run a comprehension check: ask users which layer they would click to see the primary source.

## Recommendation 4: Fix Provenance And AI Review Language

The trust model is the product's core asset. Contradictory provenance language must be resolved before broader sharing.

### Actionable Todo Plan

- [ ] Define allowed provenance states in a single editorial policy.
- [ ] Choose exact labels for each state, such as `Scholar-authored`, `AI-generated reviewed`, `AI-generated unreviewed demo`, and `Primary source`.
- [ ] Remove conflicting combinations like "reviewed by scholar" and "not scholar-reviewed" on the same content object.
- [ ] Add reviewer name, date, and review scope consistently where content is marked reviewed.
- [ ] Add a visible disclaimer for demo-only content if the prototype is not claiming real review.
- [ ] Ensure badge popovers, page headers, source panels, and footer statements use the same language.
- [ ] Create a QA checklist that blocks publication when provenance labels conflict.

## Recommendation 5: Improve Mobile Layer Navigation

Mobile currently preserves the desktop layer tabs, but they become cramped and difficult to parse.

### Actionable Todo Plan

- [ ] Replace the mobile layer row with a horizontally scrollable segmented control or stacked selector.
- [ ] Increase font size and tap height for layer controls on screens below 480px.
- [ ] Keep the active layer visually prominent with stronger contrast.
- [ ] Avoid wrapping layer labels into awkward fragments.
- [ ] Add a sticky mini-layer control if users frequently switch layers while reading.
- [ ] Test layer switching on iPhone-sized screens with one-handed use.
- [ ] Verify the tablist remains accessible to keyboard and screen-reader users after responsive changes.

## Recommendation 6: Add A Persistent Evidence-Tier Legend

Evidence labels are central to the product, but currently users encounter them as isolated badges. A legend would turn symbols into a learned system.

### Actionable Todo Plan

- [ ] Build an `Epistemic tiers` page linked from the footer and from badge popovers.
- [ ] Add a compact legend near the first badge on fragment and parallel pages.
- [ ] Define each tier with plain-language examples.
- [ ] Clarify whether `AI-reviewed` is a provenance tier, epistemic tier, or content-production state.
- [ ] Use the same colors, symbols, and wording everywhere.
- [ ] Add examples from the prototype: manuscript status as documented, textual history as reconstructed, interpolation question as contested.
- [ ] Include the editorial rule: computationally detected parallels are not published until reviewed.

## Recommendation 7: Make Parallel Pages Feel More Comparative

Parallel pages contain strong analysis, but the layout does not fully express comparison. The current experience is mostly vertical reading.

### Actionable Todo Plan

- [ ] Add a desktop two-column comparison area for the paired passages.
- [ ] Highlight matching structural beats across traditions, such as warning, vessel, birds, aftermath.
- [ ] Add a "What matches / What differs / Why it matters" summary near the top.
- [ ] Use visual anchors or numbered motifs to connect the two sides.
- [ ] Keep the current long-form scholarly note lower on the page.
- [ ] On mobile, stack the comparison but preserve paired labels and motif anchors.
- [ ] Add a clear route back to each full fragment view.

## Recommendation 8: Add Next-Best-Action Prompts

Users should always know what to do next. The product has many possible routes, but the current pages often end quietly.

### Actionable Todo Plan

- [ ] Add a small "Continue exploring" block at the end of fragment pages.
- [ ] Offer three contextual actions: read translation, inspect scholarly notes, compare parallel.
- [ ] On hub pages, recommend the most complete or most important episode first.
- [ ] On parallel pages, suggest opening both full fragment views.
- [ ] Track which layer the user is on and tailor next actions accordingly.
- [ ] Avoid generic recommendations; make them specific to the current episode.
- [ ] Review all terminal states so no page ends with only footer links.

## Recommendation 9: Fix Contextual Parallel Recommendations

Parallel strips should only appear when the current episode has a real relevant parallel. Incorrect recommendations weaken trust.

### Actionable Todo Plan

- [ ] Add episode-level metadata for whether a parallel exists.
- [ ] Hide the Great Flood parallel strip for `Plant of Immortality` unless a real plant-related parallel exists.
- [ ] Hide or alter the strip for `Utnapishtim's Challenge` if no parallel is present.
- [ ] Validate URL query states so episode, title, source list, layer availability, and parallel strip update together.
- [ ] Add regression tests for each fragment URL and episode query.
- [ ] Confirm that direct links and browser refresh preserve the correct episode state.
- [ ] Add a "No confirmed parallels for this episode yet" state if useful.

## Recommendation 10: Replace Placeholder Trust Links

Trust-centered products need working trust surfaces early. Placeholder footer links are especially noticeable here.

### Actionable Todo Plan

- [ ] Create a real `About` page explaining the mission, scope, and current phase.
- [ ] Create an `Epistemic tiers` page explaining documented, reconstructed, contested, and AI-reviewed labels.
- [ ] Create a `Contact` or `Editorial contact` page, even if minimal.
- [ ] Link to editorial policy from AI disclosure areas.
- [ ] Link to source and citation policy from fragment pages.
- [ ] Add a phase/status note that distinguishes prototype limitations from production behavior.
- [ ] Audit all `href="#"` links and replace them with real destinations or remove them.

## Priority Roadmap

### Highest Priority

- [ ] Fix provenance language conflicts.
- [ ] Fix incorrect contextual parallel strips.
- [ ] Add evidence-tier explanation.
- [ ] Improve mobile layer navigation.

### Medium Priority

- [ ] Add first-run onboarding.
- [ ] Strengthen click affordances.
- [ ] Add next-best-action prompts.
- [ ] Replace placeholder footer links.

### Lower Priority

- [ ] Refine parallel page layout into a stronger comparison view.
- [ ] Polish taxonomy language around structural resonance types.
- [ ] Expand completed fragment depth for non-demo episodes.

## Final Assessment

Mnemosyne Engine has a rare combination of strong subject matter, clear intellectual purpose, and distinctive product architecture. The core product idea is compelling: make ancient epic traditions navigable while showing users how much confidence they should place in each claim.

The prototype already creates the right atmosphere: serious, textual, warm, scholarly, and humane. Its next challenge is clarity. The interface should teach its own system faster, make interactions more visible, and protect the trust model from inconsistent provenance language.

If those issues are addressed, the product can become a genuinely differentiated platform for epic literature, comparative mythology, and evidence-aware humanities education.
