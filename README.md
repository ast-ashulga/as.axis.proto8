# Mnemosyne Engine

An explorable interface for humanity's great epic traditions. Three things no current platform does:

1. **Navigable depth** — every fragment of content spans five epistemic layers, from AI-generated summary to primary source manuscript. Users enter at any layer; the system guides them deeper without losing them.
2. **Honest cross-tradition parallels** — structural connections between epics are surfaced only after human scholarly confirmation, with explicit notation of where traditions diverge and what that divergence reveals.
3. **Epistemic discipline at the infrastructure level** — confidence tiers are database schema constraints, not editorial guidelines. The system cannot serve content that overstates its evidential basis.

**Phase 1**: Epic of Gilgamesh and the Iliad with two cross-tradition parallels (the Great Flood; Grief and the Hero). English and Russian locales. Twelve weeks. Four people.

---

## Stage

Active prototype development. The Astro + TypeScript prototype in `src/` is the current working implementation — run it with `npm run dev`. The legacy static HTML prototype in `doc/ui-prototype/` is the visual parity reference and is kept intact for comparison.

---

## Running the prototype

```bash
npm install
npm run dev      # dev server at http://localhost:4321
npm run build    # static output to dist/
npm run check    # TypeScript + Astro type checking (0 errors required before commit)
```

---

## Repository

| Path | Contents |
|---|---|
| `src/` | Astro + TypeScript prototype (active development) |
| `src/components/` | Reusable `.astro` components (chrome, epistemic, cards) |
| `src/i18n/` | Typed EN + RU translation files; build fails on missing keys |
| `src/layouts/` | `BaseLayout.astro` — shared HTML shell |
| `src/pages/` | Route pages under `en/` and `ru/` locale prefixes |
| `src/styles/` | `tokens.css` + `global.css` — design system from `doc/wireframes/00-styling.md` |
| `src/templates/` | Full page templates consumed by thin locale page stubs |
| `doc/PRD.md` | Canonical product requirements — authoritative source |
| `doc/PRD_ru.md` | Russian translation of the PRD |
| `doc/team-roles.md` | Founding team role definitions |
| `doc/wireframes/` | 11 screen-level design specs; `00-styling.md` is the design system |
| `doc/ui-prototype/` | Legacy static HTML prototype — open `index.html` in a browser |
| `doc/assessments/` | UX, visual, and improvement-plan assessments of the prototype |

---

## Roadmap

| Phase | Scope |
|---|---|
| **1** | Gilgamesh + Iliad; two cross-tradition parallels (flood, grief); layers 0, 2, 4; EN + RU |
| **2** | Contextual Personification, Life-Case Query, four additional traditions |
| **3** | Six traditions |
