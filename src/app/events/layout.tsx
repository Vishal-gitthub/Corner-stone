import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Function Venue in Port Melbourne",
  description: "Plan a birthday, engagement, corporate event or private gathering at The Cornerstone Pub in Port Melbourne. Explore spaces and enquire with the functions team.",
  path: "/events",
  image: "/functions/4300237_17960.jpg",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
