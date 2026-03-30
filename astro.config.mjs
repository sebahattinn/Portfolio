// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/Portfolio/',
  site: 'https://example.com',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  vite: {
    build: {
      cssMinify: true,
      minify: 'esbuild',
    },
  },
});
