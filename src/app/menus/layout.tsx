import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Food, Drinks & Function Menus",
  description: "View the current food, drinks and event menus for The Cornerstone Pub in Port Melbourne, with downloadable menu PDFs.",
  path: "/menus",
  image: "/menu/menu book.jpg",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
