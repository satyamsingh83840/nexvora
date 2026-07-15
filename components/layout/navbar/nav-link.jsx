"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children }) {
  const pathname = usePathname();

  const active = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      className="group relative py-2 text-[15px] font-medium text-foreground transition-colors duration-300 hover:text-primary"
    >
      {children}

      <motion.span
        initial={false}
        animate={{
          width: active ? "100%" : "0%",
        }}
        transition={{
          duration: 0.3,
        }}
        className="absolute bottom-0 left-0 h-[2px] rounded-full bg-accent"
      />

      <span className="absolute bottom-0 left-0 h-[2px] w-0 rounded-full bg-accent transition-all duration-300 group-hover:w-full" />
    </Link>
  );
}
