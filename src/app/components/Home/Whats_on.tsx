"use client";

import Image from "next/image";
import Link from "next/link";
import Stagger, { StaggerItem } from "@/components/motion/Stagger";
import MotionButton from "@/components/motion/MotionButton";
import TextReveal from "@/components/motion/TextReveal";
import { eventSchedule, homepageWeeklyEvents } from "@/lib/weeklyEvents";

const BUTTON_BASE_CLASSES =
  "uppercase rounded-md bg-brown py-1 transition-all duration-300 font-semibold font-aleo tracking-widest border-2 border-brown hover:bg-transparent hover:text-brown text-white";

const WhatsOn = () => {
  return (
    <div>
      <div className="py-32 text-center">
        <TextReveal as="h2" className="text-5xl max-sm:text-4xl text-center heading-aleo">
          WHAT&apos;S ON IN PORT MELBOURNE
        </TextReveal>

        <p className="mx-auto mt-5 max-w-2xl px-6 font-lexend text-blue">
          Browse the weekly activities currently listed by The Cornerstone, then
          check the latest details before planning your visit.
        </p>

        <section>
          <div className="py-20">
            <Stagger className="flex justify-center flex-wrap w-full items-center">
              {homepageWeeklyEvents.map((event) => (
                <StaggerItem
                  key={event.id}
                  className="flex flex-col flex-1 items-center text-center motion-card"
                >
                  <div className="w-72 max-md:w-64 max-sm:w-52 relative aspect-square overflow-hidden rounded-[50%]">
                    <Image
                      src={event.image}
                      className="rounded-[50%] object-cover image-optimized transition-transform duration-700"
                      alt={`${event.name} at The Cornerstone Pub in Port Melbourne`}
                      fill
                      sizes="(max-width: 640px) 208px, (max-width: 768px) 256px, 288px"
                    />
                  </div>
                  <h3 className="py-3 heading-aleo text-3xl max-sm:text-2xl uppercase">
                    {event.name}
                  </h3>
                  <p className="text-2xl max-sm:text-xl heading-aleo uppercase">
                    {eventSchedule(event)}
                  </p>
                  <div className="text-lg max-sm:text-base w-3/4 max-md:w-full text-lexend text-blue">
                    <p>{event.shortDescription}</p>
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
              View What&apos;s On
            </Link>
          </MotionButton>
        </div>
      </div>
    </div>
  );
};

export default WhatsOn;
