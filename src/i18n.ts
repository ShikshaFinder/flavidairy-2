// Can be imported from a shared config
export const locales = ['en', 'fr', 'de', 'es'] as const;
export type Locale = typeof locales[number];
