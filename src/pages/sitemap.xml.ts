// Índice: um sitemap geral e um por cidade publicada.
import { cidadesPublicadas } from '../data/cidades';
import { sitemapindex } from '../lib/sitemap';

export const GET = () =>
  sitemapindex(['/sitemap-geral.xml', ...cidadesPublicadas.map((c) => `/sitemap-${c.slug}.xml`)]);
