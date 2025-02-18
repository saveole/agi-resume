import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://your-domain.com',
  integrations: [
    tailwind(),
    react(),
    sitemap()
  ],
  vite: {
    ssr: {
      noExternal: ['@fontsource-variable/inter', '@fontsource/fira-code']
    }
  }
});