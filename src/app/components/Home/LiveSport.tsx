import Image from "next/image";

const LiveSport = () => {
  return (
    <div>
      <div className="min-h-[80vh] md:h-screen relative w-full">
        <Image
          src="/home/Crowd-picture.jpg"
          className="w-full object-cover h-full"
          alt=""
          fill
        />

        {/* Centered Content Box */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-6">
          <div className="bg-white-cus/80 text-center py-10 px-6 md:py-14 md:px-8 rounded shadow-lg">
            <h1 className="text-4xl md:text-5xl mb-6 heading-aleo">
              Unwind & Connect
            </h1>
            <p className="mb-4 text-lexend text-base md:text-xl text-blue">
              Relax with friends, enjoy great vibes, and make every moment
              memorable in our vibrant outdoor space.
            </p>
            <p className="mb-6 text-lexend text-base md:text-xl text-blue">
              Space is designed for laughter, conversation, and unforgettable
              memories - the perfect place to celebrate life’s little moments or
              special occasions.
            </p>
            <a
              href="https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne?restref=304496&lang=en-AU&ot_source=Restaurant%20website"
              target="_blank"
              className="uppercase px-12 max-sm:px-6 rounded-md bg-brown py-3 transition-all duration-300 font-semibold font-aleo tracking-widest border-2 border-brown hover:bg-transparent hover:text-brown text-white "
            >
              Book a table
            </a>
          </div>
        </div>
        <section className="mb-8 md:mb-16  w-full absolute bottom-0">
          <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 rounded-2xl">
            <div className="relative flex overflow-hidden">
              <div className="flex gap-8 animate-marquee-slow">
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={idx}
                    className="flex items-center whitespace-nowrap"
                  >
                    <span className="font-semibold text-4xl md:text-7xl uppercase font-aleo tracking-wider text-white-cus">
                      Live Screens &nbsp;
                    </span>
                    <span className="font-semibold text-4xl md:text-7xl uppercase font-aleo tracking-wider text-white-cus">
                      Bigger Energy &nbsp;
                    </span>
                    <span className="font-semibold text-4xl md:text-7xl uppercase font-aleo tracking-wider text-white-cus">
                      Unforgettable Moments &nbsp;
                    </span>
                    <span className="font-semibold text-4xl md:text-7xl uppercase font-aleo tracking-wider text-white-cus">
                      Every Time &nbsp;
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex gap-8 animate-marquee-slow absolute top-0 translate-x-full">
                {[...Array(3)].map((_, idx) => (
                  <div
                    key={idx}
                    className="flex items-center whitespace-nowrap"
                  >
                    <span className="font-semibold text-7xl uppercase font-aleo tracking-wider text-white-cus">
                      Big Screens, &nbsp;
                    </span>
                    <span className="font-semibold text-7xl uppercase font-aleo tracking-wider text-white-cus">
                      Bigger Atmosphere &nbsp;
                    </span>
                    <span className="font-semibold text-7xl uppercase font-aleo tracking-wider text-white-cus">
                      Big Screens, &nbsp;
                    </span>
                    <span className="font-semibold text-7xl uppercase font-aleo tracking-wider text-white-cus">
                      Bigger Atmosphere &nbsp;
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Marquee Section */}
    </div>
  );
};

export default LiveSport;
