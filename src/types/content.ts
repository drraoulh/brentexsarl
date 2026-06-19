export interface Company {
  name: string;
  tagline: string;
  description: string;
  founded: number;
  address: string;
  email: string;
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  rccm: string;
  niu: string;
  social: {
    whatsapp: string;
    facebook: string;
    linkedin: string;
  };
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

export interface ValueItem {
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface SiteData {
  company: Company;
  announcement: {
    enabled: boolean;
    text: string;
    link: string;
  };
  stats: {
    experience: StatItem;
    clients: StatItem;
    projects: StatItem;
    note: string;
  };
  about: {
    history: string;
    mission: string;
    vision: string;
    values: ValueItem[];
    keyFigures: { label: string; value: string }[];
  };
  team: TeamMember[];
  process: ProcessStep[];
  testimonials: Testimonial[];
  legal: {
    privacy: string;
    terms: string;
  };
}

export interface Activity {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  image: string;
  icon: string;
}

export interface ServiceGroup {
  activitySlug: string;
  title: string;
  services: { name: string; description: string }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  alt: string;
}

export interface Realisation {
  id: string;
  title: string;
  client: string;
  year: string;
  category: string;
  description: string;
  image: string;
}
