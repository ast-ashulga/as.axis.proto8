---
type: methodology
status: documented
date: 2026-04-14
---

# Epistemic Decomposition

**Originator:** Developed within the Mnemosyne Engine project; informed by evidence-based scholarship traditions in archaeology, historical linguistics, and digital humanities
**Primary Domain:** Epistemology, Scholarly Transparency, Evidence Classification, Digital Humanities
**Project Role:** Methodology for breaking down content items into individual claims, assigning each a confidence tier (Documented, Reconstructed, Contested, Inspired) to maintain scholarly transparency

## Core Ideas

**Epistemic Decomposition** is a methodology for maintaining scholarly transparency in a platform that synthesizes evidence from multiple domains (archaeology, literary analysis, linguistics, comparative mythology). Rather than presenting content as monolithic "facts," the method decomposes each content item into its constituent claims and assigns each claim a confidence tier based on its evidential basis.

### Why Epistemic Decomposition Matters

For a platform dealing with mythological narratives, archaeological evidence, and scholarly interpretation, claims vary enormously in their evidential support:

- **Some claims are directly documented**: "Troy VIIa shows evidence of destruction by warfare c. 1190 BCE" (supported by archaeological excavation reports)
- **Some claims are reconstructed with scholarly consensus**: "Classical Attic Greek was pronounced with pitch accent" (supported by comparative linguistics and metrical evidence)
- **Some claims are actively contested**: "Hissarlik is Homeric Troy" (debated among archaeologists)
- **Some claims are inspired extrapolation**: "The melody of the *Epic of Gilgamesh* resembled Sumerian temple hymns" (creative reconstruction with limited evidence)

Presenting all these claims without distinguishing their confidence levels would be intellectually dishonest. Epistemic Decomposition ensures that users understand the evidential basis for each claim.

### Confidence Tiers

| Tier | Label | Definition | Example |
|---|---|---|---|
| **Tier 1** | **Documented** | Supported by primary sources, archaeological evidence, or direct scholarly documentation. Strong consensus among experts. | "Troy VIIa has a destruction layer dated to c. 1190 BCE" |
| **Tier 2** | **Reconstructed** | Inferred from partial evidence; scholarly consensus exists but direct documentation is absent. Reasonable inference from available data. | "Proto-Indo-European had laryngeal consonants" (reconstructed from descendant languages) |
| **Tier 3** | **Contested** | Actively debated among experts; multiple scholarly positions exist with reasonable evidence for each. No consensus. | "Hissarlik is Homeric Troy" (some scholars disagree) |
| **Tier 4** | **Inspired** | Creative extrapolation; limited evidential basis; speculative but informed by scholarly understanding. Must be clearly labeled as interpretive. | "The bardic melody for this *Iliad* passage followed the Dorian mode" |

### Decomposition Process

The epistemic decomposition process involves:

1. **Claim Identification**: Break down a content item (e.g., an episode description, a scholarly annotation, a reconstruction) into individual claims
2. **Evidence Assessment**: For each claim, identify the supporting evidence
3. **Confidence Assignment**: Assign the appropriate confidence tier based on evidence quality and scholarly consensus
4. **Attribution**: Attribute each claim to its source (scholar, publication, excavation report)
5. **Alternative Positions**: For Contested claims, document alternative scholarly positions

### Example: Epistemic Decomposition of a Troy Episode

**Content Item**: "Episode: The Fall of Troy"

| Claim | Confidence | Evidence | Source |
|---|---|---|---|
| "Troy VIIa was destroyed c. 1190 BCE" | Documented | Destruction layer with ash, collapsed buildings, arrowheads | Blegen (1963), Korfmann (2005) |
| "Troy VIIa was destroyed by warfare" | Contested | Evidence of destruction is consistent with warfare, but earthquake is also possible | Easton et al. (2002) debate |
| "The Greek ships beached on the Trojan plain" | Reconstructed | Ancient coastline was different; geoarchaeological evidence suggests ships could have reached the plain | Kraft et al. (2003) |
| "The *Iliad* preserves historical memory of the Trojan War" | Contested | Some scholars argue for historical core; others argue for primarily literary composition | Wood (1998) vs. minimalists |
| "The bardic melody for this passage used a descending tetrachord" | Inspired | Based on reconstruction of ancient Greek musical modes; no direct evidence for epic melody | Scholarly extrapolation |

