---
type: wireframe
screen: Fragment View
route: /{locale}/gilgamesh/tablet-xi/flood
query-params: ?layer=surface|translated|scholaria  &track=propp|bakhtin|...
status: draft
date: 2026-05-13
primary-journey: Explorer (A), Scholar (B), Resonance Seeker (C)
---

# Fragment View

The Fragment View is the main content screen of Mnemosyne Engine. It is the most complex screen and is the proof of concept for the Onion Model. All three user journeys pass through it. Everything here should work before anything else is built.

**Route**: `/{locale}/gilgamesh/tablet-xi/flood` (example)  
**NAS context**: `nms://gilgamesh/tablet-xi/flood`  
**Three states in one screen**: Surface (layer 0), Translated (layer 2), Scholaria (layer 4)  
**Layer switching** is a content swap, not a page navigation. The URL updates (`?layer=translated`); the chrome does not re-render.

---

## Purpose

The Fragment View lets a user encounter a specific episode of Gilgamesh at any depth — from an AI-generated plain-language summary to a translated passage to the scholarly apparatus — without ever leaving the same URL context. It also surfaces the cross-tradition parallel (Constellation/Parallel strip) at every depth level, not just at the surface. The Track View (structural annotations) is a progressive enhancement that scholars can open without interrupting the reading experience.

---

## ASCII Wireframe — Desktop, Surface Layer (Layer 0, Default)

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  MNEMOSYNE ENGINE                    Gilgamesh   Parallels          [EN]  /  [RU]        │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  Gilgamesh  ›  Tablet XI  ›  The Flood                                                   │
│  nms://gilgamesh/tablet-xi/flood                                     [copy]              │
│                                                                                           │
│  THE FLOOD EPISODE                                         [▲ AI-REVIEWED]              │
│  Tablet XI of the Epic of Gilgamesh                                                     │
│                                                                                          │
│  ┌─ LAYER INDICATOR ────────────────────────────────────────────────────────────────┐  │
│  │  [ Surface ● ]  ·  [ Translated ○ ]  ·  [ Scholaria ○ ]                        │  │
│  └──────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                           │
│  ┌─ CONTENT AREA ─────────────────────────────────────────────────────────────────────┐  │
│  │                                                                                    │  │
│  │  ▲  AI-generated summary · Reviewed by Dr. A. Kovacs · 2026-04-18  [See sources] │  │
│  │  ──────────────────────────────────────────────────────────────────────────────  │  │
│  │                                                                                   │  │
│  │  Gilgamesh, stricken by the death of Enkidu and unable to accept his own          │  │
│  │  mortality, seeks out Utnapishtim — the one mortal who has been granted           │  │
│  │  eternal life by the gods. Utnapishtim lives beyond the waters of death.          │  │
│  │  Gilgamesh crosses them.                                                         │  │
│  │                                                                                   │  │
│  │  At the edge of the world, Utnapishtim tells Gilgamesh a secret: he survived      │  │
│  │  the great flood. The gods had decided to destroy all life. But the god Ea,       │  │
│  │  bound by oath not to warn any human directly, whispered the decision through     │  │
│  │  the walls of a reed house. Utnapishtim heard. He built a boat. He loaded his    │  │
│  │  family, his possessions, and every living creature onto it. The flood came.      │  │
│  │                                                                                   │  │
│  │  The waters covered the mountains. After seven days the flood subsided.           │  │
│  │  Utnapishtim sent out birds — first a dove, then a swallow, then a raven —        │  │
│  │  to find land. The raven did not return. He disembarked and made sacrifice.        │  │
│  │  The gods, who had not eaten since the flood began, gathered over the offering.   │  │
│  │                                                                                   │  │
│  │  The goddess Ishtar swore an oath on her lapis lazuli necklace: she would          │  │
│  │  remember these days. The god Enlil, who had decreed the flood, was rebuked       │  │
│  │  by Ea for his disproportionate judgment. As recompense, Enlil granted            │  │
│  │  Utnapishtim and his wife the gift of eternal life and placed them at the mouth   │  │
│  │  of the rivers, at the ends of the earth, where they remain.                     │  │
│  │                                                                                   │  │
│  │  Utnapishtim then sets Gilgamesh a challenge: stay awake for seven days.          │  │
│  │  Gilgamesh fails immediately, sleeping for seven days while Utnapishtim's wife   │  │
│  │  bakes bread to mark each day of his sleep. The lesson is unambiguous: if        │  │
│  │  Gilgamesh cannot resist even sleep, he cannot resist death.                     │  │
│  │                                                                                   │  │
│  │  [Show structure ▾]                                                               │  │
│  │                                                                                   │  │
│  └────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                           │
│  ┌─ PARALLEL STRIP ──────────────────────────────────────────────────────────────────┐  │
│  │  Structural resonance in another tradition                                         │  │
│  │                                                                                    │  │
│  │  ┌───────────────────────────────────────────────────────────────────────────┐    │  │
│  │  │  [● DOCUMENTED]  The Great Flood · Genesis 6–9 (KJV) · Biblical tradition │    │  │
│  │  │                                                                           │    │  │
│  │  │  Both traditions depict a divine judgment by flood, a chosen survivor     │    │  │
│  │  │  warned through an indirect channel, and birds sent to find dry land.     │    │  │
│  │  │  They diverge in what the survivor receives: immortality vs. covenant.   │    │  │
│  │  │                                                                           │    │  │
│  │  │  Type: Shared human condition — not a shared source                       │    │  │
│  │  │                                                  [Read this parallel →]   │    │  │
│  │  └───────────────────────────────────────────────────────────────────────────┘    │  │
│  └────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                           │
│  ┌─ EPISODE NAVIGATION ──────────────────────────────────────────────────────────────┐  │
│  │  ←  Tablet XI · Utnapishtim's Journey                                             │  │
│  │  →  Tablet XI · The Plant of Immortality                                          │  │
│  └──────────────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## ASCII Wireframe — Desktop, Translated Layer (Layer 2)

