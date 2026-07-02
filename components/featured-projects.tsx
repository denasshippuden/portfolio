import { ArrowRight } from "lucide-react";

import { ButtonLink } from "@/components/button-link";
import { Container } from "@/components/container";
import { MotionSection } from "@/components/motion-section";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

const featuredProjects = projects.filter((project) => project.featured);

export function FeaturedProjects() {
  return (
    <MotionSection className="bg-graphite py-20">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Projetos em destaque"
            title="Cases reais com aplicação comercial, técnica e operacional."
            description="Plataformas, sistemas privados e APIs criados para captar leads, organizar dados, automatizar rotinas e apoiar operações reais."
          />
          <ButtonLink href="/projetos" icon={ArrowRight} variant="secondary">
            Ver todos os projetos
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
      </Container>
    </MotionSection>
  );
}
