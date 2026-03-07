import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { flowProducts } from "@/lib/flow-products";

const pillars = [
  {
    title: "Linha especifica",
    copy: "Flow e uma familia de produtos dentro da Sphynix, nao um site separado e nao a marca inteira.",
  },
  {
    title: "Mobile-first",
    copy: "A entrada inicial acontece por iOS e Android, com expansao futura para dashboard web e operacao integrada.",
  },
  {
    title: "Servicos locais",
    copy: "O foco inicial sao negocios como barbearias, estetica, clinicas e operacoes de atendimento.",
  },
];

const segments = [
  "Agenda e disponibilidade",
  "Relacionamento com clientes",
  "Descoberta de profissionais",
  "Pagamentos e recorrencia",
];

export default function FlowPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 pb-20 pt-10 sm:px-10 lg:px-12">
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn className="panel-gold p-8 sm:p-10">
            <p className="section-tag">Flow</p>
            <h1 className="section-title max-w-3xl">
              A linha Flow organiza os apps de servicos da Sphynix.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Em vez de abrir outro dominio agora, Flow pode viver dentro do
              ecossistema principal como uma linha de produtos clara, com pagina
              propria, identidade propria e rotas dedicadas.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/marketplace" className="btn-secondary">
                Ver no marketplace
              </Link>
              <Link href="/launcher" className="btn-secondary">
                Ver launcher
              </Link>
            </div>
          </FadeIn>

          <div className="grid gap-4">
            {pillars.map((pillar, index) => (
              <FadeIn
                key={pillar.title}
                delay={index * 0.08}
                className="panel p-6"
              >
                <p className="font-display text-3xl text-[var(--foreground)]">
                  {pillar.title}
                </p>
                <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                  {pillar.copy}
                </p>
              </FadeIn>
            ))}
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {segments.map((segment, index) => (
            <FadeIn
              key={segment}
              delay={index * 0.08}
              className="panel p-6"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                Flow Core
              </p>
              <p className="mt-4 text-2xl leading-8 text-[var(--foreground)]">
                {segment}
              </p>
            </FadeIn>
          ))}
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {flowProducts.map((product, index) => (
            <FadeIn
              key={product.slug}
              delay={index * 0.08}
              className="panel-gold p-7"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                Produto inicial
              </p>
              <h2 className="mt-4 font-display text-4xl text-[var(--foreground)]">
                {product.name}
              </h2>
              <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                {product.summary}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link href={`/flow/${product.slug}`} className="btn-primary">
                  Abrir pagina do produto
                </Link>
                <a
                  href={product.appStoreUrl}
                  className="btn-secondary"
                  aria-label={`Link futuro da App Store para ${product.name}`}
                >
                  App Store
                </a>
              </div>
            </FadeIn>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