User clicked `[ Translated ○ ]` in the Layer Indicator. Content area swaps. URL becomes `?layer=translated`.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  MNEMOSYNE ENGINE                    Gilgamesh   Parallels          [EN]  /  [RU]        │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  Gilgamesh  ›  Tablet XI  ›  The Flood                                                   │
│  nms://gilgamesh/tablet-xi/flood                                     [copy]              │
│                                                                                           │
│  THE FLOOD EPISODE                                         [● DOCUMENTED]               │
│  Tablet XI of the Epic of Gilgamesh                                                     │
│                                                                                          │
│  ┌─ LAYER INDICATOR ────────────────────────────────────────────────────────────────┐  │
│  │  [ Surface ○ ]  ·  [ Translated ● ]  ·  [ Scholaria ○ ]                        │  │
│  └──────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                           │
│  ┌─ CONTENT AREA ─────────────────────────────────────────────────────────────────────┐  │
│  │                                                                                    │  │
│  │  Translation: R. Campbell Thompson (1930)                                         │  │
│  │  Source: Thompson, "The Epic of Gilgamish" (1930) · Public domain                 │  │
│  │  CDLI reference: P003793                                                          │  │
│  │  ──────────────────────────────────────────────────────────────────────────────  │  │
│  │                                                                                   │  │
│  │  Utnapishtim said unto him, unto Gilgamish:                                       │  │
│  │  "I will reveal unto thee, O Gilgamish, a secret story,                           │  │
│  │   and the decision of the gods I will tell thee.                                  │  │
│  │                                                                                   │  │
│  │   Shurippak — a city which thou knowest,                                          │  │
│  │   which lieth upon the banks of the Euphrates —                                   │  │
│  │   that city was old, and the gods dwelling therein —                              │  │
│  │   their hearts moved the great gods to make a flood."                             │  │
│  │                                                                                   │  │
│  │  [···]  (lacuna: approximately 5 lines damaged or missing)                        │  │
│  │                                                                                   │  │
│  │  "Ea — wisest of the gods, cunning, knowing all things —                          │  │
│  │   could not break the oath of the gods.                                           │  │
│  │   But he whispered their word to the reed fence:                                  │  │
│  │   'O reed fence, reed fence! O wall, wall!                                        │  │
│  │    Hear, O reed fence; understand, O wall!                                        │  │
│  │    O man of Shurippak, son of Ubara-tutu,                                         │  │
│  │    tear down thy house, build a ship;                                              │  │
│  │    abandon thy possessions, seek thou life;                                       │  │
│  │    thy goods despise, save thy life;                                              │  │
│  │    bring up the seed of all living things into the ship.'"                        │  │
│  │                                                                                   │  │
│  │  [···]  (lacuna: extent uncertain; approximately 8–12 lines)                      │  │
│  │                                                                                   │  │
│  │  "I understood; I spake to my lord Ea:                                            │  │
│  │   'Behold, my lord, what thou thus commandest                                     │  │
│  │    I will honour and will carry out.'"                                            │  │
│  │                                                                                   │  │
│  │  — Thompson (1930), Tablet XI, lines 1–47 (selected)                              │  │
│  │                                                                                   │  │
│  │  [Show structure ▾]                                                               │  │
│  │                                                                                   │  │
│  └────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                           │
│  ┌─ PARALLEL STRIP (unchanged — visible at all layers) ──────────────────────────────┐  │
│  │  [Same Parallel strip content as Surface layer]                                   │  │
│  └────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                           │
│  ┌─ EPISODE NAVIGATION ──────────────────────────────────────────────────────────────┐  │
│  │  ←  Tablet XI · Utnapishtim's Journey                                             │  │
│  │  →  Tablet XI · The Plant of Immortality                                          │  │
│  └──────────────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

