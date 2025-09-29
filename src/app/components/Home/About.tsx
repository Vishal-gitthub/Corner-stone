"use client";
import Image from "next/image";
import bgTexture from "../../../../public/home/BgTexture.jpg";
import rooftop from "../../../../public/home/rooftop_image.webp";
import Events from "../../../../public/home/Events.webp";
import Nightlife from "../../../../public/home/nightlife.webp";
import rooftopClub from "../../../../public/home/rooftopClub.webp";
import sign from "../../../../public/home/Panoramic+Views.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import food_1 from "../../../../public/home/Food_1.webp";
import food_2 from "../../../../public/home/Food_2.webp";
import food_3 from "../../../../public/home/Food_3.webp";
import food_4 from "../../../../public/home/Food_4.webp";
import food_5 from "../../../../public/home/Food_5.webp";
import foodChepsign from "../../../../public/home/Food-chefSign.png";
import RooftopImage from "../../../../public/home/Albion+Rooftop,+function+venue+spaces+(19).webp";
import EventsSign from "../../../../public/home/EVENTS.png";
import rooftopVenu from "../../../../public/home/rooftopVenu.webp";
import { EffectFade } from "swiper/modules";
import "swiper/css/effect-fade";
const AboutSec = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgTexture.src})` }}
      className="pt-32 text-center"
    >
      {/* section 1 */}
      <div className="max-w-7xl m-auto px-32 max-md:px-16 max-sm:px-3 pb-32">
        <span className="uppercase text-center text-2xl text-brown">
          welcome to THE ALBION
        </span>
        <h2 className="text-[clamp(2rem,6vw,5rem)] font-semibold">
          South Melbourne’s <span className="font-seasonOne"> premier </span>
          rooftop, event space and Nightclub.
        </h2>
      </div>

      {/* Section 2 */}
      <section className="border-t border-b ">
        <div className="flex justify-around  flex-wrap">
          <div className=" flex flex-col py-20 max-sm:py-5 items-center ">
            <div>
              <div className="w-96 max-md:w-72 max-sm:w-52">
                <Image
                  src={rooftop}
                  className="w-full rounded-[50%] aspect-square"
                  alt=""
                />
              </div>
              <h3 className="py-6 text-5xl uppercase">Rooftop</h3>
              <a
                href=""
                className="uppercase underline text-brown text-lg font-semibold tracking-wider"
              >
                See Rooftop
              </a>
            </div>
          </div>
          <div className="w-[1px] max-md:hidden bg-brown"></div>
          <div className=" flex flex-col py-20 max-sm:py-5 items-center ">
            <div>
              <div className="w-96 max-md:w-72 max-sm:w-52">
                <Image
                  src={Events}
                  className="w-full rounded-[50%] aspect-square"
                  alt=""
                />
              </div>
              <h3 className="py-6 text-5xl uppercase">Events</h3>
              <a
                href=""
                className="uppercase underline text-brown text-lg font-semibold tracking-wider"
              >
                See Spaces
              </a>
            </div>
          </div>
          <div className="w-[1px] max-md:hidden bg-brown"></div>
          <div className=" flex flex-col py-20 max-sm:py-5 items-center">
            <div>
              <div className="w-96 max-md:w-72 max-sm:w-52">
                <Image
                  src={Nightlife}
                  className="w-full rounded-[50%] aspect-square"
                  alt=""
                />
              </div>
              <h3 className="py-6 text-5xl uppercase">Nightlife</h3>
              <a
                href=""
                className="uppercase underline text-brown text-lg font-semibold tracking-wider"
              >
                See club info
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* section 3 */}
      <section className="px-10 py-32 flex flex-wrap max-sm:flex-col justify-center items-center max-w-7xl relative m-auto">
        <div className="max-w-1/2 max-md:max-w-full  ">
          <Image src={rooftopClub} alt="" />
          <Image
            src={sign}
            className="absolute max-w-3xs top-32 max-md:hidden left-[45%]"
            alt=""
          />
        </div>
        <div className="max-w-1/2 max-md:max-w-full p-12 max-md:p-5 max-sm:p-2 text-center">
          <h2 className="text-center text-7xl max-sm:text-5xl uppercase">
            Rooftop
          </h2>
          <p className="p-10 max-sm:p-4 text-center font-futura">
            Perched above the city, our Rooftop offers the perfect setting for
            golden hour drinks or a seamless transition into the night. Join us
            Fridays and Saturdays from 3pm ‘til late, with curated
            entertainment, casual bookings available throughout, and a full
            kitchen menu served from 4pm to midnight.
          </p>
          <div className="flex flex-col gap-12 justify-center items-center">
            <button className="uppercase px-15 bg-brown py-1 border border-brown hover:bg-white-cus hover:text-brown text-white">
              Rooftop info
            </button>
            <button className="uppercase px-15 hover:bg-brown py-1 border border-brown bg-white-cus text-brown hover:text-white">
              RESERVATIONS
            </button>
          </div>
        </div>
        <span className="text-[200px] max-lg:text-[150px] max-md:text-[90px] max-sm:text-[50px] max-sm:hidden text-white-cus/80 absolute bottom-5 left-0">
          ROOFTOP
        </span>
      </section>

      {/* section 4 */}
      <section className="px-10 pb-32 flex flex-wrap max-sm:flex-col justify-center items-center max-w-7xl relative m-auto">
        <div className="max-w-1/2 max-md:max-w-full p-12 max-md:p-5 max-sm:p-2 text-center">
          <h2 className="text-center text-7xl max-sm:text-5xl uppercase">
            Our Food
          </h2>
          <h3 className="text-center text-2xl pt-2 max-sm:text-xl uppercase">
            HEAD CHEF: ELIA DONATI
          </h3>
          <p className="p-10 max-sm:p-4 text-center font-futura">
            With an exciting new menu crafted by Elia Donati, The Albion Rooftop
            brings a fresh take on elevated dining, where bold flavours meet
            refined simplicity. Thoughtfully curated with high-quality
            ingredients and expert technique, each dish is designed to be both
            indulgent and effortlessly enjoyable.
          </p>
          <div className="flex flex-col gap-12 justify-center items-center">
            <button className="uppercase px-15 bg-brown py-1 border border-brown hover:bg-white-cus hover:text-brown text-white">
              SEE MENU
            </button>
          </div>
        </div>
        <div className="max-w-1/2 max-md:max-w-full  ">
          <Swiper modules={[EffectFade]} effect="fade">
            {[food_1, food_2, food_3, food_4, food_5].map((foodImage) => (
              <SwiperSlide key={foodImage.src}>
                <Image
                  src={foodImage}
                  alt="Food"
                  className="w-full rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="">
          <Image
            src={foodChepsign}
            className="absolute w-7/12 bottom-0 right-0 z-10 max-md:hidden"
            alt=""
          />
        </div>
      </section>

      {/* section 5 */}
      <section>
        <div className="h-[80vh]">
          <Image
            src={RooftopImage}
            className="w-full h-full object-cover"
            alt=""
          />
        </div>
      </section>

      {/* section 6 */}
      <div className="bg-blue/90">
        <section className="px-10  py-32 flex flex-wrap max-sm:flex-col justify-center items-center max-w-7xl relative m-auto">
          <div className="max-w-1/2 relative  max-md:max-w-full  ">
            <div className="w-full">
              <Image
                src={rooftopVenu}
                className="h-[95vh] object-cover w-full"
                alt=""
              />
            </div>
            <Image
              src={EventsSign}
              className="absolute  -top-10 max-md:hidden -left-10"
              alt=""
            />
          </div>
          <div className="max-w-1/2 max-md:max-w-full p-12 max-md:p-5 max-sm:p-2 text-center">
            <h2 className="text-center text-7xl text-white-cus max-sm:text-5xl uppercase">
              Functions & Events
            </h2>
            <h3 className="text-center text-2xl pt-2 text-white-cus max-sm:text-xl uppercase">
              CRAFTED FOR EVERY OCCASION
            </h3>
            <p className="p-10 max-sm:p-4 text-center text-white-cus font-futura">
              The Albion’s versatile design lends itself beautifully to
              everything from intimate gatherings to large-scale cocktail
              events. Our dedicated team is committed to delivering exceptional
              experiences, offering thoughtfully curated canapés and premium
              beverages tailored to your occasion – ensuring every event is as
              seamless as it is memorable.
            </p>
            <div className="flex flex-col gap-12 justify-center items-center">
              <button className="uppercase px-32 bg-brown py-5 font-semibold font-futura tracking-widest border-2 border-brown hover:bg-transparent hover:text-brown text-white">
                View spaces
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSec;
