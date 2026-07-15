"use client";

import { motion } from "framer-motion";

import Container from "@/components/primitives/container";

import about from "@/data/about";

export default function Stats() {
  return (
    <section className="bg-primary py-24 text-white">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-4">
          {about.stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
              }}
              className="text-center"
            >
              <h3 className="font-serif text-6xl font-semibold">
                {item.value}
              </h3>

              <p className="mt-4 text-sm uppercase tracking-[0.3em] text-white/70">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
