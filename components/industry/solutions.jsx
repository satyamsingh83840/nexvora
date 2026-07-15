import { CheckCircle2 } from "lucide-react";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

export default function Solutions({ industry }) {
  if (!industry.solutions?.length) return null;

  return (
    <section className="py-24">
      <Container>
        <SectionHeading badge="Our Solutions" title="How We Help" />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {industry.solutions.map((solution) => (
            <div
              key={solution}
              className="flex gap-4 rounded-3xl border border-border bg-card p-6"
            >
              <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />

              <span>{solution}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
