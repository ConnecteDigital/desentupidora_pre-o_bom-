// Praças atendidas. Cada praça tem UM telefone, que é o mesmo para ligação e WhatsApp.
// Regra mais importante do site: a página de uma praça só mostra o telefone dela.

import { site } from './site';

export type PracaId = 'rio-de-janeiro' | 'espirito-santo' | 'petropolis' | 'cuiaba' | 'juiz-de-fora' | 'joao-pessoa';

export interface Praca {
  id: PracaId;
  nome: string;
  uf: string;
  // DDD + número, só dígitos (sem o 55)
  telefone: string;
}

export const pracas: Praca[] = [
  { id: 'rio-de-janeiro', nome: 'Rio de Janeiro', uf: 'RJ', telefone: '21999070443' },
  { id: 'espirito-santo', nome: 'Espírito Santo', uf: 'ES', telefone: '27997036946' },
  { id: 'petropolis', nome: 'Petrópolis', uf: 'RJ', telefone: '24999038282' },
  { id: 'cuiaba', nome: 'Cuiabá', uf: 'MT', telefone: '65998127656' },
  { id: 'juiz-de-fora', nome: 'Juiz de Fora', uf: 'MG', telefone: '32998192822' },
  { id: 'joao-pessoa', nome: 'João Pessoa', uf: 'PB', telefone: '83991367518' },
];

export function getPraca(id: PracaId): Praca {
  const p = pracas.find((x) => x.id === id);
  if (!p) throw new Error(`Praça não encontrada: ${id}`);
  return p;
}

// (21) 99907-0443
export function telefoneExibicao(p: Praca) {
  const t = p.telefone;
  return `(${t.slice(0, 2)}) ${t.slice(2, 7)}-${t.slice(7)}`;
}

// tel:+5521999070443
export function telHref(p: Praca) {
  return `tel:+55${p.telefone}`;
}

// +5521999070443 (JSON-LD)
export function telefoneE164(p: Praca) {
  return `+55${p.telefone}`;
}

// https://wa.me/5521999070443?text=... com a cidade (e o bairro, se houver) na mensagem
export function whatsappHref(p: Praca, local: string, assunto = 'preciso de um desentupimento') {
  const msg = `Olá! Vim pelo site da ${site.name} e ${assunto}. Local: ${local}.`;
  return `https://wa.me/55${p.telefone}?text=${encodeURIComponent(msg)}`;
}
