import { pageMetadata } from "@/lib/site";
import PageSchema from "@/components/seo/PageSchema";

export const metadata = pageMetadata({
  title: "Contact The Cornerstone Pub Port Melbourne",
  description: "Contact The Cornerstone Pub in Port Melbourne, view verified opening hours, book a table or find us at 1 Crockford Street, Port Melbourne VIC 3207.",
  path: "/contact",
  image: "/contact/Enquiry.jpg",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><PageSchema path="/contact" title="Contact The Cornerstone Pub Port Melbourne" description="Contact The Cornerstone Pub in Port Melbourne, view verified opening hours, book a table or find us at 1 Crockford Street, Port Melbourne VIC 3207." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]} />{children}</>;
}
