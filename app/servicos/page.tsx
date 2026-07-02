import type { Metadata } from "next";

import { Container } from "@/components/container";
import { MotionSection } from "@/components/motion-section";
import { PageHero } from "@/components/page-hero";
import { ServiceCard } from "@/components/service-card";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Serviços",
  description: "Serviços de desenvolvimento de sites, landing pages, sistemas internos, APIs, automações e dashboards."
};

export default function ServicosPage() {
  return (
    <>
      <PageHero
        eyebrow="Serviços"
        title="Soluções digitais para empresas que precisam vender, operar e automatizar melhor."
        description="Serviços organizados para cobrir desde a presença digital inicial até ferramentas privadas conectadas ao fluxo real da operação."
      />
      <MotionSection className="bg-ink py-20">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} service={service} />
            ))}
          </div>
        </Container>
      </MotionSection>
    </>
  );
}
