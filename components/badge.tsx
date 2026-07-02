import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "blue" | "green" | "neutral";
  className?: string;
};

export function Badge({ children, tone = "neutral", className = "" }: BadgeProps) {
  const tones = {
    blue: "border-accent/30 bg-accent/10 text-accent",
    green: "border-success/30 bg-success/10 text-success",
    neutral: "border-white/10 bg-white/5 text-zinc-300"
  };

  return (
    <span className={`inline-flex items-center rounded-md border px-2.5 py-1 text-xs font-medium ${tones[tone]} ${className}`}>
      {children}
    </span>
  );
}
