import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Food Menu | Port Melbourne Pub Dining",
  description: "View or download the current food menu for lunch and dinner at The Cornerstone Pub in Port Melbourne.",
  path: "/menus/foods",
  image: "/menu/FoodsMenu/Cornerstone Menu May 26_page-0001.jpg",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
