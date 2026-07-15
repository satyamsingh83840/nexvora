"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroScroll() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 1.2,
      }}
      className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 lg:flex flex-col items-center"
    >
      <span className="mb-2 text-xs uppercase tracking-[0.35em] text-muted-foreground">
        Scroll
      </span>

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.8,
        }}
      >
        <ChevronDown className="h-5 w-5 text-accent" />
      </motion.div>
    </motion.div>
  );
}
