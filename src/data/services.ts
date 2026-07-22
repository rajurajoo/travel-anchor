import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    slug: "car-rental",
    name: "Car Rental",
    tagline: "Self-drive or chauffeur-driven, ready wherever you land.",
    description: [
      "Whether it's a hatchback for a city weekend or an SUV for a hill-station drive, we arrange rental cars that match the trip, not the other way round. Self-drive and chauffeur-driven options are both available, with airport and hotel pickup as standard.",
      "For outstation trips we work with drivers who know the route, not just the destination — hill roads, night driving, and multi-day itineraries are all things we plan for upfront rather than leaving to chance.",
      "Every booking comes with a fixed quote before you travel: fuel policy, toll handling, and driver allowance (where applicable) are all spelled out, so there's nothing to negotiate at the counter.",
    ],
    features: [
      "Self-drive and chauffeur-driven options",
      "Airport and hotel pickup/drop-off",
      "Outstation and multi-day rentals",
      "Fixed, all-inclusive quotes",
    ],
    image: "/images/services/car-rental.jpg",
  },
  {
    slug: "flight-tickets",
    name: "Flight Tickets",
    tagline: "Domestic and international fares, booked and confirmed for you.",
    description: [
      "We handle flight bookings end to end — comparing fares across airlines, flagging the best-value connections, and confirming seats before prices move. For domestic hops and long-haul international legs alike, you get a fare that's been checked by a person, not just a search engine.",
      "Group bookings, last-minute changes, and date-flexible fares are all things we sort out directly with the airlines, so you're not stuck on hold or re-entering the same search five times.",
      "If your itinerary needs adjusting after booking — a changed date, an added stopover — we handle the airline's rules and fees on your behalf and tell you the real cost before you commit.",
    ],
    features: [
      "Domestic and international fares",
      "Group and multi-city bookings",
      "Date changes and cancellations handled for you",
      "Fare comparison across airlines",
    ],
    image: "/images/services/flight-tickets.jpg",
  },
  {
    slug: "hotel-resort",
    name: "Hotel & Resort",
    tagline: "From budget stays to full-board resorts, matched to your trip.",
    description: [
      "We book hotels and resorts across every budget — a simple 3-star for a quick city stop, or a full-board resort for a week of doing nothing at all. Every property is picked for the specific trip, not just pulled from a generic list.",
      "For family trips we check room configurations and kid-friendly amenities before booking; for honeymoons, we look at privacy and setting as much as star rating. The details that actually matter to your particular trip are the ones we check first.",
      "Rates are negotiated where we can, and every confirmation includes exactly what's included — breakfast, transfers, taxes — so there's no gap between what you booked and what you get at check-in.",
    ],
    features: [
      "Budget to luxury resort bookings",
      "Family and honeymoon-specific picks",
      "Negotiated rates where available",
      "Clear inclusions on every confirmation",
    ],
    image: "/images/services/hotel-resort.jpg",
  },
  {
    slug: "insurance",
    name: "Travel Insurance",
    tagline: "Coverage sorted before you go, not scrambled for after.",
    description: [
      "Travel insurance is one of those things that only matters when something goes wrong — which is exactly why we handle it as a standard part of trip planning, not an afterthought. Medical coverage, trip cancellation, and baggage loss are all things we check against your specific itinerary.",
      "For international trips, especially to countries with high medical costs or mandatory insurance requirements for visas, we make sure the policy actually satisfies what the destination requires — not just a generic minimum.",
      "If you need to file a claim while travelling, we're a phone call away to help you understand the process rather than leaving you to read policy fine print in a foreign hospital waiting room.",
    ],
    features: [
      "Medical, cancellation, and baggage cover",
      "Visa-compliant policies for international trips",
      "Matched to your actual itinerary",
      "Support if you need to file a claim",
    ],
    image: "/images/services/insurance.jpg",
  },
  {
    slug: "train-tickets",
    name: "Train Tickets",
    tagline: "Tatkal, premium, or a slow scenic route — booked properly.",
    description: [
      "Indian Railways bookings come with their own quirks — tatkal windows, waitlists, quota rules — and we handle all of it so you're not refreshing a booking page at exactly 10am hoping for a confirmed seat.",
      "For scenic or long-distance routes, we help pick the right class and train rather than just the first available option — the difference between a comfortable overnight journey and a rough one usually comes down to details we check in advance.",
      "Group and family bookings are coordinated to keep everyone in the same coach wherever possible, and we track PNR status so you know your booking is confirmed well before departure day.",
    ],
    features: [
      "Tatkal and premium tatkal booking",
      "Class and route recommendations",
      "Group bookings kept in the same coach",
      "PNR tracking and waitlist updates",
    ],
    image: "/images/services/train-tickets.jpg",
  },
];
