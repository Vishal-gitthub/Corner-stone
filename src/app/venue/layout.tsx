import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Our Venue | Port Melbourne Pub",
  description: "Explore The Cornerstone Pub at 1 Crockford Street, Port Melbourne, including its dining, bar, outdoor and private function areas.",
  path: "/venue",
  image: "/Venue/img-1.jpg",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
