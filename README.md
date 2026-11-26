# Desentupidora Preço Bom

Site estático (Astro) da Desentupidora Preço Bom, publicado na Vercel.
Domínio: https://desentupidoraprecobom24h.com.br (definido em `site`, no `astro.config.mjs`, e usado em canonical, sitemap, Open Graph e JSON-LD).

## Onde mexer

| O que | Arquivo |
|---|---|
| Domínio | `astro.config.mjs` (`site`) |
| Nome da marca e mensagens fixas | `src/data/site.ts` |
| Telefones por praça | `src/data/pracas.ts` |
| Cidades, textos e perguntas de cada cidade | `src/data/cidades.ts` |
| Serviços | `src/data/servicos.ts` |
| Bairros (um arquivo por cidade) | `src/data/bairros/` |
| Tag do Google e rótulos de conversão | `src/data/rastreamento.ts` |
| Logo (hoje em texto) | `src/components/Brand.astro` |
| Artigos do blog | `src/content/blog/` |

Regra principal: a página de uma praça mostra **somente** o telefone daquela praça. As páginas sem praça mostram o seletor "Escolha sua cidade".

### Adicionar um bairro
Inclua um registro no arquivo da cidade em `src/data/bairros/`. A página, os links internos e o sitemap são gerados sozinhos.

### Publicar uma cidade nova
1. Crie `src/data/bairros/<cidade>.ts` e importe em `src/data/bairros/index.ts`.
2. Em `src/data/cidades.ts`, preencha `heroLead`, `perfil`, `servicos` e `faq` da cidade e mude `publicada` para `true`.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run conferir
```

`npm run conferir` roda depois do build e confere o telefone de cada página, os links de ligação e WhatsApp, H1, title, description e canonical. Gera `relatorio-telefones.txt`.
