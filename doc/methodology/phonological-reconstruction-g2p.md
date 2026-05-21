---
type: methodology
status: documented
date: 2026-04-14
---

# Phonological Reconstruction (Grapheme-to-Phoneme Conversion)

**Originator:** Computational linguistics and historical phonology traditions; key contributions from K. Knight, A. Deri, G. Kondrak, J. Kominek, and CMU Language Technologies Institute researchers
**Primary Domain:** Computational Linguistics, Historical Phonology, Speech Technology, Text-to-Speech (TTS)
**Project Role:** Grapheme-to-Phoneme (G2P) conversion to infer correct ancient pronunciation and prosody (meter) for dead languages in the Bardic TTS system

## Core Ideas

**Phonological Reconstruction** for dead languages combines historical linguistics methods with computational Grapheme-to-Phoneme (G2P) conversion to reconstruct how ancient texts would have sounded when performed orally. This is critical for the Mnemosyne Engine's Bardic TTS system, which generates audio recitations of epic texts in their reconstructed ancient pronunciation.

### Grapheme-to-Phoneme (G2P) Conversion

G2P conversion transforms orthographic input (sequence of graphemes/letters) into phonetic output (sequence of phonemes). The task is essential for Text-to-Speech (TTS) systems:

> "The Grapheme-to-Phoneme (G2P) task aims to convert orthographic input, a sequence of graphemes, into a discrete phonetic representation, a sequence of phonemes. The ability to automatically convert graphemes into phonemes benefits speech processing systems such as Text-to-Speech (TTS) or Automatic Speech Recognition (ASR) by hypothesizing pronunciations for out-of-vocabulary words and generalizing beyond a finite, potentially small, manually-annotated pronunciation dictionary."
> — Amazon Science, *Improving G2P Conversion by Learning from Speech Recordings*

### Key Challenges for Dead Languages

1. **No Native Speakers**: Dead languages have no living speakers to provide pronunciation data. Reconstruction must rely on:
   - Comparative linguistic analysis (cognate languages)
   - Orthographic conventions of the period
   - Metrical requirements of the poetry
   - Loanword evidence (how words were borrowed into/from other languages)
   - Internal orthographic evidence (spelling variations, scribal practices)

2. **Irregular Orthography**: Ancient writing systems often have inconsistent grapheme-to-phoneme mappings. For example:
   - Cuneiform syllabaries use "syllable telescoping" where `/lan/` is written as `<la-an>`
   - Ancient Greek had dialectal variation in pronunciation
   - Sanskrit's Devanagari script has more consistent mappings but still requires contextual rules

3. **Prosody and Meter**: Epic poetry relies on specific metrical patterns (e.g., dactylic hexameter in Greek, śloka meter in Sanskrit). Reconstructed pronunciation must satisfy metrical requirements.

4. **Limited Training Data**: Modern G2P systems require large pronunciation dictionaries. For dead languages, such dictionaries are small or non-existent.

### Computational Approaches

| Approach | Description | Applicability to Dead Languages |
|---|---|---|
| **Rule-Based G2P** | Hand-crafted rules mapping graphemes to phonemes based on linguistic scholarship | High accuracy but limited coverage; requires expert knowledge |
| **Joint Sequence Models** | Statistical models learning G→P alignment from training data | Requires training data not available for most dead languages |
| **Neural LSTM Models** | Deep bidirectional LSTM with CTC layer for G2P conversion | State-of-the-art for modern languages; adaptable to dead languages with transfer learning |
| **Zero-Shot Learning** | Approximates G2P for unseen languages using phylogenetic tree (language family) | Promising for dead languages: reconstruct from related living languages |
| **Semisupervised Neural Reconstruction** | Derives protolanguage forms from modern descendants using neural models | **CMU's 2024 Best Paper approach** — directly applicable to ancient language reconstruction |
| **Alignment-Based Reconstruction** | Aligns graphemes to phonemes using similarity-based algorithms (e.g., ALINE) | Smith (2007) successfully applied to Sumerian and Akkadian |

### CMU's Semisupervised Neural Protolanguage Reconstruction (2024)

CMU researchers (Mortensen, Lu, Xie) developed a semisupervised computer model that derives protolanguages from their modern forms based on a small set of examples. Their approach received a **Best Paper Award at ACL 2024**:

- **Bidirectional Neural Model**: One model goes backward in time (modern → ancient), another goes forward (ancient → modern)
- **Testing on Romance and Sinitic Languages**: Demonstrated generalization across multiple language families
- **Applicability to Dead Languages**: The approach can reconstruct ancestor words from modern descendants, directly applicable to ancient language pronunciation

> "For most language families in the world, their protolanguages have not been reconstructed. The neural network can predict the correct ancestor words from modern terms and accurately transform the ancestor words back into their modern equivalents, similar to how human linguists approach reconstructing protolanguages."
> — Leon Lu, CMU School of Computer Science, 2024

