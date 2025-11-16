"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Social_supper from "../../../../public/home/social_supper.webp";
import Saturday from "../../../../public/home/Food_5.jpg";
import rooftop from "../../../../public/home/happy_hour.jpg";
// import bgTexture from "../../../../public/home/white-bg-texture.jpg";

// Types
interface EventCard {
  image: typeof Social_supper;
  title: string;
  schedule: string;
  description: string;
  alt: string;
  hasMenuButton?: boolean;
}

// Constants
const EVENTS: EventCard[] = [
  {
    image: Social_supper,
    title: "Midweek Mingle",
    schedule: "Wednesdays | Midday – 11 PM",
    description:
      "Unwind midweek with refreshing cocktails, comfort food, and live beats — the perfect way to recharge before the weekend!",
    alt: "Midweek Mingle at Cornerstone Pub - Wednesdays from midday to 11 PM with cocktails, comfort food, and live music",
  },
  {
    image: Saturday,
    title: "Trivia nights",
    schedule: "Wednesday | 6:30 PM – 10 PM",
    description:
      "Gather your friends for an unforgettable dining experience every Wednesday evening, featuring chef specials and great vibes till late.",
    alt: "Trivia nights at Cornerstone Pub - Wednesday evenings from 6:30 PM to 10 PM with chef specials and great dining experience",
  },
  {
    image: rooftop,
    title: "Happy Hours",
    schedule: "Weekdays | 5-7 PM",
    description:
      "Turn weekdays into weekends! Join us 5–7pm for $5 pots, $10 pints, $8 wines & spirits at Cornerstone Port Melbourne. Great drinks, better company.",
    alt: "Happy Hours at Cornerstone Pub Port Melbourne - Weekdays 5-7 PM with discounted drinks including $5 pots, $10 pints, $8 wines and spirits",
    hasMenuButton: true,
  },
];

const BUTTON_BASE_CLASSES =
  "uppercase rounded-md bg-brown py-1 transition-all duration-300 font-semibold font-aleo tracking-widest border-2 border-brown hover:bg-transparent hover:text-brown text-white";

const WhatsOn = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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

        <section>
          <div className="py-20">
            <div className="flex justify-center flex-wrap w-full items-center">
              {EVENTS.map((event, index) => (
                <div
                  key={index}
                  className="flex flex-col flex-1 items-center text-center"
                >
                  <div className="w-72 max-md:w-64 max-sm:w-52 relative aspect-square">
                    <Image
                      src={event.image}
                      className="rounded-[50%] object-cover"
                      alt={event.alt}
                      fill
                    />
                  </div>
                  <h3 className="py-3 heading-aleo text-3xl max-sm:text-2xl uppercase">
                    {event.title}
                  </h3>
                  <h5 className="text-2xl max-sm:text-xl heading-aleo uppercase">
                    {event.schedule}
                  </h5>
                  <div className="text-lg max-sm:text-base w-3/4 max-md:w-full text-lexend text-blue">
                    <p>{event.description}</p>
                    {event.hasMenuButton && (
                      <button
                        onClick={toggleMenu}
                        className={`${BUTTON_BASE_CLASSES} px-5 max-sm:px-6 mt-3`}
                      >
                        Happy Hour Menu
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Happy Hour Menu Modal */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-50 overflow-auto">
            <div className="max-w-3xl w-full bg-white p-4 flex relative justify-center rounded-lg m-4">
              <img
                src="/menu/happy_hour_Menu/15 dollar menu.pdf_page-0001.jpg"
                alt="Cornerstone Pub Happy Hour menu - weekday specials from 5-7 PM featuring discounted drinks, $5 pots, $10 pints, $8 wines and spirits"
                className="w-full max-h-[80vh] object-contain"
              />
              <button
                onClick={toggleMenu}
                className="absolute bg-brown m-4 text-white z-10 top-0 px-4 py-2 rounded-lg right-0"
              >
                CLOSE
              </button>
            </div>
          </div>
        )}

        <div>
          <Link
            href="/events"
            className={`${BUTTON_BASE_CLASSES} px-12 max-sm:px-6 py-3`}
          >
            See all Events
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WhatsOn;
