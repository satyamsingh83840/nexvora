"use client";

import { motion } from "framer-motion";
import { ShieldCheck, BriefcaseBusiness, Scale, Landmark } from "lucide-react";

import Container from "@/components/primitives/container";

const items = [
  {
    icon: BriefcaseBusiness,
    title: "Business Focused",
    description:
      "Strategic legal counsel designed for businesses, startups, and institutions.",
  },
  {
    icon: Scale,
    title: "Comprehensive Expertise",
    description:
      "Corporate, litigation, arbitration, employment, intellectual property and more.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Advisory",
    description:
      "Transparent, ethical and client-focused representation for every matter.",
  },
  {
    icon: Landmark,
    title: "Pan-India Support",
    description:
      "Legal services for organizations and individuals across multiple jurisdictions.",
  },
];

export default function TrustSection() {
  return (
    <section className="border-y border-border bg-muted/20 py-16">
      <Container>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                }}
                className="group rounded-3xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-accent/40"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-semibold">{item.title}</h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
