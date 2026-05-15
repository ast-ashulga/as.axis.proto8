import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://ast-ashulga.github.io',
  base: '/as.axis.proto8',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
});
