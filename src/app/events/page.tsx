import Image from "next/image";
import Link from "next/link";
import FunctionEnquiryForm from "./FunctionEnquiryForm";
import { eventsFaqs as faqs } from "@/lib/faqs";

const spaces = [
  {
    name: "Function Room",
    capacity: "Up to 70 guests",
    use: "Larger private celebrations and corporate gatherings.",
    image: "/club/function-room.jpg",
    alt: "The blue-walled Function Room at The Cornerstone Pub",
  },
  {
    name: "Private Dining Room",
    capacity: "Up to 24 guests",
    use: "Intimate meals and smaller group occasions.",
    image: "/spaces/dining-room.jpg",
    alt: "Private Dining Room with long tables at The Cornerstone Pub",
  },
  {
    name: "Private Lounge",
    capacity: "8–10 guests",
    use: "Small, private get-togethers.",
    image: "/events/VIP-Room-1.webp",
    alt: "Private Lounge seating at The Cornerstone Pub",
  },
  {
    name: "Exclusive venue hire",
    capacity: "Up to 300 guests",
    use: "Large celebrations and private events requiring the full venue.",
    image: "/club/_85A7735.webp",
    alt: "Guests gathering around the bar at The Cornerstone Pub",
  },
];

const occasions = [
  {
    title: "Birthday parties",
    copy: "Choose a private room for a focused celebration or ask about a larger setting when the guest list grows. Share your numbers and preferred style so the team can suggest a suitable space.",
  },
  {
    title: "Engagement celebrations",
    copy: "Bring family and friends together for drinks, dining or a larger private event. The room options make it easier to match the atmosphere to the size of your celebration.",
  },
  {
    title: "Corporate functions",
    copy: "Plan a team gathering, client occasion or corporate event around the appropriate room and current menu options. Include the event format and timing in your enquiry.",
  },
  {
    title: "Private dining and group bookings",
    copy: "The Private Dining Room suits groups of up to 24, while the Private Lounge offers a more intimate setting for 8–10 guests. Larger group occasions can use the Function Room.",
  },
];

const primaryButton =
  "inline-flex min-h-12 items-center justify-center bg-brown px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#8b6702] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brown";

const secondaryButton =
  "inline-flex min-h-12 items-center justify-center border border-blue/35 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-blue transition-colors hover:border-blue hover:bg-blue hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue";

