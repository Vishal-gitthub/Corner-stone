import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Contact & Opening Hours | Port Melbourne",
  description: "Contact The Cornerstone Pub, find opening hours and get directions to 1 Crockford Street, Port Melbourne VIC 3207.",
  path: "/contact",
  image: "/contact/Enquiry.jpg",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
