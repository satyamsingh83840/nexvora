"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "12+",
    label: "Practice Areas",
  },
  {
    value: "13+",
    label: "Industries Served",
  },
  {
    value: "Client",
    label: "Focused Approach",
  },
];

export default function HeroStats() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        delay: 0.7,
        duration: 0.7,
      }}
      className="mt-16"
    >
      <div className="grid grid-cols-3 gap-8 border-t border-border pt-8">
        {stats.map((item, index) => (
          <div key={item.label}>
            <h3 className="font-serif text-3xl font-semibold lg:text-4xl">
              {item.value}
            </h3>

            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">
              {item.label}
            </p>

            {index !== stats.length - 1 && (
              <div className="mt-6 h-px w-16 bg-accent/40" />
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