export default function EventsPage() {
  return (
    <main className="overflow-hidden bg-[#f8f5f2] text-blue">
      <section className="relative pb-20 pt-36 md:pb-28 md:pt-44">
        <div className="absolute inset-x-0 top-0 h-px bg-blue/10" aria-hidden="true" />
        <div className="container-responsive grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="relative z-10 lg:col-span-6 lg:pr-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brown">
              Functions at The Cornerstone
            </p>
            <h1 className="mt-5 max-w-4xl text-[clamp(3.25rem,7vw,6.5rem)] font-bold uppercase leading-[0.88] tracking-[-0.045em] heading-aleo">
              Function venue in Port Melbourne
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-blue/75 md:text-lg">
              The Cornerstone is a pub, dining and functions venue at 1
              Crockford Street in Port Melbourne. From private dinners to
              larger celebrations, the team can help match your occasion to
              the right space.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a href="#enquire-section" className={primaryButton}>
                Enquire about a function
              </a>
              <Link href="/spaces" className={secondaryButton}>
                View function spaces
              </Link>
            </div>
          </div>

          <div className="relative lg:col-span-6 lg:pl-6">
            <div className="relative min-h-[28rem] overflow-hidden md:min-h-[38rem]">
              <Image
                src="/spaces/function-room.jpeg"
                alt="A private function setup at The Cornerstone Pub in Port Melbourne"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-blue/40 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
            <div className="absolute -bottom-6 left-0 bg-blue px-5 py-4 text-white sm:left-auto sm:right-0 sm:px-7">
              <p className="text-xs uppercase tracking-[0.25em] text-white/60">
                Private events
              </p>
              <p className="mt-1 text-xl font-bold heading-aleo">
                Spaces for 8–300 guests
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-blue/10 bg-white py-16 md:py-24">
        <div className="container-responsive grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brown">
              Made for gathering
            </p>
            <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.95] tracking-tight heading-aleo md:text-5xl">
              Private events, group dining and venue hire
            </h2>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="max-w-3xl text-xl leading-9 text-blue/80 md:text-2xl md:leading-10">
              Whether you are organising a birthday, engagement, corporate
              function or another private occasion, share your guest number,
              preferred date and event style with the team. They can guide you
              through the available space and current food and drinks options.
            </p>
            <div className="mt-9 flex flex-wrap gap-x-8 gap-y-4 border-t border-blue/15 pt-6">
              <Link
                href="/menus/events_menu"
                className="font-semibold text-brown underline decoration-brown/40 underline-offset-8 transition-colors hover:text-blue"
              >
                View functions menu
              </Link>
              <Link
                href="/food"
                className="font-semibold text-brown underline decoration-brown/40 underline-offset-8 transition-colors hover:text-blue"
              >
                Explore pub dining
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue py-20 text-white md:py-28">
        <div className="container-responsive">
          <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brown">
                Spaces and capacities
              </p>
              <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.95] tracking-tight heading-aleo md:text-6xl">
                Choose a setting that fits your event
              </h2>
            </div>
            <p className="leading-7 text-white/70 lg:col-span-4 lg:col-start-9">
              Capacities below reflect the venue information currently
              published on this website. Confirm the most suitable room,
              configuration and availability as part of your enquiry.
            </p>
          </div>

          <div className="mt-14 grid gap-x-6 gap-y-12 md:grid-cols-2">
            {spaces.map((space, index) => (
              <article
                key={space.name}
                className={index % 2 === 1 ? "md:mt-20" : undefined}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={space.image}
                    alt={space.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.025]"
                  />
                </div>
                <div className="grid gap-4 border-t border-white/25 pt-5 sm:grid-cols-[1fr_auto] sm:items-start">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-brown">
                      {space.capacity}
                    </p>
                    <h3 className="mt-2 text-3xl font-bold heading-aleo">
                      {space.name}
                    </h3>
                  </div>
                  <p className="max-w-xs text-sm leading-6 text-white/65 sm:text-right">
                    {space.use}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <Link
            href="/spaces"
            className="mt-14 inline-flex border-b border-brown pb-1 font-semibold text-brown transition-colors hover:border-white hover:text-white"
          >
            See photos and an overview of the function spaces
          </Link>
        </div>
      </section>

      <section className="relative min-h-[34rem] md:min-h-[44rem]">
        <Image
          src="/club/LoungePhoto2.jpg"
          alt="The warmly lit dining room at The Cornerstone Pub"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue/90 via-blue/45 to-transparent" />
        <div className="container-responsive relative flex min-h-[34rem] items-center py-16 text-white md:min-h-[44rem]">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brown">
              From dinner to celebration
            </p>
            <h2 className="mt-5 text-4xl font-bold uppercase leading-[0.95] tracking-tight heading-aleo md:text-6xl">
              One venue. Several ways to gather.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-white/80">
              Private dining, intimate get-togethers and larger events can each
              take their place within The Cornerstone.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#efe9e2] py-16 md:py-20" aria-label="Function types">
        <div className="container-responsive">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.3em] text-brown">
            Occasions at The Cornerstone
          </p>
          <div className="mt-10 grid border-y border-blue/15 md:grid-cols-2">
            {occasions.map((occasion, index) => (
              <article
                key={occasion.title}
                className="border-b border-blue/15 px-3 py-8 md:odd:border-r md:[&:nth-child(3)]:border-b-0 md:[&:nth-child(4)]:border-b-0 md:px-8"
              >
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xs tabular-nums text-brown" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold heading-aleo">{occasion.title}</h3>
                    <p className="mt-3 max-w-xl leading-7 text-blue/70">{occasion.copy}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="container-responsive grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brown">
              Food and beverage options
            </p>
            <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.95] tracking-tight heading-aleo md:text-6xl">
              Plan the menu around your occasion
            </h2>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="text-lg leading-8 text-blue/75">
              The current functions menu publishes platter, set-menu, drinks
              and corporate-meeting options. Review it before enquiring, then
              tell the team about your event format and guest numbers so they
              can discuss the choices currently available.
            </p>
            <p className="mt-5 leading-7 text-blue/70">
              For the wider venue offering, explore the current pub food and
              drinks pages. Menu details can change, so confirm your selections
              directly with the functions team.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/menus/events_menu" className={primaryButton}>
                View current functions menu
              </Link>
              <Link href="/food" className={secondaryButton}>
                Explore food
              </Link>
              <Link href="/drinks" className={secondaryButton}>
                Explore drinks
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-blue/10 bg-white py-20 md:py-28">
        <div className="container-responsive grid gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brown">
              Planning your occasion
            </p>
            <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.95] tracking-tight heading-aleo md:text-6xl">
              A clear path from idea to event
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-8 text-blue/70">
              Start with the essentials and the functions team can help you
              work through the available space and current options.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <h3 className="sr-only">How function enquiries work</h3>
            <ol className="divide-y divide-blue/15 border-y border-blue/15">
              <li className="grid gap-4 py-7 sm:grid-cols-[4rem_1fr]">
                <span className="text-3xl text-brown heading-aleo" aria-hidden="true">
                  01
                </span>
                <div>
                  <strong className="text-xl heading-aleo">Share the basics.</strong>
                  <p className="mt-2 leading-7 text-blue/70">
                    Tell us the date, guest number and occasion.
                  </p>
                </div>
              </li>
              <li className="grid gap-4 py-7 sm:grid-cols-[4rem_1fr]">
                <span className="text-3xl text-brown heading-aleo" aria-hidden="true">
                  02
                </span>
                <div>
                  <strong className="text-xl heading-aleo">Discuss the fit.</strong>
                  <p className="mt-2 leading-7 text-blue/70">
                    The functions team can confirm an appropriate space,
                    availability and the current options for your occasion.
                  </p>
                </div>
              </li>
              <li className="grid gap-4 py-7 sm:grid-cols-[4rem_1fr]">
                <span className="text-3xl text-brown heading-aleo" aria-hidden="true">
                  03
                </span>
                <div>
                  <strong className="text-xl heading-aleo">Confirm your event.</strong>
                  <p className="mt-2 leading-7 text-blue/70">
                    Finalise your arrangements directly with the venue.
                  </p>
                </div>
              </li>
            </ol>
            <a href="#enquire-section" className={`${primaryButton} mt-8`}>
              Start your enquiry
            </a>
          </div>
        </div>
      </section>

      <section className="bg-blue py-16 text-white md:py-20">
        <div className="container-responsive grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brown">
              Port Melbourne location
            </p>
            <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.95] tracking-tight heading-aleo md:text-5xl">
              Functions at 1 Crockford Street
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/75">
              The Cornerstone Pub is located at 1 Crockford Street, Port
              Melbourne VIC 3207. Include your preferred date and guest number
              when you contact the team about venue hire.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <a href="#enquire-section" className="inline-flex min-h-12 items-center justify-center bg-brown px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-blue">
              Make a function enquiry
            </a>
            <Link href="/contact" className="inline-flex min-h-12 items-center justify-center border border-white/50 px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-blue">
              Contact the venue
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#f8f5f2] py-20 md:py-28">
        <div className="container-responsive">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brown">
                Inside The Cornerstone
              </p>
              <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.95] tracking-tight heading-aleo md:text-6xl">
                The venue in motion
              </h2>
            </div>
            <p className="max-w-lg leading-7 text-blue/70 md:justify-self-end">
              A closer look at the atmosphere, gathering spaces and live-event
              setting inside the Port Melbourne venue.
            </p>
          </div>

          <div className="mt-12 grid auto-rows-[18rem] gap-4 md:grid-cols-12 md:auto-rows-[22rem]">
            <div className="relative overflow-hidden md:col-span-7 md:row-span-2">
              <Image
                src="/club/_85A7725.webp"
                alt="Guests gathering inside The Cornerstone Pub"
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden md:col-span-5">
              <Image
                src="/club/_85A7873.webp"
                alt="Live music and guests at The Cornerstone Pub"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
            <div className="relative overflow-hidden md:col-span-5">
              <Image
                src="/gallery/img-14-optimized.webp"
                alt="The Cornerstone menu and illuminated venue sign"
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-blue/10 bg-white py-20 md:py-28">
        <div className="container-responsive grid gap-12 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brown">
              Helpful details
            </p>
            <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.95] tracking-tight heading-aleo md:text-6xl">
              Functions FAQs
            </h2>
          </div>

          <div className="border-t border-blue/20 lg:col-span-7 lg:col-start-6">
            {faqs.map((faq, index) => (
              <details key={faq.question} className="group border-b border-blue/20">
                <summary className="flex cursor-pointer list-none items-start gap-5 py-6 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brown [&::-webkit-details-marker]:hidden">
                  <span className="mt-1 text-xs tabular-nums text-brown" aria-hidden="true">
                    0{index + 1}
                  </span>
                  <h3 className="flex-1 text-xl font-bold leading-7 heading-aleo md:text-2xl">
                    {faq.question}
                  </h3>
                  <span
                    className="mt-1 text-2xl leading-none text-brown transition-transform duration-300 group-open:rotate-45"
                    aria-hidden="true"
                  >
                    +
                  </span>
                </summary>
                <p className="max-w-2xl pb-7 pl-9 leading-7 text-blue/70">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brown py-16 text-white md:py-20">
        <div className="container-responsive grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue">
              Ready when you are
            </p>
            <h2 className="mt-4 text-4xl font-bold uppercase leading-[0.95] tracking-tight heading-aleo md:text-6xl">
              Tell us what you are planning
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:justify-end">
            <a
              href="#enquire-section"
              className="inline-flex min-h-12 items-center justify-center bg-blue px-6 py-3 text-center text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white hover:text-blue focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Enquire now
            </a>
          </div>
        </div>
      </section>

      <FunctionEnquiryForm />
    </main>
  );
}
