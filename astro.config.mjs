// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
	site: "https://angelito91.github.io/",
	base: "/xitry",
	vite: {
		plugins: [tailwindcss()],
	},
	i18n: {
		locales: ["en", "es", "fr"],
		defaultLocale: "es",
		routing: {
			prefixDefaultLocale: false,
		},
	},
});
