import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Cornerstone Pub E-Gifts",
  description: "Purchase an e-gift for The Cornerstone Pub in Port Melbourne.",
  path: "/e-gifts",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
