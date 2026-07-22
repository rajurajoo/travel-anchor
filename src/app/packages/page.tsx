"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import FilterBar from "@/components/FilterBar";
import PackageCard from "@/components/PackageCard";
import { filterPackages, getRegions } from "@/lib/packages";
import { Continent, PackageCategory, PackageTag } from "@/lib/types";

export default function PackagesPage() {
  return (
    <Suspense fallback={null}>
      <PackagesPageContent />
    </Suspense>
  );
}

function PackagesPageContent() {
  const searchParams = useSearchParams();
  const params = {
    category: searchParams.get("category") ?? undefined,
    tag: searchParams.get("tag") ?? undefined,
    region: searchParams.get("region") ?? undefined,
    continent: searchParams.get("continent") ?? undefined,
    q: searchParams.get("q") ?? undefined,
    maxDays: searchParams.get("maxDays") ?? undefined,
  };
  const regions = getRegions();

  const results = filterPackages({
    category: params.category as PackageCategory | undefined,
    tag: params.tag as PackageTag | undefined,
    region: params.region,
    continent: params.continent as Continent | undefined,
    query: params.q,
    maxDays: params.maxDays ? Number(params.maxDays) : undefined,
  });

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
          Packages
        </p>
        <h1 className="mt-1 font-display text-3xl font-semibold text-ink">
          Every trip we run, in one place
        </h1>
        <p className="mt-2 max-w-xl text-sm text-ink-soft">
          Filter by continent, category, trip type, or region — every
          package below includes a full day-by-day plan and a fixed
          starting price.
        </p>
      </div>

      <div className="mt-8">
        <FilterBar regions={regions} current={params} />
      </div>

      <p className="mt-6 text-sm text-ink-faint">
        {results.length} package{results.length === 1 ? "" : "s"} found
        {params.continent && (
          <>
            {" "}
            in{" "}
            <span className="font-semibold text-ink">
              {params.continent === "India" ? "India (Domestic)" : params.continent}
            </span>
          </>
        )}
        {params.q && (
          <>
            {" "}
            matching <span className="font-semibold text-ink">&ldquo;{params.q}&rdquo;</span>
          </>
        )}
      </p>

      {results.length > 0 ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((pkg, i) => (
            <PackageCard key={pkg.slug} pkg={pkg} delay={Math.min((i % 6) * 70, 350)} />
          ))}
        </div>
      ) : (
        <div className="glass mt-10 rounded-2xl p-10 text-center text-sm text-ink-soft">
          No packages match those filters yet.{" "}
          <a href="/packages" className="font-semibold text-accent hover:underline">
            Clear filters
          </a>{" "}
          to see everything.
        </div>
      )}
    </div>
  );
}
