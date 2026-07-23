"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const slides = [
  {
    country: "Thailand",
    tag: "Thailand",
    heading: "THAILAND",
    blurb:
      "Bangkok's street-food chaos, Phi Phi's limestone cliffs, and a sunset longtail-boat ride — a first-timer's Thailand done right.",
    bg: "/images/packages/thailand-island-hopper.jpg",
    href: "/packages/thailand-island-hopper",
    cards: [
      { label: "Grand Palace, Bangkok", image: "/images/packages/thailand-island-hopper.jpg" },
      { label: "First-time Thailand", image: "/images/blog/first-time-thailand-what-to-pack.jpg" },
      { label: "Island Hopping", image: "/images/misc/thailand-phi-phi.jpg" },
    ],
  },
  {
    country: "Indonesia",
    tag: "Bali",
    heading: "INDONESIA",
    blurb:
      "Private villa pools, rice-terrace breakfasts, and a clifftop dinner in Uluwatu — built for two, start to finish.",
    bg: "/images/packages/bali-honeymoon-escape.jpg",
    href: "/packages/bali-honeymoon-escape",
    cards: [
      { label: "Uluwatu Cliffs, Bali", image: "/images/packages/bali-honeymoon-escape.jpg" },
      { label: "Honeymoon Escapes", image: "/images/misc/category-honeymoon.jpg" },
      { label: "Ubud Rice Terraces", image: "/images/misc/bali-rice-terrace.jpg" },
    ],
  },
  {
    country: "India",
    tag: "Kerala",
    heading: "KERALA",
    blurb:
      "Backwater houseboats, spice-scented hills, and quiet beach towns — God's Own Country at an easy pace.",
    bg: "/images/packages/kerala-backwaters-and-hills.jpg",
    href: "/packages/kerala-backwaters-and-hills",
    cards: [
      { label: "Alleppey Backwaters", image: "/images/packages/kerala-backwaters-and-hills.jpg" },
      { label: "Kerala or Goa", image: "/images/blog/kerala-or-goa-beach-trip.jpg" },
      { label: "God's Own Country", image: "/images/misc/category-domestic.jpg" },
    ],
  },
  {
    country: "Singapore",
    tag: "Singapore",
    heading: "SINGAPORE",
    blurb:
      "Gardens by the Bay, a Universal Studios day, and the Night Safari — built around what keeps kids and adults both happy.",
    bg: "/images/packages/singapore-family-weekend.jpg",
    href: "/packages/singapore-family-weekend",
    cards: [
      { label: "Gardens by the Bay", image: "/images/packages/singapore-family-weekend.jpg" },
      { label: "Sentosa Island", image: "/images/misc/singapore-sentosa.jpg" },
      { label: "Family Weekend", image: "/images/misc/category-domestic.jpg" },
    ],
  },
  {
    country: "Switzerland",
    tag: "Europe",
    heading: "EUROPE",
    blurb:
      "Zurich to Zermatt by scenic rail, with the Jungfraujoch and a Lake Lucerne cruise in between.",
    bg: "/images/blog/switzerland-mid-range-budget.jpg",
    href: "/packages/switzerland-alpine-classic",
    cards: [
      { label: "Lake Lucerne, Switzerland", image: "/images/blog/switzerland-mid-range-budget.jpg" },
      { label: "Alpine Cable Car", image: "/images/packages/switzerland-alpine-classic.jpg" },
      { label: "Eiffel Tower, Paris", image: "/images/misc/category-international.jpg" },
    ],
  },
  {
    country: "USA",
    tag: "United States",
    heading: "USA",
    blurb:
      "New York's skyline, the open road beyond it, and a trip we're just getting started planning — tell us what you have in mind.",
    bg: "/images/misc/usa-new-york.jpg",
    href: "/contact",
    cards: [
      { label: "New York City", image: "/images/misc/usa-new-york.jpg" },
      { label: "Statue of Liberty", image: "/images/misc/usa-statue-of-liberty.jpg" },
      { label: "Times Square", image: "/images/misc/usa-times-square.jpg" },
    ],
  },
];

const AUTOPLAY_MS = 6000;

