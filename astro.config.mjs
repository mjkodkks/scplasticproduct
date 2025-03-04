import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: "https://scplasticproduct.pages.dev",
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        limitInputPixels: false,
      },
    },
  },
  integrations: [mdx(), sitemap(), icon(), vue({ devtools: true })],
  i18n: {
    defaultLocale: "th",
    locales: ["th", "en"]
  },
  vite: {
    plugins: [tailwindcss()],
  },
  experimental: {
    svg: true,
  }
});