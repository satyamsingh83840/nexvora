"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

import navigation from "@/data/navigation";
import company from "@/data/company";

import ThemeToggle from "./theme-toggle";
import { Button } from "@/components/ui/button";

const menuVariants = {
  hidden: {
    opacity: 0,
    x: "100%",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // Custom ultra-smooth ease-out
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.3,
      ease: [0.7, 0, 0.84, 0],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function MobileNav({ open, onClose }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-md cursor-pointer"
          />

          {/* Sidebar Drawer */}
          <motion.aside
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed right-0 top-0 bottom-0 z-50 flex h-full w-full max-w-md flex-col border-l border-border bg-background/95 backdrop-blur-xl shadow-2xl sm:max-w-sm"
          >
            {/* Header Area */}
            <div className="flex items-center justify-between border-b border-border px-6 py-4 min-h-[73px]">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Navigation
              </span>
              <button
                onClick={onClose}
                aria-label="Close Menu"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/50 text-muted-foreground transition-all duration-200 hover:border-primary hover:text-foreground hover:scale-105 active:scale-95"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Navigation List */}
            <nav className="flex-1 overflow-y-auto px-6 py-4 scrollbar-none">
              <div className="flex flex-col">
                {navigation.map((item) => (
                  <motion.div key={item.href} variants={itemVariants}>
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className="group flex items-center justify-between border-b border-border/60 py-4 text-lg font-medium tracking-tight text-foreground/90 transition-colors hover:text-primary"
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        {item.title}
                      </span>
                      <div className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/0 transition-all duration-300 group-hover:bg-primary/10">
                        <ArrowRight className="h-4 w-4 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 text-primary" />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </nav>

            {/* Bottom Utilities Footer */}
            <motion.div
              variants={itemVariants}
              className="space-y-6 border-t border-border bg-secondary/10 p-6 backdrop-blur-sm"
            >
              {/* Preferences */}
              <div className="flex items-center justify-between bg-background/50 p-3 rounded-xl border border-border/40">
                <span className="text-sm font-medium text-muted-foreground">
                  Theme Preference
                </span>
                <ThemeToggle />
              </div>

              {/* Action Button */}
              <Link href={"/contact"}>
                <Button
                  size="lg"
                  className="w-full rounded-xl font-medium tracking-wide shadow-md shadow-primary/10 transition-transform active:scale-[0.98]"
                >
                  Book Consultation
                </Button>
              </Link>
              {/* Contact Info */}
              <div className="space-y-3 pt-2 text-sm text-muted-foreground">
                <a
                  href={`tel:${company.phone}`}
                  className="flex items-center gap-3 transition-colors hover:text-primary group w-fit"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-background border border-border/60 group-hover:border-primary/30 group-hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="font-medium">{company.phone}</span>
                </a>

                <a
                  href={`mailto:${company.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-primary group w-fit"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-background border border-border/60 group-hover:border-primary/30 group-hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="font-medium break-all">{company.email}</span>
                </a>
              </div>
            </motion.div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
