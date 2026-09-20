import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  title: "Function Rooms & Private Dining in Port Melbourne",
  description: "Compare The Cornerstone's private dining room, function room and lounge for functions and group events in Port Melbourne.",
  path: "/spaces",
  image: "/spaces/function-room.jpeg",
});

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) { return children; }
