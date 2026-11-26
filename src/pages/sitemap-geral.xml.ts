import { getCollection } from 'astro:content';
import { servicos, servicoPath } from '../data/servicos';
import { urlset } from '../lib/sitemap';

export const GET = async () => {
  const posts = await getCollection('blog');
  return urlset([
    '/',
    '/servicos/',
    ...servicos.map(servicoPath),
    '/area-de-atendimento/',
    '/sobre/',
    '/contato/',
    '/blog/',
    ...posts.map((p) => `/blog/${p.id}/`),
    '/politica-de-privacidade/',
  ]);
};
