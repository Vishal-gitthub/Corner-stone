"use client";

import IGGrid from "../components/whats-on/IGGrid";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar, Autoplay } from "swiper/modules";

export default function Page() {
  const offerings = [
    {
      path: "/home/rooftopVenu.jpg",
      heading: "Now Open 6 Days",
      subHead: "Midday – 10 PM",
      desc: "Join us six days a week for great food, refreshing drinks, and relaxed rooftop vibes. Your perfect spot to unwind any day.",
    },
    {
      path: "/home/happy_hour.jpg",
      heading: "Happy Hours",
      subHead: "Weekdays | 5-7 PM",
      desc: "Make weekdays feel like the weekend! Unwind from 5–7pm with great drink deals and the perfect midweek break.",
    },
    {
      path: "/home/social_supper.jpg",
      heading: "Trivia Nights",
      subHead: "Wednesday | 7 PM",
      desc: "Gather your friends for a fun evening with trivia, great food, and good vibes every Wednesday.",
    },
    {
      path: "/club/band.webp",
      heading: "Friday Big Band Nights",
      subHead: "Fridays | 8PM – 11PM",
      desc: "Ease into the weekend with rotating bands, smooth rhythms, and great vibes.",
      
    },
    {
      path: "/whatson/10948067.jpg",
      heading: "Saturday Groove Sessions",
      subHead: "Saturdays | 6PM – 9PM",
      desc: "Enjoy live tunes, great food, and laid-back ambience for your perfect Saturday evening.",
     
    },
    {
      path: "/whatson/dj.jpg",
      heading: "DJ Saturday Nights",
      subHead: "Saturdays | 9PM onwards",
      desc: "High-energy DJ sets and vibrant beats to elevate your Saturday nights.",
    },
    {
      path: "/whatson/SundayChillSessions.jpg",
      heading: "Sunday Chill Sessions",
      subHead: "Sundays | 3PM – 6PM",
      desc: "Relax with smooth tunes, tasty bites, and sunset drinks.",
    },
    {
      path: "/home/Food_4.jpg",
      heading: "$18.90 Lunch Menu",
      subHead: "Every Day of the Week",
      desc: "Tasty, quick, and unbeatable value — your go-to lunch for just $18.90.",
    },
    {
      path: "/whatson/18.9_banner.png",
      heading: "What’s On This Week",
      subHead: "Entertainment Every Week",
      desc: "Open Mic Tuesday, Trivia Wednesday, Live Music Friday, Latin Night Saturday, and Sunday Roast.",
      btn: "View Menu",
      imgSrc: "https://cornerstonepub.com.au/whatson/main_meals_18.9.jpg",
    },
    {
      path: "/whatson/mothers day.png",
      heading: "Mother’s Day Special",
      subHead: "Celebrate Mum in Style",
      desc: "Treat Mum to a memorable dining experience with delicious food and great vibes.",
      btn: "View Menu",
      imgSrc:
        "https://cornerstonepub.com.au/popups/MothersDay-%20At%20corner%20Stone%20pub.jpg",
    },
  ];

  return (
    <div>
      <main
        style={{ backgroundImage: "url(/home/BgTexture.jpg)" }}
        className="w-full min-h-screen bg-white/70"
      >
        <div className="py-12 md:py-20 mt-22 sm:mt-12">
          <div className="container-responsive">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl uppercase text-blue font-bold mb-4 heading-aleo">
                What&apos;s On
              </h1>
              <p className="text-lg md:text-xl text-brown font-medium heading-aleo">
                Discover our latest events and special offers
              </p>
              <div className="w-24 h-1 bg-brown mx-auto my-6"></div>
            </div>

            {/* Swiper */}
            <Swiper
              modules={[Scrollbar, Autoplay]}
              spaceBetween={30}
              loop
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              scrollbar={{ hide: true }}
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {offerings.map((data, index) => (
                <SwiperSlide key={`${data.path}-${index}`}>
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg card-hover">
                    {/* Image */}
                    <div className="relative h-48 md:h-56">
                      <Image
                        src={data.path}
                        alt={data.heading}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>

                    {/* Content */}
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

                      {/* Button (only if exists) */}
                      {data?.btn && data?.imgSrc && (
                        <a
                          href={data.imgSrc}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block py-2 px-6 text-white text-sm bg-[#8B4513] hover:bg-opacity-90 transition-all duration-300 btn-hover rounded-md font-medium font-lexend"
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

        <IGGrid />
      </main>
    </div>
  );
}