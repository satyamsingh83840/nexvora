"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);

  const smoothX = useSpring(x, {
    stiffness: 120,
    damping: 20,
  });

  const smoothY = useSpring(y, {
    stiffness: 120,
    damping: 20,
  });

  useEffect(() => {
    const move = (e) => {
      x.set(e.clientX - 160);
      y.set(e.clientY - 160);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
      }}
      className="
        pointer-events-none
        fixed
        left-0
        top-0
        z-0
        hidden
        h-80
        w-80
        rounded-full
        bg-primary/10
        blur-3xl
        lg:block
      "
    />
  );
}
