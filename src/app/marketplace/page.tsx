import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const products = [
  {
    name: "BarberFlow",
    category: "Flow Mobile",
    platform: "iOS / Android",
    pricing: "Em producao",
    description:
      "Apps para operacao de agenda, atendimento, fluxo interno e gestao do dia a dia.",
  },
  {
    name: "Flow for Estetica",
    category: "Flow Mobile",
    platform: "iOS / Android",
    pricing: "Em producao",
    description:
      "Estrutura focada em servicos, recorrencia, equipe, atendimento e operacao comercial.",
  },
  {
    name: "Flow for Clinicas",
    category: "Flow Mobile",
    platform: "iOS / Android",
    pricing: "Planejamento ativo",
    description:
      "Base para rotinas administrativas, atendimento e organizacao operacional.",
  },
  {
    name: "Sphynix Launcher",
    category: "Platform",
    platform: "Windows / macOS",
    pricing: "Core download",
    description:
      "Cliente principal da plataforma para distribuicao, biblioteca e updates futuros.",
  },
];

export default function MarketplacePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 pb-20 pt-10 sm:px-10 lg:px-12">
        <FadeIn className="panel-gold p-8 sm:p-10">
          <p className="section-tag">Marketplace</p>
          <h1 className="section-title max-w-3xl">
            O marketplace comeca agrupando a linha Flow como primeira frente de produto.
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--muted)]">
            O marketplace agora representa primeiro as iniciativas da Sphynix,
            com destaque para a linha Flow, uma familia de apps mobile-first
            para automacao de servicos, e para a infraestrutura central da
            plataforma.
          </p>
        </FadeIn>

        <section className="grid gap-5 lg:grid-cols-[0.32fr_0.68fr]">
          <FadeIn className="panel p-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Filtros iniciais
            </p>
            <div className="mt-6 space-y-5 text-sm text-[var(--muted)]">
              <div>
                <p className="text-[var(--foreground)]">Categoria</p>
                <p className="mt-2">Flow Mobile, Platform, Holding</p>
              </div>
              <div>
                <p className="text-[var(--foreground)]">Modelo</p>
                <p className="mt-2">Em producao, core platform, planejamento</p>
              </div>
              <div>
                <p className="text-[var(--foreground)]">Plataforma</p>
                <p className="mt-2">iOS, Android, Windows, macOS</p>
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-5 md:grid-cols-2">
            {products.map((product, index) => (
              <FadeIn
                key={product.name}
                delay={index * 0.08}
                className="panel p-6"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.26em] text-[var(--accent)]">
                      {product.category}
                    </p>
                    <h2 className="mt-4 font-display text-3xl text-[var(--foreground)]">
                      {product.name}
                    </h2>
                  </div>
                  <span className="rounded-full border border-[var(--border-strong)] px-3 py-1 text-xs text-[var(--muted)]">
                    {product.pricing}
                  </span>
                </div>

                <p className="mt-5 text-base leading-7 text-[var(--muted)]">
                  {product.description}
                </p>

                <div className="mt-8 flex items-center justify-between border-t border-[var(--border-soft)] pt-5 text-sm text-[var(--muted)]">
                  <span>{product.platform}</span>
                  <Link
                    href={
                      product.name === "Sphynix Launcher"
                        ? "/launcher"
                        : product.name === "BarberFlow"
                          ? "/flow/barberflow"
                          : "/flow"
                    }
                    className="text-[var(--foreground)] transition hover:text-[var(--accent)]"
                  >
                    Ver detalhes
                  </Link>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
