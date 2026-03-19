import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

type LegalSection = {
  heading: string;
  paragraphs: string[];
};

type LegalDocumentPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  effectiveDate: string;
  backHref: string;
  backLabel: string;
  sections: LegalSection[];
};

export function LegalDocumentPage({
  eyebrow,
  title,
  summary,
  effectiveDate,
  backHref,
  backLabel,
  sections,
}: LegalDocumentPageProps) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(214,170,67,0.11),_transparent_24%),linear-gradient(180deg,_rgba(5,5,5,0.98),_rgba(7,7,7,1))]" />

      <SiteHeader />

      <main className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 pb-24 pt-8 sm:px-10 sm:pt-10 lg:px-12">
        <FadeIn className="panel-gold overflow-hidden px-6 py-8 sm:px-8 sm:py-10">
          <p className="section-tag">{eyebrow}</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl leading-none text-[var(--foreground)] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
            {summary}
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
            <span>Vigencia: {effectiveDate}</span>
            <span className="hidden h-1 w-1 rounded-full bg-[var(--border-strong)] sm:block" />
            <Link
              href={backHref}
              className="text-[var(--accent)] transition hover:text-[var(--foreground)]"
            >
              Voltar para {backLabel}
            </Link>
          </div>
        </FadeIn>

        <div className="space-y-6">
          {sections.map((section) => (
            <FadeIn
              key={section.heading}
              className="panel px-6 py-7 sm:px-8 sm:py-8"
            >
              <h2 className="text-2xl text-[var(--foreground)] sm:text-3xl">
                {section.heading}
              </h2>
              <div className="mt-5 space-y-4 text-sm leading-8 text-[var(--muted)] sm:text-[0.98rem]">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
