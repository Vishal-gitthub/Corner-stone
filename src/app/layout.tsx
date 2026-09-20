// app/layout.tsx or app/RootLayout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import MotionProvider from "@/components/motion/MotionProvider";
import { localBusinessJsonLd } from "@/lib/site";

// Font config
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ---- ✅ SEO METADATA ---- //
export const metadata: Metadata = {
  metadataBase: new URL("https://cornerstonepub.com.au"),
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
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
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
    url: "https://cornerstonepub.com.au",
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-white-cus text-blue antialiased motion-body">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <MotionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
