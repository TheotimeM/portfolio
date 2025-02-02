// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { githubPages } from 'astro/github';
// https://astro.build/config
export default defineConfig({
    site: 'https://TheotimeM.github.io/', // Mets l'URL de ton GitHub Pages
    base: '/portfolio/', // Mets le nom de ton repo ici
    output: 'static',
    adapter: githubPages(),
    integrations: [sitemap()],
});
