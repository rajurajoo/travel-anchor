import type { Metadata } from "next";
import ServiceCard from "@/components/ServiceCard";
import { getAllServices } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Car rental, flight tickets, hotel & resort bookings, travel insurance, and train tickets — handled end to end by Travel Anchor Tours & Travels.",
};

export default function ServicePage() {
  const services = getAllServices();

  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      <p className="text-xs font-semibold uppercase tracking-wide text-accent">Services</p>
      <h1 className="mt-1 font-display text-3xl font-semibold text-ink">
        Everything around the trip, not just the trip
      </h1>
      <p className="mt-2 max-w-xl text-sm text-ink-soft">
        Cars, flights, stays, insurance, and trains — booked and confirmed by
        one team, so nothing falls through the cracks between bookings.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <ServiceCard key={service.slug} service={service} delay={i * 80} />
        ))}
      </div>
    </div>
  );
}
