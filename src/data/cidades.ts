// Cidades atendidas (9 páginas). Cada cidade pertence a uma praça, e é a praça
// que define o telefone. As quatro cidades do Espírito Santo usam o mesmo número.

import type { Faq, ServicoSlug } from './tipos';
import { getPraca, telefoneExibicao, telHref, whatsappHref, type PracaId } from './pracas';

export interface Cidade {
  slug: string;
  nome: string;
  uf: string;
  estado: string;
  pracaId: PracaId;
  // "no Rio de Janeiro", "em Vitória", "na Serra"
  locativo: string;
  // "do Rio de Janeiro", "de Vitória", "da Serra"
  genitivo: string;
  // Só cidades publicadas geram páginas e entram no sitemap.
  // As demais entram na fase 2 (depois da aprovação do Rio de Janeiro).
  publicada: boolean;
  // Textos próprios da cidade (obrigatórios quando publicada)
  heroLead?: string;
  // parágrafos de "Por que a Preço Bom" com o contexto da cidade
  perfil?: string[];
  // uma frase por serviço, com a realidade daquela cidade
  servicos?: Partial<Record<ServicoSlug, string>>;
  faq?: Faq[];
}

export const cidades: Cidade[] = [
  {
    slug: 'rio-de-janeiro',
    nome: 'Rio de Janeiro',
    uf: 'RJ',
    estado: 'Rio de Janeiro',
    pracaId: 'rio-de-janeiro',
    locativo: 'no Rio de Janeiro',
    genitivo: 'do Rio de Janeiro',
    publicada: true,
    heroLead:
      'Pia parada, ralo voltando ou esgoto transbordando? Você chama, a gente vai até o seu endereço, avalia e passa o valor antes de começar. Sem taxa de visita.',
    perfil: [
      'O Rio mistura prédios de sessenta anos na Zona Sul, casas de vila e sobrados na Zona Norte e condomínios grandes na Zona Oeste. Cada um entope de um jeito: coluna de prédio antigo acumula gordura de dezenas de cozinhas, casa com quintal sofre com raiz e folha, e condomínio novo costuma ter problema na caixa de gordura coletiva.',
      'Por isso o primeiro passo do nosso atendimento é sempre olhar o imóvel. O técnico localiza o ponto do entupimento, explica o que encontrou e passa o orçamento ali mesmo. Você decide com o valor na mão, sem pagar nada pela visita.',
      'Em dia de chuva forte a cidade inteira sente: ralos de garagem, calhas e redes pluviais trabalham no limite. Atendemos essas emergências a qualquer hora, inclusive de madrugada, em domingos e em feriados.',
    ],
    servicos: {
      'desentupimento-de-pia':
        'No Rio, a pia de cozinha de apartamento antigo costuma desaguar direto na coluna do prédio, sem caixa de gordura individual, e por isso o entupimento volta quando só o sifão é limpo.',
      'desentupimento-de-ralo':
        'Em bairros de praia a areia que vem nos pés e nas roupas vai parar no ralo do box e da área de serviço, e nos bairros arborizados as folhas tomam os ralos de quintal e de garagem.',
      'desentupimento-de-vaso-sanitario':
        'Muitos banheiros cariocas ainda têm ramais antigos e com pouca inclinação, o que faz o vaso entupir com papel e objetos que em uma tubulação nova passariam.',
      'desentupimento-de-cano':
        'Tubulações de ferro e de barro ainda existem em muitos imóveis antigos da cidade, e a crosta que se forma por dentro reduz a passagem da água até o cano fechar.',
      'desentupimento-de-esgoto':
        'Casas e vilas da Zona Norte e da Zona Oeste costumam ter caixas de inspeção no quintal ou na calçada, e é nelas que o esgoto dá o primeiro sinal de que a rede está obstruída.',
      'desentupimento-de-coluna':
        'A cidade tem milhares de prédios das décadas de 1950 a 1970, com colunas que recebem o esgoto e a gordura de todos os andares e que precisam de limpeza periódica.',
      'desentupimento-de-rede-pluvial':
        'As chuvas de verão no Rio são curtas e muito fortes: calha, ralo de laje e tubo de queda com folhas não dão conta e a água procura outro caminho, geralmente para dentro do imóvel.',
      'limpeza-de-caixa-de-gordura':
        'Bares, restaurantes, quiosques e cozinhas de condomínio precisam manter a caixa de gordura limpa para não devolver mau cheiro e água suja para a cozinha.',
      hidrojateamento:
        'Para redes longas de condomínios, colunas de prédios e tubulações com gordura endurecida, o jato de água em alta pressão limpa a parede interna do cano em toda a extensão.',
    },
    faq: [
      {
        q: 'A Desentupidora Preço Bom atende 24 horas no Rio de Janeiro?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados, para casas, apartamentos, condomínios e empresas no Rio de Janeiro.',
      },
      {
        q: 'Quanto custa um desentupimento no Rio de Janeiro?',
        a: 'O valor depende do tipo de entupimento, do ponto onde ele está e do equipamento necessário. Por isso o orçamento é feito no local, é grátis e sem compromisso: você sabe o valor antes de o serviço começar.',
      },
      {
        q: 'Vocês cobram taxa de visita?',
        a: 'Não. A visita para avaliar o problema e passar o orçamento não tem custo. Você só paga se aprovar o serviço.',
      },
      {
        q: 'Em quanto tempo a equipe chega?',
        a: 'Chegamos em 20 minutos. O atendimento é feito por chamado: basta ligar ou mandar mensagem no WhatsApp informando o bairro e o que está acontecendo.',
      },
      {
        q: 'Quais serviços de desentupimento vocês fazem?',
        a: 'Desentupimento de pia, ralo, vaso sanitário, cano, esgoto, coluna de prédio e rede pluvial, limpeza de caixa de gordura e hidrojateamento. Trabalhamos somente com desentupimento.',
      },
      {
        q: 'Atendem condomínios e comércios?',
        a: 'Sim. O atendimento é residencial e comercial: casas, apartamentos, condomínios, lojas, restaurantes e empresas.',
      },
    ],
  },
  { slug: 'vila-velha', nome: 'Vila Velha', uf: 'ES', estado: 'Espírito Santo', pracaId: 'espirito-santo', locativo: 'em Vila Velha', genitivo: 'de Vila Velha', publicada: false },
  { slug: 'vitoria', nome: 'Vitória', uf: 'ES', estado: 'Espírito Santo', pracaId: 'espirito-santo', locativo: 'em Vitória', genitivo: 'de Vitória', publicada: false },
  { slug: 'serra', nome: 'Serra', uf: 'ES', estado: 'Espírito Santo', pracaId: 'espirito-santo', locativo: 'na Serra', genitivo: 'da Serra', publicada: false },
  { slug: 'cariacica', nome: 'Cariacica', uf: 'ES', estado: 'Espírito Santo', pracaId: 'espirito-santo', locativo: 'em Cariacica', genitivo: 'de Cariacica', publicada: false },
  { slug: 'petropolis', nome: 'Petrópolis', uf: 'RJ', estado: 'Rio de Janeiro', pracaId: 'petropolis', locativo: 'em Petrópolis', genitivo: 'de Petrópolis', publicada: false },
  { slug: 'cuiaba', nome: 'Cuiabá', uf: 'MT', estado: 'Mato Grosso', pracaId: 'cuiaba', locativo: 'em Cuiabá', genitivo: 'de Cuiabá', publicada: false },
  { slug: 'juiz-de-fora', nome: 'Juiz de Fora', uf: 'MG', estado: 'Minas Gerais', pracaId: 'juiz-de-fora', locativo: 'em Juiz de Fora', genitivo: 'de Juiz de Fora', publicada: false },
  { slug: 'joao-pessoa', nome: 'João Pessoa', uf: 'PB', estado: 'Paraíba', pracaId: 'joao-pessoa', locativo: 'em João Pessoa', genitivo: 'de João Pessoa', publicada: false },
];

