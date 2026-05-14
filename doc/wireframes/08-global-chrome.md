---
type: wireframe
screen: Global Chrome and Locale Switcher
route: all public routes
status: draft
date: 2026-05-13
applies-to: all screens
---

# Global Chrome and Locale Switcher

This document specifies the persistent chrome elements that appear on every public screen: the top navigation bar, the locale switcher, and the footer. It also specifies the NAS address display and copy interaction, the breadcrumb system, and the behavior of the locale switcher across all screens.

These elements are documented once here, not repeated in each screen wireframe. Screen wireframes reference this document for chrome behavior.

---

## Top Navigation Bar

The top navigation bar is the only persistent navigation element across all public screens. It is minimal. It does not contain a megamenu, dropdown trees, or categorized links. Its job is to get the user back to where they came from and to switch language.

### Desktop Navigation Bar

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  MNEMOSYNE ENGINE                    Gilgamesh   Parallels          [EN]  /  [RU]        │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

**Left**: Platform wordmark "MNEMOSYNE ENGINE" in `--type-meta-label` mono — this is not a display heading; it is an identity mark. Links to `/{locale}/`.

**Center**: Active tradition links. In Phase 1, only "Gilgamesh" appears (one tradition). In Phase 2, additional tradition names appear here (maximum 4–5 before requiring a different pattern). Format: `--type-meta-label` mono, tradition name in plain text, not a tradition glyph. "Parallels" is a persistent secondary nav item that links to `/{locale}/gilgamesh/parallels` in Phase 1.

**Right**: Locale switcher. See §Locale Switcher below.

### Mobile Navigation Bar

```
┌────────────────────────────────────┐
│  MNEMOSYNE ENGINE       [EN]/[RU]  │
│  [≡ Menu]                          │
└────────────────────────────────────┘
```

On mobile, tradition nav and Parallels link collapse into a `[≡ Menu]` disclosure. The locale switcher remains visible at all times — it is not collapsed into the menu, because locale is a top-level decision that affects the entire experience.

Mobile menu when open:
```
┌────────────────────────────────────┐
│  MNEMOSYNE ENGINE       [EN]/[RU]  │
│  ────────────────────────────────  │
│  [×]                               │
│                                    │
│  Gilgamesh                         │
│  Parallels                         │
│                                    │
└────────────────────────────────────┘
```

### Navigation Visual Specification

| Element | Token | Notes |
|---|---|---|
| Nav container | `--color-bg-primary`, `1px solid --color-border-subtle` bottom border | No shadow; flush with page background |
| Wordmark | `--type-meta-label` mono, `--color-text-primary` | Not decorative; link to `/` |
| Nav links | `--type-meta-label` mono, `--color-text-secondary` | Active link: `--color-text-primary` with `border-bottom: 1px solid` |
| Active nav link | `--color-text-primary`, underline | Current tradition/section |
| Nav bar height | `--space-12` (48px) | Fixed; does not expand |
| Nav inner padding | `--space-8` (32px) left/right on desktop, `--space-5` (20px) on mobile | |

---

## Locale Switcher

### Behavior

The locale switcher is always visible. It appears in the top-right of the navigation bar on all public screens, including the landing page.

```
[EN]  /  [RU]
```

Current locale: visually active (regular weight, `--color-text-primary`).  
Inactive locale: slightly muted (`--color-text-muted`), underline on hover.

Clicking an inactive locale:
1. Switches the interface language.
2. Preserves the current URL path structure: `/en/gilgamesh/tablet-xi/flood?layer=translated` becomes `/ru/gilgamesh/tablet-xi/flood?layer=translated`.
3. NAS address in the page header does not change.
4. The current `?layer=` and `?track=` query parameters are preserved.
5. If Layer 2 (Translated) is active and the target locale does not have a translated passage: the content area shows the locale fallback state (see `09-states-and-edge-cases.md`).
6. The switch happens as a navigation (page load), not a client-side DOM swap — locale is a routing concern, not a state concern.

### NAS Locale Neutrality

The NAS address displayed in the Fragment View header (`nms://gilgamesh/tablet-xi/flood`) never changes on locale switch. It is locale-neutral. The URL path changes (`/en/` → `/ru/`); the NAS identifier does not.

### Future Locales (Phase 3)

When additional locales are added (Arabic, Hebrew, etc.), the switcher expands. The right-to-left locales are handled with a locale-specific CSS layout, not by adding RTL logic to the EN/RU template. Phase 1 does not implement RTL support.

---

## Breadcrumb

The breadcrumb appears on all screens below the Tradition Overview level (Tablet Hub, Fragment View, Parallel View, Parallels Index). It does not appear on the Landing page or Tradition Overview.

```
Gilgamesh  ›  Tablet XI  ›  The Flood
```

