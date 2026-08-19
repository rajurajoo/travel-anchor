import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { TourPackage } from "@/lib/types";
import { formatPrice } from "@/lib/packages";

export default function PackageCard({
  pkg,
  delay = 0,
}: {
  pkg: TourPackage;
  delay?: number;
}) {
  const [from, to] = pkg.coverGradient;
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        href={`/packages/${pkg.slug}`}
        className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-transform hover:-translate-y-0.5"
      >
        <div
          className="relative flex h-40 items-end overflow-hidden p-4"
          style={{
            backgroundImage: `linear-gradient(135deg, ${from}, ${to})`,
          }}
        >
          <Image
            src={`/images/packages/${pkg.slug}.jpg`}
            alt={pkg.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
          {pkg.isNew && (
            <span className="absolute right-3 top-3 rounded-full bg-brass px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-[#20140a] shadow-sm">
              New
            </span>
          )}
          <span className="relative rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
            {pkg.days}D / {pkg.nights}N
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-accent">
              {pkg.state ?? pkg.country}
            </p>
            <h3 className="mt-1 font-display text-lg font-semibold leading-snug text-ink transition-colors group-hover:text-accent">
              {pkg.name}
            </h3>
          </div>
          <p className="line-clamp-2 flex-1 text-sm text-ink-soft">{pkg.summary}</p>
          <div className="flex items-center justify-between border-t border-line pt-3">
            <div className="flex flex-wrap gap-1">
              {pkg.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent-ink"
                >
                  {tag}
                </span>
              ))}
            </div>
            <span className="whitespace-nowrap font-display text-base font-semibold text-ink">
              {formatPrice(pkg.price)}
            </span>
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
