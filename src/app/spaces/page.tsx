import Image from "next/image";

const SPACES = [
  {
    id: "private-dining",
    title: "Private Dining Room",
    desc: "An intimate, elegant room ideal for celebrations and business dinners. Warm lighting and tailored menus create a cosy, private atmosphere.",
    img: "/spaces/dining-room.jpg",
  },
  {
    id: "function-room",
    title: "Function Room",
    desc: "Spacious and versatile for birthdays, launches and corporate events. Configurable seating, AV-ready and easy to customise.",
    img: "/spaces/function-room.jpg",
  },
  {
    id: "cigar-lounge",
    title: "Cigar Lounge",
    desc: "A relaxed lounge with premium spirits and curated cigars. Soft lighting and deep seating for slower, quieter moments.",
    img: "/spaces/cigar-room.jpg",
  },
];

export default function SpacesPage() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-36">

      {/* Page Header */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold">Our Spaces</h1>
        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Designed for private dining, celebrations and relaxed gatherings.
        </p>
      </div>

      {/* Spaces */}
      <div className="grid gap-10 md:grid-cols-3">
        {SPACES.map((s) => (
          <div
            key={s.id}
            className="rounded-2xl shadow-lg overflow-hidden ring-1 ring-black/5 bg-white"
          >
            <div className="relative h-56">
              <Image src={s.img} alt={s.title} fill className="object-cover" />
            </div>

            <div className="p-6">
              <h2 className="text-xl font-semibold">{s.title}</h2>
              <p className="text-gray-600 text-sm mt-3">{s.desc}</p>

              <a
                href={`/contact#${s.id}`}
                className="mt-5 inline-block px-4 py-2 text-sm bg-brown text-white rounded-full hover:bg-brown/70 transition"
              >
                Enquire Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="mt-20 bg-gray-50 p-10 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-semibold">Venue Features</h3>
        <ul className="mt-4 text-gray-600 space-y-2 text-sm">
          <li>• AV equipment (projector, mic, Bluetooth audio)</li>
          <li>• Custom menu and drinks packages</li>
          <li>• Wheelchair accessible</li>
          <li>• Setup support and event coordination</li>
        </ul>
      </div>

      {/* Gallery */}
      <div className="mt-20">
        <h3 className="text-2xl font-semibold">Gallery</h3>

        <div className="mt-4 columns-1 sm:columns-2 lg:columns-4 gap-4 space-y-4">
        {[
            "/gallery/img-1.jpg",
            "/gallery/img-2.jpg",
            "/gallery/img-3.jpg",
            "/gallery/img-4.jpg",
            "/gallery/img-5.jpg",
            "/gallery/img-6.jpg",
            "/gallery/img-7.jpg",
            "/gallery/img-8.jpg",
            "/gallery/img-9.jpg",
            "/gallery/img-10.jpg",
            "/gallery/img-11.jpg",
            "/gallery/img-12.jpg",
            "/gallery/img-13.jpg",
            "/gallery/img-14.jpg",
            "/gallery/img-15.jpg",
            "/gallery/img-16.jpg",
          ].map((src, i) => (
            <div
              key={i}
              className="relative w-full overflow-hidden rounded-lg ring-1 ring-black/5"
              style={{ aspectRatio: "4/5" }} // keeps masonry consistent
            >
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
