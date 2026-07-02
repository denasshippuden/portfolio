"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import { ProjectCard } from "@/components/project-card";
import { projectCategories, projects } from "@/data/projects";

export function ProjectsGrid() {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const visibleProjects = useMemo(() => {
    if (activeCategory === "Todos") {
      return projects;
    }

    return projects.filter((project) => project.category === activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {["Todos", ...projectCategories].map((category) => {
          const active = activeCategory === category;

          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`min-h-10 rounded-lg border px-4 text-sm font-medium transition ${
                active
                  ? "border-white bg-white text-ink"
                  : "border-white/10 bg-white/[0.035] text-zinc-300 hover:border-accent/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      <motion.div layout className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project) => (
          <motion.div
            key={project.slug}
            layout
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <ProjectCard project={project} featured={project.featured} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