**Lacuna rendering**: `[···]` is displayed in `--type-caption`, `--color-text-muted`, with `font-style: italic`. It has `title="Gap in surviving tablet"` and an `aria-label`. Parenthetical content describes the nature of the gap (extent, reason if known). Lacunae are content, not formatting problems.

---

## ASCII Wireframe — Desktop, Scholaria Layer (Layer 4)

User clicked `[ Scholaria ○ ]`. URL becomes `?layer=scholaria`.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  MNEMOSYNE ENGINE                    Gilgamesh   Parallels          [EN]  /  [RU]        │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  Gilgamesh  ›  Tablet XI  ›  The Flood                                                   │
│  nms://gilgamesh/tablet-xi/flood                                     [copy]              │
│                                                                                           │
│  THE FLOOD EPISODE — Scholarly Apparatus               [◈ CONTESTED / ● DOCUMENTED]    │
│  Tablet XI of the Epic of Gilgamesh                                                     │
│                                                                                          │
│  ┌─ LAYER INDICATOR ────────────────────────────────────────────────────────────────┐  │
│  │  [ Surface ○ ]  ·  [ Translated ○ ]  ·  [ Scholaria ● ]                        │  │
│  └──────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                           │
│  ┌─ CONTENT AREA ─────────────────────────────────────────────────────────────────────┐  │
│  │                                                                                    │  │
│  │  MANUSCRIPT STATUS                                                                │  │
│  │  Tablet XI survives in multiple copies. The best-preserved is the Nineveh copy   │  │
│  │  from the library of Ashurbanipal (7th century BCE; CDLI P003793). The flood      │  │
│  │  episode (lines 1–196) is the most complete section of the entire Standard        │  │
│  │  Babylonian Version. Approximately 15–20 lines are damaged or missing across      │  │
│  │  all known copies.                                                                │  │
│  │  Tier: [● DOCUMENTED]                                                             │  │
│  │                                                                                   │  │
│  │  ──────────────────────────────────────────────────────────────────────────────  │  │
│  │  TEXTUAL HISTORY                                                                  │  │
│  │  The flood narrative in Tablet XI is closely paralleled by the older Sumerian     │  │
│  │  Flood Story (known from the Nippur tablet, c. 1600 BCE) and by the Atrahasis     │  │
│  │  Epic (also c. 1700–1600 BCE). The scholarly consensus holds that the Gilgamesh  │  │
│  │  flood episode was interpolated from the Atrahasis tradition into the Gilgamesh  │  │
│  │  cycle sometime in the Old Babylonian period.                                     │  │
│  │  Tier: [◑ RECONSTRUCTED]                                                          │  │
│  │                                                                                   │  │
│  │  SCHOLARLY DEBATE: INTERPOLATION QUESTION                                         │  │
│  │  Whether the flood narrative is a late addition or an integral part of the        │  │
│  │  Gilgamesh cycle is actively contested. George (2003) argues the Tablet XI        │  │
│  │  version was composed specifically for the Standard Babylonian Version, with      │  │
│  │  unique modifications not present in Atrahasis. Tigay (1982) argues that          │  │
│  │  interpolation is the more parsimonious explanation. The debate hinges on         │  │
│  │  whether the theological differences between the two accounts indicate separate   │  │
│  │  authorial intent.                                                                │  │
│  │  Tier: [◈ CONTESTED]                                                               │  │
│  │                                                                                   │  │
│  │  KEY MANUSCRIPT VARIANTS                                                          │  │
│  │  · Line 14: Nineveh copy reads "cedar ship"; Sippar fragment reads "great ship."  │  │
│  │    George (2003) prefers Nineveh; Thompson (1930) follows Sippar.                 │  │
│  │    Tier: [◈ CONTESTED]                                                             │  │
│  │                                                                                   │  │
│  │  · Lines 45–55: The Sippar fragment (BM 78941) contains a variant account of the  │  │
│  │    reed-wall warning that differs from the Nineveh copy in approximately 6 words. │  │
│  │    The divergence does not affect the narrative substance.                        │  │
│  │    Tier: [● DOCUMENTED]                                                            │  │
│  │                                                                                   │  │
│  │  SCHOLARSHIP CITED                                                                │  │
│  │  · Andrew George, "The Babylonian Gilgamesh Epic" (2003), vol. I, pp. 490–537.   │  │
│  │  · Jeffrey Tigay, "The Evolution of the Gilgamesh Epic" (1982), pp. 214–240.     │  │
│  │  · R. Campbell Thompson, "The Epic of Gilgamish" (1930), pp. 59–85.              │  │
│  │                                                                                   │  │
│  │  [Show structure ▾]                                                               │  │
│  │                                                                                   │  │
│  └────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                           │
│  ┌─ PARALLEL STRIP (unchanged) ──────────────────────────────────────────────────────┐  │
│  │  [Same Parallel strip content as other layers]                                    │  │
│  └────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                           │
│  ┌─ EPISODE NAVIGATION ──────────────────────────────────────────────────────────────┐  │
│  │  ←  Tablet XI · Utnapishtim's Journey                                             │  │
│  │  →  Tablet XI · The Plant of Immortality                                          │  │
│  └──────────────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## ASCII Wireframe — Mobile, Surface Layer

