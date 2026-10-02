import Link from "next/link";
import { BOOKING_URL, pageMetadata } from "@/lib/site";
import { drinksFaqs as faqs } from "@/lib/faqs";

const seoTitle = "Bar Port Melbourne | Beer, Wine & Cocktails | The Cornerstone";
const seoDescription =
  "Explore The Cornerstone bar in Port Melbourne for tap beer, wine, spritzes and highballs, with pub food, after-work drinks and relaxed weekend catch-ups.";

export const metadata = {
  ...pageMetadata({
    title: seoTitle,
    description: seoDescription,
    path: "/drinks",
    image: "/menu/drinks.jpg",
  }),
  title: { absolute: seoTitle },
};

const drinkCategories = [
  {
    title: "Beer in Port Melbourne",
    copy:
      "The current menu includes beer on tap alongside packaged beer and RTDs. The tap list spans lager, draught, pale ale, stout, ginger beer and other pub favourites.",
  },
  {
    title: "Wine at The Cornerstone",
    copy:
      "Explore sparkling, white, red and rosé wines. Current varieties include Riesling, Pinot Grigio, Sauvignon Blanc, Chardonnay, Pinot Noir, Malbec, Shiraz and Cabernet Sauvignon.",
  },
  {
    title: "Cocktails in Port Melbourne",
    copy:
      "The current cocktail list focuses on spritzes and highballs, including passionfruit, Aperol, limoncello and apple-led spritz styles alongside gin and whisky highballs.",
  },
  {
    title: "Non-alcoholic drinks",
    copy:
      "The linked drinks menu does not publish a dedicated non-alcoholic section. Ask the bar team about the non-alcoholic choices currently available when you visit.",
  },
];

export default function DrinksPage() {
  return (
    <main className="bg-[#f7f4f1] text-blue">
      <section className="container-responsive py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-brown mt-28 uppercase tracking-[0.25em] text-sm md:text-base font-medium">
            The Cornerstone Pub
          </p>
          <h1 className="mt-4 text-4xl md:text-6xl font-bold uppercase heading-aleo text-blue">
            Bar in Port Melbourne
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-blue/80">
            Settle in at The Cornerstone for tap beer, wine, spritzes, highballs
            and relaxed pub drinks in Port Melbourne. The bar suits an after-work
            catch-up, drinks with dinner or a social start to the weekend.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/menus/drinks" className="rounded-md bg-brown px-6 py-3 font-medium text-white hover:bg-blue transition-colors">
              View current drinks menu
            </Link>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-md border border-brown px-6 py-3 font-medium text-brown hover:bg-white transition-colors">
              Book a Table
            </a>
          </div>
        </div>
      </section>

      <section className="container-responsive pb-16 md:pb-20" aria-labelledby="drinks-range-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-brown uppercase tracking-[0.25em] text-sm font-medium">Current menu</p>
          <h2 id="drinks-range-heading" className="mt-4 text-3xl md:text-5xl font-bold uppercase heading-aleo text-blue">
            Beer, wine and cocktails
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-blue/80">
            These categories are drawn from the drinks menu currently linked by
            the venue. Check the full menu for the latest selection before visiting.
          </p>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {drinkCategories.map((category) => (
            <article key={category.title} className="rounded-2xl bg-white p-6 shadow-sm border border-blue/10">
              <h3 className="text-2xl font-bold uppercase heading-aleo text-brown">{category.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-blue/80">{category.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-blue text-white py-16 md:py-20" aria-labelledby="social-drinks-heading">
        <div className="container-responsive grid gap-8 lg:grid-cols-[1.2fr_.8fr] items-center">
          <div>
            <p className="text-brown uppercase tracking-[0.25em] text-sm font-medium">Meet at the bar</p>
            <h2 id="social-drinks-heading" className="mt-4 text-3xl md:text-5xl font-bold uppercase heading-aleo">
              After-work and weekend drinks
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              Drop in for after-work drinks, organise a Friday catch-up or make
              The Cornerstone part of your weekend plans. The current What&apos;s On
              page lists weekday happy hour from 5pm to 7pm; offers can change,
              so check the latest details before visiting.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/whatson" className="rounded-md bg-brown px-6 py-3 font-medium text-white hover:bg-white hover:text-brown transition-colors">
                Check What&apos;s On
              </Link>
              <Link href="/menus/drinks" className="rounded-md border border-white px-6 py-3 font-medium text-white hover:bg-white hover:text-blue transition-colors">
                Current drinks menu
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/5 p-6">
            <h3 className="text-2xl font-bold uppercase heading-aleo text-brown">Drinks for the occasion</h3>
            <ul className="mt-5 space-y-3 text-lg text-white/85">
              <li>Tap beer and casual pub drinks</li>
              <li>Wine with lunch or dinner</li>
              <li>Spritzes and highballs for social catch-ups</li>
              <li>Friday and weekend drinks</li>
              <li>Group celebrations and private functions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container-responsive py-16 md:py-20" aria-labelledby="food-pairing-heading">
        <div className="grid items-center gap-8 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-blue/10 lg:grid-cols-[1.2fr_.8fr] md:p-10">
          <div>
            <p className="text-brown uppercase tracking-[0.25em] text-sm font-medium">Food and drinks</p>
            <h2 id="food-pairing-heading" className="mt-4 text-3xl md:text-5xl font-bold uppercase heading-aleo text-blue">
              Pair drinks with the current food menu
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-blue/80">
              Turn a quick drink into lunch or dinner with sharing plates, pub
              classics and other dishes from the current food menu. For private
              celebrations, the functions team can discuss your food and drink requirements.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link href="/food" className="rounded-md bg-brown px-6 py-3 font-medium text-white hover:bg-blue transition-colors">
              Explore pub food
            </Link>
            <Link href="/events" className="rounded-md border border-brown px-6 py-3 font-medium text-brown hover:bg-[#f7f4f1] transition-colors">
              Plan a function
            </Link>
          </div>
        </div>
      </section>

      <section className="container-responsive pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase heading-aleo text-blue text-center">
            Port Melbourne bar FAQs
          </h2>
          <div className="mt-10 space-y-5">
            {faqs.map((item) => (
              <article key={item.question} className="rounded-xl border border-blue/10 bg-white p-5 shadow-sm">
                <h3 className="text-xl font-bold text-brown heading-aleo">{item.question}</h3>
                <p className="mt-3 text-base leading-relaxed text-blue/80">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#efe7df] py-16 md:py-20">
        <div className="container-responsive text-center">
          <h2 className="text-3xl md:text-5xl font-bold uppercase heading-aleo text-blue">
            Plan drinks at The Cornerstone
          </h2>
          <p className="mt-5 text-lg text-blue/80 max-w-2xl mx-auto">
            Browse the current drinks menu, book a table or explore the food,
            events and weekly program before your visit.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-md bg-brown px-8 py-3 text-white hover:bg-blue transition-colors">
              Book a Table
            </a>
            <Link href="/menus/drinks" className="rounded-md border border-brown px-8 py-3 text-brown hover:bg-white transition-colors">
              Drinks menu
            </Link>
            <Link href="/menus" className="rounded-md border border-brown px-8 py-3 text-brown hover:bg-white transition-colors">
              All menus
            </Link>
            <Link href="/whatson" className="rounded-md border border-brown px-8 py-3 text-brown hover:bg-white transition-colors">
              What&apos;s On
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
