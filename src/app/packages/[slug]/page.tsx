import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import PackageCard from "@/components/PackageCard";
import Reveal from "@/components/Reveal";
import {
  formatPrice,
  getAllPackages,
  getPackageBySlug,
  getRelatedPackages,
} from "@/lib/packages";

export function generateStaticParams() {
  return getAllPackages().map((pkg) => ({ slug: pkg.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) return {};
  return {
    title: pkg.name,
    description: pkg.summary,
  };
}

export default async function PackageDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const pkg = getPackageBySlug(slug);
  if (!pkg) notFound();

  const related = getRelatedPackages(pkg);
  const [from, to] = pkg.coverGradient;

  return (
    <div>
      <div
        className="relative h-64 w-full overflow-hidden sm:h-80"
        style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}
      >
        <Image
          src={`/images/packages/${pkg.slug}.jpg`}
          alt={pkg.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 py-10 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="flex items-center gap-2">
              <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                {pkg.category} · {pkg.state ?? pkg.country}
              </p>
              {pkg.isNew && (
                <span className="rounded-full bg-brass px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#20140a]">
                  New
                </span>
              )}
            </div>
            <h1 className="mt-2 font-display text-3xl font-semibold text-ink md:text-4xl">
              {pkg.name}
            </h1>
            <p className="mt-3 max-w-2xl text-base text-ink-soft">{pkg.summary}</p>

            <dl className="glass mt-6 grid grid-cols-2 gap-4 rounded-2xl p-5 sm:grid-cols-4">
              <Fact label="Duration" value={`${pkg.days}D / ${pkg.nights}N`} />
              <Fact label="Stay" value={pkg.inclusions.stay} />
              <Fact label="Transport" value={pkg.inclusions.transport} />
              <Fact
                label="Visa"
                value={pkg.inclusions.visaIncluded ? "Included" : "Assisted, not included"}
              />
            </dl>

            <section className="mt-10">
              <h2 className="font-display text-xl font-semibold text-ink">Highlights</h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {pkg.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-ink-soft">
                    <span className="mt-1 text-accent">•</span>
                    {h}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10">
              <h2 className="font-display text-xl font-semibold text-ink">
                Day by day
              </h2>
              <ol className="mt-4 space-y-5">
                {pkg.itinerary.map((day, i) => (
                  <Reveal
                    key={day.title}
                    as="li"
                    delay={Math.min(i * 60, 300)}
                    className="glass rounded-xl p-5"
                  >
                    <p className="text-xs font-semibold uppercase tracking-wide text-accent">
                      Day {i + 1}
                    </p>
                    <h3 className="mt-1 text-base font-semibold text-ink">{day.title}</h3>
                    <ul className="mt-2 space-y-1">
                      {day.activities.map((a) => (
                        <li key={a} className="text-sm text-ink-soft">
                          {a}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                ))}
              </ol>
            </section>
          </div>

          <aside className="glass-strong h-fit rounded-2xl p-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Starting from
            </p>
            <p className="mt-1 font-display text-3xl font-semibold text-ink">
              {formatPrice(pkg.price)}
            </p>
            <p className="mt-1 text-xs text-ink-faint">Per person, twin sharing</p>

            <Link
              href={`/contact?package=${pkg.slug}`}
              className="mt-5 block w-full rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-ink"
            >
              Enquire about this trip
            </Link>

            <div className="mt-6 space-y-2 border-t border-line pt-5 text-sm text-ink-soft">
              <p className="font-semibold text-ink">Included</p>
              <p>{pkg.inclusions.sightseeing}</p>
              <p>{pkg.inclusions.stay}</p>
              <p>{pkg.inclusions.transport}</p>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <section className="border-t border-line py-14">
            <h2 className="font-display text-xl font-semibold text-ink">
              More in {pkg.region}
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <PackageCard key={r.slug} pkg={r} delay={i * 80} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">
        {label}
      </p>
      <p className="mt-0.5 text-sm font-medium text-ink">{value}</p>
    </div>
  );
}
