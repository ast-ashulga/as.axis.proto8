# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

---

## Project: Mnemosyne Engine

An explorable interface for humanity's great epic traditions — structured depth navigation, honest cross-tradition parallels, and epistemic discipline at the infrastructure level. See `doc/PRD.md §1` for the full summary.

**Phase 1 scope**: Epic of Gilgamesh with one cross-tradition parallel to the Biblical flood narrative, two interface locales (EN + RU), 12 weeks, 4 people.

---

## Project stage

Early ideation. **There is no runnable code.** Work here is research, analysis, document drafting, and structured thinking. Do not jump to implementation decisions.

---

## Repository layout

```
doc/
  PRD.md              — Canonical product requirements (authoritative source)
  PRD_ru.md           — Russian translation of PRD.md; keep in sync with PRD.md
  team-roles.md       — Role definitions for the four founding team members
  CLAUDE.md           — Detailed guidance for working within the doc/ directory
  wireframes/         — 11 screen-level design specs; 00-styling.md is the design system
  ui-prototype/       — Static HTML/JS prototype; open index.html in a browser to navigate
.claude/agents/       — Sub-agent definitions (see §Sub-agents below)
```

### Wireframe screens

| File | Screen |
|---|---|
| `00-styling.md` | Design system — tokens, typography, color, spacing (source of truth) |
| `01-landing.md` | Entry point / tradition selector |
| `02-tradition-overview.md` | Tradition landing (e.g. Gilgamesh) |
| `03-tablet-hub.md` | Division/tablet navigation hub |
| `04-fragment-view.md` | Core reading experience (Fragment Card, Onion layers) |
| `05-track-view.md` | Annotation track overlay (Propp/Bakhtin) |
| `06-parallel-view.md` | Cross-tradition parallel comparison |
| `07-parallels-index.md` | Index of confirmed parallels |
| `08-global-chrome.md` | Navigation shell, locale switcher, persistent elements |
| `09-states-and-edge-cases.md` | Loading, empty, error, and edge states |
| `10-scholar-review-interface.md` | Internal scholar review queue (not public-facing) |

---

## Sub-agents

Four specialist agents are available in `.claude/agents/`. Route domain questions to them:

| Agent | When to invoke |
|---|---|
| `product-lead` | Product vision, prioritization, scope, cross-domain alignment |
| `cultural-domain-expert` | Epic traditions, source texts, cultural accuracy, editorial philosophy |
| `ux-creative-lead` | User experience, interface concepts, information architecture |
| `technical-lead` | Feasibility, architecture direction, AI pipeline concepts, data modeling |

---

## Core vocabulary

Terms with precise definitions in `PRD.md §10 Appendix B` — use them consistently:

| Term | Definition |
|---|---|
| **Fragment** | Atomic unit: bounded passage with NAS address, confidence tier, tradition scope, and structural annotations |
| **NAS** | `nms://{tradition}/{division-1}/{division-2}/{unit}` — write-once after first assignment; never carries a locale segment |
| **Onion Model** | Five depth layers (0 Surface → 4 Scholaria); Phase 1 implements layers 0, 2, 4 |
| **Confidence Tier** | Documented (1) / Reconstructed (2) / Contested (3) / Inspired (4); enforced as DB schema constraints |
| **Candidate** | Status of any computationally-detected relationship not yet scholar-reviewed; never surfaced to users |
| **Parallel** | Typed cross-tradition relationship (`socio-typological`, `literary-typological`, `psychological-typological`); not a derivation claim |
| **Track** | Independent annotation dimension (Propp, Bakhtin, TMI); composable, not required per Fragment |
| **Fragment Graph** | Core data structure; single source of truth; every other system component is a read or transform of it |

---

## Document conventions

- All documents use YAML frontmatter. Maintain existing fields when editing; do not strip frontmatter.
- `PRD_ru.md` carries `language: ru` and `translation-of: doc/PRD.md` fields — keep in sync with `PRD.md` when updating.
- `doc/wireframes/00-styling.md` is the design system source of truth. Do not introduce visual values in any screen document that are not defined there.
- Wireframe files are numbered by screen order, not importance (`01-landing.md` through `10-scholar-review-interface.md`).

---

## UI prototype

`doc/ui-prototype/` contains standalone HTML files linked via relative hrefs — open `index.html` in a browser to navigate. `translations.js` holds all localizable strings for EN and RU locales. Iliad files (`iliad-*.html`) are exploratory extensions beyond Phase 1 scope.

---

## Behavioral constraints

- Do not commit anything without explicit approval.
- This is an ideation project — avoid jumping to implementation decisions.
