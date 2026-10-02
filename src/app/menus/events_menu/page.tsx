"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const eventMenuPages = [
  {
    src: "/menu/events_menu/Cornerstone Event Menus_page-0001.jpg",
    alt: "Cornerstone Pub events menu page 1 - catering packages and function dining options for celebrations and corporate events in Port Melbourne",
  },
  {
    src: "/menu/events_menu/Cornerstone Event Menus_page-0002.jpg",
    alt: "Cornerstone Pub events menu page 2 - catering packages and function dining options for celebrations and corporate events in Port Melbourne",
  },
  {
    src: "/menu/events_menu/Cornerstone Event Menus_page-0003.jpg",
    alt: "Cornerstone Pub events menu page 3 - canapé selections, grazing tables, and event catering menus for functions",
  },
  {
    src: "/menu/events_menu/Cornerstone Event Menus_page-0004.jpg",
    alt: "Cornerstone Pub events menu page 4 - complete event catering menu with beverage packages and dining options for functions",
  },
  {
    src: "/menu/events_menu/Cornerstone Event Menus_page-0005.jpg",
    alt: "Cornerstone Pub events menu page 4 - complete event catering menu with beverage packages and dining options for functions",
  },
  {
    src: "/menu/events_menu/Cornerstone Event Menus_page-0006.jpg",
    alt: "Cornerstone Pub events menu page 4 - complete event catering menu with beverage packages and dining options for functions",
  },
];

export default function page() {
  return (
    <div
      className="pt-24 max-md:pt-16 bg-contain bg-fixed"
      style={{ backgroundImage: "url(/menu/menuBg-optimized.webp)" }}
    >
      <h1 className="sr-only">The Cornerstone Pub functions and events menu</h1>
      <div className="w-[96vw] max-lg:w-[72vw] max-md:w-[84vw] max-sm:w-[94vw] m-auto pb-24">
        <Swiper
          spaceBetween={24}
          slidesPerGroup={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {eventMenuPages.map((page) => (
            <SwiperSlide key={page.src}>
              <div className="relative h-[72vh] md:h-[80vh]">
                <Image src={page.src} alt={page.alt} fill sizes="(max-width: 768px) 94vw, (max-width: 1024px) 72vw, 32vw" className="object-contain" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="fixed right-5 bottom-5">
        <button className=" animate-bounce">
          <a
            href="/menu/events_menu/Cornerstone Event Menus.pdf"
            download="Cornerstone_Events_Menu.pdf"
            className="py-4 px-12 text-white font-semibold  bg-brown"
          >
            Grab the Menu
          </a>
        </button>
      </div>
    </div>
  );
}
