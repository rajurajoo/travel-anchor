"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CONTINENTS, getContinentCount } from "@/lib/packages";
import { getAllServices } from "@/lib/services";
import SocialLinks from "@/components/SocialLinks";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Service", href: "/service" },
  { label: "Visa", href: "/visa" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    function handleScroll() {
      setScrolled(window.scrollY > 40);
    }
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-40 border-x-0 border-t-0 transition-all duration-300 ${
        transparent ? "border-transparent bg-transparent" : "glass"
      }`}
    >
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
          <span
            className={`-ml-1.5 shrink-0 whitespace-nowrap font-poppins text-xs font-semibold leading-tight tracking-tight transition-colors duration-300 sm:-ml-3 sm:text-lg md:-ml-4 md:text-xl ${
              transparent ? "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]" : "text-ink"
            }`}
          >
            Travel Anchor
            <br /> Tours &amp; Travels
          </span>
        </Link>
        <nav
          className={`hidden items-center gap-5 text-sm font-medium transition-colors duration-300 lg:flex xl:gap-7 ${
            transparent ? "text-white/90" : "text-ink-soft"
          }`}
        >
          <Link href="/" className="transition-colors hover:text-accent">
            Home
          </Link>
          <Link href="/about" className="transition-colors hover:text-accent">
            About
          </Link>
          <PackagesMenu transparent={transparent} />
          <ServicesMenu transparent={transparent} />
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
            className={`hidden border-l pl-5 xl:flex xl:gap-3 transition-colors duration-300 ${
              transparent ? "border-white/30" : "border-line"
            }`}
            iconClassName={`h-7 w-7 transition-colors duration-300 ${
              transparent ? "text-white/85 hover:bg-white/15 hover:text-white" : ""
            }`}
          />
          <Link
            href="/contact"
            className="hidden whitespace-nowrap rounded-full bg-accent px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-accent-ink sm:px-5 sm:text-sm md:inline-block"
          >
            Plan my trip
          </Link>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors lg:hidden ${
              transparent
                ? "text-white hover:bg-white/15"
                : "text-ink hover:bg-accent-soft"
            }`}
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`overflow-hidden border-t transition-all duration-300 lg:hidden ${
          menuOpen ? "max-h-[80vh] border-line" : "max-h-0 border-transparent"
        } ${transparent ? "" : "glass"} ${menuOpen && transparent ? "bg-[#0b1a26]/95 backdrop-blur-xl" : ""}`}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                transparent
                  ? "text-white/90 hover:bg-white/10"
                  : "text-ink-soft hover:bg-accent-soft hover:text-accent-ink"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-2 rounded-full bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-ink"
          >
            Plan my trip
          </Link>
          <SocialLinks
            className="mt-4 justify-center border-t pt-4"
            iconClassName={
              transparent
                ? "h-9 w-9 text-white/85 hover:bg-white/15 hover:text-white"
                : "h-9 w-9 border border-line"
            }
          />
        </nav>
      </div>
    </header>
    {!isHome && <div className="h-[72px] sm:h-[112px] md:h-[128px]" aria-hidden="true" />}
    </>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function PackagesMenu({ transparent }: { transparent: boolean }) {
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
      <div
        className={`glass-strong invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 translate-y-1 rounded-2xl p-3 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
          transparent ? "" : ""
        }`}
      >
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

function ServicesMenu({ transparent }: { transparent: boolean }) {
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
      <div
        className={`glass-strong invisible absolute left-1/2 top-full z-50 w-60 -translate-x-1/2 translate-y-1 rounded-2xl p-3 opacity-0 transition-all group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100 ${
          transparent ? "" : ""
        }`}
      >
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
