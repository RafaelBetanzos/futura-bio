import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// For GitHub Pages: set site to your GitHub URL and base to the repo name.
// If you use a custom domain (e.g. futurabio.com), remove `base` and set `site` to your domain.
export default defineConfig({
  site: 'https://rafabetanzos.github.io',
  base: '/futura-bio',
  output: 'static',
  integrations: [tailwind()],
});
