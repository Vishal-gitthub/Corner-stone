"use client";

import { useState, useEffect } from "react";

import Image from "next/image";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { motion, AnimatePresence } from "framer-motion";

import { useScrollDirection } from "@/hooks/useScrollDirection";

import { useReducedMotion } from "@/hooks/useReducedMotion";

import MotionButton from "@/components/motion/MotionButton";

import { navSlide, modalBackdrop } from "@/lib/motion/variants";



const Navbar = () => {

  const navigation = [

    { link: "/venue", name: "Venue" },

    { link: "/menus", name: "Menus" },

    { link: "/food", name: "Food" },

    { link: "/drinks", name: "Drinks" },

    { link: "/events", name: "Functions" },

    { link: "/whatson", name: "What’s On" },

    { link: "/contact", name: "Contact" },

  ];



  const [toggleMenu, setToggleMenu] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  const { direction, scrollY } = useScrollDirection();

  const reduced = useReducedMotion();



  const hidden = !reduced && scrollY > 80 && direction === "down" && !toggleMenu;



  useEffect(() => {

    document.body.classList.toggle("overflow-hidden", toggleMenu);

    return () => document.body.classList.remove("overflow-hidden");

  }, [toggleMenu]);



  useEffect(() => {

    const onScroll = () => setScrolled(window.scrollY > 20);

    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);

  }, []);



  return (

    <>

      <motion.nav

        className="bg-[#cac6c3c0] backdrop-blur-sm fixed top-0 left-0 right-0 z-50 w-full"

        initial={false}

        animate={{

          y: hidden ? "-100%" : 0,

          boxShadow: scrolled

            ? "0 8px 32px rgba(19, 50, 73, 0.08)"

            : "0 0 0 rgba(0,0,0,0)",

        }}

        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}

      >

        <div className="container-responsive flex items-center justify-between py-3 md:py-4">

          <Link href="/">

            <motion.div

              className="w-32 md:w-44 min-w-20"

              whileHover={reduced ? undefined : { scale: 1.02 }}

              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}

            >

              <Image

                src="/logo.png"

                alt="Cornerstone Pub in Port Melbourne"

                width={176}

                height={64}

                className="w-full h-auto"

              />

            </motion.div>

          </Link>



          <div className="hidden lg:flex gap-6 xl:gap-8 items-center">

            {navigation.map((item, i) => {

              const active =

                pathname === item.link ||

                (item.link !== "/" && pathname.startsWith(item.link));

              return (

                <Link

                  key={i}

                  href={item.link}

                  className="text-blue font-medium hover:text-brown transition-colors duration-300 relative group font-aleo motion-link"

                  data-active={active ? "true" : "false"}

                >

                  {item.name}

                  <motion.span

                    className="absolute -bottom-1 left-0 h-0.5 bg-brown"

                    initial={false}

                    animate={{ width: active ? "100%" : "0%" }}

                    whileHover={active ? undefined : { width: "100%" }}

                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}

                  />

                </Link>

              );

            })}

            <MotionButton>

              <a

                href="https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne?restref=304496&lang=en-AU&ot_source=Restaurant%20website"

                className="py-2 px-6 xl:px-9 bg-brown text-white rounded-md hover:bg-opacity-90 transition-all duration-300 btn-hover font-aleo"

                target="_blank"

                rel="noopener noreferrer"

              >

                Book a Table

              </a>

            </MotionButton>

          </div>



          <motion.button

            className="lg:hidden z-50 p-2 bg-brown text-white rounded-md hover:bg-opacity-90 transition-all duration-300"

            onClick={() => setToggleMenu(true)}

            aria-label="Open navigation menu"

            whileTap={reduced ? undefined : { scale: 0.94 }}

          >

            <svg

              className="w-6 h-6"

              fill="none"

              stroke="currentColor"

              viewBox="0 0 24 24"

            >

              <path

                strokeLinecap="round"

                strokeLinejoin="round"

                strokeWidth={2}

                d="M4 6h16M4 12h16M4 18h16"

              />

            </svg>

          </motion.button>

        </div>

      </motion.nav>



      <AnimatePresence>

        {toggleMenu && (

          <div className="fixed inset-0 z-[60] flex h-screen overflow-hidden overscroll-contain">

            <motion.div

              className="absolute inset-0 bg-black bg-opacity-40"

              variants={modalBackdrop}

              initial="hidden"

              animate="visible"

              exit="exit"

              onClick={() => setToggleMenu(false)}

            />



            <motion.div

              className="relative ml-auto w-4/5 max-w-sm h-full bg-white flex flex-col items-center justify-center gap-6 overflow-y-auto px-6 py-16"

              variants={navSlide}

              initial="hidden"

              animate="visible"

              exit="exit"

            >

              <motion.button

                className="absolute top-6 right-6 p-2 bg-brown text-white rounded-md hover:bg-opacity-90 transition-all duration-300"

                onClick={() => setToggleMenu(false)}

                aria-label="Close navigation menu"

                initial={{ opacity: 0, rotate: -90 }}

                animate={{ opacity: 1, rotate: 0 }}

                transition={{ delay: 0.15, duration: 0.35 }}

                whileTap={reduced ? undefined : { scale: 0.92 }}

              >

                <svg

                  className="w-6 h-6"

                  fill="none"

                  stroke="currentColor"

                  viewBox="0 0 24 24"

                >

                  <path

                    strokeLinecap="round"

                    strokeLinejoin="round"

                    strokeWidth={2}

                    d="M6 18L18 6M6 6l12 12"

                  />

                </svg>

              </motion.button>



              <motion.div

                className="flex flex-col items-center gap-6 w-full"

                initial="hidden"

                animate="visible"

                variants={{

                  hidden: {},

                  visible: {

                    transition: { staggerChildren: 0.07, delayChildren: 0.12 },

                  },

                }}

              >

                {navigation.map((item, i) => (

                  <motion.div

                    key={i}

                    variants={{

                      hidden: { opacity: 0, x: 24 },

                      visible: {

                        opacity: 1,

                        x: 0,

                        transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },

                      },

                    }}

                  >

                    <Link

                      href={item.link}

                      className="text-2xl md:text-3xl text-blue font-medium hover:text-brown transition-colors duration-300 w-full text-center font-lexend block"

                      onClick={() => setToggleMenu(false)}

                    >

                      {item.name}

                    </Link>

                  </motion.div>

                ))}



                <motion.div

                  variants={{

                    hidden: { opacity: 0, y: 16 },

                    visible: {

                      opacity: 1,

                      y: 0,

                      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },

                    },

                  }}

                >

                  <a

                    href="https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne?restref=304496&lang=en-AU&ot_source=Restaurant%20website"

                    className="mt-2 py-3 px-10 bg-brown text-white rounded-md hover:bg-opacity-90 transition-all duration-300 btn-hover text-lg w-full max-w-xs font-aleo block text-center"

                    onClick={() => setToggleMenu(false)}

                    target="_blank"

                    rel="noopener noreferrer"

                  >

                    Book a Table

                  </a>

                </motion.div>

              </motion.div>

            </motion.div>

          </div>

        )}

      </AnimatePresence>

    </>
  );
};

export default Navbar;
