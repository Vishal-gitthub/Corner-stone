import { pageMetadata } from "@/lib/site";
import PageSchema from "@/components/seo/PageSchema";
import { venueFaqs } from "@/lib/faqs";

export const metadata = pageMetadata({
  title: "Port Melbourne Pub Venue",
  description: "Explore The Cornerstone Pub at 1 Crockford Street, Port Melbourne, including its dining, bar, outdoor and private function areas.",
  path: "/venue",
  image: "/Venue/img-1.jpg",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><PageSchema path="/venue" title="Port Melbourne Pub Venue" description="Explore The Cornerstone Pub at 1 Crockford Street, Port Melbourne, including its dining, bar, outdoor and private function areas." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Venue" }]} faqs={venueFaqs} />{children}</>;
}
