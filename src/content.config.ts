// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";

// 2. Define your collection(s)
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/blog" }),
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    snippet: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
    author: z.string().default("Astroship"),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

const teamCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/team" }),
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
});

const contactCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/contact" }),
  schema: z.object({
    address: z.string(),
    tels: z.array(z.string()),
    email: z.string().email(),
  }),
});

const productCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/contents/product" }),
  schema: z.object({
    draft: z.boolean(),
    title: z.string(),
    publishDate: z.string(),
    category: z.string(),
    tags: z.array(z.string()),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/contents"
export const collections = {
  blog: blogCollection,
  team: teamCollection,
  contact: contactCollection,
  product: productCollection,
};
