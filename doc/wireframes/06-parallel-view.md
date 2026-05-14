---
type: wireframe
screen: Parallel View
route: /{locale}/gilgamesh/parallels/flood
status: draft
date: 2026-05-13
primary-journey: Explorer (A), Resonance Seeker (C); Scholar (B) secondary
---

# Parallel View

**Route**: `/{locale}/gilgamesh/parallels/flood`  
**NAS context**: parallel record linking `nms://gilgamesh/tablet-xi/flood` ↔ `nms://genesis/flood-narrative`  
**Phase 1 state**: Gilgamesh panel is fully onboarded; Genesis/Biblical panel has translated passage only (no Fragment View deep-link)

---

## Purpose

The Parallel View places two epic fragments side by side to illuminate a structural resonance between traditions. Its job is not to say "these are the same story" — it is to show precisely what resonates, why it resonates, where the traditions diverge, and what that divergence reveals about each tradition's distinct concerns.

This screen is a destination, not a pass-through. A user who arrives here from the Parallel strip on the Fragment View should be able to read both passages and the scholarly note without having read either tradition's full content first. Each panel is self-sufficient.

The scholarly note is required editorial content for every confirmed Parallel. It has four required sections: what resonates / why it resonates / where it diverges / what the divergence reveals. The divergence section is not optional.

**Phase 1 asymmetry**: only Gilgamesh has a full Fragment View with layers and Track View. The Genesis/Biblical panel contains the translated passage and attribution, but no "Open full Fragment View" link — because no full Fragment View exists for that tradition yet. This asymmetry is honest; it is not papered over.

---

## ASCII Wireframe — Desktop

