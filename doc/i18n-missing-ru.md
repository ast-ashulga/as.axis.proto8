---
title: Missing Russian localization — content inventory
description: >-
  Catalog of user-visible strings and a11y text that remain English or
  mixed-English on /ru/ routes. Use this when extending src/i18n/ru.ts and templates.
created: '2026-05-15'
scope: 'src/ (Astro prototype, locale ru)'
related: 'src/i18n/ru.ts, src/i18n/en.ts, src/i18n/types.ts'
---

## How to use this document

- **Fix**: Prefer adding keys to `src/i18n/types.ts`, `en.ts`, and `ru.ts`, then reference `t(locale)` / `tr.*` in components.
- **Out of scope by design**: Do not blindly “translate” primary-source passages (KJV, Thompson, Greek text), NAS identifiers (`nms://…`), or standard bibliographic titles in citations unless the product team decides otherwise.

---

## 1. Global chrome

| Item | Location | Notes |
|------|----------|--------|
| Header wordmark visible text | `src/components/chrome/Header.astro` | Always `MNEMOSYNE ENGINE` (not from i18n). |
| Footer product name | `src/i18n/ru.ts` → `footer_name` | Same English string as EN (`MNEMOSYNE ENGINE`). |
| Breadcrumb nav `aria-label` | `src/components/chrome/Breadcrumb.astro` | Hardcoded `"Breadcrumb"`. |

---

## 2. Document title (`<title>`)

| Item | Location | English fragment |
|------|----------|------------------|
| Flood episode | `src/templates/FloodReader.astro` (`BaseLayout`) | `… — Tablet XI — Gilgamesh` |
| Sleep-challenge episode | `src/templates/SleepChallengeReader.astro` | `… — Tablet XI — Gilgamesh` |
| Plant episode | `src/templates/PlantReader.astro` | `… — Tablet XI — Gilgamesh` |
| Ransom of Hector | `src/templates/RansomOfHectorReader.astro` | `… — Book XXIV — Iliad` |
| Book XXIV hub | `src/templates/BookXXIVHub.astro` | Prefix `BOOK XXIV —` |

---

## 3. Recurring accessibility + UI chrome (many templates)

These patterns repeat across fragment readers and hubs. All are English on `/ru/`.

| Item | Example / pattern | Files (representative) |
|------|-------------------|-------------------------|
| NAS row `aria-label` prefix | `NAS address: …` | `FloodReader`, `SleepChallengeReader`, `PlantReader`, `RansomOfHectorReader` |
| Copy button `aria-label` | `Copy NAS address to clipboard` | Same readers |
| Layer tablist `aria-label` | `Content depth layers` | Same readers |
| Tier button `aria-label` prefix | `Confidence tier: …` | Same readers + tier buttons in scholaria |
| Parallel strip region | `Cross-tradition parallels` | `FloodReader`, `RansomOfHectorReader` |
| Track drawer region | `Structural annotation tracks` | `FloodReader`, `SleepChallengeReader`, `PlantReader`, `RansomOfHectorReader` |
| Annotation group labels | `Propp annotations`, `Campbell annotations`, `TMI annotations` | Readers |
| Episode navigation | `Adjacent episodes`; link `aria-label`s `Previous episode` / `Next episode` | `FloodReader` |
| Propp help buttons | `About Propp's Morphology`, etc. | `FloodReader` |
| Campbell help | `About Campbell's Hero's Journey` | `FloodReader` |
| TMI help | `About the Thompson Motif Index` | `FloodReader` |
| Annot block `aria-label` | English function names + `confidence Documented` / `Reconstructed` | `FloodReader`, `SleepChallengeReader`, `PlantReader`; partial English in `RansomOfHectorReader` (`confidence Reconstructed` / `Documented`) |
| Hub: parallel marker | `Has confirmed cross-tradition parallel` | `src/templates/TabletXIHub.astro` |
| Hub: parallel marker | `Has cross-tradition parallel` | `src/templates/BookXXIVHub.astro` |
| Hub nav | `Tablet navigation` | `TabletXIHub.astro` |
| Hub nav | `Book navigation` | `BookXXIVHub.astro` |

---

## 4. Parallel comparison templates

| Item | Location | Notes |
|------|----------|--------|
| Section / panel `aria-label` | `FloodParallelView.astro`, `GriefParallelView.astro` | e.g. `Tradition passages`, `Mesopotamian tradition passage`, `Hebrew and Biblical tradition passage`, `Greek tradition passage`. |
| Scholarly note heading (visible) | `FloodParallelView.astro`, `GriefParallelView.astro` | Hardcoded `Scholarly note`. |
| Tradition excerpts (visible) | `FloodParallelView.astro` | Thompson translation + KJV Genesis blockquotes (English source text). |
| Iliad panel excerpts (visible) | `GriefParallelView.astro` | Long hardcoded English paragraphs (Lang–Leaf–Myers style), not from `ru.ts`. |

---

## 5. `FloodReader.astro` (Gilgamesh Tablet XI — Flood)

