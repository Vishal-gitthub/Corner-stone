"use client";

import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Autoplay, EffectCreative, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-creative";
import "swiper/css/effect-fade";

import Image1 from "../../../public/Venue/img-1-optimized.webp";
import Image2 from "../../../public/Venue/img-2-optimized.webp";
import Image3 from "../../../public/Venue/lounge-optimized.webp";
import Image4 from "../../../public/Venue/img-3-optimized.webp";
import Image5 from "../../../public/Venue/img-4-optimized.webp";
import Image6 from "../../../public/Venue/img-5-optimized.webp";
import FoodCarousel from "../components/Home/FoodCarousel";
import { venueFaqs as faqs } from "@/lib/faqs";

const spaces = [
  {
    name: "The Main Bar",
    detail:
      "Your all-day corner for a quick drink, a long lunch or the start of a big night.",
    image: Image1,
  },
  {
    name: "The Function Room",
    detail:
      "A private upstairs setting with its own bar for celebrations of up to 70 guests.",
    image: Image2,
  },
  {
    name: "The Cigar Lounge",
    detail:
      "A richly styled retreat for slow conversations, premium pours and a little indulgence.",
    image: Image3,
  },
  {
    name: "The Outdoor Area",
    detail:
      "Fresh air, flexible seating and an easy-going backdrop for shared plates and sunny sessions.",
    image: Image4,
  },
];

function SectionIntro({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="max-w-3xl">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-brown">
        {eyebrow}
      </p>
      <h2 className="font-aleo text-4xl font-bold uppercase leading-[0.95] text-blue md:text-6xl">
        {title}
      </h2>
      <p className="mt-6 max-w-2xl text-base leading-8 text-blue/80 md:text-lg">
        {copy}
      </p>
    </div>
  );
}

