import { ArrowUpRight, CheckCircle2, Github } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/badge";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-lg border p-5 transition duration-300 hover:-translate-y-1 ${
        featured
          ? "border-accent/35 bg-[linear-gradient(135deg,rgba(56,189,248,0.12),rgba(255,255,255,0.035)_38%,rgba(52,211,153,0.08))] shadow-glow"
          : "border-white/10 bg-white/[0.035] hover:border-accent/40 hover:bg-white/[0.055]"
      }`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/60 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex flex-wrap items-center gap-2">
        <Badge tone="blue">{project.category}</Badge>
        <Badge tone="green">{project.status}</Badge>
        {project.featured ? <Badge>Destaque</Badge> : null}
      </div>
      <h3 className="mt-5 text-xl font-semibold text-white">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-zinc-300">{project.shortDescription}</p>
      <p className="mt-4 flex-1 text-sm leading-6 text-zinc-400">{project.description}</p>
      <div className="mt-5 grid gap-2">
        {project.highlights.slice(0, featured ? 4 : 3).map((highlight) => (
          <div key={highlight} className="flex gap-2 text-sm leading-5 text-zinc-300">
            <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-success" aria-hidden="true" />
            <span>{highlight}</span>
          </div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((technology) => (
          <span key={technology} className="rounded-md bg-white/10 px-2.5 py-1 text-xs text-zinc-300">
            {technology}
          </span>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-200 hover:text-white"
        >
          <Github className="h-4 w-4" aria-hidden="true" />
          GitHub
        </Link>
        {project.liveUrl ? (
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-white"
          >
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            Produção
          </Link>
        ) : null}
      </div>
    </article>
  );
}
