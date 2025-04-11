import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import { siteConfig } from './src/data/siteConfig';

export default defineConfig({
  site: siteConfig.siteUrl,
  integrations: [
    tailwind(),
    sitemap({
      changefreq: siteConfig.sitemap.changefreq,
      priority: siteConfig.sitemap.priority,
      filter: (page) => {
        // Exclude 404 page from sitemap
        return !page.includes('/404/') && page !== `${siteConfig.siteUrl}/404`;
      }
    })
  ]
});
