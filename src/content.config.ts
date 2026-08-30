import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Selected research work / research projects.
// Add new items by creating a new Markdown file in src/content/research/.
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // e.g. "May 2026 – Present"
    period: z.string().optional(),
    // e.g. "Under review at NeurIPS 2026" or "Accepted at ICML AI4Math Workshop 2026"
    status: z.string().optional(),
    // e.g. "Graduate Researcher, KTH RPL" or "Sole author"
    collaborators: z.string().optional(),
    image: z.string().optional(),
    codeUrl: z.string().url().optional(),
    paperUrl: z.string().url().optional(),
    // Lower numbers are displayed first; falls back to file order.
    order: z.number().optional(),
  }),
});

export const collections = { research };
