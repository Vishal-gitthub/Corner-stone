import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Drinks Menu | Beer, Wine & Cocktails",
  description: "View or download The Cornerstone Pub drinks menu, including beer, wine, cocktails, spirits and non-alcoholic options in Port Melbourne.",
  path: "/menus/drinks",
  image: "/menu/DrinkMenu/CornerDrinks1.jpg",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
