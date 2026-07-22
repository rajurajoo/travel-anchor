import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function SiteFooter() {
  return (
    <footer className="glass border-x-0 border-b-0">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex flex-col items-start gap-2">
              <Image
                src="/Logo.png"
                alt="Travel Anchor Tours & Travels"
                width={220}
                height={132}
                className="h-24 w-auto shrink-0 object-contain"
              />
              <p className="font-poppins text-lg font-semibold leading-tight text-ink">
                Travel Anchor Tours &amp; Travels
              </p>
            </div>
            <p className="mt-2 max-w-xs text-sm text-ink-soft">
              Tour packages, honeymoons, and pilgrimage trips — planned end to
              end, wherever you're starting from.
            </p>
            <div className="mt-4 space-y-1.5 text-sm text-ink-soft">
              <a href="tel:+918667888913" className="block hover:text-accent">
                +91 86678 88913
              </a>
              <a href="tel:+914222998913" className="block hover:text-accent">
                Office: +91 422-2998913
              </a>
              <a
                href="mailto:info@travelanchortourism.com"
                className="block hover:text-accent"
              >
                info@travelanchortourism.com
              </a>
            </div>
            <SocialLinks className="mt-5" iconClassName="h-9 w-9 border border-line" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Packages
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>
                <Link href="/packages?category=International" className="hover:text-accent">
                  International
                </Link>
              </li>
              <li>
                <Link href="/packages?category=Domestic" className="hover:text-accent">
                  Domestic
                </Link>
              </li>
              <li>
                <Link href="/packages?tag=Honeymoon" className="hover:text-accent">
                  Honeymoon
                </Link>
              </li>
              <li>
                <Link href="/packages?tag=Pilgrimage" className="hover:text-accent">
                  Pilgrimage
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Services
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>
                <Link href="/service/car-rental" className="hover:text-accent">
                  Car Rental
                </Link>
              </li>
              <li>
                <Link href="/service/flight-tickets" className="hover:text-accent">
                  Flight Tickets
                </Link>
              </li>
              <li>
                <Link href="/service/hotel-resort" className="hover:text-accent">
                  Hotel &amp; Resort
                </Link>
              </li>
              <li>
                <Link href="/service/insurance" className="hover:text-accent">
                  Insurance
                </Link>
              </li>
              <li>
                <Link href="/service/train-tickets" className="hover:text-accent">
                  Train Tickets
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Resources
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>
                <Link href="/visa" className="hover:text-accent">
                  Visa services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-accent">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Company
            </p>
            <ul className="mt-3 space-y-2 text-sm text-ink-soft">
              <li>
                <Link href="/about" className="hover:text-accent">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-10 border-t border-line pb-16 pt-6 text-xs text-ink-faint sm:pb-0">
          {`© ${new Date().getFullYear()} Travel Anchor Tours & Travels. All rights reserved.`}
        </div>
      </div>
    </footer>
  );
}
