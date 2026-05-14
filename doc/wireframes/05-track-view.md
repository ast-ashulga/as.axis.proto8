---
type: wireframe
screen: Track View (Progressive Enhancement)
route: /{locale}/gilgamesh/tablet-xi/flood?track=propp
status: draft
date: 2026-05-13
primary-journey: Scholar (B) primarily; any user may open it
---

# Track View

**Route**: Same as Fragment View — `/{locale}/gilgamesh/tablet-xi/flood`  
**Activated by**: `[Show structure ▾]` toggle in the Fragment View  
**URL behavior**: `?track=propp` when a specific track is active; no change when track view is open but no specific track is selected  
**Position in layout**: Opens below the Fragment View Content Area; Parallel strip moves below it  
**NAS context**: `nms://gilgamesh/tablet-xi/flood`

---

## Purpose

The Track View is a progressive enhancement of the Fragment View. It is not a separate screen or mode. It renders structural annotations for the current Fragment — annotations by scholars using frameworks like Propp's morphology, Bakhtin's chronotopes, the Thompson Motif Index, and the Campbell monomyth — in a horizontal grid where each annotation is a labeled block positioned proportionally across the fragment's span.

A non-expert who opens the Track View sees labeled boxes. They may not know what "PROPP-14" means. The design supports this: every framework name is a link to a 2–3 sentence plain-language explainer. Every annotation label includes a human-readable name alongside the code.

A scholar who opens the Track View can see the full annotation map, click any annotation to see its confidence tier and reviewer attribution, and compare framework coverages at a glance.

The Track View closes via the same toggle that opened it. No back-button navigation is required.

---

## ASCII Wireframe — Desktop (Track View Open, Propp active)

The Track View renders below the Content Area. The Fragment View layout above it (layer indicator, content area, AI disclosure) is unchanged.

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  [Fragment View content area — Layer 0 or 2 or 4 above this line — unchanged]            │
│                                                                                           │
│  [Hide structure ▲]                                                                       │
│                                                                                           │
│  ┌─ TRACK VIEW ────────────────────────────────────────────────────────────────────┐     │
│  │                                                                                 │     │
│  │  ANNOTATION TRACKS  ·  Tablet XI · The Flood Episode                           │     │
│  │  Tracks shown: Propp · Campbell · TMI · [+ Bakhtin]  [+ Lévi-Strauss]         │     │
│  │                                                                                 │     │
│  │  FRAGMENT EXTENT ────────────────────────────────────────────────────────────  │     │
│  │  Lines 1–196 of Tablet XI (Standard Babylonian Version, Nineveh copy)          │     │
│  │                                                                                 │     │
│  │  ──────────────────────────────────────────────────────────────────────────    │     │
│  │  PROPP [?]                                                                      │     │
│  │  ┌──────────────┐  ┌────────────────┐  ┌──────────────┐  ┌───────────────┐   │     │
│  │  │ PROPP-8      │  │ PROPP-15       │  │ PROPP-19     │  │ PROPP-31      │   │     │
│  │  │ Villainy /   │  │ Spatial trans- │  │ Return       │  │ Recognition   │   │     │
│  │  │ Lack         │  │ location       │  │              │  │               │   │     │
│  │  │ [◑ Recon.]  │  │ [◑ Recon.]    │  │ [● Docu.]   │  │ [● Docu.]    │   │     │
│  │  └──────────────┘  └────────────────┘  └──────────────┘  └───────────────┘   │     │
│  │                                                                                 │     │
│  │  ──────────────────────────────────────────────────────────────────────────    │     │
│  │  CAMPBELL [?]                                                                   │     │
│  │  ┌──────────────────────────────────────┐  ┌──────────────────────────────┐   │     │
│  │  │ Crossing the First Threshold         │  │ The Road Back                │   │     │
│  │  │ [◑ Reconstructed]                   │  │ [● Documented]              │   │     │
│  │  └──────────────────────────────────────┘  └──────────────────────────────┘   │     │
│  │                                                                                 │     │
│  │  ──────────────────────────────────────────────────────────────────────────    │     │
│  │  TMI (Thompson Motif Index) [?]                                                 │     │
│  │  ┌─────────────────────┐  ┌─────────────────────────────────────────────┐     │     │
│  │  │ A1010               │  │ A1021                                       │     │     │
│  │  │ Deluge              │  │ Deluge: escape in boat                      │     │     │
│  │  │ [● Documented]     │  │ [● Documented]                             │     │     │
│  │  └─────────────────────┘  └─────────────────────────────────────────────┘     │     │
│  │                                                                                 │     │
│  │  [+ Bakhtin chronotopes]  [+ Lévi-Strauss mythemes]  [+ Emotional valence]    │     │
│  │  (Not toggled on — click to enable)                                             │     │
│  │                                                                                 │     │
│  └─────────────────────────────────────────────────────────────────────────────────┘     │
│                                                                                           │
│  ┌─ PARALLEL STRIP ──────────────────────────────────────────────────────────────────┐  │
│  │  [Parallel strip — same as in Fragment View, now below Track View]                │  │
│  └────────────────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## Annotation Block Detail (on click)

