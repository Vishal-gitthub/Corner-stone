"use client";
import Image from "next/image";
import bgTexture from "../../../../public/home/BgTexture.jpg";
import rooftop from "../../../../public/home/outdoor.jpg";
import Events from "../../../../public/home/Events.webp";
import Nightlife from "../../../../public/home/nightlife.webp";
import rooftopClub from "../../../../public/home/rooftopClub.jpg";
import sign from "../../../../public/home/Panoramic+Views.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import food_1 from "../../../../public/home/Food_1.webp";
import food_2 from "../../../../public/home/Food_2.webp";
import food_3 from "../../../../public/home/Food_3.webp";
import food_4 from "../../../../public/home/Food_4.webp";
import food_5 from "../../../../public/home/Food_5.webp";
import foodChepsign from "../../../../public/home/Food-chefSign.png";
import RooftopImage from "../../../../public/home/Albion+Rooftop,+function+venue+spaces+(19).jpg";
import EventsSign from "../../../../public/home/EVENTS.png";
import rooftopVenu from "../../../../public/home/rooftopVenu.jpg";
import "swiper/css/effect-fade";
const AboutSec = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgTexture.src})` }}
      className="pt-32 text-center"
    >
      {/* section 1 */}
      <div className="max-w-7xl m-auto px-32 max-md:px-16 max-sm:px-3 pb-32">
        <span className="uppercase text-center font-aleo text-5xl text-brown">
          Welcome to The Cornerstone Pub
        </span>
        <h2 className="heading-aleo text-2xl pt-5 max-w-4xl text-center m-auto">
          Discover South Melbourne’s favourite destination for good times, great
          food, and unforgettable events. Whether you’re here for a laid-back
          afternoon in our outdoor space or a vibrant night out with music and
          drinks, The Cornerstone sets the perfect scene for every occasion.
        </h2>
      </div>

      {/* Section 2 */}
      <section className="border-t border-b ">
        <div className="flex justify-around max-md:flex-col max-md:justify-center items-center">
          <div className=" flex flex-col py-20 max-sm:py-5 items-center ">
            <div className="flex flex-col items-center">
              <div className="w-96 max-md:w-72 max-sm:w-52">
                <Image
                  src={rooftop}
                  className="w-full rounded-[50%] aspect-square"
                  alt=""
                />
              </div>
              <h3 className="py-6 text-5xl max-sm:text-3xl uppercase heading-aleo">
                Outdoor Space
              </h3>
              <a
                href=""
                className="uppercase underline font-lexend text-brown text-lg font-semibold tracking-wider"
              >
                See Outdoor
              </a>
            </div>
          </div>
          <div className="w-[1px] max-md:hidden bg-brown"></div>
          <div className=" flex flex-col py-20 max-sm:py-5 items-center ">
            <div className="flex flex-col items-center">
              <div className="w-96 max-md:w-72 max-sm:w-52">
                <Image
                  src={Events}
                  className="w-full rounded-[50%] aspect-square"
                  alt=""
                />
              </div>
              <h3 className="py-6 text-5xl max-sm:text-3xl uppercase heading-aleo">
                Events
              </h3>
              <a
                href=""
                className="uppercase font-lexend underline text-brown text-lg font-semibold tracking-wider"
              >
                See Spaces
              </a>
            </div>
          </div>
          <div className="w-[1px] max-md:hidden bg-brown"></div>
          <div className=" flex flex-col py-20 max-sm:py-5 items-center">
            <div className="flex flex-col items-center">
              <div className="w-96 max-md:w-72 max-sm:w-52">
                <Image
                  src={Nightlife}
                  className="w-full rounded-[50%] aspect-square"
                  alt=""
                />
              </div>
              <h3 className="py-6 text-5xl max-sm:text-3xl uppercase heading-aleo">
                Nightlife
              </h3>
              <a
                href=""
                className="uppercase font-lexend underline text-brown text-lg font-semibold tracking-wider"
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
          <Image src={rooftopClub} alt="" className="rounded-md" />
          {/* <Image
            src={sign}
            className="absolute max-w-3xs top-32 max-md:hidden left-[45%]"
            alt=""
          /> */}
        </div>
        <div className="max-w-1/2 max-md:max-w-full p-12 max-md:p-5 max-sm:p-2 text-center">
          <h2 className="font-aleo text-center text-7xl max-sm:text-5xl uppercase">
            Outdoor Space
          </h2>
          <p className="p-10 max-sm:p-4 text-center font-lexend">
            Set in the heart of the city, our Outdoor area offers the perfect
            setting for golden hour drinks or an easy transition into the night.
            Join us Fridays and Saturdays from 3pm ‘til late, with curated
            entertainment, casual bookings available throughout, and a full
            kitchen menu served from 4pm to midnight.
          </p>
          <div className="flex flex-col gap-5 justify-center items-center">
            <button className="uppercase px-10 transition-all duration-300 rounded-md bg-brown font-lexend py-1 border border-brown hover:bg-white-cus hover:text-brown text-white w-full max-w-xs">
              Outdoor info
            </button>
            <a
              href="https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne?restref=304496&lang=en-AU&ot_source=Restaurant%20websiteF"
              className="uppercase  px-10 rounded-md transition-all duration-300 hover:bg-brown font-lexend py-1 border border-brown bg-white-cus text-brown hover:text-white w-full max-w-xs text-center"
            >
              Book a Table
            </a>
          </div>
        </div>
        <span className="text-[200px] max-lg:text-[150px] font-aleo max-md:text-[90px] max-sm:text-[50px] max-sm:hidden text-brown absolute bottom-10 left-9">
          OUTDOOR
        </span>
      </section>

      {/* section 4 */}
      <section className="px-10 pb-32 flex flex-wrap max-sm:flex-col justify-center items-center max-w-7xl relative m-auto">
        <div className="max-w-1/2 max-md:max-w-full p-12 max-md:p-5 max-sm:p-2 text-center">
          <h2 className="font-aleo text-center text-7xl  max-sm:text-5xl uppercase">
            Our Food
          </h2>
          <h3 className="text-center font-aleo text-2xl pt-2 max-sm:text-xl uppercase">
            HEAD CHEF: ELIA DONATI
          </h3>
          <p className="p-10 max-sm:p-4 text-center font-lexend">
            With a vibrant new menu led by Elia Donati, The Cornerstone brings a
            fresh twist to modern pub dining - where bold flavours meet relaxed
            sophistication. Every dish is thoughtfully prepared with quality
            ingredients and a passion for simplicity, making each bite both
            comforting and memorable.
          </p>
          <div className="flex flex-col gap-12 justify-center items-center">
            <button className="uppercase transition-all duration-300 px-10 rounded-md bg-brown py-1 border border-brown hover:bg-white-cus hover:text-brown text-white w-full max-w-xs">
              SEE MENU
            </button>
          </div>
        </div>
        <div className="max-w-1/2 max-md:max-w-full  ">
          <Swiper
            modules={[EffectFade, Autoplay]}
            effect="fade"
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {[food_1, food_2, food_3, food_4, food_5].map((foodImage) => (
              <SwiperSlide key={foodImage.src}>
                <Image
                  src={foodImage}
                  alt="Food"
                  className="w-full rounded-md"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="">
          <h2 className="text-[200px] max-lg:text-[150px] font-aleo max-md:text-[90px] z-2 max-sm:text-[50px] max-sm:hidden text-brown absolute bottom-10 right-9">
            FOOD
          </h2>
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
      <div className="bg-blue">
        <section className="px-10  py-32 flex flex-wrap max-sm:flex-col justify-center items-center max-w-7xl relative m-auto">
          <div className="max-w-1/2 relative  max-md:max-w-full  ">
            <div className="w-full">
              <Image
                src={rooftopVenu}
                className="h-[95vh] object-cover w-full"
                alt=""
              />
            </div>
            <h2
              className="absolute leading-1 uppercase top-0 max-md:hidden -left-10  
            text-[150px] max-lg:text-[100px] font-aleo max-md:text-[80px] z-2 max-sm:text-[50px] max-sm:hidden text-brown
            "
            >
              Events
            </h2>
          </div>
          <div className="max-w-1/2 max-md:max-w-full p-12 max-md:p-5 max-sm:p-2 text-center">
            <h2 className="heading-aleo text-center text-7xl text-white-cus max-sm:text-5xl uppercase">
              Functions & Events
            </h2>
            <h3 className="heading-aleo text-center text-2xl pt-2 text-white-cus max-sm:text-xl uppercase">
              Crafted for Every Occasion
            </h3>
            <p className="p-10 max-sm:p-4 text-center text-white-cus text-lexend">
              The Cornerstone’s versatile spaces are perfect for everything from
              relaxed catch-ups to grand celebrations. Our dedicated team
              ensures every event runs seamlessly, with carefully curated menus,
              premium drinks, and warm hospitality - creating memorable moments
              that bring people together.
            </p>
            <div className="flex flex-col gap-12 justify-center items-center">
              <button className="uppercase px-12 max-sm:px-6 rounded-md bg-brown py-2 font-semibold font-lexend transition-all duration-300 tracking-widest border-2 border-brown hover:bg-transparent hover:text-brown text-white ">
                View Spaces
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutSec;
