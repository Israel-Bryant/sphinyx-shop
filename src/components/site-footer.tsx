import Link from "next/link";

const footerLinks = [
  { href: "/marketplace", label: "Marketplace" },
  { href: "/launcher", label: "Launcher" },
  { href: "#", label: "Conta" },
  { href: "#", label: "Contato" },
];

export function SiteFooter() {
  return (
    <footer className="relative z-10 border-t border-[var(--border-soft)]">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-[var(--muted)] sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
        <div>
          <p className="font-display text-xl text-[var(--foreground)]">
            Sphynix
          </p>
          <p className="mt-2">
            Plataforma de distribuicao de software com foco premium e estrutura
            escalavel.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition hover:text-[var(--accent)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
