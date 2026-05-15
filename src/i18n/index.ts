import type { Locale } from './types';
import { en } from './en';
import { ru } from './ru';

export { type Locale, type Translations } from './types';

const translations = { en, ru } as const;

export function t(locale: Locale) {
  return translations[locale];
}
