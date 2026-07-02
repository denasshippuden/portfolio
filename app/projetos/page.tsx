import type { Metadata } from "next";

import { Container } from "@/components/container";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { ProjectsGrid } from "@/components/projects-grid";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Cases e projetos reais de Andre Galante com desenvolvimento web, automações, APIs, sistemas internos e aplicações privadas."
};

export default function ProjetosPage() {
  return (
    <>
      <PageHero
        eyebrow="Projetos"
        title="Cases e projetos reais"
        description="Uma seleção de sistemas, plataformas e automações desenvolvidas para resolver problemas reais de negócio."
      />
      <MotionSection className="bg-ink py-20">
        <Container>
          <ProjectsGrid />
        </Container>
      </MotionSection>
    </>
  );
}
