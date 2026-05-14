---
type: wireframe
screen: System States and Edge Cases
route: all routes
status: draft
date: 2026-05-13
applies-to: all screens
---

# System States and Edge Cases

This document specifies how the system behaves in edge cases, error conditions, and content-availability variations. It is not a visual design document in the usual sense — it specifies absence, failure, and partial states that every other screen document assumes are handled here.

---

## 1. Parallel Strip: No Parallel

When a Fragment has no confirmed parallel, the Parallel strip is absent. Not a placeholder. Not a "No parallels found" message. Not a "More coming soon" teaser.

**Correct behavior:**
```
[Content area ends]

[Episode navigation immediately below]
```

**Incorrect (do not do this):**
```
[Content area ends]

┌─────────────────────────────────────────────────────┐
│  No cross-tradition parallels have been found       │
│  for this episode yet.                              │
└─────────────────────────────────────────────────────┘

[Episode navigation]
```

The honest absence is not a design problem. A fragment that genuinely has no confirmed parallel does not need to apologize for it or hint that one is coming. The platform's promise is confirmed parallels, not promised parallels.

**Implementation note**: The Fragment View queries for confirmed parallels for the current NAS address. If the result set is empty, the Parallel strip component does not render. The Parallel strip is conditional, not always-present.

---

## 2. 404 — Unknown NAS Address

If a user navigates to a URL that contains a NAS address the system cannot resolve (e.g., `/en/gilgamesh/tablet-xi/does-not-exist`), the response is:

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  MNEMOSYNE ENGINE                    Gilgamesh   Parallels          [EN]  /  [RU]        │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                                                                           │
│  This address could not be found.                                                         │
│                                                                                           │
│  nms://gilgamesh/tablet-xi/does-not-exist                                                │
│                                                                                           │
│  The NAS address in this URL does not correspond to a known Fragment, episode,           │
│  or tradition in the current corpus. This may be because:                                │
│                                                                                           │
│  · The address was typed or copied incorrectly                                            │
│  · This content is in preparation and has not yet been published                         │
│  · The address refers to a tradition or tablet not yet in Phase 1 scope                  │
│                                                                                           │
│  Return to the Gilgamesh tradition →                                                      │
│  Return to home →                                                                         │
│                                                                                           │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

| Element | Token | Notes |
|---|---|---|
| Heading | `--type-heading-1` serif | "This address could not be found." |
| NAS address shown | `--type-meta` mono | The address the user tried to reach |
| Explanation | `--type-body` serif | 3 bullet reasons — plain language |
| Recovery links | `--type-body`, `--color-link` | Two links: to tradition + to home |

**HTTP status**: 404.  
**Navigation bar**: present and functional.  
**No suggestion engine**: the 404 page does not suggest "similar fragments" or "you might have meant...". This platform has an epistemic commitment to precision; speculative suggestions are out of character.

---

## 3. Locale Fallback — Translated Layer Unavailable in Target Locale

In Phase 1, Layer 2 (Translated) passages exist only in English. When a user switches to Russian locale and the Translated layer is active:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                        │
│  THE FLOOD EPISODE                                      [● DOCUMENTED]                │
│  Tablet XI of the Epic of Gilgamesh                                                   │
│                                                                                       │
│  ┌──────────────────────────────────────────────────────────────────────────────────┐ │
│  │  This translation is not yet available in Russian. Showing English translation.  │ │
│  │  A Russian translation of Tablet XI is in preparation.                           │ │
│  └──────────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                       │
│  [English translation content renders here, unchanged]                                │
│                                                                                       │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

| Element | Token | Notes |
|---|---|---|
| Fallback notice | `--color-bg-inset`, `--type-caption`, `--color-text-secondary` | Inline, not a banner or modal |
| Content below | Full English translation renders as normal | The fallback notice explains the state; it does not hide content |

This fallback also applies to Layer 4 (Scholaria) if the target locale lacks a scholarly note in that language.

