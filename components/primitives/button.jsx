"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export default function PrimaryButton({ href, children, className }) {
  const Comp = href ? Link : motion.button;

  return (
    <Comp
      href={href}
      whilehover={!href ? { y: -2 } : undefined}
      whiletap={!href ? { scale: 0.98 } : undefined}
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:bg-accent hover:text-black",
        className,
      )}
    >
      {children}

      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Comp>
  );
}
