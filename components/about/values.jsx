"use client";

import { motion } from "framer-motion";

import Container from "@/components/primitives/container";
import SectionHeading from "@/components/primitives/section-heading";

import values from "@/data/values";

export default function Values() {
  return (
    <section className="bg-muted/30 py-28">
      <Container>
        <SectionHeading
          badge="Core Values"
          title="The Principles That Define Our Practice"
          description="Our commitment to excellence is guided by a strong foundation of ethics, professionalism and client-focused service."
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.5,
                }}
                className="group rounded-[32px] border border-border bg-card p-8 transition-all duration-500 hover:-translate-y-2 hover:border-primary/40"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-8 font-serif text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-muted-foreground">
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
