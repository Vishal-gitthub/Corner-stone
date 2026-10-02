import Image from "next/image";
import Link from "next/link";
import { spacesFaqs } from "@/lib/faqs";

const spaces = [
  {
    name: "Function Room",
    capacity: "Up to 70 guests",
    occasions: "Birthday parties, engagement celebrations, corporate functions and larger private events.",
    setting: "A private room for larger groups and organised occasions.",
    image: "/spaces/function-room.jpeg",
    alt: "Function Room at The Cornerstone Pub in Port Melbourne",
  },
  {
    name: "Private Dining Room",
    capacity: "Up to 24 guests",
    occasions: "Private dining, family occasions, group meals and smaller celebrations.",
    setting: "A private dining setting for guests who want to gather around a shared occasion.",
    image: "/spaces/dining-room.jpg",
    alt: "Private Dining Room at The Cornerstone Pub in Port Melbourne",
  },
  {
    name: "Private Lounge",
    capacity: "8–10 guests",
    occasions: "Intimate celebrations, small group bookings and private get-togethers.",
    setting: "The smallest private space, suited to a close-knit group.",
    image: "/events/VIP-Room-1.webp",
    alt: "Private Lounge at The Cornerstone Pub in Port Melbourne",
  },
  {
    name: "Exclusive venue hire",
    capacity: "Up to 300 guests",
    occasions: "Large celebrations, private events and occasions requiring the full venue.",
    setting: "Exclusive use of The Cornerstone for the largest published guest capacity.",
    image: "/club/_85A7735.webp",
    alt: "Guests inside The Cornerstone Pub during a private event",
  },
];

const primaryButton =
  "inline-flex min-h-12 items-center justify-center rounded-md bg-brown px-6 py-3 text-center font-medium text-white transition-colors hover:bg-blue";

const secondaryButton =
  "inline-flex min-h-12 items-center justify-center rounded-md border border-brown px-6 py-3 text-center font-medium text-brown transition-colors hover:bg-white";

export default function SpacesPage() {
  return (
    <main className="bg-[#f8f5f2] px-6 py-28 text-blue md:py-36">
      <section className="mx-auto max-w-7xl">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium uppercase tracking-[0.22em] text-brown">Functions at The Cornerstone</p>
          <h1 className="mt-4 text-4xl font-bold uppercase heading-aleo md:text-6xl">
            Function Rooms &amp; Event Spaces in Port Melbourne
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-blue/80">
            Compare The Cornerstone&apos;s private function rooms, private dining
            space and exclusive venue hire for celebrations, corporate
            functions and group occasions in Port Melbourne.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/events#enquire-section" className={primaryButton}>Make a function enquiry</Link>
            <Link href="/events" className={secondaryButton}>Explore functions</Link>
          </div>
        </header>

        <section className="mt-16" aria-labelledby="space-overview-heading">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="space-overview-heading" className="text-3xl font-bold uppercase heading-aleo md:text-5xl">
              Compare the available function spaces
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-blue/75">
              Start with your expected guest number, then consider whether you
              need an intimate private room, a dining-focused setting, a larger
              function room or exclusive use of the venue.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {spaces.map((space) => (
              <article key={space.name} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-blue/10">
                <div className="relative h-64 md:h-72">
                  <Image src={space.image} alt={space.alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brown">{space.capacity}</p>
                  <h3 className="mt-2 text-3xl font-bold heading-aleo">{space.name}</h3>
                  <p className="mt-4 leading-relaxed text-blue/80">{space.setting}</p>
                  <p className="mt-4 leading-relaxed text-blue/70">
                    <strong className="text-blue">Suitable occasions:</strong> {space.occasions}
                  </p>
                  <Link href="/events#enquire-section" className="mt-6 inline-block font-medium text-brown underline underline-offset-4">
                    Enquire about this space
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-8 rounded-2xl bg-blue p-8 text-white md:grid-cols-[1.1fr_.9fr] md:p-12">
          <div>
            <h2 className="text-3xl font-bold uppercase heading-aleo md:text-5xl">Choose a space for your guest numbers</h2>
            <p className="mt-5 text-lg leading-relaxed text-white/80">
              Share your preferred date, guest number and occasion with the
              functions team. They can confirm availability and help identify
              the most appropriate space from the current room options.
            </p>
          </div>
          <div className="flex flex-wrap content-center gap-4 md:justify-end">
            <Link href="/events#enquire-section" className="rounded-md bg-brown px-6 py-3 font-medium text-white hover:bg-white hover:text-brown">Make a function enquiry</Link>
            <Link href="/menus/events_menu" className="rounded-md border border-white px-6 py-3 font-medium text-white hover:bg-white hover:text-blue">View functions menu</Link>
            <Link href="/contact" className="rounded-md border border-white px-6 py-3 font-medium text-white hover:bg-white hover:text-blue">Contact the venue</Link>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-4xl" aria-labelledby="spaces-faq-heading">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.22em] text-brown">Planning help</p>
            <h2 id="spaces-faq-heading" className="mt-4 text-3xl font-bold uppercase heading-aleo md:text-5xl">Function space FAQs</h2>
          </div>
          <div className="mt-10 divide-y divide-blue/15 border-y border-blue/15">
            {spacesFaqs.map((faq) => (
              <details key={faq.question} className="group">
                <summary className="flex cursor-pointer list-none items-start gap-4 py-6 [&::-webkit-details-marker]:hidden">
                  <h3 className="flex-1 text-xl font-bold heading-aleo">{faq.question}</h3>
                  <span className="text-2xl text-brown transition-transform group-open:rotate-45" aria-hidden="true">+</span>
                </summary>
                <p className="max-w-3xl pb-6 leading-7 text-blue/75">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
