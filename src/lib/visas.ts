import { visas } from "@/data/visas";
import { VisaListing } from "@/lib/types";

export function getAllVisas(): VisaListing[] {
  return visas;
}

export function getVisaRegions(): string[] {
  return Array.from(new Set(visas.map((v) => v.region))).sort();
}

export function filterVisas(region?: string): VisaListing[] {
  if (!region) return visas;
  return visas.filter((v) => v.region === region);
}

export function formatVisaPrice(price: number): string {
  return price === 0 ? "Free" : `From ₹${price.toLocaleString("en-IN")}`;
}
