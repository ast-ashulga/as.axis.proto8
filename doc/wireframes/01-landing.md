---
type: wireframe
screen: Landing Page
route: /{locale}/
status: draft
date: 2026-05-13
primary-journey: Explorer (A), Resonance Seeker (C) — first entry
---

# Landing Page

**Route**: `/{locale}/`  
**NAS context**: none (not a Fragment view)  
**Phase 1 state**: Gilgamesh active; five other traditions visible as forthcoming  
**Phase 2 change**: becomes the full tradition constellation

---

## Purpose

The landing page is the first thing a new user sees. It must do three things in order:

1. Signal immediately that this is a serious, non-trivial platform — not a summary site, not a chatbot, not a textbook. The visual language and the first few words communicate this.
2. Surface Gilgamesh as the entry point — with enough context that a person who has never heard of the Epic can feel invited rather than excluded.
3. Make the platform's promise visible: this is not just about one epic. Five other traditions are named, placed, and promised — not hidden.

The landing page is not a homepage in the standard sense. There is no news feed, no user dashboard, no "trending" content. It is an entry into the tradition.

---

## ASCII Wireframe — Desktop

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  MNEMOSYNE ENGINE                                                    [EN]  /  [RU]        │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│                                                                                           │
│                        Humanity's great epics,                                            │
│                        navigable to their depths.                                         │
│                                                                                           │
│                        Six traditions. Every claim marked                                 │
│                        for what kind of evidence supports it.                             │
│                                                                                           │
│                                                                                           │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  ┌─ GILGAMESH (ACTIVE) ──────────────────────────────────────────────────────────────┐  │
│  │                                                                                    │  │
│  │  ─────  MESOPOTAMIAN                                                              │  │
│  │                                                                                   │  │
│  │  The Epic of Gilgamesh                                                            │  │
│  │  c. 2100–1200 BCE · Standard Babylonian Version                                   │  │
│  │                                                                                   │  │
│  │  The oldest surviving epic narrative. A king's search for                         │  │
│  │  immortality after the death of his companion. The earliest                       │  │
│  │  recorded flood story. The oldest question about whether                          │  │
│  │  a life can mean anything if it ends.                                             │  │
│  │                                                                                   │  │
│  │  6 tablets · 15 episodes · 1 confirmed cross-tradition parallel                  │  │
│  │                                                                                   │  │
│  │                                          [Enter the Epic of Gilgamesh →]          │  │
│  │                                                                                   │  │
│  └────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                           │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│  Forthcoming traditions                                                                   │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  ┌─────────────────────┐  ┌─────────────────────┐  ┌─────────────────────┐              │
│  │  ○ GREEK            │  │  ○ ROMAN             │  │  ○ INDIAN           │              │
│  │  The Iliad          │  │  Metamorphoses       │  │  Mahabharata        │              │
│  │  Homer              │  │  Ovid                │  │                     │              │
│  │  In preparation     │  │  In preparation      │  │  In preparation     │              │
│  └─────────────────────┘  └─────────────────────┘  └─────────────────────┘              │
│                                                                                           │
│  ┌─────────────────────┐  ┌─────────────────────┐                                        │
│  │  ○ CENTRAL ASIAN    │  │  ○ CENTRAL ASIAN     │                                        │
│  │  Manas              │  │  Jangar              │                                        │
│  │  Kyrgyz oral epic   │  │  Mongolian/Kalmyk    │                                        │
│  │  In preparation     │  │  In preparation      │                                        │
│  └─────────────────────┘  └─────────────────────┘                                        │
│                                                                                           │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  ABOUT THE PLATFORM                                                                       │
│                                                                                           │
│  Mnemosyne Engine is an explorable interface for the great epic traditions.               │
│  Every claim is marked for what kind of evidence supports it: primary source,            │
│  scholarly inference, active debate, or AI-generated interpretation reviewed              │
│  by a scholar. You can read a plain-language summary or the original translation;         │
│  zoom into scholarly debate or cross to another tradition's parallel passage.             │
│  The depth you want is always one step away.                                              │
│                                                                                           │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│  Phase 1 · Gilgamesh tradition · EN + RU interface                                        │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## ASCII Wireframe — Mobile

```
┌────────────────────────────────────┐
│  MNEMOSYNE ENGINE       [EN]/[RU]  │
│  ────────────────────────────────  │
│                                    │
│  Humanity's great epics,           │
│  navigable to their depths.        │
│                                    │
│  Six traditions. Every claim       │
│  marked for what kind of           │
│  evidence supports it.             │
│                                    │
│  ────────────────────────────────  │
│                                    │
│  ─── MESOPOTAMIAN ─────────────── │
│                                    │
│  The Epic of Gilgamesh             │
│  c. 2100–1200 BCE                  │
│                                    │
│  The oldest surviving epic.        │
│  A king's search for immortality.  │
│  The first flood narrative.        │
│                                    │
│  6 tablets · 15 episodes           │
│  1 confirmed parallel              │
│                                    │
│  [Enter the Epic of Gilgamesh →]   │
│                                    │
│  ────────────────────────────────  │
│  Forthcoming                       │
│  ────────────────────────────────  │
│                                    │
│  ○ Greek · The Iliad               │
│  ○ Roman · Metamorphoses           │
│  ○ Indian · Mahabharata            │
│  ○ Manas · Kyrgyz                  │
│  ○ Jangar · Mongolian              │
│                                    │
│  ────────────────────────────────  │
│  About the platform                │
│  ────────────────────────────────  │
│  [↓ read more]                     │
└────────────────────────────────────┘
```

