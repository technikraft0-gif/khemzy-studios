export type ProjectCategory =
  | "Weddings"
  | "Portraits"
  | "Fashion"
  | "Commercial"
  | "Events";

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  year: string;
  location: string;
  cover: string;
  gallery: string[];
  excerpt: string;
  description: string;
  client?: string;
  deliverables?: string[];
  featured?: boolean;
  stats?: { label: string; value: string }[];
  testimonial?: {
    quote: string;
    author: string;
    role?: string;
  };
}

export interface Service {
  id: string;
  number: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  deliverables: string[];
  startingPrice: string;
  turnaround: string;
  image: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  client: string;
  role: string;
  projectType: string;
  avatar: string;
  rating: number;
}

export interface PricingPackage {
  id: string;
  name: string;
  badge?: string;
  price: string;
  currency: string;
  period?: string;
  description: string;
  idealFor: string;
  features: string[];
  turnaround: string;
  popular?: boolean;
  ctaText: string;
  ctaHref: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface SiteMeta {
  title: string;
  description: string;
  image?: string;
  canonicalURL?: string;
  noindex?: boolean;
}
