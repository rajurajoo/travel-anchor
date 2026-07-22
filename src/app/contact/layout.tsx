import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Travel Anchor Tours & Travels to plan your trip.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
