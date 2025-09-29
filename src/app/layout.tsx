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
  title: "The Albion Rooftop | South Melbourne's Premier Venue",
  description: "Experience South Melbourne's premier rooftop, event space and nightclub. The Albion offers stunning panoramic views, curated dining, premium cocktails, and unforgettable events.",
  keywords: "rooftop bar, South Melbourne, events, nightclub, dining, cocktails, venue hire",
  authors: [{ name: "The Albion Rooftop" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "The Albion Rooftop | South Melbourne's Premier Venue",
    description: "Experience South Melbourne's premier rooftop, event space and nightclub.",
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
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