## Primary Sources

| Citation | Details |
|---|---|
| Smith, A. (2007). "Phonological Reconstruction of a Dead Language Using the Constraint-Based Alignment Approach." University of Toronto. [PDF](https://www.cs.toronto.edu/pub/gh/Smith-2007.pdf) | Applied constraint-based alignment to Sumerian and Akkadian phonological reconstruction. |
| Kominek, J. (2005). "TTS From Zero: Building Synthetic Voices for New Languages." Carnegie Mellon University. [Thesis](https://www.lti.cs.cmu.edu/people/alumni/alumni-thesis/kominek-john-thesis.pdf) | Building TTS for languages with no existing pronunciation data. |
| Deri, A., & Knight, K. (2016). "Grapheme-to-Phoneme Models for (Almost) Any Language." *ACL*, pp. 399–408. | G2P models adaptable to low-resource languages. |
| Kondrak, G. (2000). "ALINE: An Algorithm for Phonetic Alignment." *ACL*. | Phonetic alignment algorithm applicable to historical linguistics. |
| Li, X., et al. (2022). "Zero-shot Learning for Grapheme to Phoneme Conversion with Language Ensemble." *ACL Findings*, pp. 2106–2115. | Zero-shot G2P for unseen languages using language family trees. |
| Comini, G., et al. "Multilingual Context-Based Pronunciation Learning for Text-to-Speech." Amazon Alexa TTS Research. | Multilingual G2P transfer learning approaches. |
| CMU SCS (2024). "SCS Researchers Design Models To Help Linguists Reconstruct Ancient Languages." [CMU News](https://www.cs.cmu.edu/news/2024/reconstructing-ancient-languages) | Semisupervised neural protolanguage reconstruction (Best Paper ACL 2024). |
| Hayes, B., & Wilson, C. (2008). "A Maximum Entropy Model of Phonotactics and Phonotactic Learning." *Linguistic Inquiry*, 39(3), 379–440. | Phonotactic constraints for pronunciation modeling. |
| Gibbon, D. (Ed.). *Developments in the Modeling of Speech Prosody*. Language Science Press. ISBN: 978-3961104479 | Computational modeling of speech prosody for TTS. |

### SIGMORPHON Shared Tasks

| Task | Details |
|---|---|
| SIGMORPHON 2020 Shared Task | "Multilingual Grapheme-to-Phoneme Conversion." Gorman, K., et al. Proceedings of the 17th SIGMORPHON Workshop. | Multilingual G2P benchmark covering 30+ languages. |

## Digital Humanities Applications

1. **Ancient Language Reconstruction**: CMU's 2024 neural protolanguage reconstruction enables linguists to reconstruct missing or incomplete ancestral languages from modern descendants.

2. **TTS for Dead Languages**: Kominek's "TTS From Zero" methodology enables building synthetic voices for languages with no existing pronunciation data, directly applicable to ancient languages.

3. **Computational Historical Phonology**: Smith's constraint-based alignment approach successfully reconstructed Sumerian and Akkadian phonology from cuneiform orthography.

4. **Zero-Shot G2P**: Li et al.'s zero-shot learning approach approximates G2P for ~8,000 languages (Glottolog) using phylogenetic relationships — applicable to dead languages via living descendants.

## Applicability to Mnemosyne Engine

### Primary Use: Bardic TTS System for Dead Languages

Phonological reconstruction enables the Mnemosyne Engine's **Bardic TTS system** to generate audio recitations of epic texts in reconstructed ancient pronunciation:

#### Bardic TTS Architecture

```
┌──────────────────────────────────────────────────────────────┐
│                    Bardic TTS Pipeline                       │
├──────────────────────────────────────────────────────────────┤
│  Ancient Text (cuneiform, hieroglyphs, Linear B, etc.)      │
│                          ↓                                   │
│  Grapheme Extraction (OCR or manual transcription)           │
│                          ↓                                   │
│  G2P Conversion (neural reconstruction + rule-based rules)   │
│                          ↓                                   │
│  Phoneme Sequence (IPA or language-specific phoneme set)     │
│                          ↓                                   │
│  Prosody Modeling (meter, rhythm, pitch accent)              │
│                          ↓                                   │
│  TTS Acoustic Model (neural vocoder)                         │
│                          ↓                                   │
│  Audio Output (reconstructed ancient pronunciation)          │
└──────────────────────────────────────────────────────────────┘
```

#### Implementation

```python
# Example: G2P pipeline for Ancient Greek
class AncientGreekG2P:
    def __init__(self):
        self.neural_model = load_neural_g2p('ancient_greek')  # Trained on scholarly reconstructions
        self.rule_based = load_rules('ancient_greek_rules')   # Hand-crafted linguistic rules
        self.prosody_model = load_prosody_model('dactylic_hexameter')
    
    def convert(self, text: str) -> PhonemeSequence:
        # Neural G2P (primary)
        neural_phonemes = self.neural_model.predict(text)
        
        # Rule-based G2P (validation)
        rule_phonemes = self.rule_based.apply(text)
        
        # Reconcile differences (prefer rule-based for high-confidence rules)
        phonemes = self.reconcile(neural_phonemes, rule_phonemes)
        
        # Apply prosody modeling (meter constraints)
        phonemes_with_prosody = self.prosody_model.apply(phonemes)
        
        return phonemes_with_prosody
```

#### Confidence Tiering for Reconstruction

Each reconstructed pronunciation is assigned a confidence tier:

| Confidence | Description | Example |
|---|---|---|
| **Documented** | Pronunciation directly attested in historical sources (e.g., grammarian descriptions, transliterations) | Classical Attic Greek pronunciation (well-documented) |
| **Reconstructed** | Pronunciation inferred from comparative linguistic evidence with scholarly consensus | Proto-Indo-European laryngeals |
| **Contested** | Pronunciation actively debated among scholars | Sumerian vowel quality in certain periods |
| **Inspired** | Pronunciation based on speculative reconstruction with limited evidence | Hattic language (poorly understood) |

#### Prosody and Meter Modeling

For epic poetry, reconstructed pronunciation must satisfy metrical requirements:

| Tradition | Meter | Computational Modeling |
|---|---|---|
| **Greek Epic** | Dactylic hexameter (– ⏑ ⏑ | – ⏑ ⏑ | – – |) | Syllable weight constraints; pitch accent patterns |
| **Sanskrit Epic** | Śloka meter (8 syllables per quarter-verse) | Vowel length constraints; sandhi rules |
| **Akkadian Epic** | Stress-based meter (debated) | Stress pattern reconstruction from vowel length |
| **Old English Epic** | Alliterative verse (4 stressed syllables per line) | Alliteration constraints; stress patterns |

### Integration with Other Methods

- **Ethnomusicology**: Prosodic features extracted from living oral traditions inform G2P conversion for related dead languages (see [Ethnomusicology](ethnomusicology-performance-analysis.md))
- **Archaeological Stratigraphy**: Archaeological evidence (instruments, performance spaces) informs prosody modeling for reconstructed audio (see [Archaeological Stratigraphy](archaeological-stratigraphy-evidence-mapping.md))
- **Epistemic Decomposition**: Each reconstructed pronunciation is assigned a confidence tier based on evidential basis (see [Epistemic Decomposition](epistemic-decomposition.md))

### Technical Considerations

1. **Training Data for Dead Languages**: Neural G2P models require training data. For dead languages, training data comes from:
   - Scholarly pronunciation reconstructions (manual IPA transcriptions)
   - Transliteration evidence (how words were borrowed into other languages)
   - Metrical evidence (what pronunciations satisfy poetic meter)

2. **Transfer Learning from Living Descendants**: Zero-shot and semisupervised approaches transfer knowledge from living descendant languages (e.g., Modern Greek for Ancient Greek, Hindi for Sanskrit)

3. **Orthographic Variation**: Ancient texts may have multiple orthographic conventions (e.g., different cuneiform sign values for different periods). The G2P system must be period-aware.

4. **Dialectal Variation**: Ancient languages often had multiple dialects with different pronunciations. The system should support dialect-specific G2P rules.

5. **Evaluation Metrics**: Reconstructed pronunciation is evaluated against:
   - Scholarly consensus (does it match accepted reconstructions?)
   - Metrical satisfaction (does it fit the poetic meter?)
   - Internal consistency (are similar graphemes pronounced similarly?)

### User Experience Design

- **Pronunciation Toggle**: Users can switch between scholarly reconstruction variants (e.g., Erasmian vs. Reconstructed Ancient Greek pronunciation)
- **Transparency Panel**: Each TTS audio displays the confidence tier and methodology notes for the pronunciation
- **Prosody Visualization**: Audio waveforms are annotated with meter and prosody markers
- **Comparative Listening**: Users can compare reconstructed pronunciation across different confidence tiers

## See also

- [Ethnomusicology and Performance Analysis](ethnomusicology-performance-analysis.md) — Prosodic features from living traditions inform dead language reconstruction
- [Archaeological Stratigraphy](archaeological-stratigraphy-evidence-mapping.md) — Physical evidence for prosody modeling
- [Epistemic Decomposition](epistemic-decomposition.md) — Confidence tiering for reconstructed pronunciation
- [Sequence Alignment](sequence-alignment-bioinformatics.md) — Alignment algorithms applicable to phonological comparison
