"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import VisaCard from "@/components/VisaCard";
import { filterVisas, getVisaRegions } from "@/lib/visas";

export default function VisaPage() {
  return (
    <Suspense fallback={null}>
      <VisaPageContent />
    </Suspense>
  );
}

function VisaPageContent() {
  const searchParams = useSearchParams();
  const region = searchParams.get("region") ?? undefined;
  const regions = getVisaRegions();
  const results = filterVisas(region);

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">Visa</p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-ink">
        Visa help for every kind of trip
      </h1>
      <p className="mt-2 max-w-xl text-sm text-ink-soft">
        We handle the paperwork for e-visas, visa-on-arrival, and full
        embassy sticker visas. Prices below are starting points — the exact
        fee depends on your passport and travel dates.
      </p>

      <form
        method="get"
        action="/visa"
        className="glass mt-8 flex flex-wrap items-end gap-4 rounded-2xl p-5"
      >
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
            Region
          </span>
          <select name="region" defaultValue={region ?? ""} className="filter-select">
            <option value="">All regions</option>
            {regions.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </label>
        <button
          type="submit"
          className="glass-strong rounded-full px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:text-accent"
        >
          Apply
        </button>
        {region && (
          <a
            href="/visa"
            className="text-sm font-medium text-ink-faint underline-offset-2 hover:text-accent hover:underline"
          >
            Clear filter
          </a>
        )}
      </form>

      <p className="mt-6 text-sm text-ink-faint">
        {results.length} destination{results.length === 1 ? "" : "s"}
      </p>

      <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {results.map((visa, i) => (
          <VisaCard key={visa.country} visa={visa} delay={Math.min((i % 9) * 50, 400)} />
        ))}
      </div>
    </div>
  );
}
