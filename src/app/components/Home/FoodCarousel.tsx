"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCreative } from "swiper/modules";

// Swiper core styles
import "swiper/css";
import "swiper/css/effect-creative";

import food_1 from "../../../../public/home/Food_1.jpg";
import food_2 from "../../../../public/home/Food_2.jpg";
import food_3 from "../../../../public/home/Food_3.jpg";
import food_4 from "../../../../public/home/Food_4.jpg";
import food_6 from "../../../../public/home/Food_6.jpeg";
// import food_7 from "../../../../public/home/Food_7.jpeg";
import food_8 from "../../../../public/home/Food_8.jpeg";
import food_9 from "../../../../public/home/Food_9.jpeg";
// import food_10 from "../../../../public/home/Food_10.jpeg";
// import food_11 from "../../../../public/home/Food_11.jpeg";

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
      {[
        food_1,
        food_2,
        food_3,
        food_4,
        food_6,
        // food_7,
        food_8,
        food_9,
        // food_10,
        // food_11,
      ].map((foodImage, index) => (
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
