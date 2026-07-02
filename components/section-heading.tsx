type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-normal text-white sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-7 text-zinc-300">{description}</p> : null}
    </div>
  );
}
