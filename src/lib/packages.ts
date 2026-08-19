import { packages } from "@/data/packages";
import { Continent, PackageCategory, PackageTag, TourPackage } from "@/lib/types";

export const CONTINENTS: Continent[] = [
  "Asia",
  "Europe",
  "Middle East",
  "Africa",
  "Americas",
  "Pacific",
  "India",
];

// Newest-added packages first — the data file appends new entries at the
// end, so reversing gives us newest-to-oldest without needing add dates.
const packagesNewestFirst = [...packages].reverse();

export function getAllPackages(): TourPackage[] {
  return packagesNewestFirst;
}

export function getPackageBySlug(slug: string): TourPackage | undefined {
  return packages.find((p) => p.slug === slug);
}

export interface PackageFilters {
  category?: PackageCategory;
  tag?: PackageTag;
  region?: string;
  continent?: Continent;
  maxDays?: number;
  query?: string;
}

export function filterPackages(filters: PackageFilters): TourPackage[] {
  const q = filters.query?.trim().toLowerCase();
  return packagesNewestFirst.filter((p) => {
    if (filters.category && p.category !== filters.category) return false;
    if (filters.tag && !p.tags.includes(filters.tag)) return false;
    if (filters.region && p.region !== filters.region) return false;
    if (filters.continent && p.continent !== filters.continent) return false;
    if (filters.maxDays && p.days > filters.maxDays) return false;
    if (q) {
      const haystack = `${p.name} ${p.country} ${p.state ?? ""} ${p.region}`.toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });
}

export function getRegions(): string[] {
  return Array.from(new Set(packages.map((p) => p.region))).sort();
}

export function getContinentCount(continent: Continent): number {
  return packages.filter((p) => p.continent === continent).length;
}

export function getFeaturedPackages(count = 6): TourPackage[] {
  return packagesNewestFirst.slice(0, count);
}

export function getRelatedPackages(current: TourPackage, count = 3): TourPackage[] {
  return packagesNewestFirst
    .filter((p) => p.slug !== current.slug && p.region === current.region)
    .slice(0, count);
}

export function formatPrice(price: number): string {
  return `₹${price.toLocaleString("en-IN")}`;
}
