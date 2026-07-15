"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function NavDropdown({ title, href, items = [] }) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Anchor Trigger Button */}
      <button className="group flex items-center gap-1.5 py-3 text-[15px] font-medium text-foreground transition-colors hover:text-primary">
        <span>{title}</span>
        <ChevronDown
          className={`h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:text-primary ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Container */}
      <AnimatePresence>
        {open && (
          <motion.div
            // Fix: Shift centering math out of Tailwind's transform and handle it directly via Framer
            initial={{ opacity: 0, y: 15, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 15, x: "-50%" }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute left-1/2 top-full z-50 w-[380px] overflow-hidden rounded-[24px] border border-border bg-card shadow-2xl"
          >
            {/* 
              Fix: This invisible bridge element fills the 'mt-4' gap. 
              It ensures the hover state stays active while moving the cursor down. 
            */}
            <div className="absolute -top-4 left-0 h-4 w-full bg-transparent" />

            {/* Header section */}
            <div className="border-b border-border bg-muted/30 px-6 py-5">
              <p className="font-serif text-lg font-semibold tracking-tight">
                {title}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Explore our expertise and insights.
              </p>
            </div>

            {/* Nav Items List */}
            <div className="max-h-[350px] overflow-y-auto p-2.5">
              {items.map((item) => (
                <Link
                  key={item.slug}
                  href={`${href}/${item.slug}`}
                  onClick={() => setOpen(false)} // Close dropdown on item selection
                  className="group block rounded-xl p-3.5 transition-colors hover:bg-muted"
                >
                  <div className="text-sm font-medium text-foreground transition-colors group-hover:text-primary">
                    {item.title}
                  </div>
                  {item.description && (
                    <p className="mt-1 line-clamp-2 text-xs leading-normal text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </Link>
              ))}
            </div>

            {/* Footer action section */}
            <div className="border-t border-border bg-muted/10 p-4 text-center">
              <Link
                href={href}
                onClick={() => setOpen(false)}
                className="group inline-flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-primary/80"
              >
                <span>View All {title}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                  →
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
