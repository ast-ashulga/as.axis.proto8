---
type: design-system
status: draft
date: 2026-05-13
applies-to: all screens
---

# Mnemosyne Engine — Design System

This document is the single source of truth for visual tokens, typography, color, spacing, and interaction patterns. Every screen wireframe in `doc/wireframes/` references this document by token name. No screen-level document should declare a visual value that isn't defined here.

---

## 1. Core Aesthetic Principle

Mnemosyne Engine's visual language communicates through restraint. The background is manuscript-warm, not digital-white. The type carries weight without ornamentation. Depth is expressed through typography hierarchy, not decoration. Every visual decision should pass one test: does this help the reader encounter the content, or does it announce the platform?

The platform must feel equally at home serving Mesopotamian, Greek, and Central Asian material. No tradition-specific aesthetic dominates the substrate. Per-tradition color tokens are the *only* place where cultural specificity appears in the interface — and those tokens are used only in narrow, defined positions.

---

## 2. Color Palette

### 2.1 Base Palette

```
TOKEN                         HEX         USAGE
──────────────────────────────────────────────────────────────────────
--color-bg-primary            #F7F3EE     Page background — warm off-white
--color-bg-surface            #F0EBE3     Cards, panels, raised surfaces
--color-bg-inset              #E8E1D6     Inset areas, inputs, code blocks
--color-bg-overlay            #EDE7DC     Hover states on surfaces

--color-text-primary          #1A1714     Body text, headings
--color-text-secondary        #5C5650     Secondary labels, captions
--color-text-muted            #9B948C     Metadata chrome, timestamps
--color-text-disabled         #C4BCB1     Disabled states, placeholders

--color-border-strong         #C4BCB1     Card borders, dividers
--color-border-subtle         #D9D2C8     Subtle separators
--color-border-ghost          #E5DFDA     Ghost states (forthcoming content)

--color-accent-primary        #3D3830     Dark accent — interactive focus rings,
                                          active states, primary actions
--color-accent-hover          #2A2520     Hover on primary accent

--color-link                  #5C4B35     Link default — warm dark brown
--color-link-hover            #3D3020     Link hover
--color-link-visited          #7A6B58     Visited links

--color-error                 #8B3A3A     Error text (never as only signal)
--color-warning               #7A5A2A     Warning text
--color-success               #3A5A3A     Success text
```

### 2.2 Tradition Identity Palette

Each tradition has exactly one hue, used exclusively for:
- Left border accent on tradition-specific panels
- Tradition identity badge background tint (very desaturated)
- Tradition glyph fill when active

The colors are desaturated to the same perceptual weight — no tradition's color is more visually prominent than another's.

```
TOKEN                         HEX         TRADITION
──────────────────────────────────────────────────────────────────────
--color-trad-mesopotamian     #9B6B2F     Gilgamesh, Atrahasis, Epic of Creation
--color-trad-greek            #B05B3B     Iliad, Odyssey, Theogony
--color-trad-roman            #4A6B8A     Aeneid, Metamorphoses
--color-trad-indian           #B8860B     Mahabharata, Ramayana
--color-trad-centralasian     #3D7A5C     Manas, Jangar
--color-trad-reserved         #888888     Placeholder for Phase 3 additions

--color-trad-mesopotamian-bg  #F5F0E8     Tinted background for Gilgamesh panels
--color-trad-greek-bg         #F5EDEA     Tinted background for Greek panels
--color-trad-roman-bg         #EBF0F5     Tinted background for Roman panels
--color-trad-indian-bg        #F5F2E0     Tinted background for Indian panels
--color-trad-centralasian-bg  #E8F2EC     Tinted background for C.Asian panels
```

### 2.3 Epistemic Tier Palette

Tier colors are always used alongside shape and label, never alone. All tones are muted; no tier color is alarming.

```
TOKEN                         HEX         TIER
──────────────────────────────────────────────────────────────────────
--color-tier-documented       #4A6B4A     Green-grey: well-evidenced
--color-tier-reconstructed    #6B5A30     Ochre-grey: inferred with care
--color-tier-contested        #7A4040     Muted red: multiple valid positions
--color-tier-inspired         #4A4A6B     Slate-blue: interpretive, disclosed

(All background tints are the base color at 12% opacity on --color-bg-primary)
```

---

## 3. Typography

### 3.1 Type Families

```
FAMILY                VARIABLE                    USE
────────────────────────────────────────────────────────────────────────────────
EB Garamond           --font-family-serif         All content text: body, headings,
                                                  translated passages, scholarly notes
IBM Plex Mono         --font-family-mono          Metadata chrome: NAS addresses,
                                                  confidence tier labels, timestamps,
                                                  translator attributions, layer names
```

