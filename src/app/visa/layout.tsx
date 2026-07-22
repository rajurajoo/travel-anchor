import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visa Services",
  description: "E-visa, visa-on-arrival, and sticker visa assistance for every major destination.",
};

export default function VisaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
