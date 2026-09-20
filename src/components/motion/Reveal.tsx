"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion/variants";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  amount?: number;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  amount = 0.2,
  className,
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
