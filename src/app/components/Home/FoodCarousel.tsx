"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

// Swiper core styles
import "swiper/css";
import "swiper/css/effect-fade";

import food_1 from "../../../../public/home/Food_1.jpg";
import food_2 from "../../../../public/home/Food_2.jpg";
import food_3 from "../../../../public/home/Food_3.jpg";
import food_4 from "../../../../public/home/Food_4.jpg";
import food_5 from "../../../../public/home/Food_5.jpg";

export default function FoodCarousel() {
  return (
    <Swiper
      modules={[EffectFade, Autoplay]}
      effect="fade"
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      loop={true}
    >
      {[food_1, food_2, food_3, food_4, food_5].map((foodImage, index) => (
        <SwiperSlide key={foodImage.src}>
          <div className="h-[80vh] w-full">
            <Image
              src={foodImage}
              alt={`Cornerstone Pub signature dish by Head Chef Stuart Russ - modern Australian pub cuisine with bold flavors and seasonal ingredients in Port Melbourne`}
              className="w-full rounded-lg h-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
