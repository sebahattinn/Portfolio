import en from './en.json';
import tr from './tr.json';

export type Language = 'en' | 'tr';

export const languages: Record<Language, string> = {
  en: 'EN',
  tr: 'TR',
};

export const defaultLanguage: Language = 'en';

const translations: Record<Language, typeof en> = {
  en,
  tr,
};

export function getLanguageFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) {
    return lang as Language;
  }
  return defaultLanguage;
}

export function useTranslations(lang: Language) {
  return translations[lang];
}

export function getRouteFromUrl(url: URL): string | undefined {
  const [, lang, ...rest] = url.pathname.split('/');
  if (lang in translations) {
    return rest.join('/');
  }
  return url.pathname;
}
