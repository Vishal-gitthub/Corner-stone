"use client";
import Image from "next/image";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

import Image1 from "../../../public/club/LoungePhoto2.webp";
import Image2 from "../../../public/club/_85A7725.webp";
import Image3 from "../../../public/club/_85A7735.webp";
import Image4 from "../../../public/club/_85A7873.webp";
export default function Page() {
  return (
    <main style={{ backgroundImage: `url(/home/BgTexture.jpg)` }}>
      <Swiper spaceBetween={30} effect={"fade"} modules={[EffectFade]}>
        {[Image1, Image2, Image3, Image4].map((slideImage, index) => (
          <SwiperSlide key={`club-slide-${index}`}>
            <div className="relative w-full h-[50vh] md:h-[70vh] lg:h-screen">
              <Image
                src={slideImage}
                alt={`Club slide ${index + 1}`}
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
            <p className="text-xl md:text-2xl lg:text-3xl uppercase text-brown font-medium mb-4">The Albion</p>
            <h1 className="text-4xl md:text-6xl lg:text-8xl uppercase font-bold leading-tight">
              Club Signature drinks, state-of-the-art sound, and nothing but
              good nights
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
                    <h2 className="text-4xl md:text-5xl lg:text-7xl uppercase text-blue font-bold">
                      OYE LATINO MELBOURNE
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl uppercase text-brown font-medium">
                      every Friday night
                    </p>
                    <div className="w-24 h-1 bg-brown mx-auto lg:mx-0 my-4"></div>
                    <div className="space-y-4 text-base md:text-lg text-blue leading-relaxed">
                      <p>
                        Experience the vibrant essence of Latin culture at Oye Latino
                        Melbourne on our club level!
                      </p>
                      <p>
                        Dance to the pulsating beats of Reggaeton, Salsa, Bachata, and
                        more, as well as FREE Bachata and Salsa classes, weekly drink
                        specials, prizes, giveaways, and live entertainment.
                      </p>
                      <p>
                        Limited VIP booths and Free Birthday packages available. For
                        more information, head on over to the Oye Latino Melbourne
                        website.
                      </p>
                    </div>
                    <div className="flex justify-center lg:justify-start mt-8">
                      <button className="uppercase px-8 md:px-12 py-3 md:py-4 font-semibold tracking-widest border-2 border-brown bg-brown hover:bg-transparent hover:text-brown text-white transition-all duration-300 btn-hover rounded-md">
                        See Club info
                      </button>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="order-first lg:order-last">
                    <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh]">
                      <Image
                        src="/club/image-1.webp"
                        alt="Oye Latino Melbourne nightlife"
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
                        alt="Alumbra Saturday night experience"
                        fill
                        className="object-cover rounded-lg image-optimized"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center lg:text-left space-y-6">
                    <h2 className="text-4xl md:text-5xl lg:text-7xl uppercase text-blue font-bold">
                      Alumbra
                    </h2>
                    <p className="text-lg md:text-xl lg:text-2xl uppercase text-brown font-medium">
                      Every Saturday Night
                    </p>
                    <div className="w-24 h-1 bg-brown mx-auto lg:mx-0 my-4"></div>
                    <div className="space-y-4 text-base md:text-lg text-blue leading-relaxed">
                      <p>
              Alumbra is a Saturday night experience that lives at the
                        intersection of music, lifestyle, couture, and bites. Rooted
              in culture and elevated by style, it&apos;s a space where
                        selectors, tastemakers, and trendsetters gather under one
                        roof.
                      </p>
                      <p>
                        With a soundtrack that moves through
                        House, RnB, and global rhythms, paired with rooftop views,
                        refined cocktails, and curated dining, Alumbra delivers more
                        than a night out – it&apos;s a scene. Every Saturday at The
                        Albion
                      </p>
                    </div>
                    <div className="flex justify-center lg:justify-start mt-8">
                      <button className="uppercase px-8 md:px-12 py-3 md:py-4 font-semibold tracking-widest border-2 border-brown bg-brown hover:bg-transparent hover:text-brown text-white transition-all duration-300 btn-hover rounded-md">
                        Alumbra Website
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
