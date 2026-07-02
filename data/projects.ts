export type Project = {
  title: string;
  slug: string;
  category: string;
  shortDescription: string;
  description: string;
  stack: string[];
  status: string;
  githubUrl: string;
  liveUrl?: string;
  highlights: string[];
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "EuroDev - Devis Travaux Belgique",
    slug: "eurodev-devis-travaux-belgique",
    category: "Lead Generation / Serviços na Bélgica",
    shortDescription:
      "Plataforma web para conectar clientes que precisam de serviços de reforma na Bélgica com profissionais parceiros disponíveis por região e especialidade.",
    description:
      "O EuroDev é uma plataforma de captação de leads para serviços de reforma na Bélgica. O projeto possui páginas em francês, fluxo de solicitação de orçamento, chamada para profissionais parceiros e estrutura voltada para intermediação entre clientes e prestadores de serviço.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Vercel", "Google Forms"],
    status: "Publicado / MVP funcional",
    githubUrl: "https://github.com/denasshippuden/eurodev",
    liveUrl: "https://eurodev-5x46.vercel.app/",
    highlights: [
      "Site em francês",
      "Captação de leads",
      "Página para clientes",
      "Página para prestadores/parceiros",
      "Deploy na Vercel",
      "Projeto com aplicação real na Bélgica"
    ],
    featured: true
  },
  {
    title: "EuroFinance - FinanceOS Private",
    slug: "eurofinance-financeos-private",
    category: "SaaS Financeiro / Sistema Privado",
    shortDescription:
      "Aplicação financeira privada para controle de entradas, gastos, saldo mensal, transações e cálculo de valor por hora.",
    description:
      "O EuroFinance é um sistema privado de organização financeira pessoal e profissional. A aplicação possui dashboard, controle de receitas e despesas, listagem de transações, cálculo por hora, suporte a múltiplas moedas e estrutura preparada para integração com Supabase.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Supabase-ready", "Lucide Icons"],
    status: "MVP funcional",
    githubUrl: "https://github.com/denasshippuden/eurofinance",
    highlights: [
      "Dashboard financeiro",
      "Controle de entradas e saídas",
      "Cálculo de valor por hora",
      "Suporte a EUR, BRL e USD",
      "Interface privada estilo SaaS",
      "Estrutura preparada para banco de dados"
    ],
    featured: true
  },
  {
    title: "AVB Movimenta-o",
    slug: "avb-movimenta-o",
    category: "Sistema Interno / Almoxarifado",
    shortDescription:
      "Sistema de almoxarifado para controle de entrada, saída, devolução e rastreamento de itens com perfis de acesso.",
    description:
      "O AVB Movimenta-o é um MVP de sistema interno para gestão de almoxarifado. O projeto possui autenticação, controle de usuários, permissões ADMIN/USER, cadastro de itens, movimentações, baixa, devolução e histórico operacional.",
    stack: ["FastAPI", "Python", "PostgreSQL", "SQLAlchemy", "Alembic", "JWT", "Docker"],
    status: "MVP técnico",
    githubUrl: "https://github.com/denasshippuden/avb_movimenta-o",
    highlights: [
      "Backend com FastAPI",
      "Controle de permissões",
      "Banco PostgreSQL",
      "Registro de movimentações",
      "Arquitetura de API REST",
      "Sistema voltado para operação interna"
    ],
    featured: true
  },
  {
    title: "Suporte Abyssal",
    slug: "suporte-abyssal",
    category: "Sistema Interno / Helpdesk",
    shortDescription:
      "MVP de sistema interno para cadastro de usuários, autenticação local, notificações e base para gestão de demandas técnicas.",
    description:
      "O Suporte Abyssal é um sistema interno com autenticação, cadastro de pessoa física, login com e-mail ou CPF, dashboard privado, notificações e base para gestão de demandas. O projeto utiliza Prisma e SQLite para persistência local.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "SQLite", "Zod", "Auth Local"],
    status: "MVP funcional",
    githubUrl: "https://github.com/denasshippuden/suporteabyssal",
    highlights: [
      "Autenticação local",
      "Cadastro de usuários",
      "Dashboard privado",
      "Notificações por usuário",
      "Prisma ORM",
      "Cookies httpOnly e hash de senha"
    ],
    featured: false
  },
  {
    title: "Franch Abyssal",
    slug: "franch-abyssal",
    category: "Site Institucional / Agência Digital",
    shortDescription:
      "Site institucional multilíngue para apresentação de serviços digitais, projetos, automações, integrações API e soluções sob medida.",
    description:
      "O Franch Abyssal é um site institucional para posicionamento comercial da AbyssalTech. O projeto possui conteúdo em francês, português e inglês, apresentando serviços como desenvolvimento sob medida, automações, integrações API, inteligência artificial, cloud, banco de dados e suporte contínuo.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "React", "Framer Motion"],
    status: "Em desenvolvimento / Institucional",
    githubUrl: "https://github.com/denasshippuden/franchabyssal",
    highlights: [
      "Site multilíngue",
      "Conteúdo em francês, português e inglês",
      "Animações com Framer Motion",
      "Posicionamento comercial de agência",
      "Apresentação de serviços digitais",
      "Design institucional moderno"
    ],
    featured: false
  }
];

export const projectCategories = Array.from(new Set(projects.map((project) => project.category)));
