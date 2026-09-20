"use client";

import { motion } from "framer-motion";
import Image, { type ImageProps } from "next/image";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { fadeIn } from "@/lib/motion/variants";

type MotionImageProps = ImageProps & {
  hoverZoom?: boolean;
  reveal?: boolean;
};

export function MotionImage({
  hoverZoom = true,
  reveal = true,
  className = "",
  alt,
  ...props
}: MotionImageProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <Image className={className} alt={alt} {...props} />;
  }

  return (
    <motion.div
      className={`overflow-hidden ${hoverZoom ? "group" : ""}`}
      variants={reveal ? fadeIn : undefined}
      initial={reveal ? "hidden" : undefined}
      whileInView={reveal ? "visible" : undefined}
      viewport={reveal ? { once: true, amount: 0.2 } : undefined}
    >
      <motion.div
        whileHover={
          hoverZoom
            ? { scale: 1.04, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
            : undefined
        }
        className="h-full w-full"
      >
        <Image
          className={`${className} ${hoverZoom ? "transition-transform duration-700 ease-out group-hover:scale-[1.02]" : ""}`}
          alt={alt}
          {...props}
        />
      </motion.div>
    </motion.div>
  );
}