Clicking any annotation block opens an inline tooltip/expansion. This is not a modal — it is an inline panel anchored to the block.

```
┌─────────────────────────────────────────────────────────────────────┐
│  PROPP-15 · Spatial Translocation                                   │
│  ───────────────────────────────────────────────────────────────    │
│  The hero moves to a different location in order to find or         │
│  retrieve something. Here: Gilgamesh crossing the Waters of         │
│  Death to reach Utnapishtim.                                        │
│                                                                     │
│  Confidence:  [◑ RECONSTRUCTED]                                     │
│  Annotated by:  Dr. A. Kovacs                                       │
│  Date:  2026-04-22                                                  │
│  NAS fragment:  nms://gilgamesh/tablet-xi/flood                     │
│                                                                     │
│  About Propp's Morphology [?]                                       │
│  ───────────────────────────────────────────────────────────────    │
│  Vladimir Propp (1895–1970) analyzed Russian folktales and          │
│  identified 31 recurring narrative functions. His framework is       │
│  applied here to identify structural parallels across epic          │
│  traditions.                                                        │
│                                                                     │
│                                                         [close ×]   │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Framework Explainer (on clicking `[?]` next to framework name)

```
┌──────────────────────────────────────────────────────────────────────┐
│  Propp's Morphology of the Folktale (1928)                          │
│  ────────────────────────────────────────────────────────────────── │
│  Vladimir Propp identified 31 narrative "functions" — actions       │
│  that advance the story — recurring in Russian folktales in         │
│  a consistent sequence. Later scholars applied the framework        │
│  to myth and epic traditions worldwide.                             │
│                                                                     │
│  The numbers here (PROPP-8, PROPP-15, etc.) are the function        │
│  index from Propp's original 1928 classification. Each function     │
│  has a canonical name and a brief description.                      │
│                                                                     │
│                                                         [close ×]   │
└──────────────────────────────────────────────────────────────────────┘
```

---

## ASCII Wireframe — Mobile (Track View Open)

On mobile, the annotation grid collapses to a vertically stacked list of annotation rows, each row collapsible.

```
┌────────────────────────────────────┐
│  [Fragment content above]          │
│                                    │
│  [Hide structure ▲]                │
│  ────────────────────────────────  │
│  ANNOTATION TRACKS                 │
│  Tablet XI · The Flood             │
│                                    │
│  PROPP [?]  ▾                      │
│  ┌──────────────────────────────┐  │
│  │ PROPP-8 · Villainy / Lack   │  │
│  │ [◑ Reconstructed]           │  │
│  ├──────────────────────────────┤  │
│  │ PROPP-15 · Spatial trans.   │  │
│  │ [◑ Reconstructed]           │  │
│  ├──────────────────────────────┤  │
│  │ PROPP-19 · Return           │  │
│  │ [● Documented]             │  │
│  ├──────────────────────────────┤  │
│  │ PROPP-31 · Recognition      │  │
│  │ [● Documented]             │  │
│  └──────────────────────────────┘  │
│                                    │
│  CAMPBELL [?]  ▾                   │
│  ┌──────────────────────────────┐  │
│  │ Crossing the First Threshold │  │
│  │ [◑ Reconstructed]           │  │
│  ├──────────────────────────────┤  │
│  │ The Road Back               │  │
│  │ [● Documented]             │  │
│  └──────────────────────────────┘  │
│                                    │
│  TMI [?]  ▾                        │
│  ┌──────────────────────────────┐  │
│  │ A1010 · Deluge              │  │
│  │ [● Documented]             │  │
│  ├──────────────────────────────┤  │
│  │ A1021 · Deluge: escape...   │  │
│  │ [● Documented]             │  │
│  └──────────────────────────────┘  │
│                                    │
│  [+ Bakhtin]  [+ Lévi-Strauss]    │
│  ────────────────────────────────  │
│  [Parallel strip below]            │
└────────────────────────────────────┘
```

---

## Component Inventory

| Component | Token Reference | Notes |
|---|---|---|
| Track View container | `--color-bg-inset`, `--space-4` padding | Inset from main content background |
| Track header | `--type-mono-heading` | "ANNOTATION TRACKS · [Fragment context]" |
| Active track toggles | `--type-meta-label` mono, active has border | "Propp · Campbell · TMI" |
| Inactive track toggles | `--type-meta-label` mono, muted, `[+ Label]` form | "Bakhtin chronotopes" etc. |
| Framework row label | `--type-meta-label` mono + `[?]` link | Framework name |
| Annotation block | `--color-bg-surface`, border `--color-border-subtle`, `--space-2` padding | Positioned proportionally in desktop grid |
| Annotation code | `--type-mono-body` | "PROPP-8" |
| Annotation name | `--type-caption` serif | "Villainy / Lack" |
| Annotation tier badge | Tier badge component | Compact inline form |
| "Fragment extent" line | `--type-meta` mono, `--color-text-muted` | Lines range reference |
| Explainer tooltip | `--color-bg-surface`, `--space-4` padding, shadow | Not a modal |
| Close button in tooltip | `--type-caption`, `--color-link` | "[close ×]" |

---

## Default Track Visibility

When the Track View is first opened:
- **On by default**: Propp functions, Campbell monomyth stages, Thompson Motif Index
- **Off by default (togglable on)**: Bakhtin chronotopes, Lévi-Strauss mythemes, Emotional valence, Geographic references

Framework rows with no annotations for the current Fragment are hidden entirely — they do not appear as empty rows.

---

## Track Activation via URL

If the URL includes `?track=propp`, the Track View opens automatically when the page loads with the Propp track active. Multiple tracks can be specified: `?track=propp,campbell`. This supports scholar deep-linking.

`?layer=scholaria&track=propp` opens Scholaria layer with Propp track active simultaneously.

---

## Interaction Notes

1. `[Show structure ▾]` toggle opens the Track View; becomes `[Hide structure ▲]`. Clicking again closes the Track View.
2. Track View open state is not persisted in localStorage — it resets on page reload. Scholars deep-link to `?track=propp` if they want to share a specific track state.
3. Clicking `[+ Bakhtin]` (inactive framework toggle) adds that framework row to the track view.
4. Clicking an active framework label (e.g., "Propp") in the active toggles row removes it from the displayed tracks.
5. Clicking an annotation block opens the inline tooltip. Clicking elsewhere or `[close ×]` closes it. Only one tooltip is open at a time.
6. Clicking `[?]` next to a framework name opens the framework explainer panel. This is an inline expandable, not a modal.
7. On desktop, annotation blocks are positioned horizontally proportional to their position in the fragment text. On mobile they are a flat vertical list.
8. URL updates when track state changes via `?track=` parameter (pushState). The layer parameter is preserved.

---

## Accessibility

| Element | Requirement |
|---|---|
| Track View container | `role="region"`, `aria-label="Structural annotation tracks"` |
| Framework row | `role="group"`, `aria-label="[Framework Name] annotations"` |
| Annotation block | `role="button"` (if clickable), `aria-label="[Code]: [Name], confidence [Tier]"` |
| Framework `[?]` link | `aria-label="About [Framework Name]"` |
| Explainer panel | `role="tooltip"` or `role="dialog"`, `aria-labelledby` |
| Active track toggle | `aria-pressed="true"` |
| Inactive track toggle | `aria-pressed="false"` |
| Hide/Show toggle | `aria-expanded="false/true"`, `aria-controls="[track-view-id]"` |

Keyboard: all annotation blocks are Tab-reachable. Enter/Space triggers the tooltip. Escape closes the tooltip. Focus returns to the block that triggered it.

---

## Phase 2 Scope Hinges

| Trigger | Change on this screen |
|---|---|
| Additional tracks added | New framework rows appear; default visibility rules apply as defined per framework |
| Character Voice (Phase 2) | A "Voice" track appears, labeled distinctly from analytical tracks: shows which passages are cited by character personas. Clearly labeled `CHARACTER VOICE — Phase 2`. |
| Confidence tier display for scoring matrix (Phase 2) | If a track annotation was generated by automated scoring, the confidence tier block shows: score, scoring matrix name, matrix author, matrix tier |
