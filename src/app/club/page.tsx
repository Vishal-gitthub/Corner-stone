"use client";
import Image from "next/image";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Image1 from "../../../public/club/LoungePhoto2.jpg";
import Image2 from "../../../public/club/_85A7725.webp";
import Image3 from "../../../public/club/_85A7735.webp";
import Image4 from "../../../public/club/_85A7873.webp";

export default function Page() {
  return (
    <main style={{ backgroundImage: `url(/home/BgTexture.jpg)` }}>
      <Swiper 
        spaceBetween={30} 
        effect={"fade"} 
        modules={[EffectFade, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
      >
        {[Image1, Image2, Image3, Image4].map((slideImage, index) => (
          <SwiperSlide key={`cornerstone-slide-${index}`}>
            <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-screen">
              <Image
                src={slideImage}
                alt={`Cornerstone slide ${index + 1}`}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <div className="py-16 md:py-24 lg:py-32">
          <div className="container-responsive text-center">
            <p className="text-xl md:text-2xl lg:text-3xl uppercase text-brown font-medium mb-4">
              The Cornerstone Pub
            </p>
            <h1 className="text-3xl md:text-4xl font-aleo lg:text-5xl uppercase font-bold leading-tight">
              Outdoor vibes, crafted drinks & unforgettable weekends
            </h1>
          </div>
        </div>

        <div>
          <div className="border-t-2 border-brown">
            <section className="py-16 md:py-20 lg:py-24">
              <div className="container-responsive">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Content */}
                  <div className="text-center lg:text-left space-y-6">
                    <h2 className="text-4xl md:text-5xl font-aleo lg:text-7xl uppercase text-blue font-bold">
                      Friday Social Nights
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl uppercase text-brown font-medium">
                      Every Friday from 6pm
                    </p>
                    <div className="w-24 h-1 bg-brown mx-auto lg:mx-0 my-4"></div>
                    <div className="space-y-4 text-base md:text-lg text-blue leading-relaxed">
                      <p>
                        Ease into the weekend with live music, chilled drinks,
                        and a friendly outdoor vibe at The Cornerstone.
                      </p>
                      <p>
                        Gather your friends, share great food, and soak up the
                        perfect Friday energy as our DJs set the tone for the
                        night.
                      </p>
                      <p>
                        Walk-ins welcome, or reserve a table for the best spot
                        in the house.
                      </p>
                    </div>
                    <div className="flex justify-center lg:justify-start mt-8">
                      <button className="uppercase px-8 md:px-12 py-3 md:py-4 font-semibold tracking-widest border-2 border-brown bg-brown hover:bg-transparent hover:text-brown text-white transition-all duration-300 btn-hover rounded-md">
                        See Event Info
                      </button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="order-first lg:order-last">
                    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
                      <Image
                        src="/club/image-1.webp"
                        alt="Friday social night at The Cornerstone"
                        fill
                        className="object-cover rounded-lg image-optimized"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div>
            <section className="py-16 md:py-20 lg:py-24">
              <div className="container-responsive">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                  {/* Image */}
                  <div>
                    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
                      <Image
                        src="/club/Untitled-design-22.webp"
                        alt="Saturday outdoor vibes at The Cornerstone"
                        fill
                        className="object-cover rounded-lg image-optimized"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center lg:text-left space-y-6">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl heading-aleo uppercase text-blue font-bold">
                      Saturday Sessions
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl uppercase text-brown font-medium heading-aleo">
                      Every Saturday from 3pm
                    </p>
                    <div className="w-24 h-1 bg-brown mx-auto lg:mx-0 my-4"></div>
                    <div className="space-y-4 text-base md:text-lg text-blue leading-relaxed">
                      <p className="text-lexend">
                        Spend your Saturday soaking up the sunshine in our
                        outdoor area with delicious bites, refreshing cocktails,
                        and good company.
                      </p>
                      <p className="text-lexend">
                        As the evening sets in, enjoy upbeat tunes and a
                        welcoming crowd — the perfect mix of chill and energy
                        that makes weekends at The Cornerstone truly special.
                      </p>
                    </div>
                    <div className="flex justify-center lg:justify-start mt-8">
                      <button className="uppercase px-8 md:px-12 py-3 md:py-4 font-semibold tracking-widest border-2 border-brown bg-brown hover:bg-transparent hover:text-brown text-white transition-all duration-300 btn-hover rounded-md font-lexend">
                        Book a Table
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
