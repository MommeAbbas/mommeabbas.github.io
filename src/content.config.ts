import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const entryFields = {
  title: z.string(),
  description: z.string(),
  // e.g. "May 2026 – Present"
  period: z.string().optional(),
  // e.g. "Accepted at ICML AI4Math Workshop 2026"
  status: z.string().optional(),
  // e.g. "RPL" or "Sole author"
  collaborators: z.string().optional(),
  image: z.string().optional(),
  // Short, silent, looping clip (e.g. an mp4) shown in place of `image`.
  video: z.string().optional(),
  codeUrl: z.string().url().optional(),
  // Makes the title a link, e.g. to an event or organisation page.
  url: z.string().url().optional(),
  // Lower numbers are displayed first.
  order: z.number().optional(),
};

// Research work. Add items as Markdown files in src/content/research/.
const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    ...entryFields,
    paperUrl: z.string().url().optional(),
  }),
});

// Non-research projects (no paper). Add items in src/content/projects/.
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object(entryFields),
});

export const collections = { research, projects };
