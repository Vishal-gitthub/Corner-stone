import Image from "next/image";

const LiveSport = () => {
  return (
    <div>
      <div className="h-screen relative w-full">
        <Image
          src="/home/Crowd-picture.webp"
          className="w-full object-cover h-full"
          alt=""
          fill
        />

        {/* Centered Content Box */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl px-6">
          <div className="bg-white-cus/80 text-center py-14 px-8 rounded shadow-lg">
            <h1 className="text-5xl mb-6 heading-aleo">Live Sport</h1>
            <p className="mb-4 text-lexend text-xl text-blue/90">
              The Albion Rooftop offers an elevated viewing experience
              complemented by premium drinks and a vibrant atmosphere.
            </p>
            <p className="mb-6 text-lexend text-xl text-blue/90">
              From football and rugby to cricket and beyond, every major game is
              showcased across multiple screens, allowing you to enjoy the
              action in style.
            </p>
            <button className="border-2 uppercase tracking-widest font-lexend px-14 py-3 text-white hover:text-brown border-brown bg-brown hover:bg-transparent">
              Book a table
            </button>
          </div>
        </div>
        <section className="mb-16 absolute w-full overflow-x-hidden overflow-y-hidden bottom-16 left-0">
          <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 rounded-2xl">
            <div className="relative flex overflow-hidden">
              <div className="flex gap-8 animate-marquee-slow">
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