| Element | Token | Notes |
|---|---|---|
| Breadcrumb container | `--type-caption`, `--color-text-secondary` | Inline, not a full row |
| Separator | `›` in `--color-text-muted` | No arrow icons; plain text character |
| Links | `--color-link` except last item | Last item is current page — not a link |
| Current page | `--color-text-primary`, no underline | `aria-current="page"` |

Breadcrumb position: directly below the navigation bar, above the page content heading.

---

## NAS Address Display and Copy Affordance

Wherever a NAS address appears in the UI, it is formatted and interactive as follows.

### In Fragment View Header

```
nms://gilgamesh/tablet-xi/flood                                     [copy]
```

| Element | Token | Notes |
|---|---|---|
| NAS address text | `--type-meta` mono, `--color-text-muted` | Read-only display |
| `[copy]` button | `--type-meta-label` mono, `--color-link` | Copies full NAS address with scheme: `nms://gilgamesh/tablet-xi/flood` |

On click: address is copied to clipboard. A brief inline confirmation appears for 1500ms: `[copied]` replaces `[copy]`, then reverts.

### In Tablet Hub Episode Cards

NAS address is shown in `--type-meta` mono below each episode title. No `[copy]` affordance on the list view — too much visual noise. `[copy]` appears only on the Fragment View.

### In Scholarly Note Citations

NAS addresses in scholarly note citations are displayed as formatted mono text. They are not clickable links. They are identifiers — a scholar can copy them manually. Future: a `[copy]` affordance could be added per-citation in Phase 2.

---

## Footer

The footer is minimal. It appears on all public screens.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  MNEMOSYNE ENGINE                                                                         │
│  Phase 1 · Gilgamesh tradition · EN + RU interface                                        │
│                                                                                           │
│  All AI-generated content is reviewed by a scholar before publication.                   │
│  All claims are marked with an epistemic tier. Computationally-detected                   │
│  relationships are never shown publicly until confirmed by a scholar.                     │
│                                                                                           │
│  About  ·  Epistemic tiers  ·  Contact                                                    │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

| Element | Token | Notes |
|---|---|---|
| Platform name | `--type-meta-label` mono | Not a link |
| Phase note | `--type-meta` mono, `--color-text-muted` | Status and scope |
| Epistemic commitment statement | `--type-caption`, `--color-text-secondary` | 2–3 sentences; not marketing copy |
| Footer links | `--type-meta`, `--color-link` | "About", "Epistemic tiers", "Contact" |
| Footer divider | `1px solid --color-border-subtle` top | Separates from content |

The "Epistemic tiers" link goes to a standalone explanation page describing the four tiers in plain language. This page is referenced from the footer and is also accessible from any tier badge expansion.

---

## Global Keyboard Navigation

Tab order across all screens follows visual reading order: top-left to bottom-right.

1. "Skip to main content" link (visually hidden, first in DOM — accessible to keyboard users)
2. Platform wordmark link
3. Locale switcher
4. Tradition nav links
5. Main content (per-screen order — see each screen's Accessibility section)
6. Footer links

The "Skip to main content" link is:
```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```
Styled: visually hidden by default; appears on focus with `position: fixed; top: 0; left: 0` so it is the first visible interactive element.

---

## Focus Management

On locale switch (page reload): focus returns to the locale switcher after reload. This prevents disorienting focus jumps.

On layer switch (content swap without page reload): focus moves to the top of the Content Area (`#content-area` with `tabindex="-1"` to receive programmatic focus without adding to Tab order).

On track view open/close: focus moves to the `[Hide structure ▲]` / `[Show structure ▾]` toggle.

---

## Error and System States in Chrome

The navigation bar and footer are visible in all states including error pages. On error:
- The wordmark and locale switcher remain functional.
- Tradition nav remains functional (users can navigate out of the error state).
- Breadcrumb is absent (no meaningful current page to show).

---

## Accessibility for Chrome

| Element | Requirement |
|---|---|
| Navigation bar | `<nav aria-label="Main navigation">` |
| Wordmark link | `aria-label="Mnemosyne Engine — back to home"` |
| Locale switcher | `aria-label="Language: English / Russian"`, current: `aria-current="true"` |
| Mobile menu toggle | `aria-expanded="false/true"`, `aria-controls="mobile-menu"` |
| Mobile menu | `id="mobile-menu"`, `role="menu"` |
| Breadcrumb | `<nav aria-label="Breadcrumb">`, `<ol>` list, current page has `aria-current="page"` |
| NAS `[copy]` button | `aria-label="Copy NAS address to clipboard"` |
| Copied confirmation | `role="status"`, `aria-live="polite"` |
| Footer | `<footer>`, `<nav aria-label="Footer navigation">` for links |
| Skip link | `<a href="#main-content" class="skip-link">Skip to main content</a>` |
