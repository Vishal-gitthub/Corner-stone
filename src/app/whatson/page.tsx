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
      heading: "Now Open 7 Days",
      subHead: "Every Day | Midday – 10 PM",
      desc: "We're now open all week long! Enjoy refreshing cocktails, comfort food, and great vibes — your go-to spot any day of the week.",
    },
    {
      path: "/home/happy_hour.jpg",
      heading: "Happy Hours",
      subHead: "Weekdays | 5-7 PM",
      desc: "Make Weekdays Feel Like the Weekend! Unwind from 5–7pm with $5 pots, $10 pints, $8 wines, and $8 spirits at Cornerstone Port Melbourne. Raise a glass to good company, great drinks, and the perfect midweek break.",
    },
    {
      path: "/home/social_supper.jpg",
      heading: "Trivia nights",
      subHead: "Wednesday | 7 PM",
      desc: "Gather your friends for an unforgettable dining experience every Wednesday evening, featuring chef specials and great vibes till late.",
    },
    {
      path: "/whatson/8.jpg",
      heading: "Friday Band Night",
      subHead: "FRIDAYS | 8PM to 11PM live tunes.",
      desc: "Ease into the weekend with rotating bands, smooth rhythms, tasty bites, and good vibes — the perfect Friday night out.",
      buttonText: "View Event",
    },
    {
      path: "/whatson/10948067.jpg",
      heading: "Saturday groove sessions",
      subHead: "SATURDAYS | 6PM to 9PM live tunes.",
      desc: "Settle into your Saturday evening with live tunes, great food, and laid-back ambience — your ideal weekend unwind.",
      buttonText: "View Event",
    },
    {
      path: "/whatson/192828.jpg",
      heading: "DJ's Saturday nights",
      subHead: "SATURDAYS | 9PM - Onwards",
      desc: "Get ready for high-energy DJ sets, vibrant beats, and late-night vibes — the perfect way to elevate your Saturday nights.",
    },
    {
      path: "/whatson/SundayChillSessions.jpg",
      heading: "Sunday chill sessions",
      subHead: "SUNDAYS | 3PM to 6PM live tunes.",
      desc: "Relax and recover with smooth tunes, tasty bites, and sunset sips — your perfect weekend wind-down.",
    },
    {
      path: "/home/Food_4.jpg",
      heading: "$15 Lunch Menu",
      subHead: "Every Day of the Week",
      desc: "Tasty, quick, and unbeatable value — your new go-to lunch is here for just $12.",
      btn: "View Menu",
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
                    {data && (
                      <a
                        href="#"
                        className={`${
                          data && data.btn ? "inline-block" : "hidden"
                        } py-2 px-6 text-white text-sm bg-brown hover:bg-opacity-90 transition-all duration-300 btn-hover rounded-md font-medium font-lexend`}
                      >
                        {data.btn}
                      </a>
                    )}
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
