// Valida os arquivos de bairros (node scripts/validar-bairros.mjs).
import { build } from 'esbuild';
import { readdirSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

const SERV = ['desentupimento-de-pia','desentupimento-de-ralo','desentupimento-de-vaso-sanitario','desentupimento-de-cano','desentupimento-de-esgoto','desentupimento-de-coluna','desentupimento-de-rede-pluvial','limpeza-de-caixa-de-gordura','hidrojateamento'];
const PROIB = [/fossa/i, /dedetiza/i, /encanador/i, /vazamento/i, /garantia/i, /R\$/, /Bom Preço/i, /Preço Bom 24/i, /—/, /\(\d{2}\) ?\d{4,5}-\d{4}/];
const dir = 'src/data/bairros';
let erros = 0; const perguntas = new Map(); const h1s = new Map(); const metas = new Map(); const aberturas = new Map();
const slugify = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
for (const f of readdirSync(dir).filter((x) => x.endsWith('.ts') && x !== 'index.ts')) {
  const out = `/tmp/vb-${f}.mjs`;
  await build({ entryPoints: [path.join(dir, f)], outfile: out, bundle: true, format: 'esm', logLevel: 'silent' });
  const { bairros } = await import(pathToFileURL(out).href + '?' + Date.now());
  const e = (b, m) => { erros++; console.log(`${f} › ${b?.nome ?? '?'}: ${m}`); };
  const slugs = new Set(); const nomes = new Set(bairros.map((b) => b.nome)); const dist = {};
  for (const b of bairros) {
    if (slugs.has(b.slug)) e(b, 'slug repetido'); slugs.add(b.slug);
    if (b.slug !== slugify(b.nome)) e(b, `slug diferente do nome: ${b.slug}`);
    if (!SERV.includes(b.servico)) e(b, 'servico inválido'); dist[b.servico] = (dist[b.servico] ?? 0) + 1;
    if (b.faq?.length !== 3) e(b, `${b.faq?.length} FAQs`);
    if (b.vizinhos.length < 3 || b.vizinhos.length > 5) e(b, `${b.vizinhos.length} vizinhos`);
    if (!b.vizinhos.some((v) => nomes.has(v) && v !== b.nome)) e(b, 'nenhum vizinho com página');
    if (b.vizinhos.includes(b.nome)) e(b, 'vizinho de si mesmo');
    if (b.referencias.length < 2 || b.referencias.length > 4) e(b, `${b.referencias.length} referências`);
    if (b.metaDescription.length > 160 || b.metaDescription.length < 110) e(b, `meta com ${b.metaDescription.length}`);
    if (b.h1.length > 68) e(b, `h1 com ${b.h1.length}`);
    if (!/desentup/i.test(b.h1)) e(b, 'h1 sem desentup');
    const palavras = b.abertura.split(/\s+/).length; if (palavras < 45 || palavras > 100) e(b, `abertura com ${palavras} palavras`);
    const tudo = JSON.stringify(b);
    for (const re of PROIB) { const m = tudo.match(re); if (m) e(b, `proibido: ${m[0]}`); }
    for (const m of tudo.matchAll(/(\S+) minutos/g)) if (m[1] !== '20') e(b, `tempo: ${m[0]}`);
    for (const m of tudo.matchAll(/(\S+ \S+) 20 minutos/g)) if (!/chegamos em/i.test(m[1])) e(b, `frase de tempo: ${m[0]}`);
    for (const q of b.faq ?? []) { if (perguntas.has(q.q)) e(b, `pergunta repetida com ${perguntas.get(q.q)}`); perguntas.set(q.q, `${f}/${b.nome}`); }
    for (const [mapa, v, n] of [[h1s, b.h1, 'h1'], [metas, b.metaDescription, 'meta'], [aberturas, b.abertura, 'abertura']]) { if (mapa.has(v)) e(b, `${n} repetido`); mapa.set(v, 1); }
  }
  console.log(f, bairros.length, 'bairros', [...new Set(bairros.map((b) => b.zona))].join(' | '), JSON.stringify(Object.values(dist)));
}
console.log(erros ? `${erros} problema(s)` : 'Bairros OK');
process.exit(erros ? 1 : 0);
