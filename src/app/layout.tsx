// app/layout.tsx or app/RootLayout.tsx

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";

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
  title: "The Cornerstone Pub | Port Melbourne's Favourite Pub & Event Venue",
  description:
    "The Cornerstone Pub in Port Melbourne offers craft beer, delicious pub food, live sports, and a relaxed, welcoming vibe. Ideal for casual dining, groups, and events.",
  keywords:
    "Port Melbourne pub, craft beer, pub food, live sports, group dining, functions, pub events",
  authors: [{ name: "The Cornerstone Pub" }],
  creator: "The Cornerstone Pub",
  publisher: "The Cornerstone Pub",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
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
    title: "The Cornerstone Pub | Port Melbourne",
    description:
      "Craft beer, classic pub food, sports on screen, and event spaces. The Cornerstone is your go-to pub in Port Melbourne.",
    url: "https://cornerstonepub.com.au",
    siteName: "The Cornerstone Pub",
    type: "website",
    locale: "en_AU",
    images: [
      {
        url: "https://cornerstonepub.com.au/logo.png", // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: "The Cornerstone Pub in Port Melbourne",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Cornerstone Pub | Port Melbourne",
    description:
      "Port Melbourne's favourite pub for food, beer, and good times. Perfect for casual meals, group gatherings, or catching the game.",
    site: "@cornerstonepub", // Update if available
    images: ["https://cornerstonepub.com.au/logo.png"],
  },
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-white-cus text-blue antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "The Cornerstone Pub",
              image: "https://cornerstonepub.com.au/logo.png",
              url: "https://cornerstonepub.com.au",
              telephone: "+61-(03) 9645 1405",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Port Melbourne St",
                addressLocality: "Port Melbourne",
                addressRegion: "VIC",
                postalCode: "3207",
                addressCountry: "AU",
              },
              openingHours: "Mo-Su 11:00-23:00",
              servesCuisine:
                "Pub Food, Australian, Wine Bar, Seafood, Steakhouse, Irish, Italian",
              priceRange: "$$",
            }),
          }}
        ></script>

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