Fallback stacks:
```
--font-family-serif:   "EB Garamond", "Garamond", "Georgia", serif;
--font-family-mono:    "IBM Plex Mono", "Courier New", "Courier", monospace;
```

### 3.2 Type Scale

All sizes in `px` at 100% zoom (browser default 16px root). Line heights are unitless multipliers.

```
TOKEN                   SIZE    WEIGHT    LINE-HEIGHT   FAMILY    USE
────────────────────────────────────────────────────────────────────────────────
--type-display          32px    500       1.2           serif     Tradition name, large headings
--type-heading-1        24px    500       1.3           serif     Screen-level headings (episode title)
--type-heading-2        20px    500       1.35          serif     Section headings within a screen
--type-heading-3        18px    400       1.4           serif     Sub-section, card headings
--type-body             16px    400       1.7           serif     Reading text, Fragment content
--type-body-medium      16px    500       1.7           serif     Emphasized body (labels, first lines)
--type-caption          14px    400       1.5           serif     Secondary text, descriptions
--type-small            13px    400       1.5           serif     Small print, disclaimers

--type-meta             11px    400       1.4           mono      NAS addresses, timestamps
--type-meta-label       11px    500       1.4           mono      Badge labels, layer names, tier codes
--type-mono-body        13px    400       1.6           mono      Transliteration, original-language text
--type-mono-heading     13px    500       1.4           mono      Section labels in scholar view
```

### 3.3 Sizing for Original Language Text (Phase 2)

Original Akkadian transliteration, Ancient Greek, and Sanskrit are displayed in `--type-mono-body` with the addition of:
- `lang` attribute on container (`sux`, `grc`, `san`)
- `dir="ltr"` (all three Phase 1 original-language traditions)
- Fallback: if font unavailable, Unicode code point display (not empty boxes)

---

## 4. Spacing Scale

Based on a 4px grid. All measurements in `px`.

```
TOKEN               VALUE   USE
──────────────────────────────────────────────────────
--space-1           4px     Micro gaps (badge margins)
--space-2           8px     Compact padding (badges, tags)
--space-3           12px    Tight padding (compact UI)
--space-4           16px    Standard unit (component padding)
--space-5           20px    Medium gaps (section spacing)
--space-6           24px    Large gaps (between major sections)
--space-8           32px    Extra-large (page margins on desktop)
--space-10          40px    Section separation
--space-12          48px    Major layout separation
--space-16          64px    Screen-level padding

--page-margin-desktop   80px    Left/right page margin at ≥1280px
--page-margin-tablet    40px    Left/right margin at 768–1279px
--page-margin-mobile    20px    Left/right margin at <768px

--content-max-width     720px   Maximum width of reading text column
--panel-min-width       300px   Minimum width of a parallel panel
```

---

## 5. Epistemic Tier Badge System

Tier badges are the platform's epistemic spine. Every piece of content carries one. They must communicate tier through three independent channels simultaneously — shape, label, and color — so that removing color leaves a still-functional system.

### 5.1 The Four Tiers

```
TIER          ICON    LABEL           COLOR TOKEN                    MEANING
──────────────────────────────────────────────────────────────────────────────────────
Documented    ●       DOCUMENTED      --color-tier-documented        Primary source;
                                                                     strong consensus
Reconstructed ◑       RECONSTRUCTED   --color-tier-reconstructed     Inferred from
                                                                     partial evidence;
                                                                     scholarly consensus
Contested     ◈       CONTESTED       --color-tier-contested         Active scholarly
                                                                     debate; multiple
                                                                     valid positions
Inspired      ▲       AI-REVIEWED     --color-tier-inspired          AI-generated +
                                                                     human reviewed;
                                                                     interpretive
```

Note: `◈` (dotted diamond) is specified because it is shape-distinct from all other marks. Do not use ○ (outlined circle), as it could be confused with a disabled ◑. Implementation may substitute `◇` + inline dot if `◈` is unavailable in the chosen font.

### 5.2 Badge Component

Default (closed) state:
```
[◑ RECONSTRUCTED]
```
The badge is inline with the content heading. Font: `--type-meta-label`. It is quiet but present — never hidden.

Expanded state (on click/hover):
```
┌──────────────────────────────────────────────────────────┐
│  ◑  RECONSTRUCTED                                        │
│  ─────────────────────────────────────────────────────── │
│  Inferred from partial evidence; scholarly consensus      │
│  with acknowledged gaps. The interpretation presented     │
│  here represents the mainstream scholarly position.       │
│                                                           │
│  Source fragments:                                        │
│  · nms://gilgamesh/tablet-xi/flood/1  [Documented]        │
│  · nms://gilgamesh/tablet-xi/flood/2  [Documented]        │
└──────────────────────────────────────────────────────────┘
```

