import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://eng-telur4.github.io',
  integrations: [tailwind()]
});