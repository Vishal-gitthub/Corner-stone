import type { Metadata } from "next";

export const SITE_URL = "https://www.thecornerstonepub.com.au";
export const BOOKING_URL =
  "https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne?restref=304496&lang=en-AU&ot_source=Restaurant%20website";
export const MAPS_URL = "https://maps.app.goo.gl/g97kv5vxhA6FeNdo6";

export const MENU_URLS = {
  hub: `${SITE_URL}/menus`,
  food: `${SITE_URL}/menus/foods`,
  drinks: `${SITE_URL}/menus/drinks`,
  functions: `${SITE_URL}/menus/events_menu`,
} as const;

export const SOCIAL_URLS = [
  "https://www.instagram.com/cornerstone.melb/",
  "https://www.facebook.com/share/1LUEPjPXML/",
  "https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne",
] as const;

export const OPENING_HOURS = [
  {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
    label: "Monday–Thursday and Sunday",
    opens: "12:00",
    closes: "22:00",
  },
  {
    days: ["Friday", "Saturday"],
    label: "Friday–Saturday",
    opens: "12:00",
    closes: "00:00",
  },
] as const;

export const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

export function formatOpeningTime(time: string) {
  if (time === "12:00") return "Midday";
  if (time === "00:00") return "Midnight";
  const [hour, minute] = time.split(":").map(Number);
  const suffix = hour >= 12 ? "pm" : "am";
  const displayHour = hour % 12 || 12;
  return `${displayHour}${minute ? `:${String(minute).padStart(2, "0")}` : ""}${suffix}`;
}

export function openingHoursForDay(day: (typeof WEEKDAYS)[number]) {
  const hours = OPENING_HOURS.find((entry) => entry.days.some((entryDay) => entryDay === day));
  return hours ? `${formatOpeningTime(hours.opens)} – ${formatOpeningTime(hours.closes)}` : "";
}

export const business = {
  name: "The Cornerstone Pub",
  url: SITE_URL,
  telephone: "+61 3 9645 1405",
  displayTelephone: "(03) 9645 1405",
  telephoneHref: "tel:+61396451405",
  email: "bookings@cornerstonepub.com.au",
  streetAddress: "1 Crockford Street",
  locality: "Port Melbourne",
  region: "VIC",
  postalCode: "3207",
  country: "AU",
  formattedAddress: "1 Crockford Street, Port Melbourne VIC 3207",
  mapsUrl: MAPS_URL,
  bookingUrl: BOOKING_URL,
  menus: MENU_URLS,
  socialUrls: SOCIAL_URLS,
  openingHours: OPENING_HOURS,
} as const;

export function pageMetadata({
  title,
  description,
  path,
  image = "/home/corner-outside-scaled.png",
}: {
  title: string;
  description: string;
  path: string;
  image?: string;
}): Metadata {
  const canonicalPath = path === "/" ? "/" : path.replace(/\/$/, "");
  const canonical = new URL(canonicalPath, SITE_URL).toString();

  return {
    title,
    description,
    alternates: { canonical },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: business.name,
      locale: "en_AU",
      type: "website",
      images: [{ url: image, alt: `${business.name}, Port Melbourne` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

export const venueJsonLd = {
  "@context": "https://schema.org",
  "@type": ["BarOrPub", "FoodEstablishment"],
  "@id": `${SITE_URL}/#venue`,
  name: business.name,
  url: SITE_URL,
  image: `${SITE_URL}/home/corner-outside-scaled.png`,
  logo: `${SITE_URL}/logo.png`,
  telephone: business.telephone,
  email: business.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: business.streetAddress,
    addressLocality: business.locality,
    addressRegion: business.region,
    postalCode: business.postalCode,
    addressCountry: business.country,
  },
  servesCuisine: "Australian",
  acceptsReservations: true,
  menu: Object.values(MENU_URLS),
  sameAs: [...SOCIAL_URLS],
  openingHoursSpecification: OPENING_HOURS.map((hours) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [...hours.days],
    opens: hours.opens,
    closes: hours.closes,
  })),
};

export const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: business.name,
  inLanguage: "en-AU",
  publisher: { "@id": `${SITE_URL}/#venue` },
};

export const sitewideJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { ...venueJsonLd, "@context": undefined },
    { ...websiteJsonLd, "@context": undefined },
  ],
};

export type BreadcrumbItem = { label: string; href?: string };
export type FaqItem = { question: string; answer: string };

export function pageJsonLd({
  path,
  title,
  description,
  breadcrumbs,
  faqs,
}: {
  path: string;
  title: string;
  description: string;
  breadcrumbs?: BreadcrumbItem[];
  faqs?: FaqItem[];
}) {
  const url = new URL(path, SITE_URL).toString();
  const breadcrumbId = `${url}#breadcrumb`;
  const page = {
    "@type": faqs?.length ? ["WebPage", "FAQPage"] : "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: title,
    description,
    inLanguage: "en-AU",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#venue` },
    ...(breadcrumbs?.length ? { breadcrumb: { "@id": breadcrumbId } } : {}),
    ...(faqs?.length
      ? {
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: { "@type": "Answer", text: faq.answer },
          })),
        }
      : {}),
  };

  const breadcrumb = breadcrumbs?.length
    ? {
        "@type": "BreadcrumbList",
        "@id": breadcrumbId,
        itemListElement: breadcrumbs.map((item, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.label,
          item: new URL(item.href ?? path, SITE_URL).toString(),
        })),
      }
    : null;

  return {
    "@context": "https://schema.org",
    "@graph": breadcrumb ? [page, breadcrumb] : [page],
  };
}
