import { pageMetadata } from "@/lib/site";
import Breadcrumbs from "@/components/seo/Breadcrumbs";

export const metadata = pageMetadata({
  title: "Functions & Events Menu",
  description: "View or download The Cornerstone Pub functions and events menu for private celebrations and corporate events in Port Melbourne.",
  path: "/menus/events_menu",
  image: "/menu/events_menu/Cornerstone Event Menus_page-0001.jpg",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <><Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Menus", href: "/menus" }, { label: "Functions menu" }]} />{children}</>;
}
