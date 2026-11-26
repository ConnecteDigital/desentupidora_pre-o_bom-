// Bairros por cidade. Para adicionar bairros, basta incluir registros no arquivo
// da cidade (src/data/bairros/<cidade>.ts). Para ligar uma cidade nova, importe o
// arquivo dela aqui.

import type { Bairro } from '../tipos';
import { bairros as rioDeJaneiro } from './rio-de-janeiro';
import { bairros as vilaVelha } from './vila-velha';
import { bairros as vitoria } from './vitoria';
import { bairros as serra } from './serra';
import { bairros as cariacica } from './cariacica';
import { bairros as petropolis } from './petropolis';
import { bairros as cuiaba } from './cuiaba';
import { bairros as juizDeFora } from './juiz-de-fora';
import { bairros as joaoPessoa } from './joao-pessoa';

const porCidade: Record<string, Bairro[]> = {
  'rio-de-janeiro': rioDeJaneiro,
  'vila-velha': vilaVelha,
  'vitoria': vitoria,
  'serra': serra,
  'cariacica': cariacica,
  'petropolis': petropolis,
  'cuiaba': cuiaba,
  'juiz-de-fora': juizDeFora,
  'joao-pessoa': joaoPessoa,
};

export function bairrosDaCidade(cidadeSlug: string): Bairro[] {
  return porCidade[cidadeSlug] ?? [];
}

export function bairroPath(cidadeSlug: string, bairro: Bairro) {
  return `/desentupidora-em-${cidadeSlug}/${bairro.slug}/`;
}

// Agrupa por zona, mantendo a ordem em que as zonas aparecem no arquivo
export function bairrosPorZona(cidadeSlug: string) {
  const grupos: { zona: string; bairros: Bairro[] }[] = [];
  for (const b of bairrosDaCidade(cidadeSlug)) {
    let g = grupos.find((x) => x.zona === b.zona);
    if (!g) grupos.push((g = { zona: b.zona, bairros: [] }));
    g.bairros.push(b);
  }
  return grupos;
}

// Vizinhos que têm página viram links; os demais aparecem só como texto
export function vizinhosDoBairro(cidadeSlug: string, bairro: Bairro) {
  const todos = bairrosDaCidade(cidadeSlug);
  return bairro.vizinhos.map((nome) => {
    const alvo = todos.find((b) => b.nome === nome && b.slug !== bairro.slug);
    return { nome, path: alvo ? bairroPath(cidadeSlug, alvo) : undefined };
  });
}
