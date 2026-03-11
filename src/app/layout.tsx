import type { Metadata } from "next";
import { Cinzel, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sphynix Platform",
  description:
    "Marketplace e plataforma de distribuicao para software, SaaS, aplicativos e o Sphynix Launcher.",
  icons: {
    icon: "/brand/sphynix-mark.svg",
    shortcut: "/brand/sphynix-mark.svg",
    apple: "/brand/sphynix-mark.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${manrope.variable} ${cinzel.variable} antialiased`}>
        <div className="app-shell">{children}</div>
      </body>
    </html>
  );
}
