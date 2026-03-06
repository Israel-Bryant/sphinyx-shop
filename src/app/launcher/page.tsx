import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const features = [
  "Biblioteca central para softwares e linhas de produto da holding.",
  "Instalacao guiada com experiencia unificada entre web, conta e desktop.",
  "Base para distribuir a vertical de automacao de servicos com identidade propria.",
  "Camada futura para conta, licencas, acessos e atualizacoes persistentes.",
];

export default function LauncherPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6 pb-20 pt-10 sm:px-10 lg:px-12">
        <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <FadeIn className="panel-gold p-8 sm:p-10">
            <p className="section-tag">Launcher</p>
            <h1 className="section-title max-w-3xl">
              O Sphynix Launcher sera o cliente oficial da holding para entrega
              de software.
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]">
              Ele conecta a Sphynix Platform com as iniciativas da empresa. Na
              primeira fase, sustenta distribuicao e identidade. Depois, evolui
              para biblioteca, updates e acesso centralizado aos produtos.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#" className="btn-primary">
                Download em breve
              </a>
              <Link href="/marketplace" className="btn-secondary">
                Voltar ao marketplace
              </Link>
            </div>
          </FadeIn>

          <FadeIn delay={0.12} className="panel p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
              Disponibilidade planejada
            </p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-5 py-4">
                <span>Windows</span>
                <span className="text-[var(--muted)]">fase inicial</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-5 py-4">
                <span>macOS</span>
                <span className="text-[var(--muted)]">fase inicial</span>
              </div>
              <div className="flex items-center justify-between rounded-2xl border border-[var(--border-soft)] bg-[var(--surface-soft)] px-5 py-4">
                <span>Linux</span>
                <span className="text-[var(--muted)]">avaliacao futura</span>
              </div>
            </div>
          </FadeIn>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          {features.map((feature, index) => (
            <FadeIn
              key={feature}
              delay={index * 0.08}
              className="panel p-6"
            >
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--accent)]">
                Modulo 0{index + 1}
              </p>
              <p className="mt-4 text-xl leading-8 text-[var(--foreground)]">
                {feature}
              </p>
            </FadeIn>
          ))}
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
