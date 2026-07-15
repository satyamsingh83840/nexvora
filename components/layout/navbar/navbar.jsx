"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";

import Logo from "./logo";
import DesktopNav from "./desktop-nav";
import ThemeToggle from "./theme-toggle";
import MobileNav from "./mobile-nav";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 30);
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/80 shadow-sm backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Logo />

          <DesktopNav />

          <div className="flex items-center gap-3">
            <ThemeToggle />

            <Button
              className="hidden rounded-full px-6 xl:flex"
              onClick={() => router.push("/contact")}
            >
              Book Consultation
            </Button>

            <button
              className="rounded-full border border-border p-2 xl:hidden"
              aria-label="Open Menu"
              onClick={() => setMobileOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
