import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "Read The Cornerstone Pub privacy policy covering website, booking and enquiry information.",
  path: "/privacy-policy",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
