import Link from "next/link";

import { profile } from "@/data/profile";
import { navItems } from "@/lib/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-white">{profile.name}</p>
          <p className="mt-2 max-w-md text-sm leading-6 text-zinc-400">
            Desenvolvimento web, automações, integrações e sistemas internos para negócios digitais.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-zinc-400">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