The expanded state shows: full tier explanation in plain language, and the grounding fragment list (for AI-generated content at Layer 0 it shows NAS addresses).

### 5.3 AI Disclosure Line (Layer 0 Only)

At the top of every Layer 0 (Surface) content block:
```
▲  AI-generated summary · Reviewed by [Scholar Name] · [YYYY-MM-DD]  [See sources]
```

Font: `--type-caption`. Color: `--color-text-secondary`. The `[See sources]` link expands the grounding fragment list inline — it does not navigate away.

This line is **absent** from Layer 2 (Translated) and Layer 4 (Scholaria) — those layers contain attested content, not AI generation.

### 5.4 Accessibility Contract

1. Tier is never communicated by color alone. Icon shape (●, ◑, ◈, ▲) and text label carry the same information.
2. All tier icons have `aria-label` values: "Documented", "Reconstructed", "Contested", "AI-Reviewed".
3. Expanded badge state is keyboard-triggerable (Enter/Space on focus).
4. Minimum contrast ratio for tier icon + label text: 4.5:1 against `--color-bg-primary`.

---

## 6. Layer Indicator Component

The layer indicator is a row of three markers. It appears on the Fragment View at all times.

```
[ Surface ● ]  ·  [ Translated ○ ]  ·  [ Scholaria ○ ]
```

Active layer: filled marker (●), medium weight label.
Inactive layer: outlined marker (○), regular weight label.
Current position aria: `aria-current="true"` on the active marker.

Font: `--type-meta-label` for labels, `--space-4` between markers.
Interaction: clicking a marker is a content swap in the Fragment View text area — not a page navigation. The URL updates to `?layer=translated` (etc.) but the surrounding layout does not re-render.

Layer names:
- `surface` → "Surface" in UI, `?layer=surface` in URL (default when omitted)
- `translated` → "Translated", `?layer=translated`
- `scholaria` → "Scholaria", `?layer=scholaria`

---

## 7. Fragment Card States

Fragment cards appear in the Tradition Overview and Tablet Hub screens. A card is not the Fragment View — it is a navigational entry point.

```
CLOSED STATE (default in navigation contexts)
┌─────────────────────────────────────────────────────┐
│  [●] TABLET XI · THE FLOOD                          │  ← Tier badge + episode title
│  The gods decide to destroy the earth. Utnapishtim  │  ← Editorial header, 1–2 sentences
│  is warned through the walls.                       │
│  nms://gilgamesh/tablet-xi/flood   [●]              │  ← NAS address + parallel marker
└─────────────────────────────────────────────────────┘
```

When a parallel exists, `[●]` appears at the bottom right of the closed card. This is not a button — it is a navigation affordance marking that a parallel exists.

---

## 8. Parallel Strip Component

Appears at the bottom of the Fragment View text area when a confirmed parallel exists for the current Fragment. Absent (no placeholder) when no parallel exists.

```
┌─────────────────────────────────────────────────────────────────────┐
│  Structural resonance in another tradition                           │  ← strip heading
│  ┌──────────────────────────────────────────────────────────────┐   │
│  │  [●] The Flood of Atrahasis  ·  Babylonian tradition        │   │  ← parallel card
│  │  Both traditions place the flood at the center of the quest  │   │
│  │  for immortality. They diverge in what the flood destroys    │   │
│  │  and what it proves.                                         │   │
│  │                                                               │   │
│  │  Type: Shared human condition, not a shared source           │   │
│  │  Confidence: [● DOCUMENTED]                                  │   │
│  │                                          [Read this parallel →] │   │
│  └──────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────┘
```

When multiple parallels exist (Phase 2), the heading changes: "Structural resonances across traditions (3)" and the card list stacks vertically within the strip.

---

## 9. Global Navigation Chrome

Persistent across all public screens. Contains:

```
[Mnemosyne Engine]     [Gilgamesh]  [Parallels]     [EN / RU]
       ↑                    ↑             ↑               ↑
   Logo/wordmark     Tradition nav    Parallels nav  Locale switcher
```

- Logo links to `/` (landing)
- Tradition nav: one entry per active tradition; inactive traditions are absent from nav (not grayed — absent)
- Parallels nav: links to `/gilgamesh/parallels` in Phase 1
- Locale switcher: always visible; switching preserves current NAS address

