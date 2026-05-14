# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

This directory contains all documentation artifacts for the Mnemosyne Engine project. There is no runnable code here (the UI prototype is static HTML). Work in this directory is document editing, structured writing, and design specification.

See the parent `CLAUDE.md` at `../CLAUDE.md` for project stage, sub-agent routing, and behavioral constraints.

---

## Directory Map

| Path | What it is |
|---|---|
| `PRD.md` | Canonical product requirements — authoritative source for product decisions, architecture, and phasing |
| `PRD_ru.md` | Russian translation of `PRD.md`; `translation-of: doc/PRD.md` in frontmatter |
| `team-roles.md` | Role definitions for the four founding team members |
| `wireframes/` | Screen-level design specifications (11 files); all visual tokens are defined in `00-styling.md` and referenced by token name across all other wireframe files |
| `ui-prototype/` | Static HTML/JS prototype for visual and interaction exploration; not a production build |

---

## Wireframe Conventions

`wireframes/00-styling.md` is the design system source of truth — tokens, typography, color, spacing, interaction patterns. Every other wireframe file references it by token name. Do not introduce visual values in screen documents that are not defined in `00-styling.md`.

Wireframe files are numbered by screen, not by importance:

| File | Screen |
|---|---|
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

## UI Prototype

The `ui-prototype/` directory contains standalone HTML files linked via relative hrefs — open `index.html` in a browser to navigate. `translations.js` holds all localizable strings for both EN and RU locales. The prototype includes both a Gilgamesh and Iliad screen set; Iliad files (`iliad-*.html`) are exploratory extensions beyond Phase 1 scope.

---

## Core Vocabulary

These terms have precise definitions in `PRD.md §10 Appendix B`; use them consistently:

- **Fragment** — atomic unit: bounded passage with NAS address, confidence tier, tradition scope, and structural annotations
- **NAS** — `nms://{tradition}/{division-1}/{division-2}/{unit}`; write-once after first assignment; never carries a locale segment
- **Onion Model** — five layers (0 Surface → 4 Scholaria); Phase 1 implements layers 0, 2, 4
- **Confidence Tier** — Documented (1) / Reconstructed (2) / Contested (3) / Inspired (4); enforced as DB schema constraints
- **Candidate** — status of any computationally-detected relationship not yet scholar-reviewed; never surfaced to users
- **Parallel** — typed cross-tradition relationship (`socio-typological`, `literary-typological`, `psychological-typological`); not a derivation claim
- **Track** — independent annotation dimension (Propp, Bakhtin, TMI); composable, not required per Fragment
- **Fragment Graph** — core data structure; single source of truth; every other system component is a read or transform of it

---

## Document Frontmatter

All documents in this directory use YAML frontmatter. Maintain existing fields when editing; do not strip frontmatter. `PRD_ru.md` carries an additional `language: ru` and `translation-of:` field — keep these in sync with `PRD.md` when updating.
