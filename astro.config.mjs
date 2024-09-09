import { defineConfig, sharpImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import partytown from '@astrojs/partytown';

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: "https://scplasticproduct.pages.dev",
  image: {
    service: sharpImageService(),
  },
  integrations: [tailwind(), mdx(), sitemap(), icon(), partytown(), vue({ devtools: true })],
  i18n: {
    defaultLocale: "th",
    locales: ["th", "en"]
  }
});