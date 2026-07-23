import Image from "next/image";
import Link from "next/link";
import PackageCard from "@/components/PackageCard";
import BlogCard from "@/components/BlogCard";
import HeroShowcase from "@/components/HeroShowcase";
import Reveal from "@/components/Reveal";
import { getFeaturedPackages } from "@/lib/packages";
import { getRecentPosts } from "@/lib/blog";

const categoryTiles = [
  {
    label: "International",
    href: "/packages?category=International",
    blurb: "Thailand to Switzerland, planned door to door.",
    image: "/images/misc/category-international.jpg",
  },
  {
    label: "Domestic",
    href: "/packages?category=Domestic",
    blurb: "Kerala backwaters to Ladakh's high passes.",
    image: "/images/misc/category-domestic.jpg",
  },
  {
    label: "Honeymoon",
    href: "/packages?tag=Honeymoon",
    blurb: "Paced for two — private stays, no rush.",
    image: "/images/misc/category-honeymoon.jpg",
  },
  {
    label: "Pilgrimage",
    href: "/packages?tag=Pilgrimage",
    blurb: "Char Dham and beyond, with rest days built in.",
    image: "/images/misc/category-pilgrimage.jpg",
  },
] as const;

const whyUsPoints = [
  {
    title: "Reliable & Responsive Service",
    body: "As a trusted travel agency in India, Travel Anchor Tours & Travels provides hassle-free travel planning with a dedicated and responsive team. From domestic holiday packages to international tours, every detail is managed with care for a seamless travel experience.",
  },
  {
    title: "Authentic Indian Experiences",
    body: "As a leading tourism company in India, Travel Anchor Tours & Travels goes beyond ordinary sightseeing. Our travel experts help you discover India's rich culture, heritage, traditions, and hidden destinations while creating unforgettable memories.",
  },
  {
    title: "Trusted & Professional Team",
    body: "Backed by industry expertise and a customer-first approach, Travel Anchor Tours & Travels is recognized as one of the most reliable travel and tourism companies in India, delivering exceptional service with professionalism and transparency.",
  },
  {
    title: "Personalized Travel Solutions",
    body: "Whether you're planning a family vacation, honeymoon, group tour, corporate trip, or international holiday, Travel Anchor Tours & Travels creates customized itineraries tailored to your preferences, making every journey unique and memorable.",
  },
];

const howItWorks = [
  {
    title: "Tell us where",
    body: "A destination, a vague idea, or just a budget and some dates — that's enough for us to start.",
  },
  {
    title: "Get a fixed plan",
    body: "A day-by-day itinerary and a fixed price, before you commit to anything. No surprise line items later.",
  },
  {
    title: "Just travel",
    body: "Flights, stays, transport, and visas — handled. One planner stays on call from departure to landing back home.",
  },
];

const destinations = [
  "Thailand",
  "Bali",
  "Switzerland",
  "Dubai",
  "Maldives",
  "Vietnam",
  "Singapore",
  "Kerala",
  "Goa",
  "Rajasthan",
  "Himachal Pradesh",
  "Andaman",
  "Ladakh",
  "Char Dham",
];

