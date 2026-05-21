---
type: methodology
status: documented
date: 2026-04-14
---

# Ethnomusicology and Performance Analysis

**Originator:** Founded by comparative musicologists (C. Sachs, B. Lomax); developed through work of A. Lomax, J. Blacking, R. Nettl, and the Milman Parry–Albert Lord oral tradition studies
**Primary Domain:** Ethnomusicology, Performance Studies, Oral Tradition Research, Digital Sound Studies
**Project Role:** Audio Strategy — inverts the typical text-first hierarchy by treating audio as the primary artifact and text as a mere transcription for oral traditions

## Core Ideas

Ethnomusicology and Performance Analysis provide the methodological foundation for the Mnemosyne Engine's **audio-first approach** to oral and performative traditions, particularly epic poetry and mythological narratives transmitted through song, chant, and recitation.

### Core Principles

1. **Audio as Primary Artifact**: For oral traditions, the audio performance is the primary cultural artifact. Text (transcription) is a derivative representation, not the source. This inverts the typical digital humanities text-first hierarchy.

2. **Performance as Creative Act**: Albert Lord's research on South Slavic oral epic demonstrated that each performance is a unique creative act, not a mere recitation of a fixed text. "The word" in oral tradition is not fixed but fluid — each singer recomposes the song in performance.

3. **Text and Context Are Inseparable**: The Milman Parry Collection of Oral Literature emphasizes that "without a sympathetic knowledge of context, the text may be misunderstood." Performance context (audience, setting, tradition) is integral to meaning.

4. **Oral-Aural Elements Always Present**: Even in literate traditions, oral-aural elements persist. Music that lives largely in oral tradition requires attention to performance practice, not just notation or transcription.

5. **Multivocal and Multi-Authored**: Oral songs in performance are "multivocal, essentially multi-authored" — they evolve through collective participation, not individual authorship. Tríona Ní Shíocháin demonstrates that "song engenders socio-processual thought of huge importance to the development of political ideas."

6. **Liminal Experience of Performance**: Oral performance as song is a "liminal experience that is foundational in the lives of humans, providing an expressive play-sphere through which thought and identity are formed and renewed."

7. **Applied Ethnomusicology as Public Archive**: Applied ethnomusicologists maintain musical ensembles of traditional music, "using performance as a form of public archive" — preserving living traditions through active practice, not just recording.

### The Parry-Lord Oral Theory

Milman Parry and Albert Lord's research on South Slavic oral epic poetry (1930s–1960s) established foundational principles for understanding oral tradition:

| Principle | Description |
|---|---|
| **Composition-in-Performance** | The singer does not memorize a fixed text but composes the song in each performance using traditional formulae and themes |
| **Formulaic Composition** | Oral poets use repeated formulaic expressions (e.g., "rosy-fingered Dawn," "swift-footed Achilles") as building blocks for composition |
| **Theme and Type-Scene** | Recurrent narrative units (assemblies, battles, journeys) serve as structural frameworks for improvisation |
| **Traditional Referentiality** | Formulae and themes carry meaning beyond their immediate context, referencing the broader tradition |
| **Performance Variation** | Each performance is a legitimate version of the song; no single version is "definitive" |

### Performance Analysis Methods

1. **Prosodic Feature Extraction**: Computational analysis of pitch, rhythm, timbre, and other sonic features for matching, clustering, and classification (HiPSTAS project, ARLO software).

2. **Spectral Graph Analysis**: Audio data displayed as spectral graphs enables computational analysis of sound patterns, originally developed for bird call classification and adapted for humanities audio archives.

3. **Transcription as Derivative**: Ethnomusicologists recognize that transcription (whether musical notation or textual) is a reduction of the performance, not its essence. Ter Ellingson's research brilliantly addresses notation and transcription as they affect ethnomusicological research.

4. **Oral Tradition vs. Literate Tradition**: In African oral tradition, music is learned through "the master/student relationship" — the master plays and says "make it sound like this." This direct imitation contrasts with Western analytical approaches involving notation, theory, and analysis.

## Primary Sources

