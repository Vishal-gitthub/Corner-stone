import type { Metadata } from "next";

export const SITE_URL = "https://cornerstonepub.com.au";
export const BOOKING_URL =
  "https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne?restref=304496&lang=en-AU&ot_source=Restaurant%20website";

export const business = {
  name: "The Cornerstone Pub",
  telephone: "+61 3 9645 1405",
  displayTelephone: "(03) 9645 1405",
  email: "bookings@cornerstonepub.com.au",
  streetAddress: "1 Crockford Street",
  locality: "Port Melbourne",
  region: "VIC",
  postalCode: "3207",
  country: "AU",
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
  const canonical = path === "/" ? "/" : path.replace(/\/$/, "");

  return {
    title,
    description,
    alternates: { canonical },
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

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
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
  menu: `${SITE_URL}/menus`,
  sameAs: [
    "https://www.instagram.com/cornerstone.melb/",
    "https://www.facebook.com/share/1LUEPjPXML/",
    "https://www.opentable.com.au/r/the-cornerstone-reservations-port-melbourne",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
      opens: "12:00",
      closes: "22:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday"],
      opens: "12:00",
      closes: "00:00",
    },
  ],
};
