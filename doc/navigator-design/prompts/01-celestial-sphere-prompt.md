---
type: image-generation-prompt
variant: 1
name: Celestial Sphere Navigator
date: 2026-05-19
aspect-ratio: 16:9
target-tools: Midjourney, DALL-E 3, Stable Diffusion XL, Nano Banana
---

# Image Generation Prompt — Variant 1: Celestial Sphere Navigator

## Primary Prompt

```
UI screenshot of a scholarly digital reading application called "Mnemosyne Engine". Desktop browser view, 1440px wide. The interface reads ancient epic texts.

OVERALL LAYOUT:
Top navigation bar on warm parchment-white background (#F7F3EE). Nav reads "MNEMOSYNE ENGINE" in small IBM Plex Mono caps on the far left, center links "Gilgamesh · Parallels" in muted brown, right side "EN / RU" locale switcher. A single hairline border separates nav from content. Below nav: breadcrumb "Gilgamesh › Tablet XI › The Flood" in small serif caption. Then NAS address in monospace: "gilgamesh / tablet-xi / flood" with a small [copy] affordance.

MAIN CONTENT AREA (left 2/3 of screen):
Heading "THE FLOOD EPISODE" in EB Garamond 24px medium weight, dark almost-black (#1A1714). Subheading "Tablet XI of the Epic of Gilgamesh" in secondary muted brown. Three-state layer indicator row: "[ Surface ● ] · [ Translated ○ ] · [ Scholaria ○ ]" in IBM Plex Mono small caps, warm brown accents. Below: readable body text of the flood narrative in EB Garamond 16px, generous line height, warm dark text on warm off-white. The text begins "Gilgamesh, stricken by the death of Enkidu and unable to accept his own mortality...". Small epistemic badge "▲ AI-REVIEWED" inline with heading. AI disclosure line: "AI-generated summary · Reviewed by Dr. A. Kovacs · 2026-04-18 [See sources]" in small serif italic.

RIGHT RAIL — NAVIGATOR COMPONENT (rightmost ~280px panel):
The centerpiece: a CELESTIAL SPHERE navigator drawn as a precise SVG-style circle diagram, approximately 220×220px, rendered on the same warm off-white panel background. The circle represents the observable narrative space around the current fragment.

The sphere geometry:
- A perfect circle outlined in subtle warm gray (#D9D2C8)
- A horizontal diameter line (the "horizon") in slightly darker warm gray (#C4BCB1), 1px
- A DASHED lower semicircular arc inside the sphere representing the "parallel band" — rendered lighter, more ghost-like
- On the vertical axis: three labeled points. At the horizon: filled circle ● labeled "SURFACE" (active, current layer). Above horizon, midway: empty circle ○ labeled "TRANSLATED". Near the top arc: empty circle ○ labeled "SCHOLARIA"
- Extending left from the horizon center: a horizontal arm terminating in text "← Utnapishtim" in IBM Plex Mono 11px secondary brown
- Extending right from the horizon center: a horizontal arm terminating in text "Plant of Immortality →" in IBM Plex Mono 11px secondary brown
- Inside the dashed lower parallel band: a single filled point ● in amber-gold (#9B6B2F) labeled "Genesis 6–9" in IBM Plex Mono 11px — this is the cross-tradition parallel
- The sphere has a thin 2px left-edge accent line in Mesopotamian amber-gold (#9B6B2F)

Below the sphere:
- "gilgamesh / tablet-xi / flood" in IBM Plex Mono 11px muted (#9B948C) with [copy] button
- Three toggle chips in a row: "[off] PROPP  [off] BAKHTIN  [off] TMI" in IBM Plex Mono 11px
- Thin horizontal separator
- Bottom label "Tradition: MESOPOTAMIAN" with a warm amber progress-style accent bar

VISUAL STYLE:
Extreme restraint. No gradients, no shadows, no textures, no decorative imagery. No parchment effects. The warmth comes entirely from the background color (#F7F3EE) and the brown typography. The interface feels like a very well-designed academic journal rendered digitally. Think Tufte meets minimalist Scandinavian editorial design. The sphere diagram looks like an astronomical instrument illustration — precise, geometric, purposeful. Every element has purpose; nothing is decorative.

COLOR PALETTE:
- Background: warm parchment white #F7F3EE
- Panel/card background: slightly warmer #F0EBE3
- Body text: near-black warm brown #1A1714
- Secondary text: medium brown #5C5650
- Muted metadata: warm gray #9B948C
- Borders: #D9D2C8 (subtle), #C4BCB1 (strong)
- Accent/links: warm dark brown #5C4B35
- Mesopotamian tradition: amber-gold #9B6B2F
- Active indicator: filled ● in #3D3830
- Genesis parallel point: amber #9B6B2F

TYPOGRAPHY:
- Headings, body text: EB Garamond serif
- All metadata (NAS addresses, layer names, timestamps, badges): IBM Plex Mono
- The mix of serif warmth and monospace precision is the defining typographic character

ATMOSPHERE:
The application feels like a scholarly instrument for serious intellectual exploration. Ancient but digital. Rigorous but accessible. The sphere navigator communicates: "you are an observer at the center of a knowledge space; here is what surrounds you."

RENDER STYLE:
Photorealistic UI screenshot. Crisp pixel rendering. No illustration style, no painterly effects. This is a real browser screenshot of a functional web application. High DPI (2x). The kind of screenshot you'd see in a Product Hunt showcase or a Dribbble UI concept post.
```

---

## Negative Prompt

```
No dark mode. No gradients. No drop shadows. No glowing effects. No neon colors. No parchment texture overlay. No paper texture. No illustration style. No icons from material design or SF Symbols. No hamburger menus visible. No loading spinners. No placeholder gray boxes. No comic sans or sans-serif body text. No blue links (links are warm brown). No white background (background is warm off-white parchment). No cluttered UI. No marketing copy. No advertisements. No sidebar with multiple navigation items. No footer visible in this crop.
```

---

## Composition Notes

- Crop: full browser window at 1440×900px, no OS chrome (just the browser content area)
- Focus: the right-rail sphere navigator should be clearly readable and the main content partially visible — both in frame
- The sphere should occupy roughly 220×220px in the right panel and look geometrically precise
- The warm off-white background should dominate — this is a light-mode scholarly app

---

## Style Reference Description

Think: a cross between the visual restraint of the GOV.UK design system, the warmth of a high-end literary magazine (Paris Review, NYRB), and the precision of an astronomical atlas. Not a startup SaaS tool. A scholarly instrument for a thoughtful user.