| Citation | Details |
|---|---|
| Parry, M. (1971). *The Making of Homeric Verse: The Collected Papers of Milman Parry* (A. Parry, Ed.). Oxford University Press. | Foundational research on Homeric oral composition. Parry's fieldwork in Yugoslavia (1933–1935) established the oral-formulaic theory. |
| Lord, A. B. (1960/2000). *The Singer of Tales* (2nd ed.). Harvard University Press. ISBN: 978-0674002838 | Canonical statement of oral theory; based on Parry and Lord's fieldwork on South Slavic oral epic. |
| Lord, A. B. (1989/1990). "Performance and Performer: The Role of Tradition in Oral Epic Song." Lectures at Harvard University and Skidmore College. [Milman Parry Collection](https://mpc.chs.harvard.edu/performance-and-performer-the-role-of-tradition-in-oral-epic-song/) | Illustrates the inseparable aspects of oral literature: tradition and the moment of performance. |
| Lomax, A. (1959/1968). "Folk Song Style: Notes on a System." *Journal of the International Folk Music Council*. | Developed cantometrics system for cross-cultural song analysis. |
| Blacking, J. (1973). *How Musical Is Man?* University of Washington Press. ISBN: 978-0295952499 | Argued for the universality of musical capacity and the social embeddedness of music. |
| Feld, S. (1990). *Sound and Sentiment: Birds, Weeping, Poetics, and Song in Kaluli Expression* (2nd ed.). University of Pennsylvania Press. | Ethnomusicological study treating sound as primary cultural artifact. |
| Ní Shíocháin, T. (2022). *Singing Ideas: Performance, Politics, and Oral Poetry*. Routledge. ISBN: 978-1032079080 | Demonstrates oral performance as liminal experience enabling socio-processual thought. |
| Ellingson, T. (1992a, b). Research on notation and transcription in ethnomusicology. | Addresses notation and transcription as they affect ethnomusicological research. |

### Digital Sound Humanities

| Resource | Details |
|---|---|
| HiPSTAS (High Performance Sound Technologies for Analysis and Scholarship) | NEH-funded institute developing computational audio analysis tools for humanities archives. Used ARLO software for pitch, rhythm, and timbre extraction. |
| *Digital Sound Studies* (2018). Duke University Press. ISBN: 978-0822370604 | Collection addressing intersections of sound studies and digital humanities. |
| ARLO (Adaptive Recognition with Layered Optimization) | Machine learning application for analyzing sound, originally developed for bird calls, adapted for humanities audio analysis. |
| Milman Parry Collection of Oral Literature | Harvard-based digital archive of oral epic performances with video, audio, and transcription. [MPC Website](https://mpc.chs.harvard.edu/) |

## Digital Humanities Applications

1. **Computational Audio Analysis**: The HiPSTAS project developed computational tools for analyzing large audio archives of oral traditions, extracting prosodic features for classification and clustering.

2. **Digital Sound Archives**: Digital platforms (Milman Parry Collection, British Library Sound Archive, Smithsonian Folkways) treat audio recordings as primary artifacts, with transcription as derivative.

3. **Applied Ethnomusicology**: Musical ensembles of traditional music serve as "public archives," preserving living traditions through performance practice.

4. **Prosodic Analysis for TTS**: Computational extraction of pitch, rhythm, and timbre from oral performances informs text-to-speech models for reconstructing ancient pronunciation (see [Phonological Reconstruction](phonological-reconstruction-g2p.md)).

5. **Cross-Cultural Song Analysis**: Lomax's cantometrics system enables computational comparison of song styles across cultures, identifying structural similarities in musical performance.

## Applicability to Mnemosyne Engine

### Primary Use: Audio-First Strategy for Oral Traditions

The Mnemosyne Engine treats **audio as the primary artifact** for oral and performative traditions, inverting the typical text-first digital humanities approach:

#### Audio-First Architecture

```
Traditional DH Hierarchy:          Mnemosyne Audio-First Hierarchy:
┌──────────────────────┐          ┌──────────────────────┐
│       Audio          │          │    Audio Recording   │ ← Primary artifact
│   (derivative)       │          │    (performance)     │
├──────────────────────┤          ├──────────────────────┤
│   Text (source)      │          │  Prosodic Analysis   │ ← Computational layer
└──────────────────────┘          ├──────────────────────┤
                                  │   Transcription      │ ← Derivative representation
                                  │   (text)             │
                                  ├──────────────────────┤
                                  │   Annotation Layer   │ ← Propp functions, motifs, etc.
                                  └──────────────────────┘
```

#### Implementation

1. **Audio as Canonical Artifact**: For oral traditions, the audio recording (or reconstruction) is stored as the canonical representation; text transcription is derived from it.

2. **Prosodic Feature Extraction**: The platform extracts pitch, rhythm, timbre, and other sonic features from audio recordings for computational analysis:
   - **Pitch contours**: Identify melodic patterns in epic recitation
   - **Rhythmic structure**: Detect meter and prosody (critical for bardic traditions)
   - **Timbre analysis**: Characterize vocal quality and instrumentation

3. **Performance Context Metadata**: Each audio recording is annotated with performance context:
   - Performer identity and tradition lineage
   - Performance setting (ceremonial, entertainment, educational)
   - Audience type and response
   - Recording conditions and technology

4. **Multiple Performances**: For living oral traditions, the platform stores multiple performances of the same "song," treating each as a legitimate variant (per Parry-Lord oral theory).

#### Audio Strategy Components

| Component | Description |
|---|---|
| **Primary Audio Archive** | Canonical audio recordings (or reconstructions) for each episode |
| **Prosodic Analysis Layer** | Computational extraction of pitch, rhythm, timbre features |
| **Transcription Layer** | Text transcription derived from audio (with confidence markers) |
| **Annotation Layer** | Propp functions, Veselovskian triples, TMI codes overlaid on audio timeline |
| **Performance Context** | Metadata about performer, setting, audience, tradition |
| **Comparative Audio** | Side-by-side comparison of multiple performances of the same episode |

### Integration with Other Methods

- **Phonological Reconstruction**: Prosodic features extracted from oral performances inform G2P conversion for dead languages, enabling TTS reconstruction of ancient pronunciation (see [Phonological Reconstruction](phonological-reconstruction-g2p.md))
- **Chronotope Theory**: Audio performance creates its own chronotope — the liminal experience of performance operates outside the narrative's internal temporality (see [Chronotope Theory](chronotope-theory-bakhtin.md))
- **Archaeological Stratigraphy**: For ancient traditions with no surviving audio, the platform reconstructs audio based on archaeological evidence (instruments, performance spaces, iconographic depictions) (see [Archaeological Stratigraphy](archaeological-stratigraphy-evidence-mapping.md))
- **Epistemic Decomposition**: Audio reconstructions for dead traditions are assigned confidence tiers (Documented for living traditions, Reconstructed for documented-but-extinct traditions, Contested for scholarly reconstructions) (see [Epistemic Decomposition](epistemic-decomposition.md))

### User Experience Design

- **Audio-First Interface**: Users encounter audio before text for oral traditions; text is presented as a transcription aid, not the source
- **Prosodic Visualization**: Audio waveforms are annotated with pitch contours, rhythm markers, and timbre indicators
- **Performance Comparison**: Users can compare multiple performances of the same episode side-by-side
- **Living Tradition Support**: For living oral traditions, the platform supports ongoing submission of new performances
- **Scholarly Transparency**: Audio reconstructions for dead traditions are clearly marked with confidence tiers and methodology notes

### Technical Considerations

1. **Audio Formats**: Support for high-fidelity audio formats (WAV, FLAC) for archival quality; compressed formats (MP3, AAC) for streaming
2. **Annotation Synchronization**: Annotations (Propp functions, motifs) must be synchronized with audio timestamps
3. **Computational Analysis**: Prosodic feature extraction requires significant computational resources; consider batch processing and caching
4. **Living vs. Dead Traditions**: Different confidence tiers and methodologies apply to living oral traditions (documented audio) vs. extinct traditions (reconstructed audio)
5. **Cultural Sensitivity**: Some oral traditions have restricted access (e.g., sacred songs only for initiated members). The platform must support access controls.

## See also

- [Phonological Reconstruction (G2P)](phonological-reconstruction-g2p.md) — Ancient pronunciation reconstruction informed by prosodic analysis
- [Archaeological Stratigraphy](archaeological-stratigraphy-evidence-mapping.md) — Physical evidence for audio reconstruction
- [Chronotope Theory (Bakhtin)](chronotope-theory-bakhtin.md) — Performance as liminal chronotope
- [Epistemic Decomposition](epistemic-decomposition.md) — Confidence tiering for audio reconstructions
