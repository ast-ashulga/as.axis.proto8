# Methodology Index

_Non-technical domain methodologies used by the Mnemosyne Engine._
_Last updated: 2026-04-14_

## Overview

This directory contains **methodology documents** — scholarly frameworks from archaeology, literary theory, anthropology, comparative mythology, computational linguistics, and bioinformatics that have been adapted for the Mnemosyne Engine's content model, data architecture, and user experience design.

These are **raw source documents** (human-authored). They inform the compiled concept pages in `wiki/concepts/` via the ingest pipeline.

## Structure by Domain

### Narrative Analysis & Structural Methods

| Method | Originator | Project Role | File |
|--------|-----------|--------------|------|
| **Morphological Analysis (Propp)** | Vladimir Propp (1928) | Machine-readable data model backbone — 31 narrative functions as metadata tags | [morphological-analysis-propp.md](morphological-analysis-propp.md) |
| **Monomyth / Hero's Journey (Campbell)** | Joseph Campbell (1949) | UI Vocabulary — accessible "lens" for narrative stages, decoupled from data model | [monomyth-heroes-journey-campbell.md](monomyth-heroes-journey-campbell.md) |
| **Structural Motif Taxonomy (Veselovsky)** | Alexander Veselovsky (1870s) | Internal motif grouping using actor-role + action-type + object-type triples | [structural-motif-taxonomy-veselovsky.md](structural-motif-taxonomy-veselovsky.md) |
| **Thompson Motif Index (TMI)** | Stith Thompson (1932–1958) | External scholarly interoperability — cross-reference with folklore databases | [thompson-motif-index.md](thompson-motif-index.md) |
| **Structural Anthropology (Lévi-Strauss)** | Claude Lévi-Strauss (1955) | Knowledge graph topology — mytheme detection and binary opposition analysis | [structural-anthropology-levi-strauss.md](structural-anthropology-levi-strauss.md) |
| **Chronotope Theory (Bakhtin)** | Mikhail Bakhtin (1937) | Timeline logic — five temporal-spatial environment types for non-linear time | [chronotope-theory-bakhtin.md](chronotope-theory-bakhtin.md) |

### Comparative & Cross-Cultural Methods

| Method | Originator | Project Role | File |
|--------|-----------|--------------|------|
| **Comparative Typology** | Veselovsky → Zhirmunsky → Ďurišin | "Parallel Conversations" architecture — structural resonances without cultural hierarchy | [comparative-typology.md](comparative-typology.md) |
| **Axial Age Theory (Jaspers)** | Karl Jaspers (1949) | Visual cartographic band on timeline — historical context band (c. 800–200 BCE) | [axial-age-theory-jaspers.md](axial-age-theory-jaspers.md) |

### Archaeological & Evidence-Based Methods

| Method | Originator | Project Role | File |
|--------|-----------|--------------|------|
| **Archaeological Stratigraphy & Evidence Mapping** | Schliemann, Evans, Kenyon | "Evidence Layer" — grounds mythological narratives in physical archaeological sites | [archaeological-stratigraphy-evidence-mapping.md](archaeological-stratigraphy-evidence-mapping.md) |

### Audio & Linguistic Methods

| Method | Originator | Project Role | File |
|--------|-----------|--------------|------|
| **Ethnomusicology & Performance Analysis** | Parry-Lord, Lomax, Blacking, Nettl | Audio Strategy — audio as primary artifact, text as derivative transcription | [ethnomusicology-performance-analysis.md](ethnomusicology-performance-analysis.md) |
| **Phonological Reconstruction (G2P)** | Computational linguistics (Knight, Deri, Kondrak, CMU) | Bardic TTS — grapheme-to-phoneme conversion for dead language pronunciation | [phonological-reconstruction-g2p.md](phonological-reconstruction-g2p.md) |

### Computational & Bioinformatics-Inspired Methods

| Method | Originator | Project Role | File |
|--------|-----------|--------------|------|
| **Sequence Alignment (Bioinformatics)** | Needleman-Wunsch, Smith-Waterman → Pial & Skiena (GNAT) | Cyclicity Analysis — detect recurring narrative patterns via Propp function alignment | [sequence-alignment-bioinformatics.md](sequence-alignment-bioinformatics.md) |
| **Genome Browser Track Modeling** | UCSC Genome Browser (Kent et al., 2002) | Multi-layer annotation visualization — 12+ parallel tracks for narrative analysis | [genome-browser-track-modeling.md](genome-browser-track-modeling.md) |

