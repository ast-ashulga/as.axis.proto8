import { defineCollection, z } from 'astro:content';

/* ── Epistemic tier ─────────────────────────────────────────────────────
 * Every piece of content — text and imagery — must carry one of these.
 * Adding an <ArtifactFigure> or image without a tier is a compile error.
 * ──────────────────────────────────────────────────────────────────────── */
export const EpistemicTierSchema = z.enum([
  'documented',    /* ● primary source; strong consensus              */
  'reconstructed', /* ◑ inferred from partial evidence                */
  'contested',     /* ◈ active scholarly debate                       */
  'ai-reviewed',   /* ▲ AI-generated + named human reviewer           */
]);

export type EpistemicTier = z.infer<typeof EpistemicTierSchema>;

/* ── Artifact (image) schema ────────────────────────────────────────────
 * Every artifact image must carry a tier, institution, accession number,
 * and license. No image renders without these fields.
 * ──────────────────────────────────────────────────────────────────────── */
const artifactSchema = z.object({
  src:            z.string(),
  institution:    z.string(),
  accessionNumber: z.string(),
  license:        z.string(),
  tier:           EpistemicTierSchema,
  caption_en:     z.string(),
  caption_ru:     z.string(),
  viewUrl:        z.string().url().optional(),
});

export type Artifact = z.infer<typeof artifactSchema>;

/* ── Episode collection ─────────────────────────────────────────────────
 * One .md file per episode. Frontmatter is typed and validated at build.
 * ──────────────────────────────────────────────────────────────────────── */
const episodes = defineCollection({
  type: 'content',
  schema: z.object({
    nas:       z.string(),            /* nms://tradition/division/unit  */
    tradition: z.enum(['gilgamesh', 'iliad', 'atrahasis']),
    tablet:    z.string(),            /* "tablet-xi", "book-xxiv"       */
    tier:      EpistemicTierSchema,
    layers:    z.array(z.enum(['surface', 'translated', 'scholaria'])),
    parallelTo: z.string().optional(), /* NAS URI of the parallel        */
    artifacts: z.array(artifactSchema).optional(),
    title_en:  z.string(),
    title_ru:  z.string(),
    desc_en:   z.string(),
    desc_ru:   z.string(),
    phase2:    z.boolean().default(false),
  }),
});

/* ── Parallels collection ───────────────────────────────────────────────
 * One .md file per confirmed cross-tradition parallel.
 * ──────────────────────────────────────────────────────────────────────── */
const parallels = defineCollection({
  type: 'content',
  schema: z.object({
    type: z.enum([
      'socio-typological',
      'literary-typological',
      'psychological-typological',
    ]),
    traditions:    z.array(z.string()).min(2),
    episodeNasUris: z.array(z.string()).min(2),
    tier:          EpistemicTierSchema,
    title_en:      z.string(),
    title_ru:      z.string(),
  }),
});

export const collections = { episodes, parallels };
