import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    ["", "weekly", 1],
    ["/venue", "monthly", 0.8],
    ["/food", "monthly", 0.9],
    ["/drinks", "monthly", 0.8],
    ["/events", "monthly", 0.9],
    ["/spaces", "monthly", 0.8],
    ["/whatson", "weekly", 0.9],
    ["/menus", "monthly", 0.8],
    ["/menus/foods", "monthly", 0.7],
    ["/menus/drinks", "monthly", 0.7],
    ["/menus/events_menu", "monthly", 0.7],
    ["/contact", "monthly", 0.8],
    ["/e-gifts", "monthly", 0.5],
    ["/privacy-policy", "yearly", 0.2],
  ] as const;

  return pages.map(([path, changeFrequency, priority]) => ({
    url: `${SITE_URL}${path}`,
    changeFrequency,
    priority,
  }));
}
