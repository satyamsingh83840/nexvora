import careers from "@/data/careers";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

export default function HiringProcess() {
  if (!careers.hiringProcess?.length) return null;

  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Hiring Process"
          title="Our Recruitment Journey"
        />

        <div className="mt-16 grid gap-8 md:grid-cols-5">
          {careers.hiringProcess.map((step) => (
            <div key={step.step} className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                {step.step}
              </div>

              <h3 className="mt-6 text-xl font-semibold">{step.title}</h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
