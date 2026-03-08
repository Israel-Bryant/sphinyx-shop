import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ClientProfileMarquee } from "@/components/client-profile-marquee";
import { FadeIn } from "@/components/fade-in";
import { HeroProductScene } from "@/components/hero-product-scene";
import { ReviewCarousel } from "@/components/review-carousel";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { StoreDownloadBadge } from "@/components/store-download-badge";
import { flowProducts, flowProductsBySlug } from "@/lib/flow-products";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function hasStoreLink(url: string) {
  return url.trim().length > 0 && url.trim() !== "#";
}

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

  if (product.screenshots.length < 4) {
    notFound();
  }

  const appStoreReady = hasStoreLink(product.appStoreUrl);
  const playStoreReady = hasStoreLink(product.playStoreUrl);
  const mercadoPagoReady = hasStoreLink(product.mercadoPagoUrl);
  const webAppAuthReady = hasStoreLink(product.webAppAuthUrl);

  const heroShot = product.screenshots[0];
  const chatShot = product.screenshots[1];
  const reportShot = product.screenshots[3];
  const linkShot = product.screenshots[4] ?? product.screenshots[2];

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(214,170,67,0.12),_transparent_26%),radial-gradient(circle_at_80%_16%,_rgba(214,170,67,0.09),_transparent_18%),linear-gradient(180deg,_rgba(5,5,5,0.98),_rgba(7,7,7,1))]" />

      <SiteHeader />

      <main
        id="topo"
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-16 px-6 pb-24 pt-8 sm:gap-20 sm:px-10 sm:pt-10 lg:px-12"
      >
        <section className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <FadeIn className="space-y-7 sm:space-y-8">
            <div className="inline-flex items-center rounded-full border border-[var(--border-strong)] bg-[rgba(214,170,67,0.08)] px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              {product.shortLabel}
            </div>

            <div className="space-y-5 sm:space-y-6">
              <h1 className="max-w-4xl font-display text-[3.8rem] leading-[0.9] tracking-[-0.05em] text-[var(--foreground)] sm:text-7xl lg:text-[5.9rem]">
                {product.name}
              </h1>
              <p className="max-w-2xl text-[1.45rem] leading-8 tracking-[-0.02em] text-[var(--foreground)] sm:text-[2.05rem] sm:leading-[1.3]">
                {product.summary}
              </p>
              <p className="max-w-2xl text-[0.98rem] leading-8 text-[var(--muted)]">
                {product.longDescription}
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a href="#planos" className="btn-primary">
                Comecar com {product.pricing.trialDays} dias
              </a>
              <a href="#fluxo" className="btn-secondary">
                Ver como funciona
              </a>
              <a
                href={mercadoPagoReady ? product.mercadoPagoUrl : "#planos"}
                className="btn-mercado"
              >
                Assinar no desktop
              </a>
              <a
                href={webAppAuthReady ? product.webAppAuthUrl : product.storefrontUrl}
                className="btn-secondary"
                target="_blank"
                rel="noreferrer"
              >
                Entrar no BarberFlow Web
              </a>
            </div>

            <dl className="grid gap-5 sm:grid-cols-3">
              <div>
                <dt className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                  Teste
                </dt>
                <dd className="mt-2 text-3xl text-[var(--foreground)] sm:text-4xl">
                  {product.pricing.trialDays} dias
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                  Valor
                </dt>
                <dd className="mt-2 text-3xl text-[var(--foreground)] sm:text-4xl">
                  R$ {product.pricing.amount}
                </dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                  Cobranca
                </dt>
                <dd className="mt-2 text-3xl text-[var(--foreground)] sm:text-4xl">
                  {product.pricing.cadence}
                </dd>
              </div>
            </dl>

            <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
              Teste por {product.pricing.trialDays} dias e veja se o fluxo faz
              sentido para a sua operacao antes de seguir para o plano pago.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <StoreDownloadBadge
                platform="play"
                href={product.playStoreUrl}
                ready={playStoreReady}
              />
              <StoreDownloadBadge
                platform="apple"
                href={product.appStoreUrl}
                ready={appStoreReady}
              />
            </div>
          </FadeIn>

          <FadeIn className="relative">
            <HeroProductScene
              heroShot={heroShot}
              chatShot={chatShot}
              reportShot={reportShot}
              trialDays={product.pricing.trialDays}
              price={product.pricing.amount}
              cadence={product.pricing.cadence}
            />
          </FadeIn>
        </section>

        <section className="space-y-5 sm:space-y-6">
          <FadeIn className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="section-tag">Clientes</p>
              <h2 className="section-title max-w-3xl">
                Feito para operacoes reais.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
              A mesma base precisa funcionar para diferentes perfis de
              barbearia. Essa faixa cria movimento e mostra amplitude sem
              pesar na leitura.
            </p>
          </FadeIn>

          <ClientProfileMarquee profiles={product.clientProfiles} />
        </section>

        <section
          id="fluxo"
          className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
        >
          <FadeIn className="space-y-8">
            <div>
              <p className="section-tag">Fluxo</p>
              <h2 className="section-title max-w-2xl">
                Agenda, atendimento e crescimento no mesmo gesto.
              </h2>
            </div>

            <ol className="space-y-10">
              {product.benefits.slice(0, 3).map((benefit, index) => (
                <li
                  key={benefit.title}
                  className="relative border-l border-[var(--border-soft)] pl-6"
                >
                  <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_20px_rgba(214,170,67,0.55)]" />
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-2xl leading-8 text-[var(--foreground)]">
                    {benefit.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-base leading-8 text-[var(--muted)]">
                    {benefit.description}
                  </p>
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn className="relative min-h-[620px]">
            <div className="absolute left-[6%] top-[2%] h-[86%] w-[50%] rounded-[36px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(17,17,17,0.96),rgba(8,8,8,0.94))] p-2 shadow-[0_28px_100px_rgba(0,0,0,0.34)]">
              <Image
                src={product.screenshots[2].imageSrc}
                alt={product.screenshots[2].alt}
                width={1080}
                height={1920}
                unoptimized
                className="h-full w-full rounded-[28px] object-cover"
              />
            </div>

            <div className="absolute right-[5%] top-[12%] w-[43%] rounded-[32px] border border-[var(--border-soft)] bg-[linear-gradient(180deg,rgba(255,249,238,0.98),rgba(245,235,210,0.94))] p-2 shadow-[0_24px_90px_rgba(0,0,0,0.28)]">
              <Image
                src={linkShot.imageSrc}
                alt={linkShot.alt}
                width={1080}
                height={1920}
                unoptimized
                className="h-auto w-full rounded-[24px]"
              />
            </div>

            <div className="absolute bottom-[8%] right-[10%] max-w-[290px] rounded-[28px] border border-[var(--border-soft)] bg-[rgba(11,11,11,0.88)] px-6 py-6 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                {linkShot.eyebrow}
              </p>
              <p className="mt-3 text-xl leading-8 text-[var(--foreground)]">
                {linkShot.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                {linkShot.description}
              </p>
            </div>
          </FadeIn>
        </section>

        <section className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
          <FadeIn className="space-y-6">
            <div>
              <p className="section-tag">Avaliacoes</p>
              <h2 className="section-title max-w-2xl">
                Uma pagina viva tambem precisa de voz.
              </h2>
            </div>

            <p className="max-w-xl text-base leading-8 text-[var(--muted)]">
              Em vez de inventar clientes reais, o carrossel traduz os pontos
              de valor do produto pela perspectiva de quem vive a operacao.
            </p>
          </FadeIn>

          <ReviewCarousel slides={product.reviewSlides} />
        </section>

        <section
          id="planos"
          className="relative overflow-hidden rounded-[40px] border border-[var(--border-strong)] bg-[linear-gradient(180deg,rgba(7,7,7,0.98),rgba(14,11,5,0.98))] px-8 py-10 shadow-[0_30px_120px_rgba(0,0,0,0.36)] sm:px-10 sm:py-12"
        >
          <div className="absolute inset-y-0 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-[var(--border-strong)] to-transparent lg:block" />

          <div className="grid gap-10 lg:grid-cols-2">
            <FadeIn className="space-y-8">
              <div>
                <p className="section-tag">Planos</p>
                <h2 className="section-title max-w-2xl">Quais sao os planos?</h2>
              </div>

              <p className="max-w-xl text-2xl leading-10 text-[var(--foreground)] sm:text-3xl sm:leading-[1.35]">
                Comece com{" "}
                <span className="text-[var(--accent)]">
                  {product.pricing.trialDays} dias
                </span>{" "}
                de teste sem compromisso.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <StoreDownloadBadge
                  platform="play"
                  href={product.playStoreUrl}
                  ready={playStoreReady}
                />
                <StoreDownloadBadge
                  platform="apple"
                  href={product.appStoreUrl}
                  ready={appStoreReady}
                />
              </div>
            </FadeIn>

            <FadeIn className="flex flex-col items-center justify-center text-center">
              <p className="max-w-xl text-2xl leading-10 text-[var(--foreground)] sm:text-3xl sm:leading-[1.35]">
                Se fizer sentido para a sua barbearia, continue por apenas
              </p>

              <div className="mt-8 flex items-end justify-center gap-3">
                <span className="pb-3 text-3xl font-semibold text-[var(--foreground)]">
                  R$
                </span>
                <span className="text-7xl font-semibold tracking-tight text-[var(--foreground)] sm:text-8xl">
                  {product.pricing.amount}
                </span>
                <span className="pb-3 text-3xl font-semibold text-[var(--foreground)]">
                  {product.pricing.cadence}
                </span>
              </div>

              <p className="mt-6 text-lg text-[var(--muted)]">
                {product.pricing.note}
              </p>

              <p className="mt-3 max-w-md text-sm leading-7 text-[var(--muted)]">
                Entrada simples, sem mudar a estrutura da sua operacao de uma vez.
              </p>

              <div
                id="mercado-pago"
                className="mt-8 w-full max-w-xl rounded-[30px] border border-[var(--border-strong)] bg-[rgba(255,255,255,0.03)] p-6 text-left shadow-[0_18px_60px_rgba(0,0,0,0.22)]"
              >
                <p className="text-xs uppercase tracking-[0.24em] text-[var(--accent)]">
                  Mercado Pago
                </p>
                <p className="mt-3 text-2xl leading-9 text-[var(--foreground)]">
                  Use este ponto unico para a assinatura web e desktop.
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
                  URL da loja para configurar no Mercado Pago:
                </p>
                <a
                  href={product.storefrontUrl}
                  className="mt-4 block break-all rounded-[22px] border border-[var(--border-soft)] bg-[rgba(10,10,10,0.66)] px-4 py-4 text-sm leading-7 text-[var(--foreground)] transition-colors duration-200 hover:border-[var(--border-strong)]"
                >
                  {product.storefrontUrl}
                </a>
                <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={product.storefrontUrl}
                    className="btn-mercado"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir pagina da loja
                  </a>
                  <a
                    href={product.webAppAuthUrl}
                    className="btn-secondary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Abrir login do web app
                  </a>
                  <a href="#topo" className="btn-secondary">
                    Voltar ao topo
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
