// Dados centrais da marca. Altere aqui e o site inteiro é atualizado.
// O domínio NÃO fica aqui: vem de `site` no astro.config.mjs (import.meta.env.SITE).

export const site = {
  // Nome exibido. Nunca "Bom Preço" e nunca com "24h" (o 24h existe só no domínio).
  name: 'Desentupidora Preço Bom',
  shortName: 'Preço Bom',
  // Domínio sem barra no final, vindo da variável única do astro.config
  url: (import.meta.env.SITE ?? '').replace(/\/$/, ''),
  // Única promessa de tempo permitida, igual em todas as praças
  chegada: 'Chegamos em 20 minutos',
  description:
    'Desentupidora 24 horas com preço justo: orçamento grátis no local e sem taxa de visita. Chegamos em 20 minutos. Atendimento residencial e comercial.',
};

// Mensagens fixas da marca (hero, faixa de diferenciais e chamadas de todas as praças)
export const mensagens = {
  preco: 'Preço bom de verdade: orçamento grátis e sem compromisso',
  chegada: 'Chegamos em 20 minutos',
  plantao: 'Atendimento 24 horas, todos os dias, inclusive domingos e feriados',
  emergencia: 'Serviços emergenciais',
  publico: 'Atendimento residencial e comercial',
  publicoDetalhe: 'Casas, apartamentos, condomínios, lojas, restaurantes e empresas',
};

// Caminho absoluto a partir da variável única do domínio
export function urlAbsoluta(path: string) {
  return new URL(path, import.meta.env.SITE).href;
}
