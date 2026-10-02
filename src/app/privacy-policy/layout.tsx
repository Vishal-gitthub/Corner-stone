import { pageMetadata } from "@/lib/site";
import PageSchema from "@/components/seo/PageSchema";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Read The Cornerstone Pub privacy policy covering website, booking and enquiry information.",
  path: "/privacy-policy",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><PageSchema path="/privacy-policy" title="Privacy Policy" description="Read The Cornerstone Pub privacy policy covering website, booking and enquiry information." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Privacy policy" }]} />{children}</>;
}
