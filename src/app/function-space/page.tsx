"use client";

import Image from "next/image";

export default function FunctionSpacePage() {
  return (
    <main className="bg-[#f8f6f3] text-blue">
      {/* HERO SECTION */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/functions/4300237_17960.jpg"
          alt="Cornerstone Function Space"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
        <div className="relative z-10 text-center text-white px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-aleo font-bold uppercase mb-4">
            Cornerstone Function Space
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Where every occasion finds its perfect setting in the heart of Port
            Melbourne.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-24 container-responsive text-center">
        <h2 className="text-3xl md:text-5xl font-aleo uppercase font-semibold text-brown mb-6">
          Style, Warmth & Versatility
        </h2>
        <p className="max-w-3xl mx-auto text-lg md:text-xl leading-relaxed text-blue/90">
          Nestled above The Cornerstone Pub, our Function Space combines modern
          sophistication with timeless charm. Designed to adapt to your
          occasion, it’s the ideal venue for birthdays, engagements, corporate
          gatherings, or intimate private events.
        </p>
      </section>

      {/* IMAGE GALLERY GRID */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[
          "/functions/4300237_17960.jpg",
          "/functions/4300237_17960.jpg",
          "/functions/4300237_17960.jpg",
          "/functions/4300237_17960.jpg",
        ].map((img, i) => (
          <div
            key={i}
            className="relative w-full h-[40vh] md:h-[50vh] overflow-hidden"
          >
            <Image
              src={img}
              alt={`Cornerstone Function Space photo ${i + 1}`}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        ))}
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 container-responsive grid grid-cols-1 lg:grid-cols-3 gap-12 text-center">
        {[
          {
            title: "Flexible Layouts",
            text: "From lounge and high-table settings to elegant seated dining — our space transforms to match your event vision.",
            icon: "🪑",
          },
          {
            title: "Private Bar & Amenities",
            text: "Enjoy exclusive access to your own private bar, modern facilities, and attentive service for a seamless experience.",
            icon: "🍸",
          },
          {
            title: "Perfect for Every Occasion",
            text: "Host up to 100 guests cocktail-style or 60 seated — ideal for celebrations, launches, or corporate events.",
            icon: "🎉",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-lg shadow-md py-12 px-8 hover:shadow-xl transition-all duration-300"
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-semibold mb-3 text-brown font-aleo uppercase">
              {item.title}
            </h3>
            <p className="text-blue/90 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </section>

      {/* AMBIENCE SECTION */}
      <section className="relative flex flex-col md:flex-row items-stretch">
        <div className="md:w-1/2 relative h-[50vh] md:h-[80vh]">
          <Image
            src="/functions/4300237_17960.jpg"
            alt="Cornerstone Function Space ambience"
            fill
            className="object-cover"
          />
        </div>
        <div className="md:w-1/2 bg-brown text-white flex flex-col justify-center p-12 md:p-20 space-y-6">
          <h2 className="text-3xl md:text-5xl font-aleo uppercase font-bold">
            Light, Ambience & Atmosphere
          </h2>
          <p className="text-lg leading-relaxed">
            Sunlight streams through large windows by day, while warm lighting
            creates an inviting mood by night. Every event feels special, every
            moment memorable.
          </p>
        </div>
      </section>

      {/* FOOD & DRINKS SECTION */}
      <section className="py-24 container-responsive grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-aleo uppercase font-bold text-brown">
            Food & Beverage Packages
          </h2>
          <p className="text-lg leading-relaxed text-blue/90">
            Celebrate with curated menus and premium drinks featuring
            Cornerstone’s signature dishes, local wines, craft beers, and
            handcrafted cocktails.
          </p>
          <p className="text-lg leading-relaxed text-blue/90">
            Choose from grazing tables, canapé selections, or multi-course
            dining — every option designed to delight your guests.
          </p>
        </div>

        <div className="relative w-full h-[60vh] rounded-lg overflow-hidden shadow-md">
          <Image
            src="/functions/4300237_17960.jpg"
            alt="Cornerstone food and drinks"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue text-white text-center">
        <div className="container-responsive space-y-6">
          <h2 className="text-3xl md:text-5xl font-aleo uppercase font-bold">
            Plan Your Perfect Event
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Whether it’s an intimate dinner, a milestone birthday, or a vibrant
            corporate gathering — our team will make every detail effortless.
          </p>
          <a
            href="/contact"
            className="inline-block uppercase px-10 py-4 border-2 border-white rounded-md font-aleo tracking-widest transition-all hover:bg-white hover:text-blue duration-300"
          >
            Enquire Now
          </a>
        </div>
      </section>
    </main>
  );
}
