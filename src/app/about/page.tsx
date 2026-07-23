import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "Travel Anchor Tours & Travels is a leading tour operator in India, offering complete travel solutions across India and international destinations.",
};

const stamps = [
  { value: "15+", label: "Years on the road", rotate: "-rotate-3" },
  { value: "3,000+", label: "Travellers served", rotate: "rotate-2" },
  { value: "40+", label: "Destinations covered", rotate: "-rotate-1" },
];

const journey = [
  {
    title: "The start",
    body: "A small team that got tired of travel plans falling apart between the booking and the boarding gate — so we built the itineraries we'd want for ourselves.",
  },
  {
    title: "Growing the map",
    body: "Word of mouth took us from a handful of domestic circuits to honeymoon escapes, pilgrimage routes, and international itineraries across four continents.",
  },
  {
    title: "Where we are now",
    body: "Every trip still gets the same thing that started it all: one planner, a fixed price, and a day-by-day plan before you ever pack a bag.",
  },
];

const offerings = [
  { name: "Holiday packages", icon: <SuitcaseIcon /> },
  { name: "Cultural tours", icon: <CompassIcon /> },
  { name: "Adventure trips", icon: <MountainIcon /> },
  { name: "Hotel bookings", icon: <BedIcon /> },
  { name: "Transportation", icon: <CarIcon /> },
  { name: "Flight tickets", icon: <PlaneIcon /> },
  { name: "Visa assistance", icon: <PassportIcon /> },
  { name: "Custom itineraries", icon: <RouteIcon /> },
];

const tripTypes = [
  "Family vacations",
  "Honeymoons",
  "Pilgrimages",
  "Corporate trips",
  "Group tours",
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[56vh] min-h-[420px] w-full overflow-hidden">
        <Image
          src="/images/misc/about-hero.jpg"
          alt="Travel Anchor Tours & Travels"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a26]/90 via-[#0b1a26]/45 to-[#0b1a26]/20" />
        <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col justify-center px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brass">About us</p>
          <h1 className="mt-3 max-w-2xl text-wrap-balance font-poppins text-4xl font-semibold leading-tight text-white drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)] md:text-6xl">
            Travel Anchor Tours &amp; Travels
          </h1>
          <p className="mt-4 max-w-lg text-base text-white/85 md:text-lg">
            Every trip we plan gets the same thing: a real person behind it,
            start to finish.
          </p>
        </div>
      </section>

      {/* Passport stamps, straddling the hero boundary */}
      <div className="relative z-20 mx-auto -mt-12 flex max-w-5xl flex-wrap justify-center gap-5 px-6 sm:-mt-14 sm:justify-between">
        {stamps.map((s, i) => (
          <Reveal key={s.label} delay={i * 120}>
            <div
              className={`flex ${s.rotate} w-40 flex-col items-center rounded-2xl border-2 border-dashed border-brass/60 bg-white px-5 py-4 text-center shadow-xl shadow-black/20`}
            >
              <span className="font-display text-2xl font-semibold text-ink">{s.value}</span>
              <span className="mt-1 text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
                {s.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-16 sm:pt-20">
        <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-ink-soft">
          Travel Anchor Tours &amp; Travels is a tour operator built around one
          idea: the trip should be as good as the plan behind it. From
          curated holiday packages and cultural tours to adventure trips,
          hotel bookings, flights, visas, and fully custom itineraries, we
          handle the parts that usually go wrong so the parts that matter go
          right.
        </p>

        {/* Journey timeline */}
        <section className="mt-20">
          <h2 className="text-center font-display text-2xl font-semibold text-ink md:text-3xl">
            Our journey so far
          </h2>
          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="absolute left-4 top-4 hidden h-px w-[calc(100%-2rem)] border-t-2 border-dashed border-line-strong sm:block"
            />
            <div className="grid gap-8 sm:grid-cols-3">
              {journey.map((step, i) => (
                <Reveal key={step.title} delay={i * 130} className="relative pl-10 sm:pl-0">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white sm:relative sm:mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* What we offer */}
        <section className="mt-20">
          <h2 className="text-center font-display text-2xl font-semibold text-ink md:text-3xl">
            What we offer
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {offerings.map((item, i) => (
              <Reveal key={item.name} delay={Math.min((i % 4) * 80, 320)}>
                <div className="glass flex flex-col items-center gap-3 rounded-2xl p-5 text-center transition-transform hover:-translate-y-1">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accent-soft text-accent-ink">
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium text-ink">{item.name}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Trip types as boarding passes */}
        <section className="mt-20">
          <h2 className="text-center font-display text-2xl font-semibold text-ink md:text-3xl">
            Whatever the occasion
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {tripTypes.map((type, i) => (
              <Reveal key={type} delay={i * 70} className="inline-block">
                <span className="glass flex items-center gap-2 rounded-full py-2 pl-4 pr-5 text-sm font-medium text-ink">
                  <TicketIcon />
                  {type}
                </span>
              </Reveal>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-2xl text-center text-sm leading-relaxed text-ink-soft">
            With a strong commitment to quality, affordability, and customer
            satisfaction, we&apos;ve become a trusted travel partner for
            people who want their holiday planned properly the first time —
            not patched together after something goes wrong.
          </p>
        </section>

        {/* Closing CTA */}
        <section className="mt-20">
          <Reveal>
            <div className="glass-strong flex flex-col items-center gap-5 rounded-3xl px-8 py-12 text-center">
              <p className="font-display text-2xl font-semibold text-ink md:text-3xl">
                Where to next?
              </p>
              <p className="max-w-md text-sm text-ink-soft">
                Tell us the destination, or tell us nothing at all —
                we&apos;re just as happy to suggest one.
              </p>
              <Link
                href="/contact"
                className="rounded-full bg-accent px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-ink"
              >
                Start planning
              </Link>
            </div>
          </Reveal>
        </section>
      </div>
    </div>
  );
}

function SuitcaseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="8" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 8V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 13h18" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

function CompassIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

function MountainIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="m3 18 6-10 4 6 2-3 6 7H3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M3 19v-7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v7" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3 19v-3M21 19v-3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M5 12V8a2 2 0 0 1 2-2h4v4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8" cy="8.5" r="1.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function CarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 16V12l2-5h12l2 5v4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <rect x="3" y="16" width="18" height="4" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="7.5" cy="16" r="1.3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16.5" cy="16" r="1.3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function PlaneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 13l7-2 4-8 1.5.5-2 7.5 6-1 1.5 1.5-6.5 3-1 5-1.5-.5-.5-4.5-6.5 2Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PassportIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M8.5 16h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="5" cy="6" r="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6.5 7.5C9 11 8 13 12 13s3 4 5.5 5.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeDasharray="1 4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TicketIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-accent" aria-hidden="true">
      <path
        d="M4 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1.5a1.5 1.5 0 0 0 0 3V14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-1.5a1.5 1.5 0 0 0 0-3V8Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M14 6v10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="1.5 2.5" />
    </svg>
  );
}
