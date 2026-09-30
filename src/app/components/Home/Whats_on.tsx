"use client";

import Image from "next/image";
import Link from "next/link";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import MotionButton from "@/components/motion/MotionButton";
import TextReveal from "@/components/motion/TextReveal";
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
}

// Constants
const EVENTS: EventCard[] = [
  {
    image: Social_supper,
    title: "Midweek Mingle",
    schedule: "Wednesdays",
    description:
      "A midweek social session with food and drinks available at the venue. Check the current event details before visiting.",
    alt: "Midweek Mingle at Cornerstone Pub - Wednesdays from midday to 11 PM with cocktails, comfort food, and live music",
  },
  {
    image: Saturday,
    title: "Trivia nights",
    schedule: "Wednesday | 6:30 PM",
    description:
      "Bring your group for Wednesday trivia with food and drinks available at the venue.",
    alt: "Trivia nights at Cornerstone Pub - Wednesday evenings from 6:30 PM to 10 PM with chef specials and great dining experience",
  },
  {
    image: rooftop,
    title: "Happy Hours",
    schedule: "Weekdays | 5 PM–7 PM",
    description:
      "A weekday drinks offer listed by the venue. Check current details before visiting, as promotions can change.",
    alt: "Happy Hours at Cornerstone Pub Port Melbourne - Weekdays 5-7 PM with discounted drinks including $5 pots, $10 pints, $8 wines and spirits",
  },
];

const BUTTON_BASE_CLASSES =
  "uppercase rounded-md bg-brown py-1 transition-all duration-300 font-semibold font-aleo tracking-widest border-2 border-brown hover:bg-transparent hover:text-brown text-white";

const WhatsOn = () => {
  return (
    <div>
      <div
        // style={{ backgroundImage: `url(${bgTexture.src})` }}
        className="py-32 text-center"
      >
        <TextReveal as="h3" className="text-5xl max-sm:text-4xl text-center heading-aleo">
          WHAT&apos;S ON
        </TextReveal>

        <section>
          <div className="py-20">
            <Stagger className="flex justify-center flex-wrap w-full items-center">
              {EVENTS.map((event, index) => (
                <StaggerItem
                  key={index}
                  className="flex flex-col flex-1 items-center text-center motion-card"
                >
                  <div className="w-72 max-md:w-64 max-sm:w-52 relative aspect-square overflow-hidden rounded-[50%]">
                    <Image
                      src={event.image}
                      className="rounded-[50%] object-cover image-optimized transition-transform duration-700"
                      alt={event.alt}
                      fill
                      sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, 288px"
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
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        <div data-reveal>
          <MotionButton>
            <Link
              href="/whatson"
              className={`${BUTTON_BASE_CLASSES} px-12 max-sm:px-6 py-3 btn-hover inline-block`}
            >
              See all Events
            </Link>
          </MotionButton>
        </div>
      </div>
    </div>
  );
};

export default WhatsOn;