---

## Component Inventory

| Component | Token Reference | Notes |
|---|---|---|
| Platform tagline | `--type-display` serif, centered | 1–2 short lines; not a mission statement |
| Sub-tagline | `--type-heading-3` serif, centered | Expands the tagline |
| Tradition entry block (active) | `--color-bg-surface`, `--color-trad-mesopotamian` left border | Full-width, contained |
| Tradition label | `--type-meta-label` mono, tradition color | "MESOPOTAMIAN" etc. |
| Tradition name | `--type-heading-1` serif | "The Epic of Gilgamesh" |
| Tradition metadata | `--type-caption` serif | Date, version, count of tablets/episodes/parallels |
| Tradition description | `--type-body` serif | 3–4 sentences, invitation rather than summary |
| Entry CTA | `--type-body-medium` serif, `--color-link` | "Enter the Epic of Gilgamesh →" |
| Forthcoming tradition card | `--color-bg-surface`, `--color-border-ghost`, 60% opacity | Ghost state per 00-styling.md |
| Forthcoming label | `--type-meta` mono, `--color-text-muted` | "In preparation" |
| Section separator | `1px --color-border-subtle` | Between sections |
| About text | `--type-body` serif | Concise; describes epistemic discipline without jargon |
| Footer note | `--type-meta` mono, `--color-text-muted` | Phase/locale status |

---

## States and Variants

### Gilgamesh Entry Block (Active Tradition)
- Default: full opacity, left border in `--color-trad-mesopotamian`, readable description
- Hover on CTA: `--color-link-hover`
- Hover on card: subtle background shift to `--color-bg-overlay`

### Forthcoming Tradition Cards (Ghost State)
- 60% opacity on text
- Border: `1px dashed --color-border-ghost`
- Tradition label icon: outlined glyph (○), not filled
- No CTA link — the card is informational, not navigational
- Clicking the card opens a small info panel (inline, not modal) showing tradition context and expected phase

### Forthcoming Card Info Panel (on click)
```
┌────────────────────────────────────────────────────────┐
│  ○ GREEK TRADITION                                     │
│  Homer · The Iliad                                     │
│                                                        │
│  24 books. The Trojan War, the rage of Achilles,       │
│  the death of Hector. The oldest surviving text of     │
│  the Western literary tradition.                       │
│                                                        │
│  Translation: Andrew Lang et al. (1882) — public domain│
│                                                        │
│  Expected: Phase 2                           [close ×] │
└────────────────────────────────────────────────────────┘
```

---

## Interaction Notes

1. The CTA "Enter the Epic of Gilgamesh →" links to `/{locale}/gilgamesh`.
2. The global nav does not include tradition tabs on this screen — the screen IS the tradition selection moment.
3. Locale switcher is present and functional on this screen. Switching preserves the `/` route.
4. No search bar on this screen. Search is not the entry point.
5. No carousel, no auto-rotating content, no animation.
6. Forthcoming tradition cards are ordered non-alphabetically: visual arrangement communicates non-hierarchy. On desktop, they arrange in a 3+2 grid without alphabetical or Western-canonical ordering.

---

## Accessibility

- Tradition entry block is a landmark region: `role="main"`
- Forthcoming cards section: `role="region"`, `aria-label="Forthcoming traditions"`
- Each forthcoming card that opens a panel: `aria-expanded`, `aria-controls`
- Info panel for forthcoming tradition: `role="dialog"` or `role="region"`, with `aria-label`
- CTA link: descriptive text ("Enter the Epic of Gilgamesh") not generic ("Click here")
- Locale switcher: `aria-label="Switch language"`, current locale has `aria-current="true"`

---

## Locale Considerations

- All text on this page is interface copy — localized from the message catalog.
- Tradition names (Gilgamesh, Mahabharata, etc.) are not translated; they are transliterated. Use the localized script for the tradition label (e.g., in RU: "Гильгамеш" not "Gilgamesh") in line with editorial policy.
- The description text of Gilgamesh is authored separately in EN and RU — not machine-translated.
- "In preparation" forthcoming label is translated from message catalog.

---

## Phase 2 Scope Hinge

When six traditions are active, this landing page becomes the tradition constellation:
- The active Gilgamesh block is replaced by a full tradition grid, equal-weight
- No tradition occupies a "featured" position
- Each tradition has its own entry card with its own color token
- The arrangement is non-alphabetical and non-canonical (geographic or culturally-neutral dispersion)
- The "About the platform" section remains at the bottom
