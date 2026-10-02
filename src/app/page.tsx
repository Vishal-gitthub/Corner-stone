import AboutSec from "./components/Home/About";
import Banner from "./components/Home/Banner";
import LiveSport from "./components/Home/LiveSport";
import Nightlife from "./components/Home/Nightlife";
import WhatsOn from "./components/Home/Whats_on";
import Link from "next/link";
import { pageMetadata } from "@/lib/site";
import PageSchema from "@/components/seo/PageSchema";

export const metadata = pageMetadata({
  title: "Port Melbourne Pub, Restaurant, Bar & Functions | The Cornerstone",
  description:
    "The Cornerstone is a Port Melbourne pub for lunch, dinner, drinks, live music and private functions at 1 Crockford Street. View menus and book a table.",
  path: "/",
});

// import Popup from "./Pop-ups/NewYear";
export default function HomePage() {
  return (
    <>
      <PageSchema
        path="/"
        title="Port Melbourne Pub, Restaurant, Bar & Functions | The Cornerstone"
        description="The Cornerstone is a Port Melbourne pub for lunch, dinner, drinks, live music and private functions at 1 Crockford Street. View menus and book a table."
      />
      <main>
      <section aria-label="Hero video banner" data-reveal>
        <Banner />
      </section>
      <section className="bg-blue py-8 text-white" aria-label="Explore The Cornerstone">
        <div className="container-responsive flex flex-wrap justify-center gap-x-7 gap-y-3 text-center text-sm font-medium md:text-base">
          <Link href="/food" className="hover:text-brown">Pub dining and food</Link>
          <Link href="/drinks" className="hover:text-brown">Drinks and bar</Link>
          <Link href="/events" className="hover:text-brown">Functions and venue hire</Link>
          <Link href="/spaces" className="hover:text-brown">Function spaces</Link>
          <Link href="/whatson" className="hover:text-brown">What&apos;s on this week</Link>
          <Link href="/menus" className="hover:text-brown">Current menus</Link>
          <Link href="/contact" className="hover:text-brown">Contact and location</Link>
        </div>
      </section>
      <section aria-label="About The Cornerstone" data-reveal>
        <AboutSec />
      </section>
      <section aria-label="Outdoor pub experience" data-reveal>
        <LiveSport />
      </section>
      <section aria-label="Weekly events preview" data-reveal>
        <WhatsOn />
      </section>
      <section aria-label="Friday and Saturday nightlife" data-reveal>
        <Nightlife />
      </section>
      {/* <Popup /> */}
      </main>
    </>
  );
}
