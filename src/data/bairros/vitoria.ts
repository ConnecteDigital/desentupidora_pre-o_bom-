import type { Bairro } from '../tipos';

export const bairros: Bairro[] = [
  {
    slug: 'jardim-da-penha',
    nome: 'Jardim da Penha',
    zona: 'Região Continental',
    vizinhos: ['Mata da Praia', 'Praia do Canto', 'Jardim Camburi', 'Goiabeiras'],
    referencias: ['Avenida Fernando Ferrari', 'Rua da Lama', 'Avenida Dante Michelini', 'Ufes'],
    h1: 'Desentupidora em Jardim da Penha, perto da Ufes, 24 horas',
    metaDescription:
      'Desentupidora em Jardim da Penha, Vitória, para repúblicas, prédios sem elevador e bares da Rua da Lama. 24 horas, orçamento grátis no local.',
    abertura:
      'Jardim da Penha tem uma cara só dele: quadras arborizadas, praças e prédios de três ou quatro andares, sem elevador, espalhados por todo o bairro. Como a Ufes fica ao lado, muitos desses apartamentos viraram república, com quatro ou cinco estudantes dividindo uma cozinha. Pia de república entope cedo. A Desentupidora Preço Bom atende o bairro de madrugada, no fim de semana e em feriado, com orçamento grátis no local.',
    imovel:
      'Edifícios baixos, a maioria sem elevador, com apartamentos de dois e três quartos, além de bares, restaurantes e lojas concentrados na Rua da Lama e em torno das praças.',
    problema:
      'Muita gente cozinhando e pouca gente cuidando do ralo da pia. Resto de comida, óleo e macarrão descem direto, e a gordura fecha o cano estreito desses prédios mais antigos.',
    servico: 'desentupimento-de-pia',
    faq: [
      {
        q: 'Moro em república em Jardim da Penha e a pia entupiu. Quem paga: os moradores ou o dono do apartamento?',
        a: 'Depende do contrato, mas em geral entupimento por uso fica com o inquilino e problema na coluna do prédio fica com o condomínio. Informamos onde estava a obstrução para vocês resolverem com o proprietário.',
      },
      {
        q: 'Os prédios de Jardim da Penha não têm elevador. Isso impede o serviço?',
        a: 'Não impede. O equipamento para pia, ralo e vaso é portátil e sobe pela escada. O valor é informado no orçamento, antes de o serviço começar.',
      },
      {
        q: 'Tenho um bar na Rua da Lama. Vocês atendem de madrugada, depois que o movimento acaba?',
        a: 'Atendemos. O serviço funciona 24 horas, todos os dias, e a madrugada costuma ser o horário mais prático para bares.',
      },
    ],
  },
  {
    slug: 'praia-do-canto',
    nome: 'Praia do Canto',
    zona: 'Região da Praia do Canto',
    vizinhos: ['Santa Lúcia', 'Enseada do Suá', 'Jardim da Penha', 'Barro Vermelho', 'Santa Helena'],
    referencias: ['Avenida Nossa Senhora da Penha', 'Rua Joaquim Lírio', 'Triângulo das Bermudas', 'Praça dos Namorados'],
    h1: 'Limpeza de caixa de gordura e desentupimento na Praia do Canto',
    metaDescription:
      'Limpeza de caixa de gordura e desentupimento na Praia do Canto, Vitória, para restaurantes e prédios. Orçamento sem compromisso, 24 horas.',
    abertura:
      'Na Praia do Canto, em muitas quadras o térreo dos prédios é ocupado por restaurantes, bares, cafés e padarias. O Triângulo das Bermudas e a Rua Joaquim Lírio concentram cozinhas que funcionam do almoço à madrugada, enquanto os apartamentos de cima dividem com elas a mesma saída para a rua. A Desentupidora Preço Bom cuida das caixas de gordura e das tubulações do bairro com orçamento sem compromisso e valor informado antes do serviço.',
    imovel:
      'Prédios residenciais de padrão alto, edifícios de salas comerciais e uma grande oferta de bares e restaurantes em lojas de térreo.',
    problema:
      'Cozinha profissional enche a caixa de gordura em poucas semanas. Quando ela satura, a gordura segue para a rede do prédio, endurece e provoca retorno nos ralos da garagem e mau cheiro na calçada.',
    servico: 'limpeza-de-caixa-de-gordura',
    faq: [
      {
        q: 'Como saber se a caixa de gordura do meu restaurante no Triângulo das Bermudas está pequena para o movimento?',
        a: 'Se ela enche em menos de um mês mesmo com limpeza correta, provavelmente está subdimensionada. Não fazemos a troca, que é obra, mas indicamos a frequência de limpeza que mantém a cozinha funcionando.',
      },
      {
        q: 'A garagem do meu prédio na Praia do Canto alaga com água gordurosa nos dias de movimento dos restaurantes. O que está acontecendo?',
        a: 'A caixa de gordura ou o trecho depois dela não está dando conta do volume, e a água procura o ralo mais baixo, que é o da garagem. A limpeza da caixa e o hidrojateamento do ramal de saída costumam resolver.',
      },
      {
        q: 'Dá para limpar a caixa de gordura de um café na Joaquim Lírio sem fechar a loja?',
        a: 'Na maioria das vezes marcamos antes da abertura ou depois do fechamento, porque a caixa aberta tem cheiro forte. Como atendemos 24 horas, o horário se ajusta ao seu.',
      },
    ],
  },
  {
    slug: 'jardim-camburi',
    nome: 'Jardim Camburi',
    zona: 'Região Continental',
    vizinhos: ['Mata da Praia', 'Jardim da Penha', 'República', 'Maria Ortiz'],
    referencias: ['Avenida Dante Michelini', 'Rua Carlos Martins', 'Avenida Norte Sul', 'Praia de Camburi'],
    h1: 'Jardim Camburi: desentupimento de coluna, pia e ralo 24h',
    metaDescription:
      'Desentupimento de coluna, pia e ralo em Jardim Camburi, Vitória. Atendemos síndicos e moradores 24 horas, com orçamento grátis no local.',
    abertura:
      'Jardim Camburi é o bairro mais populoso de Vitória, e quase toda essa gente mora em apartamento. Há desde blocos antigos de quatro andares até torres recentes perto da Avenida Dante Michelini, e em todos a tubulação vertical é compartilhada. Com tantos condomínios, coluna de prédio entupida é o chamado mais comum no bairro. A Desentupidora Preço Bom atende síndicos e moradores com orçamento grátis no local e sem taxa de visita.',
    imovel:
      'Condomínios residenciais de todos os tamanhos, de conjuntos de blocos baixos a edifícios altos com lazer, e comércio forte em ruas como a Carlos Martins.',
    problema:
      'A coluna recebe gordura, cabelo e objetos de todos os andares. O estreitamento é lento e silencioso, até o dia em que o apartamento do primeiro andar amanhece com água de esgoto no ralo.',
    servico: 'desentupimento-de-coluna',
    faq: [
      {
        q: 'Sou síndico em Jardim Camburi. Dá para limpar as colunas do prédio de forma preventiva?',
        a: 'Dá. A limpeza das prumadas é feita a partir da cobertura ou das caixas do térreo, com data avisada aos moradores. O orçamento é grátis e feito no local.',
      },
      {
        q: 'Meu condomínio em Jardim Camburi tem vários blocos. O orçamento é por bloco ou do conjunto todo?',
        a: 'Avaliamos o conjunto e detalhamos o que cada bloco precisa. Você recebe o valor antes de qualquer serviço começar e decide o que fazer primeiro.',
      },
      {
        q: 'Moro no primeiro andar em Jardim Camburi e sou sempre eu quem sofre com o retorno. Posso chamar por conta própria?',
        a: 'Pode, e atendemos para liberar o seu apartamento. Mas, se a obstrução estiver na coluna, o correto é o condomínio assumir, e informamos isso ao síndico.',
      },
    ],
  },
  {
    slug: 'mata-da-praia',
    nome: 'Mata da Praia',
    zona: 'Região Continental',
    vizinhos: ['Jardim da Penha', 'Jardim Camburi', 'República', 'Morada de Camburi'],
    referencias: ['Avenida Dante Michelini', 'Avenida Adalberto Simão Nader', 'Praia de Camburi'],
    h1: 'Desentupidora na Mata da Praia para casas e condomínios',
    metaDescription:
      'Desentupidora na Mata da Praia, Vitória: ralos com areia e folhas em casas e condomínios. Orçamento grátis no local, sem taxa de visita, 24 horas.',
    abertura:
      'A Mata da Praia fica de frente para Camburi e mistura duas formas de morar: ruas internas de casas grandes, com jardim e piscina, e uma faixa de prédios voltados para a Avenida Dante Michelini. Em ambas, a praia entra pela porta. Areia nos pés, nas pranchas e nas cadeiras vai parar no ralo do chuveiro externo, do box e da área de serviço. A Desentupidora Preço Bom atende o bairro com orçamento grátis no local.',
    imovel:
      'Casas amplas de padrão alto em ruas arborizadas e edifícios residenciais com lazer, vários deles com chuveirão e lava-pés na entrada.',
    problema:
      'A areia assenta no fundo do sifão e do ramal, e as folhas das árvores completam o serviço nos ralos externos. O ralo passa a escoar devagar e, na chuva, o quintal empoça.',
    servico: 'desentupimento-de-ralo',
    faq: [
      {
        q: 'O ralo do chuveiro da piscina da minha casa na Mata da Praia vive entupido. É por causa da areia?',
        a: 'Na maioria das vezes, sim, junto com folhas e protetor solar, que forma uma pasta com a areia. Retiramos o material do ralo e do ramal. Uma grelha mais fina ajuda a espaçar o problema.',
      },
      {
        q: 'Minha casa na Mata da Praia tem muitas árvores. As folhas entopem os ralos do jardim?',
        a: 'Entopem. Folha molhada compacta dentro do cano e segura a terra que vem atrás. Vale desobstruir os ralos externos antes da época de chuva.',
      },
      {
        q: 'Vocês atendem os prédios da Mata da Praia que ficam de frente para a Dante Michelini?',
        a: 'Sim, apartamentos e áreas comuns, incluindo o ralo do chuveirão e a caixa de areia do condomínio.',
      },
    ],
  },
  {
    slug: 'centro',
    nome: 'Centro',
    zona: 'Centro e Santo Antônio',
    vizinhos: ['Santo Antônio', 'Bento Ferreira', 'Parque Moscoso', 'Vila Rubim'],
    referencias: ['Avenida Jerônimo Monteiro', 'Praça Costa Pereira', 'Palácio Anchieta', 'Avenida Princesa Isabel'],
    h1: 'Desentupidora no Centro de Vitória para prédios antigos',
    metaDescription:
      'Desentupidora no Centro de Vitória para prédios antigos, salas e lojas com cano de ferro fundido. Atendimento 24 horas e orçamento sem compromisso.',
    abertura:
      'No Centro de Vitória estão os prédios mais antigos da capital. Entre a Avenida Jerônimo Monteiro, a Praça Costa Pereira e as ladeiras da Cidade Alta, edifícios comerciais e residenciais de muitas décadas ainda funcionam com encanamento de ferro fundido. Esse material enferruja por dentro e vai fechando aos poucos. A Desentupidora Preço Bom atende apartamentos, salas, lojas e repartições da região a qualquer hora, com orçamento sem compromisso.',
    imovel:
      'Edifícios antigos de uso misto, sobrados históricos, lojas de rua e galerias, com muitos apartamentos pequenos e salas comerciais por andar.',
    problema:
      'O ferro fundido cria uma crosta de ferrugem que agarra gordura, cabelo e papel. O cano passa a funcionar com uma fração da passagem original, e o entupimento volta com frequência se a crosta não for removida.',
    servico: 'desentupimento-de-cano',
    faq: [
      {
        q: 'O cano de ferro do meu apartamento no Centro de Vitória aguenta o desentupimento com máquina?',
        a: 'Avaliamos o estado da tubulação antes. Em cano muito corroído usamos ferramenta e rotação adequadas para limpar sem forçar a parede do tubo, e avisamos se houver trecho comprometido.',
      },
      {
        q: 'Moro na Cidade Alta, numa ladeira onde carro não para. Como o equipamento chega?',
        a: 'As máquinas para desentupimento de cano, pia e vaso são portáteis e podem ser levadas a pé por ladeira e escadaria.',
      },
      {
        q: 'Tenho uma sala comercial num edifício antigo da Jerônimo Monteiro e o lavabo entope sempre. É problema da sala ou do prédio?',
        a: 'Se só o seu lavabo para, o problema tende a estar no ramal da sala. Se outras salas do mesmo lado do andar também reclamam, é a prumada. Identificamos isso no local, sem taxa de visita.',
      },
    ],
  },
  {
    slug: 'bento-ferreira',
    nome: 'Bento Ferreira',
    zona: 'Região da Praia do Canto',
    vizinhos: ['Enseada do Suá', 'Santa Lúcia', 'Praia do Canto', 'Jesus de Nazareth'],
    referencias: ['Avenida Marechal Mascarenhas de Moraes', 'Avenida César Hilal', 'Prefeitura de Vitória'],
    h1: 'Hidrojateamento e desentupidora em Bento Ferreira, Vitória',
    metaDescription:
      'Hidrojateamento e desentupimento em Bento Ferreira, Vitória, para empresas, órgãos públicos e condomínios. Orçamento grátis no local, 24 horas.',
    abertura:
      'Bento Ferreira concentra sedes de empresas, órgãos públicos, a Prefeitura de Vitória, concessionárias e prédios de escritórios, além de condomínios residenciais na direção da Avenida César Hilal. São imóveis grandes, com garagens extensas, cozinhas de refeitório e redes internas longas, que pedem limpeza com jato de água em alta pressão. A Desentupidora Preço Bom faz atendimento residencial e comercial no bairro, com orçamento grátis no local.',
    imovel:
      'Edifícios corporativos, repartições e lojas de grande porte ao longo da Avenida Marechal Mascarenhas de Moraes, com prédios residenciais nas ruas internas.',
    problema:
      'Rede interna comprida, com muitos metros entre o último banheiro e a saída para a rua, acumula sedimento em toda a extensão. O cabo abre um furo no bloqueio, enquanto o hidrojateamento lava a parede inteira do cano.',
    servico: 'hidrojateamento',
    faq: [
      {
        q: 'A empresa onde trabalho, em Bento Ferreira, só pode parar os banheiros fora do expediente. Vocês fazem hidrojateamento à noite?',
        a: 'Fazemos. O atendimento é 24 horas, inclusive domingos e feriados, então o serviço pode ser marcado para a noite ou para o fim de semana.',
      },
      {
        q: 'A garagem do meu prédio em Bento Ferreira tem canaletas que entopem com areia e óleo. Dá para lavar por dentro?',
        a: 'Dá. O jato em alta pressão remove o sedimento das canaletas e da tubulação que as liga à caixa, devolvendo a vazão para os dias de chuva.',
      },
      {
        q: 'Preciso de mais de um orçamento para aprovar o serviço num órgão público em Bento Ferreira. O de vocês é cobrado?',
        a: 'Não. O orçamento é grátis, feito no local e sem compromisso, com a descrição do serviço e o valor.',
      },
    ],
  },
  {
    slug: 'santa-lucia',
    nome: 'Santa Lúcia',
    zona: 'Região da Praia do Canto',
    vizinhos: ['Praia do Canto', 'Bento Ferreira', 'Enseada do Suá', 'Maruípe', 'Barro Vermelho'],
    referencias: ['Avenida Nossa Senhora da Penha', 'Avenida Leitão da Silva', 'Avenida Rio Branco'],
    h1: 'Vaso entupido em Santa Lúcia? Desentupidora 24h em Vitória',
    metaDescription:
      'Vaso entupido em clínica, consultório ou apartamento de Santa Lúcia, Vitória? Desentupidora 24 horas, orçamento grátis no local, sem taxa de visita.',
    abertura:
      'Santa Lúcia é o endereço de boa parte das clínicas, laboratórios e consultórios de Vitória, espalhados entre a Reta da Penha e a Avenida Leitão da Silva. Banheiro de clínica recebe paciente o dia inteiro, e nem todo mundo respeita o aviso colado na parede. Papel toalha e lenço umedecido no vaso são a causa da maioria dos chamados. A Desentupidora Preço Bom atende com discrição, orçamento grátis no local e sem taxa de visita.',
    imovel:
      'Prédios de salas e clínicas, casas adaptadas para consultório e edifícios residenciais nas ruas mais internas do bairro.',
    problema:
      'Lenço umedecido, papel toalha e absorvente não se desmancham na água. Ficam presos no sifão do vaso ou na primeira curva do ramal e seguram todo o resto.',
    servico: 'desentupimento-de-vaso-sanitario',
    faq: [
      {
        q: 'Minha clínica em Santa Lúcia não pode ficar com o banheiro de pacientes interditado. O serviço demora?',
        a: 'Desentupimento de vaso costuma ser um serviço curto quando a obstrução está na própria louça ou no início do ramal. Avaliamos no local e dizemos o que será feito e o valor antes de começar.',
      },
      {
        q: 'Tenho consultório numa casa adaptada em Santa Lúcia. Dá para desentupir o vaso sem interromper as consultas?',
        a: 'Em geral, sim. O trabalho fica restrito ao banheiro, o equipamento é portátil e o local é entregue limpo.',
      },
      {
        q: 'Num prédio de salas em Santa Lúcia, só o vaso do meu andar entope. Por que os outros não?',
        a: 'Pode haver um objeto preso no ramal do seu andar, segurando papel a cada uso, ou um trecho com pouco caimento. Retiramos o que estiver travado e explicamos a causa.',
      },
    ],
  },
  {
    slug: 'enseada-do-sua',
    nome: 'Enseada do Suá',
    zona: 'Região da Praia do Canto',
    vizinhos: ['Praia do Canto', 'Bento Ferreira', 'Santa Lúcia', 'Praia do Suá'],
    referencias: ['Shopping Vitória', 'Terceira Ponte', 'Praça do Papa', 'Avenida Américo Buaiz'],
    h1: 'Enseada do Suá: desentupidora para torres e edifícios',
    metaDescription:
      'Desentupidora na Enseada do Suá, Vitória: colunas de torres comerciais e residenciais, subsolos e copas. Orçamento grátis no local, 24 horas.',
    abertura:
      'A Enseada do Suá foi construída sobre aterro e cresceu para cima: torres comerciais, edifícios residenciais altos, o Shopping Vitória e os acessos da Terceira Ponte ocupam uma área plana à beira da baía. Em prédio de vinte andares ou mais, com centenas de pessoas circulando, a prumada de esgoto trabalha sem descanso. A Desentupidora Preço Bom atende condomínios, salas e apartamentos do bairro com orçamento grátis no local, 24 horas.',
    imovel:
      'Edifícios altos, residenciais e corporativos, com garagens em vários níveis, restaurantes no térreo e administração condominial profissional.',
    problema:
      'Em torres de uso misto, a mesma coluna pode receber copas de escritório, restaurantes e apartamentos. O resíduo acumula nos desvios da prumada e na transição para a garagem, e o retorno aparece nos pavimentos mais baixos.',
    servico: 'desentupimento-de-coluna',
    faq: [
      {
        q: 'Administro uma torre comercial na Enseada do Suá. Vocês atendem seguindo o cadastro e o horário exigidos pela portaria?',
        a: 'Sim. Combinamos antes o horário, a identificação da equipe e o acesso pela doca ou pelo elevador de serviço, conforme a regra do condomínio.',
      },
      {
        q: 'A garagem do meu prédio na Enseada do Suá tem cheiro de esgoto. Pode ser a coluna?',
        a: 'Pode. O pé da coluna, onde a tubulação muda de vertical para horizontal, é o ponto que mais acumula resíduo. Inspecionamos as caixas da garagem e limpamos o trecho obstruído.',
      },
      {
        q: 'As copas dos escritórios do meu andar na Enseada do Suá ficaram com a pia lenta ao mesmo tempo. É coincidência?',
        a: 'Dificilmente. Pias de salas diferentes parando juntas indicam obstrução na prumada que atende aquele lado do andar. O serviço é de desentupimento de coluna, tratado com a administração.',
      },
    ],
  },
  {
    slug: 'maruipe',
    nome: 'Maruípe',
    zona: 'Maruípe',
    vizinhos: ['Santa Lúcia', 'Jardim da Penha', 'Centro', 'São Cristóvão', 'Tabuazeiro'],
    referencias: ['Avenida Maruípe', 'Parque Municipal Horto de Maruípe', 'Hospital Universitário (Hucam)'],
    h1: 'Desentupimento de esgoto e desentupidora 24h em Maruípe',
    metaDescription:
      'Desentupimento de esgoto, vaso e pia em Maruípe, Vitória, para casas antigas e imóveis de aluguel. Atendimento 24 horas, orçamento sem compromisso.',
    abertura:
      'Maruípe é um bairro de casas antigas no pé dos morros, conhecido pelo horto, pelo hospital universitário e pelo campus de saúde da Ufes. Estudantes e funcionários do hospital alugam quartos e casas divididas, o que põe muita gente em imóveis pensados para uma família. O esgoto antigo sente primeiro. A Desentupidora Preço Bom atende Maruípe todos os dias, com orçamento sem compromisso e valor informado antes do serviço começar.',
    imovel:
      'Casas e sobrados de várias décadas, alguns divididos em quartos para alugar, e pequenos prédios e comércios ao longo da Avenida Maruípe.',
    problema:
      'Ramal de esgoto antigo, com manilha e caixas de inspeção rasas, acumula gordura e papel quando o número de moradores aumenta. Em terreno inclinado, a terra que desce com a chuva também entra nas caixas.',
    servico: 'desentupimento-de-esgoto',
    faq: [
      {
        q: 'Alugo quartos para estudantes numa casa em Maruípe e o esgoto entope todo semestre. O que está errado?',
        a: 'Provavelmente o ramal não foi feito para tantos moradores e tem pontos de acúmulo. Uma limpeza completa, da última caixa até a rua, costuma espaçar bastante o problema.',
      },
      {
        q: 'Minha casa em Maruípe fica em rua íngreme e a caixa de inspeção enche de terra. Vocês limpam?',
        a: 'Limpamos a caixa e o cano que sai dela. Vale também manter a tampa bem assentada, porque é por ali que a terra da enxurrada entra.',
      },
      {
        q: 'Trabalho de plantão no hospital e só estou em casa, em Maruípe, de madrugada. Vocês atendem nesse horário?',
        a: 'Atendemos. O serviço é 24 horas, todos os dias, inclusive domingos e feriados.',
      },
    ],
  },
  {
    slug: 'santo-antonio',
    nome: 'Santo Antônio',
    zona: 'Centro e Santo Antônio',
    vizinhos: ['Centro', 'Maruípe', 'Caratoíra', 'Inhanguetá'],
    referencias: ['Santuário-Basílica de Santo Antônio', 'Avenida Santo Antônio', 'Cemitério de Santo Antônio'],
    h1: 'Desentupidora em Santo Antônio, Vitória: chuva, ralos e esgoto',
    metaDescription:
      'Desentupidora em Santo Antônio, Vitória: ralos, canaletas e rede pluvial de casas em ladeira. Orçamento grátis no local, 24 horas, todos os dias.',
    abertura:
      'Santo Antônio sobe o morro a partir da baía, com a basílica em ponto elevado servindo de referência para quem chega. Nas ruas inclinadas e nas escadarias, a água da chuva desce com força e carrega terra, pedra miúda e folha para dentro dos ralos e das canaletas das casas. Quando esses caminhos entopem, a enxurrada invade a garagem. A Desentupidora Preço Bom atende o bairro com orçamento grátis no local, a qualquer hora.',
    imovel:
      'Casas e sobrados antigos em terreno inclinado, muitos construídos em patamares, com escadas externas, lajes e muros de arrimo.',
    problema:
      'Canaletas, ralos de laje e tubos de descida recebem terra a cada chuva. O material compacta no pé do tubo e a água passa a escorrer por onde não devia, pela escada ou pela parede.',
    servico: 'desentupimento-de-rede-pluvial',
    faq: [
      {
        q: 'A água da chuva desce da rua de cima e entope o ralo da minha garagem em Santo Antônio. Tem como resolver?',
        a: 'Limpamos o ralo, a canaleta e o cano de saída para que deem conta do volume. Uma grelha que segure pedra e folha antes do ralo ajuda a manter o resultado.',
      },
      {
        q: 'O ralo da laje da minha casa em Santo Antônio empoça e a água escorre pela parede. É entupimento?',
        a: 'Muito provavelmente. Ralo de laje acumula terra, folha e resto de obra, e o tubo de descida fecha por dentro. Desobstruímos o ralo e o tubo até a saída.',
      },
      {
        q: 'Depois de uma chuva forte em Santo Antônio, a caixa de passagem do quintal ficou cheia de lama. Precisa de desentupidora?',
        a: 'Se a lama já entrou no cano, sim. Retirar só o que está na caixa deixa o tubo parcialmente fechado, e ele entope de vez na chuva seguinte.',
      },
    ],
  },
];
