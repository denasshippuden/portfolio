import type { Metadata } from "next";

import { Container } from "@/components/container";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça o perfil profissional de Andre Galante em desenvolvimento web, automações e sistemas privados."
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="Desenvolvimento com visão de produto, operação e resultado."
        description="Andre Galante atua na criação de experiências web, sistemas internos e automações para negócios que precisam transformar processos em software."
      />
      <MotionSection className="bg-ink py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <SectionHeading
              eyebrow={profile.name}
              title="Construo soluções digitais para clientes que precisam de clareza técnica e execução."
              description="O foco é entender o problema, propor uma arquitetura simples de manter e entregar interfaces e fluxos que funcionam bem no dia a dia."
            />
            <div className="grid gap-5 text-base leading-8 text-zinc-300">
              <p>
                Minha atuação combina frontend moderno, integração com APIs, automações com n8n, organização de dados e
                deploy de aplicações. O objetivo é criar projetos com boa apresentação, boa performance e estrutura preparada
                para novas etapas.
              </p>
              <p>
                Trabalho especialmente com sites institucionais, landing pages, sistemas internos, aplicações privadas,
                dashboards administrativos e fluxos automatizados para captação, qualificação e atendimento.
              </p>
            </div>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              ["Estratégia", "Escopo claro, prioridades bem definidas e decisões técnicas alinhadas ao negócio."],
              ["Execução", "Componentes reutilizáveis, layout responsivo, SEO básico e base preparada para Vercel."],
              ["Evolução", "Estrutura pensada para novas integrações, dados reais e futuras APIs."]
            ].map(([title, description]) => (
              <article key={title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <h2 className="text-lg font-semibold text-white">{title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{description}</p>
              </article>
            ))}
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