export const cidadesPublicadas = cidades.filter((c) => c.publicada);

export function getCidade(slug: string): Cidade {
  const c = cidades.find((x) => x.slug === slug);
  if (!c) throw new Error(`Cidade não encontrada: ${slug}`);
  return c;
}

export function cidadesDaPraca(id: PracaId) {
  return cidades.filter((c) => c.pracaId === id);
}

export function cidadePath(c: Cidade) {
  return `/desentupidora-em-${c.slug}/`;
}

// Destino do seletor "Escolha sua cidade": a página da cidade. Enquanto a cidade
// não estiver publicada, leva ao card da praça na página inicial.
export function cidadeDestino(c: Cidade) {
  return c.publicada ? cidadePath(c) : `/#praca-${c.pracaId}`;
}

export function servicoNaCidadePath(c: Cidade, servicoSlug: string) {
  return `${cidadePath(c)}servicos/${servicoSlug}/`;
}

// Contato da cidade: sempre o telefone da praça dela.
// `local` entra na mensagem do WhatsApp (ex.: "Copacabana, Rio de Janeiro").
export function contatoDaCidade(c: Cidade, local?: string, assunto?: string) {
  const praca = getPraca(c.pracaId);
  return {
    praca,
    cidade: c.nome,
    telefone: telefoneExibicao(praca),
    tel: telHref(praca),
    whatsapp: whatsappHref(praca, local ?? c.nome, assunto),
  };
}
