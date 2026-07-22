import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { Service } from "@/lib/types";

export default function ServiceCard({
  service,
  delay = 0,
}: {
  service: Service;
  delay?: number;
}) {
  return (
    <Reveal delay={delay} className="h-full">
      <Link
        href={`/service/${service.slug}`}
        className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-transform hover:-translate-y-0.5"
      >
        <div className="relative h-40 overflow-hidden">
          <Image
            src={service.image}
            alt={service.name}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
          <span className="absolute bottom-3 left-4 font-display text-lg font-semibold text-white">
            {service.name}
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-2 p-5">
          <p className="text-sm text-ink-soft">{service.tagline}</p>
          <span className="mt-auto pt-2 text-sm font-semibold text-accent">Learn more →</span>
        </div>
      </Link>
    </Reveal>
  );
}
