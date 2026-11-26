import type { ImageMetadata } from 'astro';

// Uma foto por serviço: src/assets/fotos/<slug-do-serviço>.webp (ou .jpg).
// Para trocar, substitua o arquivo. Serviço sem foto mostra só o ícone.
const arquivos = import.meta.glob<{ default: ImageMetadata }>('../assets/fotos/*.{webp,jpg,jpeg,png}', { eager: true });

const alts: Record<string, string> = {
  'desentupimento-de-pia': 'Técnico de luvas passando o cabo da máquina pelo ralo da pia',
  'desentupimento-de-ralo': 'Grelha do ralo sendo retirada com sujeira acumulada',
  'desentupimento-de-vaso-sanitario': 'Cabo de desentupimento sendo passado pelo vaso sanitário',
  'desentupimento-de-esgoto': 'Máquina de cabo rotativo desobstruindo a rede de esgoto pela caixa na calçada',
};

export interface Foto {
  src: ImageMetadata;
  alt: string;
}

export function fotoDoServico(slug: string): Foto | undefined {
  const chave = Object.keys(arquivos).find((k) => k.replace(/^.*\/|\.\w+$/g, '') === slug);
  if (!chave) return undefined;
  return { src: arquivos[chave].default, alt: alts[slug] ?? 'Serviço de desentupimento' };
}
