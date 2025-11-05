"use client";

import Image from "next/image";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay } from "swiper/modules";
export default function Page() {
  const offerings = [
    {
      path: "/home/rooftopVenu.jpg",
      heading: "Midweek Mingle",
      subHead: "Wednesdays | Midday – 11 PM",
      desc: "Unwind midweek with refreshing cocktails, comfort food, and live beats — the perfect way to recharge before the weekend!",
    },
    {
      path: "/home/social_supper.jpg",
      heading: "Trivia nights",
      subHead: "Wednesday | 6:30 PM – 10 PM",
      desc: "Gather your friends for an unforgettable dining experience every Wednesday evening, featuring chef specials and great vibes till late.",
    },
    {
      path: "/home/happy_hour.jpg",
      heading: "Happy Hours",
      subHead: "Weekdays | 5-7 PM",
      desc: "Make Weekdays Feel Like the Weekend! Unwind from 5–7pm with $5 pots, $10 pints, $8 wines, and $8 spirits at Cornerstone Port Melbourne. Raise a glass to good company, great drinks, and the perfect midweek break.",
    },
    // {
    //   path: "/whatson/saturdaysinsky.jpg",
    //   heading: "Saturdays in the Sky",
    //   subHead: "Saturdays | 3–8 PM",
    //   desc: "Book a $500 bar tab and get a $100 top-up! Celebrate your Saturday with skyline views, curated drinks, and the best crowd in town.",
    // },
    {
      path: "/whatson/SundayChillSessions.jpg",
      heading: "Sunday Chill Sessions",
      subHead: "Sundays | Midday – 11 PM",
      desc: "Relax and recover with smooth tunes, tasty bites, and sunset sips — your perfect weekend wind-down.",
    },
  ];

  return (
    <main
      style={{ backgroundImage: "url(/home/BgTexture.jpg)" }}
      className="w-full min-h-screen bg-white/70"
    >
      <div className="py-12 md:py-20 mt-22 sm:mt-12">
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
            modules={[Scrollbar, Autoplay]}
            className="mySwiper"
            spaceBetween={30}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
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
                    <h2 className="text-2xl md:text-3xl font-bold text-blue heading-aleo">
                      {data.heading}
                    </h2>
                    <h3 className="text-lg md:text-xl text-brown font-medium heading-aleo">
                      {data.subHead}
                    </h3>
                    <p className="text-sm md:text-base text-blue leading-relaxed text-lexend">
                      {data.desc}
                    </p>
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
