# Graphics Improvements Assessment

**Prototype reviewed:** <https://ast-ashulga.github.io/as.axis.proto8/index.html>  
**Assessment date:** 2026-05-15  
**Reviewer:** GPT-5.5  
**Scope:** Whether the prototype should add art or graphics, and which visual additions would improve user impression without weakening scholarly trust.

## Executive Summary

Yes, the prototype would benefit from more visual material, but only if the additions reinforce the product's core identity: scholarly trust, textual depth, and cross-tradition exploration.

The current prototype is visually restrained, literary, and credible. That restraint is a strength. The goal should not be to add decorative art for spectacle. The goal should be to add **visual evidence, orientation, comparison, and atmosphere**.

The highest-impact additions would be:

- Artifact and manuscript glimpses with citations.
- Narrative structure maps.
- Cross-tradition resonance diagrams.
- Clearer visual treatment of depth layers.
- More expressive annotation-track graphics.

The product should avoid generic fantasy illustrations, cinematic battle art, and decorative parchment aesthetics. Those would make the app feel less trustworthy and more like conventional edutainment.

## Design Principle

The right visual direction is:

> More visual intelligence, not more decoration.

Graphics should help users answer one of these questions:

- What am I looking at?
- Where am I in the epic?
- What evidence supports this claim?
- How does this passage relate to another tradition?
- How deep into the scholarly stack am I?

If a visual element does not answer one of those questions, it should probably not be added.

## Recommended Visual Additions

## 1. Manuscript And Artifact Glimpses

This is the most trust-enhancing visual improvement. The product promises source grounding, so it should occasionally let users see the material culture behind the text.

### What To Add

- Cuneiform tablet fragment imagery for Gilgamesh.
- Greek manuscript imagery for the Iliad, especially Venetus A or comparable manuscript references.
- Small cropped details near Original or Scholaria layers.
- Artifact thumbnails on tablet/book hub pages.
- Captions with repository, shelfmark, date, and source link where available.

### Why It Helps

Artifact imagery makes the product feel grounded in real objects rather than abstract summaries. It increases the user's sense that this is a serious research-backed platform.

### How To Use It

Use artifact visuals as evidence objects, not decorative backgrounds. A good example would be:

> Nineveh copy, Library of Ashurbanipal, 7th century BCE. CDLI P003793.

Place this near Tablet XI, the Original layer, or Manuscript Status. Keep the image small, captioned, and optional to expand.

### Actionable Todo Plan

- [ ] Identify public-domain or permissively licensed artifact/manuscript images for Gilgamesh Tablet XI.
- [ ] Identify public-domain or permissively licensed manuscript imagery for Iliad Book XXIV.
- [ ] Add a small artifact thumbnail component with caption, date, source, and rights line.
- [ ] Place artifact thumbnails near Manuscript Status and Original layers.
- [ ] Add click-to-enlarge behavior for detailed inspection.
- [ ] Avoid using artifact images as low-contrast page backgrounds.
- [ ] Validate all image rights before publishing.

## 2. Tradition Identity Marks

Each tradition should feel distinct, but the identity system should remain subtle. The current color accents are useful but could be enriched with small culturally relevant marks.

### What To Add

- Mesopotamian: cuneiform wedge motif, clay ochre accent, river-line divider.
- Greek: manuscript margin motif, bronze/red accent, hexameter rhythm marks.
- Roman: inscription or scroll-inspired divider.
- Indian: palm-leaf manuscript cue.
- Central Asian: oral-performance or textile-pattern cue.

### Why It Helps

Users should feel they are entering different cultural worlds. Small identity marks can create memory and orientation without overwhelming the reading experience.

### How To Use It

Use motifs in headers, dividers, card accents, or empty states. Keep them monochrome or low-contrast. Avoid illustration-heavy tradition branding.

### Actionable Todo Plan

- [ ] Define a small visual motif for each tradition.
- [ ] Create a reusable tradition-header component.
- [ ] Add motif accents to tradition overview pages and active tradition cards.
- [ ] Keep motifs subtle enough not to compete with text.
- [ ] Test whether users can distinguish traditions more easily after the motif pass.
- [ ] Document motif usage rules in the design system.

## 3. Narrative Structure Maps

Narrative maps would make the product more immediately impressive and easier to understand.

### What To Add

Minimal diagrams showing movement through narrative space and structure:

- Gilgamesh: Uruk -> Cedar Forest -> Waters of Death -> Utnapishtim -> Uruk.
- Iliad Book XXIV: Troy -> Greek camp -> Achilles' hut -> Troy.
- Flood episode: decree -> warning -> boat -> flood -> birds -> sacrifice -> immortality.

### Why It Helps

Epic narratives are long and complex. A structure map gives users orientation before they read and helps them remember the arc afterward.

### How To Use It

These should not be fantasy maps. They should be elegant symbolic diagrams: lines, nodes, short labels, and evidence badges where relevant.

### Actionable Todo Plan

