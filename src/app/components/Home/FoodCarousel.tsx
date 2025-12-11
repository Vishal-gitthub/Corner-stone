"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay, EffectCreative } from "swiper/modules";

// Swiper core styles
import "swiper/css";
import "swiper/css/effect-creative";

import food_1 from "../../../../public/home/Food_1.jpg";
import food_2 from "../../../../public/home/Food_2.jpg";
import food_3 from "../../../../public/home/Food_3.jpg";
import food_4 from "../../../../public/home/Food_4.jpg";

export default function FoodCarousel() {
  return (
    <Swiper
      grabCursor={true}
      modules={[EffectCreative, Autoplay]}
      effect="creative"
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {[food_1, food_2, food_3, food_4].map((foodImage, index) => (
        <SwiperSlide key={index}>
          <div className="h-[80vh] w-full">
            <Image
              src={foodImage}
              alt={`Cornerstone Pub signature dish by Head Chef Stuart Russ - modern Australian pub cuisine with bold flavors and seasonal ingredients in Port Melbourne`}
              className="w-full rounded-tl-lg h-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