### Epistemic Transparency (Cross-Cutting)

| Method | Originator | Project Role | File |
|--------|-----------|--------------|------|
| **Epistemic Decomposition** | Mnemosyne Engine project (informed by evidence-based scholarship) | Scholarly transparency — confidence tiers (Documented, Reconstructed, Contested, Inspired) for all claims | [epistemic-decomposition.md](epistemic-decomposition.md) |

## Method Relationships

The methodologies form an **integrated analytical framework**:

```
┌─────────────────────────────────────────────────────────────────┐
│                    Epistemic Decomposition                       │
│              (applies to ALL methodologies below)                │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│   Propp Functions│  │ Veselovskian     │  │ TMI Codes        │
│   (plot-level)   │  │ Triples (motif)  │  │ (external ref)   │
└────────┬─────────┘  └────────┬─────────┘  └────────┬─────────┘
         │                     │                     │
         └─────────────────────┼─────────────────────┘
                               ↓
                    ┌──────────────────────┐
                    │ Sequence Alignment   │
                    │ (computational match)│
                    └──────────────────────┘
                               ↓
┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ Genome Browser   │  │ Comparative      │  │ Structural       │
│ Track Visualization│ │ Typology (echoes)│ │ Anthropology     │
└──────────────────┘  └──────────────────┘  │ (mytheme graph)  │
                                            └──────────────────┘
         ↓                    ↓                    ↓
┌──────────────────────────────────────────────────────────────┐
│              Chronotope Theory (timeline logic)               │
│              Archaeological Stratigraphy (evidence layer)     │
│              Campbell Monomyth (UI vocabulary overlay)        │
│              Axial Age (historical context band)              │
│              Ethnomusicology (audio-first strategy)           │
│              Phonological Reconstruction (Bardic TTS)         │
└──────────────────────────────────────────────────────────────┘
```

## Key Design Principles

1. **Epistemic Decomposition applies to every methodology** — each claim is assigned a confidence tier (Documented, Reconstructed, Contested, Inspired)
2. **Propp is the data model backbone** — Campbell is UI-only overlay, deliberately decoupled
3. **Sequence alignment operates at the syntagmatic (sequential) level**; Lévi-Strauss operates at the paradigmatic (relational) level — together they provide complete structural analysis
4. **Audio is primary for oral traditions** — text transcription is derivative, not source
5. **Comparative typology identifies "echoes" without implying cultural hierarchy or derivation**
6. **TMI provides external scholarly interoperability**; Veselovskian triples provide internal computational analysis

## Integration with Compiled Layer

These methodology documents inform the following compiled concept pages:

| Compiled Page | Informed By |
|--------------|-------------|
| [Propp Annotations](/Users/andreyshulga/projects/experimental/axis/as.axis.proto/wiki/project/concepts/propp-annotations.md) | Propp Morphology, Campbell Monomyth, Bakhtin Chronotopes |
| [Genome Browser Tracks](/Users/andreyshulga/projects/experimental/axis/as.axis.proto/wiki/project/concepts/genome-browser-tracks.md) | Genome Browser Track Modeling, all annotation methods |
| [Parallel Motif Chips](/Users/andreyshulga/projects/experimental/axis/as.axis.proto/wiki/project/concepts/parallel-motif-chips.md) | Comparative Typology, Sequence Alignment, Veselovskian Triples |
| [Audio Strategy](/Users/andreyshulga/projects/experimental/axis/as.axis.proto/wiki/project/concepts/audio-strategy.md) | Ethnomusicology, Phonological Reconstruction, Epistemic Decomposition |
| [Epistemic Tiers](/Users/andreyshulga/projects/experimental/axis/as.axis.proto/wiki/project/concepts/epistemic-tiers.md) | Epistemic Decomposition |

## See also

- [wiki/CLAUDE.md](../CLAUDE.md) — master wiki index, three-layer architecture
- [wiki/CONTRIBUTING.md](../CONTRIBUTING.md) — contributing guidelines
- [wiki/concepts/](../concepts/) — compiled concept pages synthesized from raw sources
- [wiki/decisions/](../decisions/) — Architecture Decision Records
