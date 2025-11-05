"use client";

import Banner from "../components/Home/Banner";
import Image from "next/image";

import Link from "next/link";
import type { Metadata } from "next";
import FoodCarousel from "../components/Home/FoodCarousel";
import FunctionEnquiryForm from "./FunctionEnquiryForm";

// export const metadata: Metadata = {
//   title: "Functions & Events | The Albion Rooftop",
//   description:
//     "Host unforgettable functions and events at The Albion Rooftop – VIP room, curated menus, premium beverages, décor and photography packages.",
// };

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useState } from "react";

export default function Page() {
  const [popUp, setPopUp] = useState(false);
  const toggle = () => {
    setPopUp(!popUp);
  };
  return (
    <main
      className="font-lexend"
      style={{ backgroundImage: "url(/home/BgTexture.jpg)" }}
    >
      {/* <section aria-label="Hero video banner">
        <div>
          <section className="">
            <video autoPlay muted loop className="h-screen w-full object-cover">
              <source src="/events/event.mp4" />
            </video>
          </section>
        </div>
      </section> */}

      <section
        className="py-16 md:py-24 lg:py-32"
        aria-labelledby="events-intro-heading"
      >
        <div className="container-responsive max-w-4xl text-center flex flex-col gap-4 md:gap-6">
          <h1
            id="events-intro-heading"
            className="text-4xl md:text-6xl lg:text-8xl uppercase font-bold heading-aleo"
          >
            Functions & Events
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl uppercase text-brown font-medium heading-aleo">
            Melbourne’s versatile function venue for every celebration
          </p>
          <div className="w-24 h-1 bg-brown mx-auto my-4"></div>
          <p className="text-center text-base md:text-lg leading-relaxed text-lexend">
            At <strong>The Cornerstone</strong>, every occasion becomes
            unforgettable. From milestone birthdays and engagements to corporate
            functions and private parties, our stylish spaces — including a
            vibrant outdoor area — provide the perfect backdrop for any event.
          </p>
          <p className="text-center text-base md:text-lg leading-relaxed text-lexend mt-4">
            We cater for up to <strong>100 guests cocktail-style</strong> or
            <strong> 60 seated</strong>, offering chef-crafted menus, premium
            drinks, and seamless service to make your celebration effortless and
            memorable.
          </p>
          <p className="text-center text-base md:text-lg leading-relaxed text-lexend mt-4">
            Elevate your event with optional décor and photography packages —
            including custom signage, balloon garlands, and floral styling —
            brought together by our dedicated events team.
          </p>
          <div
            className="flex w-full gap-4 md:gap-5 justify-center items-center mt-6"
            role="group"
            aria-label="Event enquiries"
          >
            <Link
              href="/whatson"
              className="py-3 px-6 md:px-10 hover:text-white font-aleo text-blue bg-transparent border-2 border-brown hover:bg-brown transition-all duration-300 btn-hover rounded-md font-medium"
              aria-label="See what's on"
            >
              What&apos;s On
            </Link>
          </div>
        </div>
      </section>

      <FunctionEnquiryForm />

      {/* <section
        className="bg-blue py-16 md:py-24 lg:py-32"
        aria-labelledby="spaces-heading"
      >
        <div className="container-responsive">
          <h2
            id="spaces-heading"
            className="text-center text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-12 md:mb-16 heading-aleo"
          >
            Event Spaces
          </h2>

          <div className="space-y-16 md:space-y-20">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <figure className="order-2 lg:order-1">
                <Image
                  src="/events/VIP-Room-1.webp"
                  alt="VIP Room at The Albion Rooftop"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg image-optimized"
                />
              </figure>
              <div className="order-1 lg:order-2 flex flex-col gap-4 md:gap-6">
                <h3 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold heading-aleo">
                  VIP Room
                </h3>
                <p className="text-xl md:text-2xl text-white font-medium">
                  Capacity: 40 guests standing
                </p>
                <p className="text-white text-base md:text-lg leading-relaxed">
                  The VIP Room hosts groups of up to 40 guests standing with
                  mini bar, fireplace, private entrance and bathrooms. This
                  elegant space is ideal for intimate birthday and hens
                  celebrations, or indulging VIP guests for an exclusive
                  closed-door event.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">
                    Mini Bar
                  </span>
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">
                    Fireplace
                  </span>
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">
                    Private Entrance
                  </span>
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">
                    Private Bathrooms
                  </span>
                </div>
              </div>
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <figure className="order-1">
                <Image
                  src="/events/VIP-Room-1.webp"
                  alt="VIP Room seating and bar area"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg image-optimized"
                />
              </figure>
              <div className="order-2 flex flex-col gap-4 md:gap-6">
                <h3 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold heading-aleo">
                  Premium Experience
                </h3>
                <p className="text-xl md:text-2xl text-white font-medium">
                  Exclusive VIP Service
                </p>
                <p className="text-white text-base md:text-lg leading-relaxed">
                  Experience luxury like never before with our premium VIP
                  service. Dedicated staff, personalized attention, and
                  exclusive amenities ensure your event is nothing short of
                  extraordinary.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">
                    Dedicated Staff
                  </span>
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">
                    Premium Service
                  </span>
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">
                    Exclusive Access
                  </span>
                </div>
              </div>
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <figure className="order-2 lg:order-1">
                <Image
                  src="/events/VIP-Room-1.webp"
                  alt="Private VIP Room entrance and ambiance"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg image-optimized"
                />
              </figure>
              <div className="order-1 lg:order-2 flex flex-col gap-4 md:gap-6">
                <h3 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold heading-aleo">
                  Perfect for
                </h3>
                <p className="text-xl md:text-2xl text-white font-medium">
                  Intimate Celebrations
                </p>
                <p className="text-white text-base md:text-lg leading-relaxed">
                  Whether it&apos;s a milestone birthday, hens party, or
                  corporate celebration, our VIP space provides the perfect
                  intimate setting for your special occasion with unmatched
                  privacy and elegance.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">
                    Birthday Parties
                  </span>
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">
                    Hens Celebrations
                  </span>
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">
                    Corporate Events
                  </span>
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">
                    Private Functions
                  </span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section> */}

      <section className="relative" aria-label="Social supper image">
        <div className="w-full h-[50vh] md:h-[70vh] lg:h-screen">
          <Image
            src="/events/12760.jpg"
            className="object-cover"
            fill
            sizes="100vw"
            alt="Social supper event at The Cornerstone Pub featuring guests enjoying dining, drinks, and social gathering in Port Melbourne"
            priority
          />
        </div>
      </section>

      <section
        className="py-16 md:py-24 lg:py-32"
        aria-labelledby="decor-heading"
      >
        <div className="container-responsive max-w-4xl text-center flex flex-col gap-6 md:gap-8">
          <h2
            id="decor-heading"
            className="text-3xl md:text-5xl lg:text-6xl uppercase font-bold heading-aleo"
          >
            PHOTOGRAPHY & <br className="hidden md:block" /> EVENT DÉCOR HIRE
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl uppercase text-brown font-medium">
            Elevate Your Event
          </p>
          <div className="w-24 h-1 bg-brown mx-auto my-4"></div>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              Add the perfect finishing touches to your event at The Cornerstone
              with our optional photography and décor packages. Capture every
              memory with a professional photographer, ensuring your celebration
              is beautifully documented from start to finish. <br /> <br />{" "}
              Enhance your styling with our décor hire options - including
              elegant archways, custom signage, statement balloon displays,
              floral arrangements, and more. Whether you prefer a subtle,
              sophisticated touch or a full decorative setup, our team will help
              bring your vision to life with flawless coordination and striking
              presentation.
            </p>
          </div>
          <div className="flex w-full gap-4 md:gap-5 justify-center items-center mt-6">
            <Link
              href="/contact?type=decor"
              className="py-3 px-6 md:px-10 text-white hover:text-blue font-aleo bg-brown hover:bg-transparent border-2 border-brown transition-all duration-300 btn-hover rounded-md font-medium"
              aria-label="Enquire about décor and photography packages"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="food-heading"
        className="py-16 md:py-24 lg:py-32"
      >
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <h2
                id="food-heading"
                className="text-4xl md:text-5xl lg:text-7xl uppercase font-bold heading-aleo"
              >
                Our Food
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl uppercase text-brown font-medium">
                Head Chef: STUART RUSS
              </p>
              <div className="w-24 h-1 bg-brown mx-auto lg:mx-0 my-4"></div>
              <p className="text-base md:text-lg leading-relaxed">
                With a vibrant new menu crafted by Stuart Russ, The Cornerstone
                offers a modern twist on pub dining, where bold flavors meet
                relaxed sophistication. Made with high-quality ingredients and
                expert care, each dish is designed to be both satisfying and
                effortlessly enjoyable.
              </p>
              <div className="flex justify-center lg:justify-start mt-8">
                <Link
                  href="/menus"
                  className="uppercase px-8 md:px-12 py-3 md:py-4 bg-brown border-2 border-brown hover:bg-transparent hover:text-brown text-white transition-all duration-300 btn-hover font-aleo rounded-md font-medium"
                  aria-label="View our menu"
                >
                  See Menu
                </Link>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <FoodCarousel />
            </div>
          </div>
        </div>
      </section>
      <div className="fixed right-5 bottom-5">
        <button className=" animate-bounce">
          <a
            href="/menu/events_menu/Cornerstone Event Menus.pdf"
            download="Cornerstone_Events_Menu.pdf"
            className="py-4 px-12 text-white font-semibold  bg-brown"
          >
            Explore the Menu
          </a>
        </button>
      </div>
      <div className={`${popUp ? "hidden" : "block"}`}>
        <div className="fixed inset-0 bg-opacity-95 flex items-center justify-center z-50 overflow-auto">
          <div className="max-w-5xl w-full bg-white p-4 flex relative justify-center rounded-lg">
            <Swiper
              spaceBetween={30}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              modules={[Navigation, Pagination]}
            >
              <SwiperSlide>
                <img
                  src="/menu/events_menu/Cornerstone Event Menus_page-0001.jpg"
                  alt="Cornerstone Pub events menu page 1 - function and event catering packages with canapés, grazing tables, and dining options for celebrations in Port Melbourne"
                  className="w-full max-h-[80vh] object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/menu/events_menu/Cornerstone Event Menus_page-0002.jpg"
                  alt="Cornerstone Pub events menu page 2 - event catering menu featuring chef-crafted dishes and beverage packages for functions and corporate events"
                  className="w-full max-h-[80vh] object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/menu/events_menu/Cornerstone Event Menus_page-0003.jpg"
                  alt="Cornerstone Pub events menu page 3 - complete event menu with canapé selections, mains, desserts, and premium beverage options for celebrations"
                  className="w-full max-h-[80vh] object-contain"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="/menu/events_menu/Cornerstone Event Menus_page-0004.jpg"
                  alt="Cornerstone Pub events menu page 4 - final page of event catering menu with additional options, pricing, and booking information for functions"
                  className="w-full max-h-[80vh] object-contain"
                />
              </SwiperSlide>
            </Swiper>

            <button
              onClick={toggle}
              className="absolute bg-brown m-4 text-white z-2 top-0 px-4 py-2 rounded-lg right-0"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
