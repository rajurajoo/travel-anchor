import Image from "next/image";
import Reveal from "@/components/Reveal";

const moments = [
  {
    src: "/images/misc/seychelles-beach-couple.jpg",
    alt: "Couple walking a palm-lined beach in Seychelles",
    caption: "Seychelles",
    className: "sm:col-span-2 sm:row-span-2",
  },
  {
    src: "/images/misc/traveler-girl-suitcase.jpg",
    alt: "Traveler with a suitcase and passport, ready to go",
    caption: "Ready to go",
    className: "sm:row-span-2",
  },
  {
    src: "/images/misc/woman-tourist-map.jpg",
    alt: "Traveler reading a map in a historic city",
    caption: "Wandering the old town",
    className: "",
  },
  {
    src: "/images/misc/backpacker-viewpoint.jpg",
    alt: "Backpacker taking in a mountain viewpoint",
    caption: "Chasing the view",
    className: "sm:col-span-2",
  },
  {
    src: "/images/misc/beach-woman-umbrellas.jpg",
    alt: "Traveler arriving at a beach resort",
    caption: "Beach days",
    className: "sm:col-span-2",
  },
  {
    src: "/images/misc/airplane-overhead.jpg",
    alt: "Airplane flying overhead between city buildings",
    caption: "Wheels up",
    className: "",
  },
];

export default function TravelMoments() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div>
        <p className="text-xs font-semibold uppercase tracking-wide text-accent">
          Travel moments
        </p>
        <h2 className="mt-1 font-display text-2xl font-semibold text-ink md:text-3xl">
          Every trip starts like this
        </h2>
      </div>
      <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:auto-rows-[160px]">
        {moments.map((m, i) => (
          <Reveal
            key={m.src}
            delay={i * 70}
            className={`group relative overflow-hidden rounded-2xl ${m.className}`}
          >
            <div className="relative h-40 w-full sm:h-full">
              <Image
                src={m.src}
                alt={m.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent" />
              <span className="absolute bottom-3 left-3 text-xs font-semibold text-white drop-shadow">
                {m.caption}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
