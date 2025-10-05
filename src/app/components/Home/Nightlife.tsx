import bgTexture from "../../../../public/home/BgTexture.jpg";
import Image from "next/image";

const Nightlife = () => {
  return (
    <div>
      <div
        className="bg-blue/90"
        style={{ backgroundImage: `url(${bgTexture.src})` }}
      >
        <section className="px-10 py-32 flex flex-wrap max-sm:flex-col justify-center items-center max-w-7xl relative m-auto">
          {/* Left Content */}
          <div className="w-1/2 max-md:w-full p-12 max-md:p-5 max-sm:p-2 text-center">
            <h2 className="text-7xl max-sm:text-5xl uppercase text-white-cus heading-aleo">
              Nightlife
            </h2>
            <h3 className="text-2xl pt-2 max-sm:text-xl uppercase text-white-cus heading-aleo">
              FRIDAYS & SATURDAYS
            </h3>
            <p className="p-10 max-sm:p-4 text-white-cus text-lexend">
              As night falls, The Albion Rooftop comes to life. Fridays bring
              the vibrant energy of OYE Latino, while Saturdays are reserved for
              Alumbra Saturdays – a refined evening of music, lifestyle &
              couture.
            </p>
            <div className="flex flex-col gap-12 justify-center items-center">
              <button className="uppercase px-32 py-5 font-semibold font-lexend tracking-widest border-2 border-brown bg-brown hover:bg-transparent hover:text-brown text-white">
                See Club info
              </button>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-1/2 relative max-md:w-full">
            {/* Main image */}
            <div className="relative w-full h-[95vh]">
              <Image
                src="/home/nightlife_2.webp"
                alt="Nightlife"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Overlay signs */}
            <Image
              src="/home/CLUB_sign.png"
              alt="Club sign"
              width={300} // ~w-56
              height={100}
              className="absolute -top-10 -left-10 max-md:hidden"
            />
            <Image
              src="/home/Unforgettable+Nights_sign.png"
              alt="Unforgettable Nights sign"
              width={288} // ~w-72
              height={100}
              className="absolute -bottom-10 -left-20 max-md:hidden"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Nightlife;
