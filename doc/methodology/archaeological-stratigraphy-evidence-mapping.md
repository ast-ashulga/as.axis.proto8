---
type: methodology
status: documented
date: 2026-04-14
---

# Archaeological Stratigraphy & Evidence Mapping

**Originator:** Archaeological methodology (Heinrich Schliemann, Arthur Evans, Kathleen Kenyon); developed through stratigraphic excavation methods and archaeological evidence mapping traditions
**Primary Domain:** Archaeology, Material Culture Studies, Historical Geography, Evidence-Based Humanities
**Project Role:** "Evidence Layer" (formerly Schliemann Layer) — grounds mythological narratives in physical history through site data, excavations, and material evidence (e.g., Troy VIIa, Hissarlik mound)

## Core Ideas

**Archaeological Stratigraphy & Evidence Mapping** provides the methodological foundation for the Mnemosyne Engine's **Evidence Layer**, which connects mythological narratives to their physical, archaeological contexts. This layer grounds epic stories in the material world, demonstrating where and when the places, objects, and events described in myth actually existed.

### Core Principles

1. **Stratigraphic Superposition**: In archaeological excavation, deeper layers (strata) are older than shallower layers. This principle enables archaeologists to establish relative chronologies for sites mentioned in mythological narratives.

2. **Material Evidence**: Physical artifacts (pottery, architecture, weapons, inscriptions) provide independent evidence for events and places described in myth. The correspondence between myth and material culture is not one-to-one but is analytically productive.

3. **Site Identification**: Archaeologists identify mythological sites through a combination of textual evidence, geographical analysis, and excavation. The identification of Hissarlik (modern Turkey) as ancient Troy by Heinrich Schliemann (1870s) is the paradigmatic example.

4. **Multi-Layered History**: Mythological sites often have multiple occupation layers, each corresponding to a different historical period. Troy, for example, has at least nine major layers (Troy I–IX), with **Troy VIIa** (c. 1300–1190 BCE) being the most likely candidate for the city described in the *Iliad*.

5. **Evidence Mapping**: Archaeological evidence is mapped to mythological narratives through:
   - **Geographic correlation**: Does the site location match the textual description?
   - **Temporal correlation**: Does the site's date match the narrative's putative timeframe?
   - **Material correlation**: Do artifacts from the site match objects described in the narrative?
   - **Event correlation**: Does the archaeological record show evidence of events described in the narrative (e.g., destruction layers corresponding to the Trojan War)?

### The Schliemann Paradigm: Troy VIIa

Heinrich Schliemann's excavation of Hissarlik (1870s) identified the site as ancient Troy. Subsequent excavations (by Dörpfeld, Blegen, Korfmann, and others) revealed multiple occupation layers:

