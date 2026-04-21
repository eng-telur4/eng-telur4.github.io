// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://eng-telur4.github.io',
  base: 'eng-telur4.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});