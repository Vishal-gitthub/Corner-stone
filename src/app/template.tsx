"use client";

import { motion } from "framer-motion";
import { pageTransition } from "@/lib/motion/variants";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Template({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <>{children}</>;
  }

  return (
    <motion.div
      variants={pageTransition}
      initial="initial"
      animate="enter"
      className="motion-page"
    >
      {children}
    </motion.div>
  );
}
