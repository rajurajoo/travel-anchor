"use client";

import { useEffect, useRef } from "react";
import { CONTINENTS } from "@/lib/packages";

const durations = [
  { label: "Upto 5 days", value: "5" },
  { label: "Upto 10 days", value: "10" },
  { label: "Upto 15 days", value: "15" },
  { label: "Upto 20 days", value: "20" },
  { label: "Upto 25 days", value: "25" },
  { label: "Upto 30 days", value: "30" },
];

const stats = [
  { value: "15+", label: "Years planning trips" },
  { value: "3,000+", label: "Travellers served" },
  { value: "40+", label: "Destinations covered" },
];

export default function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const video = videoRef.current;
    if (!video) return;

    function handlePointerMove(e: PointerEvent) {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 2;
      const y = (e.clientY / innerHeight - 0.5) * 2;
      if (video) {
        video.style.transform = `scale(1.08) translate(${x * -10}px, ${y * -6}px)`;
      }
    }

    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <section className="relative h-[92vh] min-h-[680px] w-full overflow-hidden bg-[#0b1a26]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out"
        style={{ transform: "scale(1.08)" }}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        src="/videos/hero.mp4"
      />

      {/* Minimal scrim — just enough for the header/search bar to stay legible without dulling the footage */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0b1a26]/85 via-transparent to-[#0b1a26]/25" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b1a26]/40 via-transparent to-transparent" />

      {/* Floating stat chips */}
      <div className="absolute right-6 top-24 z-10 hidden flex-col gap-3 md:flex">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{ animationDelay: `${i * 0.6}s` }}
            className="glass rounded-2xl px-5 py-3 text-right opacity-0 motion-safe:animate-[hero-rise_0.7s_ease-out_forwards,hero-float_5s_ease-in-out_0.7s_infinite]"
          >
            <p className="font-display text-xl font-semibold text-white">{stat.value}</p>
            <p className="text-[11px] text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
        <div className="relative w-fit">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-10 -inset-y-8 -z-10 rounded-full bg-black/25 blur-3xl"
          />
          <h1 className="motion-safe:animate-[hero-rise_0.8s_ease-out_0.1s_both] text-wrap-balance font-poppins text-5xl font-semibold leading-tight text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.65)] md:text-7xl">
            Travel Anchor Tours & Travels
          </h1>
          <p className="mt-3 motion-safe:animate-[hero-rise_0.8s_ease-out_0.22s_both] text-sm font-semibold uppercase tracking-[0.35em] text-brass drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] md:text-base">
            Explore · Experience · Escape
          </p>
        </div>

        <div className="relative mt-10 w-full max-w-4xl text-left motion-safe:animate-[hero-rise_0.8s_ease-out_0.4s_both]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-2 -z-10 rounded-[2rem] bg-gradient-to-r from-accent/40 via-brass/40 to-accent/40 opacity-60 blur-2xl"
          />
          <form
            method="get"
            action="/packages"
            className="glass-strong flex flex-col overflow-hidden rounded-3xl sm:flex-row sm:items-stretch sm:rounded-full"
          >
            <SearchField label="Location" icon={<PinIcon />}>
              <input
                type="text"
                name="q"
                placeholder="Where to next?"
                className="w-full bg-transparent text-sm text-white placeholder-white/55 outline-none [color-scheme:dark]"
              />
            </SearchField>

            <Divider />

            <SearchField label="Destinations" icon={<CompassIcon />}>
              <select
                name="continent"
                defaultValue=""
                className="w-full appearance-none bg-transparent text-sm text-white outline-none [color-scheme:dark]"
              >
                <option value="" className="text-ink">
                  All Destination
                </option>
                {CONTINENTS.map((c) => (
                  <option key={c} value={c} className="text-ink">
                    {c === "India" ? "India (Domestic)" : c}
                  </option>
                ))}
              </select>
            </SearchField>

            <Divider />

            <SearchField label="Duration" icon={<ClockIcon />}>
              <select
                name="maxDays"
                defaultValue=""
                className="w-full appearance-none bg-transparent text-sm text-white outline-none [color-scheme:dark]"
              >
                <option value="" className="text-ink">
                  All Duration
                </option>
                {durations.map((d) => (
                  <option key={d.value} value={d.value} className="text-ink">
                    {d.label}
                  </option>
                ))}
              </select>
            </SearchField>

            <button
              type="submit"
              aria-label="Search packages"
              className="group m-2 flex items-center justify-center gap-2 rounded-full bg-brass px-8 py-4 text-sm font-bold text-[#20140a] shadow-lg shadow-black/25 transition-transform hover:scale-[1.03] active:scale-[0.98] sm:my-2"
            >
              <SearchIcon />
              <span>Search</span>
            </button>
          </form>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 motion-safe:animate-[hero-rise_0.8s_ease-out_0.7s_both] flex-col items-center gap-2 sm:flex">
        <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/60">
          Scroll
        </span>
        <div className="glass flex h-9 w-6 items-start justify-center rounded-full p-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-brass motion-safe:animate-[hero-scroll-dot_1.6s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}

function SearchField({
  label,
  icon,
  children,
}: {
  label: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="group flex flex-1 items-center gap-3 px-6 py-4 sm:py-0">
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-black shadow-sm transition-colors group-focus-within:bg-brass">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-wide text-white/60">{label}</p>
        {children}
      </div>
    </div>
  );
}

function Divider() {
  return <div className="mx-1 hidden w-px shrink-0 self-stretch bg-white/15 sm:block my-3" />;
}

function PinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M14.8 9.2 13 13l-3.8 1.8L11 11l3.8-1.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="2" />
      <path d="m20 20-3.6-3.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
