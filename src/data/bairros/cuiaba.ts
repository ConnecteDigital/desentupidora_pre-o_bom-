import type { Bairro } from '../tipos';

export const bairros: Bairro[] = [
  {
    slug: 'centro-norte',
    nome: 'Centro Norte',
    zona: 'Região Central',
    vizinhos: ['Centro Sul', 'Araés', 'Baú', 'Bandeirantes', 'Goiabeiras'],
    referencias: ['Praça Alencastro', 'Praça da República', 'Avenida Getúlio Vargas'],
    h1: 'Desentupidora no Centro Norte de Cuiabá para imóveis antigos',
    metaDescription:
      'Desentupidora no Centro Norte de Cuiabá para casarões, sobrados e lojas do Centro Histórico. Orçamento grátis no local, sem taxa de visita, 24 horas.',
    abertura:
      'No entorno da Praça Alencastro e da Praça da República está o pedaço mais antigo de Cuiabá, com casario tombado, sobrados de parede grossa e lojas que ocupam prédios muito anteriores à tubulação de PVC. Ali o encanamento foi sendo emendado a cada reforma, e ninguém sabe ao certo por onde ele passa. A Desentupidora Preço Bom atende o Centro Norte a qualquer hora, com orçamento grátis no local e valor informado antes de o serviço começar.',
    imovel:
      'Predominam sobrados e casarões antigos do Centro Histórico, muitos transformados em loja, escritório ou repartição, além de prédios comerciais de poucos andares.',
    problema:
      'Canos de manilha de barro e ferro, com diâmetro pequeno e várias emendas, acumulam crosta por dentro e fecham aos poucos. O escoamento fica lento em todos os pontos do imóvel antes de parar de vez.',
    servico: 'desentupimento-de-cano',
    faq: [
      {
        q: 'Meu imóvel no Centro Histórico de Cuiabá é tombado. Dá para desentupir sem mexer no piso original?',
        a: 'Na maioria dos casos, sim. O trabalho é feito pelos pontos de acesso que já existem, como ralos, caixas de inspeção e a saída do vaso, sem quebrar piso nem parede. Se o cano estiver danificado, avisamos antes de qualquer outra decisão.',
      },
      {
        q: 'Ninguém sabe por onde passa a tubulação do sobrado onde funciona minha loja, perto da Praça Alencastro. Como vocês localizam o entupimento?',
        a: 'Começamos pelos pontos visíveis e seguimos o cano com o cabo da máquina, que indica a que distância está a obstrução. Em trechos longos ou confusos, a câmera de inspeção mostra o caminho por dentro.',
      },
      {
        q: 'O calçadão do Centro Norte não deixa entrar carro. A equipe consegue chegar com o equipamento?',
        a: 'Consegue. As máquinas usadas em loja e sobrado são portáteis e vão no carrinho de mão a partir da rua mais próxima onde é permitido parar.',
      },
    ],
  },
  {
    slug: 'centro-sul',
    nome: 'Centro Sul',
    zona: 'Região Central',
    vizinhos: ['Centro Norte', 'Porto', 'Dom Aquino', 'Bandeirantes', 'Goiabeiras'],
    referencias: ['Rua 13 de Junho', 'Praça Ipiranga', 'Avenida Tenente-Coronel Duarte'],
    h1: 'Centro Sul de Cuiabá: desentupimento para lojas e prédios',
    metaDescription:
      'Lanchonete, loja ou prédio com pia e caixa de gordura entupidas no Centro Sul de Cuiabá? Atendimento 24 horas, orçamento sem compromisso no local.',
    abertura:
      'Comércio popular de porta aberta, lanchonete de balcão, restaurante por quilo e pastelaria: é disso que vive o Centro Sul durante o dia, da Rua 13 de Junho às quadras ao redor da Praça Ipiranga. Cada uma dessas cozinhas pequenas manda óleo de fritura para uma rede que não foi pensada para tanto. Para quem precisa resolver antes de abrir as portas, a Desentupidora Preço Bom atende com orçamento sem compromisso e sem taxa de visita.',
    imovel:
      'São lojas de rua, galerias e prédios comerciais de uso misto, com salas nos andares de cima e pontos de alimentação no térreo.',
    problema:
      'O óleo quente desce líquido pela pia e endurece no caminho, entupindo primeiro a caixa de gordura e depois o ramal que leva à rua. O sinal costuma ser o cheiro forte no fundo da loja e a pia que demora a esvaziar no horário de pico.',
    servico: 'limpeza-de-caixa-de-gordura',
    faq: [
      {
        q: 'Minha lanchonete no Centro Sul de Cuiabá não tem caixa de gordura visível. Como é feita a limpeza?',
        a: 'Em pontos antigos a caixa pode estar sob o piso, tampada por revestimento, ou nem existir. Verificamos no local e, quando não há caixa, o desentupimento é feito direto no ramal da pia.',
      },
      {
        q: 'A pia de várias salas do prédio comercial onde trabalho, na Rua 13 de Junho, entope ao mesmo tempo. Por quê?',
        a: 'Quando mais de um ponto para junto, a obstrução está na tubulação que todos compartilham, não em uma sala só. Nesse caso o serviço precisa ser combinado com a administração do prédio.',
      },
      {
        q: 'Vocês atendem o Centro Sul no domingo, quando o comércio está fechado?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados, e o dia sem movimento costuma ser o melhor para trabalhar na caixa e no ramal da loja.',
      },
    ],
  },
  {
    slug: 'goiabeiras',
    nome: 'Goiabeiras',
    zona: 'Região Oeste',
    vizinhos: ['Popular', 'Duque de Caxias', 'Quilombo', 'Centro Norte'],
    referencias: ['Praça 8 de Abril', 'Avenida Getúlio Vargas', 'Avenida Isaac Póvoas'],
    h1: 'Desentupidora no Goiabeiras para prédios e apartamentos',
    metaDescription:
      'Desentupidora no Goiabeiras, em Cuiabá: coluna de prédio, pia e ralo de apartamento. Orçamento grátis no local e valor informado antes do serviço.',
    abertura:
      'Subindo a Avenida Getúlio Vargas em direção à Praça 8 de Abril, o Goiabeiras vai trocando as casas por torres residenciais. É um dos bairros mais verticais de Cuiabá, e em prédio alto o entupimento raramente é assunto de um morador só. Síndicos, administradoras e moradores chamam a Desentupidora Preço Bom quando a água começa a voltar pelo ralo de quem mora embaixo, com atendimento 24 horas e orçamento grátis no local.',
    imovel:
      'Predominam edifícios residenciais de muitos andares, de padrão médio e alto, com consultórios e escritórios nas avenidas principais.',
    problema:
      'Em torre alta, a gordura das cozinhas de todos os andares vai aderindo à parede da coluna e estreita a passagem. O resultado aparece nos primeiros pavimentos, com espuma e água suja subindo pela pia ou pelo ralo.',
    servico: 'desentupimento-de-coluna',
    faq: [
      {
        q: 'Moro no segundo andar de um prédio no Goiabeiras e sai espuma pelo ralo da área de serviço. Isso é entupimento?',
        a: 'É um sinal clássico de coluna com passagem reduzida: o sabão das máquinas dos andares de cima encontra resistência e a espuma retorna pelos pontos mais baixos. A limpeza é feita na prumada, não no ralo do apartamento.',
      },
      {
        q: 'Quem paga o desentupimento da coluna em um condomínio do Goiabeiras, o morador ou o prédio?',
        a: 'A coluna é área comum, então em regra a despesa é do condomínio. Já o ramal interno de cada apartamento é do proprietário. No local identificamos em qual dos dois está a obstrução.',
      },
      {
        q: 'Dá para fazer a limpeza preventiva das colunas de um edifício do Goiabeiras sem interditar os apartamentos?',
        a: 'Dá. O acesso costuma ser pelas inspeções da garagem e do térreo, e pedimos apenas que os moradores evitem usar pias e tanques daquela prumada durante o serviço.',
      },
    ],
  },
  {
    slug: 'popular',
    nome: 'Popular',
    zona: 'Região Oeste',
    vizinhos: ['Goiabeiras', 'Duque de Caxias', 'Centro Sul'],
    referencias: ['Praça Popular', 'Avenida Isaac Póvoas'],
    h1: 'Desentupimento no bairro Popular, do bar ao apartamento',
    metaDescription:
      'Desentupidora no bairro Popular, em Cuiabá, para bares e restaurantes da Praça Popular e prédios residenciais. 24 horas, sem taxa de visita.',
    abertura:
      'A noite de Cuiabá passa pela Praça Popular. Bares, hamburguerias e restaurantes lotam as calçadas ao redor dela, enquanto nas ruas de trás os prédios residenciais crescem em altura. Chapa, fritadeira e louça de salão cheio produzem gordura em um ritmo que caixa pequena não acompanha. A Desentupidora Preço Bom atende o bairro Popular de madrugada, depois que a última mesa fecha, com orçamento grátis no local e sem taxa de visita.',
    imovel:
      'O bairro combina casas adaptadas para bares e restaurantes em volta da praça com edifícios residenciais altos e salas comerciais na Avenida Isaac Póvoas.',
    problema:
      'Casa residencial convertida em bar mantém a caixa de gordura original, dimensionada para uma família. Com cozinha profissional ela enche em poucos dias, transborda e manda mau cheiro para o salão.',
    servico: 'limpeza-de-caixa-de-gordura',
    faq: [
      {
        q: 'Tenho um bar na Praça Popular e a caixa de gordura transborda toda semana. O que está errado?',
        a: 'Provavelmente a caixa é pequena para o volume da cozinha ou o ramal de saída já está parcialmente fechado. Fazemos a limpeza, verificamos a saída e dizemos com que frequência ela precisa ser repetida.',
      },
      {
        q: 'O serviço em restaurante do bairro Popular pode ser feito depois das duas da manhã?',
        a: 'Pode. Atendemos 24 horas, todos os dias, e o horário após o fechamento evita cheiro e barulho com clientes na casa.',
      },
      {
        q: 'Moro em prédio no Popular, ao lado de um restaurante. O cheiro de esgoto na calçada vem de onde?',
        a: 'Geralmente de uma caixa de gordura ou de inspeção saturada perto da calçada, que pode ser do comércio ou do próprio edifício. Só abrindo as caixas é possível apontar a origem.',
      },
    ],
  },
  {
    slug: 'duque-de-caxias',
    nome: 'Duque de Caxias',
    zona: 'Região Oeste',
    vizinhos: ['Goiabeiras', 'Quilombo', 'Popular', 'Santa Rosa', 'Jardim Cuiabá'],
    referencias: ['Avenida Miguel Sutil', 'Avenida Lavapés'],
    h1: 'Duque de Caxias, Cuiabá: desentupidora para condomínios',
    metaDescription:
      'Desentupidora no Duque de Caxias, em Cuiabá, para torres residenciais e condomínios. Orçamento grátis no local e atendimento 24 horas, chegamos em 20 minutos.',
    abertura:
      'Torres novas, com varanda gourmet e churrasqueira em todos os andares, mudaram o perfil do Duque de Caxias nos últimos anos. O bairro fica entre a Avenida Miguel Sutil e a Avenida Lavapés e reúne alguns dos condomínios mais altos de Cuiabá. Churrasqueira de varanda significa mais uma pia de gordura ligada à prumada, e é aí que entra a Desentupidora Preço Bom, com atendimento 24 horas e orçamento sem compromisso para moradores e síndicos.',
    imovel:
      'São condomínios verticais de padrão alto, com apartamentos amplos, varanda gourmet e áreas de lazer completas, além de algumas casas remanescentes.',
    problema:
      'A pia da varanda gourmet recebe gordura de carne e carvão e quase nunca tem caixa de gordura própria. O resíduo vai direto para a coluna, que estreita e passa a devolver água nos andares de baixo.',
    servico: 'desentupimento-de-coluna',
    faq: [
      {
        q: 'A pia da churrasqueira do meu apartamento no Duque de Caxias entope mais que a da cozinha. É normal?',
        a: 'É comum. Gordura de carne solidifica rápido e cinza de carvão forma uma pasta dentro do sifão e do ramal. Evitar lavar a grelha direto nessa pia já reduz bastante o problema.',
      },
      {
        q: 'O prédio é novo, entregue há pouco tempo no Duque de Caxias. Mesmo assim pode entupir?',
        a: 'Pode. Em edifício recém-entregue é frequente encontrar resto de obra na tubulação, como massa, areia e pedaços de revestimento, que seguram a gordura e os resíduos do uso diário.',
      },
      {
        q: 'Vocês atendem a área de lazer do condomínio, como o ralo do deck da piscina e o espaço gourmet?',
        a: 'Sim. Atendemos as áreas comuns da mesma forma que os apartamentos, com orçamento apresentado ao síndico ou ao zelador antes de o serviço começar.',
      },
    ],
  },
  {
    slug: 'quilombo',
    nome: 'Quilombo',
    zona: 'Região Oeste',
    vizinhos: ['Goiabeiras', 'Duque de Caxias', 'Araés', 'Centro Norte'],
    referencias: ['Avenida São Sebastião', 'Avenida Presidente Marques'],
    h1: 'Desentupidora 24 horas no Quilombo, em Cuiabá',
    metaDescription:
      'Coluna, pia ou ralo entupido no Quilombo, em Cuiabá? A Desentupidora Preço Bom atende prédios e casas 24 horas, com orçamento grátis no local.',
    abertura:
      'Entre a Avenida São Sebastião e a Avenida Presidente Marques, o Quilombo junta duas gerações de construção: prédios residenciais de vinte ou trinta anos, que já pedem manutenção nas prumadas, e torres recém-entregues. Há também casas antigas ocupadas por clínicas, salões e escritórios. Quando o problema aparece em mais de um apartamento ao mesmo tempo, a Desentupidora Preço Bom avalia a coluna inteira e informa o valor antes de começar o serviço.',
    imovel:
      'Convivem edifícios residenciais de idades diferentes e casas térreas adaptadas para clínicas, salões de beleza e pequenos escritórios.',
    problema:
      'Nos prédios mais antigos, a coluna de esgoto acumulou décadas de incrustação e qualquer objeto que desce pelo vaso fica preso nela. O vaso do térreo ou do primeiro andar é o primeiro a transbordar.',
    servico: 'desentupimento-de-coluna',
    faq: [
      {
        q: 'O vaso do meu apartamento no primeiro andar, no Quilombo, enche quando o vizinho de cima dá descarga. O que acontece?',
        a: 'A coluna de esgoto do prédio está obstruída abaixo do seu apartamento. O que desce dos outros andares não passa e sobe pelo seu vaso, que é a saída mais próxima.',
      },
      {
        q: 'Tenho um salão de beleza em uma casa no Quilombo e o lavatório vive entupido. Tem solução duradoura?',
        a: 'Cabelo, tinta e creme formam um bloco no sifão e no ramal. Fazemos a remoção mecânica e orientamos o uso de ralo com cesto no lavatório, que segura o cabelo antes de ele entrar no cano.',
      },
      {
        q: 'Prédios antigos do Quilombo precisam de limpeza periódica de prumada?',
        a: 'É recomendável. A limpeza preventiva com hidrojateamento remove a crosta antes que ela feche a passagem, e a frequência depende do número de apartamentos e da idade da tubulação.',
      },
    ],
  },
  {
    slug: 'araes',
    nome: 'Araés',
    zona: 'Região Central',
    vizinhos: ['Centro Norte', 'Baú', 'Quilombo', 'Bosque da Saúde'],
    referencias: ['Avenida Mato Grosso', 'Avenida Historiador Rubens de Mendonça'],
    h1: 'Pia ou ralo entupido no Araés? Desentupidora Preço Bom',
    metaDescription:
      'Desentupidora no Araés, em Cuiabá, para casas, predinhos e comércios perto da Avenida Mato Grosso. Sem taxa de visita, orçamento grátis, 24 horas.',
    abertura:
      'O Araés fica colado ao Centro e guarda um jeito de bairro antigo de moradia: casa com quintal, predinho de três andares sem elevador e comércio de vizinhança, tudo a poucos passos da Avenida Mato Grosso. Muitas dessas cozinhas ainda têm a pia ligada a um cano fino que percorre o quintal inteiro. Se a água parou na cuba, a Desentupidora Preço Bom vai ao local, olha o problema e diz o valor antes de pegar na ferramenta.',
    imovel:
      'Casas térreas de alvenaria com quintal, sobrados e prédios baixos de apartamentos, além de salas comerciais nas avenidas.',
    problema:
      'A pia da cozinha descarrega em um ramal comprido e de pouca queda, onde gordura e resto de comida vão parando. A obstrução costuma estar a vários metros da cuba, fora do alcance de arame e desentupidor de borracha.',
    servico: 'desentupimento-de-pia',
    faq: [
      {
        q: 'Já limpei o sifão da pia da minha casa no Araés e a água continua parada. Onde está o entupimento?',
        a: 'Se o sifão está limpo, a obstrução está mais adiante, no ramal entre a pia e a caixa de gordura ou na própria caixa. A máquina com cabo flexível percorre esse trecho e desfaz o bloqueio.',
      },
      {
        q: 'Moro em um predinho sem síndico no Araés. Como fica o serviço quando o problema é do prédio todo?',
        a: 'Fazemos o orçamento no local e apresentamos um único valor, que os moradores dividem como combinarem entre si. O serviço só começa depois que alguém responsável aprova.',
      },
      {
        q: 'Usar soda cáustica na pia resolve nas tubulações antigas do Araés?',
        a: 'Raramente resolve e pode piorar: a soda reage com a gordura e forma uma massa dura dentro do cano, além de atacar tubulação antiga. A remoção mecânica é mais segura.',
      },
    ],
  },
  {
    slug: 'bandeirantes',
    nome: 'Bandeirantes',
    zona: 'Região Central',
    vizinhos: ['Centro Norte', 'Centro Sul', 'Poção', 'Lixeira', 'Dom Aquino'],
    referencias: ['Avenida Coronel Escolástico', 'Avenida General Valle'],
    h1: 'Desentupimento no Bandeirantes: clínicas, casas e comércios',
    metaDescription:
      'Vaso sanitário entupido em casa, clínica ou escritório no Bandeirantes, em Cuiabá? Atendimento 24 horas, orçamento grátis no local, sem taxa de visita.',
    abertura:
      'Quem passa pela Avenida Coronel Escolástico ou pela Avenida General Valle vê um Bandeirantes de serviços: laboratórios, consultórios, escritórios de contabilidade e escolas instalados em casas que um dia foram residências. Banheiro projetado para cinco pessoas hoje recebe cinquenta por dia. A conta chega no vaso sanitário. A Desentupidora Preço Bom atende o bairro em qualquer horário, inclusive fora do expediente, com orçamento grátis no local.',
    imovel:
      'Casas antigas convertidas em clínicas, escritórios e escolas, ao lado de residências térreas e de pequenos prédios comerciais.',
    problema:
      'Em banheiro de uso público, papel toalha, lenço umedecido e absorvente vão parar no vaso e não se desfazem na água. O material enrosca na curva de saída e a bacia passa a encher a cada descarga.',
    servico: 'desentupimento-de-vaso-sanitario',
    faq: [
      {
        q: 'O banheiro dos pacientes da minha clínica no Bandeirantes entope com frequência. Como evitar?',
        a: 'Quase sempre a causa é papel toalha jogado no vaso. Uma lixeira grande e visível ao lado da bacia e um aviso simples reduzem muito as ocorrências. Quando já entupiu, a remoção é mecânica.',
      },
      {
        q: 'Dá para desentupir o vaso sem tirar a bacia do lugar?',
        a: 'Na maioria dos casos, sim, usando equipamento próprio para a curva do vaso. A retirada da bacia só é necessária quando há objeto rígido preso, e isso é avisado antes.',
      },
      {
        q: 'Meu escritório no Bandeirantes só pode receber a equipe depois das 18h. Tem problema?',
        a: 'Nenhum. O atendimento é 24 horas, todos os dias, então o serviço pode ser feito à noite ou no fim de semana.',
      },
    ],
  },
  {
    slug: 'bau',
    nome: 'Baú',
    zona: 'Região Central',
    vizinhos: ['Centro Norte', 'Araés', 'Lixeira', 'Bandeirantes'],
    referencias: ['Avenida Historiador Rubens de Mendonça', 'Avenida Tenente-Coronel Duarte'],
    h1: 'Desentupidora no Baú com orçamento grátis no local',
    metaDescription:
      'Desentupidora no Baú, em Cuiabá: canos antigos, ralos e pias de casas e pequenos comércios. Você sabe o valor antes do serviço começar. 24 horas.',
    abertura:
      'Pequeno, antigo e encostado no Centro, o Baú é daqueles bairros em que as casas foram erguidas no alinhamento da calçada, uma grudada na outra, com um corredor lateral estreito levando ao fundo do terreno. É por baixo desse corredor que corre o cano de todo o imóvel. A Desentupidora Preço Bom atende moradores e comerciantes do Baú com atendimento residencial e comercial, 24 horas, e orçamento sem compromisso.',
    imovel:
      'Casas térreas antigas de frente estreita, geminadas ou muito próximas, algumas com cômodos de aluguel nos fundos e pequeno comércio na frente.',
    problema:
      'Um único cano recebe banheiro, cozinha e tanque e atravessa o lote até a rua. Com as ampliações feitas ao longo dos anos, ele ganhou curvas e emendas onde o resíduo fica retido.',
    servico: 'desentupimento-de-cano',
    faq: [
      {
        q: 'Minha casa no Baú tem cômodos alugados no fundo, todos no mesmo cano. Vocês desentopem a linha inteira?',
        a: 'Sim. Percorremos o cano desde o ponto mais distante até a saída para a rua, porque limpar só um trecho deixa o resto pronto para entupir de novo.',
      },
      {
        q: 'O corredor lateral da casa é muito estreito. A máquina passa?',
        a: 'Passa. O equipamento para ramais residenciais é compacto e pode ser levado na mão, e o cabo alcança vários metros a partir de um único ponto de acesso.',
      },
      {
        q: 'Vale a pena fazer inspeção com câmera em um cano antigo do Baú?',
        a: 'Vale quando o entupimento volta com frequência no mesmo lugar. A imagem mostra se há cano amassado, desencaixado ou com raiz, o que explica a repetição.',
      },
    ],
  },
  {
    slug: 'lixeira',
    nome: 'Lixeira',
    zona: 'Região Central',
    vizinhos: ['Baú', 'Araés', 'Poção', 'Bandeirantes'],
    referencias: ['Avenida Tenente-Coronel Duarte', 'Avenida Coronel Escolástico'],
    h1: 'Esgoto entupido na Lixeira? Desentupimento 24 horas',
    metaDescription:
      'Desentupidora na Lixeira, em Cuiabá, para esgoto, caixa de inspeção e ralos de casas antigas. Orçamento grátis no local e sem taxa de visita.',
    abertura:
      'Ladeiras curtas e ruas tortas dão à Lixeira um desenho que vem de antes de qualquer planejamento urbano. As casas acompanham o sobe e desce do terreno, e a ligação de esgoto de muitas delas desce em degraus até encontrar a rede da rua. Cada desnível desses é um ponto onde o material pode parar. A Desentupidora Preço Bom atende a Lixeira todos os dias, com orçamento grátis no local e valor combinado antes do serviço.',
    imovel:
      'Casas térreas e sobrados simples em lotes irregulares, muitas vezes com mais de uma moradia no mesmo terreno, em ruas de aclive.',
    problema:
      'A caixa de inspeção no ponto mais baixo do lote recebe o esgoto de todas as moradias do terreno. Quando a saída dela para a rua obstrui, a caixa enche e o retorno aparece no banheiro mais próximo.',
    servico: 'desentupimento-de-esgoto',
    faq: [
      {
        q: 'A caixa de esgoto no quintal da minha casa na Lixeira está cheia até a tampa. O entupimento é meu ou da rua?',
        a: 'Abrimos as caixas na sequência para descobrir. Se a última caixa do lote estiver cheia e a rede da rua também, o problema é da concessionária; se a rua estiver livre, a obstrução é no seu ramal e nós resolvemos.',
      },
      {
        q: 'Na Lixeira há várias casas no mesmo lote. Como saber qual delas causou o entupimento do esgoto?',
        a: 'Nem sempre dá para apontar uma só, porque o ramal é comum. O que mostramos é o ponto da obstrução e o tipo de material retirado, o que ajuda os moradores a se organizarem.',
      },
      {
        q: 'Rua em ladeira ajuda ou atrapalha o escoamento do esgoto?',
        a: 'A queda ajuda a água a correr, mas quando é forte demais a parte líquida vai embora e o sólido fica para trás no cano. Por isso há entupimento também em terreno inclinado.',
      },
    ],
  },
  {
    slug: 'pocao',
    nome: 'Poção',
    zona: 'Região Central',
    vizinhos: ['Lixeira', 'Bandeirantes', 'Dom Aquino', 'Jardim das Américas'],
    referencias: ['Avenida Fernando Corrêa da Costa', 'Avenida Coronel Escolástico'],
    h1: 'Poção, Cuiabá: desentupidora para ralos, pias e esgoto',
    metaDescription:
      'Ralo do banheiro ou do quintal entupido no Poção, em Cuiabá? Desentupidora Preço Bom, com orçamento sem compromisso e atendimento 24 horas.',
    abertura:
      'É no Poção que a Avenida Fernando Corrêa da Costa começa a se afastar do Centro, e o bairro tem um pouco dos dois mundos: residências antigas de famílias tradicionais e, na avenida, oficinas, lojas de peças e revendas. Em Cuiabá toma-se banho várias vezes por dia por causa do calor, e ralo de box trabalha sem descanso. A Desentupidora Preço Bom cuida dos ralos do Poção com orçamento sem compromisso e sem taxa de visita.',
    imovel:
      'Casas térreas amplas e antigas, com varanda e quintal cimentado, e imóveis comerciais ao longo das avenidas.',
    problema:
      'Cabelo, sabonete e a poeira fina que entra em casa na estiagem formam um tampão no ralo do banheiro e na caixa sifonada. A água do banho passa a empoçar no box e o cheiro sobe quando o ralo fica dias sem uso.',
    servico: 'desentupimento-de-ralo',
    faq: [
      {
        q: 'O ralo do banheiro da minha casa no Poção cheira mal mesmo sem estar entupido. Tem relação?',
        a: 'Tem. Com o calor de Cuiabá a água do fecho da caixa sifonada evapora rápido em banheiro pouco usado, e o resíduo acumulado ali dentro exala cheiro. A limpeza do ralo e da caixa resolve as duas coisas.',
      },
      {
        q: 'Tenho uma oficina na Fernando Corrêa, no Poção. Graxa e óleo de motor entopem o ralo do piso?',
        a: 'Entopem. A graxa se mistura com a terra trazida pelos carros e forma uma massa pesada na tubulação. O desentupimento é feito com equipamento adequado para esse tipo de resíduo.',
      },
      {
        q: 'O ralo do quintal entope com as folhas da mangueira. Vocês atendem esse tipo de caso?',
        a: 'Sim. Folha, flor e manga pequena entram pela grelha e travam na primeira curva. Retiramos o material e desobstruímos o ramal até a saída.',
      },
    ],
  },
  {
    slug: 'dom-aquino',
    nome: 'Dom Aquino',
    zona: 'Região Central',
    vizinhos: ['Centro Sul', 'Porto', 'Poção', 'Bandeirantes', 'Jardim Europa'],
    referencias: ['Avenida Dom Aquino', 'Avenida General Mello'],
    h1: 'Desentupidora no Dom Aquino para casas e comércios',
    metaDescription:
      'Desentupidora no Dom Aquino, em Cuiabá: esgoto, ralos e pias de casas antigas e comércios. Atendimento 24 horas, orçamento grátis, sem taxa de visita.',
    abertura:
      'Vizinho do Centro e do Porto, o Dom Aquino é um dos bairros tradicionais de Cuiabá, com quintais fundos onde ainda se encontram mangueira, cajueiro e pé de caju-do-mato. Árvore grande e encanamento velho dividem o mesmo subsolo, e a raiz sempre acha a emenda do cano. Se o esgoto começou a voltar devagar e piora a cada mês, a Desentupidora Preço Bom vai ao imóvel, faz o orçamento grátis e explica o que encontrou.',
    imovel:
      'Casas antigas em lotes compridos, com quintal arborizado, e trechos de comércio e serviços nas avenidas que cortam o bairro.',
    problema:
      'As raízes das árvores do quintal entram pelas juntas da tubulação de esgoto em busca de umidade e crescem lá dentro, formando uma rede que segura papel e resíduos. O entupimento volta de tempos em tempos, sempre no mesmo trecho.',
    servico: 'desentupimento-de-esgoto',
    faq: [
      {
        q: 'Tenho uma mangueira antiga no quintal da casa no Dom Aquino. Raiz dentro do cano de esgoto tem conserto sem cortar a árvore?',
        a: 'A raiz é cortada por dentro do cano com ferramenta rotativa ou jato de alta pressão, sem mexer na árvore. Como ela volta a crescer, o indicado é repetir a limpeza periodicamente.',
      },
      {
        q: 'Como saber se o entupimento recorrente da minha casa é raiz ou outra coisa?',
        a: 'O cabo da máquina volta com fiapos de raiz quando é esse o caso. Para ter certeza do ponto e do estado do cano, a inspeção por câmera mostra a imagem de dentro da tubulação.',
      },
      {
        q: 'Vocês atendem os comércios das avenidas do Dom Aquino durante o horário de funcionamento?',
        a: 'Atendemos no horário que for melhor para o comerciante, de dia, à noite ou no fim de semana, com atendimento 24 horas.',
      },
    ],
  },
  {
    slug: 'porto',
    nome: 'Porto',
    zona: 'Região Central',
    vizinhos: ['Centro Sul', 'Dom Aquino', 'Cidade Alta'],
    referencias: ['Mercado do Porto', 'Avenida 15 de Novembro', 'Sesc Arsenal', 'Rio Cuiabá'],
    h1: 'Desentupimento de rede pluvial e ralos no Porto, em Cuiabá',
    metaDescription:
      'Desentupidora no Porto, em Cuiabá: rede pluvial, calhas e ralos de casas e comércios perto do Rio Cuiabá. Orçamento grátis no local, 24 horas.',
    abertura:
      'Foi pelo Porto que Cuiabá começou a receber gente e mercadoria, e o bairro continua à beira do Rio Cuiabá, na parte mais baixa da região central. Quando a temporada de chuva chega, a água que cai nos bairros de cima desce toda para cá. Calha, ralo de quintal e tubulação pluvial precisam estar livres antes da primeira pancada. A Desentupidora Preço Bom faz essa limpeza com orçamento grátis no local, para residências e comércios.',
    imovel:
      'Casarões e casas antigas, galpões, lojas de atacado e pontos comerciais ligados ao Mercado do Porto, em terreno baixo e próximo ao rio.',
    problema:
      'Durante os meses secos, folhas, terra e lixo miúdo se acumulam nas calhas, nos ralos e nos tubos de águas pluviais. Na primeira chuva forte esse material é arrastado de uma vez e tranca a tubulação, alagando quintal e garagem.',
    servico: 'desentupimento-de-rede-pluvial',
    faq: [
      {
        q: 'Qual a melhor época para limpar a rede de água de chuva de um imóvel no Porto?',
        a: 'No fim da estiagem, antes das primeiras chuvas fortes, que em Cuiabá costumam vir na primavera. Assim a tubulação recebe a temporada de chuva sem o material acumulado nos meses secos.',
      },
      {
        q: 'Meu comércio perto do Mercado do Porto alaga na frente quando chove. A culpa é do meu ralo ou da boca de lobo?',
        a: 'Verificamos primeiro a rede interna do imóvel. Se ela estiver livre e a água não escoar na rua, o problema é da galeria pública, que cabe à prefeitura, e informamos isso com clareza.',
      },
      {
        q: 'Trabalho com pescado no Porto. Escama e resto de peixe entopem o ralo?',
        a: 'Entopem bastante. A escama gruda na parede do cano e forma camadas com a gordura do peixe. Um ralo com cesto ajuda, e a limpeza periódica do ramal evita a parada no meio do expediente.',
      },
    ],
  },
  {
    slug: 'cidade-alta',
    nome: 'Cidade Alta',
    zona: 'Região Oeste',
    vizinhos: ['Porto', 'Jardim Cuiabá', 'Popular', 'Centro Sul'],
    referencias: ['Avenida Miguel Sutil', 'Avenida 8 de Abril'],
    h1: 'Desentupidora na Cidade Alta: atendimento a qualquer hora',
    metaDescription:
      'Desentupidora na Cidade Alta, em Cuiabá, para canos, pias e ralos de casas e sobrados. Orçamento grátis no local e valor informado antes do serviço.',
    abertura:
      'A Cidade Alta faz jus ao nome: fica no alto, acima do Porto, com ruas que descem em direção ao rio. É um bairro de moradia consolidado, onde muitas casas ganharam um segundo pavimento, uma edícula ou um salão comercial na frente ao longo dos anos. Cada puxadinho novo foi ligado ao cano que já existia. Na hora em que ele não dá mais conta, a Desentupidora Preço Bom atende com orçamento grátis no local.',
    imovel:
      'Casas térreas e sobrados de alvenaria, vários deles ampliados em etapas, com pequenos comércios de bairro no térreo.',
    problema:
      'Banheiros e cozinhas acrescentados depois foram conectados à tubulação original com emendas improvisadas e pouco caimento. O cano principal fica sobrecarregado e entope nas junções.',
    servico: 'desentupimento-de-cano',
    faq: [
      {
        q: 'Construí um segundo andar na minha casa na Cidade Alta e o banheiro de baixo passou a entupir. Tem a ver?',
        a: 'Provavelmente sim. O cano antigo passou a receber o dobro de volume, e a junção com a tubulação nova costuma ser o ponto fraco. Desobstruímos o trecho e mostramos onde está a restrição.',
      },
      {
        q: 'Vocês fazem a troca do cano se ele estiver pequeno demais?',
        a: 'Não. Nosso trabalho é o desentupimento e a limpeza da tubulação. Se o cano precisar ser substituído, informamos o trecho exato para que um profissional de obra faça a troca.',
      },
      {
        q: 'Em dia de jogo ou evento na região da Arena, o atendimento na Cidade Alta é afetado?',
        a: 'O atendimento continua 24 horas, todos os dias. Se houver ruas bloqueadas no entorno, combinamos por telefone o melhor acesso até o imóvel.',
      },
    ],
  },
  {
    slug: 'santa-rosa',
    nome: 'Santa Rosa',
    zona: 'Região Oeste',
    vizinhos: ['Duque de Caxias', 'Jardim Cuiabá', 'Despraiado', 'Ribeirão do Lipa'],
    referencias: ['Avenida Miguel Sutil', 'Avenida Antártica'],
    h1: 'Limpeza de caixa de gordura e desentupimento no Santa Rosa',
    metaDescription:
      'Desentupidora no Santa Rosa, em Cuiabá: caixa de gordura de casas com área gourmet, pias e ralos. Orçamento sem compromisso, atendimento 24 horas.',
    abertura:
      'Casa grande, piscina e um espaço gourmet completo no fundo do terreno: esse é o padrão de boa parte do Santa Rosa, bairro residencial nobre do lado de fora da Avenida Miguel Sutil. Em Cuiabá a peixada de domingo e o churrasco são coisa séria, e a segunda cozinha da casa trabalha tanto quanto a principal. A Desentupidora Preço Bom faz a limpeza das caixas de gordura do Santa Rosa com orçamento sem compromisso.',
    imovel:
      'Residências de alto padrão em lotes grandes, com edícula, área gourmet e piscina, além de prédios residenciais e restaurantes nas vias principais.',
    problema:
      'A casa tem duas ou três caixas de gordura, uma para cada cozinha, e a da área gourmet costuma ser esquecida. Óleo de fritura de peixe e gordura de churrasco endurecem nela e fecham a saída para o esgoto.',
    servico: 'limpeza-de-caixa-de-gordura',
    faq: [
      {
        q: 'Minha casa no Santa Rosa tem cozinha interna e área gourmet. Preciso limpar mais de uma caixa de gordura?',
        a: 'Sim. Normalmente cada cozinha descarrega em uma caixa própria, e todas precisam de limpeza. No local localizamos as caixas existentes e incluímos todas no mesmo orçamento.',
      },
      {
        q: 'O óleo usado para fritar peixe pode ser jogado na pia com água quente?',
        a: 'Não. A água quente só empurra o óleo um pouco mais longe, onde ele esfria e gruda no cano. O certo é guardar o óleo em garrafa e levar a um ponto de coleta.',
      },
      {
        q: 'O serviço na caixa de gordura suja o jardim ou a área da piscina?',
        a: 'O resíduo é retirado com cuidado e acondicionado para não espalhar. Ao final, a caixa é lavada e a área em volta fica limpa.',
      },
    ],
  },
  {
    slug: 'jardim-cuiaba',
    nome: 'Jardim Cuiabá',
    zona: 'Região Oeste',
    vizinhos: ['Santa Rosa', 'Cidade Alta', 'Duque de Caxias', 'Popular'],
    referencias: ['Avenida das Flores', 'Avenida Miguel Sutil'],
    h1: 'Jardim Cuiabá: desentupidora para clínicas e residências',
    metaDescription:
      'Desentupidora no Jardim Cuiabá para clínicas, consultórios e casas. Vaso sanitário, pia e ralo desentupidos com orçamento grátis no local. 24 horas.',
    abertura:
      'Poucos bairros de Cuiabá concentram tanto atendimento de saúde quanto o Jardim Cuiabá. Na Avenida das Flores e nas ruas ao lado funcionam clínicas, laboratórios e consultórios, muitos em casas adaptadas, que recebem pacientes do estado inteiro. Banheiro interditado em sala de espera cheia não pode esperar o dia seguinte. A Desentupidora Preço Bom atende o Jardim Cuiabá com atendimento residencial e comercial, e chegamos em 20 minutos.',
    imovel:
      'Casas de padrão alto, parte delas transformada em clínicas e consultórios, edifícios de salas médicas e residências com jardim.',
    problema:
      'Banheiros de recepção recebem um volume de uso muito acima do residencial, com descarte de papel toalha e outros materiais no vaso. A bacia entope na curva ou no ramal logo abaixo dela.',
    servico: 'desentupimento-de-vaso-sanitario',
    faq: [
      {
        q: 'Minha clínica no Jardim Cuiabá não pode parar. O desentupimento do vaso pode ser feito com pacientes no prédio?',
        a: 'Pode. O serviço é feito dentro do banheiro, com a porta fechada, e o equipamento usado em vaso sanitário é silencioso. Se preferir, atendemos antes da abertura ou após o último paciente.',
      },
      {
        q: 'O vaso com caixa acoplada da clínica não dá descarga forte e entope sempre. É entupimento ou defeito da descarga?',
        a: 'Pode ser um dos dois. Testamos o escoamento da bacia e do ramal; se a tubulação estiver livre, o problema está no mecanismo da caixa, e avisamos para que seja regulado.',
      },
      {
        q: 'Vocês emitem comprovante do serviço para a administração da clínica?',
        a: 'Sim. O serviço realizado e o valor combinado ficam registrados em documento entregue ao responsável.',
      },
    ],
  },
  {
    slug: 'jardim-das-americas',
    nome: 'Jardim das Américas',
    zona: 'Região Leste',
    vizinhos: ['Boa Esperança', 'Poção', 'Jardim Itália', 'Jardim Europa'],
    referencias: ['Avenida Fernando Corrêa da Costa', 'Avenida Brasília', 'Shopping 3 Américas'],
    h1: 'Desentupidora no Jardim das Américas, perto do 3 Américas',
    metaDescription:
      'Desentupidora no Jardim das Américas, em Cuiabá, para edifícios e casas próximos à Fernando Corrêa. Orçamento grátis no local, sem taxa de visita.',
    abertura:
      'Do alto dos prédios do Jardim das Américas dá para ver o campus da UFMT de um lado e a Avenida Fernando Corrêa da Costa do outro. O bairro cresceu ao redor da Avenida Brasília e do Shopping 3 Américas, primeiro com casas e depois com edifícios cada vez mais altos. Tanta gente empilhada na mesma prumada pede manutenção. A Desentupidora Preço Bom atende condomínios e casas do bairro 24 horas, sem taxa de visita.',
    imovel:
      'Edifícios residenciais altos, de várias décadas diferentes, misturados a casas de bom padrão e a comércio forte no entorno do shopping.',
    problema:
      'Nas prumadas de cozinha, a gordura vai formando um anel que reduz o diâmetro do tubo de cima a baixo. Um dia a passagem fecha na altura da garagem e a água suja aparece nos apartamentos dos primeiros andares.',
    servico: 'desentupimento-de-coluna',
    faq: [
      {
        q: 'Sou síndico de um prédio no Jardim das Américas. De quanto em quanto tempo devo limpar as prumadas?',
        a: 'Depende do número de unidades e da idade do edifício. Como referência, muitos condomínios fazem a limpeza preventiva uma vez por ano; avaliamos o estado das colunas no local, sem compromisso.',
      },
      {
        q: 'Durante a limpeza da coluna os moradores do prédio ficam sem água?',
        a: 'Não é preciso fechar a água. Pedimos apenas que os apartamentos daquela prumada não usem pia, tanque e máquina de lavar enquanto o trabalho estiver em andamento.',
      },
      {
        q: 'Apartamentos alugados para estudantes da UFMT no Jardim das Américas entopem mais?',
        a: 'Imóvel com alta rotatividade costuma receber menos cuidado com o que vai para o ralo e para a pia. Ralinho na cuba e lixeira no banheiro resolvem boa parte, e o restante é desentupimento comum.',
      },
    ],
  },
  {
    slug: 'boa-esperanca',
    nome: 'Boa Esperança',
    zona: 'Região Leste',
    vizinhos: ['Jardim das Américas', 'Jardim Itália', 'Coxipó', 'Jardim Universitário'],
    referencias: ['UFMT', 'Avenida Fernando Corrêa da Costa', 'Avenida Edgar Vieira'],
    h1: 'Pia entupida no Boa Esperança? Desentupidora ao lado da UFMT',
    metaDescription:
      'Desentupidora no Boa Esperança, em Cuiabá, para repúblicas, quitinetes e casas vizinhas à UFMT. Orçamento grátis e valor combinado antes do serviço.',
    abertura:
      'A vida do Boa Esperança gira em torno da UFMT. República, quitinete de fundo, pensionato e restaurante de prato feito ocupam as ruas vizinhas ao campus, e os moradores mudam a cada semestre. Seis estudantes dividindo uma cozinha, cada um lavando a louça do seu jeito, é receita certa para pia parada. A Desentupidora Preço Bom atende o Boa Esperança com orçamento grátis no local: você sabe o valor antes do serviço começar.',
    imovel:
      'Casas divididas em repúblicas, conjuntos de quitinetes e pequenos prédios de aluguel, com lanchonetes, copiadoras e restaurantes voltados aos estudantes.',
    problema:
      'Resto de arroz, macarrão, borra de café e óleo vão pela pia sem ralinho e se juntam no sifão e no ramal. Em cozinha compartilhada o acúmulo é rápido e a pia para de escoar de um dia para o outro.',
    servico: 'desentupimento-de-pia',
    faq: [
      {
        q: 'Moro em república no Boa Esperança. Quem deve pagar o desentupimento, os moradores ou o dono do imóvel?',
        a: 'Em regra, entupimento causado pelo uso é do inquilino, e problema de estrutura do cano é do proprietário. Informamos a causa encontrada para que vocês possam conversar com o dono ou a imobiliária.',
      },
      {
        q: 'Tenho dez quitinetes perto da UFMT e a pia de várias entope junto. É coincidência?',
        a: 'Não. As quitinetes costumam compartilhar um ramal coletor, e quando ele obstrui todas as pias ligadas a ele param. O serviço é feito no coletor, não em cada unidade.',
      },
      {
        q: 'O atendimento no Boa Esperança funciona nas férias e nos feriados prolongados?',
        a: 'Funciona. O atendimento é 24 horas, todos os dias, inclusive domingos e feriados. As férias, com imóveis vazios, são um bom momento para a limpeza preventiva.',
      },
    ],
  },
  {
    slug: 'jardim-italia',
    nome: 'Jardim Itália',
    zona: 'Região Leste',
    vizinhos: ['Boa Esperança', 'Jardim das Américas', 'Jardim Imperial'],
    referencias: ['Avenida Archimedes Pereira Lima', 'Avenida Itália'],
    h1: 'Desentupimento no Jardim Itália: calhas, ralos e rede pluvial',
    metaDescription:
      'Desentupidora no Jardim Itália, em Cuiabá: rede pluvial, calhas e ralos de casas e condomínios fechados. Orçamento sem compromisso, 24 horas.',
    abertura:
      'Telhados extensos, garagens para vários carros, jardins bem cuidados e piscina: as casas do Jardim Itália e dos condomínios fechados da região da Avenida Archimedes Pereira Lima têm muita área para captar chuva. Uma tempestade de verão em Cuiabá despeja um volume enorme em pouco tempo, e toda essa água precisa de caminho livre. A Desentupidora Preço Bom desobstrui a rede pluvial das residências do bairro, com orçamento sem compromisso.',
    imovel:
      'Casas de alto padrão em lotes amplos e condomínios horizontais fechados, com grandes áreas de telhado, jardim e piso externo.',
    problema:
      'Folhas do jardim, terra de canteiro e areia do rejunte vão para os ralos externos e para os tubos de descida das calhas. Com o tubo parcialmente fechado, a água da chuva forte transborda pela calha e invade varanda e garagem.',
    servico: 'desentupimento-de-rede-pluvial',
    faq: [
      {
        q: 'A calha da minha casa no Jardim Itália transborda mesmo estando limpa por cima. Qual o motivo?',
        a: 'O bloqueio costuma estar no tubo de descida ou na tubulação enterrada que leva a água à rua, onde não dá para ver. Desobstruímos esse trecho a partir da calha ou das caixas de passagem.',
      },
      {
        q: 'Moro em condomínio fechado no Jardim Itália. Vocês precisam de autorização para entrar?',
        a: 'Basta o morador liberar a entrada na portaria, como faria com qualquer prestador de serviço. Informamos o nome da equipe e a placa do veículo quando o condomínio exige.',
      },
      {
        q: 'Ralo linear da garagem e grelha do jardim precisam de manutenção diferente?',
        a: 'O princípio é o mesmo: retirar o material acumulado e limpar o tubo até a saída. O ralo linear junta mais areia e precisa ser aberto em toda a extensão.',
      },
    ],
  },
  {
    slug: 'bosque-da-saude',
    nome: 'Bosque da Saúde',
    zona: 'Região do CPA',
    vizinhos: ['Bela Vista', 'Araés', 'Morada do Ouro', 'Quilombo'],
    referencias: ['Avenida Historiador Rubens de Mendonça', 'Avenida Miguel Sutil'],
    h1: 'Desentupidora no Bosque da Saúde, junto à Avenida do CPA',
    metaDescription:
      'Desentupidora no Bosque da Saúde, em Cuiabá: colunas de prédios, pias e ralos em edifícios próximos à Avenida do CPA. Orçamento grátis, 24 horas.',
    abertura:
      'Perto do cruzamento da Avenida Miguel Sutil com a Avenida do CPA, o Bosque da Saúde virou endereço de torres residenciais e de edifícios de escritórios. Ainda restam ruas internas de casas, mas é nos prédios que acontece a maior parte dos chamados, quase sempre com mais de um apartamento reclamando ao mesmo tempo. A Desentupidora Preço Bom atende moradores, síndicos e empresas do bairro, com orçamento grátis no local.',
    imovel:
      'Edifícios residenciais e comerciais de vários andares nas proximidades das avenidas, com casas e sobrados nas ruas internas.',
    problema:
      'Em prédio de uso misto, a copa dos escritórios e as cozinhas dos apartamentos despejam na mesma coluna. O acúmulo de gordura e borra de café fecha a prumada e a água retorna pelos pontos mais baixos.',
    servico: 'desentupimento-de-coluna',
    faq: [
      {
        q: 'Trabalho em um edifício de escritórios no Bosque da Saúde e a pia da copa não escoa. O problema pode ser do prédio?',
        a: 'Pode. Se outras copas do mesmo alinhamento também estiverem lentas, a obstrução é na coluna. Se for só a sua, o entupimento é no sifão ou no ramal da sala.',
      },
      {
        q: 'Borra de café jogada na pia do escritório realmente entope?',
        a: 'Entope. O pó não se dissolve, decanta no fundo do cano e gruda na gordura. Em copa de empresa, onde se passa café o dia todo, é uma das principais causas.',
      },
      {
        q: 'Para atender um prédio no Bosque da Saúde vocês precisam interditar vaga ou elevador?',
        a: 'Em serviço dentro de sala ou apartamento, não. Para limpeza de coluna com equipamento maior, combinamos com a administração uma vaga próxima ao ponto de acesso.',
      },
    ],
  },
  {
    slug: 'bela-vista',
    nome: 'Bela Vista',
    zona: 'Região do CPA',
    vizinhos: ['Bosque da Saúde', 'Morada do Ouro', 'Centro Político Administrativo'],
    referencias: ['Avenida Historiador Rubens de Mendonça', 'Avenida Juliano Costa Marques'],
    h1: 'Ralo entupido no Bela Vista? Desentupidora Preço Bom, 24h',
    metaDescription:
      'Desentupidora no Bela Vista, em Cuiabá, para ralos, pias e canos de casas e sobrados. Atendimento 24 horas, orçamento grátis e sem taxa de visita.',
    abertura:
      'Atrás do movimento da Avenida do CPA existe um Bela Vista tranquilo, de casas com varanda na frente, área de serviço coberta nos fundos e piso lavado com mangueira quase todo dia para espantar a poeira da seca. Essa água toda carrega terra para dentro dos ralos. Quando ela começa a empoçar em vez de sumir, a Desentupidora Preço Bom atende o Bela Vista a qualquer hora e sem taxa de visita.',
    imovel:
      'Casas térreas e sobrados de padrão médio, com varanda, garagem coberta e área de serviço externa, e alguns prédios próximos à avenida.',
    problema:
      'A terra fina levada pela lavagem do piso e o fiapo da máquina de lavar assentam no ralo da área de serviço. O material vira um barro compacto no fundo da caixa sifonada e a água da máquina transborda pelo piso.',
    servico: 'desentupimento-de-ralo',
    faq: [
      {
        q: 'Quando a máquina de lavar esvazia, a água sobe pelo ralo da área de serviço da minha casa no Bela Vista. O que fazer?',
        a: 'O ramal está com a passagem reduzida e não dá conta da vazão da máquina. A desobstrução do ralo e do trecho até a caixa de inspeção costuma resolver.',
      },
      {
        q: 'Lavar a varanda todo dia na época da seca prejudica os ralos?',
        a: 'A água em si não, mas a poeira que ela arrasta sim. Varrer antes de lavar e manter a grelha no lugar diminuem a quantidade de terra que entra no cano.',
      },
      {
        q: 'Vocês atendem as casas do Bela Vista que ficam em rua sem saída ou viela estreita?',
        a: 'Atendemos. O equipamento para ralos e ramais é portátil, então o acesso de veículo até a porta não é necessário.',
      },
    ],
  },
  {
    slug: 'morada-do-ouro',
    nome: 'Morada do Ouro',
    zona: 'Região do CPA',
    vizinhos: ['Centro Político Administrativo', 'Bela Vista', 'CPA I', 'Bosque da Saúde'],
    referencias: ['Avenida Historiador Rubens de Mendonça', 'Parque Massairo Okamura'],
    h1: 'Morada do Ouro: desentupimento de esgoto, pias e ralos',
    metaDescription:
      'Desentupidora no Morada do Ouro, em Cuiabá, para casas e condomínios: esgoto, caixa de inspeção, pias e ralos. Orçamento grátis no local, 24 horas.',
    abertura:
      'Muita gente que trabalha no Centro Político Administrativo mora logo ao lado, no Morada do Ouro. O bairro nasceu planejado, com casas de mesmo desenho, e foi se transformando: muros subiram, garagens foram cobertas, quintais viraram área de lazer com piso por cima de tudo. Em muitas casas a caixa de inspeção do esgoto ficou escondida debaixo da cerâmica. A Desentupidora Preço Bom localiza o acesso e resolve, com orçamento grátis no local.',
    imovel:
      'Casas de conjunto planejado, hoje bastante reformadas, além de condomínios horizontais e alguns residenciais de apartamentos.',
    problema:
      'Com as caixas de inspeção cobertas por piso, o esgoto passa anos sem manutenção. A obstrução se forma no ramal entre a casa e a rua e só é percebida quando o vaso e os ralos param juntos.',
    servico: 'desentupimento-de-esgoto',
    faq: [
      {
        q: 'Reformei o quintal da minha casa no Morada do Ouro e não sei mais onde fica a caixa de esgoto. Vão ter que quebrar o piso?',
        a: 'Tentamos primeiro o acesso por outros pontos, como o ralo externo ou a saída do vaso, o que resolve na maioria dos casos sem quebrar piso nem parede. Se for indispensável abrir a caixa, avisamos antes.',
      },
      {
        q: 'Vaso e ralos do banheiro pararam ao mesmo tempo. Isso indica o quê?',
        a: 'Indica que a obstrução está depois do ponto onde esses canos se juntam, no ramal de esgoto principal. Desentupir só o vaso não adianta nesse caso.',
      },
      {
        q: 'Vocês atendem os condomínios horizontais do Morada do Ouro, inclusive a rede interna das ruas?',
        a: 'Sim. Atendemos tanto as casas quanto a rede coletora interna do condomínio, com orçamento apresentado à administração.',
      },
    ],
  },
  {
    slug: 'cpa-i',
    nome: 'CPA I',
    zona: 'Região do CPA',
    vizinhos: ['CPA II', 'CPA III', 'Morada do Ouro', 'Centro Político Administrativo'],
    referencias: ['Avenida Historiador Rubens de Mendonça', 'Terminal do CPA I'],
    h1: 'Desentupidora no CPA I com preço justo e orçamento grátis',
    metaDescription:
      'Desentupidora no CPA I, em Cuiabá: esgoto, caixas de inspeção e canos das casas do conjunto. Sem taxa de visita, orçamento grátis no local, 24 horas.',
    abertura:
      'Primeiro dos núcleos habitacionais erguidos no fim da Avenida do CPA, o CPA I tem casas que já passaram por três gerações da mesma família. O conjunto foi entregue com casas pequenas e padronizadas, e hoje quase nenhuma tem a planta original. A tubulação de esgoto, porém, em muitos lotes continua a mesma do dia da entrega. A Desentupidora Preço Bom atende o CPA I com preço justo e orçamento grátis no local.',
    imovel:
      'Casas de conjunto habitacional antigo, ampliadas ao longo de décadas com novos cômodos, segundo pavimento e ponto comercial na frente.',
    problema:
      'A manilha original do esgoto, envelhecida, tem juntas abertas e trechos afundados onde o resíduo fica parado. O entupimento se repete até que o trecho inteiro seja limpo, e não só o ponto de bloqueio.',
    servico: 'desentupimento-de-esgoto',
    faq: [
      {
        q: 'O esgoto da minha casa no CPA I ainda é de manilha de barro. Dá para desentupir sem danificar?',
        a: 'Dá. Ajustamos a ferramenta e a pressão ao material do cano. Se a manilha estiver quebrada ou desalinhada em algum ponto, mostramos onde para que você decida o que fazer.',
      },
      {
        q: 'A casa dos meus pais no CPA I entope todo ano na mesma época. Por que isso acontece?',
        a: 'Entupimento com data marcada costuma indicar um defeito fixo no cano, como barriga ou junta aberta, que acumula material aos poucos. A inspeção por câmera confirma o ponto.',
      },
      {
        q: 'Vocês atendem os comércios em volta do Terminal do CPA I?',
        a: 'Sim, o atendimento é residencial e comercial. Lanchonetes, lojas e salões da região são atendidos com o mesmo orçamento sem compromisso.',
      },
    ],
  },
  {
    slug: 'cpa-ii',
    nome: 'CPA II',
    zona: 'Região do CPA',
    vizinhos: ['CPA I', 'CPA III', 'CPA IV'],
    referencias: ['Avenida Brasil', 'Avenida Historiador Rubens de Mendonça'],
    h1: 'CPA II: caixa de gordura limpa e pia desentupida',
    metaDescription:
      'Desentupidora no CPA II, em Cuiabá, para padarias, lanchonetes e casas: limpeza de caixa de gordura e desentupimento de pia. Orçamento grátis.',
    abertura:
      'Quem mora na região do CPA resolve quase tudo sem descer para o Centro, e boa parte desse comércio está no CPA II: padaria, açougue, espetinho, pizzaria, marmitaria e lanchonete funcionando em imóveis que eram casas do conjunto. O espetinho da esquina e a pizzaria de bairro produzem gordura todas as noites. A Desentupidora Preço Bom limpa caixas de gordura no CPA II com orçamento grátis e sem taxa de visita.',
    imovel:
      'Casas de conjunto habitacional com a frente transformada em ponto comercial e a moradia mantida nos fundos ou no andar de cima.',
    problema:
      'Comércio de alimentação e residência usam a mesma caixa de gordura doméstica, que satura rapidamente. A gordura passa direto para o esgoto do lote e entope também a tubulação da moradia.',
    servico: 'limpeza-de-caixa-de-gordura',
    faq: [
      {
        q: 'Abri uma marmitaria na frente da minha casa no CPA II. A caixa de gordura da casa aguenta?',
        a: 'Dificilmente. Ela foi feita para uma cozinha de família. Enquanto não houver uma caixa maior, o caminho é limpar com mais frequência, e indicamos o intervalo depois de ver o volume no local.',
      },
      {
        q: 'Gordura de espetinho e de carne assada entope mais do que óleo de fritura?',
        a: 'A gordura animal endurece em temperatura ambiente e forma placas sólidas na caixa e no cano. O óleo vegetal demora mais a solidificar, mas os dois entopem.',
      },
      {
        q: 'O cheiro da caixa de gordura incomoda os clientes do meu ponto no CPA II. A limpeza resolve?',
        a: 'Resolve quando a origem é a caixa saturada. Após a limpeza, verificamos também se a tampa veda bem, porque tampa trincada deixa o cheiro escapar mesmo com a caixa limpa.',
      },
    ],
  },
  {
    slug: 'cpa-iii',
    nome: 'CPA III',
    zona: 'Região do CPA',
    vizinhos: ['CPA II', 'CPA IV', 'CPA I'],
    referencias: ['Terminal do CPA III', 'Avenida Historiador Rubens de Mendonça'],
    h1: 'Vaso sanitário entupido no CPA III? Desentupimento 24h',
    metaDescription:
      'Vaso sanitário, ralo ou pia entupidos no CPA III, em Cuiabá? Desentupidora Preço Bom: orçamento grátis no local e atendimento todos os dias, 24 horas.',
    abertura:
      'Casa cheia é a regra no CPA III. Avós, filhos e netos dividem o mesmo lote, às vezes com uma casa na frente e outra nos fundos, e um ou dois banheiros para todo mundo. Vaso que atende tanta gente não pode ficar parado nem por uma tarde. A Desentupidora Preço Bom atende o CPA III todos os dias, inclusive domingos e feriados, e você sabe o valor antes do serviço começar.',
    imovel:
      'Casas de conjunto habitacional com mais de uma família no lote, em geral com uma construção principal e edícula ou segunda casa nos fundos.',
    problema:
      'Com crianças pequenas em casa, brinquedo, tampa de frasco, fralda e lenço umedecido acabam no vaso. O objeto prende na curva interna da bacia e segura o papel que vem depois.',
    servico: 'desentupimento-de-vaso-sanitario',
    faq: [
      {
        q: 'Meu filho jogou um brinquedo no vaso da nossa casa no CPA III. Dá para tirar sem empurrar para o cano?',
        a: 'Dá. Usamos ferramenta que fisga e puxa o objeto de volta em vez de empurrar. Evite dar descarga ou usar arame antes da nossa chegada, para o brinquedo não descer mais.',
      },
      {
        q: 'Lenço umedecido que diz "descartável no vaso" na embalagem entope?',
        a: 'Entope. Ele não se desfaz como o papel higiênico e se enrosca dentro do cano. O destino certo é a lixeira.',
      },
      {
        q: 'O vaso da casa dos fundos entope e o da frente não, no mesmo lote do CPA III. Por quê?',
        a: 'O banheiro dos fundos fica mais longe da rua e seu cano costuma ter menos caimento, então o resíduo viaja mais devagar e para no caminho. A limpeza do ramal inteiro melhora o escoamento.',
      },
    ],
  },
  {
    slug: 'cpa-iv',
    nome: 'CPA IV',
    zona: 'Região do CPA',
    vizinhos: ['CPA III', 'CPA II', 'CPA I'],
    referencias: ['Avenida Historiador Rubens de Mendonça', 'Grande Morada da Serra'],
    h1: 'Desentupidora no CPA IV para casas e pequenos comércios',
    metaDescription:
      'Desentupidora no CPA IV, em Cuiabá: canos, pias, ralos e esgoto de casas e comércios de bairro. Orçamento sem compromisso e atendimento 24 horas.',
    abertura:
      'Último dos quatro núcleos da Grande Morada da Serra, o CPA IV é formado por etapas e tem ruas inteiras de casas que cresceram para cima e para os lados. Garagem virou salão de cabeleireiro, varanda virou mercearia, e o fundo ganhou dois cômodos para alugar. Ninguém aumentou o cano junto. A Desentupidora Preço Bom atende moradores e comerciantes do CPA IV com orçamento sem compromisso, a qualquer hora.',
    imovel:
      'Casas de conjunto habitacional muito modificadas, com cômodos de aluguel, pontos comerciais improvisados e lajes construídas depois.',
    problema:
      'A tubulação de 100 milímetros prevista para uma casa pequena passou a atender três ou quatro banheiros e mais de uma cozinha. Nas ligações feitas em ângulo reto, o material bate, acumula e fecha o cano.',
    servico: 'desentupimento-de-cano',
    faq: [
      {
        q: 'Aluguei os cômodos do fundo da minha casa no CPA IV e o cano passou a entupir. É excesso de gente?',
        a: 'O número de pessoas pesa, mas o que mais influencia é a forma como os novos banheiros foram ligados ao cano antigo. Desobstruímos a linha e mostramos qual junção está segurando o material.',
      },
      {
        q: 'Tenho um salão na garagem de casa no CPA IV. O lavatório pode ser ligado no ralo da garagem?',
        a: 'Esse tipo de ligação é comum e costuma dar problema, porque o ralo de garagem tem cano fino e pouca queda. Nós fazemos o desentupimento; a mudança da ligação é serviço de obra.',
      },
      {
        q: 'Como a equipe chega ao CPA IV vindo do Centro?',
        a: 'O acesso é pela Avenida Historiador Rubens de Mendonça. Passe um ponto de referência da sua rua ao ligar, o que ajuda a localizar o endereço dentro do conjunto.',
      },
    ],
  },
  {
    slug: 'centro-politico-administrativo',
    nome: 'Centro Político Administrativo',
    zona: 'Região do CPA',
    vizinhos: ['Morada do Ouro', 'CPA I', 'Bela Vista', 'Bosque da Saúde'],
    referencias: ['Avenida Historiador Rubens de Mendonça', 'Palácio Paiaguás', 'Parque das Águas'],
    h1: 'Hidrojateamento e desentupimento no Centro Político',
    metaDescription:
      'Desentupidora no Centro Político Administrativo, em Cuiabá: hidrojateamento e desentupimento para prédios e empresas. Atendimento comercial 24 horas.',
    abertura:
      'Secretarias de estado, tribunais, a Assembleia Legislativa e o Palácio Paiaguás ocupam o Centro Político Administrativo, uma área de prédios grandes, afastados uns dos outros e cercados de estacionamento e gramado. Edifício desse porte tem centenas de metros de tubulação enterrada, que só recebe atenção quando para. Para empresas terceirizadas de manutenção e administradores prediais, a Desentupidora Preço Bom oferece atendimento comercial com orçamento grátis no local.',
    imovel:
      'Edifícios públicos e institucionais de grande porte, sedes de órgãos, prédios de escritórios e restaurantes que atendem os servidores.',
    problema:
      'Redes extensas, com longos trechos horizontais entre o prédio e a rua, acumulam sedimento, gordura de refeitório e raízes do paisagismo. Cabo de máquina comum não alcança nem limpa toda a seção do tubo.',
    servico: 'hidrojateamento',
    faq: [
      {
        q: 'Em que situação o hidrojateamento é indicado para um prédio do Centro Político Administrativo?',
        a: 'Quando a tubulação é larga ou muito longa e está com a parede incrustada. O jato de água em alta pressão lava o tubo por inteiro, enquanto o cabo só abre um furo na obstrução.',
      },
      {
        q: 'O serviço em órgão público pode ser agendado para o fim de semana, com o prédio vazio?',
        a: 'Pode. Atendemos 24 horas, todos os dias, e trabalhar com o prédio fechado permite interditar banheiros e copas sem atrapalhar o expediente.',
      },
      {
        q: 'O caminhão de hidrojateamento consegue estacionar perto das caixas de inspeção?',
        a: 'Os prédios da região têm pátios e estacionamentos amplos, o que facilita. A mangueira alcança dezenas de metros, então basta uma vaga a uma distância razoável do ponto de acesso.',
      },
    ],
  },
  {
    slug: 'jardim-imperial',
    nome: 'Jardim Imperial',
    zona: 'Região Leste',
    vizinhos: ['Jardim Universitário', 'Jardim Itália', 'Santa Cruz'],
    referencias: ['Avenida das Palmeiras', 'Avenida Archimedes Pereira Lima'],
    h1: 'Desentupimento de ralos e canos no Jardim Imperial',
    metaDescription:
      'Desentupidora no Jardim Imperial, em Cuiabá: ralos de banheiro, box e área de lazer em casas e condomínios. Orçamento grátis no local, 24 horas.',
    abertura:
      'Loteamentos novos e condomínios de casas avançaram pela região da Avenida das Palmeiras, e o Jardim Imperial é hoje um bairro de construções recentes, com suíte em todos os quartos e ducha no quintal. Mais banheiros significam mais ralos, e ralo novo com acabamento bonito costuma ter abertura pequena. A Desentupidora Preço Bom atende o Jardim Imperial com orçamento grátis no local e atendimento 24 horas.',
    imovel:
      'Casas e sobrados de construção recente, muitos em condomínios fechados, com vários banheiros, área de lazer e ducha externa.',
    problema:
      'Os ralos lineares e os de tampa oculta, comuns em banheiro novo, têm passagem estreita e sifão raso. Cabelo e resíduo de xampu e condicionador fecham a saída em pouco tempo.',
    servico: 'desentupimento-de-ralo',
    faq: [
      {
        q: 'O ralo linear do box da minha casa no Jardim Imperial empoça desde que mudei. É defeito de obra?',
        a: 'Às vezes é resto de argamassa ou rejunte que ficou dentro do ralo na construção. Retiramos o que estiver obstruindo e, se o problema for de caimento do piso, explicamos o que foi visto.',
      },
      {
        q: 'Com que frequência devo abrir e limpar o ralo de tampa oculta?',
        a: 'Uma limpeza simples da grelha e do cesto a cada duas semanas evita a maior parte dos entupimentos. Quando a água já não desce, o bloqueio está no sifão ou no cano e pede ferramenta.',
      },
      {
        q: 'A ducha do quintal, usada depois da piscina, entope o ralo com quê?',
        a: 'Com grama cortada, terra e protetor solar, que é oleoso e gruda na parede do cano. A desobstrução é rápida e pode ser feita junto com a dos demais ralos externos.',
      },
    ],
  },
  {
    slug: 'jardim-universitario',
    nome: 'Jardim Universitário',
    zona: 'Região Leste',
    vizinhos: ['Jardim Imperial', 'Santa Cruz', 'Boa Esperança'],
    referencias: ['Avenida Archimedes Pereira Lima', 'Avenida Fernando Corrêa da Costa'],
    h1: 'Desentupidora no Jardim Universitário, em Cuiabá',
    metaDescription:
      'Desentupidora no Jardim Universitário, em Cuiabá, para casas, quitinetes e sobrados. Pia, ralo e esgoto com orçamento grátis e sem taxa de visita.',
    abertura:
      'No Jardim Universitário a rotina é de bairro residencial: casa térrea com portão de grade, sobrado novo ao lado de construção antiga e fileiras de quitinetes para quem estuda ou trabalha na região. Proprietário de imóvel de aluguel sabe que a ligação da noite de sábado quase sempre é pia entupida. A Desentupidora Preço Bom atende inquilinos e donos de imóvel no bairro, com orçamento grátis e sem taxa de visita.',
    imovel:
      'Casas térreas, sobrados e conjuntos de quitinetes para aluguel, em ruas residenciais com comércio básico de vizinhança.',
    problema:
      'Em quitinete, a pia da cozinha é pequena e fica ligada a um cano de diâmetro reduzido, muitas vezes junto com o tanque. Gordura e sabão em pó formam uma pasta que fecha o ramal.',
    servico: 'desentupimento-de-pia',
    faq: [
      {
        q: 'Sou proprietário de quitinetes no Jardim Universitário e moro em outra cidade. Vocês atendem com o inquilino presente?',
        a: 'Atendemos. O orçamento é feito no local e enviado ao proprietário por mensagem antes de o serviço começar, e o trabalho só é iniciado depois da aprovação.',
      },
      {
        q: 'Pia e tanque da minha quitinete entopem juntos. É um problema só?',
        a: 'Quase sempre sim. Os dois costumam estar ligados ao mesmo ramal, e a obstrução fica depois do ponto em que os canos se encontram.',
      },
      {
        q: 'Sabão em pó em excesso na máquina e no tanque pode entupir o cano?',
        a: 'Pode. O sabão que não dissolve se junta à gordura da pia e endurece dentro da tubulação. Usar a dose indicada na embalagem já ajuda.',
      },
    ],
  },
  {
    slug: 'coxipo',
    nome: 'Coxipó',
    zona: 'Região do Coxipó',
    vizinhos: ['Boa Esperança', 'Coophema', 'Tijucal', 'Jardim Industriário'],
    referencias: ['Avenida Fernando Corrêa da Costa', 'Rio Coxipó'],
    h1: 'Desentupidora no Coxipó para restaurantes, lojas e casas',
    metaDescription:
      'Desentupidora no Coxipó, em Cuiabá: caixa de gordura, pia e esgoto de restaurantes, lojas e casas na região da Fernando Corrêa. 24 horas.',
    abertura:
      'O Coxipó funciona como um segundo centro para a metade sul de Cuiabá. A Avenida Fernando Corrêa da Costa atravessa o bairro carregada de lojas, bancos, concessionárias, faculdades e restaurantes que servem almoço para milhares de pessoas. Cozinha de buffet a quilo, churrascaria e peixaria trabalham com volume alto de gordura. A Desentupidora Preço Bom atende o comércio e as residências do Coxipó 24 horas, com orçamento grátis no local.',
    imovel:
      'Comércio de grande movimento ao longo da avenida, com restaurantes, lojas e galpões, e ruas residenciais de casas térreas nas quadras internas.',
    problema:
      'Restaurantes com produção contínua enchem a caixa de gordura em poucas semanas. Quando a limpeza atrasa, a gordura passa para a rede do imóvel e o esgoto retorna pelos ralos da cozinha no meio do serviço.',
    servico: 'limpeza-de-caixa-de-gordura',
    faq: [
      {
        q: 'Meu restaurante na Fernando Corrêa, no Coxipó, serve almoço todos os dias. Qual o melhor horário para limpar a caixa de gordura?',
        a: 'À noite ou de madrugada, depois que a cozinha encerra. Assim a caixa é esvaziada e lavada sem interferir na produção do dia seguinte.',
      },
      {
        q: 'A vigilância sanitária exige limpeza periódica da caixa de gordura em restaurante?',
        a: 'A manutenção das caixas faz parte das boas práticas exigidas de serviços de alimentação. Fornecemos comprovante do serviço realizado para o seu controle.',
      },
      {
        q: 'Moro em casa perto do Rio Coxipó, em terreno baixo. Na chuva o esgoto demora a descer. Vocês avaliam?',
        a: 'Avaliamos. Verificamos se há obstrução no ramal do imóvel e fazemos a desobstrução. Se a causa for a rede pública cheia durante a chuva, explicamos o que foi constatado.',
      },
    ],
  },
  {
    slug: 'tijucal',
    nome: 'Tijucal',
    zona: 'Região do Coxipó',
    vizinhos: ['Coxipó', 'Osmar Cabral', 'Pedra 90', 'Jardim Industriário'],
    referencias: ['Avenida Fernando Corrêa da Costa', 'Avenida Espigão'],
    h1: 'Tijucal: desentupimento de esgoto com orçamento no local',
    metaDescription:
      'Esgoto voltando ou caixa de inspeção cheia no Tijucal, em Cuiabá? Desentupidora Preço Bom, 24 horas, com orçamento grátis e sem taxa de visita.',
    abertura:
      'Dividido em setores, o Tijucal é um conjunto habitacional grande que virou bairro completo, com feira, escolas, igrejas e comércio próprio na Avenida Espigão. As casas foram entregues iguais, em lotes estreitos, e cada morador ampliou a sua como pôde. Nessas reformas, o banheiro novo quase sempre foi ligado na caixa de inspeção que estava mais perto. A Desentupidora Preço Bom atende o Tijucal com orçamento grátis e sem taxa de visita.',
    imovel:
      'Casas de conjunto habitacional em lotes estreitos, geminadas ou muito próximas, ampliadas para os fundos e para cima.',
    problema:
      'As caixas de inspeção originais são pequenas e rasas, e passaram a receber mais ligações do que comportam. O material sólido se deposita no fundo, a saída fica afogada e o esgoto retorna para dentro da casa.',
    servico: 'desentupimento-de-esgoto',
    faq: [
      {
        q: 'Minha casa no Tijucal é geminada e o esgoto do vizinho passa pelo meu quintal. Quem resolve quando entope?',
        a: 'Quando o ramal é compartilhado, o entupimento afeta os dois e o ideal é dividir o serviço. Mostramos onde está a obstrução e de que lado ela se formou.',
      },
      {
        q: 'A caixa de inspeção da minha casa fica na calçada do Tijucal. Vocês podem abrir?',
        a: 'Podemos abrir a caixa que pertence à ligação do seu imóvel. Se o problema estiver no poço de visita da rede pública, o chamado deve ser feito à concessionária de água e esgoto.',
      },
      {
        q: 'Depois de desentupir, o que posso fazer para o esgoto da casa não voltar a parar?',
        a: 'Não jogar papel em excesso, absorvente ou gordura na rede e abrir a caixa de inspeção de tempos em tempos para ver se há depósito no fundo. Em casa com muitas ampliações, a limpeza anual é uma boa medida.',
      },
    ],
  },
  {
    slug: 'pedra-90',
    nome: 'Pedra 90',
    zona: 'Região do Coxipó',
    vizinhos: ['Osmar Cabral', 'Tijucal', 'Jardim Industriário'],
    referencias: ['Avenida Newton Rabello de Castro', 'BR-364'],
    h1: 'Desentupidora no Pedra 90 com atendimento 24 horas',
    metaDescription:
      'Desentupidora no Pedra 90, em Cuiabá: esgoto, vaso, pia e ralo de casas e comércios. Sem taxa de visita, orçamento grátis no local, todos os dias.',
    abertura:
      'Longe do Centro e com dezenas de milhares de moradores, o Pedra 90 é praticamente uma cidade dentro de Cuiabá, com avenida comercial, supermercados e feira própria. A distância faz muita gente achar que serviço especializado não chega ali ou cobra só para aparecer. Com a Desentupidora Preço Bom não há taxa de visita: o orçamento é grátis no local, e o atendimento é 24 horas, todos os dias, inclusive domingos e feriados.',
    imovel:
      'Casas populares térreas, a maioria construída e ampliada pelos próprios moradores, com muro, quintal de chão cimentado e comércio na avenida principal.',
    problema:
      'A tubulação de esgoto feita por conta própria costuma ter pouco caimento e curvas fechadas. O resíduo anda devagar, para nas curvas e, com o tempo, bloqueia a saída para a rua.',
    servico: 'desentupimento-de-esgoto',
    faq: [
      {
        q: 'Vocês cobram deslocamento para atender no Pedra 90, por ser longe do Centro de Cuiabá?',
        a: 'Não cobramos taxa de visita. O orçamento é feito no local, sem compromisso, e você sabe o valor antes do serviço começar.',
      },
      {
        q: 'Eu mesmo fiz o encanamento do esgoto da minha casa no Pedra 90. Vocês conseguem desentupir sem a planta?',
        a: 'Sim. Seguimos a tubulação a partir dos pontos de acesso e identificamos o trajeto pelo próprio cabo. Se você lembrar por onde o cano passa, isso agiliza o trabalho.',
      },
      {
        q: 'Atendem o comércio da avenida principal do Pedra 90 em dia de feira?',
        a: 'Atendemos normalmente. Se a rua estiver ocupada pelas barracas, a equipe estaciona na transversal mais próxima e leva o equipamento portátil até o ponto.',
      },
    ],
  },
  {
    slug: 'parque-cuiaba',
    nome: 'Parque Cuiabá',
    zona: 'Região do Coxipó',
    vizinhos: ['Coophema', 'Jardim Industriário', 'Coxipó'],
    referencias: ['Rodovia Palmiro Paes de Barros', 'Saída para Santo Antônio de Leverger (MT-040)'],
    h1: 'Desentupimento de rede pluvial e ralos no Parque Cuiabá',
    metaDescription:
      'Desentupidora no Parque Cuiabá: rede pluvial, ralos de quintal e esgoto de casas. Orçamento grátis no local, sem taxa de visita, 24 horas em Cuiabá.',
    abertura:
      'Às margens da Rodovia Palmiro Paes de Barros, no caminho de quem vai para Santo Antônio de Leverger, o Parque Cuiabá tem lotes maiores que os dos conjuntos vizinhos e muito quintal de terra. Bom para plantar, ruim para o ralo: a enxurrada do verão arrasta barro para dentro de qualquer tubo que encontra. A Desentupidora Preço Bom desobstrui ralos e tubulações de água de chuva no bairro, com orçamento grátis no local.',
    imovel:
      'Casas térreas em lotes de bom tamanho, com quintal de terra ou parcialmente cimentado, árvores frutíferas e varanda nos fundos.',
    problema:
      'A chuva forte lava o quintal e leva terra, folha e brita para o ralo e para o tubo que conduz a água até a rua. O barro seca lá dentro durante a estiagem e vira um bloco duro que impede o escoamento na chuva seguinte.',
    servico: 'desentupimento-de-rede-pluvial',
    faq: [
      {
        q: 'O quintal da minha casa no Parque Cuiabá vira uma lagoa quando chove. Desentupir o ralo resolve?',
        a: 'Resolve quando existe tubo de drenagem e ele está obstruído, o que verificamos no local. Se o quintal não tiver saída de água nenhuma, explicamos isso antes de qualquer cobrança.',
      },
      {
        q: 'Barro seco dentro do cano sai com máquina comum?',
        a: 'Depende da quantidade. Depósito leve sai com o cabo rotativo; quando o tubo está tomado, o jato de água em alta pressão dissolve e arrasta o barro para fora.',
      },
      {
        q: 'Posso ligar a água da chuva do quintal no cano de esgoto para escoar mais rápido?',
        a: 'Não é recomendado nem permitido. A rede de esgoto não comporta o volume da chuva, e a ligação faz o esgoto retornar para dentro de casa nos temporais.',
      },
    ],
  },
  {
    slug: 'jardim-industriario',
    nome: 'Jardim Industriário',
    zona: 'Região do Coxipó',
    vizinhos: ['Coxipó', 'Tijucal', 'Pedra 90', 'Parque Cuiabá'],
    referencias: ['Avenida Fernando Corrêa da Costa', 'Distrito Industrial de Cuiabá'],
    h1: 'Hidrojateamento e desentupimento no Jardim Industriário',
    metaDescription:
      'Desentupidora no Jardim Industriário, em Cuiabá: hidrojateamento e desentupimento para galpões, oficinas, empresas e casas. Orçamento grátis, 24 horas.',
    abertura:
      'O nome entrega a vocação: o Jardim Industriário cresceu junto com o Distrito Industrial de Cuiabá e abriga quem trabalha nas fábricas, transportadoras e armazéns da região. Entre as casas há oficinas de caminhão, borracharias, lava a jato e pequenos galpões. Óleo, graxa e lama de lavagem de veículo não saem do cano com arame. A Desentupidora Preço Bom leva o equipamento de hidrojateamento ao bairro e apresenta o orçamento grátis no local.',
    imovel:
      'Casas térreas de trabalhadores ao lado de galpões, oficinas mecânicas, lava a jato e empresas de transporte e logística.',
    problema:
      'A água de lavagem de caminhões e máquinas leva areia, lama e óleo para a caixa separadora e para a tubulação do pátio. O sedimento pesado assenta no fundo do tubo e reduz a passagem até fechar.',
    servico: 'hidrojateamento',
    faq: [
      {
        q: 'Tenho um lava a jato no Jardim Industriário e a canaleta do pátio não escoa mais. O hidrojateamento resolve?',
        a: 'É o método indicado. O jato de alta pressão desagrega a areia e a lama compactadas e as empurra até um ponto de retirada, limpando toda a seção da tubulação.',
      },
      {
        q: 'A tubulação do pátio da empresa tem 150 milímetros ou mais. Vocês trabalham com esse diâmetro?',
        a: 'Sim. O hidrojateamento é justamente a opção para tubos largos e trechos longos, com bicos adequados a cada diâmetro.',
      },
      {
        q: 'Moro em casa comum no Jardim Industriário. O hidrojateamento serve para residência ou é só para empresa?',
        a: 'Serve para os dois. Em casa, ele é usado quando o esgoto tem muita incrustação ou raiz. Para entupimentos simples, a máquina de cabo costuma bastar, e indicamos a opção adequada no orçamento.',
      },
    ],
  },
  {
    slug: 'osmar-cabral',
    nome: 'Osmar Cabral',
    zona: 'Região do Coxipó',
    vizinhos: ['Tijucal', 'Pedra 90', 'Jardim Industriário'],
    referencias: ['Avenida Doutor Meirelles', 'Região do Tijucal'],
    h1: 'Desentupimento de vaso, pia e ralo no Osmar Cabral',
    metaDescription:
      'Desentupidora no Osmar Cabral, em Cuiabá, com preço justo: vaso sanitário, pia e ralo. Orçamento grátis no local e você sabe o valor antes de começar.',
    abertura:
      'Bairro popular da região sul, o Osmar Cabral foi levantado pelos próprios moradores, tijolo por tijolo, e continua em obra permanente: sempre tem uma laje sendo batida ou um banheiro sendo terminado. Para quem controla o orçamento da casa no detalhe, surpresa na conta é o maior medo na hora de chamar um serviço. Por isso a Desentupidora Preço Bom informa o valor antes de começar e não cobra taxa de visita.',
    imovel:
      'Casas térreas de alvenaria erguidas em etapas pelos moradores, muitas ainda em acabamento, com um banheiro principal para toda a família.',
    problema:
      'Durante a obra, resto de massa, pó de cimento e água de lavagem de ferramenta são despejados no vaso. Esse material endurece na saída da bacia e reduz a passagem, e depois qualquer papel já basta para entupir.',
    servico: 'desentupimento-de-vaso-sanitario',
    faq: [
      {
        q: 'Estou reformando minha casa no Osmar Cabral e o pedreiro lavava as ferramentas no vaso. Agora entupiu. Tem jeito?',
        a: 'Tem, na maioria dos casos. Cimento e rejunte endurecidos na saída da bacia são removidos com ferramenta mecânica. Se a massa tiver tomado o cano por completo, explicamos a situação antes de qualquer decisão.',
      },
      {
        q: 'Só tenho um banheiro em casa e o vaso entupiu à noite. Vocês vêm na hora?',
        a: 'Sim. O atendimento é 24 horas, todos os dias, e chegamos em 20 minutos.',
      },
      {
        q: 'Garrafa PET com água quente e desentupidor de borracha funcionam no vaso?',
        a: 'Funcionam em entupimento leve de papel. Se a água continua subindo depois de duas ou três tentativas, insistir só compacta o material, e o caso pede equipamento próprio.',
      },
    ],
  },
  {
    slug: 'santa-cruz',
    nome: 'Santa Cruz',
    zona: 'Região Leste',
    vizinhos: ['Jardim Universitário', 'Jardim Imperial', 'Boa Esperança'],
    referencias: ['Avenida Archimedes Pereira Lima', 'Região do Jardim Universitário'],
    h1: 'Cano entupido no Santa Cruz? Desentupidora em Cuiabá',
    metaDescription:
      'Desentupidora no bairro Santa Cruz, em Cuiabá: canos, pias e ralos de casas e sobrados. Atendimento 24 horas, orçamento sem compromisso no local.',
    abertura:
      'Rua calma, calçada com árvore e vizinho que se conhece pelo nome: o Santa Cruz é um bairro essencialmente de moradia, na região Leste de Cuiabá. As casas têm algumas décadas e muitas trocaram o piso, o telhado e a fachada, mas mantiveram o encanamento embutido da construção original. Cano escondido só chama atenção quando falha. A Desentupidora Preço Bom atende o Santa Cruz com orçamento sem compromisso e atendimento 24 horas.',
    imovel:
      'Casas térreas e sobrados de padrão médio, com alguns residenciais fechados, em ruas predominantemente residenciais.',
    problema:
      'Tubulações embutidas há décadas acumulam uma camada de resíduo de sabão, gordura e calcário que diminui o diâmetro útil do cano. O escoamento vai ficando lento em vários pontos da casa até que um deles para.',
    servico: 'desentupimento-de-cano',
    faq: [
      {
        q: 'A água demora a descer em quase todas as pias da minha casa no Santa Cruz, mas nenhuma está totalmente entupida. Vale chamar agora?',
        a: 'Vale. Lentidão generalizada indica cano com a passagem reduzida, e a limpeza nessa fase é mais simples do que depois do bloqueio total.',
      },
      {
        q: 'Troquei todo o piso da casa e não quero quebrar nada. Como é feito o acesso ao cano?',
        a: 'Pelos pontos existentes: ralos, sifões, caixas de inspeção e saída do vaso. Na maioria dos casos o serviço é concluído sem quebrar piso nem parede.',
      },
      {
        q: 'Moro em residencial fechado no Santa Cruz. O entupimento da rua interna é responsabilidade de quem?',
        a: 'A rede que atende várias casas é do condomínio, e o ramal dentro do lote é do morador. Identificamos o local da obstrução para que fique claro quem deve contratar o serviço.',
      },
    ],
  },
  {
    slug: 'coophema',
    nome: 'Coophema',
    zona: 'Região do Coxipó',
    vizinhos: ['Coxipó', 'Parque Cuiabá', 'Jardim Industriário'],
    referencias: ['Avenida Fernando Corrêa da Costa', 'Rodovia Palmiro Paes de Barros'],
    h1: 'Desentupidora no Coophema: pia, ralo e esgoto sem surpresa',
    metaDescription:
      'Pia entupida no Coophema, em Cuiabá? A Desentupidora Preço Bom atende 24 horas, com orçamento grátis no local e valor informado antes do serviço.',
    abertura:
      'Colado no Coxipó e a caminho das peixarias da beira do rio, o Coophema é um bairro residencial de casas com quintal, onde o fogão a lenha e o tacho de fritura ainda aparecem no almoço de família. Peixe frito, farofa de banana e mojica pedem bastante óleo, e a pia da cozinha recebe o que sobra. A Desentupidora Preço Bom atende o Coophema com orçamento grátis no local e valor informado antes do serviço.',
    imovel:
      'Casas térreas de bairro residencial consolidado, com quintal, cozinha ampla e, em muitas delas, uma segunda pia na varanda dos fundos.',
    problema:
      'O óleo de fritura despejado na cuba esfria no sifão e no primeiro trecho do cano, formando um tampão esbranquiçado. A pia da varanda, com ramal mais longo, é a que entope primeiro.',
    servico: 'desentupimento-de-pia',
    faq: [
      {
        q: 'A pia da varanda dos fundos da minha casa no Coophema entope mais que a da cozinha. Qual a diferença?',
        a: 'A pia externa costuma ser usada para o serviço pesado, como limpar peixe e lavar panela de fritura, e o cano dela percorre uma distância maior. Mais gordura em um ramal mais longo dá entupimento mais frequente.',
      },
      {
        q: 'Limpo peixe em casa. Escama e barrigada podem ir pela pia?',
        a: 'Não devem. A escama não se desfaz e adere à gordura dentro do cano. O ideal é limpar o peixe sobre uma bacia ou peneira e descartar os restos no lixo.',
      },
      {
        q: 'Quanto tempo leva para desentupir uma pia de cozinha?',
        a: 'Depende de onde está a obstrução. Entupimento no sifão ou no início do ramal é resolvido rapidamente; quando o bloqueio está na caixa de gordura ou depois dela, o serviço é mais longo. Informamos a previsão junto com o orçamento.',
      },
    ],
  },
  {
    slug: 'despraiado',
    nome: 'Despraiado',
    zona: 'Região Oeste',
    vizinhos: ['Santa Rosa', 'Ribeirão do Lipa', 'Duque de Caxias'],
    referencias: ['Avenida Miguel Sutil', 'Avenida República do Líbano'],
    h1: 'Desentupidora no Despraiado, em Cuiabá, sem taxa de visita',
    metaDescription:
      'Desentupidora no Despraiado, em Cuiabá: ralos, pias e esgoto de casas, sobrados e residenciais. Sem taxa de visita, orçamento grátis, 24 horas.',
    abertura:
      'O Despraiado mistura tempos diferentes de Cuiabá: uma parte antiga, de casas simples e ruas estreitas, e uma parte nova, de sobrados e residenciais que chegaram com a valorização da região próxima à Avenida Miguel Sutil. Nos dois casos o calor manda todo mundo para o chuveiro várias vezes ao dia. Ralo de banheiro é o campeão de chamados, e a Desentupidora Preço Bom atende o Despraiado sem taxa de visita.',
    imovel:
      'Casas térreas mais antigas, sobrados recentes e pequenos residenciais, em um bairro de ocupação mista e em transformação.',
    problema:
      'Nas casas antigas, o ralo do banheiro é ligado a uma caixa sifonada pequena, que enche de cabelo e sabonete. A água passa a escoar devagar e forma poça no piso inteiro do banheiro, não só no box.',
    servico: 'desentupimento-de-ralo',
    faq: [
      {
        q: 'O piso do banheiro da minha casa no Despraiado alaga quando alguém toma banho. É o ralo ou o cano?',
        a: 'Geralmente é a caixa sifonada, que recebe o ralo do box e a pia e fica sob o piso do banheiro. Ela é limpa pela própria grelha, sem obra.',
      },
      {
        q: 'Aparecem baratas pelo ralo no calor. Limpar o ralo ajuda?',
        a: 'Ajuda, porque remove a matéria orgânica acumulada que atrai os insetos. Um ralo com fecho ou tampa que abre e fecha complementa a solução. Nosso serviço é só o desentupimento e a limpeza da tubulação.',
      },
      {
        q: 'Vocês atendem tanto a parte antiga quanto os residenciais novos do Despraiado?',
        a: 'Sim, o atendimento é residencial e comercial em todo o bairro, com o mesmo orçamento grátis no local.',
      },
    ],
  },
  {
    slug: 'ribeirao-do-lipa',
    nome: 'Ribeirão do Lipa',
    zona: 'Região Oeste',
    vizinhos: ['Despraiado', 'Santa Rosa', 'Duque de Caxias'],
    referencias: ['Avenida Miguel Sutil', 'Córrego Ribeirão do Lipa'],
    h1: 'Ribeirão do Lipa: desentupidora para casas e condomínios',
    metaDescription:
      'Desentupidora no Ribeirão do Lipa, em Cuiabá: rede pluvial, calhas e ralos de casas e condomínios. Orçamento sem compromisso, atendimento 24 horas.',
    abertura:
      'O córrego que dá nome ao Ribeirão do Lipa corta uma região de terreno ondulado, com ruas que descem em direção ao fundo de vale. O bairro recebeu residências grandes e condomínios nos últimos anos, e muita área que era mato virou telhado e piso. Chuva que antes infiltrava agora corre. Para manter calhas, grelhas e tubos de drenagem desobstruídos, a Desentupidora Preço Bom atende o bairro com orçamento sem compromisso.',
    imovel:
      'Casas amplas, condomínios residenciais e empreendimentos recentes, em terrenos inclinados e com grandes áreas impermeabilizadas.',
    problema:
      'Em lote inclinado, a água da chuva ganha velocidade e leva terra de talude e de obra para as grelhas e caixas de areia. Com as caixas cheias, a tubulação pluvial entope e a enxurrada passa por cima, em direção à garagem.',
    servico: 'desentupimento-de-rede-pluvial',
    faq: [
      {
        q: 'Minha casa no Ribeirão do Lipa fica abaixo do nível da rua. Como evitar que a chuva entre pela garagem?',
        a: 'A grelha na entrada da rampa e o tubo que sai dela precisam estar sempre livres. Fazemos a limpeza desse conjunto e das caixas de areia antes da temporada de chuva.',
      },
      {
        q: 'Tem obra ao lado do meu terreno e a enxurrada traz barro para o meu ralo. Vocês retiram?',
        a: 'Retiramos o barro dos ralos, das caixas e da tubulação. Enquanto a obra vizinha durar, o acúmulo tende a se repetir, e vale inspecionar as grelhas depois de cada chuva forte.',
      },
      {
        q: 'O que é caixa de areia e por que ela precisa de limpeza?',
        a: 'É uma caixa na rede de água de chuva que retém terra e areia para que não sigam pelo tubo. Quando ela enche, deixa de reter e o material vai entupir a tubulação adiante.',
      },
    ],
  },
  {
    slug: 'jardim-europa',
    nome: 'Jardim Europa',
    zona: 'Região Leste',
    vizinhos: ['Dom Aquino', 'Jardim das Américas', 'Poção', 'Jardim Tropical'],
    referencias: ['Avenida Beira Rio', 'UNIC Beira Rio'],
    h1: 'Desentupidora no Jardim Europa, na região da Beira Rio',
    metaDescription:
      'Desentupidora no Jardim Europa, em Cuiabá: esgoto, pias e ralos de casas e imóveis perto da Avenida Beira Rio. Orçamento grátis no local, 24 horas.',
    abertura:
      'Estudantes chegando para a aula, lanchonetes cheias no intervalo e trânsito na Avenida Beira Rio marcam o lado mais movimentado do Jardim Europa, onde fica o campus da UNIC. Passando duas quadras, o bairro é de casas de família, em terreno plano e não muito distante do Rio Cuiabá. Terreno plano é confortável para morar e exigente com o esgoto, que depende de queda para correr. A Desentupidora Preço Bom atende o bairro 24 horas.',
    imovel:
      'Casas térreas e sobrados em ruas planas, com quitinetes, pensionatos e pontos de alimentação nas proximidades da universidade.',
    problema:
      'Com pouco desnível entre a casa e a rua, o esgoto escoa devagar e os sólidos se depositam ao longo do ramal. O acúmulo cresce em silêncio até a caixa de inspeção encher e o banheiro dar sinal.',
    servico: 'desentupimento-de-esgoto',
    faq: [
      {
        q: 'O terreno da minha casa no Jardim Europa é todo plano. Isso explica o esgoto que entope com frequência?',
        a: 'Explica em boa parte. Com pouca inclinação, o resíduo sólido fica no cano em vez de ser levado pela água. A limpeza periódica do ramal compensa essa condição.',
      },
      {
        q: 'Tenho uma lanchonete em frente à universidade, no Jardim Europa. Posso agendar o serviço para o período de férias?',
        a: 'Pode. Atendemos 24 horas, todos os dias, e o recesso das aulas é um bom momento para limpar caixa de gordura e ramal de esgoto sem perder movimento.',
      },
      {
        q: 'Quando o Rio Cuiabá sobe na época de chuva, o esgoto das casas próximas é afetado?',
        a: 'Em períodos de cheia a rede pública pode ficar sobrecarregada e escoar mais devagar. Verificamos se o ramal do imóvel está livre; se estiver, a lentidão vem da rede externa.',
      },
    ],
  },
];