---

## 10. Locale Switcher Behavior

```
Current: [EN]  →  [RU]
```
Switching locale:
1. Preserves the current URL path and NAS address
2. Changes URL locale prefix: `/en/gilgamesh/tablet-xi/flood` → `/ru/gilgamesh/tablet-xi/flood`
3. Re-renders interface strings and Layer 0 summaries in the new locale
4. If Layer 2 (Translated) is active and RU Layer 2 is unavailable (O-05 status): shows a fallback disclosure at top of content: "This translation is not yet available in Russian. Showing English translation." This is not an error; it is an honest state.

---

## 11. NAS Address Display and Copy

Wherever a NAS address appears in the UI (Fragment header, episode cards, scholarly note citations), it is displayed in `--type-meta` and is:
- Copyable via a `[copy]` affordance (small monospace button to the right)
- Never a clickable link to an external URL — it is an identifier, not a hyperlink
- Formatted: `gilgamesh/tablet-xi/flood` (without `nms://` scheme in reading contexts; full `nms://` scheme in the expanded badge view and scholar interface)

---

## 12. Iconography

The platform uses no decorative icons. All icons are functional and text-accompanied. The icon set is minimal:

```
SYMBOL    MEANING
────────────────────────────────────
●         Documented; active; current position
◑         Reconstructed; partial
◈         Contested
▲         AI-generated (inspired)
○         Inactive; forthcoming (ghost)
→         Navigate to / read more
←         Navigate back
▾         Expand / show
▲         Collapse / hide (as chevron, context-dependent)
[···]     Lacuna in source text
```

Tradition glyphs (SVGs) are defined per tradition — see §2.2. They are used only in tradition identity elements, never inline with content.

---

## 13. Motion and Transitions

Default: no decorative animation. All transitions serve function — they communicate state change, not personality.

```
TRANSITION              DURATION    EASING          USE
────────────────────────────────────────────────────────────────────────────────
Layer content swap      0ms         instant         Fragment View layer changes.
                                                    Not animated — layers are not
                                                    different places.
Expand/collapse         150ms       ease-in-out     Badge expand, track view open,
                                                    locale switcher open
Panel open (scholar)    0ms         instant         Scholar annotation panels open
                                                    without animation
Page navigation         0ms         instant         All page navigations
```

No parallax, no scroll-driven reveals, no entrance animations. The one exception allowed: a very subtle opacity cross-fade (100ms) when the locale switch causes a full page content change — this prevents the perceivable flash of unstyled content.

---

## 14. Responsive Breakpoints

```
BREAKPOINT      WIDTH           LAYOUT NOTES
──────────────────────────────────────────────────────────────────────────────
Mobile          < 768px         Single column; parallel panels stack;
                                layer indicator is compact horizontal row;
                                track view collapses to vertical list
Tablet          768–1279px      Two-column fragment view available;
                                parallel panels side-by-side;
                                max-width content column
Desktop         ≥ 1280px        Full layout; Constellation Rail (right panel)
                                can appear alongside Fragment View;
                                max reading column width: 720px
Wide            ≥ 1600px        Content column stays at 720px max;
                                side rails expand with whitespace
```

---

## 15. Accessibility Baseline

1. Minimum contrast: 4.5:1 for normal text, 3:1 for large text (≥18px regular or ≥14px bold).
2. All interactive elements are keyboard-reachable (Tab) and have visible focus styles.
3. Focus style: `2px solid --color-accent-primary` with `2px offset` — never removed, never color-only.
4. Screen reader: all icon-only affordances have `aria-label`; all expanded states use `aria-expanded`.
5. Epistemic tier: communicated by icon shape + text label + color (never color alone).
6. Lacunae in translated text: the `[···]` marker has `title="Gap in the surviving tablet"` and `aria-label="Lacuna: [description]"`.
7. Layer indicator: current layer has `aria-current="true"`.
8. Language attribute: `lang` on every block of non-interface-language content (original text, Akkadian, etc.)
9. Font loading: system fonts load immediately; web fonts load without FOUT (use `font-display: swap` with adequate fallbacks).

---

## 16. What This System Does Not Include

- Dark mode: designed as Phase 2. The warm off-white background is the foundational choice for Phase 1. Engineering should not block on dark mode implementation.
- RTL support: deferred to Phase 3. CSS layout uses logical properties (`margin-inline-start`, etc.) throughout, so RTL is additive, not a rewrite.
- Custom cursor or pointer states: default browser behavior only.
- Decorative imagery: no background textures, no manuscript overlays, no parchment effects.
- Hover card previews: not in Phase 1 scope.
