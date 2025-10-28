"use client";
// import bgTexture from "../../../../public/home/white-bg-texture.jpg";
import Social_supper from "../../../../public/home/social_supper.webp";
import Saturday from "../../../../public/home/Food_5.jpg";
import rooftop from "../../../../public/home/happy_hour.jpg";
import Image from "next/image";
import { useState } from "react";
const WhatsOn = () => {
  const [popUp, setPopUp] = useState(false);
  const toggle = () => {
    setPopUp(!popUp);
  };
  return (
    <div>
      <div
        // style={{ backgroundImage: `url(${bgTexture.src})` }}
        className="py-32 text-center"
      >
        <h3 className="text-5xl max-sm:text-4xl text-center heading-aleo">
          WHAT&apos;S ON
        </h3>

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
                <h3 className="py-3 heading-aleo text-3xl max-sm:text-2xl uppercase">
                  Midweek Mingle
                </h3>
                <h5 className="text-2xl max-sm:text-xl heading-aleo uppercase">
                  Wednesdays | Midday – 11 PM
                </h5>
                <p className="text-lg max-sm:text-base w-3/4 max-md:w-full text-lexend text-blue">
                  Unwind midweek with refreshing cocktails, comfort food, and
                  live beats — the perfect way to recharge before the weekend!
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
                <h3 className="py-3 heading-aleo text-3xl max-sm:text-2xl uppercase">
                  Trivia nights
                </h3>
                <h5 className="text-2xl max-sm:text-xl heading-aleo uppercase">
                  Wednesday | 6:30 PM – 10 PM
                </h5>
                <p className="text-lg max-sm:text-base w-3/4 max-md:w-full text-lexend text-blue">
                  Gather your friends for an unforgettable dining experience
                  every Wednesday evening, featuring chef specials and great
                  vibes till late.
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
                <h3 className="py-3 heading-aleo text-3xl max-sm:text-2xl uppercase">
                  Happy Hours
                </h3>
                <h5 className="text-2xl max-sm:text-xl heading-aleo uppercase">
                  Weekdays | 5-7 PM
                </h5>
                <p className="text-lg max-sm:text-base w-3/4 max-md:w-full text-lexend text-blue">
                  Make Weekdays Feel Like the Weekend! Unwind from 5–7pm with $5
                  pots, $10 pints, $8 wines, and $8 spirits at Cornerstone Port
                  Melbourne. Raise a glass to good company, great drinks, and
                  the perfect midweek break.
                </p>
                <button
                  onClick={toggle}
                  className="uppercase px-5 max-sm:px-6 rounded-md bg-brown py-1 transition-all duration-300 font-semibold font-aleo tracking-widest border-2 border-brown hover:bg-transparent hover:text-brown text-white "
                >
                  Happy Hour Menu
                </button>

                <div className={`${popUp ? "hidden" : "block"}`}>
                  <div className="fixed inset-0 bg-opacity-95 flex items-center justify-center z-50 overflow-auto">
                    <div className="max-w-5xl w-full bg-white p-4 flex relative justify-center rounded-lg">
                      <img
                        src="/menu/happy_hour_Menu/Happy hour counter display_page-0001.jpg"
                        alt="Cornerstone Event Menu"
                        className="w-full max-h-[80vh] object-contain"
                      />

                      <button
                        onClick={toggle}
                        className="absolute bg-brown m-4 text-white z-2 top-0 px-4 py-2 rounded-lg right-0"
                      >
                        CLOSE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
          <button className="uppercase px-12 max-sm:px-6 rounded-md bg-brown py-3 transition-all duration-300 font-semibold font-aleo tracking-widest border-2 border-brown hover:bg-transparent hover:text-brown text-white ">
            See all Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhatsOn;
