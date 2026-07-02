import type { LucideIcon } from "lucide-react";
import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: string;
  icon?: LucideIcon;
  variant?: "primary" | "secondary";
  external?: boolean;
};

export function ButtonLink({ href, children, icon: Icon, variant = "primary", external = false }: ButtonLinkProps) {
  const classes =
    variant === "primary"
      ? "border-white bg-white text-ink hover:bg-mist"
      : "border-white/20 bg-white/5 text-white hover:border-accent/60 hover:bg-white/10";

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border px-5 text-sm font-semibold transition ${classes}`}
    >
      {Icon ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
      {children}
    </Link>
  );
}
