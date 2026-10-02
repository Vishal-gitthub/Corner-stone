import Link from "next/link";
import { BOOKING_URL, pageMetadata } from "@/lib/site";
import { foodFaqs as faqs } from "@/lib/faqs";

export const metadata = {
  ...pageMetadata({
    title: "Pub Food Port Melbourne | Lunch & Dinner | The Cornerstone",
    description:
      "Explore pub food in Port Melbourne at The Cornerstone, with sharing plates, pub classics, parmas, steaks, seafood and vegetarian choices for lunch or dinner.",
    path: "/food",
    image: "/home/Food_1.jpg",
  }),
  title: { absolute: "Pub Food Port Melbourne | Lunch & Dinner | The Cornerstone" },
};

const menuHighlights = [
  {
    title: "Sharing plates & starters",
    copy:
      "Start with dishes made for the table, including crispy chicken bites, chicken wings, lemon and pepper calamari, pumpkin arancini and Turkish garlic bread.",
  },
  {
    title: "Pub classics & steaks",
    copy:
      "The current classics include bangers and mash, fish and chips, Atlantic salmon and a choice of striploin or rump steak with salad and chips.",
  },
  {
    title: "Parmas & signature burgers",
    copy:
      "Choose from the Cornerstone Classic parma and other current parma combinations, or explore burgers such as Nashville Chicken and The Deep Blue.",
  },
  {
    title: "From the pan, salads & vegetarian choices",
    copy:
      "The menu also lists roasted vegetable gnocchi, penne carbonara, seafood paella and salads. Vegetarian and vegan-option markers appear on selected dishes.",
  },
];

export default function FoodPage() {
  return (
    <main className="bg-[#f8f5f2] text-blue">
      <section className="container-responsive py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-brown uppercase tracking-[0.25em] text-sm md:text-base font-medium">
            The Cornerstone Pub & Restaurant
          </p>
          <h1 className="mt-28 text-4xl md:text-6xl font-bold uppercase heading-aleo text-blue">
            Pub Food in Port Melbourne
          </h1>
          <p className="mt-6 text-lg md:text-xl leading-relaxed text-blue/80">
            Join us at 1 Crockford Street for casual pub dining in Port Melbourne.
            The current menu moves from sharing plates and pub classics to parmas,
            steaks, seafood, salads and vegetarian-marked choices for lunch, dinner
            and relaxed group meals.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/menus/foods" className="rounded-md bg-brown px-6 py-3 font-medium text-white hover:bg-blue transition-colors">
              View current food menu
            </Link>
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-md border border-brown px-6 py-3 font-medium text-brown hover:bg-white transition-colors">
              Book a Table
            </a>
          </div>
        </div>
      </section>

      <section className="container-responsive pb-16 md:pb-20" aria-labelledby="dining-times-heading">
        <h2 id="dining-times-heading" className="sr-only">Lunch, dinner and group dining</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl bg-white p-6 shadow-sm border border-blue/10">
            <h3 className="text-2xl font-bold uppercase heading-aleo text-brown">Lunch in Port Melbourne</h3>
            <p className="mt-4 text-base leading-relaxed text-blue/80">
              Stop in for a casual pub lunch, whether you want a sharing plate,
              a classic meal, a salad or something more substantial from the current menu.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm border border-blue/10">
            <h3 className="text-2xl font-bold uppercase heading-aleo text-brown">Dinner at The Cornerstone</h3>
            <p className="mt-4 text-base leading-relaxed text-blue/80">
              Dinner can be a straightforward pub meal or a longer evening with
              starters for the table, mains and drinks from the bar.
            </p>
          </article>
          <article className="rounded-2xl bg-white p-6 shadow-sm border border-blue/10">
            <h3 className="text-2xl font-bold uppercase heading-aleo text-brown">Group dining in Port Melbourne</h3>
            <p className="mt-4 text-base leading-relaxed text-blue/80">
              For casual groups, book a table and order from the current food menu.
              Private dining and larger celebrations can be discussed with the functions team.
            </p>
          </article>
        </div>
      </section>

      <section className="bg-blue py-16 text-white md:py-20" aria-labelledby="menu-highlights-heading">
        <div className="container-responsive">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-brown uppercase tracking-[0.25em] text-sm font-medium">Current menu</p>
            <h2 id="menu-highlights-heading" className="mt-4 text-3xl md:text-5xl font-bold uppercase heading-aleo">
              Pub classics and current menu highlights
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-white/85">
              These examples come from the food menu currently linked by the venue.
              Availability and menu details can change, so check the full menu before visiting.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {menuHighlights.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/15 bg-white/5 p-6">
                <h3 className="text-2xl font-bold uppercase heading-aleo text-brown">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-white/85">{item.copy}</p>
              </article>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/menus/foods" className="rounded-md bg-brown px-6 py-3 font-medium text-white hover:bg-white hover:text-brown transition-colors">
              See the current food menu
            </Link>
            <Link href="/drinks" className="rounded-md border border-white px-6 py-3 font-medium text-white hover:bg-white hover:text-blue transition-colors">
              Explore drinks
            </Link>
          </div>
        </div>
      </section>

      <section className="container-responsive py-16 md:py-20" aria-labelledby="functions-heading">
        <div className="grid items-center gap-8 rounded-2xl bg-white p-8 shadow-sm ring-1 ring-blue/10 lg:grid-cols-[1.2fr_.8fr] md:p-10">
          <div>
            <p className="text-brown uppercase tracking-[0.25em] text-sm font-medium">Private occasions</p>
            <h2 id="functions-heading" className="mt-4 text-3xl md:text-5xl font-bold uppercase heading-aleo text-blue">
              Functions and private dining
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-blue/80">
              Planning a birthday, corporate meal or private celebration? Explore
              the venue&apos;s function spaces and use the enquiry page to discuss your
              guest numbers, preferred date and food and drink requirements.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 lg:justify-end">
            <Link href="/events" className="rounded-md bg-brown px-6 py-3 font-medium text-white hover:bg-blue transition-colors">
              Function Enquiry
            </Link>
            <Link href="/whatson" className="rounded-md border border-brown px-6 py-3 font-medium text-brown hover:bg-[#f8f5f2] transition-colors">
              View What&apos;s On
            </Link>
          </div>
        </div>
      </section>

      <section className="container-responsive pb-16 md:pb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold uppercase heading-aleo text-blue text-center">
            Pub dining FAQs
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
            Plan your next pub meal in Port Melbourne
          </h2>
          <p className="mt-5 text-lg text-blue/80 max-w-2xl mx-auto">
            Check the current menu, reserve a table or continue planning your visit
            with the drinks and What&apos;s On pages.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="rounded-md bg-brown px-8 py-3 text-white hover:bg-blue transition-colors">
              Book a Table
            </a>
            <Link href="/menus/foods" className="rounded-md border border-brown px-8 py-3 text-brown hover:bg-white transition-colors">
              Current food menu
            </Link>
            <Link href="/drinks" className="rounded-md border border-brown px-8 py-3 text-brown hover:bg-white transition-colors">
              Drinks
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
