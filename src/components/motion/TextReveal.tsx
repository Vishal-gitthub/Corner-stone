"use client";

import { motion } from "framer-motion";
import { textRevealLine } from "@/lib/motion/variants";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type TextRevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
};

export default function TextReveal({
  children,
  className,
  as: Tag = "h2",
  delay = 0,
}: TextRevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <Tag className={className}>{children}</Tag>;
  }

  return (
    <Tag className={`overflow-hidden ${className ?? ""}`}>
      <motion.span
        className="inline-block"
        variants={textRevealLine}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay }}
      >
        {children}
      </motion.span>
    </Tag>
  );
}
