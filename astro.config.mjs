import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://saveole.github.io',  // 修改为你的 GitHub Pages 地址
  base: '/agi-resume',  // 保持不变
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