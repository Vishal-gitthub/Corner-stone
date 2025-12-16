"use client";
import Image from "next/image";
import bgTexture from "../../../../public/home/BgTexture.jpg";
import cs_outdoor from "../../../../public/home/cs-outside-space.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, EffectCube, Autoplay } from "swiper/modules";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";
import "swiper/css";
import food_1 from "../../../../public/home/Food_1.jpg";
import food_2 from "../../../../public/home/Food_2.jpg";
import food_3 from "../../../../public/home/Food_3.jpg";
import food_4 from "../../../../public/home/Food_4.jpg";
// import food_6 from "../../../../public/home/Food_6.jpeg";
// import food_7 from "../../../../public/home/Food_7.jpeg";
// import food_8 from "../../../../public/home/Food_8.jpeg";
// import food_9 from "../../../../public/home/Food_9.jpeg";
// import food_10 from "../../../../public/home/Food_10.jpeg";
// import food_11 from "../../../../public/home/Food_11.jpeg";

import FoodImage from "../../../../public/home/chefImage.jpg";
import functions_events from "../../../../public/home/pub_area.jpg";
import Link from "next/link";

import OutdoorImage1 from "../../../../public/cs_outside_images/outside-1.jpg";
import OutdoorImage2 from "../../../../public/cs_outside_images/outside-2.jpg";
import OutdoorImage3 from "../../../../public/cs_outside_images/outside-3.jpg";
import { useState } from "react";
import FoodCarousel from "./FoodCarousel";

