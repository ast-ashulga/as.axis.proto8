---
type: methodology
status: documented
date: 2026-04-14
---

# Thompson Motif Index (TMI)

**Originator:** Stith Thompson (1885–1976)
**Primary Domain:** Folklore Studies, Narrative Classification, Comparative Mythology
**Project Role:** External scholarly interoperability — allows the platform's data to be cross-referenced with established academic databases and the broader folklore studies community

## Core Ideas

The **Motif-Index of Folk-Literature** is a six-volume catalogue of motifs (granular narrative elements of folklore) compiled by American folklorist Stith Thompson, first published 1932–1936 and revised/expanded 1955–1958. It remains one of the most widely used classification systems in folklore studies.

### Definition of Motif

Thompson defined the motif as "the smallest and most striking elements of narrative content with the ability to endure in tradition." Motifs are divided into three categories:
1. **Actors** (gods, animals, magical creatures, character types)
2. **Items** (magical objects, instruments, settings)
3. **Single Incidents** (specific events, actions, or plot points)

### Classification Structure

The TMI organizes thousands of motifs into a hierarchical system:

1. **Major Categories** (letter codes A–Z):
   - **A**: Mythological Motifs
   - **B**: Animals
   - **C**: Tabu
   - **D**: Magic
   - **E**: The Dead
   - **F**: Marvels
   - **G**: ogres
   - **H**: Tests
   - **J**: The Wise and the Foolish
   - **K**: Decisions
   - **L**: Reversal of Fortune
   - **M**: Ordaining the Future
   - **N**: Chance and Fate
   - **P**: Society
   - **Q**: Rewards and Punishments
   - **R**: Captives and Fugitives
   - **S**: Unnatural Cruelty
   - **T**: Sex
   - **U**: Nature of Life
   - **V**: Religion
   - **W**: Traits of Character
   - **X**: Humor
   - **Y**: Miscellaneous
   - **Z**: Groups of Motifs

2. **Subcategories**: Each major category is subdivided into more specific entries. For example:
   - Category S: "Unnatural Cruelty"
   - Subcategory S50: "Cruel relatives-in-law"
   - Entry S51.1: "Cruel mother-in-law plans death of daughter-in-law"

3. **Alphanumeric Codes**: Each motif receives a unique identifier (e.g., `A101.1`, `D100`, `H1011`) enabling precise reference and database indexing.

### Relationship to ATU Index

The TMI is used in tandem with the **Aarne-Thompson-Uther (ATU) Index**, which classifies folktale *types* (complete plot structures) rather than individual motifs. The ATU index is the third iteration (after Aarne 1910 and Thompson 1928) of the tale-type classification system.

## Primary Sources

| Citation | Details |
|---|---|
| Thompson, S. (1932–1936). *Motif-Index of Folk-Literature: A Classification of Narrative Elements*. FF Communications 106–109, 116–117. Suomalainen Tiedeakatemia. | First edition, 6 volumes. |
| Thompson, S. (1955–1958). *Motif-Index of Folk-Literature* (Rev. & enl. ed.). 6 vols. Rosenkilde and Bagger. ISBN: 978-0253338860 (Indiana University Press reprint) | Second, revised and expanded edition. The standard reference edition. |
| Thompson, S. (1977). *The Folktale*. University of California Press. ISBN: 978-0520033146 | Includes overview of the motif-index system and its application. |
| Thompson, S. (1955). *A Folklorist's Progress: Reflections of a Scholar's Life*. Indiana University Press. | Autobiographical account of composing the Motif-Index. |
| Uther, H.-J. (2004). *The Types of International Folktales: A Classification and Bibliography*. FF Communications 284–286. Academia Scientiarum Fennica. | ATU index, third iteration building on Aarne and Thompson. |

### Digital Resources

