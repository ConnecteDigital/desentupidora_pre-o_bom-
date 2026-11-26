// JSON-LD. Sem endereço físico: só areaServed. O telefone é sempre o da praça da página.

import { site, urlAbsoluta } from './site';
import { cidades, cidadePath, type Cidade } from './cidades';
import { getPraca, pracas, telefoneE164 } from './pracas';
import type { Faq } from './tipos';
import type { Servico } from './servicos';

const horario = {
  '@type': 'OpeningHoursSpecification',
  dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  opens: '00:00',
  closes: '23:59',
};

export function empresaId(cidade?: Cidade) {
  return cidade ? `${urlAbsoluta(cidadePath(cidade))}#empresa` : `${site.url}/#empresa`;
}

// Página de praça: LocalBusiness (Plumber) com o telefone da praça e a área da página.
// Página sem praça: sem telefone; na página inicial, um ponto de contato por praça.
export function localBusinessSchema(opts: { cidade?: Cidade; bairro?: string; listarPracas?: boolean } = {}) {
  const { cidade, bairro, listarPracas } = opts;
  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'Plumber',
    '@id': empresaId(cidade),
    name: site.name,
    url: cidade ? urlAbsoluta(cidadePath(cidade)) : `${site.url}/`,
    image: urlAbsoluta('/og.jpg'),
    logo: urlAbsoluta('/logo.png'),
    description: site.description,
    openingHoursSpecification: horario,
  };
  if (cidade) {
    base.telephone = telefoneE164(getPraca(cidade.pracaId));
    const cidadeArea = {
      '@type': 'City',
      name: cidade.nome,
      containedInPlace: { '@type': 'State', name: cidade.estado },
    };
    base.areaServed = bairro
      ? [{ '@type': 'Place', name: `${bairro}, ${cidade.nome} - ${cidade.uf}` }, cidadeArea]
      : cidadeArea;
  } else {
    base.areaServed = cidades.map((c) => ({ '@type': 'City', name: `${c.nome} - ${c.uf}` }));
    if (listarPracas) {
      base.contactPoint = pracas.map((p) => ({
        '@type': 'ContactPoint',
        contactType: 'customer service',
        telephone: telefoneE164(p),
        areaServed: `${p.nome} - ${p.uf}`,
        availableLanguage: 'Portuguese',
      }));
    }
  }
  return base;
}

export function faqSchema(faq: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: urlAbsoluta(it.path),
    })),
  };
}

export function serviceSchema(opts: { nome: string; descricao: string; cidade?: Cidade; bairro?: string }) {
  const { nome, descricao, cidade, bairro } = opts;
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: nome,
    serviceType: 'Desentupimento',
    description: descricao,
    provider: { '@id': empresaId(cidade) },
    areaServed: cidade
      ? { '@type': 'Place', name: bairro ? `${bairro}, ${cidade.nome} - ${cidade.uf}` : `${cidade.nome} - ${cidade.uf}` }
      : cidades.map((c) => ({ '@type': 'City', name: `${c.nome} - ${c.uf}` })),
  };
}

export function servicoSchema(s: Servico, cidade?: Cidade) {
  return serviceSchema({ nome: cidade ? `${s.nome} ${cidade.locativo}` : s.nome, descricao: s.resumo, cidade });
}
