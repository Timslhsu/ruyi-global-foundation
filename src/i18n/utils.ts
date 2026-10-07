import en from './en';
import zh from './zh';

export const languages = { en: 'English', zh: '中文' } as const;
export type Lang = keyof typeof languages;

const dictionaries = { en, zh };

export function useContent(lang: Lang) {
  return dictionaries[lang];
}

// Deployment base from astro.config.mjs `base`, without a trailing slash ('' at the domain root).
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix a root-relative path (page or public asset) with the deployment base. */
export function withBase(path: string): string {
  return `${BASE}${path}`;
}

/** Localize an English-root path, e.g. ('zh', '/about') -> '<base>/zh/about'. */
export function localizePath(lang: Lang, path: string): string {
  if (lang === 'en') return withBase(path);
  return withBase(path === '/' ? '/zh/' : `/zh${path}`);
}

/** Strip the deployment base and locale prefix from a pathname, returning the English-root path. */
export function basePath(pathname: string): string {
  const withoutBase = BASE && pathname.startsWith(BASE) ? pathname.slice(BASE.length) : pathname;
  const stripped = withoutBase.replace(/^\/zh(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}
