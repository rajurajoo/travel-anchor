import Image from "next/image";
import Link from "next/link";
import { CONTINENTS, getContinentCount } from "@/lib/packages";
import { getAllServices } from "@/lib/services";
import SocialLinks from "@/components/SocialLinks";

export default function SiteHeader() {
  return (
    <header className="glass sticky top-0 z-40 border-x-0 border-t-0">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:gap-5 sm:px-6 xl:gap-8">
        <Link href="/" className="flex min-w-0 shrink items-center">
          <Image
            src="/Logo.png"
            alt="Travel Anchor Tours & Travels"
            width={200}
            height={120}
            priority
            className="h-14 w-auto shrink-0 object-contain sm:h-24 md:h-28"
          />
          <span className="-ml-1.5 shrink-0 whitespace-nowrap font-poppins text-xs font-semibold leading-tight tracking-tight text-ink sm:-ml-3 sm:text-lg md:-ml-4 md:text-xl">
            Travel Anchor
            <br /> Tours &amp; Travels
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm font-medium text-ink-soft lg:flex xl:gap-7">
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-accent">
            About
          </Link>
          <PackagesMenu />
          <ServicesMenu />
          <Link href="/visa" className="transition-colors hover:text-accent">
            Visa
          </Link>
          <Link href="/blog" className="transition-colors hover:text-accent">
            Blog
          </Link>
          <Link href="/contact" className="transition-colors hover:text-accent">
            Contact
          </Link>
        </nav>
        <div className="flex shrink-0 items-center gap-4 xl:gap-6">
          <SocialLinks
            className="hidden border-l border-line pl-5 xl:flex xl:gap-3"
            iconClassName="h-7 w-7"
          />
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-full bg-accent px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-ink sm:px-5 sm:text-sm"
          >
            Plan my trip
          </Link>
        </div>
      </div>
    </header>
  );
}

function PackagesMenu() {
  return (
    <div className="group relative">
      <Link
        href="/packages"
        className="flex items-center gap-1 py-2 transition-colors hover:text-accent"
      >
        Packages
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path
            d="M2 3.5 5 6.5 8 3.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <div className="glass-strong invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-1 rounded-2xl p-3 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <Link
          href="/packages"
          className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-accent-soft hover:text-accent-ink"
        >
          All packages
        </Link>
        <p className="mt-2 px-3 text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
          By continent
        </p>
        <div className="mt-1">
          {CONTINENTS.map((continent) => (
            <Link
              key={continent}
              href={`/packages?continent=${encodeURIComponent(continent)}`}
              className="flex items-center justify-between rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-accent-soft hover:text-accent-ink"
            >
              <span>{continent === "India" ? "India (Domestic)" : continent}</span>
              <span className="text-xs text-ink-faint">{getContinentCount(continent)}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function ServicesMenu() {
  const services = getAllServices();
  return (
    <div className="group relative">
      <Link
        href="/service"
        className="flex items-center gap-1 py-2 transition-colors hover:text-accent"
      >
        Service
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
          <path
            d="M2 3.5 5 6.5 8 3.5"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
      <div className="glass-strong invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 translate-y-1 rounded-2xl p-3 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <Link
          href="/service"
          className="block rounded-lg px-3 py-2 text-sm font-semibold text-ink hover:bg-accent-soft hover:text-accent-ink"
        >
          All services
        </Link>
        <div className="mt-1 border-t border-line pt-1">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/service/${service.slug}`}
              className="block rounded-lg px-3 py-2 text-sm text-ink-soft hover:bg-accent-soft hover:text-accent-ink"
            >
              {service.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
