---
description: "Use when creating, editing, or adding content to this Astro + markdown CMS project. Covers content collections, frontmatter schemas, i18n, component patterns, and styling conventions for scplasticproduct site."
applyTo: "src/**"
---

# SC Plastic Product — Project Instructions

## Tech Stack

- **Astro 5** — Static site framework; pages and layouts use `.astro` files
- **Vue 3** (Composition API + `<script setup lang="ts">`) — Interactive components only
- **Tailwind CSS v4** + Typography plugin — All styling; no custom CSS unless Tailwind is insufficient
- **MDX / Markdown** — Content-as-code CMS via Astro Content Collections
- **GSAP + ScrollTrigger** — Animation; used in `.astro` island scripts
- **Package manager**: `pnpm`
- **TypeScript** strict mode; path aliases: `@components/*`, `@layouts/*`, `@assets/*`, `@utils/*`, `@lib/*`, `@pages/*`

---

## Content CMS — Markdown Files

This project uses **Astro Content Collections** as its CMS. Content lives in `src/contents/` and is edited via markdown files. Collections are defined in `src/content.config.ts`.

### Collections

| Collection | Location | Purpose |
|---|---|---|
| `blog` | `src/contents/blog/*.md` | Blog articles |
| `product` | `src/contents/product/*.md` | Product pages |
| `contact` | `src/contents/contact/{th,en}/contact.md` | Contact info per locale |

### Adding / Editing Content

- **Add a product**: create a new `.md` file in `src/contents/product/`. The filename becomes the URL slug: `/product/<filename>`.
- **Add a blog post**: create a `.md` file in `src/contents/blog/`. The filename becomes the URL slug.
- **Edit contact info**: edit the `.md` in `src/contents/contact/th/contact.md` (Thai) or `src/contents/contact/en/contact.md` (English).
- Set `draft: true` to hide an entry from production without deleting it.

### Frontmatter Schemas

**Product** (`src/contents/product/*.md`):
```yaml
---
draft: false
title: "ชื่อสินค้า"           # required
publishDate: "2024-01-01 00:00"
category: "product"
author: "Mydear"
tags: [product]
---

เนื้อหาสินค้าเป็น Markdown...
```

**Blog** (`src/contents/blog/*.md`):
```yaml
---
draft: false
title: "Article Title"         # required
snippet: "Short description"   # required; shown in blog list
image:
  src: "https://..."
  alt: "Image description"
publishDate: "2024-01-01 00:00"
category: "Tutorials"
author: "Name"
tags: [tag1, tag2]
---

Article body in Markdown...
```

**Contact** (`src/contents/contact/{th,en}/contact.md`):
```yaml
---
address: "ที่อยู่บริษัท"        # required
tels:
  - "02-xxx-xxxx"
  - "08x-xxx-xxxx"
email: "contact@example.com"
---
```

> Do not add fields outside the defined schema — they are ignored and cause TypeScript errors.

---

## i18n Conventions

- **Default locale**: `th` (Thai) — pages at `src/pages/`
- **English locale**: pages mirrored at `src/pages/en/`
- Use `Astro.currentLocale` (`"th"` | `"en"`) to branch locale-specific content
- Locale-scoped content uses folder prefix: `src/contents/contact/th/` and `src/contents/contact/en/`
- When filtering locale content, split `entry.id` by `"/"` and compare the first segment to `currentLocale`

```astro
const currentLocale = Astro.currentLocale;
const localData = list.find(({ id }) => id.split("/")[0] === currentLocale);
```

---

## Component Patterns

### Astro (`.astro`) — default choice
Use for all static layout, sections, and content rendering. Astro components have zero client-side JS unless an explicit `client:*` directive or `<script>` is used.

```astro
---
import Container from "@components/container.astro";
// Fetch content here
---
<Container>
  <slot />
</Container>
```

### Vue (`.vue`) — interactive only
Use Vue only when the component needs reactivity, event listeners, or client-side state. Always use Composition API with `<script setup lang="ts">`.

```vue
<script setup lang="ts">
const isOpen = ref(false);
</script>
```

Mount Vue components in Astro with `client:load` (or `client:idle` for below-fold content):
```astro
<Navbar client:load menuitems={items} />
```

### When to use which
| Scenario | Use |
|---|---|
| Static section, layout, page | `.astro` |
| Navbar, mobile toggle, accordion | `.vue` |
| Markdown content rendering | `.astro` with `ContentLayout` |
| Animation (GSAP) | `<script>` inside `.astro` |

---

## File & Image Conventions

- Product/project images go in `src/assets/products/` or the relevant subfolder under `src/assets/`
- Use Astro's `<Image>` component or `import.meta.glob()` for optimized images
- Project gallery images are loaded via `import.meta.glob('/src/assets/project/*')`
- No images should be placed in `public/` unless they need a stable URL (e.g., OG images, favicons)

---

## Styling

- Use **Tailwind CSS v4 utility classes** exclusively
- The `@tailwindcss/typography` plugin provides `prose` classes for markdown-rendered content — wrap `<Content />` in a `<div class="prose ...">` element
- Global styles only in `src/global.css` and `src/styles/tailwind.css` — do not add `<style>` blocks to components unless scoped and unavoidable

---

## Adding a New Page

1. Create `src/pages/<name>.astro` (Thai) and `src/pages/en/<name>.astro` (English)
2. Wrap the page with `<Layout>` from `@layouts/Layout.astro`
3. If the page renders markdown content, use `<ContentLayout>` instead
4. Add the page to the navbar menu items array in the component that builds the nav

## Adding a New Content Collection

1. Add a new Zod schema export in `src/content.config.ts`
2. Create the folder `src/contents/<collection-name>/`
3. Create the dynamic route at `src/pages/<name>/[id].astro` using `getStaticPaths` + `getCollection`

```astro
---
import { getCollection } from "astro:content";
export async function getStaticPaths() {
  const entries = await getCollection("myCollection");
  return entries
    .filter(({ data }) => !data.draft)
    .map((entry) => ({ params: { id: entry.id }, props: { entry } }));
}
const { entry } = Astro.props;
const { Content } = await entry.render();
---
```
