# Mnemosyne Engine — UX/UI Assessment Report

**Prototype:** https://ast-ashulga.github.io/as.axis.proto8/index.html  
**Assessment date:** 2026-05-15  
**Pages audited:** 12 distinct views across 9 HTML files + full `translations.js` (451-key i18n system)

---

## What the App Is

**Mnemosyne Engine** is a scholarly reading platform for the world's great epic traditions. Its core proposition: present ancient epic texts at multiple simultaneous levels of depth — from plain-language summary to original-language transliteration — while being radically transparent about the epistemic status of every claim (primary source, scholarly inference, contested, or AI-generated but scholar-reviewed).

**Phase 1 content:** Epic of Gilgamesh (6 tablets, 15 episodes) and the Iliad (24 books, 16 episodes). Four more traditions (Metamorphoses, Mahabharata, Manas, Jangar) announced for Phase 2.

**Languages:** Fully bilingual English/Russian — 451 translation keys, full literary prose in both languages, `localStorage` persistence.

---

## Site Map

```
index.html  (Homepage)
├── tradition-overview.html  (Gilgamesh overview)
│   ├── Tablets I–V  → ❌ DEAD — loop back to same page
│   └── Tablet XI   → tablet-hub.html  ✓
│       ├── fragment-view.html  (The Flood)                       ✓
│       ├── fragment-view.html?episode=sleep-challenge            ✓
│       └── fragment-view.html?episode=plant                      ✓
├── iliad-overview.html  (Iliad overview)
│   ├── Books I, VI, IX, XVI, XXII  → ❌ DEAD — loop back
│   └── Book XXIV  → iliad-book-hub.html  ✓
│       ├── Episode 1 (The Gods Decide)      → ❌ DEAD — loop back
│       ├── Episode 2 (Priam's Night Journey)→ ❌ DEAD — loop back
│       └── Episode 3 (The Ransom of Hector) → iliad-fragment-view.html  ✓
└── parallels-index.html
    ├── parallel-view.html  (Flood: Gilgamesh ↔ Genesis)          ✓
    └── iliad-parallel-view.html  (Grief: Iliad ↔ Gilgamesh)      ✓ / partial

Footer: About, Epistemic tiers, Contact  → ALL href="#" (dead)
```

---

## Visual Design Assessment

### Typography — Excellent

- **EB Garamond** (body, headings, passage text) + **IBM Plex Mono** (metadata, labels, nav wordmark)
- This pairing is unusual and deliberate — it reads as "annotated scholarly document," not generic webapp
- Body: 16px / 1.7 line-height — comfortable for long-form reading
- Tight, consistent type scale: 32 → 20 → 18 → 16 → 14 → 13 → 11px

### Color System — Excellent

Warm parchment palette via CSS custom properties:

| Token | Value | Use |
|---|---|---|
| Background | `#F7F3EE` | Page background, aged paper feel |
| Surface | `#F0EBE3` | Card backgrounds |
| Primary text | `#1A1714` | Warm near-black |
| Secondary text | `#5C5650` | Labels, captions |
| Links | `#5C4B35` | Warm brown |

**Tradition accent colors** (border accents and tradition labels):

| Tradition | Color | Hex |
|---|---|---|
| Mesopotamian | Ochre | `#9B6B2F` |
| Greek | Terracotta | `#B05B3B` |
| Roman | Slate blue | `#4A6B8A` |
| Indian | Gold | `#B8860B` |
| Central Asian | Green | `#3D7A5C` |

**Epistemic tier colors** (green → amber → red → purple maps confidence descending — semantically coherent):

| Tier | Color | Hex |
|---|---|---|
| Documented | Muted green | `#4A6B4A` |
| Reconstructed | Amber-brown | `#6B5A30` |
| Contested | Muted red | `#7A4040` |
| AI-Reviewed | Slate purple | `#4A4A6B` |

### Layout — Excellent

- 720px content column — correct for ~65–75 char lines at 16px serif
- 48px sticky nav, appropriately minimal
- Responsive breakpoints at 1279 / 1023 / 767px
- 24px card padding, 1px warm-tinted separators (no heavy rules)