- [ ] Create a compact narrative-map component.
- [ ] Add a map to Tablet XI hub showing its three episodes.
- [ ] Add a map to Book XXIV hub showing Priam's movement from Troy to Achilles and back.
- [ ] Add a small episode-level sequence diagram to the Flood Episode.
- [ ] Make each node clickable when a corresponding episode exists.
- [ ] Mark unavailable nodes as forthcoming rather than inactive mysteries.
- [ ] Test whether users can explain the episode arc after viewing the map.

## 4. Cross-Tradition Resonance Diagrams

This is likely the best way to make the product's unique value visible.

### What To Add

For parallel pages, add side-by-side structural diagrams. For example, the flood comparison could show:

```text
Divine decision
      ↓
Chosen survivor warned
      ↓
Vessel preserves life
      ↓
Birds test dry land
      ↓
Aftermath: immortality / covenant
```

For the grief comparison, a structure could show:

```text
Companion dies
      ↓
Hero confronts mortality
      ↓
Grief changes heroic identity
      ↓
Resolution diverges
```

### Why It Helps

The concept of "structural resonance" can be abstract. A diagram makes it instantly understandable and gives the app a distinctive analytical feel.

### How To Use It

Place the diagram near the top of parallel pages before the long-form analysis. Use matched rows or aligned columns to show similarities and divergence.

### Actionable Todo Plan

- [ ] Add a "Shared Structure" section to each parallel page.
- [ ] Represent each shared narrative beat as a row.
- [ ] Add one column per tradition.
- [ ] Highlight divergence points visually.
- [ ] Connect each beat to the relevant quoted passage where possible.
- [ ] Keep the long scholarly explanation below the diagram.
- [ ] Test whether first-time users understand "resonance" faster with the diagram.

## 5. Layer Depth Visualization

The layered reading model is central to the product, but currently it is visually understated.

### What To Add

A visual depth rail or segmented control showing:

```text
Summary
Interpretation
Translation
Original
Scholarly Notes
```

The active layer should feel like a deliberate movement deeper into the material.

### Why It Helps

The current layer row is elegant but cryptic. A stronger depth visualization would make the product's central navigation model more intuitive.

### How To Use It

Use a horizontal control on desktop and a more mobile-friendly segmented selector or vertical rail on small screens. The graphic should clarify hierarchy without becoming heavy.

### Actionable Todo Plan

- [ ] Rename or supplement layer labels with plain-language names.
- [ ] Design a depth rail component with active, available, and unavailable states.
- [ ] Use distinct microcopy for each layer on hover or tap.
- [ ] Add mobile-specific layout for the depth control.
- [ ] Consider subtle visual changes as users move deeper, such as denser source styling in Original and Scholaria.
- [ ] Ensure the control remains accessible as a tablist or equivalent semantic structure.

## 6. Scholarly Annotation Track Graphics

The "Show structure" feature is promising but could feel more like an analytical engine.

### What To Add

Visual tracks for:

- Motifs.
- Narrative functions.
- Manuscript issues.
- Cross-tradition links.
- Scholarly debate.

Each track could display blocks aligned to parts of the episode.

### Why It Helps

This would make the app feel more computational and scholarly at the same time. Users would see that the text is not only readable but analyzable.

### How To Use It

Keep tracks optional. They should expand beneath the main text or appear in an analysis mode, not interrupt the default reading experience.

### Actionable Todo Plan

- [ ] Redesign `Show structure` as an "Analysis tracks" section.
- [ ] Group annotations by framework or evidence type.
- [ ] Add visual lanes with consistent color and badge treatment.
- [ ] Align annotation blocks to relevant narrative beats where possible.
- [ ] Add short explanations for Propp, Campbell, and Thompson Motif Index.
- [ ] Allow users to toggle tracks on and off.
- [ ] Test whether the feature feels useful rather than decorative or overwhelming.

## What To Avoid

The product should avoid art that makes the experience feel less credible.

### Avoid

- AI fantasy illustrations of Gilgamesh, Achilles, gods, monsters, or battles.
- Decorative hero portraits.
- Cinematic war scenes.
- Generic parchment textures.
- Heavy background imagery behind long-form reading text.
- Stock museum imagery without precise caption and rights information.
- Overly colorful cultural theming that turns traditions into stereotypes.

### Why To Avoid It

The prototype's credibility comes from restraint and evidence. Generic epic art would compete with the text, reduce scholarly seriousness, and make the product feel closer to entertainment media than a trusted humanities platform.

## Priority Recommendation

If only three visual improvements can be built in the next pass, prioritize these:

1. **Artifact thumbnails with citations.**  
   This directly reinforces trust and provenance.

2. **Narrative structure maps.**  
   This improves orientation and makes the app more memorable.

3. **Cross-tradition resonance diagrams.**  
   This makes the product's unique comparative value immediately visible.

## Final Assessment

The prototype should add graphics, but they should be scholarly, functional, and restrained. The goal is not to make the app more illustrated. The goal is to make it more legible, more memorable, and more materially grounded.

The best visual additions would help users feel that they are moving through real textual artifacts, real scholarly debates, and real narrative structures. Done well, graphics can increase user impression significantly without weakening the refined, trustworthy tone that already makes the prototype distinctive.
