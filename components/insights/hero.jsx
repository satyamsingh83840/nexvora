import Container from "@/components/primitives/container";
import SectionBadge from "@/components/primitives/section-badge";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-32 lg:py-40">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <SectionBadge>Legal Insights</SectionBadge>

          <h1 className="mt-8 font-serif text-5xl font-semibold leading-tight lg:text-7xl">
            Insights &
            <br />
            Thought Leadership
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
            Explore articles, legal updates, practical guides and expert
            commentary designed to help businesses and individuals make informed
            legal decisions.
          </p>
        </div>
      </Container>
    </section>
  );
}
