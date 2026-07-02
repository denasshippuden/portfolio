import { Container } from "@/components/container";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="border-b border-white/10 bg-graphite pt-32">
      <Container className="pb-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-success">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-normal text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-300">{description}</p>
      </Container>
    </section>
  );
}
