import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pub Food in Port Melbourne",
  description:
    "Discover pub dining at The Cornerstone in Port Melbourne, with lunch, dinner, group dining and seasonal menu options designed for relaxed meals and gatherings.",
  alternates: {
    canonical: "/food",
  },
};

const faqs = [
  {
    question: "Does The Cornerstone serve lunch and dinner?",
    answer:
      "The Cornerstone serves food for lunch and dinner. Check the current menu and contact the venue to confirm kitchen hours for the day you plan to visit.",
  },
  {
    question: "Can I book a table for a group?",
    answer:
      "Group bookings are available. Use the table-booking link for dining, or contact the functions team if you need a private space.",
  },
  {
    question: "Do you accommodate dietary requirements?",
    answer:
      "The Cornerstone welcomes dietary enquiries and can discuss menu suitability when booking or visiting the venue.",
  },
  {
    question: "Where can I view the current menu?",
    answer:
      "You can view the latest food menu on the menu pages, and the venue also provides event and drinks menus through the site.",
  },
];

export default function FoodPage() {
  return (
    <main className="bg-[#f8f5f2] text-blue">
      <section className="container-responsive  py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-brown uppercase tracking-[0.25em] text-sm md:text-base font-medium">
            Food & Dining
          </p>
          <h1 className="mt-28 text-4xl md:text-6xl font-bold uppercase heading-aleo text-blue">
            Pub Food in Port Melbourne
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-blue/80">
            The Cornerstone is a relaxed Port Melbourne pub serving food for casual lunches,
            dinners, group dining and celebrations. It&apos;s a comfortable place to meet friends,
            enjoy a meal and settle in for drinks in the heart of Port Melbourne.
          </p>
        </div>
      </section>

      <section className="container-responsive pb-16 md:pb-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl bg-white p-6 shadow-sm border border-blue/10">
            <h2 className="text-2xl font-bold uppercase heading-aleo text-brown">Lunch</h2>
            <p className="mt-4 text-base leading-relaxed text-blue/80">
              Whether you are meeting for a quick midday catch-up or taking a relaxed break from the city,
              the venue is ideal for lunch with friends, colleagues or family.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm border border-blue/10">
            <h2 className="text-2xl font-bold uppercase heading-aleo text-brown">Dinner</h2>
            <p className="mt-4 text-base leading-relaxed text-blue/80">
              Dinner at The Cornerstone brings together a welcoming pub atmosphere, quality food and a
              strong drinks offering for a comfortable evening out in Port Melbourne.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm border border-blue/10">
            <h2 className="text-2xl font-bold uppercase heading-aleo text-brown">Group Dining</h2>
            <p className="mt-4 text-base leading-relaxed text-blue/80">
              The venue suits group dining across a range of occasions, from casual family meals to more
              celebratory gatherings.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-blue text-white py-16 md:py-20">
        <div className="container-responsive grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <p className="text-brown uppercase tracking-[0.25em] text-sm font-medium">Menu</p>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold uppercase heading-aleo">
              Seasonal pub dining with a local feel
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              The Cornerstone&apos;s food offering is built around approachable pub classics, modern seasonal cooking,
              and a strong emphasis on sharing food and good company. Current menus are available through the venue
              menu pages and can be checked before visiting.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/menus/foods" className="inline-block rounded-md bg-brown px-6 py-3 font-medium text-white hover:bg-white hover:text-brown transition-colors">
                View food menu
              </Link>
              <a href="https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne?restref=304496&lang=en-AU&ot_source=Restaurant%20website" target="_blank" rel="noopener noreferrer" className="inline-block rounded-md border border-white px-6 py-3 font-medium text-white hover:bg-white hover:text-blue transition-colors">
                Book a table
              </a>
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <h3 className="text-2xl font-bold uppercase heading-aleo text-brown">What to expect</h3>
            <ul className="mt-5 space-y-3 text-lg text-white/85">
              <li>• Relaxed pub atmosphere in Port Melbourne</li>
              <li>• Food suited to lunch, dinner and gatherings</li>
              <li>• Seasonal dishes and a modern pub menu</li>
              <li>• Catering for shared dining and larger groups</li>
              <li>• Easy pairing with drinks and event offerings</li>
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
            Ready for a pub meal in Port Melbourne?
          </h2>
          <p className="mt-5 text-lg text-blue/80 max-w-2xl mx-auto">
            Visit The Cornerstone for lunch, dinner, drinks and a relaxed hospitality experience in a central Port Melbourne location.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="rounded-md bg-brown px-8 py-3 text-white hover:bg-blue transition-colors">
              Book a table
            </Link>
            <Link href="/menus" className="rounded-md border border-brown px-8 py-3 text-brown hover:bg-white transition-colors">
              View menus
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
