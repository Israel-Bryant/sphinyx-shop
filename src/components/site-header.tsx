import Link from "next/link";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/flow", label: "Flow" },
  { href: "/marketplace", label: "Marketplace" },
  { href: "/launcher", label: "Launcher" },
  { href: "#", label: "Conta" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 sm:px-10 lg:px-12">
      <Link href="/" className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[var(--border-strong)] bg-[radial-gradient(circle_at_30%_30%,_rgba(255,220,140,0.2),_rgba(18,18,18,0.92))]">
          <span className="font-display text-lg text-[var(--accent)]">S</span>
        </div>
        <div>
          <p className="font-display text-2xl text-[var(--foreground)]">
            Sphynix
          </p>
          <p className="text-xs uppercase tracking-[0.28em] text-[var(--muted)]">
            Platform
          </p>
        </div>
      </Link>

      <nav className="hidden items-center gap-7 text-sm text-[var(--muted)] md:flex">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="transition hover:text-[var(--accent)]"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <Link href="/launcher" className="btn-secondary hidden md:inline-flex">
        Download
      </Link>
    </header>
  );
}
