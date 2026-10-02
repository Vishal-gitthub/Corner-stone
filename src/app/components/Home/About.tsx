"use client";
import Image from "next/image";
import bgTexture from "../../../../public/home/BgTexture.jpg";
import cs_outdoor from "../../../../public/home/cs-outside-space.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay } from "swiper/modules";
import "swiper/css/effect-cube";
import "swiper/css";
import FoodImage from "../../../../public/home/chefImage.jpg";
import functions_events from "../../../../public/home/pub-area-optimized.webp";
import Link from "next/link";

import { useState } from "react";
import FoodCarousel from "./FoodCarousel";
import { motion, AnimatePresence } from "framer-motion";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import MotionButton from "@/components/motion/MotionButton";
import TextReveal from "@/components/motion/TextReveal";
import { modalBackdrop, modalContent } from "@/lib/motion/variants";

const AboutSec = () => {
  const [togglePopup, setTogglePopup] = useState(false);
  return (
    <div
      style={{ backgroundImage: `url(${bgTexture.src})` }}
      className="pt-32 text-center"
    >
      <div className="max-w-7xl m-auto px-32 max-md:px-16 max-sm:px-3 pb-32" data-reveal>
        <TextReveal as="h2" className="uppercase text-center font-aleo max-md:text-2xl text-[42px] text-brown block">
          A Port Melbourne pub for every occasion
        </TextReveal>
        <p className="heading-aleo text-2xl max-md:text-lg pt-5 max-w-4xl text-center m-auto" data-reveal>
          The Cornerstone is a Port Melbourne pub and restaurant bringing dining,
          bar drinks, entertainment and private functions together at <Link href="/contact" className="text-brown underline underline-offset-4">1 Crockford Street, Port Melbourne</Link>. Join us for
          lunch, dinner, an outdoor catch-up or a social night out.
        </p>
        <p className="mt-6 font-lexend text-blue/80">
          Explore our <Link href="/food" className="text-brown underline underline-offset-4">food</Link>,{" "}
          <Link href="/drinks" className="text-brown underline underline-offset-4">drinks</Link>,{" "}
          <Link href="/events" className="text-brown underline underline-offset-4">private functions</Link> and{" "}
          <Link href="/whatson" className="text-brown underline underline-offset-4">current What&apos;s On program</Link>.
        </p>
      </div>

      <section className="border-t relative border-b " id="spaces" data-reveal>
        <Stagger className="flex flex-wrap justify-around max-md:flex-col max-md:justify-center items-center">
          <StaggerItem className="flex flex-col justify-center py-20 max-sm:py-5 items-center motion-card">
            <div className="flex flex-col items-center">
              <div className="w-96 max-md:w-72 max-sm:w-52 overflow-hidden rounded-[50%]">
                <Image
                  src={cs_outdoor}
                  className="w-full rounded-[50%] aspect-square object-cover object-right image-optimized"
                  alt="Exterior and outdoor tables at The Cornerstone Pub in Port Melbourne"
                  width={500}
                  height={500}
                  sizes="(max-width: 640px) 208px, (max-width: 768px) 288px, 384px"
                />
              </div>
              <h3 className="py-6 text-5xl max-sm:text-3xl uppercase heading-aleo">
                Outdoor dining & drinks
              </h3>
              <button
                onClick={() => setTogglePopup(!togglePopup)}
                className="uppercase underline font-lexend text-brown text-lg font-semibold tracking-wider"
              >
                See Outdoor
              </button>

              {/* IMAGE POPUP */}
              <AnimatePresence>
              {togglePopup && (
                <motion.div
                  className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                  variants={modalBackdrop}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  onClick={() => setTogglePopup(false)}
                >
                  <motion.div
                    className="relative w-full max-w-2xl"
                    variants={modalContent}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Swiper
                      modules={[Autoplay, EffectCube]}
                      autoplay={{ delay: 3000 }}
                      loop
                      effect="cube"
                      grabCursor
                      cubeEffect={{
                        slideShadows: true,
                        shadow: true,
                        shadowOffset: 20,
                        shadowScale: 0.94,
                      }}
                    >
                      {[
                        "/cs_outside_images/outside-1.jpg",
                        "/cs_outside_images/outside-2.jpg",
                        "/cs_outside_images/outside-3.jpg",
                        "/cs_outside_images/outside-4.jpg",
                        "/cs_outside_images/outside-5.jpg",
                      ].map((src, index) => (
                        <SwiperSlide key={src}>
                          <Image src={src} alt={`Outdoor area at The Cornerstone Pub, view ${index + 1}`} width={1200} height={1600} sizes="(max-width: 768px) 90vw, 672px" className="h-auto w-full rounded-md" />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <button
                      onClick={() => setTogglePopup(false)}
                      className="absolute -top-10 right-0 text-white text-3xl"
                    >
                      ✕
                    </button>
                  </motion.div>
                </motion.div>
              )}
              </AnimatePresence>

              {/* END POPUP */}
            </div>
          </StaggerItem>

          <div className="w-[1px] max-md:hidden bg-brown"></div>

          <StaggerItem className="flex flex-col py-20 max-sm:py-5 items-center motion-card">
            <div className="flex flex-col items-center">
              <div className="w-96 max-md:w-72 max-sm:w-52 overflow-hidden rounded-[50%]">
                <Image
                  src="/home/Food_5.jpg"
                  className="w-full rounded-[50%] aspect-square object-cover object-left image-optimized"
                  alt="Main bar interior at The Cornerstone Pub"
                  width={500}
                  height={500}
                  sizes="(max-width: 640px) 208px, (max-width: 768px) 288px, 384px"
                />
              </div>
              <h3 className="py-6 text-5xl max-sm:text-3xl uppercase heading-aleo">
                Private Functions
              </h3>
              <Link
                href="/spaces"
                className="uppercase font-aleo underline text-brown text-lg font-semibold tracking-wider"
              >
                See Spaces
              </Link>
            </div>
          </StaggerItem>

          <div className="w-[1px] max-md:hidden bg-brown"></div>

          <StaggerItem className="flex flex-col py-20 max-sm:py-5 items-center motion-card">
            <div className="flex flex-col items-center">
              <div className="w-96 max-md:w-72 max-sm:w-52 overflow-hidden rounded-[50%]">
                <Image
                  src="/home/nightlife2.webp"
                  className="w-full rounded-[50%] aspect-square image-optimized"
                  alt="Guests enjoying weekend entertainment at The Cornerstone Pub"
                  width={500}
                  height={500}
                  sizes="(max-width: 640px) 208px, (max-width: 768px) 288px, 384px"
                />
              </div>
              <h3 className="py-6 text-5xl max-sm:text-3xl uppercase heading-aleo">
                What&apos;s On
              </h3>
              <Link
                href="/whatson"
                className="uppercase font-aleo underline text-brown text-lg font-semibold tracking-wider"
              >
                See what&apos;s on
              </Link>
            </div>
          </StaggerItem>
        </Stagger>
      </section>

      <section className="px-10 py-32 flex flex-wrap max-sm:flex-col justify-center items-center max-w-7xl relative m-auto" data-reveal>
        <div className="max-w-1/2 max-md:max-w-full relative ">
          <Swiper
            modules={[Autoplay, EffectCube]} 
            autoplay={{ delay: 3000 }}
            loop={true}
            effect="cube"
            grabCursor={true}
            cubeEffect={{
              slideShadows: true,
              shadow: true,
              shadowOffset: 20,
              shadowScale: 0.94,
            }}
          >
            <SwiperSlide>
              <Image src="/home/cs-outside-space-img-1.jpg" alt="Outdoor seating at The Cornerstone Pub in Port Melbourne" width={1066} height={1600} sizes="(max-width: 768px) 100vw, 50vw" className="h-auto rounded-md" />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/home/cs-outside-space-img-2.jpg" alt="Outdoor dining space at The Cornerstone Pub" width={1066} height={1600} sizes="(max-width: 768px) 100vw, 50vw" className="h-auto rounded-md" />
            </SwiperSlide>
          </Swiper>

          <span className="font-aleo text-brown absolute -bottom-10 left-0 text-[120px] max-md:hidden z-10">
            OUTDOOR
          </span>
        </div>

        <div className="max-w-1/2 max-md:max-w-full p-12 max-md:p-5 max-sm:p-2 text-center">
          <h2 className="font-aleo text-center text-7xl max-sm:text-5xl uppercase">
            Outdoor dining & drinks in Port Melbourne
          </h2>
          <p className="p-10 max-sm:p-4 text-center font-lexend">
            Our outdoor area is a relaxed Port Melbourne setting for afternoon
            drinks, casual dining and catch-ups. Use the booking link to reserve a table.
          </p>
          <div className="flex flex-col gap-5 justify-center items-center">
            <MotionButton>
              <a
                href="https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne?restref=304496&lang=en-AU&ot_source=Restaurant%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase px-10 rounded-md bg-white-cus hover:bg-brown hover:text-white transition-all duration-300 text-brown border border-brown font-aleo py-1 w-full max-w-xs text-center btn-hover inline-block"
              >
                Book a Table
              </a>
            </MotionButton>
          </div>
        </div>
      </section>

      <section className="px-10 pb-32 flex flex-wrap max-sm:flex-col justify-center items-center max-w-7xl relative m-auto" data-reveal>
        <div className="max-w-1/2 max-md:max-w-full p-12 max-md:p-5 max-sm:p-2 text-center">
          <h2 className="font-aleo text-center text-7xl max-sm:text-5xl uppercase">
            Pub dining for lunch & dinner
          </h2>
          {/* <h3 className="text-center font-aleo text-2xl pt-2 max-sm:text-xl uppercase">
            HEAD CHEF: STUART RUSS
          </h3> */}
          <p className="p-10 max-sm:p-4 text-center font-lexend">
            Visit for relaxed pub food at lunch or dinner, with current dishes
            available through our food menu.
          </p>
          <div className="flex flex-col gap-12 justify-center items-center">
            <MotionButton>
              <Link
                href="/food"
                className="uppercase px-10 rounded-md bg-brown py-1 text-white font-aleo hover:bg-white-cus hover:text-brown border border-brown transition-all duration-300 w-full max-w-xs text-center btn-hover inline-block"
              >
                Explore dining
              </Link>
            </MotionButton>
            <Link href="/menus/foods" className="uppercase font-aleo text-brown underline underline-offset-4">
              View food menu
            </Link>
          </div>
        </div>

        <div className="max-w-1/2 relative max-md:max-w-full">
          {/* <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {[
              food_1,
              food_2,
              food_3,
              food_4,
              // food_6,
              // food_7,
              // food_8,
              // food_9,
              // food_10,
              // food_11,
            ].map((foodImage, index) => (
              <SwiperSlide key={foodImage.src}>
                <Image src={foodImage} alt="" className="w-full rounded-md" />
              </SwiperSlide>
            ))}
          </Swiper> */}
          <FoodCarousel />
          <div>
            <span className="text-[170px] z-1 max-lg:text-[150px] font-aleo max-md:text-[90px] max-sm:text-[50px] max-sm:hidden text-brown absolute bottom-0 left-16" aria-hidden="true">
              FOOD
            </span>
          </div>
        </div>
      </section>

      <section data-reveal>
        <div className="h-screen overflow-hidden" data-parallax>
          <Image
            src={FoodImage}
            className="w-full h-full object-cover image-optimized"
            alt="Selection of dishes served at The Cornerstone Pub"
            sizes="100vw"
          />
        </div>
      </section>

      <div className="bg-blue">
        <section className="px-10 py-32 flex flex-wrap max-sm:flex-col justify-center items-center max-w-7xl relative m-auto" data-reveal>
          <div className="max-w-1/2 max-md:max-w-full relative">
            <div className="w-full">
              <Image
                src={functions_events}
                className="h-[95vh] object-cover w-full"
                alt="Function Room arranged for a private event at The Cornerstone Pub"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <span className="absolute uppercase top-0 -left-10 max-md:hidden text-[150px] max-lg:text-[100px] max-md:text-[80px] text-brown font-aleo" aria-hidden="true">
              Events
            </span>
          </div>

          <div className="max-w-1/2 max-md:max-w-full p-12 max-md:p-5 max-sm:p-2 text-center">
            <h2 className="heading-aleo text-center text-7xl max-sm:text-5xl uppercase text-white-cus">
              Private functions & venue hire
            </h2>
            <h3 className="heading-aleo text-center text-2xl pt-2 text-white-cus max-sm:text-xl uppercase">
              Crafted for Every Occasion
            </h3>
            <p className="p-10 max-sm:p-4 text-center text-white-cus text-lexend">
              Explore private rooms and venue-hire options for celebrations,
              group dining and corporate occasions in Port Melbourne.
            </p>
            <div className="flex flex-col gap-12 justify-center items-center">
              <MotionButton>
                <Link
                  href="/events"
                  className="uppercase px-12 py-2 rounded-md bg-brown text-white font-semibold tracking-widest border-2 border-brown hover:bg-transparent hover:text-brown transition-all duration-300 font-aleo btn-hover inline-block"
                >
                  Function Enquiry
                </Link>
              </MotionButton>
              <Link href="/spaces" className="font-aleo uppercase text-white underline underline-offset-4">
                Compare function spaces
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSec;
