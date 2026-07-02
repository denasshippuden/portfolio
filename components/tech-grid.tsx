import { technologyGroups } from "@/data/technologies";

export function TechGrid() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      {technologyGroups.map((group) => (
        <article key={group.title} className="rounded-lg border border-white/10 bg-white/[0.035] p-5">
          <h3 className="text-lg font-semibold text-white">{group.title}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {group.items.map((item) => (
              <span key={item} className="rounded-md border border-white/10 bg-ink px-3 py-1.5 text-sm text-zinc-300">
                {item}
              </span>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
