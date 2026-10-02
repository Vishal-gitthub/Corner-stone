"use client";

import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import MotionButton from "@/components/motion/MotionButton";
import Link from "next/link";

const LiveSport = () => {
  return (
    <div>
      <div className="min-h-[80vh] md:h-screen relative w-full overflow-hidden">
        <div data-parallax className="absolute inset-0">
          <Image
            src="/home/tables-optimized.webp"
            className="w-full object-cover h-full"
            alt="Function Room arranged with long dining tables at The Cornerstone Pub"
            fill
            sizes="100vw"
          />
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-6 z-10">
          <Reveal>
            <div className="bg-white-cus/80 text-center py-10 px-6 md:py-14 md:px-8 rounded shadow-lg motion-card">
              <h2 className="text-4xl md:text-5xl mb-6 heading-aleo" data-reveal>
                Outdoor dining and social drinks
              </h2>
              <p className="mb-4 text-lexend text-base md:text-xl text-blue">
                Meet in our Port Melbourne outdoor space for casual dining,
                afternoon drinks and time with friends.
              </p>
              <p className="mb-6 text-lexend text-base md:text-xl text-blue">
                View the current menus before you visit, or book a table for your
                next lunch, dinner or social catch-up.
              </p>
              <MotionButton>
                <a
                  href="https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne?restref=304496&lang=en-AU&ot_source=Restaurant%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uppercase px-12 max-sm:px-6 rounded-md bg-brown py-3 transition-all duration-300 font-semibold font-aleo tracking-widest border-2 border-brown hover:bg-transparent hover:text-brown text-white btn-hover inline-block"
                >
                  Book a table
                </a>
              </MotionButton>
              <Link href="/menus" className="mt-4 inline-block font-aleo uppercase text-brown underline underline-offset-4">
                View current menus
              </Link>
            </div>
          </Reveal>
        </div>
        <section className="mb-8 md:mb-16  w-full absolute bottom-0 z-10">
          <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 rounded-2xl">
            <div className="relative flex overflow-hidden">
              <div className="flex gap-8 animate-marquee-slow">
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={idx}
                    className="flex items-center whitespace-nowrap"
                  >
                    <span className="font-semibold text-4xl md:text-7xl uppercase font-aleo tracking-wider text-white-cus">
                      Live Screens &nbsp;
                    </span>
                    <span className="font-semibold text-4xl md:text-7xl uppercase font-aleo tracking-wider text-white-cus">
                      Bigger Energy &nbsp;
                    </span>
                    <span className="font-semibold text-4xl md:text-7xl uppercase font-aleo tracking-wider text-white-cus">
                      Unforgettable Moments &nbsp;
                    </span>
                    <span className="font-semibold text-4xl md:text-7xl uppercase font-aleo tracking-wider text-white-cus">
                      Every Time &nbsp;
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-8 animate-marquee-slow absolute top-0 translate-x-full">
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={idx}
                    className="flex items-center whitespace-nowrap"
                  >
                    <span className="font-semibold text-7xl uppercase font-aleo tracking-wider text-white-cus">
                      Big Screens, &nbsp;
                    </span>
                    <span className="font-semibold text-7xl uppercase font-aleo tracking-wider text-white-cus">
                      Bigger Atmosphere &nbsp;
                    </span>
                    <span className="font-semibold text-7xl uppercase font-aleo tracking-wider text-white-cus">
                      Big Screens, &nbsp;
                    </span>
                    <span className="font-semibold text-7xl uppercase font-aleo tracking-wider text-white-cus">
                      Bigger Atmosphere &nbsp;
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LiveSport;