export default function Home() {
  const featured = getFeaturedPackages(8);
  const recentPosts = getRecentPosts(3);

  return (
    <div>
      <HeroShowcase />

      <DestinationMarquee />

      <section>
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-3 px-6 py-10 md:grid-cols-4">
          {categoryTiles.map((tile, i) => (
            <Reveal key={tile.label} delay={i * 80}>
              <Link
                href={tile.href}
                className="group relative flex h-32 flex-col justify-end overflow-hidden rounded-2xl p-4 transition-transform hover:-translate-y-0.5"
              >
                <Image
                  src={tile.image}
                  alt={tile.label}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/10" />
                <span className="relative font-display text-lg font-semibold text-white">
                  {tile.label}
                </span>
                <span className="relative mt-1 text-xs text-white/85">{tile.blurb}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <TravelPicture />
          </Reveal>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              Why Travel Anchor Tours & Travels
            </p>
            <h2 className="mt-1 text-wrap-balance font-display text-2xl font-semibold text-ink md:text-3xl">
              Best Travel Agency in India – Travel Anchor Tours & Travels
            </h2>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {whyUsPoints.map((point, i) => (
                <Reveal key={point.title} delay={i * 90}>
                  <div className="glass h-full rounded-2xl p-5">
                    <h3 className="text-sm font-semibold text-ink">{point.title}</h3>
                    <p className="mt-2 text-[13px] leading-relaxed text-ink-soft">{point.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-line">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center font-display text-2xl font-semibold text-ink md:text-3xl">
            How a trip with us actually works
          </h2>
          <div className="relative mt-12">
            <div
              aria-hidden="true"
              className="absolute left-4 top-4 hidden h-px w-[calc(100%-2rem)] border-t-2 border-dashed border-line-strong sm:block"
            />
            <div className="grid gap-8 sm:grid-cols-3">
              {howItWorks.map((step, i) => (
                <Reveal key={step.title} delay={i * 120} className="relative pl-10 sm:pl-0">
                  <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white sm:relative sm:mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured packages — swipeable shelf */}
      <section className="py-16">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4 px-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">Featured</p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-ink">
              A few places to start
            </h2>
          </div>
          <Link href="/packages" className="text-sm font-semibold text-accent hover:underline">
            View all packages →
          </Link>
        </div>
        <div className="no-scrollbar mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-2 sm:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
          {featured.map((pkg, i) => (
            <div key={pkg.slug} className="w-[260px] shrink-0 snap-start sm:w-[300px]">
              <PackageCard pkg={pkg} delay={Math.min(i * 80, 480)} />
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-16">
          <Reveal>
            <div className="glass-strong flex flex-col justify-between gap-6 rounded-2xl px-8 py-10 sm:flex-row sm:items-center">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                  Visa services
                </p>
                <h2 className="mt-1 font-display text-2xl font-semibold text-ink">
                  Sorted before you pack a bag
                </h2>
                <p className="mt-2 max-w-md text-sm text-ink-soft">
                  E-visas, visa-on-arrival, and full embassy applications — for
                  every destination we sell a package to, and plenty we don't.
                </p>
              </div>
              <Link
                href="/visa"
                className="whitespace-nowrap rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-ink"
              >
                Check visa requirements
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              From the blog
            </p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-ink">
              Notes before you go
            </h2>
          </div>
          <Link href="/blog" className="text-sm font-semibold text-accent hover:underline">
            Read all posts →
          </Link>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {recentPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} delay={i * 90} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <Reveal>
          <div className="glass-strong flex flex-col items-center gap-5 rounded-3xl px-8 py-14 text-center">
            <p className="font-display text-2xl font-semibold text-ink md:text-3xl">
              Where to next?
            </p>
            <p className="max-w-md text-sm text-ink-soft">
              Tell us the destination, or tell us nothing at all — we&apos;re
              just as happy to suggest one.
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
  );
}

function DestinationMarquee() {
  const loop = [...destinations, ...destinations];
  return (
    <div className="glass overflow-hidden border-x-0 py-3">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {loop.map((d, i) => (
          <span key={`${d}-${i}`} className="flex items-center gap-8 text-sm text-ink-soft">
            <span className="font-medium text-ink">{d}</span>
            <span className="text-brass" aria-hidden="true">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

function TravelPicture() {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
      <Image
        src="/images/misc/about-hero.jpg"
        alt="Travel Anchor Tours & Travels — journeys across India and beyond"
        fill
        sizes="(min-width: 1024px) 50vw, 100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/10" />
      <div className="glass absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl px-5 py-3 sm:right-auto">
        <div>
          <p className="font-display text-lg font-semibold text-white">15+ Years</p>
          <p className="text-[11px] text-white/75">Planning journeys across India &amp; beyond</p>
        </div>
      </div>
    </div>
  );
}