Single column layout. Layer indicator sits immediately below the episode heading, above the content. Parallel strip follows content.

```
┌────────────────────────────────────┐
│  MNEMOSYNE ENGINE        [EN]/[RU] │
│  ────────────────────────────────  │
│  Gilgamesh › Tablet XI › The Flood │
│  nms://gilgamesh/tablet-xi/flood   │
│  [copy]                            │
│  ────────────────────────────────  │
│                                    │
│  THE FLOOD EPISODE                 │
│  [▲ AI-REVIEWED]                   │
│                                    │
│  ─ LAYER ────────────────────────  │
│  [ Surface ● ] [Translated ○]      │
│  [ Scholaria ○ ]                   │
│  ────────────────────────────────  │
│                                    │
│  ▲ AI-generated · Reviewed by      │
│    Dr. A. Kovacs · 2026-04-18      │
│    [See sources]                   │
│  ────────────────────────────────  │
│                                    │
│  Gilgamesh, stricken by the death  │
│  of Enkidu and unable to accept    │
│  his own mortality, seeks out      │
│  Utnapishtim — the one mortal who  │
│  has been granted eternal life...  │
│                                    │
│  [Read more ▾]  (if truncated)     │
│                                    │
│  [Show structure ▾]                │
│                                    │
│  ─ PARALLEL ─────────────────────  │
│  Structural resonance in another   │
│  tradition                         │
│                                    │
│  [● DOCUMENTED]                    │
│  The Great Flood                   │
│  Genesis 6–9 · Biblical tradition  │
│                                    │
│  Both traditions depict a flood    │
│  judgment, an indirect warning,    │
│  and birds sent to find dry land.  │
│  They diverge in what the survivor │
│  receives: immortality vs.         │
│  covenant.                         │
│                                    │
│  Type: Shared human condition      │
│        [Read this parallel →]      │
│                                    │
│  ─ NAVIGATION ───────────────────  │
│  ← Utnapishtim's Journey           │
│  → The Plant of Immortality        │
└────────────────────────────────────┘
```

---

## Component Inventory

