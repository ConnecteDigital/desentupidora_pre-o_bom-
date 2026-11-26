// Sitemaps gerados a partir dos arquivos de dados e da variável única do domínio.
import { urlAbsoluta } from '../data/site';

export function urlset(paths: string[]) {
  const itens = paths.map((p) => `  <url><loc>${urlAbsoluta(p)}</loc></url>`).join('\n');
  return xml(`<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${itens}\n</urlset>`);
}

export function sitemapindex(paths: string[]) {
  const itens = paths.map((p) => `  <sitemap><loc>${urlAbsoluta(p)}</loc></sitemap>`).join('\n');
  return xml(`<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${itens}\n</sitemapindex>`);
}

function xml(corpo: string) {
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n${corpo}\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
