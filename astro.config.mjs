// @ts-check
import { defineConfig, envField } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://xitry-game.com/",
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [sitemap()],

  vite: {
    plugins: [tailwindcss()],
    build: {
      minify: true,
      cssMinify: true
    },
  },

  i18n: {
    locales: ["en", "es", "fr"],
    defaultLocale: "es",
    routing: {
      prefixDefaultLocale: false
    },
  },

  env: {
    schema: {
      WEB3FORM_KEY: envField.string({ context: "client", access: "public" })
    }
  }
});