---

## Information Architecture

### The Epistemic Tier System (●/◑/◈/▲)

The platform's most distinctive feature. Every content block carries one of four confidence markers:

- `● DOCUMENTED` — primary source, strong scholarly consensus
- `◑ RECONSTRUCTED` — inferred from partial evidence, acknowledged gaps
- `◈ CONTESTED` — active scholarly debate visible to the user
- `▲ AI-REVIEWED` — AI-generated interpretation reviewed by a named scholar

Applied consistently across card left-border accents, inline badges, annotation rows, and the parallels index. Each badge is expandable with a pop-up explanation in context. Genuinely novel and principled.

### Five Reading Modes (Layer Selector)

Present on fragment-view pages:

1. **Surface** — Interpretive summary
2. **Narrated** — Audio version *(disclosed as not yet available)*
3. **Translated** — Primary text in English translation
4. **Original** — Transliteration/cuneiform *(disclosed as not yet available per episode)*
5. **Scholaria** — Annotation tracks (Propp morphology, Campbell monomyth, Thompson Motif Index)

Maps directly onto how scholars and general readers actually approach ancient texts. Correct levels and correct names. The honest disclosure of unavailable layers builds trust rather than hiding empty content.

### NMS URI Citation System

Every fragment has a citable namespace URI (e.g., `nms://gilgamesh/tablet-xi/flood`), copyable via a one-click button. Anticipates scholarly citation use — a differentiating feature most reading platforms never build.

### Cross-Tradition Parallels

A genuinely distinct navigational section, not a sidebar. Each parallel view uses a principled analytical framework:

- **What resonates** / **Why it resonates** / **Where it diverges** / **What the divergence reveals**

With type classifications (psychological-typological, literary-typological, socio-typological). Scholarly rigor built into the UX structure.

---

## UX Flow Assessment

### Strong Flows

- **Home → Tradition overview → Hub → Fragment view** — works cleanly for the Gilgamesh Tablet XI path
- **Home → Parallels → Parallel view** — works for both documented parallels
- **Language toggle** — full bilingual support, `localStorage` persistence
- **Breadcrumbs** — correct on all interior pages (e.g., `Gilgamesh › Tablet XI › The Flood`)
- **Accessibility** — skip links, ARIA landmarks, `aria-current`, `aria-expanded`, `aria-live`, `:focus-visible` — first-class, not an afterthought

### Critical Dead Ends

#### W1 — Overview card loops *(most damaging)*

5 of 6 Gilgamesh tablet cards link back to `tradition-overview.html`. 5 of 6 Iliad book cards link back to `iliad-overview.html`. The user clicks a card and lands on the same page — no feedback, no indication of placeholder status. In user testing, this reads as "the app is broken."

#### W2 — Iliad Book XXIV episode dead ends

"The Gods Decide" and "Priam's Night Journey" link back to `iliad-book-hub.html`. A tiny 11px "coming in next release" note exists but is easily missed since the cards are fully clickable `<a>` elements.

#### W3 — Footer links all dead

About, Epistemic tiers, and Contact are all `href="#"` on every page. The **Epistemic tiers** page is the most painful absence: the tier system is the platform's core differentiator and is introduced on the homepage but has no dedicated explanation page.

#### W4 — No homepage explainer for the tier system

The homepage announces "Every claim marked for what kind of evidence supports it" but provides no link or inline explanation. Newcomers enter the app without understanding its core organizing principle.

#### W5 — No cross-tradition navigation on overview pages

From `tradition-overview.html` (Gilgamesh), there is no way to navigate to the Iliad overview without returning to the homepage. The nav shows "Gilgamesh | Parallels" with no path to the other tradition.

#### W6 — Reading mode buttons show no pre-click unavailable state

All five mode buttons appear equally selectable. Unavailable modes are only revealed post-click. This creates a false affordance.

#### W7 — No search, index, or table of contents

