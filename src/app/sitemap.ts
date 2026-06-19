import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { getActivities } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
  const activities = getActivities();
  const staticPages = [
    "",
    "/a-propos",
    "/activites",
    "/services",
    "/realisations",
    "/galerie",
    "/contact",
    "/mentions-legales",
  ];

  const staticEntries = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const activityEntries = activities.map((a) => ({
    url: `${siteUrl}/activites/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...activityEntries];
}
