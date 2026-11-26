// Textos próprios de cada cidade (fora o Rio de Janeiro, que está em cidades.ts).
// heroLead: frase do topo. perfil: "Por que a Preço Bom" com o contexto local.
// servicos: uma frase por serviço. faqLocal: perguntas que só fazem sentido ali.

import type { Faq, ServicoSlug } from './tipos';

export interface TextosDaCidade {
  heroLead: string;
  perfil: string[];
  servicos: Record<ServicoSlug, string>;
  faqLocal: Faq[];
}

export const textosDasCidades: Record<string, TextosDaCidade> = {
  'vila-velha': {
    heroLead:
      'Da orla aos bairros do interior de Vila Velha: se a pia parou, o ralo voltou ou o esgoto subiu, o técnico vai até você, mostra o problema e diz o valor antes de ligar a máquina.',
    perfil: [
      'Vila Velha tem dois perfis bem diferentes de imóvel. Na orla, da Praia da Costa a Itaparica, predominam prédios altos, com colunas que recebem dezenas de cozinhas e banheiros. Nos bairros mais antigos e nos da região de Cobilândia e Aribiri, o comum é casa térrea ou sobrado, com caixa de inspeção no quintal ou na calçada.',
      'Morar perto da praia traz um ingrediente a mais: areia. Ela entra no pé, na roupa e na prancha, vai para o ralo do box e da área de serviço e assenta no fundo da tubulação, onde segura cabelo e sabão.',
      'Como parte da cidade é plana e baixa, chuva forte com maré alta costuma deixar ralos e redes pluviais sem vazão. Nessas horas o atendimento 24 horas faz diferença, e o orçamento continua sendo grátis e feito no local.',
    ],
    servicos: {
      'desentupimento-de-pia':
        'Nos apartamentos da orla de Vila Velha a pia da cozinha deságua na coluna do prédio, e nos bairros de casas ela passa antes pela caixa de gordura do quintal: o ponto do entupimento muda conforme o tipo de imóvel.',
      'desentupimento-de-ralo':
        'A areia da praia é a principal causa de ralo lento nos bairros da orla de Vila Velha, porque assenta no fundo do cano e vai retendo cabelo e sabão.',
      'desentupimento-de-vaso-sanitario':
        'Em prédios de temporada e apartamentos alugados para o verão, o vaso entupido por lenço umedecido e absorvente é um chamado frequente em Vila Velha.',
      'desentupimento-de-cano':
        'Casas antigas da região central e da Glória ainda têm trechos de tubulação estreita, que acumulam sedimento e fecham com facilidade.',
      'desentupimento-de-esgoto':
        'Em bairros planos de Vila Velha a rede do imóvel tem pouca inclinação, e qualquer acúmulo de gordura ou papel basta para o esgoto parar na caixa de inspeção.',
      'desentupimento-de-coluna':
        'Os edifícios altos da Praia da Costa, de Itapuã e de Itaparica concentram muitos apartamentos por prumada, e a gordura das cozinhas se acumula na coluna ao longo dos anos.',
      'desentupimento-de-rede-pluvial':
        'Em Vila Velha, chuva forte em terreno plano exige ralos de garagem, calhas e tubos de queda totalmente livres para a água não voltar para dentro do imóvel.',
      'limpeza-de-caixa-de-gordura':
        'Quiosques, restaurantes da orla e cozinhas de condomínio de Vila Velha produzem muita gordura na alta temporada e precisam de limpeza de caixa com mais frequência.',
      hidrojateamento:
        'Para remover areia assentada e gordura endurecida em redes de condomínios de Vila Velha, o jato de água em alta pressão é o método que limpa o cano por inteiro.',
    },
    faqLocal: [
      {
        q: 'O telefone de Vila Velha é o mesmo de Vitória, Serra e Cariacica?',
        a: 'Sim. As quatro cidades da Grande Vitória são atendidas pelo mesmo número, que vale para ligação e para WhatsApp.',
      },
      {
        q: 'Areia de praia entope mesmo o ralo?',
        a: 'Entope. A areia é pesada, não é levada pela água e assenta no fundo do cano, onde passa a segurar cabelo e sabão. Ralos de box e de área de serviço perto da orla são os mais afetados.',
      },
    ],
  },
  vitoria: {
    heroLead:
      'Vitória tem prédio alto, casa em morro e comércio antigo no Centro. Em qualquer um deles, o técnico avalia no local e você sabe o valor antes do serviço começar.',
    perfil: [
      'A capital é uma ilha com uma parte continental, e isso aparece nos imóveis. Jardim da Penha, Mata da Praia e Jardim Camburi são bairros de prédios, muitos sem elevador e com colunas compartilhadas. Praia do Canto e Enseada do Suá misturam torres residenciais, escritórios e restaurantes. No Centro e em Santo Antônio há sobrados e casas em ladeira, com tubulação antiga.',
      'Cada perfil pede um tipo de serviço: coluna e caixa de gordura coletiva nos prédios, rede de esgoto com caixas de inspeção nas casas, e limpeza de caixa de gordura nos bares e restaurantes.',
      'O orçamento é feito no local e não custa nada. Para condomínios, o valor é passado ao síndico ou à administradora antes de qualquer serviço.',
    ],
    servicos: {
      'desentupimento-de-pia':
        'Nos prédios de três e quatro andares de Jardim da Penha e de Jardim Camburi, a pia de um apartamento compartilha a prumada com os vizinhos, e a gordura se acumula no trecho comum.',
      'desentupimento-de-ralo':
        'Apartamentos próximos à Praia de Camburi recebem areia no ralo do box, e os imóveis em área de morro recebem terra nos ralos externos a cada chuva.',
      'desentupimento-de-vaso-sanitario':
        'Em Vitória, banheiros de prédios antigos do Centro têm ramais com pouca queda, o que facilita o entupimento do vaso com papel.',
      'desentupimento-de-cano':
        'Sobrados do Centro e de Santo Antônio ainda têm tubulações antigas, com crosta interna que reduz a passagem da água.',
      'desentupimento-de-esgoto':
        'Nas casas em ladeira de Vitória o esgoto desce com velocidade e costuma parar na primeira curva ou caixa de inspeção, na parte baixa do terreno.',
      'desentupimento-de-coluna':
        'Vitória é uma cidade de prédios, e a limpeza das colunas de esgoto e de gordura é uma demanda constante dos condomínios da ilha e da parte continental.',
      'desentupimento-de-rede-pluvial':
        'Com morros no centro da ilha, a água de chuva chega com força às partes baixas de Vitória e exige calhas, ralos e tubos de queda desobstruídos.',
      'limpeza-de-caixa-de-gordura':
        'Os bares e restaurantes da Praia do Canto e do entorno precisam manter a caixa de gordura em dia para não parar a cozinha no horário de movimento.',
      hidrojateamento:
        'Em condomínios e edifícios comerciais de Vitória, o hidrojateamento é usado para limpar colunas e redes extensas que entopem com frequência.',
    },
    faqLocal: [
      {
        q: 'Vocês atendem a ilha e a parte continental de Vitória?',
        a: 'Sim. Atendemos toda a cidade, incluindo Jardim da Penha, Jardim Camburi e Mata da Praia, na parte continental, e os bairros da ilha.',
      },
      {
        q: 'Como funciona o orçamento para condomínio em Vitória?',
        a: 'O técnico avalia a prumada ou a caixa no local e informa o valor ao síndico ou à administradora. O serviço só começa depois da aprovação.',
      },
    ],
  },
  serra: {
    heroLead:
      'A Serra é grande e espalhada, de Laranjeiras a Jacaraípe. Informe o bairro ao chamar: o técnico avalia no local e passa o valor antes de começar, sem taxa de visita.',
    perfil: [
      'A Serra cresceu em conjuntos habitacionais, loteamentos e condomínios, ao lado de uma área industrial e logística importante em Carapina. Por isso atendemos de tudo: casa de conjunto com rede antiga, condomínio de casas com rede coletiva, galpão com tubulação longa e comércio de rua em Laranjeiras.',
      'No litoral, em Jacaraípe e nos balneários vizinhos, muitas casas ficam fechadas parte do ano. Quando voltam a ser usadas, é comum encontrar ralos secos com mau cheiro e ramais obstruídos por areia.',
      'Em todos os casos a regra é a mesma: orçamento grátis no local, valor informado antes e nenhum serviço feito sem a sua aprovação.',
    ],
    servicos: {
      'desentupimento-de-pia':
        'Nas casas de conjunto da Serra, a pia da cozinha costuma ir para uma caixa de gordura pequena no quintal, que satura rápido e devolve a água para a cuba.',
      'desentupimento-de-ralo':
        'Em Jacaraípe e nos bairros de praia da Serra, areia e maresia no ralo são rotina, principalmente em casas de veraneio que passam meses fechadas.',
      'desentupimento-de-vaso-sanitario':
        'Casas ampliadas ao longo dos anos, comuns na Serra, costumam ter ramais de banheiro com curvas a mais, onde papel e objetos ficam presos.',
      'desentupimento-de-cano':
        'Imóveis dos conjuntos mais antigos da Serra têm tubulação original de pequeno diâmetro, que fecha aos poucos com sabão e sedimento.',
      'desentupimento-de-esgoto':
        'Em condomínios de casas da Serra, a rede de esgoto é compartilhada entre as unidades, e uma obstrução na rede interna afeta várias casas ao mesmo tempo.',
      'desentupimento-de-coluna':
        'Os condomínios de prédios de Laranjeiras e de Colina de Laranjeiras têm prumadas que recebem todos os apartamentos e pedem limpeza periódica.',
      'desentupimento-de-rede-pluvial':
        'Galpões e pátios da região de Carapina têm grandes áreas de telhado e piso, e a rede pluvial obstruída alaga a operação em qualquer chuva forte.',
      'limpeza-de-caixa-de-gordura':
        'Refeitórios de empresas, restaurantes e lanchonetes da Serra geram volume alto de gordura e precisam de limpeza de caixa em intervalos curtos.',
      hidrojateamento:
        'Para as redes longas de indústrias, galpões e condomínios da Serra, o hidrojateamento limpa toda a extensão da tubulação.',
    },
    faqLocal: [
      {
        q: 'Vocês atendem empresas e galpões na Serra?',
        a: 'Sim. O atendimento é residencial e comercial e inclui indústrias, galpões, refeitórios e condomínios empresariais, com orçamento feito no local.',
      },
      {
        q: 'Minha casa de praia na Serra ficou fechada e o ralo está com mau cheiro. É entupimento?',
        a: 'Nem sempre. Ralo sem uso seca e deixa o cheiro do esgoto passar: jogue água em todos os ralos. Se o cheiro continuar ou a água não descer, há obstrução.',
      },
    ],
  },
  cariacica: {
    heroLead:
      'De Campo Grande a Cariacica Sede, o atendimento é o mesmo: o técnico vai até o endereço, acha o entupimento e informa o valor antes de qualquer serviço.',
    perfil: [
      'Cariacica é uma cidade de casas. A maior parte dos imóveis é térrea ou sobrado, muitas vezes com mais de uma moradia no mesmo terreno, todas ligadas ao mesmo ramal de esgoto. Quando esse ramal obstrui, a casa dos fundos e a da frente param juntas.',
      'Campo Grande concentra o comércio, com lojas, galerias, lanchonetes e restaurantes que precisam resolver o entupimento sem fechar as portas. Por isso atendemos também fora do horário comercial, de madrugada e em feriados.',
      'O relevo com morros faz a chuva descer com terra para os ralos e as redes pluviais das partes baixas. A limpeza antes do período chuvoso evita alagamento no quintal e na garagem.',
    ],
    servicos: {
      'desentupimento-de-pia':
        'Em terrenos com duas ou três casas, comuns em Cariacica, as pias costumam despejar na mesma caixa de gordura, que enche em pouco tempo.',
      'desentupimento-de-ralo':
        'Quintais cimentados em terreno inclinado levam terra e folha para o ralo a cada chuva, e esse é um chamado comum em Cariacica.',
      'desentupimento-de-vaso-sanitario':
        'Em casas com vários moradores e um único ramal de banheiro, o vaso entupido interrompe o uso de todos e pede atendimento rápido.',
      'desentupimento-de-cano':
        'Ampliações feitas ao longo do tempo deixam emendas e mudanças de diâmetro na tubulação, e é nesses pontos que o cano costuma fechar.',
      'desentupimento-de-esgoto':
        'Com várias moradias no mesmo lote, a caixa de inspeção de Cariacica recebe mais volume do que foi prevista para receber e obstrui com mais facilidade.',
      'desentupimento-de-coluna':
        'Os prédios de Campo Grande e de Jardim América, muitos com comércio no térreo, têm colunas que recebem cozinhas e banheiros de todos os andares.',
      'desentupimento-de-rede-pluvial':
        'Em Cariacica, a água de chuva desce dos morros com terra e fecha calhas, grelhas e tubos das casas e lojas que ficam na parte baixa.',
      'limpeza-de-caixa-de-gordura':
        'Lanchonetes, padarias e restaurantes do comércio de Campo Grande dependem da caixa de gordura limpa para não ter retorno na cozinha.',
      hidrojateamento:
        'Em redes compartilhadas por várias casas e em galpões próximos às rodovias que cortam Cariacica, o hidrojato remove gordura e terra de todo o trecho.',
    },
    faqLocal: [
      {
        q: 'Tenho duas casas no mesmo terreno em Cariacica e as duas pararam de escoar. O que pode ser?',
        a: 'Quase sempre é o ramal de esgoto compartilhado, obstruído depois do ponto em que as duas casas se juntam. O serviço é feito pela caixa de inspeção.',
      },
      {
        q: 'Vocês atendem o comércio de Campo Grande fora do horário de funcionamento?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e pode ser feito à noite ou de madrugada para não atrapalhar o movimento da loja.',
      },
    ],
  },
  petropolis: {
    heroLead:
      'Do Centro Histórico a Itaipava, Petrópolis tem casarão antigo, casa em encosta e chuva forte de verão. O técnico avalia no local e você sabe o valor antes de o serviço começar.',
    perfil: [
      'Petrópolis é uma cidade de serra, e o relevo manda em tudo, inclusive no encanamento. Casas construídas em encosta têm redes de esgoto longas e inclinadas, com várias caixas de inspeção entre a casa e a rua. No Centro Histórico, os imóveis antigos convivem com tubulações de outras épocas.',
      'As chuvas de verão são o ponto mais sensível. A água desce dos morros com folha, galho e terra, e a rede pluvial de cada imóvel precisa estar livre para dar vazão. Calha e ralo entupidos nessa época viram infiltração e alagamento logo no primeiro temporal.',
      'Nos distritos, como Itaipava, Nogueira, Araras e Pedro do Rio, atendemos casas de condomínio, pousadas e restaurantes. O orçamento é grátis e feito no local em toda a cidade.',
    ],
    servicos: {
      'desentupimento-de-pia':
        'Em Petrópolis o frio endurece a gordura mais depressa dentro do cano, e a pia da cozinha costuma entupir com mais frequência nos meses de inverno.',
      'desentupimento-de-ralo':
        'Folhas e musgo são os vilões dos ralos externos em Petrópolis, cidade úmida e muito arborizada.',
      'desentupimento-de-vaso-sanitario':
        'Pousadas e casas de temporada da região serrana recebem hóspedes que descartam no vaso o que não deveriam, e o entupimento aparece no fim de semana cheio.',
      'desentupimento-de-cano':
        'Casarões e imóveis antigos do Centro Histórico de Petrópolis ainda têm trechos de tubulação de ferro e de barro, que criam crosta e desalinham.',
      'desentupimento-de-esgoto':
        'Em terrenos de encosta, comuns em Petrópolis, a rede de esgoto percorre um caminho longo até a rua, e raízes de árvores entram pelas juntas das caixas.',
      'desentupimento-de-coluna':
        'Os prédios do Centro e do Quitandinha têm colunas antigas, que recebem os apartamentos de todos os andares e pedem limpeza periódica.',
      'desentupimento-de-rede-pluvial':
        'Em Petrópolis a rede pluvial não é detalhe: com as chuvas de verão, calhas, grelhas e tubos de queda precisam estar limpos antes de dezembro.',
      'limpeza-de-caixa-de-gordura':
        'Restaurantes de Itaipava, de Araras e do Centro, além das cozinhas de pousadas, precisam da caixa de gordura limpa para atender nos fins de semana de casa cheia.',
      hidrojateamento:
        'Para redes longas de condomínios de casas e para tubulações tomadas por raízes finas e terra, o hidrojateamento é o método mais indicado na serra.',
    },
    faqLocal: [
      {
        q: 'Vocês atendem os distritos de Petrópolis, como Itaipava, Araras e Pedro do Rio?',
        a: 'Sim. Atendemos o primeiro distrito e também Corrêas, Nogueira, Itaipava, Pedro do Rio, Posse, Araras e as demais localidades listadas nos bairros atendidos.',
      },
      {
        q: 'Quando devo limpar calhas e ralos por causa das chuvas em Petrópolis?',
        a: 'O ideal é antes do verão, quando as chuvas fortes se concentram. Com a rede pluvial limpa, a água do telhado e do quintal escoa sem voltar para o imóvel.',
      },
    ],
  },
  cuiaba: {
    heroLead:
      'Calor o ano inteiro e chuva pesada no verão: em Cuiabá o entupimento não espera. Você chama, o técnico avalia no local e informa o valor antes de começar.',
    perfil: [
      'Cuiabá tem o Centro Histórico, com casario antigo e ruas estreitas, bairros de prédios altos como Goiabeiras, Popular e Jardim das Américas, e grandes conjuntos residenciais na região do CPA e do Coxipó. São realidades bem diferentes de encanamento.',
      'O clima pesa. Com o calor, a gordura parada na caixa fermenta e o mau cheiro aparece rápido, e por isso caixa de gordura e ralo com odor são chamados muito comuns. No período de chuvas, de outubro a abril, os temporais testam ralos, calhas e redes pluviais de uma hora para outra.',
      'Depois de meses de seca, a primeira chuva forte leva para a tubulação a poeira, a folha e a terra acumuladas no telhado e no quintal. Vale limpar antes. Em qualquer caso, o orçamento é grátis e feito no local.',
    ],
    servicos: {
      'desentupimento-de-pia':
        'Com o calor de Cuiabá, a gordura acumulada no cano da pia fermenta e produz mau cheiro antes mesmo de a água parar de descer.',
      'desentupimento-de-ralo':
        'A poeira da estiagem se acumula nos ralos de quintal e de varanda em Cuiabá e vira lama na primeira chuva, fechando a passagem.',
      'desentupimento-de-vaso-sanitario':
        'Em casas de conjunto com um único banheiro, comuns em Cuiabá, o vaso entupido é emergência, e por isso o atendimento funciona 24 horas.',
      'desentupimento-de-cano':
        'Imóveis antigos do Centro Histórico e do Porto ainda têm tubulações estreitas e de materiais antigos, que fecham com crosta e sedimento.',
      'desentupimento-de-esgoto':
        'Nos conjuntos residenciais de Cuiabá a rede de esgoto do lote costuma ser a original, e raízes de mangueira e de outras árvores de quintal entram pelas caixas.',
      'desentupimento-de-coluna':
        'Os edifícios altos de Goiabeiras, Popular, Duque de Caxias e Jardim das Américas têm prumadas que recebem dezenas de cozinhas e precisam de limpeza preventiva.',
      'desentupimento-de-rede-pluvial':
        'As chuvas de verão em Cuiabá são intensas e rápidas: calha, ralo de laje e tubo de queda com folha seca da estiagem não dão conta do volume.',
      'limpeza-de-caixa-de-gordura':
        'Peixarias, churrascarias, restaurantes e lanchonetes de Cuiabá trabalham com muita gordura, e no calor a caixa cheia vira mau cheiro em pouco tempo.',
      hidrojateamento:
        'Para colunas de prédios, redes de condomínios horizontais e tubulações com gordura endurecida, o hidrojateamento é o serviço mais completo em Cuiabá.',
    },
    faqLocal: [
      {
        q: 'Por que o ralo e a caixa de gordura cheiram tão forte no calor de Cuiabá?',
        a: 'A temperatura alta acelera a decomposição da gordura e dos resíduos parados. Caixa de gordura cheia e ralo sujo produzem odor muito mais rápido no calor.',
      },
      {
        q: 'Devo limpar calhas e ralos antes das chuvas em Cuiabá?',
        a: 'Sim. Depois dos meses de seca, folhas e poeira ficam acumuladas no telhado e nos ralos. A limpeza antes de outubro evita alagamento nos primeiros temporais.',
      },
    ],
  },
  'juiz-de-fora': {
    heroLead:
      'Prédio antigo no Centro, república em São Mateus ou casa em morro: em Juiz de Fora o técnico avalia no local e você decide com o valor na mão, sem taxa de visita.',
    perfil: [
      'Juiz de Fora é uma cidade de morros cortada pelo Rio Paraibuna. O Centro reúne prédios antigos, galerias comerciais e muito comércio de rua. Os bairros da zona sul têm prédios residenciais e repúblicas de estudantes. Nas zonas norte e leste, predominam casas, muitas em terreno inclinado.',
      'Em prédio antigo, a coluna e a caixa de gordura coletiva são os pontos críticos. Em casa de morro, é a rede de esgoto, que desce o terreno em vários lances até a rua. Em república, com muita gente usando a mesma cozinha e o mesmo banheiro, tudo entope mais depressa.',
      'As chuvas de verão descem os morros com força e levam terra para ralos e redes pluviais. O atendimento é 24 horas, com orçamento grátis no local.',
    ],
    servicos: {
      'desentupimento-de-pia':
        'Em repúblicas e apartamentos compartilhados de Juiz de Fora, a pia da cozinha recebe mais gordura e resto de comida do que uma residência comum e entope mais cedo.',
      'desentupimento-de-ralo':
        'Em casas de morro de Juiz de Fora, os ralos de quintal e de garagem recebem a terra que desce do terreno a cada chuva.',
      'desentupimento-de-vaso-sanitario':
        'Banheiros usados por muitos moradores, como os de repúblicas e pensões próximas à universidade, concentram os chamados de vaso entupido.',
      'desentupimento-de-cano':
        'Prédios antigos do Centro de Juiz de Fora ainda têm trechos de tubulação de ferro, que criam crosta por dentro e reduzem a passagem.',
      'desentupimento-de-esgoto':
        'Em terrenos inclinados, a rede de esgoto de Juiz de Fora desce em degraus até a rua, e cada caixa de passagem é um ponto onde papel e gordura podem parar.',
      'desentupimento-de-coluna':
        'Os edifícios do Centro, de São Mateus e do Alto dos Passos têm colunas de várias décadas, e o retorno costuma aparecer nos primeiros andares e nas lojas do térreo.',
      'desentupimento-de-rede-pluvial':
        'Com morros por todos os lados, a chuva forte de verão em Juiz de Fora leva terra e folha para calhas e grelhas, que precisam estar livres para dar vazão.',
      'limpeza-de-caixa-de-gordura':
        'Bares, restaurantes e lanchonetes de São Mateus e do Centro precisam da caixa de gordura limpa para não ter retorno na cozinha em noite de movimento.',
      hidrojateamento:
        'Para colunas antigas, redes de condomínios e tubulações de indústrias da zona norte de Juiz de Fora, o hidrojateamento limpa toda a parede interna do cano.',
    },
    faqLocal: [
      {
        q: 'Vocês atendem repúblicas de estudantes em Juiz de Fora?',
        a: 'Sim. Atendemos repúblicas, pensões e apartamentos compartilhados, com orçamento grátis no local e valor informado antes do serviço, para os moradores dividirem sem surpresa.',
      },
      {
        q: 'Moro em casa de morro em Juiz de Fora. O acesso atrapalha o desentupimento?',
        a: 'Normalmente não. As máquinas são portáteis e o trabalho é feito pelas caixas de inspeção do próprio terreno. O técnico avalia o acesso no local, sem custo.',
      },
    ],
  },
  'joao-pessoa': {
    heroLead:
      'Da orla de Manaíra e Cabo Branco aos bairros da zona sul, o atendimento em João Pessoa é igual: avaliação no local, valor informado antes e nenhuma taxa de visita.',
    perfil: [
      'João Pessoa tem uma orla de prédios, hotéis, bares e restaurantes, um Centro Histórico com casario antigo e uma zona sul populosa, com casas e conjuntos em bairros como Mangabeira, Bancários e Valentina.',
      'Na orla, a areia é presença certa nos ralos, e os restaurantes e quiosques produzem gordura em volume. No Centro e no Varadouro, a tubulação antiga pede cuidado. Nos bairros de casas, o chamado mais comum é a rede de esgoto do lote ou a caixa de gordura do quintal.',
      'As chuvas se concentram entre o outono e o inverno, e é nesse período que ralos de garagem, calhas e redes pluviais mostram se estão obstruídos. O atendimento funciona 24 horas, com orçamento grátis.',
    ],
    servicos: {
      'desentupimento-de-pia':
        'Em apartamentos de temporada e flats da orla de João Pessoa, a pia da cozinha é usada por muitos hóspedes diferentes e a gordura se acumula no ramal sem que ninguém perceba.',
      'desentupimento-de-ralo':
        'A areia trazida da praia é a causa mais comum de ralo lento em Manaíra, Tambaú, Cabo Branco e Bessa.',
      'desentupimento-de-vaso-sanitario':
        'Pousadas, hotéis e imóveis de aluguel por temporada em João Pessoa têm no vaso entupido um dos chamados mais frequentes da alta estação.',
      'desentupimento-de-cano':
        'Casas antigas do Centro, de Jaguaribe e do Varadouro têm tubulações de outras épocas, com diâmetro pequeno e crosta acumulada.',
      'desentupimento-de-esgoto':
        'Nos bairros de casas da zona sul de João Pessoa, as raízes de árvores de quintal e de calçada entram nas caixas de inspeção e seguram papel e gordura.',
      'desentupimento-de-coluna':
        'Os prédios da orla e de bairros como Miramar e Tambauzinho têm colunas que recebem todas as cozinhas da prumada e precisam de limpeza periódica.',
      'desentupimento-de-rede-pluvial':
        'Em João Pessoa, vale limpar calhas, ralos de laje e tubos de queda antes do período de chuvas, que vai do outono ao inverno.',
      'limpeza-de-caixa-de-gordura':
        'Bares, restaurantes e quiosques da orla de João Pessoa dependem da caixa de gordura limpa para atravessar a alta temporada sem retorno na cozinha.',
      hidrojateamento:
        'Para remover areia assentada e gordura endurecida de redes de condomínios, hotéis e restaurantes de João Pessoa, o hidrojateamento limpa o cano por inteiro.',
    },
    faqLocal: [
      {
        q: 'Vocês atendem hotéis, pousadas e imóveis de temporada em João Pessoa?',
        a: 'Sim. O atendimento é residencial e comercial, 24 horas, inclusive em fins de semana e feriados de alta temporada, com orçamento grátis no local.',
      },
      {
        q: 'Qual a melhor época para limpar a rede de água de chuva em João Pessoa?',
        a: 'Antes do período chuvoso, que se concentra entre o outono e o inverno. Assim calhas e ralos chegam às chuvas com a capacidade total.',
      },
    ],
  },
};
