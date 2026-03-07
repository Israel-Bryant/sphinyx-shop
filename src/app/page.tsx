import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { STORE_LINKS } from "@/lib/store-links";
import { flowProducts } from "@/lib/flow-products";

const categories = [
  {
    title: "Holding",
    description:
      "Marca guarda-chuva que organiza plataforma, distribuicao e novas frentes de produto.",
  },
  {
    title: "Platform",
    description:
      "Camada de conta, marketplace, licencas, downloads e distribuicao do ecossistema.",
  },
  {
    title: "Launcher",
    description:
      "Cliente oficial para downloads, biblioteca e evolucao futura com updates automaticos.",
  },
  {
    title: "Flow",
    description:
      "Linha em producao para apps mobile de automacao de servicos como barbearias, estetica e clinicas.",
  },
];

const pillars = [
  "Sphynix atua como holding para organizar marca, infraestrutura e novas linhas de produto.",
  "Sphynix Platform centraliza conta, licencas, downloads e distribuicao do ecossistema.",
  "A primeira linha em producao e Flow, com apps mobile para negocios de servico.",
];

const ecosystem = [
  {
    title: "Holding",
    copy: "Estrutura institucional que abriga as frentes da empresa e coordena a expansao.",
  },
  {
    title: "Platform",
    copy: "Infraestrutura de marketplace, conta, pagamentos, licencas e distribuicao.",
  },
  {
    title: "Flow",
    copy: "Linha operacional com apps mobile-first para negocios de servico e atendimento.",
  },
  {
    title: "Launcher",
    copy: "Cliente da plataforma para download, biblioteca e experiencia de software centralizada.",
  },
];

const previewCards = [
  { name: "Sphynix Launcher", type: "Core App", status: "Download" },
  { name: "Flow", type: "Product Line", status: "Mobile-first" },
  { name: "BarberFlow", type: "App", status: "Produto em destaque" },
];

const flowSegments = [
  "Barbearias",
  "Estetica",
  "Clinicas",
  "Servicos locais",
];

