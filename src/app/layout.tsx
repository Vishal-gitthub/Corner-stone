import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Cornerstone Pub | South Melbourne’s Favourite Destination",
  description:
    "Discover South Melbourne’s go-to spot for great food, premium drinks, and unforgettable events. The Cornerstone offers vibrant outdoor spaces, crafted menus, and a welcoming atmosphere for every occasion.",
  keywords:
    "South Melbourne pub, outdoor bar, events, dining, cocktails, venue hire, nightlife",
  authors: [{ name: "The Cornerstone Pub" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "The Cornerstone Pub | South Melbourne’s Favourite Destination",
    description:
      "Enjoy vibrant outdoor dining, premium drinks, and memorable events at The Cornerstone Pub in South Melbourne.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-white-cus text-blue antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
