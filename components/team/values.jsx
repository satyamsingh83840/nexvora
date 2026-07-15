import { ShieldCheck, Scale, Users, Lightbulb } from "lucide-react";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We uphold the highest ethical standards in every matter we handle.",
  },
  {
    icon: Scale,
    title: "Excellence",
    description:
      "Committed to delivering exceptional legal services with precision.",
  },
  {
    icon: Users,
    title: "Client First",
    description: "Every strategy is designed around our clients' objectives.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Modern legal thinking for evolving business challenges.",
  },
];

export default function Values() {
  return (
    <section className="bg-muted/30 py-24">
      <Container>
        <SectionHeading badge="Our Values" title="What Drives Our Team" />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.title}
                className="rounded-3xl border border-border bg-card p-8"
              >
                <Icon className="h-10 w-10 text-primary" />

                <h3 className="mt-6 text-xl font-semibold">{value.title}</h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
