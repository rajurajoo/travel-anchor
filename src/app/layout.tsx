import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, Poppins } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PageTransition from "@/components/PageTransition";
import WhatsAppButton from "@/components/WhatsAppButton";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Travel Anchor Tours & Travels — Tour Packages & Holiday Planning",
    template: "%s | Travel Anchor Tours & Travels",
  },
  description:
    "International, domestic, honeymoon, and pilgrimage tour packages — planned end to end by Travel Anchor Tours & Travels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plusJakarta.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col text-ink">
        <SiteHeader />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <SiteFooter />
        <WhatsAppButton />
      </body>
    </html>
  );
}
