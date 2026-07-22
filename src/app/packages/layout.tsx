import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tour Packages",
  description: "Browse international, domestic, honeymoon, and pilgrimage tour packages.",
};

export default function PackagesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
