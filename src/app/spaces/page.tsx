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
    img: "/spaces/function-room.jpeg",
  },
  {
    id: "whisky-lounge",
    title: "Whisky Lounge",
    desc: "A relaxed and refined lounge featuring premium spirits. Soft lighting and comfortable seating for intimate gatherings.",
    img: "/spaces/whisky-lounge.jpg",
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
              <h2 className="text-xl font-aleo font-semibold">{s.title}</h2>
              <p className="text-gray-600 font-lexend text-sm mt-3">{s.desc}</p>

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

      {/* VENUE FEATURES */}
      <div className="mt-20 bg-gray-50 p-10 rounded-2xl shadow-sm">
        <h3 className="text-2xl font-semibold font-aleo mb-6">Corner Stone Features</h3>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Function Room Features */}
          <div>
            <h4 className="font-semibold mb-3 font-aleo">Function Room</h4>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• Full AV included</li>
              <li>• 85 inch TV screen</li>
              <li>• In-house music</li>
              <li>• Wireless microphone</li>
              <li>• Catering packages</li>
            </ul>
          </div>

          {/* Whisky Lounge Features */}
          <div>
            <h4 className="font-semibold mb-3 font-aleo">Whisky Lounge</h4>
            <ul className="text-gray-600 space-y-2 text-sm">
              <li>• AV connection / TV</li>
              <li>• In-house music</li>
              <li>• Personalised menu selection</li>
            </ul>
          </div>
        </div>
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
              style={{ aspectRatio: "4/5" }}
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