```
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│  MNEMOSYNE ENGINE                    Gilgamesh   Parallels          [EN]  /  [RU]        │
│  ──────────────────────────────────────────────────────────────────────────────────────  │
│                                     ← Back to Gilgamesh                                   │
│                                                                                           │
│  ┌─ PARALLEL HEADER ──────────────────────────────────────────────────────────────────┐  │
│  │                                                                                    │  │
│  │  Structural resonance: The Great Flood                                             │  │
│  │  Type: Shared human condition — not a shared source                               │  │
│  │  Confidence: [● DOCUMENTED]  ·  Attributed: Dr. A. Kovacs                         │  │
│  │                                                                                    │  │
│  └────────────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                           │
│  ┌─ GILGAMESH PANEL ────────────────────────┐  ┌─ GENESIS PANEL ───────────────────────┐ │
│  │                                          │  │                                       │ │
│  │  ─── MESOPOTAMIAN ───────────────────── │  │  ─── HEBREW / BIBLICAL ─────────────  │ │
│  │                                          │  │                                       │ │
│  │  Epic of Gilgamesh                       │  │  Genesis 6–9                          │ │
│  │  Tablet XI — The Flood                   │  │  The Flood Narrative                  │ │
│  │  c. 1200 BCE (Standard Babylonian)       │  │  (King James Version, 1611)           │ │
│  │                                          │  │                                       │ │
│  │  [● DOCUMENTED]                          │  │  [● DOCUMENTED]                       │ │
│  │  Translation: R. Campbell Thompson       │  │  Translation: KJV (1611)              │ │
│  │  (1930) · Public domain                  │  │  Public domain                        │ │
│  │  ──────────────────────────────────────  │  │  ───────────────────────────────────  │ │
│  │                                          │  │                                       │ │
│  │  Utnapishtim said:                       │  │  And God saw that the wickedness      │ │
│  │  "The great gods decided to make         │  │  of man was great in the earth,       │ │
│  │   a flood. Anu, their father, swore;     │  │  and that every imagination of the    │ │
│  │   Enlil, their counselor, swore;         │  │  thoughts of his heart was only       │ │
│  │   their military leader Ninurta          │  │  evil continually.                    │ │
│  │   swore; their canal-officer Ennugi      │  │                                       │ │
│  │   swore. But Ea took an oath also        │  │  And it repented the LORD that he     │ │
│  │   with them. He repeated their           │  │  had made man on the earth, and it    │ │
│  │   secret to the reed house:              │  │  grieved him at his heart.            │ │
│  │   'O reed house, reed house!             │  │                                       │ │
│  │    O wall, wall!                         │  │  And Noah did according unto all      │ │
│  │    Hear, O reed house!                   │  │  that the LORD commanded him.         │ │
│  │    Understand, O wall!'"                 │  │                                       │ │
│  │                                          │  │  — Genesis 6:5–6; 7:5 (KJV)          │ │
│  │  — Thompson (1930), Tablet XI, 9–20     │  │                                       │ │
│  │                                          │  │  Phase 1: Full fragment view for      │ │
│  │  [Open full Fragment View →]             │  │  this tradition is not yet available. │ │
│  │                                          │  │                                       │ │
│  └──────────────────────────────────────────┘  └───────────────────────────────────────┘ │
│                                                                                           │
│  ┌─ SCHOLARLY NOTE ────────────────────────────────────────────────────────────────────┐  │
│  │                                                                                    │  │
│  │  What resonates                                                                    │  │
│  │  Both narratives depict a deity (or divine council) deciding to destroy humanity  │  │
│  │  with a flood because of human wrongdoing. In both, a single righteous man is      │  │
│  │  warned and instructed to build a boat to preserve life. In both, birds are sent   │  │
│  │  to determine whether the waters have receded. The structural sequence — divine    │  │
│  │  judgment / chosen survivor / vessel / birds / aftermath — is shared with          │  │
│  │  remarkable precision across traditions separated by culture and century.          │  │
│  │                                                                                    │  │
│  │  Why it resonates                                                                  │  │
│  │  The flood functions as a threshold in both traditions: what exists before it      │  │
│  │  and what exists after are fundamentally different. In Gilgamesh, the flood        │  │
│  │  is the mechanism by which a human acquires exceptional standing — Utnapishtim's   │  │
│  │  immortality is a direct consequence of his survival. In Genesis, the flood        │  │
│  │  establishes the foundational covenant between the divine and humanity. The        │  │
│  │  shared structural function — flood as world-reordering threshold — is more        │  │
│  │  significant than the surface similarity of boats and birds.                       │  │
│  │                                                                                    │  │
│  │  Where it diverges                                                                 │  │
│  │  The most significant divergence is in what the survivor receives. Utnapishtim     │  │
│  │  is granted literal immortality — a singular exception the gods declare will       │  │
│  │  not be repeated. This immortality becomes the central rebuke of the Gilgamesh     │  │
│  │  epic: Gilgamesh cannot have what Utnapishtim has. In Genesis, Noah receives a     │  │
│  │  covenant and a promise — the flood will not recur; the rainbow is its sign.       │  │
│  │  Survival leads outward (a renewed world, a new beginning) rather than inward      │  │
│  │  (an exceptional individual forever sealed from death). The same structural        │  │
│  │  sequence produces opposite resolutions.                                           │  │
│  │                                                                                    │  │
│  │  What the divergence reveals                                                       │  │
│  │  The Gilgamesh version uses the flood to permanently close the gate on             │  │
│  │  immortality — Utnapishtim's survival proves the exception, not the rule.          │  │
│  │  The Genesis version uses the flood to open a covenantal relationship between      │  │
│  │  the divine and humanity — it is a beginning, not a terminus. Both narratives      │  │
│  │  use the same architecture to answer different theological questions: what         │  │
│  │  separates humans from the divine (Gilgamesh), and what binds the divine to        │  │
│  │  humanity (Genesis). Understanding the shared structure makes the divergence       │  │
│  │  more meaningful, not less.                                                        │  │
│  │                                                                                    │  │
│  │  Scholarship cited                                                                 │  │
│  │  · Andrew George, "The Babylonian Gilgamesh Epic" (OUP, 2003), vol. I, pp. 70–99 │  │
│  │  · E.A. Speiser, "Genesis," Anchor Bible Commentary (1964), pp. 54–69             │  │
│  │  · Jeffrey Tigay, "The Evolution of the Gilgamesh Epic" (1982), pp. 214–240       │  │
│  │  · Alexander Heidel, "The Gilgamesh Epic and Old Testament Parallels" (1949)      │  │
│  │                                                                                    │  │
│  └────────────────────────────────────────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

---

## ASCII Wireframe — Mobile

On mobile, panels stack vertically. Gilgamesh panel first, then Genesis panel, then Scholarly Note.

```
┌────────────────────────────────────┐
│  MNEMOSYNE ENGINE       [EN]/[RU]  │
│  ← Back to Gilgamesh              │
│  ────────────────────────────────  │
│                                    │
│  STRUCTURAL RESONANCE              │
│  The Great Flood                   │
│  Type: Shared human condition      │
│  [● DOCUMENTED] · Dr. A. Kovacs   │
│                                    │
│  ────────────────────────────────  │
│  ─ MESOPOTAMIAN ─────────────────  │
│                                    │
│  Epic of Gilgamesh                 │
│  Tablet XI — The Flood             │
│  c. 1200 BCE                       │
│  [● DOCUMENTED] · Thompson (1930)  │
│  ────────────────────────────────  │
│                                    │
│  "The great gods decided to make   │
│   a flood..."                      │
│                                    │
│  [Open full Fragment View →]       │
│                                    │
│  ────────────────────────────────  │
│  ─ HEBREW / BIBLICAL ─────────────  │
│                                    │
│  Genesis 6–9                       │
│  The Flood Narrative               │
│  King James Version (1611)         │
│  [● DOCUMENTED] · KJV              │
│  ────────────────────────────────  │
│                                    │
│  "And God saw that the wickedness  │
│   of man was great in the earth..."│
│                                    │
│  Phase 1: Full fragment view for   │
│  this tradition is not available.  │
│                                    │
│  ────────────────────────────────  │
│  SCHOLARLY NOTE                    │
│  ────────────────────────────────  │
│                                    │
│  What resonates                    │
│  Both depict divine judgment by    │
│  flood, a chosen survivor warned   │
│  to build a vessel, and birds      │
│  sent to find land.                │
│                                    │
│  Why it resonates                  │
│  The flood is a threshold: in both │
│  traditions what exists after is   │
│  fundamentally different from what │
│  came before.                      │
│                                    │
│  Where it diverges                 │
│  Utnapishtim receives immortality  │
│  — a singular sealed exception.    │
│  Noah receives a covenant — a new  │
│  beginning opened to all humanity. │
│                                    │
│  What the divergence reveals       │
│  Same architecture; different      │
│  theological questions answered.   │
│                                    │
│  Scholarship cited                 │
│  · George (2003)                   │
│  · Speiser (1964)                  │
│  · Tigay (1982)                    │
│  · Heidel (1949)                   │
└────────────────────────────────────┘
```

---

## Component Inventory

| Component | Token Reference | Notes |
|---|---|---|
| "Back to Gilgamesh" | `--type-caption`, `--color-link` | Not a breadcrumb; a contextual back link |
| Parallel header | `--color-bg-surface`, border `--color-border-subtle` | Contains: title, type, confidence badge, attribution |
| Parallel type label | `--type-caption` serif | Plain language: "Shared human condition — not a shared source" |
| Tradition panel | Each panel: half-width desktop, full-width mobile | Gilgamesh: `--color-trad-mesopotamian-bg` tint; Genesis: `--color-trad-biblical-bg` tint (new token, distinct from Mesopotamian) |
| Tradition label | `--type-meta-label` mono, tradition color | "MESOPOTAMIAN", "HEBREW / BIBLICAL" |
| Tradition name | `--type-heading-3` serif | "Epic of Gilgamesh", "Genesis 6–9" |
| Passage date + version | `--type-meta` mono, `--color-text-muted` | |
| Translated passage | `--type-body` serif | No AI disclosure — this is attested translated content |
| Passage attribution | `--type-meta` mono | "— Thompson (1930), Tablet XI, 9–20" or "— Genesis 6:5–6; 7:5 (KJV)" |
| "Open full Fragment View" link | `--type-caption`, `--color-link` | Gilgamesh panel only |
| Phase 1 disclosure | `--type-caption`, `--color-text-secondary`, italic | Genesis panel only; honest absence |
| Scholarly note container | `--color-bg-surface`, `--space-6` padding | Spans full width, below panels |
| Note section labels | `--type-heading-3` serif | "What resonates", "Why it resonates", "Where it diverges", "What the divergence reveals" |
| Note body text | `--type-body` serif | Required content — all four sections |
| Scholarship cited | `--type-caption`, `--color-text-secondary` | Bullet list of citations |

**Tradition color token**: The Genesis / Biblical tradition uses `--color-trad-biblical-bg` (a new token distinct from `--color-trad-mesopotamian`). The visual differentiation between panels communicates cross-tradition contrast — both panels using the same color would defeat the purpose of the side-by-side layout. The specific hue for the Biblical tradition token is specified in `00-styling.md` when the tradition is onboarded.

---

## The Phase 1 Asymmetry

The Genesis/Biblical panel contains:
- Tradition identity (name, culture, period)
- Translated passage (KJV) with attribution and confidence tier
- NO "Open full Fragment View" link
- A plain disclosure: "Phase 1: Full fragment view for this tradition is not yet available."

This is not a disabled button. It is not a placeholder. It is an honest statement of the current state. The parallel's scholarly value — the note, the passages, the resonance/divergence framing — is fully present. The asymmetry is disclosed, not hidden.

When Phase 2 onboards the Genesis tradition as a full Fragment View, the disclosure is replaced with the link automatically. The design does not need to change.

---

## States and Variants

### Parallel Header: Type Rendering

The `parallel_type` field from the database is rendered in plain language:

| Database value | Display text |
|---|---|
| `psychological_typological` | "Shared human condition — not a shared source" |
| `literary_typological` | "Shared narrative shape — possibly through contact" |
| `socio_typological` | "Shared social pattern across independent traditions" |

### Scholarly Note: Required Sections

All four sections are required editorial content. If a section is missing from the database, the page should not render a partial scholarly note — it should display an editorial gap marker visible only to logged-in scholars (never to public users):

```
[Editorial note: "Where it diverges" section pending review — Dr. Kovacs]
```

Public users see only complete scholarly notes.

---

## Interaction Notes

1. "Back to Gilgamesh" links to `/{locale}/gilgamesh/tablet-xi/flood` (the Fragment View for the Gilgamesh episode in this parallel).
2. "Open full Fragment View →" links to `/{locale}/gilgamesh/tablet-xi/flood` — the Gilgamesh Fragment View.
3. Each panel's translated passage is read-only — no layer switching on this screen. The Parallel View shows Layer 2 (Translated) content only.
4. There is no "Track View" on the Parallel View — structural annotations belong on the Fragment View.
5. Tradition panel heights are normalized to equal height (the taller panel sets the height). This communicates equal visual weight between traditions. CSS: `align-items: stretch` on the panel row.
6. On desktop, panels are side-by-side (50% width each). On mobile, Gilgamesh panel renders first.
7. Scholarly note spans full width below both panels — it is a bridge, not a frame above them.
8. Locale switcher: switches interface language and regenerates the scholarly note in the new locale (both EN and RU scholarly notes are separately authored/reviewed in Phase 1).

---

## Accessibility

| Element | Requirement |
|---|---|
| Each tradition panel | `role="region"`, `aria-label="[Tradition Name] panel"` |
| Scholarly note | `role="complementary"`, `aria-label="Scholarly note"` |
| Parallel type label | Plain language, not technical code |
| Passage text | `lang="en"` (or appropriate language attribute) |
| "Open full Fragment View" link | Descriptive label: "Open full Gilgamesh Fragment View for Tablet XI flood episode" |
| Phase 1 disclosure | `role="note"` |
| Panel on mobile | After title: a "Skip to next panel" link for keyboard users |

---

## Locale Considerations

- The Scholarly Note is authored in EN. The RU version is translated and reviewed by a RU-capable Cultural Expert or designated RU reviewer before publication. The RU scholarly note is an independent reviewed text, not a machine translation.
- The translated passages (Layer 2 content) are EN only in Phase 1. Locale fallback applies: if RU locale is active and EN-only text is shown, the panel shows: "[This translation is shown in English — Russian version in preparation]".
- Tradition labels ("MESOPOTAMIAN", "HEBREW / BIBLICAL") are localized in the message catalog.
- Parallel type labels (plain-language parallel type) are localized.
- Scholarship citations are shown in their original publication language regardless of interface locale.

---

## Phase 2 Scope Hinges

| Trigger | Change on this screen |
|---|---|
| Genesis tradition fully onboarded | Phase 1 disclosure in Genesis panel is replaced with "Open full Fragment View →" link |
| More than 2 traditions in a parallel | Parallel View expands to 3+ panels (responsive multi-column) — or renders as a scrollable panel row on mobile |
| Similarity score (Phase 2 auto-detection) | Score shown in Parallel Header: score value + scoring matrix name + framework + author + matrix confidence tier |
| Additional flood parallels (Atrahasis, Ovid) | Parallel View becomes a tab-based view with one tab per tradition pair, or separate Parallel View URLs per pairing |
