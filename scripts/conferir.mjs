// Conferência depois do build (npm run build && npm run conferir).
// Lê dist/ e verifica, página por página:
//  - telefone: páginas de praça só têm o número daquela praça (tel: e wa.me);
//    páginas sem praça não têm telefone, exceto início e contato (cards das 6 praças);
//  - mensagem do WhatsApp cita a cidade;
//  - um H1 por página, title e description únicos, canonical no domínio configurado;
//  - nada de .vercel.app e nenhum termo proibido.
// Gera relatorio-telefones.txt (página → número).
import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const DIST = 'dist';
const DOMINIO = 'https://www.desentupidoraprecobom24h.com.br';
const PRACAS = {
  'rio-de-janeiro': ['21999070443', 'Rio de Janeiro'],
  'vila-velha': ['27997036946', 'Vila Velha'],
  vitoria: ['27997036946', 'Vitória'],
  serra: ['27997036946', 'Serra'],
  cariacica: ['27997036946', 'Cariacica'],
  petropolis: ['24999038282', 'Petrópolis'],
  cuiaba: ['65998127656', 'Cuiabá'],
  'juiz-de-fora': ['32998192822', 'Juiz de Fora'],
  'joao-pessoa': ['83991367518', 'João Pessoa'],
};
const COM_CARDS = new Set(['/', '/contato/']);
const PROIBIDOS = [/fossa/i, /dedetiza/i, /encanador/i, /vazamento/i, /garantia/i, /Bom Preço/i, /R\$/, /vercel\.app/i, /Preço Bom 24/i, /a partir de (R\$|\d)/i];

async function* andar(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) yield* andar(p);
    else if (e.name.endsWith('.html')) yield p;
  }
}

const erros = [];
const linhas = [];
const titulos = new Map();
const descricoes = new Map();
let total = 0;
const porTipo = {};

for await (const arquivo of andar(DIST)) {
  total++;
  const html = await readFile(arquivo, 'utf8');
  const rota = '/' + path.relative(DIST, arquivo).replace(/index\.html$/, '').replace(/\\/g, '/');
  const erro = (m) => erros.push(`${rota}: ${m}`);

  const m = rota.match(/^\/desentupidora-em-([a-z-]+)\//);
  const tels = [...html.matchAll(/href="tel:\+55(\d+)"/g)].map((x) => x[1]);
  const was = [...html.matchAll(/href="https:\/\/wa\.me\/55(\d+)\?text=([^"]*)"/g)];
  const numeros = new Set([...tels, ...was.map((x) => x[1])]);
  // qualquer outro número com cara de telefone no texto visível
  const texto = html.replace(/<script[\s\S]*?<\/script>/g, '').replace(/<[^>]+>/g, ' ');
  const exibidos = new Set([...texto.matchAll(/\((\d{2})\) (\d{5})-(\d{4})/g)].map((x) => x[1] + x[2] + x[3]));
  const ld = [...html.matchAll(/"telephone":"\+55(\d+)"/g)].map((x) => x[1]);

  let tipo = 'geral';
  if (m) {
    const praca = PRACAS[m[1]];
    if (!praca) { erro('cidade desconhecida'); continue; }
    const [num, cidade] = praca;
    tipo = /\/servicos\//.test(rota) ? 'serviço na cidade' : rota.split('/').filter(Boolean).length > 1 ? 'bairro' : 'cidade';
    for (const n of new Set([...numeros, ...exibidos, ...ld])) if (n !== num) erro(`telefone de outra praça: ${n}`);
    if (!tels.includes(num)) erro('sem link tel: da praça');
    if (!was.some((x) => x[1] === num)) erro('sem link wa.me da praça');
    if (!ld.includes(num)) erro('JSON-LD sem o telefone da praça');
    if (!exibidos.has(num)) erro('telefone da praça não aparece no texto');
    for (const w of was) if (!decodeURIComponent(w[2]).includes(cidade)) erro('mensagem do WhatsApp não cita a cidade');
    linhas.push(`${rota}\t(${num.slice(0, 2)}) ${num.slice(2, 7)}-${num.slice(7)}`);
  } else if (COM_CARDS.has(rota)) {
    const esperado = new Set(Object.values(PRACAS).map((p) => p[0]));
    for (const n of esperado) if (!numeros.has(n)) erro(`card sem o número ${n}`);
    for (const n of numeros) if (!esperado.has(n)) erro(`número desconhecido ${n}`);
    linhas.push(`${rota}\tcards das 6 praças`);
  } else {
    if (numeros.size || exibidos.size || ld.length) erro(`página sem praça com telefone: ${[...numeros, ...exibidos, ...ld].join(', ')}`);
    if (rota !== '/404.html' && !html.includes('Escolha sua cidade')) erro('sem o seletor "Escolha sua cidade"');
    linhas.push(`${rota}\tsem telefone (seletor de cidade)`);
  }
  porTipo[tipo] = (porTipo[tipo] ?? 0) + 1;

  const h1 = (html.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) erro(`${h1} H1`);
  const title = html.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  const canon = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  if (!title) erro('sem title');
  else { if (titulos.has(title)) erro(`title repetido com ${titulos.get(title)}`); titulos.set(title, rota); if (title.length > 65) erro(`title com ${title.length} caracteres`); }
  if (!desc) erro('sem description');
  else { if (descricoes.has(desc)) erro(`description repetida com ${descricoes.get(desc)}`); descricoes.set(desc, rota); if (desc.length > 160) erro(`description com ${desc.length} caracteres`); }
  if (rota !== '/404.html' && canon !== DOMINIO + rota) erro(`canonical errado: ${canon}`);
  if (!html.includes('application/ld+json')) erro('sem JSON-LD');
  for (const re of PROIBIDOS) { const a = texto.match(re) ?? html.match(re); if (a) erro(`termo proibido: "${a[0]}"`); }
  for (const t of texto.matchAll(/(\d+) minutos/g)) if (t[1] !== '20') erro(`tempo diferente de 20 minutos: ${t[0]}`);
}

linhas.sort();
await writeFile('relatorio-telefones.txt', `Total de páginas: ${total}\n${JSON.stringify(porTipo)}\n\n${linhas.join('\n')}\n`);
console.log(`Páginas: ${total}`, porTipo);
if (erros.length) { console.log(`\n${erros.length} problema(s):\n` + erros.slice(0, 80).join('\n')); process.exit(1); }
console.log('Tudo certo: telefones, links, H1, titles, descriptions e canonicals conferidos.');
