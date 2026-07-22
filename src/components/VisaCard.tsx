import Link from "next/link";
import Reveal from "@/components/Reveal";
import { VisaListing } from "@/lib/types";
import { formatVisaPrice } from "@/lib/visas";

export default function VisaCard({
  visa,
  delay = 0,
}: {
  visa: VisaListing;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <div className="glass flex h-full flex-col justify-between rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
            {visa.region}
          </p>
          <h3 className="mt-1 font-display text-lg font-semibold text-ink">
            {visa.country}
          </h3>
          <span className="mt-2 inline-block rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-semibold text-accent-ink">
            {visa.type}
          </span>
          <p className="mt-3 text-xs text-ink-faint">
            Processing: {visa.processingDays}
          </p>
        </div>
        <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
          <span className="font-display text-base font-semibold text-ink">
            {formatVisaPrice(visa.price)}
          </span>
          <Link
            href={`/contact?visa=${encodeURIComponent(visa.country)}`}
            className="text-sm font-semibold text-accent hover:underline"
          >
            Enquire →
          </Link>
        </div>
      </div>
    </Reveal>
  );
}
