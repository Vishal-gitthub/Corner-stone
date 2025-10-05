"use client";

import Image from "next/image";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper/modules";
export default function Page() {
  const offerings = [
    {
      path: "/home/Food_1.webp",
      heading: "Saturdays in the Sky",
      subHead: "Saturdays 3-8pm",
      desc: "Redeem this exclusive offer with your Saturday Reservation by booking a $500 bar tab, and receive a $100 top up!",
    },
    {
      path: "/home/Food_2.webp",
      heading: "Happy Hour Specials",
      subHead: "Weekdays 4-6pm",
      desc: "Join us for our signature happy hour with premium cocktails, craft beers, and delicious bar snacks at unbeatable prices.",
    },
    {
      path: "/home/Food_3.webp",
      heading: "Live Music Nights",
      subHead: "Every Thursday",
      desc: "Experience the best local talent with our weekly live music sessions featuring acoustic sets and intimate performances.",
    },
  ];
  
  return (
    <main
      style={{ backgroundImage: "url(/home/BgTexture.jpg)" }}
      className="w-full min-h-screen bg-white/70"
    >
      <div className="py-12 md:py-20">
        <div className="container-responsive">
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase text-blue font-bold mb-4 heading-aleo">
              What&apos;s On
            </h1>
            <p className="text-lg md:text-xl text-brown font-medium heading-aleo">
              Discover our latest events and special offers
            </p>
            <div className="w-24 h-1 bg-brown mx-auto my-6"></div>
          </div>
          
          <Swiper
            scrollbar={{
              hide: true,
            }}
            modules={[Scrollbar]}
            className="mySwiper"
            spaceBetween={30}
            breakpoints={{
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
            {offerings.map((data, index) => (
              <SwiperSlide key={`${data.path}-${index}`}>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg card-hover">
                  <div className="relative h-48 md:h-56">
                    <Image
                      src={data.path}
                      fill
                      className="object-cover"
                      alt={data.heading}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6 space-y-4">
                    <h2 className="text-2xl md:text-3xl font-bold text-blue heading-aleo">{data.heading}</h2>
                    <h3 className="text-lg md:text-xl text-brown font-medium heading-aleo">{data.subHead}</h3>
                    <p className="text-sm md:text-base text-blue leading-relaxed text-lexend">{data.desc}</p>
                    <a
                      href="#"
                      className="inline-block py-2 px-6 text-white text-sm bg-brown hover:bg-opacity-90 transition-all duration-300 btn-hover rounded-md font-medium font-lexend"
                    >
                      View Event
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </main>
  );
}
