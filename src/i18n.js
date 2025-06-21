import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

import uaTranslation from './locales/ua/translation.json';
import enTranslation from './locales/en/translation.json';

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: 'ua',
    fallbackLng: {
      default: ['ua', 'en'],
    },

    interpolation: {
      escapeValue: false,
    },
    resources: {
      ua: {
        translation: uaTranslation,
      },
      en: {
        translation: enTranslation,
      },
    },
  });

export default i18n;
