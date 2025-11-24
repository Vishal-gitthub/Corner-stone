import Link from "next/link";
import bgTexture from "../../../../public/home/BgTexture.jpg";
import Image from "next/image";

const Nightlife = () => {
  return (
    <div>
      <div
        className="bg-blue"
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
              When the sun goes down, The Cornerstone lights up. Fridays set the
              tone with lively beats and great company, while Saturdays bring a
              mix of music, energy, and style - the perfect way to celebrate the
              weekend.
            </p>
            <div className="flex flex-col gap-12 justify-center items-center">
              <Link
                href="/venue"
                className="uppercase px-12 max-sm:px-6 rounded-md bg-brown py-3 font-aleo transition-all duration-300 font-semibold tracking-widest border-2 border-brown hover:bg-transparent hover:text-brown text-white "
              >
                Check Venue Details
              </Link>
            </div>
          </div>

          {/* Right Content */}
          <div className="w-1/2 relative max-md:w-full">
            {/* Main image */}
            <div className="relative w-full h-[95vh]">
              <Image
                src="/home/nightlife_2.webp"
                alt="Cornerstone Pub nightlife scene on Fridays and Saturdays with vibrant atmosphere, live music, cocktails, and social gathering in Port Melbourne"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Overlay signs */}
            <h2 className="absolute leading-1 uppercase top-0 max-md:hidden -left-10  text-[150px] max-lg:text-[100px] font-aleo max-md:text-[80px] z-2 max-sm:text-[50px] max-sm:hidden text-brown">
              {/* CLUB */}
            </h2>
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