With 15 + 16 episodes across two traditions (and 4 more planned), there is no way to jump directly to a specific episode. Navigation requires walking the full hierarchy every time.

#### W8 — Gilgamesh Tablet VIII absent in the Grief parallel

On `iliad-parallel-view.html`, the Iliad side links to a full fragment view; the Gilgamesh side is inline text only with a disclosure that Tablet VIII has no browsable counterpart. The platform's strongest feature (side-by-side deep reading) cannot be completed on this parallel.

---

## Strong Points

| # | Strength |
|---|---|
| S1 | **Epistemic tier system** — unique, consistently applied, expandable, semantically color-coded — the standout differentiator |
| S2 | **Typography and color** — production-grade, principled choices, not framework defaults |
| S3 | **Five-layer reading model** — conceptually correct, correct levels and names |
| S4 | **Honest disclosure** of unavailable content — builds trust, respects users |
| S5 | **NMS URI citation system** — differentiating feature for scholarly use |
| S6 | **Accessibility** — skip links, full ARIA, keyboard support throughout |
| S7 | **Full bilingual i18n** — 451 keys in EN + RU including literary prose translations, not just UI labels |
| S8 | **Phase 2 tradition cards** — gracefully communicate ambition without overpromising |
| S9 | **Parallels section** — structured comparative analytical framework, not just side-by-side text |
| S10 | **Consistent breadcrumbs** on all interior pages with correct `aria-label` |

---

## Overall Impression

Mnemosyne Engine is a serious, unusually well-designed prototype for a genuinely novel product. The core design decisions — the epistemic tier system, the layered reading modes, the warm typographic palette, the bilingual implementation — reflect a coherent intellectual vision, not generic MVP thinking.

**The critical weakness is concentrated in one place: navigation dead ends.** The majority of tablet and book cards silently loop back to the current page. In user testing this would manifest as confusion ("Is the app broken?") and likely drive abandonment. Everything else — design quality, implemented content, accessibility, i18n — is strong enough to show to scholars or investors.

---

## Recommendations with Actionable Plans

---

### P0 — Fix dead-end overview cards (W1)

**Problem:** 5/6 Gilgamesh tablet cards and 5/6 Iliad book cards link to the page already open. Users get no feedback and no placeholder state.

**Todo:**

- [ ] In `tradition-overview.html`, locate the `<a>` wrapper on cards for Tablets I–V
- [ ] Replace `<a href="tradition-overview.html">` with `<div>` on each unavailable card
- [ ] Add `aria-disabled="true"` and `role="button"` to each placeholder card div
- [ ] Add a visible "Coming in Phase 2" badge inside each placeholder card (match the existing monospace label style at 11px IBM Plex Mono, color `--text-dis`)
- [ ] Apply a CSS rule to placeholder cards: `opacity: 0.55; cursor: default; pointer-events: none`
- [ ] Add a hover tooltip (`title` attribute or `data-tooltip`) with text: "This tablet is not yet available in Phase 1"
- [ ] Repeat all steps above in `iliad-overview.html` for Books I, VI, IX, XVI, XXII
- [ ] Verify that the working cards (Tablet XI, Book XXIV) retain their existing `<a>` and active styling — use them as the visual "ready" reference state
- [ ] Test keyboard navigation: disabled cards must not be focusable or activatable

---

### P0 — Fix dead-end episode cards on Iliad Book XXIV hub (W2)

**Problem:** "The Gods Decide" and "Priam's Night Journey" on `iliad-book-hub.html` link back to the hub itself. The "coming in next release" note is present but invisible at 11px.

**Todo:**

- [ ] In `iliad-book-hub.html`, locate the `<a>` wrappers for Episodes 1 and 2
- [ ] Replace `<a href="iliad-book-hub.html">` with `<div>` on both placeholder episode cards
- [ ] Move the "coming in next release" text out of the card footer and into a prominent inline badge at the top of the card body (14px, color `--text-dis`, before the episode description)
- [ ] Apply `opacity: 0.55; cursor: default; pointer-events: none` to placeholder episode cards
- [ ] Add `aria-disabled="true"` to each placeholder div
- [ ] Ensure "The Ransom of Hector" (Episode 3) retains its active `<a href="iliad-fragment-view.html">` and full styling
- [ ] Cross-check: confirm no other hub pages have the same loop pattern

