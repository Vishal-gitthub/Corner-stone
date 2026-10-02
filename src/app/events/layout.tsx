import { pageMetadata } from "@/lib/site";
import PageSchema from "@/components/seo/PageSchema";
import { eventsFaqs } from "@/lib/faqs";

const seoTitle = "Function Venue Port Melbourne | Rooms & Venue Hire";
const seoDescription =
  "Explore function rooms and venue hire at The Cornerstone in Port Melbourne for birthdays, engagements, corporate events, private dining and large celebrations.";

export const metadata = {
  ...pageMetadata({
    title: seoTitle,
    description: seoDescription,
    path: "/events",
    image: "/functions/4300237_17960.jpg",
  }),
  title: { absolute: seoTitle },
};

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><PageSchema path="/events" title={seoTitle} description={seoDescription} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Functions" }]} faqs={eventsFaqs} />{children}</>;
}
