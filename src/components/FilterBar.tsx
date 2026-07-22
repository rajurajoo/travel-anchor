import { CONTINENTS } from "@/lib/packages";
import { PackageCategory, PackageTag } from "@/lib/types";

const categories: PackageCategory[] = ["International", "Domestic"];
const tags: PackageTag[] = ["Honeymoon", "Family", "Adventure", "Pilgrimage", "Luxury"];

export default function FilterBar({
  regions,
  current,
}: {
  regions: string[];
  current: { category?: string; tag?: string; region?: string; continent?: string };
}) {
  return (
    <form
      method="get"
      action="/packages"
      className="glass flex flex-wrap items-end gap-4 rounded-2xl p-5"
    >
      <Field label="Continent">
        <select name="continent" defaultValue={current.continent ?? ""} className="filter-select">
          <option value="">All continents</option>
          {CONTINENTS.map((c) => (
            <option key={c} value={c}>
              {c === "India" ? "India (Domestic)" : c}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Category">
        <select name="category" defaultValue={current.category ?? ""} className="filter-select">
          <option value="">All categories</option>
          {categories.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Trip type">
        <select name="tag" defaultValue={current.tag ?? ""} className="filter-select">
          <option value="">All types</option>
          {tags.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </Field>

      <Field label="Region">
        <select name="region" defaultValue={current.region ?? ""} className="filter-select">
          <option value="">All regions</option>
          {regions.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
      </Field>

      <button
        type="submit"
        className="glass-strong rounded-full px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:text-accent"
      >
        Apply
      </button>
      {(current.category || current.tag || current.region || current.continent) && (
        <a
          href="/packages"
          className="text-sm font-medium text-ink-faint underline-offset-2 hover:text-accent hover:underline"
        >
          Clear filters
        </a>
      )}
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="flex flex-col gap-1.5 text-sm">
      <span className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
        {label}
      </span>
      {children}
    </label>
  );
}
