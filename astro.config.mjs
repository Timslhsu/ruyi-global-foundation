// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  // GitHub Pages project site. When a custom domain is ready, set `site` to it and remove `base`.
  site: 'https://timslhsu.github.io',
  base: '/ruyi-global-foundation',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'en', locales: { en: 'en-US', zh: 'zh-TW' } },
    }),
  ],
  vite: { plugins: [tailwindcss()] },
});
