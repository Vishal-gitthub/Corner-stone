import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "What's On in Port Melbourne",
  description: "See current weekly entertainment, trivia, live music, happy hour and social events at The Cornerstone Pub in Port Melbourne. Check details before booking.",
  path: "/whatson",
  image: "/whatson/SundayChillSessions.jpg",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
