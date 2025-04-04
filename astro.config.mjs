import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    config: { path: './tailwind.config.js' }
  })],
  output: 'static',
  adapter: cloudflare(),
  site: 'https://projectkerk.nl',
});
