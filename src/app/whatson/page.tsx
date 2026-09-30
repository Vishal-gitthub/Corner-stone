"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/scrollbar";
import IGGrid from "../components/whats-on/IGGrid";

const weeklyEvents = [
  {
    image: "/home/happy_hour.jpg",
    title: "Happy hour",
    time: "Weekdays, 5PM – 7PM",
    description:
      "A weekday drinks offer at The Cornerstone. Check with the venue if you need confirmation for a particular public holiday or date.",
  },
  {
    image: "/home/social_supper.jpg",
    title: "Trivia nights",
    time: "Wednesdays, 6:30 PM",
    description:
      "Bring your group for Wednesday trivia with food and drinks available at the venue.",
  },
  {
    image: "/club/band.webp",
    title: "Friday live music",
    time: "Fridays, 8PM – 11PM",
    description: "Friday evening live entertainment at The Cornerstone.",
  },
  {
    image: "/whatson/10948067.jpg",
    title: "Saturday groove sessions",
    time: "Saturdays, 6PM – 9PM",
    description: "Live tunes and a relaxed Saturday evening atmosphere.",
  },
  {
    image: "/whatson/dj.jpg",
    title: "DJ Saturday nights",
    time: "Saturdays, from 9PM",
    description: "Saturday DJ sets for a later-night social experience.",
  },
  {
    image: "/whatson/SundayChillSessions.jpg",
    title: "Sunday chill sessions",
    time: "Sundays, 3PM – 6PM",
    description: "A Sunday afternoon session with food and drinks available.",
  },
  {
    image: "/home/Food_4.jpg",
    title: "$18.90 lunch menu",
    time: "Every day",
    description:
      "A lunch-menu offer listed by the venue. See the current menu before visiting.",
  },
];

const faqs = [
  {
    question: "Does The Cornerstone have live music?",
    answer:
      "The current weekly program lists live music on Friday and Saturday. Check the latest details before making plans.",
  },
  {
    question: "Is there trivia at The Cornerstone?",
    answer: "Trivia is listed for Wednesday evenings at 7PM.",
  },
  {
    question: "Does The Cornerstone have happy hour?",
    answer:
      "Happy hour is listed on weekdays from 5PM to 7PM. Offers can change, so confirm the details with the venue.",
  },
  {
    question: "Should I book for an event?",
    answer:
      "Bookings are recommended for groups and busy periods. Use the booking link to reserve a table.",
  },
];

export default function WhatsOnPage() {
  return (
    <main
      className="min-h-screen bg-white/70"
      style={{ backgroundImage: "url(/home/BgTexture.jpg)" }}
    >
      <section className="container-responsive py-28 md:py-32">
        <header className="mx-auto max-w-3xl pb-12 pt-16 mt-24 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-brown">
            The Cornerstone, Port Melbourne
          </p>
          <h1 className="mt-4 text-4xl font-bold uppercase heading-aleo md:text-6xl">
            What&apos;s on
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-blue/80">
            Find the venue&apos;s currently listed weekly entertainment, trivia,
            happy hour and weekend sessions. Times and offers can change;
            confirm before you visit.
          </p>
        </header>
        <section className="mt-14" aria-labelledby="weekly-heading">
          <h2
            id="weekly-heading"
            className="text-center text-3xl font-bold uppercase heading-aleo md:text-5xl"
          >
            Weekly events and offers
          </h2>
          <Swiper
            modules={[Scrollbar, Autoplay]}
            spaceBetween={24}
            loop
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            scrollbar={{ hide: true }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="mt-10"
          >
            {weeklyEvents.map((event) => (
              <SwiperSlide key={event.title}>
                <article className="h-full overflow-hidden rounded-xl bg-white shadow-sm ring-1 ring-blue/10">
                  <div className="relative h-56">
                    <Image
                      src={event.image}
                      alt={`${event.title} at The Cornerstone Pub`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold heading-aleo">
                      {event.title}
                    </h3>
                    <p className="mt-2 font-medium text-brown">{event.time}</p>
                    <p className="mt-4 leading-relaxed text-blue/80">
                      {event.description}
                    </p>
                  </div>
                </article>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        <div className="mt-14 pb-5 flex flex-wrap justify-center gap-4">
          <a
            href="https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne?restref=304496&lang=en-AU&ot_source=Restaurant%20website"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-brown px-6 py-3 font-medium text-white hover:bg-blue"
          >
            Book a table
          </a>
          <Link
            href="/menus"
            className="rounded-md border border-brown px-6 py-3 font-medium text-brown hover:bg-white"
          >
            View current menus
          </Link>
        </div>
      </section>
      <section className="bg-white py-16 md:py-20">
        <div className="container-responsive max-w-4xl">
          <h2 className="text-center text-3xl font-bold uppercase heading-aleo md:text-5xl">
            What&apos;s on FAQs
          </h2>
          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <article
                key={faq.question}
                className="rounded-xl border border-blue/10 p-6"
              >
                <h3 className="text-xl font-bold heading-aleo text-brown">
                  {faq.question}
                </h3>
                <p className="mt-3 leading-relaxed text-blue/80">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <IGGrid />
    </main>
  );
}
