/*
  lang.js
  Assembla il dizionario delle traduzioni da tutte le lingue separate.
  Dipende da:
  - services/i18n/lang.it.js → translationsIT
  - services/i18n/lang.en.js → translationsEN
  - services/i18n/lang.de.js → translationsDE
  - services/i18n/lang.es.js → translationsES
  - services/i18n/lang.fr.js → translationsFR
*/

/* global translationsIT, translationsEN, translationsDE, translationsES, translationsFR */

const translations = {
  it: translationsIT,
  en: translationsEN,
  de: translationsDE,
  es: translationsES,
  fr: translationsFR
};