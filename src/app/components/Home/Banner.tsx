"use client";

import { motion } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import Parallax from "@/components/motion/Parallax";
import { getImageProps } from "next/image";

export default function Banner() {
  const reduced = useReducedMotion();
  const alt = "Outdoor dining area at The Cornerstone Pub in Port Melbourne";
  const { props: desktopImage } = getImageProps({
    src: "/home/corner-outside.webp",
    alt,
    width: 3899,
    height: 1922,
    sizes: "100vw",
    quality: 88,
  });
  const { props: mobileImage } = getImageProps({
    src: "/home/corner-outside-vertical.jpg",
    alt,
    width: 1365,
    height: 2048,
    sizes: "100vw",
    quality: 88,
  });

  return (
    <div className="relative h-auto overflow-hidden">
      <motion.div
        className="w-full h-screen"
        initial={reduced ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <Parallax speed={0.08} className="h-full w-full">
          <motion.div
            className="h-full w-full"
            data-parallax
            initial={reduced ? false : { scale: 1.06 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <picture className="block h-full w-full">
              <source media="(max-width: 767px)" srcSet={mobileImage.srcSet} sizes={mobileImage.sizes} />
              <img
                {...desktopImage}
                alt={alt}
                fetchPriority="high"
                className="h-full w-full object-cover object-top"
              />
            </picture>
          </motion.div>
        </Parallax>
      </motion.div>
      <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/70 to-transparent px-8 pb-12 pt-32 text-center text-white sm:px-6 md:pb-16">
        <p className="text-[0.65rem] font-medium uppercase tracking-[0.1em] text-white/85 sm:text-sm sm:tracking-[0.22em]">1 Crockford Street, Port Melbourne</p>
        <h1 className="mt-3 text-2xl font-bold uppercase leading-tight heading-aleo sm:text-4xl md:text-6xl">
          <span className="block">The Cornerstone Pub</span>
          <span className="mt-2 block text-[1.1rem] sm:text-2xl md:text-4xl">Port Melbourne Pub, Dining, Drinks & Functions</span>
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-sm text-white/90 sm:text-base md:text-lg">Food, bar drinks, live entertainment and private occasions in the heart of Port Melbourne.</p>
      </div>
    </div>
  );
}
