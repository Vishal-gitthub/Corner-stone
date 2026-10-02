import { pageMetadata } from "@/lib/site";
import PageSchema from "@/components/seo/PageSchema";

export const metadata = pageMetadata({
  title: "Food Menu | The Cornerstone Pub",
  description: "View or download the current food menu for lunch and dinner at The Cornerstone Pub in Port Melbourne.",
  path: "/menus/foods",
  image: "/menu/FoodsMenu/Cornerstone Menu May 26_page-0001.jpg",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><PageSchema path="/menus/foods" title="Food Menu | The Cornerstone Pub" description="View or download the current food menu for lunch and dinner at The Cornerstone Pub in Port Melbourne." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Menus", href: "/menus" }, { label: "Food menu" }]} />{children}</>;
}
