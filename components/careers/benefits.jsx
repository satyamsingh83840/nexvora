import careers from "@/data/careers";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

import { TrendingUp, Users, HeartHandshake, GraduationCap } from "lucide-react";

const icons = [TrendingUp, Users, HeartHandshake, GraduationCap];

export default function Benefits() {
  if (!careers.benefits?.length) return null;

  return (
    <section className="bg-muted/30 py-24">
      <Container>
        <SectionHeading badge="Benefits" title="Why You'll Love Working Here" />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {careers.benefits.map((benefit, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={benefit.title}
                className="rounded-[28px] border border-border bg-card p-8"
              >
                <Icon className="h-10 w-10 text-primary" />

                <h3 className="mt-6 text-xl font-semibold">{benefit.title}</h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
