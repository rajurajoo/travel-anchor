import Image from "next/image";
import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

const columns = [
  {
    heading: "Packages",
    links: [
      { label: "International", href: "/packages?category=International" },
      { label: "Domestic", href: "/packages?category=Domestic" },
      { label: "Honeymoon", href: "/packages?tag=Honeymoon" },
      { label: "Pilgrimage", href: "/packages?tag=Pilgrimage" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Car Rental", href: "/service/car-rental" },
      { label: "Flight Tickets", href: "/service/flight-tickets" },
      { label: "Hotel & Resort", href: "/service/hotel-resort" },
      { label: "Insurance", href: "/service/insurance" },
      { label: "Train Tickets", href: "/service/train-tickets" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Visa services", href: "/visa" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#0b1a26] text-white/70">
      {/* CTA strip */}
      <div className="border-b border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-6 py-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-display text-xl font-semibold text-white">
              Ready when you are
            </p>
            <p className="mt-1 text-sm text-white/60">
              Tell us the destination, or tell us nothing at all.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-ink"
          >
            Start planning
          </Link>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2">
              <Image
                src="/Logo.png"
                alt="Travel Anchor Tours & Travels"
                width={180}
                height={108}
                className="h-16 w-auto shrink-0 object-contain"
              />
              <p className="font-poppins text-base font-semibold leading-tight text-white">
                Travel Anchor
                <br /> Tours &amp; Travels
              </p>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Tour packages, honeymoons, and pilgrimage trips — planned end to
              end, wherever you're starting from.
            </p>
            <div className="mt-5 space-y-2 text-sm">
              <a
                href="tel:+918667888913"
                className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
              >
                <PhoneIcon />
                +91 86678 88913
              </a>
              <a
                href="tel:+914222998913"
                className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
              >
                <PhoneIcon />
                Office: +91 422-2998913
              </a>
              <a
                href="mailto:info@travelanchortourism.com"
                className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
              >
                <MailIcon />
                info@travelanchortourism.com
              </a>
            </div>
            <SocialLinks
              className="mt-6"
              iconClassName="h-9 w-9 border border-white/15 text-white/70 hover:border-white/30 hover:bg-white/10 hover:text-white"
            />
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                {col.heading}
              </p>
              <ul className="mt-4 space-y-2.5 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pb-16 pt-6 text-xs text-white/40 sm:flex-row sm:pb-0">
          <p>{`© ${new Date().getFullYear()} Travel Anchor Tours & Travels. All rights reserved.`}</p>
          <p>Managed by Pradeepan Palani</p>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
      <path
        d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
