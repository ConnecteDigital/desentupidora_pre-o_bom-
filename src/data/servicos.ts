// Os 9 serviços. A empresa faz SOMENTE desentupimento.
// Os textos são gerais; a frase específica de cada cidade fica em cidades.ts.

import type { Faq, ServicoSlug } from './tipos';
import type { IconName } from './icons';

export interface Servico {
  slug: ServicoSlug;
  nome: string;
  // forma curta para menus e frases ("pia", "caixa de gordura")
  curto: string;
  icon: IconName;
  resumo: string;
  intro: string[];
  sinais: string[];
  comoFazemos: string[];
  faq: Faq[];
}

export const servicos: Servico[] = [
  {
    slug: 'desentupimento-de-pia',
    nome: 'Desentupimento de pia',
    curto: 'pia',
    icon: 'pia',
    resumo: 'Pia de cozinha, lavatório e tanque que não escoam ou devolvem água suja.',
    intro: [
      'Pia entupida quase sempre é gordura. O óleo desce quente e líquido, esfria no cano, gruda na parede da tubulação e vai prendendo resto de comida, borra de café e sabão até a passagem fechar de vez.',
      'Soda cáustica e água fervente costumam empurrar o problema alguns metros para a frente e ainda podem danificar o sifão e a tubulação de PVC. O desentupimento com máquina remove a obstrução inteira, e não só a parte que está perto do ralo.',
    ],
    sinais: [
      'A água demora para descer ou fica parada na cuba',
      'Barulho de borbulha quando a pia esvazia',
      'Cheiro forte de gordura vindo do ralo',
      'Água da pia aparecendo no ralo do chão ou no tanque',
      'O problema volta poucos dias depois de limpar o sifão',
    ],
    comoFazemos: [
      'Verificamos o sifão e o trecho logo abaixo da pia para saber se a obstrução está ali ou mais adiante',
      'Passamos o orçamento antes de começar, sem taxa de visita',
      'Usamos máquina de cabo rotativo com a ponteira adequada ao diâmetro do cano',
      'Testamos o escoamento com a pia cheia antes de encerrar',
    ],
    faq: [
      {
        q: 'Posso usar soda cáustica na pia entupida?',
        a: 'Não é recomendado. A soda reage com a gordura e pode formar uma massa dura dentro do cano, além de aquecer e deformar o PVC e causar queimaduras em quem manuseia.',
      },
      {
        q: 'Por que a pia volta a entupir depois de limpar o sifão?',
        a: 'Porque a gordura normalmente está acumulada depois do sifão, no ramal que vai até a caixa de gordura ou até a coluna do prédio. Limpar só o sifão resolve por poucos dias.',
      },
      {
        q: 'Precisa quebrar a bancada ou a parede?',
        a: 'Na maioria dos casos não. O acesso é feito pelo próprio ralo ou pela saída do sifão, com o cabo da máquina percorrendo o cano por dentro.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-ralo',
    nome: 'Desentupimento de ralo',
    curto: 'ralo',
    icon: 'ralo',
    resumo: 'Ralo de box, banheiro, área de serviço, quintal e garagem com água empoçada.',
    intro: [
      'No banheiro, o ralo entope com cabelo e resto de sabonete, que formam uma trama dentro da caixa sifonada. Na área de serviço o vilão é o fiapo de roupa com sabão em pó. No quintal e na garagem, terra, areia e folha.',
      'Quando a água começa a empoçar no box, o ralo já está com boa parte da passagem tomada. Resolver nessa fase é mais rápido do que esperar a água voltar para dentro do banheiro.',
    ],
    sinais: [
      'Água empoçando no box durante o banho',
      'Mau cheiro subindo do ralo mesmo com o banheiro limpo',
      'Água da máquina de lavar saindo pelo ralo do chão',
      'Ralo de quintal ou garagem que alaga em qualquer chuva',
    ],
    comoFazemos: [
      'Abrimos a grelha e a caixa sifonada para retirar o material acumulado',
      'Você recebe o orçamento no local, antes de qualquer serviço',
      'Passamos a máquina no ramal de saída do ralo até a água correr livre',
      'Fazemos o teste com volume de água para confirmar o escoamento',
    ],
    faq: [
      {
        q: 'Por que o ralo do banheiro cheira mal?',
        a: 'Geralmente porque a caixa sifonada está suja ou porque o fecho hídrico secou. Sujeira acumulada no ralo também retém água parada e produz cheiro de esgoto.',
      },
      {
        q: 'A água da máquina de lavar sai pelo ralo. É entupimento?',
        a: 'Na maioria das vezes sim. A máquina despeja muita água de uma vez e, se o ramal estiver parcialmente obstruído por fiapos e sabão, a água volta pelo ralo mais próximo.',
      },
      {
        q: 'Ralo de garagem que alaga na chuva tem solução?',
        a: 'Tem. Normalmente o ralo e a tubulação de saída estão com terra e folhas. A limpeza com máquina ou com hidrojateamento devolve a capacidade de escoamento.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-vaso-sanitario',
    nome: 'Desentupimento de vaso sanitário',
    curto: 'vaso sanitário',
    icon: 'vaso',
    resumo: 'Vaso que não dá descarga, enche até a borda ou devolve a água.',
    intro: [
      'Vaso sanitário entupido é a emergência mais comum que atendemos. Papel em excesso, lenço umedecido, absorvente, fio dental, cotonete e até brinquedo pequeno ficam presos na curva interna da louça ou no ramal logo depois dela.',
      'Insistir na descarga faz o nível subir e pode transbordar. O mais seguro é fechar o registro da caixa acoplada ou da válvula e chamar o atendimento.',
    ],
    sinais: [
      'A água sobe até a borda quando dá descarga',
      'O nível baixa muito devagar ou não baixa',
      'Barulho de borbulha no vaso quando outro ponto da casa é usado',
      'Água do vaso aparecendo no ralo do banheiro',
    ],
    comoFazemos: [
      'Avaliamos se a obstrução está na louça, no ramal do banheiro ou mais adiante na rede',
      'Informamos o valor antes de começar, sem cobrar a visita',
      'Usamos equipamento próprio para vaso, que percorre a curva sem riscar a louça',
      'Testamos com várias descargas seguidas antes de finalizar',
    ],
    faq: [
      {
        q: 'O que fazer enquanto a equipe não chega?',
        a: 'Não dê mais descarga e feche o registro do vaso ou da caixa acoplada. Se a água estiver perto da borda, não use produtos químicos, porque eles podem espirrar durante o serviço.',
      },
      {
        q: 'Lenço umedecido entope o vaso?',
        a: 'Sim. Diferente do papel higiênico, o lenço umedecido não se desfaz na água e é uma das causas mais frequentes de entupimento de vaso e de ramal de esgoto.',
      },
      {
        q: 'É preciso retirar o vaso do lugar?',
        a: 'Raramente. Na maior parte dos atendimentos o desentupimento é feito pela própria bacia. A retirada só é avaliada quando há objeto rígido preso que não sai de outra forma.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-cano',
    nome: 'Desentupimento de cano',
    curto: 'cano',
    icon: 'cano',
    resumo: 'Tubulação obstruída dentro da parede, do piso ou no trecho externo do imóvel.',
    intro: [
      'Quando mais de um ponto da casa escoa mal ao mesmo tempo, o entupimento não está no ralo nem na pia: está no cano que recebe todos eles. Esse tipo de obstrução se forma aos poucos, com gordura, sabão, cabelo e sedimento se acumulando na parede da tubulação.',
      'Em imóveis antigos, canos de ferro e de barro criam crosta e desalinham com o tempo, o que agrava o problema. A máquina de cabo rotativo alcança o ponto obstruído pelo acesso mais próximo.',
    ],
    sinais: [
      'Dois ou mais pontos escoando devagar ao mesmo tempo',
      'Água de um cômodo voltando em outro',
      'Barulho de ar na tubulação depois de usar a descarga ou a máquina de lavar',
      'Entupimentos que voltam sempre no mesmo lugar',
    ],
    comoFazemos: [
      'Identificamos por qual acesso o cabo alcança melhor o ponto da obstrução',
      'Apresentamos o orçamento no local e você decide sem compromisso',
      'Usamos máquina rotativa com cabos e ponteiras compatíveis com o diâmetro do cano',
      'Conferimos o escoamento em todos os pontos ligados àquele trecho',
    ],
    faq: [
      {
        q: 'Como saber se o entupimento é no cano e não só no ralo?',
        a: 'Quando vários pontos apresentam o problema juntos, ou quando usar um ponto faz a água voltar em outro, a obstrução está na tubulação que une esses pontos.',
      },
      {
        q: 'Desentupir cano exige quebrar piso ou parede?',
        a: 'Na maioria dos casos não. O cabo entra por um ralo, uma caixa de inspeção ou uma conexão já existente. Quebra só é cogitada quando o cano está rompido ou desalinhado.',
      },
      {
        q: 'Cano antigo de ferro ou barro pode ser desentupido?',
        a: 'Pode. O serviço é feito com ponteira e rotação adequadas ao material, para remover a obstrução sem forçar a tubulação.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-esgoto',
    nome: 'Desentupimento de esgoto',
    curto: 'esgoto',
    icon: 'esgoto',
    resumo: 'Rede de esgoto do imóvel obstruída, com caixa de inspeção cheia ou retorno pelos ralos.',
    intro: [
      'O esgoto do imóvel corre por um ramal principal até a rede da rua, passando por caixas de inspeção. Quando esse ramal obstrui, tudo o que é usado dentro de casa para de escoar e o esgoto procura a saída mais baixa: o ralo do térreo, o vaso do andar de baixo ou a própria caixa no quintal.',
      'É um serviço emergencial, porque envolve mau cheiro e risco de contaminação. Atendemos a qualquer hora do dia e da noite.',
    ],
    sinais: [
      'Esgoto voltando pelo ralo ou pelo vaso do pavimento mais baixo',
      'Caixa de inspeção cheia ou transbordando',
      'Mau cheiro forte no quintal, na garagem ou na calçada',
      'Todos os pontos da casa escoando mal ao mesmo tempo',
    ],
    comoFazemos: [
      'Abrimos as caixas de inspeção para localizar em qual trecho a rede está parada',
      'Passamos o valor antes de iniciar, sem taxa de visita',
      'Desobstruímos com máquina rotativa de grande porte ou com hidrojateamento, conforme o caso',
      'Verificamos o fluxo de caixa em caixa até a saída para a rua',
    ],
    faq: [
      {
        q: 'O esgoto está voltando pelo ralo. O que fazer?',
        a: 'Pare de usar água no imóvel, principalmente descarga, máquina de lavar e chuveiro, e chame o atendimento. Cada uso aumenta o volume que retorna.',
      },
      {
        q: 'Quem é responsável: o morador ou a concessionária?',
        a: 'A tubulação dentro do terreno, até a ligação com a rede pública, é responsabilidade do imóvel. Quando a obstrução está na rede da rua, orientamos o cliente a acionar a concessionária.',
      },
      {
        q: 'Raiz de árvore pode entupir o esgoto?',
        a: 'Pode. As raízes entram pelas juntas dos tubos em busca de umidade e formam uma barreira que segura papel e gordura. A remoção é feita com ponteira de corte ou com hidrojateamento.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-coluna',
    nome: 'Desentupimento de coluna',
    curto: 'coluna de prédio',
    icon: 'coluna',
    resumo: 'Colunas de esgoto e de gordura de prédios residenciais e comerciais.',
    intro: [
      'A coluna é o tubo vertical que recebe o esgoto de todos os apartamentos de uma mesma prumada. Quando ela obstrui, o problema aparece nos andares mais baixos: a pia do segundo andar devolve a água que o décimo acabou de usar.',
      'Por ser área comum, o chamado costuma partir do síndico ou da administradora. Passamos o orçamento no local para o condomínio aprovar com o valor definido.',
    ],
    sinais: [
      'Água ou espuma voltando pela pia ou pelo ralo dos andares baixos',
      'Vários apartamentos da mesma prumada reclamando ao mesmo tempo',
      'Barulho de borbulha na pia quando o vizinho de cima usa água',
      'Infiltração com cheiro de esgoto perto do shaft',
    ],
    comoFazemos: [
      'Identificamos a prumada afetada e o melhor ponto de acesso, pelo apartamento, pelo térreo ou pela cobertura',
      'Entregamos o orçamento ao síndico ou responsável antes de começar',
      'Desobstruímos com máquina rotativa ou hidrojateamento, conforme o diâmetro e o tipo de resíduo',
      'Testamos o escoamento com descarga de água em andares diferentes',
    ],
    faq: [
      {
        q: 'Quem paga o desentupimento da coluna do prédio?',
        a: 'A coluna é parte comum do edifício, então em regra a despesa é do condomínio. Já o ramal que liga cada apartamento à coluna é responsabilidade da unidade.',
      },
      {
        q: 'É preciso entrar em todos os apartamentos?',
        a: 'Não. Normalmente o acesso é feito por um ou dois pontos da prumada. Avisamos o condomínio sobre quais unidades precisam ficar sem usar água durante o serviço.',
      },
      {
        q: 'De quanto em quanto tempo a coluna deve ser limpa?',
        a: 'Depende do uso do prédio. Colunas de cozinha acumulam gordura mais rápido e muitos condomínios fazem a limpeza preventiva uma vez por ano para evitar retorno nos andares baixos.',
      },
    ],
  },
  {
    slug: 'desentupimento-de-rede-pluvial',
    nome: 'Desentupimento de rede pluvial',
    curto: 'rede pluvial',
    icon: 'chuva',
    resumo: 'Calhas, tubos de queda, ralos de laje e galerias de água de chuva.',
    intro: [
      'A rede pluvial só trabalha quando chove, e é justamente aí que se descobre que ela está entupida. Folha, galho, terra, ninho de pássaro e resto de obra se acumulam nas calhas, nos ralos de laje e nos tubos de queda durante a estiagem.',
      'Com a tubulação obstruída, a água da chuva transborda para dentro do forro, escorre pela fachada ou alaga a garagem. A limpeza antes do período de chuvas evita esse prejuízo.',
    ],
    sinais: [
      'Calha transbordando mesmo com chuva fraca',
      'Laje ou terraço empoçando água',
      'Garagem ou quintal alagando em toda chuva',
      'Mancha de umidade no forro logo abaixo da calha',
    ],
    comoFazemos: [
      'Verificamos calhas, ralos e tubos de queda para achar o trecho obstruído',
      'Informamos o valor no local, sem compromisso',
      'Retiramos o material sólido e desobstruímos a tubulação com máquina ou jato de água',
      'Testamos com volume de água para confirmar que a rede dá vazão',
    ],
    faq: [
      {
        q: 'Qual a melhor época para limpar a rede pluvial?',
        a: 'Antes do período de chuvas fortes da sua região. Com a rede limpa, calhas e tubos de queda trabalham com a capacidade total quando a chuva chega.',
      },
      {
        q: 'Água de chuva pode ser ligada na rede de esgoto?',
        a: 'Não. São redes separadas. Água de chuva ligada ao esgoto sobrecarrega a tubulação e é uma causa comum de retorno de esgoto dentro de casa em dias de temporal.',
      },
      {
        q: 'Vocês atendem alagamento durante a chuva?',
        a: 'Sim. O atendimento é 24 horas e inclui emergências com ralos e redes pluviais obstruídas durante temporais.',
      },
    ],
  },
  {
    slug: 'limpeza-de-caixa-de-gordura',
    nome: 'Desentupimento e limpeza de caixa de gordura',
    curto: 'caixa de gordura',
    icon: 'gordura',
    resumo: 'Caixa de gordura cheia, transbordando ou com mau cheiro, em casas, prédios e comércios.',
    intro: [
      'A caixa de gordura existe para segurar o óleo e os resíduos da cozinha antes que cheguem à rede de esgoto. Ela funciona como um filtro, e como todo filtro precisa ser esvaziada. Cheia, deixa a gordura passar direto para o cano ou devolve a água para a pia.',
      'Em restaurantes, lanchonetes e cozinhas industriais, a limpeza periódica costuma ser exigência da fiscalização sanitária e evita parar a operação no meio do expediente.',
    ],
    sinais: [
      'Pia da cozinha escoando devagar em toda a casa',
      'Cheiro de gordura rançosa na cozinha ou na área externa',
      'Tampa da caixa transbordando ou úmida em volta',
      'Presença de baratas perto da caixa',
    ],
    comoFazemos: [
      'Abrimos a caixa e avaliamos o volume de gordura e o estado da tubulação de entrada e saída',
      'Passamos o orçamento antes de começar, sem taxa de visita',
      'Retiramos a gordura sólida e desobstruímos os ramais ligados à caixa',
      'Conferimos o escoamento da pia até a caixa e da caixa até a rede',
    ],
    faq: [
      {
        q: 'De quanto em quanto tempo limpar a caixa de gordura?',
        a: 'Em residências, a recomendação mais comum é a cada seis meses. Em restaurantes e cozinhas com uso intenso, o intervalo é bem menor e varia conforme o volume de preparo.',
      },
      {
        q: 'Apartamento tem caixa de gordura?',
        a: 'Em geral o prédio tem uma caixa de gordura coletiva no térreo ou na garagem, que recebe as cozinhas de todos os apartamentos. A limpeza é responsabilidade do condomínio.',
      },
      {
        q: 'Caixa de gordura cheia entope a pia?',
        a: 'Sim. Quando a caixa está saturada, a água da pia não tem para onde ir e volta pela cuba ou sai pelo ralo mais próximo.',
      },
    ],
  },
  {
    slug: 'hidrojateamento',
    nome: 'Hidrojateamento',
    curto: 'hidrojateamento',
    icon: 'jato',
    resumo: 'Limpeza de tubulações com jato de água em alta pressão, para redes longas e gordura endurecida.',
    intro: [
      'O hidrojateamento usa uma mangueira com bico especial que lança água em alta pressão dentro da tubulação. O jato avança pelo cano, desfaz gordura endurecida, areia, lodo e raízes finas, e lava a parede interna em toda a extensão.',
      'A diferença para a máquina de cabo é o resultado: o cabo abre passagem, o jato limpa o diâmetro inteiro do tubo. É o método indicado para redes longas, colunas de prédios, caixas de gordura de grande porte e tubulações que entopem com frequência.',
    ],
    sinais: [
      'Entupimentos que voltam poucas semanas depois do desentupimento comum',
      'Redes extensas de condomínios, galpões e comércios',
      'Tubulação com gordura endurecida ou areia acumulada',
      'Limpeza preventiva de colunas e redes de esgoto',
    ],
    comoFazemos: [
      'Avaliamos a rede, o diâmetro do tubo e os pontos de acesso disponíveis',
      'Definimos o valor no local antes de iniciar',
      'Aplicamos o jato com o bico e a pressão adequados ao material da tubulação',
      'Acompanhamos a saída dos resíduos na caixa seguinte até a água sair limpa',
    ],
    faq: [
      {
        q: 'Qual a diferença entre hidrojateamento e desentupimento com máquina?',
        a: 'A máquina de cabo perfura a obstrução e devolve a passagem. O hidrojateamento remove o material grudado na parede do cano em toda a extensão, o que reduz a chance de o entupimento voltar.',
      },
      {
        q: 'O jato de alta pressão danifica o cano?',
        a: 'Não, quando a pressão e o bico são escolhidos de acordo com o material e o estado da tubulação. Essa avaliação é feita antes do serviço.',
      },
      {
        q: 'Hidrojateamento serve para residência?',
        a: 'Serve. É usado em casas com rede de esgoto longa, caixa de gordura muito carregada ou entupimentos que se repetem. Em casos simples, a máquina de cabo costuma bastar.',
      },
    ],
  },
];

export function getServico(slug: string): Servico {
  const s = servicos.find((x) => x.slug === slug);
  if (!s) throw new Error(`Serviço não encontrado: ${slug}`);
  return s;
}

export function servicoPath(s: Servico) {
  return `/servicos/${s.slug}/`;
}
