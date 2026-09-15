import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const writing = defineCollection({
  loader: glob({ base: './src/content/writing', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    /** Rough reading time in minutes. Computed at build time if omitted. */
    readingTime: z.number().optional(),
    /** Surfaced on the homepage. */
    featured: z.boolean().default(false),
    /** Hidden from listings and excluded from the sitemap. */
    draft: z.boolean().default(false),
    /** Two-line abstract shown on the article header. */
    summary: z.string().optional(),
  }),
});

export const collections = { writing };
