import type {
  Activity,
  GalleryItem,
  Realisation,
  ServiceGroup,
  SiteData,
} from "@/types/content";

import siteData from "@/data/site.json";
import activitiesData from "@/data/activities.json";
import servicesData from "@/data/services.json";
import galleryData from "@/data/gallery.json";
import realisationsData from "@/data/realisations.json";

export function getSiteData(): SiteData {
  return siteData as SiteData;
}

export function getActivities(): Activity[] {
  return activitiesData as Activity[];
}

export function getActivityBySlug(slug: string): Activity | undefined {
  return getActivities().find((a) => a.slug === slug);
}

export function getServices(): ServiceGroup[] {
  return servicesData as ServiceGroup[];
}

export function getGallery(): GalleryItem[] {
  return galleryData as GalleryItem[];
}

export function getRealisations(): Realisation[] {
  return realisationsData as Realisation[];
}
