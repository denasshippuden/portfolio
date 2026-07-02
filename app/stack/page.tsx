import type { Metadata } from "next";

import { Container } from "@/components/container";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { SectionHeading } from "@/components/section-heading";
import { TechGrid } from "@/components/tech-grid";

export const metadata: Metadata = {
  title: "Stack e Tecnologias",
  description: "Stack de tecnologias usada por Andre Galante em desenvolvimento web, automações, sistemas internos e deploy."
};

export default function StackPage() {
  return (
    <>
      <PageHero
        eyebrow="Stack"
        title="Tecnologias modernas para produtos digitais rápidos, integrados e escaláveis."
        description="A stack prioriza produtividade, manutenção simples, bom desempenho e facilidade de publicação em ambientes como a Vercel."
      />
      <MotionSection className="bg-ink py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionHeading
              eyebrow="Tecnologias"
              title="Uma base técnica preparada para interfaces, dados, APIs e automação."
              description="O projeto também está organizado para integrar futuramente com a API do GitHub e alimentar projetos reais de forma dinâmica."
            />
            <TechGrid />
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
