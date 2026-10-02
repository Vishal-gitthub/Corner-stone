"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import IGGrid from "../components/whats-on/IGGrid";
import { BOOKING_URL } from "@/lib/site";
import { activeWeeklyEvents, eventSchedule, whatsOnFaqs as faqs } from "@/lib/weeklyEvents";

export default function WhatsOnPage() {
  return (
    <main className="min-h-screen bg-white/70" style={{ backgroundImage: "url(/home/BgTexture.jpg)" }}>
      <section className="container-responsive py-28 md:py-32">
        <header className="mx-auto mt-24 max-w-3xl pb-12 pt-16 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-brown">The Cornerstone, Port Melbourne</p>
          <h1 className="mt-4 text-4xl font-bold uppercase heading-aleo md:text-6xl">What&apos;s On in Port Melbourne</h1>
          <p className="mt-5 text-lg leading-relaxed text-blue/80">
            Explore the weekly program at The Cornerstone, including live music,
            trivia, happy hour and weekend entertainment. Recurring details can
            change, so confirm the latest information before visiting.
          </p>
        </header>

        <section className="mt-14" aria-labelledby="weekly-heading">
          <h2 id="weekly-heading" className="text-center text-3xl font-bold uppercase heading-aleo md:text-5xl">Weekly events and offers</h2>
          <Swiper
            modules={[Scrollbar, Autoplay]}
            spaceBetween={24}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            scrollbar={{ hide: true }}
            breakpoints={{ 640: { slidesPerView: 1 }, 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            className="mt-10"
          >
            {activeWeeklyEvents.map((event) => (
              <SwiperSlide key={event.id}>
                <article className="h-full overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-blue/10">
                  <div className="relative h-56">
                    <Image
                      src={event.image}
                      alt={`${event.name} at The Cornerstone Pub in Port Melbourne`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold heading-aleo">{event.name}</h3>
                    <p className="mt-2 font-medium text-brown">{eventSchedule(event)}</p>
                    <p className="mt-4 leading-relaxed text-blue/80">{event.shortDescription}</p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <div className="mt-14 flex flex-wrap justify-center gap-4 pb-5">
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-md bg-brown px-6 py-3 font-medium text-white hover:bg-blue">Book a table</a>
          <Link href="/food" className="rounded-md border border-brown px-6 py-3 font-medium text-brown hover:bg-white">Explore food</Link>
          <Link href="/drinks" className="rounded-md border border-brown px-6 py-3 font-medium text-brown hover:bg-white">View drinks</Link>
          <Link href="/events" className="rounded-md border border-brown px-6 py-3 font-medium text-brown hover:bg-white">Plan a function</Link>
          <Link href="/menus" className="rounded-md border border-brown px-6 py-3 font-medium text-brown hover:bg-white">View current menus</Link>
        </div>
      </section>

      <section className="bg-white py-16 md:py-20">
        <div className="container-responsive max-w-4xl">
          <h2 className="text-center text-3xl font-bold uppercase heading-aleo md:text-5xl">What&apos;s on FAQs</h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <article key={faq.question} className="rounded-xl border border-blue/10 p-6">
                <h3 className="text-xl font-bold heading-aleo text-brown">{faq.question}</h3>
                <p className="mt-3 leading-relaxed text-blue/80">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <IGGrid />
    </main>
  );
}