| Component | Token Reference | Notes |
|---|---|---|
| Page heading | `--type-heading-1` serif | Episode title — outside content area, immediately above Layer Indicator |
| Episode heading tier badge | Tier badge component | Tier of the current layer's content |
| NAS address | `--type-meta` mono | With `[copy]` affordance |
| Layer indicator | `--type-meta-label`, `--space-4` between markers | Between episode heading and content area |
| AI disclosure line | `--type-caption`, `--color-text-secondary` | Layer 0 only, first element inside content area |
| Body text | `--type-body` serif | All layers |
| Translated passage | `--type-body` serif, translator credit in `--type-meta` | Layer 2 only |
| Lacuna marker `[···]` | `--type-caption`, `--color-text-muted`, italic | Layer 2 and Layer 4 |
| Tier badge | `--type-meta-label` mono + icon shape | Per §5 of 00-styling.md |
| "Show structure" toggle | `--type-caption`, `--color-accent-primary` | Opens track view |
| Parallel strip heading | `--type-caption`, `--color-text-secondary` | Absent if no parallel |
| Parallel card title | `--type-heading-3` serif | Tradition name + episode |
| Parallel card body | `--type-caption` serif | Editorial note (resonance + divergence) |
| Parallel card type label | `--type-meta` mono | Plain-language parallel type |
| "Read this parallel" link | `--type-caption`, `--color-link` | → Parallel View |
| Episode nav | `--type-caption`, `--color-link` | ← → sequence navigation |
| Section labels (Scholaria) | `--type-mono-heading` | MANUSCRIPT STATUS, etc. |

**Layer Indicator position note**: The Layer Indicator is the bridge between the episode identity (heading, NAS address) and the layer content. It sits above the content area box on all screen sizes and all layer states. On desktop, it renders as a labeled horizontal row with the active layer visually distinct. On mobile, it is a compact 2×2 grid (or wrapped row) directly below the episode title. The tier badge on the episode heading updates to reflect the active layer's confidence tier — this badge is on the heading line, not inside the content area.

**Constellation Rail note (≥1280px)**: At wide viewport widths, the Parallel strip may alternatively be rendered as a right-margin Constellation Rail fixed alongside the content area rather than below it (per PRD §4.3). This is a Phase 2 layout enhancement; Phase 1 uses the below-content strip at all widths.

---

## States and Variants

### Layer State Machine

```
Surface (default)
  ├── Content: AI summary, plain language
  ├── Tier badge: ▲ AI-REVIEWED or ◑ RECONSTRUCTED
  └── AI disclosure line: visible

Translated
  ├── Content: translated passage with attribution
  ├── Tier badge: ● DOCUMENTED
  ├── AI disclosure line: absent
  └── Lacuna markers: visible where applicable

Scholaria
  ├── Content: manuscript notes, textual variants, scholarly debate
  ├── Tier badge: may be ● DOCUMENTED, ◑ RECONSTRUCTED, or ◈ CONTESTED per section
  └── Multiple tier badges possible (one per section/claim)
```

### Parallel Strip States

| State | Display |
|---|---|
| Parallel exists (1) | Strip with one Parallel card |
| No parallel | Strip is absent (no placeholder, no "more coming soon") |
| Multiple parallels (Phase 2) | Strip with multiple stacked cards; heading shows count |

### Track View States

| State | Display |
|---|---|
| Closed (default) | `[Show structure ▾]` visible; track area hidden |
| Open | `[Hide structure ▲]` replaces toggle; track rows render below content |
| Track with data | Annotation blocks visible per framework |
| Track empty for framework | Framework row hidden entirely (not shown as empty row) |

### Loading State

Fragment content loads from API on page mount. During loading:
- Content area shows a text-only skeleton: paragraph-height gray bars at correct line-height
- Layer indicator renders immediately (static)
- Parallel strip is hidden until parallel data resolves separately
- No spinner; no logo animation

### Error State

If the NAS address cannot be resolved:
- Content area: "This passage could not be found. Check the address: `nms://...`"
- Layer indicator: hidden
- Parallel strip: hidden
- See `09-states-and-edge-cases.md` for full error specifications

---

## Interaction Notes

### Layer Switch

1. User clicks a layer marker in the Layer Indicator.
2. The Content Area replaces its content with the new layer's Fragment data.
3. URL updates to `?layer=[name]` without page reload (pushState).
4. Layer indicator updates active state.
5. The tier badge on the episode heading updates to the new layer's tier.
6. Scroll position resets to top of Content Area.
7. Parallel strip does not change.
8. If Track View is open, it remains open and re-renders annotation data for the same Fragment.

### "See sources" Link (AI Disclosure)

