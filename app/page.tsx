import { ArrowRight, Code2, Database, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";

import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { FeaturedProjects } from "@/components/featured-projects";
import { MotionSection } from "@/components/motion-section";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { TechGrid } from "@/components/tech-grid";
import { profile } from "@/data/profile";
import { services } from "@/data/services";

const featuredServices = services.slice(0, 4);

const homeHighlights: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Web moderno",
    description: "Interfaces rápidas, responsivas e preparadas para SEO.",
    icon: Code2
  },
  {
    title: "Automações",
    description: "Fluxos que reduzem tarefas manuais e conectam ferramentas.",
    icon: Workflow
  },
  {
    title: "Sistemas privados",
    description: "Aplicações internas com dados organizados e operação clara.",
    icon: Database
  }
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[86vh] overflow-hidden border-b border-white/10 bg-ink pt-16">
        <Image
          src="/images/hero-workspace.png"
          alt="Ambiente tecnológico com dashboards e integrações digitais"
          fill
          priority
          className="object-cover object-center opacity-[0.42]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#050609_0%,rgba(5,6,9,0.84)_38%,rgba(5,6,9,0.42)_100%)]" />
        <div className="absolute inset-0 bg-tech-lines surface-grid opacity-20" />
        <Container className="relative flex min-h-[calc(86vh-4rem)] items-center pb-10 pt-14">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-success">{profile.role}</p>
            <h1 className="mt-5 text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
              {profile.headline}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-200 sm:text-lg sm:leading-8">{profile.summary}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/contato" icon={ArrowRight}>
                Iniciar projeto
              </ButtonLink>
              <ButtonLink href="/projetos" icon={Code2} variant="secondary">
                Ver projetos
              </ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      <MotionSection className="bg-ink py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {homeHighlights.map((item) => (
              <article key={item.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
                <item.icon className="h-5 w-5 text-accent" aria-hidden="true" />
                <h2 className="mt-4 text-lg font-semibold text-white">{item.title}</h2>
                <p className="mt-3 text-sm leading-6 text-zinc-300">{item.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </MotionSection>

      <FeaturedProjects />

      <MotionSection className="bg-ink py-20">
        <Container>
          <SectionHeading
            eyebrow="Serviços principais"
            title="Da página pública ao sistema interno."
            description="Atuação focada em entregar produtos digitais úteis, bem estruturados e fáceis de evoluir."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-graphite py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <SectionHeading
              eyebrow="Tecnologias utilizadas"
              title="Stack enxuta para construir, integrar e publicar."
              description="Ferramentas modernas para frontend, automação, dados, deploy e manutenção de aplicações privadas."
            />
            <TechGrid />
          </div>
        </Container>
      </MotionSection>

      <MotionSection className="bg-ink py-20">
        <Container>
          <div className="rounded-lg border border-white/10 bg-white/[0.035] p-8 md:p-10">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">Contato</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                  Precisa tirar uma ideia do papel ou melhorar um processo interno?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-300">
                  Envie uma mensagem com o tipo de projeto, objetivo e contexto. A primeira resposta pode organizar escopo,
                  stack e próximos passos.
                </p>
              </div>
              <ButtonLink href="/contato" icon={ArrowRight}>
                Falar sobre projeto
              </ButtonLink>
            </div>
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
