import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { profile } from "@/data/profile";

import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: `${profile.name} | Desenvolvedor Web e Automações`,
    template: `%s | ${profile.name}`
  },
  description:
    "Portfolio profissional de Andre Galante: desenvolvimento web, automações, integrações com APIs, sistemas internos e aplicações privadas.",
  keywords: [
    "Andre Galante",
    "desenvolvedor web",
    "Next.js",
    "automacoes n8n",
    "integracoes com APIs",
    "sistemas internos",
    "portfolio"
  ],
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} | Desenvolvedor Web e Automações`,
    description:
      "Projetos, serviços e experiências com desenvolvimento web, automações, APIs e sistemas privados.",
    type: "website",
    locale: "pt_BR"
  }
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
