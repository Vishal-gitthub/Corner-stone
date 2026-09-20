"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Parallax from "@/components/motion/Parallax";

export default function Banner() {
  const [widthState, setWidthState] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const check = () => setWidthState(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const imageSrc = widthState
    ? "/home/corner-outside-vertical.jpg"
    : "/home/corner-outside.webp";

  return (
    <div className="relative h-auto overflow-hidden">
      <motion.div
        className="w-full h-screen"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <Parallax speed={0.08} className="h-full w-full">
          <motion.img
            src={imageSrc}
            className="object-cover w-full object-top h-full"
            alt="The Cornerstone Pub outdoor terrace and dining area in Port Melbourne, showcasing modern pub atmosphere and welcoming space"
            data-parallax
            initial={reduced ? false : { scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          />
        </Parallax>
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 to-transparent px-6 pb-12 pt-32 text-center text-white md:pb-16">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-white/85">1 Crockford Street, Port Melbourne</p>
        <h1 className="mt-3 text-4xl font-bold uppercase heading-aleo md:text-6xl">The Cornerstone Pub</h1>
        <p className="mx-auto mt-3 max-w-2xl text-base text-white/90 md:text-lg">Pub dining, drinks, functions and weekly entertainment in Port Melbourne.</p>
      </div>
    </div>
  );
}
