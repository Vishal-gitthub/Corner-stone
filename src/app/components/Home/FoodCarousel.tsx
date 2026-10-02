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

const foodImages = [
  { src: food_1, alt: "Grilled steak with broccolini at The Cornerstone Pub" },
  { src: food_2, alt: "Filled pasta dish served at The Cornerstone Pub" },
  { src: food_3, alt: "Mixed vegetable dish with a drink at The Cornerstone Pub" },
  { src: food_4, alt: "Glazed chicken wings served at The Cornerstone Pub" },
  { src: food_6, alt: "Bite-sized savoury tartlets at The Cornerstone Pub" },
  { src: food_8, alt: "Seafood bites served at The Cornerstone Pub" },
  { src: food_9, alt: "Individual salad bowls at The Cornerstone Pub" },
];

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
      {foodImages.map((foodImage) => (
        <SwiperSlide key={foodImage.src.src}>
          <div className="h-[80vh] mt-10 w-full">
            <Image
              src={foodImage.src}
              alt={foodImage.alt}
              sizes="(max-width: 768px) 100vw, 80vw"
              className="w-full rounded-tl-lg h-full object-contain"
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