## Primary Sources

The Epistemic Decomposition methodology draws on established practices in:

| Domain | Source | Relevance |
|---|---|---|
| **Archaeology** | Kenyon, K. (1957). *Digging Up Jericho*. | Stratigraphic evidence classification; confidence in dating |
| **Historical Linguistics** | Campbell, L. (2013). *Historical Linguistics: An Introduction* (3rd ed.). MIT Press. ISBN: 978-0262518697 | Reconstruction methodology; confidence in protolanguage forms |
| **Digital Humanities** | Schreibman, S., Siemens, R., & Unsworth, J. (Eds.). (2016). *A New Companion to Digital Humanities*. Wiley-Blackwell. | Evidence classification in digital scholarly editing |
| **Source Criticism** | Thuréau, S. (2019). "The Question of the Archive in Digital Humanities." | Distinguishing primary from derived sources |
| **Scholarly Transparency** | Borgman, C. (2015). *Big Data, Little Data, No Data: Scholarship in the Networked World*. MIT Press. | Transparency in scholarly data infrastructure |

### Mnemosyne-Specific Development

The Epistemic Decomposition methodology was developed specifically for the Mnemosyne Engine to address the unique challenge of presenting multi-domain scholarly content with appropriate transparency. The confidence tier labels (Documented, Reconstructed, Contested, Inspired) were chosen to be accessible to non-specialist users while maintaining scholarly precision.

## Digital Humanities Applications

1. **Digital Scholarly Editions**: Digital editions of ancient texts use confidence tiers to distinguish between directly attested text, reconstructed lacunae, contested readings, and editorial conjectures.

2. **Archaeological Databases**: Platforms like Open Context and Pleades use evidence classification to distinguish between directly documented sites, reconstructed locations, contested identifications, and speculative associations.

3. **Historical GIS**: Geographic Information Systems for history use confidence tiers for location data (precisely known, approximately known, contested, speculative).

4. **Linguistic Reconstruction**: Protolanguage reconstruction databases use confidence tiers for reconstructed forms (well-attested reflexes, reasonable reconstructions, contested forms, speculative reconstructions).

## Applicability to Mnemosyne Engine

### Primary Use: Scholarly Transparency Across All Content Types

Epistemic Decomposition applies to **all content types** in the Mnemosyne Engine:

#### Schema Implementation

```sql
-- Confidence tier enum
CREATE TYPE confidence_tier AS ENUM (
  'Documented',    -- Tier 1: Direct evidence, strong consensus
  'Reconstructed', -- Tier 2: Inferred from evidence, scholarly consensus
  'Contested',     -- Tier 3: Actively debated, no consensus
  'Inspired'       -- Tier 4: Creative extrapolation, limited evidence
);

-- Generic annotation table with confidence tier
CREATE TABLE episode_annotations (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  episode_id UUID REFERENCES episodes(id),
  annotation_type TEXT NOT NULL, -- 'propp', 'veselovsky', 'tmi', 'chronotope', 'evidence', etc.
  annotation_data JSONB NOT NULL, -- Type-specific annotation data
  confidence confidence_tier NOT NULL,
  evidence_summary TEXT, -- Brief description of supporting evidence
  source_attribution TEXT, -- Scholar, publication, excavation report
  alternative_positions TEXT, -- For Contested claims: what are the alternatives?
  annotator_id UUID REFERENCES scholars(id),
  created_at TIMESTAMP DEFAULT NOW()
);
```

