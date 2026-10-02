import { BOOKING_URL, type FaqItem } from "./site";

export type WeeklyEvent = {
  id: string;
  name: string;
  day: string;
  time?: string;
  shortDescription: string;
  image: string;
  active: boolean;
  bookingUrl: string;
  offer?: string;
  featuredOnHome?: boolean;
};

export const weeklyEvents: WeeklyEvent[] = [
  {
    id: "happy-hour",
    name: "Happy hour",
    day: "Weekdays",
    time: "5pm–7pm",
    shortDescription:
      "A weekday drinks offer at The Cornerstone. Offers can change, so check the current details before visiting.",
    image: "/home/happy_hour.jpg",
    active: true,
    bookingUrl: BOOKING_URL,
    featuredOnHome: true,
  },
  {
    id: "trivia",
    name: "Trivia night",
    day: "Wednesdays",
    shortDescription:
      "Bring your group for Wednesday trivia with food and drinks available. The published start time is being verified, so confirm it with the venue before visiting.",
    image: "/home/social_supper.webp",
    active: true,
    bookingUrl: BOOKING_URL,
    featuredOnHome: true,
  },
  {
    id: "friday-live-music",
    name: "Friday live music",
    day: "Fridays",
    time: "8pm–11pm",
    shortDescription: "Friday evening live entertainment at The Cornerstone.",
    image: "/club/band.webp",
    active: true,
    bookingUrl: BOOKING_URL,
    featuredOnHome: true,
  },
  {
    id: "saturday-groove",
    name: "Saturday groove sessions",
    day: "Saturdays",
    time: "6pm–9pm",
    shortDescription: "Live tunes and a relaxed Saturday evening atmosphere.",
    image: "/whatson/10948067.jpg",
    active: true,
    bookingUrl: BOOKING_URL,
  },
  {
    id: "saturday-dj",
    name: "DJ Saturday nights",
    day: "Saturdays",
    time: "From 9pm",
    shortDescription: "Saturday DJ sets for a later-night social experience.",
    image: "/whatson/dj.jpg",
    active: true,
    bookingUrl: BOOKING_URL,
  },
  {
    id: "sunday-session",
    name: "Sunday chill sessions",
    day: "Sundays",
    time: "3pm–6pm",
    shortDescription: "A Sunday afternoon session with food and drinks available.",
    image: "/whatson/SundayChillSessions.jpg",
    active: true,
    bookingUrl: BOOKING_URL,
  },
  {
    id: "lunch-menu",
    name: "Lunch menu offer",
    day: "Every day",
    shortDescription:
      "A $15.00 lunch-menu offer is currently listed by the venue. Check the current menu before visiting.",
    image: "/home/Food_4.jpg",
    active: true,
    bookingUrl: BOOKING_URL,
    offer: "$15.00 lunch menu",
  },
];

export const activeWeeklyEvents = weeklyEvents.filter((event) => event.active);
export const homepageWeeklyEvents = activeWeeklyEvents.filter(
  (event) => event.featuredOnHome,
);

export function eventSchedule(event: WeeklyEvent) {
  return event.time ? `${event.day}, ${event.time}` : `${event.day} — confirm time`;
}

export function getWeeklyEvent(id: WeeklyEvent["id"]) {
  return weeklyEvents.find((event) => event.id === id);
}

const trivia = getWeeklyEvent("trivia");
const happyHour = getWeeklyEvent("happy-hour");

export const whatsOnFaqs: FaqItem[] = [
  {
    question: "Does The Cornerstone have live music?",
    answer:
      "The current weekly program lists live entertainment on Friday and Saturday. Check the latest event details before making plans.",
  },
  {
    question: "Is there a trivia night in Port Melbourne?",
    answer: trivia
      ? `${trivia.name} is listed for ${trivia.day}. The start time is being verified, so confirm it with the venue before visiting.`
      : "Check the current weekly program for trivia details.",
  },
  {
    question: "Does The Cornerstone have happy hour?",
    answer: happyHour
      ? `${happyHour.name} is listed for ${eventSchedule(happyHour)}. Offers can change, so confirm the current details with the venue.`
      : "Check the current weekly program for happy-hour details.",
  },
  {
    question: "Is there weekend entertainment at The Cornerstone?",
    answer:
      "The current program lists Friday live music, Saturday groove sessions and DJ sets, plus a Sunday afternoon session. Check the current times before visiting.",
  },
  {
    question: "Should I book for a weekly event?",
    answer:
      "Bookings are recommended for groups and busy periods. Use the table-booking link to reserve before you visit.",
  },
];
