import {
  ShieldCheck,
  Scale,
  Users,
  FileText,
  PenTool,
  Search,
} from "lucide-react";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

import careers from "@/data/careers";

const icons = [ShieldCheck, Search, Users, PenTool, Scale, FileText];

export default function WhyJoin() {
  return (
    <section className="py-24">
      <Container>
        <SectionHeading
          badge="Why Join Us"
          title="Build a Meaningful Legal Career"
          description={
            careers.description ||
            "Join a collaborative team where integrity, innovation and excellence define every client engagement."
          }
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {careers.qualities.map((quality, index) => {
            const Icon = icons[index % icons.length];

            return (
              <div
                key={quality}
                className="rounded-[28px] border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40"
              >
                <Icon className="h-10 w-10 text-primary" />

                <h3 className="mt-6 text-xl font-semibold">{quality}</h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  We value professionals who demonstrate {quality.toLowerCase()}{" "}
                  in every aspect of their work.
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
