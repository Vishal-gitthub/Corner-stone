import { pageMetadata } from "@/lib/site";
import PageSchema from "@/components/seo/PageSchema";

export const metadata = pageMetadata({
  title: "Cornerstone Pub E-Gifts",
  description: "Purchase an e-gift for The Cornerstone Pub in Port Melbourne.",
  path: "/e-gifts",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><PageSchema path="/e-gifts" title="Cornerstone Pub E-Gifts" description="Purchase an e-gift for The Cornerstone Pub in Port Melbourne." breadcrumbs={[{ label: "Home", href: "/" }, { label: "E-gifts" }]} />{children}</>;
}
