import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";

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
      <Link href="/" className="group flex items-start gap-3 sm:items-center">
        <div className="brand-lockup">
          <BrandLogo
            variant="wordmark"
            priority
            className="h-10 w-auto sm:h-11"
          />
          <p className="brand-platform-label transition group-hover:text-[var(--accent)]">
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