1. User clicks `[See sources]`.
2. An inline expandable panel opens below the disclosure line.
3. Panel shows the list of grounding Fragments (NAS addresses with tier badges).
4. Clicking a NAS address copies it to clipboard (same behavior as `[copy]` affordance).
5. Clicking `[See sources]` again collapses the panel.

### "Show structure" Toggle

1. User clicks `[Show structure ▾]`.
2. The Track View opens below the Content Area (see `05-track-view.md`).
3. The Parallel Strip moves below the Track View.
4. Toggle label changes to `[Hide structure ▲]`.
5. URL does not change when the track view is opened.

### Deep Link Behavior

Arriving at `?layer=scholaria`:
- Page renders directly at Scholaria layer.
- Layer indicator shows `[ Scholaria ● ]` as active.
- No forced Surface entry; no intro overlay.

Arriving at `?layer=translated&track=propp`:
- Translated layer is active.
- Track View is open immediately with Propp track active.

---

## Accessibility

| Element | Requirement |
|---|---|
| Layer indicator | `role="tablist"`, each marker is `role="tab"`, active has `aria-current="true"` |
| Content area | `role="tabpanel"`, `aria-labelledby` points to active layer tab |
| Tier badge | `aria-label="Confidence tier: [tier name]"` |
| Lacuna marker | `aria-label="Lacuna: [description]"` |
| AI disclosure line | `role="note"` |
| "See sources" | `aria-expanded="false/true"`, `aria-controls="[sources-panel-id]"` |
| "Show structure" | `aria-expanded="false/true"`, `aria-controls="[track-view-id]"` |
| NAS copy button | `aria-label="Copy NAS address to clipboard"` |
| Parallel strip | `role="complementary"`, `aria-label="Cross-tradition parallels"` |
| "Read this parallel" | Descriptive: `aria-label="Read parallel: The Great Flood — Genesis 6–9"` |
| Episode nav | `rel="prev"` and `rel="next"` on anchor tags |

Keyboard tab order (left to right, top to bottom):
1. Global nav links
2. Locale switcher
3. NAS copy button
4. Layer indicator (tab group)
5. "See sources" link (Layer 0 only)
6. Content area links (scholarly citations, NAS addresses)
7. "Show structure" toggle
8. (If track view open: track framework links, annotation blocks)
9. Parallel strip: "Read this parallel" link
10. Episode navigation links

---

## Locale Considerations

- Interface labels ("The Flood Episode", layer names, section headings) are localized from message catalog.
- Layer 0 summary text: generated and reviewed separately for EN and RU. Both are first-class content, not translations of each other.
- Layer 2 translated passage: EN only in Phase 1 (Thompson 1930). If locale is RU and Layer 2 is selected: "This translation is not yet available in Russian. Showing English translation." (See `09-states-and-edge-cases.md` for this state.)
- Layer 4 scholarly apparatus: EN only in Phase 1. Same fallback behavior.
- NAS address in the header is locale-neutral: `nms://gilgamesh/tablet-xi/flood` — no locale segment. The URL path changes (`/en/...` vs `/ru/...`), but the NAS address does not.
- Switching locale preserves `?layer=` and `?track=` query parameters.

---

## Phase 2 Scope Hinges

| Trigger | Change on this screen |
|---|---|
| Layer 1 (Narrated) added | Layer indicator expands to 4 positions; new scholarly narrative content type at Layer 1 |
| Layer 3 (Original) added | Layer indicator expands to 5 positions; original Akkadian text with CDLI line numbers; `lang="sux"` on text block |
| Character Voice (Phase 2) | A third voice type marker appears in content area for passages cited by character personas |
| Multiple confirmed parallels (Phase 2) | Parallel strip shows multiple cards; heading shows count |
| Automated parallel detection (Phase 2) | Parallel card may show a similarity score with full provenance |
| Wide viewport Constellation Rail (Phase 2) | At ≥1280px, Parallel strip becomes a fixed right-margin rail alongside the content area |

---

## Cross-Screen Consistency Notes

- The layer indicator component is identical to the one specified in `00-styling.md §6`. Do not customize per-screen.
- The NAS address + `[copy]` pattern is consistent across all screens where a NAS address appears.
- The "Show structure" toggle color (`--color-accent-primary`) matches all other secondary interactive affordances.
- Tier badge component and expanded state are as specified in `00-styling.md §5`.
- The Parallel strip is the same component whether it appears on Fragment View or any other screen that surfaces a Parallel card.
