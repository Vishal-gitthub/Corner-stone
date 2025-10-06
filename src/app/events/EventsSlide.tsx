"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import Image from "next/image";

export default function SwiperEvents() {
  return (
    <Swiper 
      modules={[Autoplay]}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {/* VIP Room */}
      <SwiperSlide>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <figure className="order-2 lg:order-1">
            <Image
              src="/events/VIP-Room-1.webp"
              alt="VIP Room at The Albion Rooftop"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </figure>
          <div className="order-1 lg:order-2 flex flex-col gap-4 md:gap-6">
            <h3 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold">
              VIP Room
            </h3>
            <p className="text-xl md:text-2xl text-white font-medium">
              Capacity: 40 guests standing
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              Experience luxury and privacy in our exclusive VIP Room, perfect for small gatherings, networking, or private celebrations.
            </p>
          </div>
        </article>
      </SwiperSlide>

      {/* Premium Experience */}
      <SwiperSlide>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <figure>
            <Image
              src="/events/VIP-Room-1.webp"
              alt="Premium VIP Experience"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </figure>
          <div className="flex flex-col gap-4 md:gap-6">
            <h3 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold">
              Premium Experience
            </h3>
            <p className="text-xl md:text-2xl text-white font-medium">
              Exclusive VIP Service
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              Indulge in our premium service with personalized attention, curated drinks, and an unforgettable rooftop vibe.
            </p>
          </div>
        </article>
      </SwiperSlide>

      {/* Intimate Celebrations */}
      <SwiperSlide>
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <figure className="order-2 lg:order-1">
            <Image
              src="/events/VIP-Room-1.webp"
              alt="Private VIP Room"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg"
            />
          </figure>
          <div className="order-1 lg:order-2 flex flex-col gap-4 md:gap-6">
            <h3 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold">
              Perfect for
            </h3>
            <p className="text-xl md:text-2xl text-white font-medium">
              Intimate Celebrations
            </p>
            <p className="text-lg md:text-xl text-gray-300">
              Celebrate life’s special moments in a cozy, elegant setting designed for close friends and cherished memories.
            </p>
          </div>
        </article>
      </SwiperSlide>
    </Swiper>
  );
}