| Layer | Date | Description | Relevance to *Iliad* |
|---|---|---|---|
| **Troy I** | c. 3000–2600 BCE | Early Bronze Age settlement | Pre-dates Homeric Troy |
| **Troy II** | c. 2600–2300 BCE | Rich Early Bronze Age city (Schliemann's "Treasure of Priam") | Schliemann mistakenly identified this as Homeric Troy |
| **Troy VI** | c. 1700–1300 BCE | Large Late Bronze Age city, destroyed by earthquake | Possible Homeric Troy, but destruction mechanism unclear |
| **Troy VIIa** | c. 1300–1190 BCE | City showing evidence of siege and destruction by warfare | **Most likely candidate for Homeric Troy** |
| **Troy VIIb** | c. 1190–950 BCE | Post-destruction reoccupation | Post-dates Trojan War |
| **Troy VIII–IX** | c. 700 BCE–500 CE | Greek and Roman period (Ilium/Novum Ilium) | Later commemorative sites |

### Evidence Types

| Evidence Type | Description | Example |
|---|---|---|
| **Architectural Remains** | Walls, gates, buildings, fortifications | Troy VI/VIIa fortification walls matching Homeric description |
| **Destruction Layers** | Ash, collapsed buildings, weapons in situ | Troy VIIa destruction layer (c. 1190 BCE) |
| **Artifacts** | Pottery, weapons, jewelry, tools | Mycenaean pottery at Troy; "Treasure of Priam" |
| **Inscriptions** | Written records from the site | Hittite documents referencing "Wilusa" (possibly Troy) |
| **Bioarchaeological Evidence** | Human remains, animal bones, plant remains | Evidence of siege warfare (trauma on skeletons) |
| **Geoarchaeological Evidence** | Sediment cores, paleoenvironmental data | Ancient coastline changes (Greek ships could not reach the sea at Troy today) |
| **Iconographic Evidence** | Art depicting mythological scenes | Greek vase paintings of Trojan War scenes |

## Primary Sources

| Citation | Details |
|---|---|
| Schliemann, H. (1880). *Ilios: The City and Country of the Trojans*. John Murray. | Schliemann's account of the Troy excavations; foundational but methodologically flawed. |
| Blegen, C. W. (1963). *Troy and the Trojans*. Thames & Hudson. | Definitive archaeological synthesis of Troy excavations through 1950s. |
| Korfmann, M. (Ed.). (2005). *Troia: Dream and Reality*. Theiss Verlag. | Modern reassessment of Troy archaeology; debates over Troy VIIa as Homeric Troy. |
| Wood, M. (1985/1998). *In Search of the Trojan War*. BBC Books. ISBN: 978-0520215993 | Accessible synthesis of archaeological evidence for the Trojan War historicity. |
| Easton, D. F., et al. (2002). "Was the Trojan War Fought at Troy?" *American Journal of Archaeology*, 106(1), 39–61. | Scholarly debate over whether Hissarlik is Homeric Troy. |
| Kenyon, K. (1957). *Digging Up Jericho*. Ernest Benn. | Paradigmatic stratigraphic excavation methodology. |

## Digital Humanities Applications

1. **Archaeological GIS Platforms**: Geographic Information Systems map archaeological sites to mythological narratives, enabling spatial analysis of where myths were set vs. where material evidence exists.

2. **3D Site Reconstructions**: Digital 3D reconstructions of archaeological sites (e.g., Troy, Mycenae, Knossos) enable users to explore the physical settings of mythological narratives.

3. **Stratigraphic Databases**: Digital databases (e.g., Open Context, tDAR) store and provide access to stratigraphic data from archaeological excavations, enabling cross-site comparison.

4. **Pleades Gazetteer**: The Pleades project provides a digital gazetteer of ancient places, linking mythological place names to archaeological sites with geographic coordinates and evidence.

5. **Virtual Archaeology**: VR/AR platforms enable users to explore reconstructed archaeological sites in immersive environments.

## Applicability to Mnemosyne Engine

### Primary Use: Evidence Layer for Mythological Narratives

The Evidence Layer grounds mythological narratives in **physical, archaeological reality**:

#### Evidence Layer Schema

```sql
-- Archaeological site
CREATE TABLE archaeological_sites (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL, -- e.g., "Hissarlik (Troy)"
  modern_location TEXT, -- e.g., "Çanakkale Province, Turkey"
  latitude FLOAT,
  longitude FLOAT,
  occupation_periods TEXT[], -- e.g., ['Troy I', 'Troy II', ..., 'Troy IX']
  key_evidence TEXT, -- Summary of key archaeological evidence
  confidence TEXT CHECK (confidence IN ('Documented', 'Reconstructed', 'Contested', 'Inspired')),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Evidence layer: linking episodes to archaeological evidence
CREATE TABLE evidence_layer (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  episode_id UUID REFERENCES episodes(id),
  site_id UUID REFERENCES archaeological_sites(id),
  evidence_type TEXT CHECK (evidence_type IN (
    'architectural', 'destruction_layer', 'artifact', 'inscription',
    'bioarchaeological', 'geoarchaeological', 'iconographic'
  )),
  evidence_description TEXT,
  temporal_correlation TEXT, -- How the evidence dates relate to the narrative timeframe
  scholarly_interpretation TEXT,
  confidence TEXT CHECK (confidence IN ('Documented', 'Reconstructed', 'Contested', 'Inspired')),
  annotator_id UUID REFERENCES scholars(id),
  created_at TIMESTAMP DEFAULT NOW()
);

-- Spatial index for geographic queries
CREATE INDEX idx_sites_location ON archaeological_sites USING GIST (
  ll_to_earth(latitude, longitude)
);
```

#### Evidence Mapping for Troy

| Episode (Iliad) | Archaeological Evidence | Evidence Type | Confidence |
|---|---|---|---|
| "The walls of Troy" | Troy VI/VIIa fortification walls (5m thick, with towers) | Architectural | Documented |
| "The Scaean Gate" | South gate complex at Troy VI/VIIa | Architectural | Documented |
| "The fall of Troy" | Troy VIIa destruction layer (ash, collapsed buildings, arrowheads) | Destruction Layer | Documented |
| "Priam's treasure" | "Treasure of Priam" (Early Bronze Age jewelry, gold) — actually from Troy II, not VIIa | Artifact | Contested (misattributed by Schliemann) |
| "The Greek ships beached" | Ancient coastline (now silted up; Greek ships could have reached the plain) | Geoarchaeological | Reconstructed |
| "Hector's body ransomed" | Hittite documents referencing "Wilusa" (possibly Troy) and "Alaksandu" (possibly Alexander/Paris) | Inscription | Contested (interpretation debated) |

### Integration with Other Methods

- **Chronotope Theory**: Historical chronotope episodes are grounded in archaeological evidence; the Evidence Layer provides the material basis for historical temporality (see [Chronotope Theory](chronotope-theory-bakhtin.md))
- **Axial Age Theory**: The Axial Age band on the timeline is supported by archaeological evidence from the period (settlement patterns, material culture, inscriptions) (see [Axial Age Theory](axial-age-theory-jaspers.md))
- **Ethnomusicology**: Archaeological evidence (instruments, performance spaces, iconographic depictions) informs audio reconstruction for dead traditions (see [Ethnomusicology](ethnomusicology-performance-analysis.md))
- **Epistemic Decomposition**: Each evidence layer annotation is assigned a confidence tier based on the strength of the archaeological evidence (see [Epistemic Decomposition](epistemic-decomposition.md))

### User Experience Design

- **Evidence Layer Toggle**: Users can enable/disable the Evidence Layer on the timeline and map views
- **Site Visualization**: Archaeological sites are displayed on an interactive map with clickable markers linking to episode evidence
- **3D Reconstruction**: Users can explore 3D reconstructions of key sites (Troy, Mycenae, Knossos, etc.)
- **Evidence Confidence**: Each evidence annotation displays its confidence tier and scholarly interpretation
- **Multi-Layer View**: Users can see multiple occupation layers for a single site (e.g., Troy I–IX) and understand which layer corresponds to which narrative

### Technical Considerations

1. **Geospatial Data**: The platform requires geospatial database capabilities (PostGIS) for efficient geographic queries and map rendering
2. **3D Assets**: 3D site reconstructions require significant asset creation; consider partnerships with existing digital archaeology projects
3. **Evidence Uncertainty**: Archaeological evidence is often contested; the platform must represent scholarly disagreement without forcing resolution
4. **Temporal Ambiguity**: Dating archaeological layers involves uncertainty (e.g., Troy VIIa c. 1300–1190 BCE); the platform should display date ranges, not single dates
5. **Cross-Referencing**: Evidence layer annotations should link to external archaeological databases (Pleades, Open Context, tDAR) for scholarly interoperability

### Critical Awareness

The Evidence Layer treats archaeological evidence with appropriate scholarly caution:

- **Not Proof of Myth**: Archaeological evidence does not "prove" that mythological events occurred as described. It demonstrates that places, objects, and cultural contexts described in myth had real-world counterparts.
- **Scholarly Debate**: Many archaeological identifications are contested (e.g., whether Hissarlik is Homeric Troy, whether Troy VIIa was destroyed by warfare or earthquake). The platform represents multiple scholarly positions.
- **Temporal Gaps**: Mythological narratives may have been composed centuries after the events they describe. The Evidence Layer must account for this gap between event and narration.
- **Cultural Memory**: The relationship between myth and archaeology is mediated by cultural memory. Myths preserve distorted but meaningful memories of real events; they are not historical documents.

## See also

- [Chronotope Theory (Bakhtin)](chronotope-theory-bakhtin.md) — Historical chronotope grounded in archaeological evidence
- [Axial Age Theory (Jaspers)](axial-age-theory-jaspers.md) — Historical context supported by archaeological data
- [Ethnomusicology and Performance Analysis](ethnomusicology-performance-analysis.md) — Archaeological evidence for audio reconstruction
- [Epistemic Decomposition](epistemic-decomposition.md) — Confidence tiering for archaeological evidence
