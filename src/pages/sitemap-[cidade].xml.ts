import { cidadesPublicadas, cidadePath, servicoNaCidadePath, type Cidade } from '../data/cidades';
import { servicos } from '../data/servicos';
import { bairrosDaCidade, bairroPath } from '../data/bairros';
import { urlset } from '../lib/sitemap';

export function getStaticPaths() {
  return cidadesPublicadas.map((cidade) => ({ params: { cidade: cidade.slug }, props: { cidade } }));
}

export const GET = ({ props }: { props: { cidade: Cidade } }) => {
  const { cidade } = props;
  return urlset([
    cidadePath(cidade),
    ...servicos.map((s) => servicoNaCidadePath(cidade, s.slug)),
    ...bairrosDaCidade(cidade.slug).map((b) => bairroPath(cidade.slug, b)),
  ]);
};