#### Application Across Methodologies

Every methodology in the Mnemosyne Engine uses Epistemic Decomposition:

| Methodology | Documented | Reconstructed | Contested | Inspired |
|---|---|---|---|---|
| **Propp Morphology** | Propp function clearly present in episode | Propp function plausibly present but ambiguous | Scholars disagree on Propp function assignment | Creative application of Propp function outside its original scope |
| **Veselovskian Triples** | Triple clearly matches episode content | Triple plausibly matches with scholarly interpretation | Scholars disagree on triple decomposition | Creative triple assignment for non-standard narrative elements |
| **TMI Cross-Reference** | TMI code directly matches episode motif | TMI code plausibly matches with interpretation | Scholars disagree on TMI code assignment | Creative TMI code extrapolation |
| **Chronotope Type** | Episode clearly operates in this temporality | Episode plausibly operates in this temporality | Scholars disagree on chronotope classification | Creative chronotope assignment |
| **Archaeological Evidence** | Direct archaeological evidence exists | Evidence inferred from related data | Evidence interpretation is debated | Creative archaeological extrapolation |
| **Phonological Reconstruction** | Pronunciation directly attested | Pronunciation reconstructed with consensus | Pronunciation actively debated | Creative pronunciation extrapolation |
| **Audio Reconstruction** | Recording of living performance exists | Reconstruction from related living traditions | Reconstruction methodology debated | Creative audio reconstruction |
| **Comparative Parallels** | Parallel explicitly documented by scholars | Parallel reasonably inferred from structural analysis | Parallel interpretation is debated | Creative parallel identification |

### User Experience Design

- **Confidence Indicators**: Each annotation displays a visual confidence indicator (e.g., color-coded badge: green = Documented, blue = Reconstructed, yellow = Contested, purple = Inspired)
- **Evidence Panel**: Clicking on a confidence indicator opens a panel explaining the evidence basis and source attribution
- **Filtering by Confidence**: Users can filter annotations by confidence tier (e.g., "Show only Documented and Reconstructed annotations")
- **Scholarly Debate View**: For Contested claims, users can view alternative scholarly positions with their respective evidence
- **Transparency by Default**: The default view shows confidence indicators; users must actively choose to hide them

### Technical Considerations

1. **Default Confidence**: When a scholar creates an annotation without specifying confidence, the system should prompt for confidence assignment rather than defaulting to a specific tier
2. **Confidence Revision**: Scholars can revise confidence tiers as new evidence emerges; the system tracks confidence history
3. **Aggregate Confidence**: For episodes with multiple annotations of different confidence tiers, the system computes an aggregate confidence for display
4. **Cross-Methodology Consistency**: Confidence tiers must be applied consistently across all methodologies; the platform provides guidelines and training for scholars

### Critical Awareness

Epistemic Decomposition has limitations that the platform must acknowledge:

- **Confidence is Not Truth**: A "Documented" claim is not necessarily true; it means the claim is supported by direct evidence. Evidence can be reinterpreted.
- **Confidence is Dynamic**: As new evidence emerges, confidence tiers may change. The platform must support confidence revision.
- **Confidence is Domain-Specific**: What counts as "Documented" in archaeology (physical evidence) differs from what counts as "Documented" in literary analysis (textual attestation). The platform provides domain-specific guidelines.
- **Confidence is Scholarly Judgment**: Confidence assignment requires scholarly expertise; the platform should not automate confidence assignment without human oversight.

## See also

- **All Methodology Files** — Epistemic Decomposition applies to every methodology in the Mnemosyne Engine
- [Archaeological Stratigraphy](archaeological-stratigraphy-evidence-mapping.md) — Evidence classification in archaeology
- [Phonological Reconstruction](phonological-reconstruction-g2p.md) — Confidence tiering for reconstructed pronunciation
- [Comparative Typology](comparative-typology.md) — Confidence tiering for typological parallels