export default function Home() {
  const barberFlow = flowProducts[0];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.18),_transparent_30%),radial-gradient(circle_at_80%_20%,_rgba(120,103,46,0.22),_transparent_20%),linear-gradient(180deg,_rgba(11,11,11,0.92),_rgba(11,11,11,1))]" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(212,175,55,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(212,175,55,0.08)_1px,transparent_1px)] [background-size:72px_72px]" />

      <SiteHeader />

      <main className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 pb-20 pt-10 sm:px-10 lg:px-12">
        <section className="grid min-h-[78vh] items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn className="space-y-8">
            <div className="inline-flex items-center rounded-full border border-[var(--border-strong)] bg-[var(--surface-soft)] px-4 py-2 text-xs uppercase tracking-[0.32em] text-[var(--accent)]">
              Ecossistema de software de automacao digital
            </div>

            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-[var(--muted)]">
                Sphynix Holding
              </p>
              <h1 className="max-w-4xl text-5xl leading-none font-semibold text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                Uma holding de software com plataforma propria e verticais em operacao.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-[var(--muted)] sm:text-xl">
                A Sphynix organiza distribuicao, infraestrutura e novas
                iniciativas digitais. A primeira frente em producao e a linha
                <span className="text-[var(--accent)]"> Flow</span>, criada para
                automacao de servicos e lancada inicialmente com foco mobile.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/flow" className="btn-primary">
                Conhecer Flow
              </Link>
              <Link href="/marketplace" className="btn-secondary">
                Ver ecossistema
              </Link>
            </div>

            <div className="grid gap-4 border-t border-[var(--border-soft)] pt-6 sm:grid-cols-3">
              <div>
                <p className="text-3xl font-semibold text-[var(--foreground)]">
                  01
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  holding, marca e estrutura institucional
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-[var(--foreground)]">
                  flow
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  linha mobile-first para servicos em producao
                </p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-[var(--foreground)]">
                  core
                </p>
                <p className="mt-2 text-sm text-[var(--muted)]">
                  plataforma propria para escalar novas iniciativas
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={0.15} className="lg:justify-self-end">
            <div className="panel-gold relative overflow-hidden p-8 sm:p-10">
              <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-[0.35em] text-[var(--accent)]">
                    Flow Line
                  </span>
                  <span className="rounded-full border border-[var(--border-strong)] px-3 py-1 text-xs text-[var(--muted)]">
                    iOS / Android
                  </span>
                </div>

                <div className="rounded-[28px] border border-[var(--border-soft)] bg-black/40 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
                  <div className="mb-6 flex items-center justify-between">
                    <div>
                      <p className="font-display text-2xl text-[var(--foreground)]">
                        BarberFlow
                      </p>
                      <p className="text-sm text-[var(--muted)]">
                        Primeiro produto real da linha Flow com narrativa, modulos e galeria integrados.
                      </p>
                    </div>
                    <div className="h-14 w-14 rounded-2xl border border-[var(--border-strong)] bg-[radial-gradient(circle_at_30%_30%,_rgba(255,215,120,0.22),_rgba(17,17,17,0.92))]" />
                  </div>

                  <div className="space-y-4">
                    {[
                      "Apps para barbearias, estetica e clinicas",
                      "Distribuicao mobile-first com extensao futura para web",
                      "App Store e Play Store como canais iniciais",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--foreground)]"
                      >
                        <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {previewCards.map((card) => (
                    <div
                      key={card.name}
                      className="rounded-[24px] border border-[var(--border-soft)] bg-[var(--surface-soft)] p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                        {card.type}
                      </p>
                      <p className="mt-3 text-lg text-[var(--foreground)]">
                        {card.name}
                      </p>
                      <p className="mt-6 text-xs text-[var(--muted)]">
                        {card.status}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => (
            <FadeIn
              key={pillar}
              delay={index * 0.08}
              className="panel p-7 text-[var(--foreground)]"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                Pilar 0{index + 1}
              </p>
              <p className="mt-4 text-xl leading-8">{pillar}</p>
            </FadeIn>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <FadeIn className="space-y-4">
            <p className="section-tag">Categorias</p>
            <h2 className="section-title">
              A homepage precisa explicar a empresa antes de vender qualquer produto.
            </h2>
            <p className="section-copy">
              O foco agora e posicionar a Sphynix como holding, mostrar a
              Sphynix Platform como infraestrutura e destacar Flow como primeira
              operacao real.
            </p>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-2">
            {categories.map((category, index) => (
              <FadeIn
                key={category.title}
                delay={index * 0.08}
                className="panel-gold p-6"
              >
                <p className="font-display text-3xl text-[var(--foreground)]">
                  {category.title}
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                  {category.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <FadeIn className="panel-gold p-8 sm:p-10">
            <p className="section-tag">Flow</p>
            <h2 className="section-title max-w-3xl">
              Flow e uma linha especifica da Sphynix voltada para automacao de servicos.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Nao e a holding inteira. Nao e o marketplace inteiro. Flow e uma
              frente propria de produtos, iniciada com experiencia mobile-first
              para negocios que dependem de agenda, atendimento, recorrencia e
              relacionamento com clientes.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={STORE_LINKS.appStore}
                className="btn-primary"
                aria-label="Link futuro da App Store para Flow"
              >
                App Store
              </a>
              <a
                href={STORE_LINKS.playStore}
                className="btn-secondary"
                aria-label="Link futuro da Play Store para Flow"
              >
                Google Play
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/flow" className="btn-secondary">
                Ver pagina da linha Flow
              </Link>
              <Link href={`/flow/${barberFlow.slug}`} className="btn-secondary">
                Abrir BarberFlow
              </Link>
            </div>
          </FadeIn>

          <div className="grid gap-4">
            {flowSegments.map((segment, index) => (
              <FadeIn
                key={segment}
                delay={index * 0.08}
                className="panel p-6"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                  Flow Segment
                </p>
                <p className="mt-4 font-display text-3xl text-[var(--foreground)]">
                  {segment}
                </p>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                  Experiencia pensada para operacao diaria, atendimento rapido,
                  agenda e relacionamento direto com o cliente.
                </p>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_0.95fr]">
          <FadeIn className="panel p-8 sm:p-10">
            <p className="section-tag">{barberFlow.name}</p>
            <h2 className="section-title max-w-2xl">
              BarberFlow ja pode ser apresentado com narrativa, modulos e capturas reais.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              A pagina do produto agora mostra o posicionamento real do
              BarberFlow dentro da linha Flow, com beneficios claros, modulos
              centrais e uma galeria conectada ao conteudo oficial do produto.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href={`/flow/${barberFlow.slug}`} className="btn-primary">
                Ver pagina do BarberFlow
              </Link>
              <Link href="/marketplace" className="btn-secondary">
                Ver catalogo inicial
              </Link>
            </div>
          </FadeIn>

          <div className="grid gap-4">
            {barberFlow.screenshots.map((shot, index) => (
              <FadeIn
                key={shot.imageSrc}
                delay={index * 0.08}
                className="panel p-6"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                  Preview do produto
                </p>
                <p className="mt-4 text-2xl leading-8 text-[var(--foreground)]">
                  {shot.title}
                </p>
                <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                  {shot.description}
                </p>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn className="panel p-8 sm:p-10">
            <p className="section-tag">Sphynix Launcher</p>
            <h2 className="section-title max-w-2xl">
              O launcher conecta a holding com a experiencia real de distribuicao.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              A camada institucional apresenta a empresa, a plataforma sustenta
              conta e marketplace e o launcher vira o cliente oficial para
              downloads, biblioteca e evolucao das linhas de software.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/launcher" className="btn-primary">
                Ver pagina do launcher
              </Link>
              <Link href="/marketplace" className="btn-secondary">
                Ver catalogo inicial
              </Link>
            </div>
          </FadeIn>

          <div className="grid gap-4">
            {ecosystem.map((item, index) => (
              <FadeIn
                key={item.title}
                delay={index * 0.08}
                className="panel p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl text-[var(--foreground)]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-base leading-7 text-[var(--muted)]">
                      {item.copy}
                    </p>
                  </div>
                  <div className="mt-2 h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_24px_rgba(212,175,55,0.65)]" />
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        <FadeIn className="panel-gold p-8 sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-tag">Proximo movimento</p>
              <h2 className="section-title max-w-2xl">
                A base do site agora comunica a holding, a plataforma e a
                primeira vertical em producao.
              </h2>
            </div>
            <Link href="/marketplace" className="btn-primary">
              Continuar para marketplace
            </Link>
          </div>
        </FadeIn>
      </main>

      <SiteFooter />
    </div>
  );
}
