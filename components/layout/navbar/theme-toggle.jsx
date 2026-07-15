"use client";

import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10 rounded-full border border-border" />;
  }

  const dark = resolvedTheme === "dark";

  return (
    <button
      aria-label="Toggle Theme"
      onClick={() => setTheme(dark ? "light" : "dark")}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition hover:border-accent hover:bg-accent/10"
    >
      <AnimatePresence mode="wait">
        {dark ? (
          <motion.div
            key="moon"
            initial={{
              rotate: -90,
              scale: 0,
            }}
            animate={{
              rotate: 0,
              scale: 1,
            }}
            exit={{
              rotate: 90,
              scale: 0,
            }}
          >
            <Moon className="h-5 w-5" />
          </motion.div>
        ) : (
          <motion.div
            key="sun"
            initial={{
              rotate: 90,
              scale: 0,
            }}
            animate={{
              rotate: 0,
              scale: 1,
            }}
            exit={{
              rotate: -90,
              scale: 0,
            }}
          >
            <Sun className="h-5 w-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
