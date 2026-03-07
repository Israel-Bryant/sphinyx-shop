import { STORE_LINKS } from "@/lib/store-links";

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
  modules: string[];
  screenshots: string[];
  appStoreUrl: string;
  playStoreUrl: string;
};

export const flowProducts: FlowProduct[] = [
  {
    slug: "barberflow",
    name: "BarberFlow",
    shortLabel: "Flow for Barbearias",
    tagline: "Gestao mobile para barbearias e operacoes de atendimento.",
    summary:
      "Aplicativo da linha Flow para agenda, clientes, equipe, servicos e rotina operacional de barbearias.",
    longDescription:
      "BarberFlow e a primeira pagina de produto preparada dentro da linha Flow. Ela fica pronta para receber descricao final, capturas reais do app, diferenciais comerciais e links oficiais das lojas quando esses materiais estiverem disponiveis.",
    status: "Conteudo inicial",
    platforms: ["iOS", "Android"],
    audience: ["Barbearias", "Profissionais autonomos", "Equipes de atendimento"],
    modules: [
      "Agenda e disponibilidade",
      "Cadastro e historico de clientes",
      "Controle de equipe e atendimento",
      "Servicos, combos e recorrencia",
      "Comunicacao e relacionamento",
      "Base para pagamentos e assinatura",
    ],
    screenshots: [
      "Tela inicial do app",
      "Agenda do profissional",
      "Cadastro e perfil do cliente",
      "Tela de servicos e precos",
    ],
    appStoreUrl: STORE_LINKS.appStore,
    playStoreUrl: STORE_LINKS.playStore,
  },
];

export const flowProductsBySlug = Object.fromEntries(
  flowProducts.map((product) => [product.slug, product]),
);
