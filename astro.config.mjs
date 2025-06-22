// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://xitry-game.com/",
	vite: {
		plugins: [tailwindcss()],
		build: {
			minify: true,
			cssMinify: true,
			
		},
	},
	i18n: {
		locales: ["en", "es", "fr"],
		defaultLocale: "es",
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
