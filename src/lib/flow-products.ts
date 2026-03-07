import { STORE_LINKS } from "@/lib/store-links";

export type FlowProductHighlight = {
  value: string;
  label: string;
  description: string;
};

export type FlowProductBenefit = {
  title: string;
  description: string;
};

export type FlowProductModule = {
  title: string;
  description: string;
};

export type FlowProductScreenshot = {
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  alt: string;
  points: string[];
  tone: "dark" | "light";
};

export type FlowProductPricing = {
  trialDays: number;
  amount: string;
  cadence: string;
  note: string;
};

export type FlowProductClientProfile = {
  title: string;
  description: string;
  icon: "shop" | "crown" | "team" | "solo" | "globe" | "queue";
};

export type FlowProductReviewSlide = {
  eyebrow: string;
  title: string;
  quote: string;
  role: string;
  icon: "owner" | "barber" | "growth";
};

export type FlowProduct = {
  slug: string;
  name: string;
  shortLabel: string;
  tagline: string;
  summary: string;
  longDescription: string;
  status: string;
  platforms: string[];
  audience: string[];
  highlights: FlowProductHighlight[];
  benefits: FlowProductBenefit[];
  modules: FlowProductModule[];
  screenshots: FlowProductScreenshot[];
  pricing: FlowProductPricing;
  clientProfiles: FlowProductClientProfile[];
  reviewSlides: FlowProductReviewSlide[];
  appStoreUrl: string;
  playStoreUrl: string;
};

