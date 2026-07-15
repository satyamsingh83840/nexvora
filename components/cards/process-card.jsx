"use client";

import { motion } from "framer-motion";

export default function ProcessCard({ step, last }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-20"
    >
      {!last && (
        <div className="absolute left-[23px] top-12 h-full w-px bg-border" />
      )}

      <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border border-accent bg-background font-semibold text-accent">
        {step.id}
      </div>

      <div className="rounded-3xl border border-border bg-card p-8 transition duration-300 hover:border-accent/40 hover:-translate-y-1">
        <h3 className="font-serif text-2xl font-semibold">{step.title}</h3>

        <p className="mt-4 leading-8 text-muted-foreground">
          {step.description}
        </p>
      </div>
    </motion.div>
  );
}
