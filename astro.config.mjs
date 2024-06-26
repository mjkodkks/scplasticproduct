import { defineConfig, squooshImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: "https://www.scplasticproduct.com",
  image: {
    service: squooshImageService(),
  },
  integrations: [tailwind(), mdx(), sitemap(), icon(), partytown()],
  i18n: {
    defaultLocale: "th",
    locales: ["th", "en"],
  }
});
