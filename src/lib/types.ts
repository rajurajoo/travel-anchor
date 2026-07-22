export type PackageCategory = "International" | "Domestic";

export type PackageTag = "Honeymoon" | "Family" | "Adventure" | "Pilgrimage" | "Luxury";

export type Continent =
  | "Asia"
  | "Europe"
  | "Middle East"
  | "Africa"
  | "Americas"
  | "Pacific"
  | "India";

export interface ItineraryDay {
  title: string;
  activities: string[];
}

export interface Inclusions {
  stay: string;
  transport: string;
  sightseeing: string;
  visaIncluded: boolean;
}

export interface TourPackage {
  slug: string;
  name: string;
  category: PackageCategory;
  tags: PackageTag[];
  country: string;
  state?: string;
  region: string;
  continent: Continent;
  days: number;
  nights: number;
  price: number;
  summary: string;
  highlights: string[];
  itinerary: ItineraryDay[];
  inclusions: Inclusions;
  coverGradient: [string, string];
}

export type VisaType = "E-Visa" | "Visa on Arrival" | "Sticker Visa";

export interface VisaListing {
  country: string;
  region: string;
  type: VisaType;
  processingDays: string;
  price: number;
}

export type BlogCategory = "Destination Guide" | "Travel Tips" | "Visa & Documents" | "Planning";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string;
  readMinutes: number;
  coverGradient: [string, string];
  body: string[];
}

export interface Service {
  slug: string;
  name: string;
  tagline: string;
  description: string[];
  features: string[];
  image: string;
}