export default function HeroShowcase() {
  const [active, setActive] = useState(0);
  const slide = slides[active];
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function go(delta: number) {
    setActive((i) => (i + delta + slides.length) % slides.length);
  }

  function resetAutoplay() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
  }

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    resetAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function goManual(delta: number) {
    go(delta);
    resetAutoplay();
  }

  function selectManual(i: number) {
    setActive(i);
    resetAutoplay();
  }

  return (
    <section className="relative h-[92vh] min-h-[680px] w-full overflow-hidden bg-[#0b1a26]">
      {slides.map((s, i) => (
        <div
          key={s.country}
          className={`absolute inset-0 transition-opacity duration-700 ease-out ${
            i === active ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        >
          <Image
            src={s.bg}
            alt={s.country}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Scrim for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1a26]/90 via-[#0b1a26]/20 to-[#0b1a26]/50" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0b1a26]/70 via-transparent to-transparent" />

      {/* Side timeline dots */}
      <div className="absolute left-6 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 md:flex">
        {slides.map((s, i) => (
          <button
            key={s.country}
            type="button"
            onClick={() => selectManual(i)}
            aria-label={`Show ${s.country}`}
            className="group flex flex-col items-center gap-4"
          >
            <span
              className={`h-2.5 w-2.5 rounded-full border border-white/70 transition-all ${
                i === active ? "scale-125 bg-brass" : "bg-transparent group-hover:bg-white/40"
              }`}
            />
            {i < slides.length - 1 && <span className="h-8 w-px bg-white/25" />}
          </button>
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pl-6 md:pl-20">
        <div className="max-w-xl">
          <p className="motion-safe:animate-[hero-rise_0.6s_ease-out_both] text-xs font-semibold uppercase tracking-[0.35em] text-brass drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {slide.tag}
          </p>
          <h1
            key={slide.heading}
            className="mt-3 motion-safe:animate-[hero-rise_0.7s_ease-out_0.05s_both] font-poppins text-6xl font-extrabold leading-none tracking-tight text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.65)] sm:text-7xl md:text-8xl"
          >
            {slide.heading}
          </h1>
          <p className="mt-5 max-w-md motion-safe:animate-[hero-rise_0.7s_ease-out_0.15s_both] text-sm leading-relaxed text-white/80 drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
            {slide.blurb}
          </p>
          <Link
            href={slide.href}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-black/25 transition-transform hover:scale-[1.03] active:scale-[0.98] motion-safe:animate-[hero-rise_0.7s_ease-out_0.25s_both]"
          >
            Explore
            <ArrowIcon />
          </Link>
        </div>
      </div>

      {/* Stacked destination cards */}
      <div className="absolute right-6 top-1/2 z-10 hidden -translate-y-1/2 items-end gap-4 lg:flex xl:right-16">
        {slide.cards.map((card, i) => (
          <Link
            key={card.label}
            href={slide.href}
            className={`group relative overflow-hidden rounded-2xl shadow-2xl shadow-black/40 transition-transform hover:-translate-y-1 ${
              i === 0 ? "h-72 w-40" : i === 1 ? "h-60 w-36" : "h-48 w-28"
            }`}
          >
            <Image
              src={card.image}
              alt={card.label}
              fill
              sizes="200px"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            <span className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-ink">
              <BookmarkIcon />
            </span>
            <span className="absolute bottom-2 left-2 right-2 text-[11px] font-semibold leading-tight text-white">
              {card.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Bottom carousel controls */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-4">
        <button
          type="button"
          onClick={() => goManual(-1)}
          aria-label="Previous destination"
          className="glass flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:text-brass"
        >
          <ChevronIcon direction="left" />
        </button>
        <span className="text-xs font-medium text-white/70">
          {String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
        </span>
        <button
          type="button"
          onClick={() => goManual(1)}
          aria-label="Next destination"
          className="glass flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:text-brass"
        >
          <ChevronIcon direction="right" />
        </button>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BookmarkIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6 3.5h12a1 1 0 0 1 1 1V21l-7-4-7 4V4.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

function ChevronIcon({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={direction === "left" ? "rotate-180" : ""}
    >
      <path d="m9 6 6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
