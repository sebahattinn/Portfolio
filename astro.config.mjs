// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  base: '/Portfolio/',
  site: 'https://sebahattinn.github.io/Portfolio',
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
