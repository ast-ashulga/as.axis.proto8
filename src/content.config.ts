/// <reference types="astro/client" />
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

export const EpistemicTierSchema = z.enum([
  'documented',
  'reconstructed',
  'contested',
  'ai-reviewed',
]);

export type EpistemicTier = z.infer<typeof EpistemicTierSchema>;

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

const episodes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodes' }),
  schema: z.object({
    nas:       z.string(),
    tradition: z.enum(['gilgamesh', 'iliad', 'atrahasis']),
    tablet:    z.string(),
    tier:      EpistemicTierSchema,
    layers:    z.array(z.enum(['surface', 'translated', 'scholaria'])),
    parallelTo: z.string().optional(),
    artifacts: z.array(artifactSchema).optional(),
    title_en:  z.string(),
    title_ru:  z.string(),
    desc_en:   z.string(),
    desc_ru:   z.string(),
    phase2:    z.boolean().default(false),
  }),
});

const parallels = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/parallels' }),
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
