import { AlertTriangle } from "lucide-react";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

export default function Challenges({ industry }) {
  if (!industry.challenges?.length) return null;

  return (
    <section className="bg-muted/30 py-24">
      <Container>
        <SectionHeading badge="Challenges" title="Industry Challenges" />

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {industry.challenges.map((challenge) => (
            <div
              key={challenge}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <AlertTriangle className="mb-4 h-8 w-8 text-primary" />

              <p>{challenge}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