---

### P1 — Build the Epistemic Tiers explainer page (W3)

**Problem:** All three footer links (`About`, `Epistemic tiers`, `Contact`) are dead `href="#"`. The Epistemic tiers page is the most urgent — the tier system is the platform's core differentiator and has no dedicated home.

**Todo:**

- [ ] Create `epistemic-tiers.html` using the existing page template (same nav, same footer, same CSS)
- [ ] Write a one-page explainer with the following sections:
  - Introduction: why epistemic transparency is a first-class feature
  - `● DOCUMENTED` — definition, examples, what it means for the reader
  - `◑ RECONSTRUCTED` — definition, examples, acknowledged gaps
  - `◈ CONTESTED` — definition, examples, how debate is represented
  - `▲ AI-REVIEWED` — definition, the review process, named reviewer policy
  - A visual legend showing the four tier badges in their colors with labels
- [ ] Add both English and Russian content to `translations.js` for all new strings on this page
- [ ] In `index.html` footer, change `href="#"` on "Epistemic tiers" to `href="epistemic-tiers.html"`
- [ ] Update the footer in all other HTML files (tradition-overview, iliad-overview, tablet-hub, iliad-book-hub, fragment-view, iliad-fragment-view, parallels-index, parallel-view, iliad-parallel-view) to point to `epistemic-tiers.html`
- [ ] Add a link to `epistemic-tiers.html` from the expandable tier badge pop-ups on fragment-view pages ("Learn more about our epistemic standards →")

---

### P1 — Add tier system explainer to the homepage (W4)

**Problem:** The homepage announces the tier system ("Every claim marked for what kind of evidence supports it") but provides no inline explanation. First-time users are left without context before entering the app.

**Todo:**

- [ ] In `index.html`, locate the hero section where the tier system is introduced
- [ ] Add a 3–4 line inline explainer directly beneath the announcement sentence, e.g.:
  > "We use four markers — Documented, Reconstructed, Contested, and AI-Reviewed — to show exactly how confident scholars are in each claim. You will see these markers on every section of every episode."
- [ ] Below the explainer, add a compact visual legend row showing all four tier symbols and names (reuse the badge component already implemented on fragment pages)
- [ ] Add a "Learn more →" link pointing to `epistemic-tiers.html`
- [ ] Add corresponding Russian translations to `translations.js` for all new strings
- [ ] Test: on first visit, a user with no prior context should be able to understand what `●`, `◑`, `◈`, `▲` mean before clicking into any tradition

---

### P2 — Add cross-tradition navigation to overview pages (W5)

**Problem:** Users on `tradition-overview.html` (Gilgamesh) have no visible path to the Iliad overview, and vice versa. Switching traditions requires returning to the homepage.

**Todo:**

- [ ] In `tradition-overview.html`, add an "Iliad" nav tab to the top nav bar alongside the existing "Gilgamesh" and "Parallels" tabs
- [ ] Set `href="iliad-overview.html"` on the new Iliad tab; apply `aria-current="false"` (active state is Gilgamesh)
- [ ] In `iliad-overview.html`, add a "Gilgamesh" nav tab pointing to `tradition-overview.html`
- [ ] Ensure both tabs follow the existing nav tab visual style (IBM Plex Mono, same size, hover state, active border)
- [ ] Add corresponding Russian translation keys to `translations.js` for any new nav labels
- [ ] Repeat on hub pages (`tablet-hub.html`, `iliad-book-hub.html`) so the tradition nav is consistent throughout
- [ ] Test: from any tradition page, a user should be able to switch to the other tradition in one click

---

### P2 — Style unavailable reading mode buttons as visually inactive (W6)

**Problem:** All five reading mode buttons (Surface, Narrated, Translated, Original, Scholaria) appear equally selectable. The "not yet available" message is only revealed post-click.

