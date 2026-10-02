// app/layout.tsx or app/RootLayout.tsx

import type { Metadata } from "next";
import { Aleo, Lexend_Deca } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import MotionProvider from "@/components/motion/MotionProvider";
import { sitewideJsonLd, SITE_URL } from "@/lib/site";
import StructuredData from "@/components/seo/StructuredData";

// Font config
const lexend = Lexend_Deca({
  variable: "--font-lexend-loaded",
  subsets: ["latin"],
});

const aleo = Aleo({
  variable: "--font-aleo-loaded",
  subsets: ["latin"],
});

// ---- ✅ SEO METADATA ---- //
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Cornerstone Pub | Port Melbourne Pub, Dining & Function Venue",
    template: "%s | The Cornerstone Pub",
  },
  description:
    "The Cornerstone Pub is a Port Melbourne pub and dining venue serving lunch, dinner, drinks, live entertainment and private function spaces in the heart of Port Melbourne.",
  keywords: [
    "Port Melbourne pub",
    "pub in Port Melbourne",
    "Port Melbourne dining",
    "function venue Port Melbourne",
    "private dining Port Melbourne",
    "pub food Port Melbourne",
    "bar Port Melbourne",
    "events Port Melbourne",
  ],
  authors: [{ name: "The Cornerstone Pub" }],
  creator: "The Cornerstone Pub",
  publisher: "The Cornerstone Pub",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "The Cornerstone Pub | Port Melbourne Pub, Dining & Events",
    description:
      "Pub dining, drinks, weekly events and function spaces in Port Melbourne at 1 Crockford Street.",
    url: SITE_URL,
    siteName: "The Cornerstone Pub",
    type: "website",
    locale: "en_AU",
    images: [{ url: "/home/corner-outside-scaled.png", alt: "The Cornerstone Pub in Port Melbourne" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Cornerstone Pub | Port Melbourne",
    description:
      "A Port Melbourne pub serving food, drinks and events, with private dining and function spaces for gatherings of all kinds.",
    images: ["/home/corner-outside-scaled.png"],
  },
};

export const viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${lexend.variable} ${aleo.variable}`}>
      <body className="min-h-screen bg-white-cus text-blue antialiased motion-body">
        <StructuredData data={sitewideJsonLd} />
        <MotionProvider>
          <Navbar />
          <div className="flex-1">{children}</div>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
