// config.js
const steps = [
    {
        message: "Olá, estou procurando um imóvel para minha família. Pode me ajudar? ",
        options: [
            { text: "Boa tarde! Temos várias opções de imóveis disponíveis. Você pode verificar todas no nosso site e, se algo lhe interessar, podemos conversar mais depois.", correct: false, feedback: "Essa resposta é vaga e desinteressada. O corretor não faz nenhum esforço para iniciar um diálogo personalizado ou para conhecer as necessidades específicas do cliente, o que pode resultar em perda de oportunidade de construir um relacionamento. A interação parece fria e automática." },
            { text: "Boa tarde! Claro, será um prazer ajudar. Você poderia me contar um pouco mais sobre o que está buscando? Por exemplo, o tipo de imóvel e a região de interesse?", correct: true }
        ]
    },
    {
        message: "Estamos procurando uma casa em um bairro tranquilo, com pelo menos três quartos e um quintal grande, de preferência em um condomínio fechado. Gostaríamos de algo na zona sul da cidade.",
        options: [
            { text: "Ah, infelizmente a zona sul não tem tantas opções com essas características. Talvez seja melhor você procurar na zona norte ou em áreas mais distantes. ", correct: false, feedback: "Essa resposta é negativa e desmotivadora, descartando de imediato as opções da zona sul sem tentar investigar mais o que o cliente procura ou oferecer alternativas. Além disso, não explora a necessidade do cliente, como opções em condomínios fechados, lazer ou proximidade de serviços. " },
            { text: "Entendido. A zona sul tem várias opções excelentes. Vocês preferem alguma região específica ou estão abertos a explorar diferentes bairros? ", correct: true },
            { text: "Entendo, mas você já considerou um apartamento? Eles geralmente têm áreas comuns que podem substituir um quintal.", correct: false, feedback: "O corretor ignora completamente o pedido do cliente, que especificou querer uma casa com quintal. Sugerir algo que vai contra as necessidades do cliente sem antes entender as razões dele pode ser interpretado como desinteresse em atender adequadamente ao que foi solicitado. Isso também demonstra falta de escuta ativa." },
        ]
    },
    {
        message: "Estamos considerando o bairro Morumbi, pois temos crianças e gostaríamos de estar perto de boas escolas.",
        options: [
            { text: "Vou enviar algumas opções de imóveis. Quanto ao financiamento, você pode procurar diretamente os bancos para ver o que eles oferecem.", correct: false, feedback: "Essa resposta é desinteressada e pouco colaborativa. O cliente pediu informações sobre financiamento e o corretor deveria aproveitar a oportunidade para explicar as opções disponíveis ou oferecer suporte nesse processo, em vez de simplesmente redirecionar o cliente para os bancos. Isso demonstra falta de proatividade." },
            { text: "O valor de R$ 1,2 milhão pode não ser suficiente para algo realmente bom na região. Você já considerou aumentar seu orçamento ou procurar em outra área?", correct: false, feedback: "Essa resposta é negativa e desencorajadora, sugerindo imediatamente que o orçamento do cliente não é suficiente sem explorar as opções dentro do valor indicado. Isso pode causar frustração e afastar o cliente, que já indicou estar disposto a investir um valor específico." },
            { text: "Excelente escolha! O Morumbi tem ótimas opções de escolas e é uma região bastante familiar. Além disso, temos alguns empreendimentos em condomínios fechados que podem ser do seu interesse. Qual seria o valor máximo que vocês gostariam de investir?", correct: true }
        ]
    },
    {
        message: "Sim, uma área de lazer seria ótima, especialmente com piscina e espaço para as crianças. E a segurança é fundamental para nós.",
        options: [
            { text: "Área de lazer com piscina é algo mais difícil de encontrar. Talvez você precise flexibilizar essa exigência ou considerar outra região.", correct: false, feedback: "Essa resposta desanima o cliente imediatamente, sugerindo que suas preferências não podem ser atendidas sem haver a tentativa de encontrar opções. O corretor deveria mostrar mais proatividade e otimismo ao buscar alternativas adequadas em vez de sugerir ao cliente repensar suas prioridades." },
            { text: "Entendido! Vou selecionar algumas opções que se encaixam no que você mencionou. Em alguns minutos, você vai receber as opções no seu <i>e-mail</i>. Vou me certificar de que todos os condomínios ofereçam excelente segurança e área de lazer completa, com piscina.", correct: true },
            { text: "Vou enviar opções de imóveis, mas não tenho certeza se elas terão todos esses detalhes que você mencionou. Pode ser que a maioria dos condomínios não tenha piscina.", correct: false, feedback: "Essa resposta é vaga e não transmite confiança. O corretor deve ser mais assertivo e garantir ao cliente que irá buscar opções que atendam às necessidades dele. A incerteza demonstrada pode passar uma sensação de falta de preparo e gerar insegurança no cliente, prejudicando o relacionamento." },
        ]
    },
    {
        message: `Perfeito, obrigado! Quanto tempo demora para que possamos agendar uma visita?`,
        options: [
            { text: "As visitas podem demorar alguns dias para serem agendadas, dependendo da disponibilidade do proprietário. Você pode ter que esperar até a próxima semana.", correct: false, feedback: "Essa resposta não demonstra flexibilidade ou disposição para atender ao cliente de forma ágil. O cliente provavelmente está entusiasmado para visitar os imóveis e a resposta deveria incentivar um agendamento rápido e mostrar empenho em acelerar o processo." },
            { text: "Assim que você receber as opções, podemos agendar uma visita imediatamente. Temos horários flexíveis, inclusive à noite ou no final de semana, caso prefira. Vou estar à disposição para acompanhar todo o processo. Além disso, se precisar de mais informações sobre os imóveis ou sobre o financiamento, estarei pronto para ajudar.", correct: true },
            { text: "As visitas são feitas apenas em horário comercial, de segunda a sexta. Podemos agendar durante esses horários.", correct: false, feedback: "Essa resposta limita as opções do cliente, que pode ter mencionado anteriormente a preferência por horários mais flexíveis, como à noite ou nos finais de semana. O corretor deve adaptar-se às necessidades do cliente, mostrando que há esforço para encontrar horários convenientes." }
        ]
    },
    {
        message: "Ótimo, ficarei aguardando. Obrigado pela atenção!",
        options: [
            { text: "Eu que agradeço! Vou enviar as informações agora mesmo. Qualquer dúvida, estarei por aqui no chat ou no meu e-mail.", correct: true },
            { text: "Obrigado, mas não tenho certeza de quando poderei enviar as informações. Pode demorar um pouco, então aguarde um tempo antes de me procurar novamente.", correct: false, feedback: "Essa resposta transmite incerteza e falta de comprometimento com o cliente. O corretor deve demonstrar que está atento e que dará prioridade ao envio das informações, mantendo o cliente informado sobre o processo. Essa falta de clareza pode frustrar o cliente e fazer com que ele se sinta negligenciado." },
            { text: "É isso aí! Não se preocupe, não tenho muitos clientes agora, então posso atender você quando eu puder. Não hesite em perguntar se precisar.", correct: false, feedback: "Essa resposta pode ser interpretada como desinteressada ou até mesmo como uma falta de profissionalismo. O corretor deve manter uma atitude proativa e encorajadora, em vez de dar a impressão de que está despreocupado com a necessidade do cliente. Isso pode diminuir a confiança do cliente na dedicação do corretor." },

        ]
    },
  

];
