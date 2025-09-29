import Banner from "../components/Home/Banner";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import FoodCarousel from "../components/Home/FoodCarousel";
import FunctionEnquiryForm from "./FunctionEnquiryForm";

export const metadata: Metadata = {
  title: "Functions & Events | The Albion Rooftop",
  description:
    "Host unforgettable functions and events at The Albion Rooftop – VIP room, curated menus, premium beverages, décor and photography packages.",
};

export default function Page() {
  return (
    <main style={{ backgroundImage: "url(/home/BgTexture.jpg)" }}>
      <section aria-label="Hero video banner">
        <Banner />
      </section>

      <section className="py-16 md:py-24 lg:py-32" aria-labelledby="events-intro-heading">
        <div className="container-responsive max-w-4xl text-center flex flex-col gap-4 md:gap-6">
          <h1 id="events-intro-heading" className="text-4xl md:text-6xl lg:text-8xl uppercase font-bold">
            Functions & Events
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl uppercase text-brown font-medium">
            From intimate gatherings to grand celebrations
          </p>
          <div className="w-24 h-1 bg-brown mx-auto my-4"></div>
          <p className="text-center text-base md:text-lg leading-relaxed">
            At The Albion, we understand the importance of creating a lasting
            impression. Whether you're hosting an elegant cocktail evening, a
            milestone celebration, or a refined business networking event, our
            sophisticated spaces – including a stunning rooftop with panoramic
            city views – provide the perfect backdrop. With curated menus,
            premium beverages, and impeccable service, every detail is
            thoughtfully executed to deliver a seamless and memorable experience
            for you and your guests.
          </p>
          <p className="text-center text-base md:text-lg leading-relaxed mt-4">
            Enhance your event with optional photography and bespoke décor hire – 
            including arch walls, balloon garlands, and custom signage to elevate your celebration.
          </p>
          <div
            className="flex w-full gap-4 md:gap-5 justify-center items-center mt-6"
            role="group"
            aria-label="Event enquiries"
          >
            <Link
              href="/whatson"
              className="py-3 px-6 md:px-10 hover:text-white text-blue bg-transparent border-2 border-brown hover:bg-brown transition-all duration-300 btn-hover rounded-md font-medium"
              aria-label="See what's on"
            >
              What&apos;s On
            </Link>
          </div>
        </div>
      </section>

      <FunctionEnquiryForm />

      <section
        className="bg-blue py-16 md:py-24 lg:py-32"
        aria-labelledby="spaces-heading"
      >
        <div className="container-responsive">
          <h2 id="spaces-heading" className="text-center text-3xl md:text-5xl lg:text-6xl text-white font-bold mb-12 md:mb-16">
            Event Spaces
          </h2>
          
          <div className="space-y-16 md:space-y-20">
            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <figure className="order-2 lg:order-1">
                <Image
                  src="/events/VIP-Room-1.webp"
                  alt="VIP Room at The Albion Rooftop"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg image-optimized"
                />
              </figure>
              <div className="order-1 lg:order-2 flex flex-col gap-4 md:gap-6">
                <h3 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold">VIP Room</h3>
                <p className="text-xl md:text-2xl text-white font-medium">Capacity: 40 guests standing</p>
                <p className="text-white text-base md:text-lg leading-relaxed">
                  The VIP Room hosts groups of up to 40 guests standing with mini
                  bar, fireplace, private entrance and bathrooms. This elegant space
                  is ideal for intimate birthday and hens celebrations, or indulging
                  VIP guests for an exclusive closed-door event.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">Mini Bar</span>
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">Fireplace</span>
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">Private Entrance</span>
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">Private Bathrooms</span>
                </div>
              </div>
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <figure className="order-1">
                <Image
                  src="/events/VIP-Room-1.webp"
                  alt="VIP Room seating and bar area"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg image-optimized"
                />
              </figure>
              <div className="order-2 flex flex-col gap-4 md:gap-6">
                <h3 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold">Premium Experience</h3>
                <p className="text-xl md:text-2xl text-white font-medium">Exclusive VIP Service</p>
                <p className="text-white text-base md:text-lg leading-relaxed">
                  Experience luxury like never before with our premium VIP service. 
                  Dedicated staff, personalized attention, and exclusive amenities 
                  ensure your event is nothing short of extraordinary.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">Dedicated Staff</span>
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">Premium Service</span>
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">Exclusive Access</span>
                </div>
              </div>
            </article>

            <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <figure className="order-2 lg:order-1">
                <Image
                  src="/events/VIP-Room-1.webp"
                  alt="Private VIP Room entrance and ambiance"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg image-optimized"
                />
              </figure>
              <div className="order-1 lg:order-2 flex flex-col gap-4 md:gap-6">
                <h3 className="text-4xl md:text-5xl lg:text-7xl text-white font-bold">Perfect for</h3>
                <p className="text-xl md:text-2xl text-white font-medium">Intimate Celebrations</p>
                <p className="text-white text-base md:text-lg leading-relaxed">
                  Whether it's a milestone birthday, hens party, or corporate 
                  celebration, our VIP space provides the perfect intimate setting 
                  for your special occasion with unmatched privacy and elegance.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">Birthday Parties</span>
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">Hens Celebrations</span>
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">Corporate Events</span>
                  <span className="px-3 py-1 bg-brown/20 text-white text-sm rounded-full">Private Functions</span>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative" aria-label="Social supper image">
        <div className="w-full h-[50vh] md:h-[70vh] lg:h-screen">
          <Image
            src="/home/social_supper.webp"
            className="object-cover"
            fill
            sizes="100vw"
            alt="Social supper event at The Albion Rooftop"
            priority
          />
        </div>
      </section>

      <section className="py-16 md:py-24 lg:py-32" aria-labelledby="decor-heading">
        <div className="container-responsive max-w-4xl text-center flex flex-col gap-6 md:gap-8">
          <h2 id="decor-heading" className="text-3xl md:text-5xl lg:text-6xl uppercase font-bold">
            PHOTOGRAPHY & <br className="hidden md:block" /> EVENT DÉCOR HIRE
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl uppercase text-brown font-medium">Elevate Your Event</p>
          <div className="w-24 h-1 bg-brown mx-auto my-4"></div>
          <div className="space-y-4 text-base md:text-lg leading-relaxed">
            <p>
              Add the perfect finishing touches to your event at The Albion with
              our optional photography and event décor packages. Capture every
              moment with a professional photographer, ensuring memories from your
              celebration are beautifully documented from start to finish.
            </p>
            <p>
              Looking to elevate your styling? Our décor hire options
              include elegant arch walls, custom welcome signs, statement balloon
              garlands, floral arrangements, and more – designed to complement the
              venue's sophisticated aesthetic. Whether you're after a subtle touch
              of elegance or a full decorative setup, our team can help bring your
              vision to life with seamless coordination and stand out
              presentation.
            </p>
          </div>
          <div className="flex w-full gap-4 md:gap-5 justify-center items-center mt-6">
            <Link
              href="/contact?type=decor"
              className="py-3 px-6 md:px-10 text-white hover:text-blue bg-brown hover:bg-transparent border-2 border-brown transition-all duration-300 btn-hover rounded-md font-medium"
              aria-label="Enquire about décor and photography packages"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="food-heading" className="py-16 md:py-24 lg:py-32">
        <div className="container-responsive">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="text-center lg:text-left space-y-6">
              <h2
                id="food-heading"
                className="text-4xl md:text-5xl lg:text-7xl uppercase font-bold"
              >
                Our Food
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl uppercase text-brown font-medium">
                Head Chef: Elia Donati
              </p>
              <div className="w-24 h-1 bg-brown mx-auto lg:mx-0 my-4"></div>
              <p className="text-base md:text-lg leading-relaxed">
                With an exciting new menu crafted by Elia Donati, The Albion
                Rooftop brings a fresh take on elevated dining, where bold
                flavours meet refined simplicity. Thoughtfully curated with
                high-quality ingredients and expert technique, each dish is
                designed to be both indulgent and effortlessly enjoyable.
              </p>
              <div className="flex justify-center lg:justify-start mt-8">
                <Link
                  href="/menu"
                  className="uppercase px-8 md:px-12 py-3 md:py-4 bg-brown border-2 border-brown hover:bg-transparent hover:text-brown text-white transition-all duration-300 btn-hover rounded-md font-medium"
                  aria-label="View our menu"
                >
                  See Menu
                </Link>
              </div>
            </div>
            <div className="order-first lg:order-last">
              <FoodCarousel />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
