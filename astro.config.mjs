// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://theotimem.github.io/', // Mets l'URL de ton GitHub Pages
    base: '/portfolio/', // Mets le nom de ton repo ici
});
