"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Link from "next/link";
import { StaticImageData } from "next/image";

import Image1 from "../../../public/Venue/img-1.jpg";
import Image2 from "../../../public/Venue/img-2.jpg";
import Image3 from "../../../public/Venue/cigar-lounge.jpg";
import Image4 from "../../../public/Venue/img-3.jpg";
import Image5 from "../../../public/Venue/img-4.jpg";
import Image6 from "../../../public/Venue/img-5.jpg";
import FoodCarousel from "../components/Home/FoodCarousel";

export default function Page() {
  const images: StaticImageData[] = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
  ];
  return (
    <main style={{ backgroundImage: `url(/home/BgTexture.jpg)` }}>
      {/* HERO SWIPER */}
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {images.map((slideImage, index) => (
          <SwiperSlide key={`cornerstone-slide-${index}`}>
            <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-screen">
              <Image
                src={slideImage}
                alt={`Cornerstone slide ${index + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* HERO TEXT */}
      <div className="py-16 md:py-24 lg:py-32">
        <div className="container-responsive text-center">
          <p className="text-xl md:text-2xl lg:text-3xl uppercase text-brown font-medium mb-4">
            The Cornerstone Pub
          </p>
          <h1 className="text-3xl md:text-4xl font-aleo lg:text-5xl uppercase font-bold leading-tight">
            Where good food, great company & unforgettable moments meet
          </h1>
        </div>
      </div>

      {/* OUR FOOD SECTION */}
      <div className="border-t-2 border-brown bg-[#faf8f6]">
        <section className="py-16 md:py-20 lg:py-24">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* TEXT */}
              <div className="text-center lg:text-left space-y-6">
                <h2 className="text-4xl md:text-5xl lg:text-7xl heading-aleo uppercase text-blue font-bold">
                  Our Food
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl uppercase text-brown font-medium">
                  Head Chef: Stuart Russ
                </p>
                <div className="w-24 h-1 bg-brown mx-auto lg:mx-0 my-4"></div>
                <div className="space-y-4 text-base md:text-lg text-blue leading-relaxed">
                  <p>
                    Experience a vibrant new menu crafted by{" "}
                    <strong>Head Chef Stuart Russ</strong>, where bold flavours
                    and seasonal ingredients redefine modern pub dining.
                  </p>
                  <p>
                    Each dish is designed with care - blending quality produce,
                    creative flair, and that relaxed sophistication The
                    Cornerstone is known for.
                  </p>
                  <p>
                    From fresh share plates to hearty mains, every bite pairs
                    beautifully with our curated list of craft beers, premium
                    wines, and signature cocktails.
                  </p>
                </div>
              </div>

              {/* IMAGE */}
              <div className="order-first lg:order-last">
                <FoodCarousel />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* FUNCTIONS & EVENTS */}
      <section className="py-16 md:py-20 lg:py-24">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* IMAGE */}
            <div>
              <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
                <Image
                  src="/club/function-room.jpg"
                  alt="Functions and events at The Cornerstone"
                  fill
                  className="object-cover rounded-lg image-optimized"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* TEXT */}
            <div className="text-center lg:text-left space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl heading-aleo uppercase text-blue font-bold">
                Functions & Events
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl uppercase text-brown font-medium heading-aleo">
                Melbourne’s versatile venue for every celebration
              </p>
              <div className="w-24 h-1 bg-brown mx-auto lg:mx-0 my-4"></div>

              <div className="space-y-4 text-sm md:text-base text-blue leading-relaxed">
                <p>
                  At <strong>The Cornerstone</strong>, every occasion is made
                  memorable. From birthdays and engagements to corporate events
                  and private celebrations, our spaces offer the ideal setting
                  for every style of gathering.
                </p>

                <p>
                  Welcome your guests into our
                  <strong>  Function Room</strong>—an elegant upstairs
                  space featuring its own private bar, perfect for birthday
                  parties, corporate events, and private celebrations. This room
                  accommodates up to <strong>70 guests</strong>.
                </p>

                <p>
                  Prefer something outdoors? Our vibrant outdoor area offers
                  flexible options for both cocktail-style and seated events,
                  supported by tailored menus, premium drinks, and a seamless
                  event experience from start to finish.
                </p>

                <p>
                  Enhance your celebration with optional styling and photography
                  packages— including custom signage, balloon garlands, and
                  floral arrangements—all managed by our dedicated events team.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start mt-8">
                <Link
                  href="/events#enquire-section"
                  className="uppercase px-12 max-sm:px-6 rounded-md bg-brown py-3 transition-all duration-300 font-aleo tracking-widest border-2 border-brown hover:bg-transparent hover:text-brown text-white "
                >
                  Enquire Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VENUE DETAILS SECTION */}
      <div className="border-t-2 border-brown hidden bg-[#faf8f6]">
        <section className="py-16 md:py-20 lg:py-24">
          <div className="container-responsive">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* TEXT */}
              <div className="text-center lg:text-left space-y-6">
                <h2 className="text-3xl md:text-4xl lg:text-5xl heading-aleo uppercase text-blue font-bold">
                  Cornerstone Cigar Room
                </h2>
                <p className="text-lg md:text-xl lg:text-2xl uppercase text-brown font-medium">
                  Port Melbourne’s refined retreat for those who appreciate the
                  art of a fine cigar.
                </p>
                <div className="w-24 h-1 bg-brown mx-auto lg:mx-0 my-4"></div>
                <div className="space-y-4 text-sm md:text-base text-blue leading-relaxed">
                  <p>
                    Tucked away within The Cornerstone, our Cigar Room blends
                    old-world charm with modern comfort. Rich tones, plush
                    seating, and warm ambient lighting create a relaxed yet
                    sophisticated atmosphere designed for unwinding.
                  </p>
                  <p>
                    Enjoy a curated selection of quality cigars, premium
                    whiskies, and hand-crafted cocktails — all served with the
                    attentive hospitality we’re known for.
                  </p>
                  <p>
                    Whether it’s quiet reflection, conversation among friends,
                    or a post-dinner indulgence, this is where moments are meant
                    to be savored.
                  </p>
                </div>
                <div className="flex justify-center lg:justify-start mt-8">
                  <Link
                    href="/events#enquire-section"
                    className="uppercase px-12 max-sm:px-6 rounded-md bg-brown py-3 transition-all duration-300 font-aleo tracking-widest border-2 border-brown hover:bg-transparent hover:text-brown text-white "
                  >
                    Plan Your Event
                  </Link>
                </div>
              </div>

              {/* IMAGE */}
              <div className="order-first lg:order-last">
                <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
                  <Image
                    src="/events/12760.jpg"
                    alt="Cornerstone Function Space setup"
                    fill
                    className="object-contain rounded-lg image-optimized"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
