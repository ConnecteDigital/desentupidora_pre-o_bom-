import { defineConfig } from 'astro/config';

// ÚNICA variável do domínio. Canonical, sitemap, Open Graph, JSON-LD e links
// absolutos saem daqui (import.meta.env.SITE). Nunca usar o endereço .vercel.app.
export default defineConfig({
  site: 'https://www.desentupidoraprecobom24h.com.br',
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
});