| Resource | Details |
|---|---|
| MOMFER (Meerten Online Motif Finder) | Search engine of Thompson's Motif-Index. Karsdorp, F., van der Meulen, M., Meder, T., & van den Bosch, A. (2015). "MOMFER: A Search Engine of Thompson's Motif-Index of Folk Literature." *Folklore*, 126(1), 37–52. |
| TMI as CSV (GitHub) | Machine-readable CSV version of the complete Motif-Index. Mellmann, K. (2020). DOI: 10.17605/OSF.IO/XEB67. [GitHub Repository](https://github.com/KatjaMellmann/TMI_as_CSV) |
| Indiana University Libraries Database | Digital database corresponding to the print edition. [IU Libraries](https://libraries.indiana.edu/motif-index-folk-literature) |
| Linked Data Access | Declerck, T., Kostová, A., & Schäfer, L. (2017). "Linked Data Access to Folktales classified by Thompson's Motifs and Aarne-Thompson-Uther's Types." *Digital Humanities 2017*, Montréal. |

## Digital Humanities Applications

1. **MOMFER Search Engine**: The Meerten Online Motif Finder provides a searchable interface for the TMI, enabling folklorists to find motifs across the full index. This demonstrates the TMI's adaptability to digital search and retrieval.

2. **Linked Data Integration**: Declerck, Kostová, & Schäfer (2017) demonstrated Linked Open Data access to folktales classified by TMI motifs and ATU types, enabling cross-database queries and scholarly interoperability.

3. **Database Reference Tables**: The TMI-as-CSV project (Mellmann, 2020) provides a UTF-8 encoded CSV file designed as a reference table within relational databases of folklore datasets.

4. **Computational Folkloristics**: The TMI's alphanumeric coding system enables computational analysis of motif distribution, frequency, and co-occurrence across corpora.

5. **Cross-Cultural Cataloguing**: The TMI is used to catalogue and compare narrative motifs across traditions from Ireland to India, despite being developed primarily from European source material.

## Applicability to Mnemosyne Engine

### Primary Use: External Scholarly Interoperability

The Thompson Motif Index provides the **bridge between the Mnemosyne Engine's internal classification schemas and the broader academic folklore community**:

#### Cross-Reference Schema

```sql
-- Thompson Motif Index cross-reference table
CREATE TABLE thompson_motif_crossrefs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  episode_id UUID REFERENCES episodes(id),
  tmi_code TEXT NOT NULL, -- e.g., 'A101.1', 'D100', 'H1011'
  tmi_description TEXT, -- Natural language description from TMI
  internal_motif_triple UUID, -- Links to Veselovskian triple annotation
  propp_function TEXT, -- Links to Propp function annotation
  confidence TEXT CHECK (confidence IN ('Documented', 'Reconstructed', 'Contested', 'Inspired')),
  annotator_id UUID REFERENCES scholars(id),
  created_at TIMESTAMP DEFAULT NOW(),
  UNIQUE (episode_id, tmi_code)
);

-- Index for efficient TMI code lookup
CREATE INDEX idx_tmi_code ON thompson_motif_crossrefs(tmi_code);
CREATE INDEX idx_tmi_episode ON thompson_motif_crossrefs(episode_id);
```

#### Interoperability Benefits

1. **Scholarly Communication**: Researchers can reference Mnemosyne Engine data using standard TMI codes familiar to the folklore studies community
2. **Database Integration**: The platform can export data in TMI-format for integration with existing folklore databases (e.g., MOMFER, ATU index databases)
3. **Cross-Database Queries**: Linked Data integration enables querying across the Mnemosyne Engine and external folklore databases simultaneously
4. **Publication Standards**: Academic publications using Mnemosyne data can cite episodes using TMI codes, ensuring compatibility with existing scholarly citation practices

### Integration with Other Methods

- **Veselovskian Triples**: Internal Veselovsky motif triples can be mapped to external TMI codes, enabling both internal computational analysis and external scholarly interoperability (see [Structural Motif Taxonomy](structural-motif-taxonomy-veselovsky.md))
- **Propp Morphology**: TMI motifs operate at a more granular level than Propp functions. A single Propp function may correspond to multiple TMI motifs (see [Morphological Analysis](morphological-analysis-propp.md))
- **Comparative Typology**: TMI codes enable systematic comparison of motif distribution across traditions (see [Comparative Typology](comparative-typology.md))

### Technical Implementation

#### TMI Code Import

The TMI-as-CSV dataset (Mellmann, 2020) can be imported into the platform:

```sql
-- Import TMI reference data
CREATE TABLE tmi_reference (
  tmi_code TEXT PRIMARY KEY, -- e.g., 'A101.1'
  category TEXT, -- e.g., 'A' (Mythological Motifs)
  subcategory TEXT, -- e.g., 'A100' (Cosmology)
  description TEXT, -- Full description of the motif
  examples TEXT -- Example occurrences from TMI
);

-- Load from CSV
COPY tmi_reference FROM '/path/to/TMI_as_CSV.csv' 
  WITH (FORMAT csv, HEADER true, DELIMITER ',');
```

#### Cross-Reference Mapping

Mapping internal annotations to TMI codes:

| Internal Annotation | TMI Cross-Reference | Notes |
|---|---|---|
| Veselovsky: [protagonist + departure + threshold] | D150 "Magical flight"; L90 "Departure of hero" | Multiple TMI codes may apply |
| Propp: Function 11 (Departure) | L90 "Departure of hero"; E100 "Departure of the dead" | Context-dependent mapping |
| Veselovsky: [divine_agent + transformation + protagonist] | D400 "Magic transformations"; A100 "Cosmology" | Requires scholarly judgment |

### Limitations and Considerations

1. **European Bias**: The TMI was developed primarily from European folk literature. Applicability to non-European traditions (Malaysian, African, etc.) has been questioned. Use confidence markers to indicate certainty.

2. **Granularity Mismatch**: TMI operates at the motif level (granular narrative elements), while Propp operates at the plot-structure level. Mapping between schemas requires scholarly interpretation.

3. **Version Control**: The TMI has multiple editions (1932–36 first edition; 1955–58 revised edition). The platform should use the revised edition as the standard and note the source edition in annotations.

4. **Ongoing Development**: The ATU index continues to be updated (Uther 2004, with ongoing revisions). The TMI may similarly evolve. The platform should track version changes.

### User Experience Design

- **TMI Code Search**: Users can search for episodes by TMI code or browse the TMI hierarchy
- **Cross-Reference Display**: Episode pages display both internal classifications (Propp, Veselovsky) and external TMI cross-references
- **Export Functionality**: Data can be exported in TMI-format for integration with external databases
- **Linked Data Queries**: Advanced users can construct SPARQL queries across the Mnemosyne Engine and external folklore databases

## See also

- [Structural Motif Taxonomy (Veselovsky)](structural-motif-taxonomy-veselovsky.md) — Internal motif classification (TMI provides external interoperability)
- [Morphological Analysis (Propp)](morphological-analysis-propp.md) — Plot-structure level analysis (TMI provides motif-level granularity)
- [Comparative Typology](comparative-typology.md) — Cross-cultural motif comparison using TMI codes
- [Epistemic Decomposition](epistemic-decomposition.md) — Confidence tiering for TMI cross-references
