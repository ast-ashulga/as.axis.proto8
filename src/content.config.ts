/// <reference types="astro/client" />
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import type { z as ZodType } from 'zod';

export const EpistemicTierSchema = z.enum([
  'documented',
  'reconstructed',
  'contested',
  'inspired',
]);

export type EpistemicTier = ZodType.infer<typeof EpistemicTierSchema>;

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

export type Artifact = ZodType.infer<typeof artifactSchema>;

const proppFunctionSchema = z.object({
  code:  z.string(),
  name:  z.string(),
  tier:  EpistemicTierSchema,
});

const campbellStageSchema = z.object({
  stage: z.string(),
  tier:  EpistemicTierSchema,
});

const tmiMotifSchema = z.object({
  code:  z.string(),
  name:  z.string(),
  tier:  EpistemicTierSchema,
});

export type ProppFunction  = ZodType.infer<typeof proppFunctionSchema>;
export type CampbellStage  = ZodType.infer<typeof campbellStageSchema>;
export type TmiMotif       = ZodType.infer<typeof tmiMotifSchema>;
export type BakhtinChronotope = { code: string; name: string; tier: EpistemicTier };

const episodes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/episodes' }),
  schema: z.object({
    nas:       z.string(),
    tradition: z.enum([
      'gilgamesh', 'iliad', 'atrahasis', 'genesis',
      'mahabharata', 'ramayana', 'aeneid', 'shahnameh',
      'odyssey', 'tale-of-genji', 'beowulf', 'nibelungenlied', 'poetic-edda',
      'sundiata', 'kalevala', 'journey-to-the-west',
      'naruto', 'dune', 'warhammer-40k',
    ]),
    tablet:    z.string(),
    tier:      EpistemicTierSchema,
    layers:    z.array(z.enum(['surface', 'translated', 'scholaria'])),
    parallelTo:       z.string().optional(),
    artifacts:        z.array(artifactSchema).optional(),
    proppFunctions:   z.array(proppFunctionSchema).optional(),
    bakhtinChronotopes: z.array(z.object({
      code: z.string(),
      name: z.string(),
      tier: EpistemicTierSchema,
    })).optional(),
    tmiMotifs:        z.array(tmiMotifSchema).optional(),
    title_en:  z.string(),
    title_ru:  z.string(),
    desc_en:   z.string(),
    desc_ru:   z.string(),
    body: z.object({
      surface:    z.object({ en: z.string(), ru: z.string() }).optional(),
      translated: z.object({ en: z.string(), ru: z.string() }).optional(),
      scholaria:  z.object({ en: z.string(), ru: z.string() }).optional(),
    }).optional(),
    methodologyFitWarning: z.boolean().default(false),
    methodologyFitNote:    z.string().optional(),
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
