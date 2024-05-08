// i18n.js

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const languages = ['en', 'it'];

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: 'en', // Fallback language if the detected language is not available
		whitelist: languages, // Supported languages
		backend: {
			loadPath: '/locales/{{lng}}/{{ns}}.json', // Path to your JSON files
		},
	});

export default i18n;