| Category | Missing RU |
|----------|------------|
| Narrated layer | Full prose paragraphs and blockquotes (English). |
| Translated layer chrome | `Translation:`, `Source:`, `CDLI reference:`, lacuna visible text + `aria-label`s; verse attribution lines. |
| Original layer | Header line `Standard Babylonian recension…`; George / OUP attribution; Nineveh/CDLI line; `[demo-line-ref: …]`. |
| Scholaria | Body paragraphs under each section (English). |
| Track view heading (visible) | `ANNOTATION TRACKS · Tablet XI · The Flood Episode`. |
| Track explainer UIs | `fw-explainer` headings and bodies (Propp, Campbell, TMI) in English. |
| Track labels (visible) | e.g. `TMI (Thompson Motif Index)`; motif names (`Deluge`, `Deluge: escape in boat`, Campbell stage names, etc.). |
| Annot panel meta | `Confidence:`, `Annotated by: Dr. A. Kovacs · …` (where not using `tr.*`). |
| Inactive track buttons | `[+ Bakhtin chronotopes]`, `[+ Lévi-Strauss mythemes]`, `[+ Emotional valence]`. |
| Parallel strip tier popup | Paragraph hardcoded: *Primary source; strong scholarly consensus. This parallel has been confirmed…* (should align with `parallels_badge_doc_body` or new key). |

Primary-source **Translated** / **Original** passages themselves are English/Akkadian by design.

---

## 6. `SleepChallengeReader.astro`

| Category | Missing RU |
|----------|------------|
| Translated layer chrome | `Translation:`, `Source:`, `Public domain`, lacuna caption + `aria-label`. |
| Scholaria body | Manuscript paragraph (English). |
| Scholarship list | Citation lines (`Andrew George…`, `R. Campbell Thompson…`) — English bibliographic form. |
| Track heading (visible) | `ANNOTATION TRACKS · Tablet XI · Utnapishtim's Challenge`. |
| PROPP row | Track label `PROPP`; annot name `Villainy / Lack`; panel copy; `Confidence:` / `Annotated by:` lines. |
| Inactive tracks | `[+ Campbell stages]`, `[+ Bakhtin chronotopes]`. |

---

## 7. `PlantReader.astro`

| Category | Missing RU |
|----------|------------|
| Translated / scholaria / tracks | Same structural gaps as Sleep challenge: English headers, lacuna text, scholaria paragraph, `ANNOTATION TRACKS · Tablet XI · The Plant of Immortality`, PROPP panels, inactive tracks (if present), etc. (mirror Sleep/Flood patterns). |

*(See file for full inline strings.)*

---

## 8. `RansomOfHectorReader.astro` (Iliad Book XXIV)

| Category | Missing RU |
|----------|------------|
| Narrated layer | Multiple English `body-p` paragraphs + blockquote + cite. |
| Translated layer chrome | `Translation: Andrew Lang…`, `Source: Lang, Leaf & Myers…`, `Public domain`, `Book XXIV, lines …`. |
| Translated passage | English translation text (`lang="en"`) — source language. |
| Original layer chrome | `Ancient Greek — after Monro & Allen OCT`; line reference `Iliad XXIV.477–551`. |
| Greek `pre` body | Ancient Greek — intentional. |
| Track region chrome | `aria-label="Structural annotation tracks"`; `aria-label="Propp annotations"` etc. |
| Track row labels (visible) | `CAMPBELL`, `TMI` (and `PROPP` pattern elsewhere). |
| Propp `aria-label` suffix | `, confidence Reconstructed` / `, confidence Documented` (English). |
| Inactive tracks | `[+ Bakhtin chronotopes]`, `[+ Lévi-Strauss mythemes]`. |

Scholaria **body** where keyed from `tr.*` is already Russian; **citation HTML** in `ru.ts` may still contain English book titles by convention.

---

## 9. Stub and low-content pages (`/ru/`)

| Route | Location | Missing RU |
|-------|----------|------------|
| About | `src/pages/ru/about/index.astro` → `PageStub.astro` | Only stub sentence; no real page body. |
| Contact | `src/pages/ru/contact/index.astro` | Same. |
| Epistemic tiers | `src/pages/ru/epistemic-tiers/index.astro` | Same. |

---

## 10. Other templates / unused

| Item | Location | Notes |
|------|----------|--------|
| Fragment placeholder (visible) | `src/templates/FragmentStub.astro` | `Fragment reader — in progress.` (template may be unused; still English-only). |

---

## 11. English landing `aria-label` (reference only)

| Item | Location |
|------|----------|
| Tradition cards | `src/pages/en/index.astro` | `Gilgamesh — active tradition`, `Iliad — active tradition` (RU page uses Russian equivalents in `src/pages/ru/index.astro`). |

---

## Suggested fix order

1. **High impact, small diff**: `Breadcrumb` `aria-label`, parallel **Scholarly note** heading, **`Confidence tier:`** / **NAS address:** / copy / nav `aria-label`s, **`<title>`** suffixes, **Book XXIV** hub title prefix.
2. **Medium**: **Flood** parallel-strip popup paragraph; **Grief** hardcoded excerpt blocks; **track view** headings and inactive-track buttons.
3. **Large**: **Narrated**, **Scholaria** (non-keyed paragraphs), and **annotation explainer** bodies in `FloodReader` / **Sleep** / **Plant** — consider content collections or many new `tr.*` keys.

---

## Changelog

| Date | Change |
|------|--------|
| 2026-05-15 | Initial inventory from source audit of `src/` templates and i18n parity. |
