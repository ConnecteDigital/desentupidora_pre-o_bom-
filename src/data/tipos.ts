// Tipos compartilhados pelos arquivos de dados.

export interface Faq {
  q: string;
  a: string;
}

export type ServicoSlug =
  | 'desentupimento-de-pia'
  | 'desentupimento-de-ralo'
  | 'desentupimento-de-vaso-sanitario'
  | 'desentupimento-de-cano'
  | 'desentupimento-de-esgoto'
  | 'desentupimento-de-coluna'
  | 'desentupimento-de-rede-pluvial'
  | 'limpeza-de-caixa-de-gordura'
  | 'hidrojateamento';

export interface Bairro {
  // usado na URL: /desentupidora-em-{cidade}/{slug}/
  slug: string;
  nome: string;
  // região ou zona da cidade (ex.: "Zona Sul")
  zona: string;
  // nomes de 3 a 5 bairros vizinhos; os que existirem no arquivo viram links
  vizinhos: string[];
  // 2 a 4 ruas, avenidas ou pontos de referência reais do bairro
  referencias: string[];
  // H1 da página (construção variada entre bairros)
  h1: string;
  // meta description única, até 155 caracteres
  metaDescription: string;
  // parágrafo de abertura escrito para o bairro
  abertura: string;
  // 1 ou 2 frases sobre o tipo de imóvel predominante
  imovel: string;
  // 1 ou 2 frases sobre o entupimento mais comum nesse tipo de imóvel
  problema: string;
  // serviço indicado para esse problema
  servico: ServicoSlug;
  // 3 perguntas específicas do bairro
  faq: Faq[];
}