const AboutSec = () => {
  const [togglePopup, setTogglePopup] = useState(false);
  return (
    <div
      style={{ backgroundImage: `url(${bgTexture.src})` }}
      className="pt-32 text-center"
    >
      <div className="max-w-7xl m-auto px-32 max-md:px-16 max-sm:px-3 pb-32">
        <span className="uppercase text-center font-aleo max-md:text-3xl text-5xl text-brown">
          Welcome to The Cornerstone Pub
        </span>
        <h2 className="heading-aleo text-2xl max-md:text-lg pt-5 max-w-4xl text-center m-auto">
          Discover South Melbourne’s favourite destination for good times, great
          food, and unforgettable events. Whether you’re here for a laid-back
          afternoon in our outdoor space or a vibrant night out with music and
          drinks, The Cornerstone sets the perfect scene for every occasion.
        </h2>
      </div>

      <section className="border-t relative border-b " id="spaces">
        <div className="flex flex-wrap justify-around max-md:flex-col max-md:justify-center items-center">
          <div className="flex flex-col justify-center py-20 max-sm:py-5 items-center ">
            <div className="flex flex-col items-center">
              <div className="w-96 max-md:w-72 max-sm:w-52">
                <Image
                  src={cs_outdoor}
                  className="w-full rounded-[50%] aspect-square object-cover object-right"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <h3 className="py-6 text-5xl max-sm:text-3xl uppercase heading-aleo">
                Outdoor Space
              </h3>
              <button
                onClick={() => setTogglePopup(!togglePopup)}
                className="uppercase underline font-lexend text-brown text-lg font-semibold tracking-wider"
              >
                See Outdoor
              </button>

              {/* IMAGE POPUP */}
              {togglePopup && (
                <div
                  className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
                  onClick={() => setTogglePopup(false)}
                >
                  <div
                    className="relative w-full max-w-2xl"
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
                      ].map((src) => (
                        <SwiperSlide key={src}>
                          <img src={src} alt="" className="w-full rounded-md" />
                        </SwiperSlide>
                      ))}
                    </Swiper>

                    <button
                      onClick={() => setTogglePopup(false)}
                      className="absolute -top-10 right-0 text-white text-3xl"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              )}

              {/* END POPUP */}
            </div>
          </div>

          <div className="w-[1px] max-md:hidden bg-brown"></div>

          <div className="flex flex-col py-20 max-sm:py-5 items-center ">
            <div className="flex flex-col items-center">
              <div className="w-96 max-md:w-72 max-sm:w-52">
                <Image
                  src="/home/Food_5.jpg"
                  className="w-full rounded-[50%] aspect-square object-cover object-left"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <h3 className="py-6 text-5xl max-sm:text-3xl uppercase heading-aleo">
                Events
              </h3>
              <Link
                href="/spaces"
                className="uppercase font-aleo underline text-brown text-lg font-semibold tracking-wider"
              >
                See Spaces
              </Link>
            </div>
          </div>

          <div className="w-[1px] max-md:hidden bg-brown"></div>

          <div className="flex flex-col py-20 max-sm:py-5 items-center">
            <div className="flex flex-col items-center">
              <div className="w-96 max-md:w-72 max-sm:w-52">
                <Image
                  src="/home/nightlife.jpg"
                  className="w-full rounded-[50%] aspect-square"
                  alt=""
                  width={500}
                  height={500}
                />
              </div>
              <h3 className="py-6 text-5xl max-sm:text-3xl uppercase heading-aleo">
                Nightlife
              </h3>
              <Link
                href="/whatson"
                className="uppercase font-aleo underline text-brown text-lg font-semibold tracking-wider"
              >
                See club info
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-10 py-32 flex flex-wrap max-sm:flex-col justify-center items-center max-w-7xl relative m-auto">
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
              <img
                src="/home/cs-outside-space-img-1.jpg"
                alt=""
                className="rounded-md"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="/home/cs-outside-space-img-2.jpg"
                alt=""
                className="rounded-md"
              />
            </SwiperSlide>
          </Swiper>

          <span className="font-aleo text-brown absolute -bottom-10 left-0 text-[120px] max-md:hidden z-10">
            OUTDOOR
          </span>
        </div>

        <div className="max-w-1/2 max-md:max-w-full p-12 max-md:p-5 max-sm:p-2 text-center">
          <h2 className="font-aleo text-center text-7xl max-sm:text-5xl uppercase">
            Outdoor Space
          </h2>
          <p className="p-10 max-sm:p-4 text-center font-lexend">
            Set in the heart of the city, our Outdoor area offers the perfect
            setting for golden hour drinks or an easy transition into the night.
            Join us Fridays and Saturdays from 3pm ‘til late.
          </p>
          <div className="flex flex-col gap-5 justify-center items-center">
            <a
              href="https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne?restref=304496&lang=en-AU&ot_source=Restaurant%20websiteF"
              target="_blank"
              className="uppercase px-10 rounded-md bg-white-cus hover:bg-brown hover:text-white transition-all duration-300 text-brown border border-brown font-aleo py-1 w-full max-w-xs text-center"
            >
              Book a Table
            </a>
          </div>
        </div>
      </section>

      <section className="px-10 pb-32 flex flex-wrap max-sm:flex-col justify-center items-center max-w-7xl relative m-auto">
        <div className="max-w-1/2 max-md:max-w-full p-12 max-md:p-5 max-sm:p-2 text-center">
          <h2 className="font-aleo text-center text-7xl max-sm:text-5xl uppercase">
            Our Food
          </h2>
          <h3 className="text-center font-aleo text-2xl pt-2 max-sm:text-xl uppercase">
            HEAD CHEF: STUART RUSS
          </h3>
          <p className="p-10 max-sm:p-4 text-center font-lexend">
            With a vibrant new menu led by Stuart Russ, The Cornerstone brings a
            fresh twist to modern pub dining.
          </p>
          <div className="flex flex-col gap-12 justify-center items-center">
            <Link
              href="/menus"
              className="uppercase px-10 rounded-md bg-brown py-1 text-white font-aleo hover:bg-white-cus hover:text-brown border border-brown transition-all duration-300 w-full max-w-xs text-center"
            >
              SEE MENU
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
            <h2 className="text-[170px] z-1 max-lg:text-[150px] font-aleo max-md:text-[90px] max-sm:text-[50px] max-sm:hidden text-brown absolute bottom-0 left-16">
              FOOD
            </h2>
          </div>
        </div>
      </section>

      <section>
        <div className="h-screen">
          <Image
            src={FoodImage}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </section>

      <div className="bg-blue">
        <section className="px-10 py-32 flex flex-wrap max-sm:flex-col justify-center items-center max-w-7xl relative m-auto">
          <div className="max-w-1/2 max-md:max-w-full relative">
            <div className="w-full">
              <Image
                src={functions_events}
                className="h-[95vh] object-cover w-full"
                alt=""
              />
            </div>
            <h2 className="absolute uppercase top-0 -left-10 max-md:hidden text-[150px] max-lg:text-[100px] max-md:text-[80px] text-brown font-aleo">
              Events
            </h2>
          </div>

          <div className="max-w-1/2 max-md:max-w-full p-12 max-md:p-5 max-sm:p-2 text-center">
            <h2 className="heading-aleo text-center text-7xl max-sm:text-5xl uppercase text-white-cus">
              Functions & Events
            </h2>
            <h3 className="heading-aleo text-center text-2xl pt-2 text-white-cus max-sm:text-xl uppercase">
              Crafted for Every Occasion
            </h3>
            <p className="p-10 max-sm:p-4 text-center text-white-cus text-lexend">
              The Cornerstone’s versatile spaces are perfect for everything from
              relaxed catch-ups to grand celebrations.
            </p>
            <div className="flex flex-col gap-12 justify-center items-center">
              <Link
                href="/spaces"
                className="uppercase px-12 py-2 rounded-md bg-brown text-white font-semibold tracking-widest border-2 border-brown hover:bg-transparent hover:text-brown transition-all duration-300 font-aleo"
              >
                View Spaces
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSec;