**Todo:**

- [ ] In `fragment-view.html` (and `iliad-fragment-view.html`), identify which mode buttons correspond to unavailable layers (Narrated, Original — varies by episode)
- [ ] For unavailable modes, add a CSS class `mode-unavailable` to the button element
- [ ] Style `.mode-unavailable` with `color: var(--text-dis); cursor: not-allowed; opacity: 0.55`
- [ ] Add a small `(unavailable)` text label inside or below each unavailable button (11px mono, `--text-dis` color)
- [ ] Add `aria-disabled="true"` and `tabindex="-1"` to unavailable mode buttons so they are skipped in keyboard navigation
- [ ] For episode-specific availability (Original layer varies by episode), make this driven by the existing episode data/config so it doesn't require hardcoded per-episode HTML changes
- [ ] Test: a user scanning the mode selector should understand before clicking which modes have content

---

### P3 — Add an episode index / table of contents (W7)

**Problem:** With 15 Gilgamesh episodes and 16 Iliad episodes (and 4 more traditions in Phase 2), there is no way to jump directly to a specific episode. Full hierarchy traversal is required every time.

**Todo:**

- [ ] Create `episode-index.html` using the existing page template
- [ ] Structure the page as a two-column index: Gilgamesh (left) | Iliad (right)
- [ ] For each tradition, list all episodes grouped by tablet/book with:
  - Episode name
  - Tablet/Book reference
  - Availability status (available now vs. coming soon)
  - The tradition accent color border (ochre for Gilgamesh, terracotta for Iliad)
- [ ] Placeholder episodes should appear with `opacity: 0.55` and a "coming soon" label (no `<a>` link)
- [ ] Add a link to `episode-index.html` in the main nav bar on all pages (label: "Episodes" or "Index")
- [ ] Add all string keys to `translations.js` for both EN and RU
- [ ] Future: when search is implemented, this page is the natural place to add a filter/search input

---

### P3 — Build Gilgamesh Tablet VIII fragment view to complete the Grief parallel (W8)

**Problem:** On `iliad-parallel-view.html`, the Iliad side links to a full fragment view; the Gilgamesh side (Tablet VIII) has no browsable counterpart. The side-by-side deep reading experience cannot be completed.

**Todo:**

- [ ] Author the Tablet VIII content for the Grief and Hero parallel (the lament of Gilgamesh for Enkidu)
- [ ] Assign appropriate epistemic tier markers to each content section
- [ ] Create `fragment-view.html?episode=gilgamesh-tablet-viii-grief` (or add Tablet VIII as a new hub entry)
- [ ] In `tablet-hub.html`, add Tablet VIII as a navigable card (currently Tablet XI is the only hub with a working forward path)
- [ ] In `iliad-parallel-view.html`, update the Gilgamesh panel to link to the new fragment view
- [ ] Remove the "Phase 1: Full fragment view for Tablet VIII is not yet available" disclosure once done
- [ ] Add all new content strings to `translations.js` in both EN and RU
- [ ] Verify the full parallel flow: Parallels index → Grief parallel → both fragment views open and deep-linked correctly

---

## Summary Table

| Priority | Issue | Impact | Effort |
|---|---|---|---|
| P0 | Dead-end overview cards (W1) | Critical — breaks core navigation | Low — HTML change only |
| P0 | Dead-end episode cards (W2) | Critical — breaks episode entry | Low — HTML change only |
| P1 | Epistemic tiers page absent (W3) | High — core feature unexplained | Medium — new page |
| P1 | No homepage tier explainer (W4) | High — first-time user confusion | Low — inline addition |
| P2 | No cross-tradition nav (W5) | Medium — extra clicks | Low — nav tab addition |
| P2 | Reading mode unavailable state (W6) | Medium — false affordance | Low — CSS + aria |
| P3 | No episode index (W7) | Medium — grows with content | Medium — new page |
| P3 | Tablet VIII fragment missing (W8) | Low — content gap in parallels | High — content authoring |
