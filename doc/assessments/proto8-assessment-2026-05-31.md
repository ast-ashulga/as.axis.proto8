---
type: assessment
prototype: proto8
date: 2026-05-31
authors: [product-lead, ux-creative-lead, cultural-domain-expert, technical-lead]
prototype-url: https://ast-ashulga.github.io/as.axis.proto8/en/
---

# Mnemosyne Engine — Comprehensive Assessment Report
**Date**: 2026-05-31 | **Proto8 state**

---

## I. Honest Current State

The prototype is more capable than it looks from the file list, and more limited than the PRD implies.

**What actually runs at the live URL:**
- Functional layer switching (proper JavaScript tablist, one layer visible at a time — Astro is not the problem)
- Genuine translated text (Thompson 1930, correctly cited), real scholarly apparatus, George vs. Tigay debate present
- Propp/Campbell/TMI annotations with confidence tiers, inline popups with attribution
- NAS addresses visible throughout, copy-to-clipboard functional
- EN + RU locale parity on all routes
- PostHog instrumented

**What doesn't exist anywhere:**
- A database. A backend. An API. An AI pipeline. Scholar review tooling.
- Content for Genesis (the flood parallel's other side).
- Bakhtin chronotopes (replaced by Campbell, which was not the PRD choice).
- Any user who has actually navigated it and told you what they experienced.

The gap between the demo's presentation quality and its architectural reality is the central problem to resolve before committing to any next build decision.

---

## II. What the Prototype Has Actually Validated

These bets are **proven**:

| Bet | Evidence |
|---|---|
| The manuscript aesthetic is differentiated | The visual identity is coherent and nothing like any competitor. EB Garamond + warm off-white + Plex Mono works. Keep it exactly. |
| Epistemic tier badges are legible as a UI pattern | Badges render, are accessible, and clicking them explains meaning on demand. Non-experts don't need a legend. |
| Onion layer switching is technically sound | Proper `role="tablist"`, `aria-selected`, `aria-controls`. One layer at a time. Architecturally correct. |
| NAS as a visible design element communicates "stable identity" | `nms://gilgamesh/tablet-xi/flood` reads as a reference anchor without explanation. |
| EN/RU locale routing is additive and structurally sound | Both locales work; switching preserves context; no structural rework required for more languages. |
| Scholarly apparatus for the flood episode is credible | George/Tigay debate is present, Thompson attribution is correct, manuscript variants are cited. This page could show to a Near Eastern scholar without embarrassment. |

These bets are **not proven** — and they are the ones the product lives or dies on:

| Unvalidated Bet | Why It Matters |
|---|---|
| Users switch depth layers unprompted | The Onion Model is the core differentiator. No behavioral data exists. |
| The parallel view creates genuine insight | The flood parallel page exists; zero evidence it shifts how users think vs. just reads as "interesting." |
| 600 fragments with AI summaries can pass the editorial trust bar | The AI pipeline has never been run once. |
| Tier enforcement is actually architectural | Right now it's a Zod enum. Nothing prevents serving `ai-reviewed` content as `documented`. |

---

## III. Critical Issues by Domain

### Product & Vision

**The most dangerous assumption you're operating on**: The Onion Model is a user behavior, not just a content structure. The five-layer depth model is elegant as information architecture. Whether users navigate it like a well — rather than reading the surface and leaving — has never been tested. This single finding changes what the product actually is.

**The scope problem**: You built a content prototype for three traditions before Phase 1's single tradition is complete. Gilgamesh/Iliad/Mahabharata gives the impression of breadth. It costs you depth. The PRD's Phase 1 bet was: *prove one tradition completely, prove one parallel honestly*. That bet is half-complete.

**What's missing that's supposed to be the point**: The flood parallel asserts `nms://genesis/genesis/flood` — but there is no Genesis content. You are claiming a cross-tradition relationship with a tradition that has zero representation in the system. The flood parallel is the product's headline demonstration. It is currently one-sided.

### UX & Design

**The HowToReadThisPage panel is actively harmful.** It appears inline, above the episode content, between the episode heading and the layer tabs — a full legend for five concepts the user has not yet encountered. It creates anxiety rather than invitation. Remove it from the default position. The layer tab itself should be the explainer: on first click of an unfamiliar tab, show a one-line tooltip. Move the panel content to an optional "?" link in the tab row.

**Five layers shown when only three have real content.** The Narrated and Original tabs exist with `[demo content]` banners. A non-expert clicks "Narrated," reads "AI-generated demo content — not scholar-reviewed," and trusts the platform less. Remove demo-content tabs from default rendering, or replace the label with "coming soon" to signal a roadmap item rather than a failed quality check.

**The NAS address is the first thing below the breadcrumb** — before the episode title. To a non-expert it reads as a broken link or a technical artifact. Move it below the episode title, visually de-emphasize it, or reserve it for the Scholaria layer. It is a tool for scholars copying references, not an entry signal.

**The parallel strip is hidden until JavaScript runs.** It's revealed by `document.getElementById('parallel-strip')?.removeAttribute('hidden')`. The cross-tradition parallel is the product's central value proposition. Render it visible in HTML. Use JS only to enhance it.

**The step from Surface to the next layer is the hardest moment in the platform.** The layer tabs are visually quiet. There's no signal that you're at layer 1 of 5 or an invitation to go deeper. Fix: add a closing line at the bottom of the Surface layer that names what lives below — *"There are four more ways to read this episode: from the original translation to the manuscript debate."* That sentence makes the tabs meaningful without explaining them in advance.

**First 60 seconds, traced:**
1. Landing page — good prose, clear CTA, enters Gilgamesh
2. Tradition overview → Tablet XI → Flood episode
3. Lands on episode page: first thing seen is `nms://gilgamesh/tablet-xi/flood [copy]` — reads as error
4. HowToReadThisPage panel appears inline — skimmed, dismissed
5. Reads Surface summary — good prose, right length
6. Nothing moves them forward. Layer tabs are quiet. No "1 of 5" signal. Parallel strip invisible until JS.
7. Gets lost or stops here.

The depth is not invisible — it is present — but there is nothing that *invites* downward motion.

### Cultural & Scholarly

**The flood parallel is missing its other half.** Add the Genesis passage. It's 31 verses of KJV (definitively public domain). The structural comparison — divine decision, single chosen survivor, boat, birds, sacrifice, covenant vs. immortality — is 3–4 hours of content work. This is the one content gap that most damages scholarly credibility right now.

**Bakhtin chronotopes are absent; Campbell is present instead.** The PRD specifies Bakhtin as a required annotation track. Campbell (Hero's Journey) is not in the PRD's methodology and is the most contested framework in comparative mythology. The Adventure chronotope (Bakhtin) is a better structural fit for Tablet XI and would directly distinguish Gilgamesh from the Mahabharata in ways that matter. Add Bakhtin to Tablet XI. Remove or clearly label Campbell as a "secondary/exploratory" track.

**Propp assignments are epistemically inconsistent across traditions.** PROPP-8 (Villainy/Lack) maps correctly onto Gilgamesh and defensibly onto the Iliad. For Arjuna's Grief, it does not — Arjuna's paralysis is a refusal in the face of competing dharmic obligations, not a lack in Propp's sense. Propp's framework derives from Russian fairy tale morphology and maps onto linear quest narratives. The Bhagavad Gita is not a quest narrative. Applying Propp without a note about this structural mismatch is a misrepresentation dressed as analysis.

**The Bhagavad Gita content carries serious cultural risk if it goes to real users.** The Gita is an active religious scripture for approximately 1.2 billion people. Applying Propp functions and Campbell monomyth stages to it — in the same frame as Mesopotamian archaeology — reads to a Hindu reader as the kind of externally-imposed structuralist flattening historically used to de-theologize Indian traditions. The Mahabharata content should be stubbed and marked internal-only before any user exposure. It does not need to be deleted; it needs a different entry frame: acknowledgment of living tradition status, deference to emic categories (dharma, karma, moksha) before etic ones.

**Bakhtin on Tablet XI — highest-payoff annotation work available.** The flood episode contains the clearest example of Bakhtin's Adventure chronotope: time becomes reversible or suspended (seven days of rain, seven-day vigil), space becomes liminal (ship between worlds), causality operates on mythological rather than biographical scale. This is well-defined enough that AI can propose assignments for scholar review, and the outcome directly earns the confidence tier.

**The `ai-reviewed` confidence tier has diverged from the PRD.** The PRD defines four tiers: Documented / Reconstructed / Contested / Inspired, where review-status (Candidate) is a separate axis. `ai-reviewed` conflates confidence tier with review workflow state. Must be resolved before committing to a DB schema.

**Tablet VIII sourcing gap.** The prototype uses Thompson 1930 for the translated layer but cites George 2003 in the Scholaria. George substantially revised the reconstruction of Tablet VIII, which predates significant scholarship in Thompson. This creates a coherence gap scholars will notice.

### Technical

**NAS is decorative, not functional.** Every NAS address appears twice: in content frontmatter and hardcoded in the corresponding template. Navigation uses hand-wired `withBase('/…')` hrefs — not NAS resolution. The `parallelTo` field points to URIs that resolve to nothing. Correct for a prototype. A debt to acknowledge before any backend work.

**One template per fragment is not a system.** `FloodReader.astro`, `GriefReader.astro`, `PlantReader.astro`, `SleepChallengeReader.astro` — authored by hand. Narrative prose lives in i18n string tables (`tr.frag_surf_flood_p1`), not in the content collection. Content schema only carries annotations. This is backwards relative to the Fragment Graph as source of truth. Cannot reach 600 fragments this way.

**The Astro vs. Next.js choice is not the decision that matters.** It's two weeks of migration work. The real decision is: when do you stand up the Fragment Graph? Astro can build from a database export or API call. Don't pivot the front-end framework until you know what the data layer requires.

**Minimum viable backend to unlock the architectural bets** (in priority order):
1. PostgreSQL + a `fragment` table with `tier CHECK` constraint — proves epistemic enforcement is architectural
2. NAS resolver — function that takes `nms://gilgamesh/tablet-xi/flood` and returns the fragment record
3. pgvector + embeddings on the existing ~7 full fragments — proves parallel detection feasibility before scaling
4. One AI decomposition run on a single tablet — the riskiest bet has never been touched
5. Candidate → confirmed promotion step — even a Python script proves human-in-loop at minimal cost

---

## IV. Prioritized Next Steps

### Step 1 — Run the layer discovery test (before any code)

Recruit 5 people who haven't seen the prototype. Share the flood episode URL. Task: "Read this story as deeply as you want." Watch two things: (a) do they notice the layer tabs without prompting, (b) if they click a layer, do they understand why the content changed? PostHog is already instrumented — pull whatever data you have now. If you have zero organic sessions, seed it with 20 specific people and observe. This test costs nothing and determines whether Bet 1 is alive or dead.

### Step 2 — Complete the flood parallel (3–4 hours of content work)

Add the Genesis 6–9 passage to the parallel view. This is the product's headline demonstration. It is currently one-sided. Not a research task — the KJV is public domain, the structural mapping is well-documented, and the scholarly framing already exists in the PRD.

### Step 3 — Fix the three UX problems that undermine trust

In this order:
1. Move or remove the HowToReadThisPage inline panel
2. Hide or rename Narrated/Original tabs if content isn't real (the "demo content" label is a trust problem)
3. Move the NAS address below the episode title

These three changes make the prototype honest again. Less than a day combined.

### Step 4 — Design the Fragment Graph data model on paper (not in code)

Cultural Expert + Technical Lead + Product Lead produce a joint document: minimum viable Fragment Graph to serve the flood episode with real confidence tier enforcement. Specifically: resolve the `ai-reviewed` / `Inspired` tier divergence, nail down NAS taxonomy for Gilgamesh following Andrew George (2003), define the minimum Candidate → Confirmed review step. 2-day design exercise, not a build task.

### Step 5 — AI pipeline proof of concept on one fragment

Pick the flood episode. Run an LLM-assisted Surface summary, annotate it with confidence tiers manually, document what the human review step actually requires. If output quality requires substantial remediation per fragment, the 12-week schedule is wrong.

---

## V. What to Skip

| Skip | Reason |
|---|---|
| Fragment Graph implementation now | Don't build before knowing what queries it must serve. Design first. |
| Scholar review interface | Can't design it until the actual review workflow is known in practice. Nothing to review yet. |
| Stub traditions (Aeneid, Beowulf, Dune, Warhammer, etc.) | Exist in content schema, nowhere in UI. Delete from the index. They signal ambition but create confusion. |
| Phase 2 features (Character Voice, Life-Case Query) | The epistemic infrastructure they require doesn't exist. Not a current decision. |
| Mahabharata for public-facing release | Needs a fundamentally different editorial frame before user exposure. Keep internal. |
| Adding more tradition pages before Gilgamesh is complete | 4 episodes implemented out of a claimed 15. Finish the one tradition before expanding. |

---

## VI. Data Needed Before the Next Phase

1. **PostHog behavioral data** — layer switching rate, parallel page visits, time-on-page per section. Pull this now.
2. **5 moderated user sessions** — specifically testing layer discovery and parallel view comprehension.
3. **One honest content availability estimate** — of the 600–700 fragments claimed for Phase 1, how many public domain translation passages actually exist and are legible? What is real vs. theoretical scope?
4. **One AI decomposition run on a single tablet** — with manual review, document the rejection rate and remediation time. This is the most important technical unknown.
5. **Resolution of the Diakonoff copyright question (O-05)** — doesn't block EN work, but must be resolved before any RU Layer 2 planning.

---

## VII. Summary Verdict

The prototype has done exactly what it should: it made the product tangible enough to discuss, test, and argue over. The visual identity is strong. The structural concepts are correctly implemented. The epistemic tier system is working as a UI pattern.

The prototype has not done the harder thing: it has not validated whether anyone actually uses the depth navigation, whether the parallel view creates the insight it promises, or whether AI content can honestly pass an editorial bar. Those three unvalidated bets are the product's entire thesis.

The highest-leverage move right now is not to build anything. It is to test the thing that exists with real people, complete the flood parallel so the demonstration piece is actually complete, and spend two days designing the data model before writing a line of backend code.

**The one thing to avoid above all else**: building more before knowing whether what you have works.

---

*Synthesized from specialist assessments by product-lead, ux-creative-lead, cultural-domain-expert, and technical-lead agents, plus direct analysis of the live prototype at `https://ast-ashulga.github.io/as.axis.proto8/en/`.*
