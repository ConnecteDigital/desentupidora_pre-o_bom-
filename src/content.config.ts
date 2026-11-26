import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    titulo: z.string(),
    // título curto para o <title> (até ~50 caracteres)
    tituloSeo: z.string(),
    resumo: z.string(),
    data: z.coerce.date(),
    // serviço relacionado (slug), para o link no fim do artigo
    servico: z.string().optional(),
  }),
});

export const collections = { blog };
