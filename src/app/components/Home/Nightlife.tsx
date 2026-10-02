"use client";

import Link from "next/link";
import bgTexture from "../../../../public/home/BgTexture.jpg";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import MotionButton from "@/components/motion/MotionButton";

const Nightlife = () => {
  return (
    <div>
      <div
        className="bg-blue"
        style={{ backgroundImage: `url(${bgTexture.src})` }}
      >
        <section
          className="px-10 py-32 flex flex-wrap max-sm:flex-col justify-center items-center max-w-7xl relative m-auto"
          data-reveal
        >
          <Reveal className="w-1/2 max-md:w-full p-12 max-md:p-5 max-sm:p-2 text-center">
            <h2 className="text-7xl max-sm:text-5xl uppercase text-white-cus heading-aleo">
              Drinks & nightlife
            </h2>
            <h3 className="text-2xl pt-2 max-sm:text-xl uppercase text-white-cus heading-aleo">
              FRIDAYS & SATURDAYS
            </h3>
            <p className="p-10 max-sm:p-4 text-white-cus text-lexend">
              The Cornerstone bar brings beer, wine, cocktails and a social
              atmosphere together for evening drinks and weekend entertainment
              in Port Melbourne. Check What&apos;s On for the current program.
            </p>
            <div className="flex flex-col gap-12 justify-center items-center">
              <MotionButton>
                <Link
                  href="/drinks"
                  className="uppercase px-12 max-sm:px-6 rounded-md bg-brown py-3 font-aleo transition-all duration-300 font-semibold tracking-widest border-2 border-brown hover:bg-transparent hover:text-brown text-white btn-hover"
                >
                  Explore Drinks
                </Link>
              </MotionButton>
            </div>
          </Reveal>

          <Reveal className="w-1/2 relative max-md:w-full" delay={0.1}>
            <div className="relative flex max-sm:items-start max-sm:justify- flex-col justify-center items-center w-full h-[95vh] overflow-hidden">
              <Image
                src="/home/nightlife-optimized.webp"
                alt="Guests enjoying evening entertainment at The Cornerstone Pub"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover image-optimized"
                data-parallax
              />
            </div>
            <span className="absolute leading-1 uppercase top-0 max-md:hidden -left-10  text-[150px] max-lg:text-[100px] font-aleo max-md:text-[80px] z-2 max-sm:text-[50px] max-sm:hidden text-brown" aria-hidden="true">
              {/* CLUB */}
            </span>
            <Image
              src="/home/Unforgettable+Nights_sign.png"
              alt="Unforgettable Nights sign"
              width={288}
              height={100}
              className="absolute bottom-30 -left-20 max-md:hidden image-optimized"
            />
          </Reveal>
        </section>
      </div>
    </div>
  );
};

export default Nightlife;