export default function Page() {
  const [openFaq, setOpenFaq] = useState(0);
  const heroImages: StaticImageData[] = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
  ];

  return (
    <main className="overflow-hidden bg-[#f7f4ee] text-blue">
      <section
        className="relative isolate h-[680px] mt-24 text-white md:h-[800px]"
        aria-label="The Cornerstone venue"
      >
        <Swiper
          className="!absolute !inset-0 !h-full !w-full"
          modules={[EffectFade, Autoplay]}
          effect="fade"
          autoplay={{ delay: 3800, disableOnInteraction: false }}
          loop
        >
          {heroImages.map((image, index) => (
            <SwiperSlide key={`cornerstone-hero-${index}`} className="!h-full">
              <div className="relative h-full w-full">
                <Image
                  src={image}
                  alt="Interior and event spaces at The Cornerstone Pub in Port Melbourne"
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,28,41,.9),rgba(9,28,41,.38),rgba(9,28,41,.18))]" />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="relative z-10 mx-auto flex h-full max-w-[1200px] items-end px-4 pb-16 sm:px-8 md:pb-24 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.32em] text-[#e1b331]">
              1 Crockford Street · Port Melbourne
            </p>
            <h1 className="font-aleo text-5xl font-bold uppercase leading-[0.9] md:text-8xl">
              More than a pub.
              <br />
              <span className="text-[#e1b331]">Find your corner.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/85 md:text-xl md:leading-8">
              A warm, generous Port Melbourne venue for long lunches, late-night
              drinks, good food and the kind of celebrations that stay with you.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-hover border-2 border-[#e1b331] bg-[#e1b331] px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue"
              >
                Book a table
              </Link>
              <Link
                href="/events#enquire-section"
                className="btn-hover border-2 border-white/70 px-7 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-white hover:border-[#e1b331] hover:text-[#e1b331]"
              >
                Plan an event
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-6 right-6 z-10 hidden text-right text-xs uppercase tracking-[0.25em] text-white/60 md:block">
          Good food · good people · good times
        </div>
      </section>

      <section
        className="border-b border-blue/10 bg-[#f7f4ee] py-20 md:py-28"
        data-reveal
      >
        <div className="container-responsive grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-end">
          <SectionIntro
            eyebrow="The Cornerstone experience"
            title="Come for the food. Stay for the feeling."
            copy="There is a particular kind of ease to The Cornerstone. It is the hum of the room, the first cold drink, plates arriving for the table and a night that quietly gets better as it goes. Every space has its own mood, but the welcome is the same."
          />
          <div className="grid grid-cols-2 gap-px overflow-hidden border border-blue/15 bg-blue/15">
            {[
              ["01", "A generous menu"],
              ["02", "Five ways to gather"],
              ["03", "Drinks worth lingering over"],
              ["04", "Port Melbourne hospitality"],
            ].map(([number, label]) => (
              <div key={number} className="bg-[#f7f4ee] p-6 md:p-8">
                <span className="font-aleo text-3xl text-brown">{number}</span>
                <p className="mt-8 text-sm font-semibold uppercase leading-5 tracking-[0.1em] text-blue md:text-base">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue py-20 text-white md:py-28" data-reveal>
        <div className="container-responsive">
          <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#e1b331]">
                Explore the venue
              </p>
              <h2 className="font-aleo text-4xl font-bold uppercase leading-none md:text-6xl">
                Choose your corner
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-7 text-white/65">
              One address, several ways to spend an evening. Swipe through the
              spaces that make The Cornerstone feel like more than one place.
            </p>
          </div>
          <Swiper
            modules={[EffectCreative, Autoplay]}
            effect="creative"
            grabCursor
            creativeEffect={{
              prev: { shadow: true, translate: ["-20%", 0, -1] },
              next: { translate: ["100%", 0, 0] },
            }}
            autoplay={{ delay: 3200, disableOnInteraction: false }}
            loop
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 1.1 },
              768: { slidesPerView: 2.15 },
            }}
          >
            {spaces.map((space, index) => (
              <SwiperSlide key={space.name}>
                <div className="group relative aspect-[0.82] overflow-hidden">
                  <Image
                    src={space.image}
                    alt={space.name}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 90vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue via-blue/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <span className="text-sm text-[#e1b331]">0{index + 1}</span>
                    <h3 className="mt-2 font-aleo text-3xl font-bold uppercase">
                      {space.name}
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                      {space.detail}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="py-20 md:py-28" data-reveal>
        <div className="container-responsive grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative min-h-[560px] overflow-hidden md:min-h-[680px]">
            <Image
              src={Image5}
              alt="Dining and social spaces at The Cornerstone"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div className="absolute bottom-5 left-5 max-w-[240px] bg-[#f7f4ee] p-5 md:bottom-8 md:left-8">
              <p className="font-aleo text-xl font-bold uppercase">
                The art of staying awhile
              </p>
              <p className="mt-2 text-xs leading-5 text-blue/70">
                Unhurried afternoons and evenings with nowhere else to be.
              </p>
            </div>
          </div>
          <div>
            <SectionIntro
              eyebrow="From the kitchen"
              title="Food made for the middle of the table"
              copy="Head Chef Stuart Russ brings bold, seasonal flavour to a menu that knows what a pub meal should feel like: generous, familiar and just a little unexpected. Come hungry, order for the table and leave room for another round."
            />
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/food"
                className="btn-hover bg-brown px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white"
              >
                See the food menu
              </Link>
              <Link
                href="/drinks"
                className="btn-hover border border-blue px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-blue hover:bg-blue hover:text-white"
              >
                Explore drinks
              </Link>
            </div>
          </div>
        </div>
        <div className="container-responsive mt-16 md:mt-24">
          <FoodCarousel />
        </div>
      </section>

      <section
        className="border-y border-blue/10 bg-[#eee8dc] py-20 md:py-28"
        data-reveal
      >
        <div className="container-responsive grid gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-brown">
              Made for your people
            </p>
            <h2 className="font-aleo text-4xl font-bold uppercase leading-[.95] text-blue md:text-6xl">
              Your best nights start here.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-8 text-blue/80 md:text-lg">
              From milestone birthdays to end-of-year dinners, our events team
              will help you shape the right atmosphere, menu and drinks package.
              Bring the guest list. We will handle the details.
            </p>
            <div className="mt-8 grid max-w-xl grid-cols-2 gap-4 border-t border-blue/20 pt-6 text-sm uppercase tracking-[0.1em] text-blue">
              <p>
                <strong className="block font-aleo text-3xl text-brown">
                  70
                </strong>{" "}
                guests upstairs
              </p>
              <p>
                <strong className="block font-aleo text-3xl text-brown">
                  1
                </strong>{" "}
                dedicated events team
              </p>
            </div>
            <Link
              href="/events#enquire-section"
              className="btn-hover mt-9 inline-block bg-blue px-7 py-3 text-sm font-semibold uppercase tracking-[0.15em] text-white"
            >
              Start planning
            </Link>
          </div>
          <div className="relative order-1 aspect-[.84] lg:order-2">
            <Image
              src="/club/function-room.jpg"
              alt="The Cornerstone function room set for an event"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 38vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f4ee] py-20 md:py-28" data-reveal>
        <div className="container-responsive grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <SectionIntro
            eyebrow="Good to know"
            title="Your questions, answered"
            copy="Everything you need to know before your next visit to The Cornerstone."
          />
          <div className="border-t border-blue/20">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} className="border-b border-blue/20">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left text-base font-semibold uppercase tracking-[0.04em] text-blue md:text-lg"
                  >
                    <span>{faq.question}</span>
                    <span
                      className={`font-aleo text-3xl font-normal text-brown transition-transform ${isOpen ? "rotate-45" : ""}`}
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="max-w-2xl pb-6 pr-10 text-sm leading-7 text-blue/75 md:text-base">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-blue py-20 text-center text-white md:py-28">
        <Image
          src={Image6}
          alt="An evening at The Cornerstone"
          fill
          className="object-cover opacity-25"
          sizes="100vw"
        />
        <div className="relative mx-auto max-w-3xl px-4">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-[#e1b331]">
            See you soon
          </p>
          <h2 className="font-aleo text-5xl font-bold uppercase leading-[.9] md:text-7xl">
            Make it a Cornerstone night.
          </h2>
          <p className="mx-auto mt-6 max-w-lg text-white/75">
            Come as you are, stay as long as you like. We are ready when you
            are.
          </p>
          <Link
            href="/contact"
            className="btn-hover mt-8 inline-block border-2 border-[#e1b331] bg-[#e1b331] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue"
          >
            Find us in Port Melbourne
          </Link>
        </div>
      </section>
    </main>
  );
}
