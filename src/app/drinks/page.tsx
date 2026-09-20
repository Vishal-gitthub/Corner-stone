import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Drinks in Port Melbourne",
  description:
    "Explore the drinks offering at The Cornerstone Pub in Port Melbourne, including beer, wine, cocktails and relaxed bar service for lunch, dinner and events.",
  alternates: {
    canonical: "/drinks",
  },
};

const faqs = [
  {
    question: "Does The Cornerstone serve beer, wine and cocktails?",
    answer:
      "The venue offers a broad drinks menu suited to pub dining and casual social gatherings, with beer, wine and mixed drinks forming part of the experience.",
  },
  {
    question: "Is The Cornerstone good for after-work drinks?",
    answer:
      "Yes. The pub atmosphere makes it a popular choice for drinks before dinner, weekday catch-ups and evening gatherings.",
  },
  {
    question: "Do you have events with drinks specials?",
    answer:
      "Current offers and times are listed on the What's On page. Because promotions can change, check that page before visiting.",
  },
  {
    question: "Where can I see the current drinks menu?",
    answer:
      "The current drinks menu is available through the venue menu pages and can be checked before visiting.",
  },
];

export default function DrinksPage() {
  return (
    <main className="bg-[#f7f4f1] text-blue">
      <section className="container-responsive py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brown mt-28 uppercase tracking-[0.25em] text-sm md:text-base font-medium">
            Drinks & Bar
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold uppercase heading-aleo text-blue">
            Drinks in Port Melbourne
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-blue/80">
            The Cornerstone is a welcoming Port Melbourne pub where the drinks menu is matched to the pace of the venue — relaxed, social and ideal for lunch, dinner and evening catch-ups.
          </p>
        </div>
      </section>

      <section className="container-responsive pb-16 md:pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-2xl bg-white p-6 shadow-sm border border-blue/10">
            <h2 className="text-2xl font-bold uppercase heading-aleo text-brown">Beer</h2>
            <p className="mt-4 text-base leading-relaxed text-blue/80">
              A selection of beers suited to pub dining and casual social gatherings in a local setting.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm border border-blue/10">
            <h2 className="text-2xl font-bold uppercase heading-aleo text-brown">Wine</h2>
            <p className="mt-4 text-base leading-relaxed text-blue/80">
              Classic pub wine options to suit meals, events and relaxed daytime or evening drinks.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm border border-blue/10">
            <h2 className="text-2xl font-bold uppercase heading-aleo text-brown">Cocktails</h2>
            <p className="mt-4 text-base leading-relaxed text-blue/80">
              Cocktails add energy to the weekend atmosphere and complement the venue&apos;s social dining experience.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm border border-blue/10">
            <h2 className="text-2xl font-bold uppercase heading-aleo text-brown">Non-alcoholic</h2>
            <p className="mt-4 text-base leading-relaxed text-blue/80">
              A range of non-alcoholic choices helps keep the venue welcoming for all guests.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-blue text-white py-16 md:py-20">
        <div className="container-responsive grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p className="text-brown uppercase tracking-[0.25em] text-sm font-medium">Bar experience</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold uppercase heading-aleo">
              A casual pub bar for lunch, dinner and good company
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              The Cornerstone is known for a lively but comfortable atmosphere, combining a local pub setting with a strong social energy.
              It is well suited to meet-ups, drinks after work and gatherings with friends.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/menus/drinks" className="inline-block rounded-md bg-brown px-6 py-3 font-medium text-white hover:bg-white hover:text-brown transition-colors">
                View drinks menu
              </Link>
              <Link href="/whatson" className="inline-block rounded-md border border-white px-6 py-3 font-medium text-white hover:bg-white hover:text-blue transition-colors">
                See what&apos;s on
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <h3 className="text-2xl font-bold uppercase heading-aleo text-brown">Best suited for</h3>
            <ul className="mt-5 space-y-3 text-lg text-white/85">
              <li>• Midday drinks and relaxed lunches</li>
              <li>• Dinner and evening catch-ups</li>
              <li>• Group gatherings and celebrations</li>
              <li>• Social events and weekend energy</li>
              <li>• Function and event beverage service</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-responsive py-16 md:py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase heading-aleo text-blue text-center">
            Frequently asked questions
          </h2>
          <div className="mt-10 space-y-5">
            {faqs.map((item) => (
              <div key={item.question} className="rounded-xl border border-blue/10 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-bold text-brown heading-aleo">{item.question}</h3>
                <p className="mt-3 text-base leading-relaxed text-blue/80">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe7df] py-16 md:py-20">
        <div className="container-responsive text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase heading-aleo text-blue">
            Planning a pub night in Port Melbourne?
          </h2>
          <p className="mt-5 text-lg text-blue/80 max-w-2xl mx-auto">
            Whether it&apos;s a casual drink, dinner or a full evening out, The Cornerstone offers a welcoming venue with a strong social atmosphere.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-md bg-brown px-8 py-3 text-white hover:bg-blue transition-colors">
              Book a table
            </Link>
            <Link href="/menus" className="rounded-md border border-brown px-8 py-3 text-brown hover:bg-white transition-colors">
              View all menus
            </Link>
            <Link href="/events" className="rounded-md border border-brown px-8 py-3 text-brown hover:bg-white transition-colors">
              Plan a group function
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