export const flowProducts: FlowProduct[] = [
  {
    slug: "barberflow",
    name: "BarberFlow",
    shortLabel: "Flow for Barbearias",
    tagline:
      "O app mobile-first para barbearias que querem operar melhor e vender com mais consistencia.",
    summary:
      "BarberFlow organiza agenda, atendimento e booking da barbearia em um fluxo simples, premium e pronto para converter mais horarios.",
    longDescription:
      "BarberFlow e o primeiro produto real da linha Flow e foi desenhado para a rotina da barbearia moderna. Agenda inteligente, atendimento em estilo conversa, link publico de booking e leitura da operacao vivem no mesmo produto, reduzindo improviso e deixando a experiencia mais profissional para equipe e cliente.",
    status: "Lojas em preparo",
    platforms: ["iOS", "Android", "Web"],
    audience: [
      "Barbearias em operacao diaria",
      "Barbeiros autonomos",
      "Equipes com dono, gerente e barbeiro",
    ],
    highlights: [
      {
        value: "Mobile-first",
        label: "operacao no celular",
        description:
          "A equipe trabalha no fluxo do dia a dia direto no app, com experiencia pensada para uso rapido.",
      },
      {
        value: "Agenda inteligente",
        label: "slot fixo e flexivel",
        description:
          "O produto acompanha diferentes formatos de atendimento e encaixe sem engessar a agenda.",
      },
      {
        value: "Booking publico",
        label: "link e QR code",
        description:
          "A barbearia compartilha agenda, confirma horarios e converte clientes com menos atrito.",
      },
    ],
    benefits: [
      {
        title: "Agenda em tempo real",
        description:
          "Visualizacao clara da semana, disponibilidade do profissional e leitura imediata do que esta pago, ocupado ou livre.",
      },
      {
        title: "Atendimento em poucos passos",
        description:
          "Fluxo inspirado em conversa para acelerar o agendamento, reduzir friccao e deixar o cliente mais perto da confirmacao.",
      },
      {
        title: "Divulgacao pronta para compartilhar",
        description:
          "Link publico e QR code deixam a barbearia pronta para captar horarios sem depender de troca manual de mensagens.",
      },
      {
        title: "Visao total do negocio",
        description:
          "Relatorios operacionais ajudam a acompanhar receita, produtividade, origem dos agendamentos e desempenho da rotina.",
      },
    ],
    modules: [
      {
        title: "Agenda inteligente",
        description:
          "Modo slot fixo inteligente e modo flexivel para encaixar servicos de acordo com a operacao da equipe.",
      },
      {
        title: "Atendimento em estilo conversa",
        description:
          "Fluxo de agendamento inspirado em chat para acelerar confirmacoes, recorrencia e relacionamento com o cliente.",
      },
      {
        title: "Booking publico com verificacao",
        description:
          "Pagina publica com selecao de servicos, horario, verificacao por e-mail e confirmacao do agendamento.",
      },
      {
        title: "Catalogo e adicionais",
        description:
          "Servicos, produtos, extras e combinacoes organizados para montar atendimentos com mais clareza comercial.",
      },
      {
        title: "Equipe e papeis",
        description:
          "Estrutura pensada para dono, gerente e barbeiro, com visibilidade por profissional e rotina compartilhada.",
      },
      {
        title: "Relatorios operacionais",
        description:
          "Resumo financeiro, produtividade e diagnostico operacional para apoiar decisoes do negocio no dia a dia.",
      },
    ],
    screenshots: [
      {
        eyebrow: "Agenda",
        title: "Agenda inteligente em tempo real",
        description:
          "Semana, disponibilidade e faturamento visiveis em uma unica leitura no celular.",
        imageSrc: "/products/barberflow/agenda-inteligente.png",
        alt: "Tela do BarberFlow com agenda inteligente em tempo real",
        points: [
          "Leitura clara da semana e dos horarios ocupados",
          "Resumo rapido de receita e agenda principal",
          "Base pronta para encaixes e disponibilidade inteligente",
        ],
        tone: "dark",
      },
      {
        eyebrow: "Atendimento",
        title: "Atendimento em poucos passos",
        description:
          "Fluxo em estilo conversa para fechar agendamentos e sugerir servicos com rapidez.",
        imageSrc: "/products/barberflow/atendimento-conversa.png",
        alt: "Tela do BarberFlow com atendimento em estilo conversa",
        points: [
          "Experiencia publica com linguagem mais natural",
          "Escolha de servicos sem atrito para o cliente",
          "Menos troca manual de mensagens para confirmar horarios",
        ],
        tone: "dark",
      },
      {
        eyebrow: "Operacao flexivel",
        title: "Fila flexivel para ordem de chegada",
        description:
          "Operacao adaptada para dias em que a barbearia atende por fila, sem perder controle da agenda.",
        imageSrc: "/products/barberflow/fila-flexivel.png",
        alt: "Tela do BarberFlow com fila flexivel para atendimento em ordem de chegada",
        points: [
          "A agenda acompanha diferentes formatos de atendimento",
          "Fila da vez integrada ao fluxo do profissional",
          "Mais controle em dias de movimento imprevisivel",
        ],
        tone: "dark",
      },
      {
        eyebrow: "Gestao",
        title: "Relatorio detalhado da operacao",
        description:
          "Receita, produtividade e funil operacional reunidos em uma visao pratica para tomada de decisao.",
        imageSrc: "/products/barberflow/relatorio-detalhado.png",
        alt: "Tela do BarberFlow com relatorio detalhado da operacao",
        points: [
          "Resumo executivo com leitura facil no celular",
          "Indicadores para acompanhar produtividade e origem",
          "Visao financeira e operacional no mesmo ambiente",
        ],
        tone: "light",
      },
      {
        eyebrow: "Divulgacao",
        title: "Link publico e QR code",
        description:
          "Ferramenta pronta para divulgar a agenda da barbearia em segundos e converter mais horarios.",
        imageSrc: "/products/barberflow/link-publico.png",
        alt: "Tela do BarberFlow com link publico e QR code de agendamento",
        points: [
          "Link pronto para bio, WhatsApp e redes sociais",
          "QR code para captar clientes dentro da loja",
          "Divulgacao mais profissional sem depender de gambiarra",
        ],
        tone: "light",
      },
    ],
    pricing: {
      trialDays: 30,
      amount: "24,90",
      cadence: "/mes",
      note: "por profissional cadastrado",
    },
    clientProfiles: [
      {
        title: "Barbearia de bairro",
        description: "Agenda cheia nos horarios de pico e operacao acelerada.",
        icon: "shop",
      },
      {
        title: "Studio premium",
        description: "Experiencia mais refinada, com booking e atendimento marcado.",
        icon: "crown",
      },
      {
        title: "Equipe com 4 cadeiras",
        description: "Rotina compartilhada entre dono, gerente e barbeiros.",
        icon: "team",
      },
      {
        title: "Profissional autonomo",
        description: "Tudo concentrado no celular, sem depender de estrutura pesada.",
        icon: "solo",
      },
      {
        title: "Booking por link",
        description: "Divulgacao pelo WhatsApp, bio e QR code com menos atrito.",
        icon: "globe",
      },
      {
        title: "Fluxo flexivel",
        description: "Dias com horario marcado e dias com fila da vez no mesmo produto.",
        icon: "queue",
      },
    ],
    reviewSlides: [
      {
        eyebrow: "Visao do dono",
        title: "A agenda para de depender de improviso",
        quote:
          "Quando agenda, atendimento e divulgacao vivem no mesmo fluxo, a operacao fica mais previsivel e mais facil de escalar.",
        role: "Controle da semana",
        icon: "owner",
      },
      {
        eyebrow: "Visao do barbeiro",
        title: "O atendimento fica mais leve",
        quote:
          "O fluxo em estilo conversa ajuda a confirmar horarios e servicos sem aquela troca cansativa de mensagens soltas.",
        role: "Rapidez no dia a dia",
        icon: "barber",
      },
      {
        eyebrow: "Visao de crescimento",
        title: "Divulgar e converter fica mais simples",
        quote:
          "Com link publico, QR code e uma pagina de booking mais organizada, a barbearia ganha uma vitrine muito mais profissional.",
        role: "Captacao de horarios",
        icon: "growth",
      },
    ],
    appStoreUrl: STORE_LINKS.appStore,
    playStoreUrl: STORE_LINKS.playStore,
  },
];

export const flowProductsBySlug = Object.fromEntries(
  flowProducts.map((product) => [product.slug, product]),
);
