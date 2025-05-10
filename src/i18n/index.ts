import en from "./en.json";
import es from "./es.json";
import fr from "./fr.json";

import type { i18nWebsite } from "src/types";

export function getI18n({
	currentLocale,
}: { currentLocale: string | undefined }): i18nWebsite {
	if (currentLocale === "es") return es;
	if (currentLocale === "en") return en;
	if (currentLocale === "fr") return fr;
	return es;
}
