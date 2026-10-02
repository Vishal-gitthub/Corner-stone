import { pageMetadata } from "@/lib/site";
import PageSchema from "@/components/seo/PageSchema";

export const metadata = pageMetadata({
  title: "Drinks Menu | The Cornerstone Pub",
  description: "View or download The Cornerstone Pub drinks menu, including beer, wine, cocktails, spirits and non-alcoholic options in Port Melbourne.",
  path: "/menus/drinks",
  image: "/menu/DrinkMenu/CornerDrinks1.jpg",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><PageSchema path="/menus/drinks" title="Drinks Menu | The Cornerstone Pub" description="View or download The Cornerstone Pub drinks menu, including beer, wine, cocktails, spirits and non-alcoholic options in Port Melbourne." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Menus", href: "/menus" }, { label: "Drinks menu" }]} />{children}</>;
}
