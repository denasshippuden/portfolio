export type TechnologyGroup = {
  title: string;
  items: string[];
};

export const technologyGroups: TechnologyGroup[] = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend e dados",
    items: ["Node.js", "APIs REST", "PostgreSQL", "Prisma", "Docker"]
  },
  {
    title: "Automação",
    items: ["n8n", "Webhooks", "Integrações", "CRMs", "Planilhas"]
  },
  {
    title: "Deploy e operação",
    items: ["Vercel", "GitHub", "Ambientes privados", "SEO técnico", "Performance"]
  }
];