**RU Layer 0 (Surface)**: RU Surface summaries are generated and reviewed in Phase 1. If a specific Fragment's RU summary has not yet been reviewed, it is in `candidate` status and is not published. The state the user sees:

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│  The Russian summary for this episode is under review.                               │
│  Showing English summary.                                                             │
└──────────────────────────────────────────────────────────────────────────────────────┘
[English summary renders]
```

---

## 4. Candidate-Status Content Gate

Candidate-status content — computationally-detected annotations, AI-generated summaries pending review, unconfirmed parallels — must never be visible to public users.

**The system correctly handles this at multiple layers (per PRD §5.3):**
1. DB constraints: `candidate` status is the default for computational outputs
2. ORM: `candidate_repository` exposes only `confirmed`-status to read queries
3. API resolver: tradition scope check; cross-tradition claims without confirmed parallel return structured error

**The UI implication**: public users will never see a "pending review" state, a candidate badge, or a partial result. From the user's perspective, content either exists (confirmed) or is absent. There is no "being processed" spinner for content.

**What this means for wireframes**: the Fragment View, Parallel View, and Parallels Index only show confirmed content. The Track View only shows confirmed annotations. The Parallel strip only shows confirmed parallels. The absence of content is handled by the absent-strip rule (§1 above) and the 404 rule (§2 above), not by a candidate-status disclosure.

**The scholar review interface** (see `10-scholar-review-interface.md`) is the only place where candidate-status content is visible.

---

## 5. Locale Switch During Parallel View

When the user switches locale on the Parallel View:
- Both tradition panels switch language (EN → RU for panel content if available)
- The scholarly note switches language (EN → RU if RU scholarly note is confirmed)
- If either panel's content is unavailable in RU: the locale fallback state (§3) applies to that panel
- Both panels can independently be in fallback state

```
┌─ GILGAMESH PANEL ──────────────────────────┐  ┌─ ATRAHASIS PANEL ─────────────────────┐
│  [Translation not available in Russian.    │  │  [Translation not available in Russian.│
│   Showing English translation.]            │  │   Showing English translation.]        │
│  [Thompson 1930 EN text]                   │  │  [Lambert & Millard 1969 EN text]      │
└────────────────────────────────────────────┘  └───────────────────────────────────────┘
```

---

## 6. Loading States

Fragment content loads from the API. The loading state is handled with text-line skeletons — not a spinner, not a logo animation.

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                        │
│  THE FLOOD EPISODE                                                                     │
│  nms://gilgamesh/tablet-xi/flood                     [copy]                           │
│                                                                                        │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  ← skeleton line (1.7× line-height)
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒           ← shorter line
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
│                                                                                        │
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
│  ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒
│  ...                                                                                   │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

Skeleton lines:
- Color: `--color-bg-inset` (slightly darker than surface)
- No animation (no shimmer/pulse in Phase 1 — adds visual noise without meaningful feedback)
- Line heights match the expected content line heights for each layer

Parallel strip: does not render until parallel data resolves. If parallel data loads after content data, the strip appears below the content without layout shift (reserved height approach or `min-height` on the strip container).

---

## 7. API Error State

If the API returns an error for Fragment content:

```
┌────────────────────────────────────────────────────────────────────────────────────────┐
│                                                                                        │
│  THE FLOOD EPISODE                                                                     │
│  nms://gilgamesh/tablet-xi/flood                                                       │
│                                                                                        │
│  This content could not be loaded.                                                     │
│  Try refreshing the page, or return to the Gilgamesh tradition.                       │
│                                                                                        │
│  Return to Gilgamesh →                                                                  │
│                                                                                        │
└────────────────────────────────────────────────────────────────────────────────────────┘
```

The API error state is minimal. No error code, no technical details, no stack trace. One sentence. One link. The navigation bar remains functional.

---

## 8. Deep Link to Unavailable Layer

If a user arrives at `?layer=scholaria` for a Fragment that only has Surface and Translated content (Scholaria not yet annotated):

```
┌──────────────────────────────────────────────────────────────────────────────────────┐
│  The scholarly apparatus for this episode is not yet available.                      │
│  Showing translated layer.                                                            │
└──────────────────────────────────────────────────────────────────────────────────────┘
[Translated layer content renders]
Layer indicator: Scholaria marker is present but in a "unavailable" state — different
from inactive (clickable) and active (selected). Visual: lighter weight text, 
no hover state. aria-disabled="true".
```

This prevents a broken deep link from returning a 404 — the URL is valid, but the specific layer is not yet published. The system falls back gracefully.

---

## 9. Scholar Review Interface: Unauthorized Access Attempt

The Scholar Review Interface (`/scholar`) is an internal tool. If an unauthenticated user navigates to it:

```
HTTP 401 — Not authorized.

This is an internal tool for Mnemosyne Engine scholars.
If you believe you should have access, contact the editorial team.

Return to Mnemosyne Engine →
```

No login form on this page (login is handled via a separate auth flow). No redirect loop. One sentence and one link.

---

## 10. Content with Multiple Confidence Tiers (Scholaria Layer)

The Scholaria layer may contain multiple sections with different confidence tiers (e.g., DOCUMENTED for manuscript status, CONTESTED for the interpolation debate). The system handles multiple badges in the content area:

- Each section in the Scholaria layer carries its own tier badge inline.
- The page-level tier badge in the episode header shows the lowest (most uncertain) tier present in the layer, with a tooltip: "This layer contains content at multiple confidence levels; the badge shown is the most uncertain."

```
THE FLOOD EPISODE — Scholarly Apparatus            [◈ CONTESTED / ● DOCUMENTED]
                                                     ↑
                                          most uncertain tier shown
```

This is honest: a page where one section is DOCUMENTED and another is CONTESTED should not present as fully DOCUMENTED.
