import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const projectCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/projects",
  }),

  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      publishDate: z.coerce.date(),
      cover: image(),
      techs: z.array(z.string()),
      category: z.array(z.string()),
      url: z.string().url(),
    }),
});

const categoriesProjectCollection = defineCollection({
  loader: glob({
    pattern: "**/*.json",
    base: "./src/content/projects",
  }),

  schema: z.object({
    id: z.string(),
    name: z.string(),
    color: z.string(),
  }),
});

export const collections = {
  projects: projectCollection,
  categoriesProjects: categoriesProjectCollection,
};