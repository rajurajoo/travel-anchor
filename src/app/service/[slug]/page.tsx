import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { getAllServices, getServiceBySlug } from "@/lib/services";

export function generateStaticParams() {
  return getAllServices().map((service) => ({ slug: service.slug }));
}

type Params = Promise<{ slug: string }>;

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: service.name,
    description: service.tagline,
  };
}

export default async function ServiceDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = getAllServices().filter((s) => s.slug !== service.slug);

  return (
    <div>
      <div className="relative h-64 w-full overflow-hidden sm:h-80">
        <Image
          src={service.image}
          alt={service.name}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-black/10" />
        <div className="absolute inset-0 flex items-end">
          <div className="mx-auto w-full max-w-6xl px-6 pb-8">
            <p className="text-xs font-semibold uppercase tracking-wide text-brass">
              Service
            </p>
            <h1 className="mt-1 font-display text-3xl font-semibold text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.5)] md:text-4xl">
              {service.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 py-10 lg:grid-cols-[1fr_340px]">
          <div>
            <p className="max-w-2xl text-base text-ink-soft">{service.tagline}</p>

            <div className="mt-6 space-y-4">
              {service.description.map((para, i) => (
                <p key={i} className="text-base leading-relaxed text-ink-soft">
                  {para}
                </p>
              ))}
            </div>

            <section className="mt-10">
              <h2 className="font-display text-xl font-semibold text-ink">
                What's included
              </h2>
              <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li key={f} className="flex gap-2 text-sm text-ink-soft">
                    <span className="mt-1 text-accent">•</span>
                    {f}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="glass-strong h-fit rounded-2xl p-6 lg:sticky lg:top-24">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
              Need this sorted?
            </p>
            <p className="mt-1 font-display text-xl font-semibold text-ink">
              {service.name}
            </p>
            <p className="mt-2 text-sm text-ink-soft">
              Tell us your dates and we'll come back with options and a fixed
              price — no obligation.
            </p>
            <Link
              href={`/contact?service=${service.slug}`}
              className="mt-5 block w-full rounded-full bg-accent px-5 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-accent-ink"
            >
              Enquire about this service
            </Link>
          </aside>
        </div>

        {others.length > 0 && (
          <section className="border-t border-line py-14">
            <h2 className="font-display text-xl font-semibold text-ink">
              Other services
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {others.map((s, i) => (
                <ServiceCard key={s.slug} service={s} delay={i * 80} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
