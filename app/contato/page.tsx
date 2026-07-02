import { Github, MessageCircle } from "lucide-react";
import type { Metadata } from "next";

import { ButtonLink } from "@/components/button-link";
import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contato",
  description: "Entre em contato com Andre Galante para sites, sistemas internos, APIs, automações e dashboards."
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar sobre o projeto que sua empresa precisa construir."
        description="Envie uma mensagem com o contexto do projeto, objetivo principal e tipo de solução desejada."
      />
      <MotionSection className="bg-ink py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <ContactForm />
            <aside className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
              <h2 className="text-2xl font-semibold text-white">Canais diretos</h2>
              <p className="mt-3 text-sm leading-6 text-zinc-300">
                Use o WhatsApp para conversas rápidas ou acesse o GitHub para acompanhar projetos e atualizações.
              </p>
              <div className="mt-6 grid gap-3">
                <ButtonLink href={profile.whatsappUrl} icon={MessageCircle} external>
                  WhatsApp
                </ButtonLink>
                <p className="-mt-1 text-center text-sm font-medium text-zinc-300">{profile.whatsapp}</p>
                <ButtonLink href={profile.githubUrl} icon={Github} variant="secondary" external>
                  GitHub
                </ButtonLink>
              </div>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm font-medium text-white">Email</p>
                <p className="mt-2 text-sm text-zinc-300">{profile.email}</p>
              </div>
            </aside>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
