export const locales = ['en', 'fr'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale = 'fr' as const;

export const localePrefix = 'as-needed';

export type Messages = typeof import('./messages/fr.json'); 