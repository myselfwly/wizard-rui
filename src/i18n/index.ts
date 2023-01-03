import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import en from "./en/translation.json";
import zh from "./zh/translation.json";
i18n
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		debug: true,
		fallbackLng: "en",
		interpolation: {
			escapeValue: false
		},
		resources: {
			en: {
				translation: { ...en }
			},
			zh: {
				translation: { ...zh }
			}
		}
	});
