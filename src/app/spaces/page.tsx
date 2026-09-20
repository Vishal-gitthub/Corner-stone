import Image from "next/image";
import Link from "next/link";

const spaces = [
  { name: "Private Dining Room", capacity: "Up to 24 guests", description: "A private setting for smaller group meals and celebrations.", image: "/spaces/dining-room.jpg" },
  { name: "Function Room", capacity: "Up to 70 guests", description: "A larger private room for celebrations, group events and corporate functions.", image: "/spaces/function-room.jpeg" },
  { name: "Private Lounge", capacity: "8–10 guests", description: "A smaller setting for intimate get-togethers.", image: "/spaces/whisky-lounge.jpg" },
];

export default function SpacesPage() {
  return <main className="bg-[#f8f5f2] px-6 py-28 text-blue md:py-36">
    <section className="mx-auto max-w-7xl">
      <header className="mx-auto max-w-3xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.22em] text-brown">Functions at The Cornerstone</p>
        <h1 className="mt-4 text-4xl font-bold uppercase heading-aleo md:text-6xl">Function rooms and private dining</h1>
        <p className="mt-6 text-lg leading-relaxed text-blue/80">Explore the private spaces available for functions at The Cornerstone in Port Melbourne. Capacity, layout, package and accessibility requirements should be confirmed with the functions team.</p>
      </header>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {spaces.map((space) => <article key={space.name} className="overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-blue/10">
          <div className="relative h-64"><Image src={space.image} alt={`${space.name} at The Cornerstone Pub`} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div>
          <div className="p-6"><h2 className="text-2xl font-bold heading-aleo">{space.name}</h2><p className="mt-2 font-medium text-brown">{space.capacity}</p><p className="mt-4 leading-relaxed text-blue/80">{space.description}</p><a href="#enquire" className="mt-6 inline-block font-medium text-brown underline underline-offset-4">Ask about this space</a></div>
        </article>)}
      </div>

      <section className="mt-16 grid gap-8 rounded-2xl bg-blue p-8 text-white md:grid-cols-[1.1fr_.9fr] md:p-12" id="enquire">
        <div><h2 className="text-3xl font-bold uppercase heading-aleo md:text-5xl">Find the right space for your group</h2><p className="mt-5 text-lg leading-relaxed text-white/80">The Functions page explains the available capacities and how to make an enquiry. Use the enquiry form to confirm seated or standing layouts, food and drinks, facilities, minimum spend and availability for your date.</p></div>
        <div className="flex flex-wrap content-center gap-4 md:justify-end"><Link href="/events#enquire-section" className="rounded-md bg-brown px-6 py-3 font-medium text-white hover:bg-white hover:text-brown">Make a function enquiry</Link><Link href="/menus/events_menu" className="rounded-md border border-white px-6 py-3 font-medium text-white hover:bg-white hover:text-blue">View functions menu</Link></div>
      </section>
    </section>
  </main>;
}
