import bgTexture from "../../../../public/home/white-bg-texture.jpg";
import Social_supper from "../../../../public/home/social_supper.webp";
import Saturday from "../../../../public/home/saturday.webp";
import rooftop from "../../../../public/home/rooftop_image.webp";
import Image from "next/image";

const WhatsOn = () => {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgTexture.src})` }}
        className="py-32 text-center"
      >
        <h3 className="text-7xl text-center">WHAT&apos;S ON</h3>

        <section className="">
          <div className="py-20">
            <div className="grid grid-cols-3 gap-10 max-md:grid-cols-2 max-sm:grid-cols-1 justify-items-center">
              {/* Card 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-72 max-md:w-64 max-sm:w-52 relative aspect-square">
                  <Image
                    src={Social_supper}
                    className="rounded-[50%] object-cover"
                    alt=""
                    fill
                  />
                </div>
                <h3 className="py-3 font-futura text-4xl uppercase">
                  Social Supper
                </h3>
                <h5 className="text-2xl font-futura uppercase">
                  Every Thursday from 6pm
                </h5>
                <p className="text-xl w-3/4 max-md:w-full font-futura text-blue/90">
                  Experience a unique dining experience in the heart of South
                  Melbourne every Thursday from 6pm to late.
                </p>
              </div>

              {/* Card 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-72 max-md:w-64 max-sm:w-52 relative aspect-square">
                  <Image
                    src={Saturday}
                    className="rounded-[50%] object-cover"
                    alt=""
                    fill
                  />
                </div>
                <h3 className="py-3 font-futura text-4xl uppercase">
                  Saturdays in the Sky
                </h3>
                <h5 className="text-2xl font-futura uppercase">
                  Saturdays 3-8pm
                </h5>
                <p className="text-xl w-3/4 max-md:w-full font-futura text-blue/90">
                  Redeem this exclusive offer with your Saturday Reservation by
                  booking a $500 bar tab, and receive a $100 top up!
                </p>
              </div>

              {/* Card 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-72 max-md:w-64 max-sm:w-52 relative aspect-square">
                  <Image
                    src={rooftop}
                    className="rounded-[50%] object-cover"
                    alt=""
                    fill
                  />
                </div>
                <h3 className="py-3 font-futura text-4xl uppercase">
                  Happy Hour
                </h3>
                <h5 className="text-2xl font-futura uppercase">
                  Friday Nights from 3-6pm.
                </h5>
                <p className="text-xl w-3/4 max-md:w-full font-futura text-blue/90">
                  Enjoy $10 Basics, House Wine & Sparkling plus $8 Tap Beers
                  Every Friday from 3-6pm.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div>
          <button className="uppercase px-24 bg-brown py-3 font-semibold font-futura tracking-widest border-2 border-brown hover:bg-transparent hover:text-brown text-white">
            See all Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsOn;
