import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/fade-in";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { flowProducts, flowProductsBySlug } from "@/lib/flow-products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return flowProducts.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = flowProductsBySlug[slug];

  if (!product) {
    return {
      title: "Produto nao encontrado | Flow",
    };
  }

  return {
    title: `${product.name} | Flow | Sphynix`,
    description: product.summary,
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = flowProductsBySlug[slug];

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 pb-20 pt-10 sm:px-10 lg:px-12">
        <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <FadeIn className="panel-gold p-8 sm:p-10">
            <p className="section-tag">{product.shortLabel}</p>
            <h1 className="section-title max-w-3xl">{product.name}</h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              {product.tagline}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              {product.longDescription}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <a
                href={product.appStoreUrl}
                className="btn-primary"
                aria-label={`Link futuro da App Store para ${product.name}`}
              >
                App Store
              </a>
              <a
                href={product.playStoreUrl}
                className="btn-secondary"
                aria-label={`Link futuro da Play Store para ${product.name}`}
              >
                Google Play
              </a>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/flow" className="btn-secondary">
                Voltar para Flow
              </Link>
              <Link href="/marketplace" className="btn-secondary">
                Ver no marketplace
              </Link>
            </div>
          </FadeIn>

          <div className="grid gap-4">
            <FadeIn className="panel p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                Status
              </p>
              <p className="mt-4 font-display text-3xl text-[var(--foreground)]">
                {product.status}
              </p>
            </FadeIn>

            <FadeIn delay={0.08} className="panel p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                Plataformas
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.platforms.map((platform) => (
                  <span
                    key={platform}
                    className="rounded-full border border-[var(--border-strong)] px-4 py-2 text-sm text-[var(--foreground)]"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.16} className="panel p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                Publico inicial
              </p>
              <div className="mt-4 space-y-3">
                {product.audience.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--foreground)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <FadeIn className="panel p-8 sm:p-10">
            <p className="section-tag">Descricao</p>
            <h2 className="section-title max-w-2xl">
              Pagina preparada para receber informacoes reais do outro PC.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)]">
              Quando voce tiver acesso aos materiais, basta editar o arquivo
              `src/lib/flow-products.ts` para atualizar descricao, status,
              modulos e links. As imagens reais podem entrar depois em
              `public/products/barberflow/`.
            </p>
          </FadeIn>

          <div className="grid gap-4">
            {product.modules.map((module, index) => (
              <FadeIn
                key={module}
                delay={index * 0.08}
                className="panel p-6"
              >
                <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                  Modulo
                </p>
                <p className="mt-4 text-2xl leading-8 text-[var(--foreground)]">
                  {module}
                </p>
              </FadeIn>
            ))}
          </div>
        </section>

        <section>
          <FadeIn className="panel-gold p-8 sm:p-10">
            <div className="flex flex-col gap-5">
              <div>
                <p className="section-tag">Galeria</p>
                <h2 className="section-title max-w-3xl">
                  Espaco reservado para as capturas do app.
                </h2>
              </div>

              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {product.screenshots.map((shot, index) => (
                  <FadeIn
                    key={shot}
                    delay={index * 0.06}
                    className="rounded-[28px] border border-[var(--border-soft)] bg-black/30 p-5"
                  >
                    <div className="flex h-56 items-end rounded-[22px] border border-dashed border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(214,170,67,0.06),rgba(255,255,255,0.02))] p-4">
                      <div>
                        <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                          Screenshot 0{index + 1}
                        </p>
                        <p className="mt-3 text-lg text-[var(--foreground)]">
                          {shot}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
