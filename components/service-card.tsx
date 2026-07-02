import { CheckCircle2 } from "lucide-react";

import type { Service } from "@/data/services";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="rounded-lg border border-white/10 bg-white/[0.035] p-5 transition hover:border-success/40 hover:bg-white/[0.055]">
      <CheckCircle2 className="h-5 w-5 text-success" aria-hidden="true" />
      <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-300">{service.description}</p>
    </article>
  );
}
