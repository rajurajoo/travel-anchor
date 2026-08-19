import { TourPackage } from "@/lib/types";

export const packages: TourPackage[] = [
  {
    slug: "thailand-island-hopper",
    name: "Thailand Island Hopper",
    category: "International",
    tags: ["Family", "Adventure"],
    country: "Thailand",
    region: "Southeast Asia",
    continent: "Asia",
    days: 6,
    nights: 5,
    price: 62999,
    summary:
      "Bangkok's street-food chaos, Phi Phi's limestone cliffs, and a sunset longtail-boat ride — a first-timer's Thailand done right.",
    highlights: [
      "Grand Palace and Wat Arun at golden hour",
      "Speedboat run through the Phi Phi islands",
      "Floating market breakfast in Damnoen Saduak",
      "Free evening on Patong Beach",
    ],
    itinerary: [
      {
        title: "Landing in Bangkok",
        activities: [
          "Airport pickup and transfer to a river-view hotel",
          "Evening tuk-tuk ride through Chinatown for a street-food crawl",
        ],
      },
      {
        title: "Old City & Temples",
        activities: [
          "Grand Palace and the Emerald Buddha in the morning",
          "Wat Arun at sunset from across the Chao Phraya",
        ],
      },
      {
        title: "Fly to Phuket",
        activities: [
          "Morning flight to Phuket, transfer to Patong",
          "Free afternoon to settle in and hit the beach",
        ],
      },
      {
        title: "Phi Phi Islands",
        activities: [
          "Full-day speedboat trip to Maya Bay and Monkey Beach",
          "Snorkelling stop at Pileh Lagoon",
        ],
      },
      {
        title: "Phang Nga Bay",
        activities: [
          "Kayak through the limestone karsts of James Bond Island",
          "Evening free for night markets",
        ],
      },
      {
        title: "Departure",
        activities: ["Breakfast, last-minute shopping, transfer to the airport"],
      },
    ],
    inclusions: {
      stay: "4-star hotels, Bangkok + Phuket",
      transport: "Domestic flight + private airport transfers",
      sightseeing: "All entries and boat trips as listed",
      visaIncluded: false,
    },
    coverGradient: ["#0E6E5C", "#F2B441"],
  },
  {
    slug: "bali-honeymoon-escape",
    name: "Bali Honeymoon Escape",
    category: "International",
    tags: ["Honeymoon", "Luxury"],
    country: "Indonesia",
    region: "Southeast Asia",
    continent: "Asia",
    days: 6,
    nights: 5,
    price: 89999,
    summary:
      "Private villa pools, rice-terrace breakfasts, and a clifftop dinner in Uluwatu — built for two, start to finish.",
    highlights: [
      "Private-pool villa in Ubud",
      "Sunrise trek up Mount Batur",
      "Candlelit dinner on the Uluwatu cliffs",
      "Couples spa afternoon in Seminyak",
    ],
    itinerary: [
      {
        title: "Arrival in Ubud",
        activities: [
          "Private transfer from Denpasar to your villa",
          "Welcome fruit platter and an evening at leisure",
        ],
      },
      {
        title: "Rice Terraces & Temples",
        activities: [
          "Tegallalang rice terrace walk",
          "Tirta Empul holy spring temple",
        ],
      },
      {
        title: "Mount Batur Sunrise",
        activities: [
          "Pre-dawn trek to the summit for sunrise",
          "Afternoon at leisure by the villa pool",
        ],
      },
      {
        title: "Move to Seminyak",
        activities: [
          "Transfer to a beachfront resort",
          "Couples massage and spa package",
        ],
      },
      {
        title: "Uluwatu",
        activities: [
          "Kecak fire dance at the clifftop temple",
          "Private candlelit dinner on the cliff edge",
        ],
      },
      {
        title: "Departure",
        activities: ["Late checkout, transfer to the airport"],
      },
    ],
    inclusions: {
      stay: "Private-pool villa + beachfront resort",
      transport: "Private car with driver throughout",
      sightseeing: "All entries, one spa session included",
      visaIncluded: true,
    },
    coverGradient: ["#1B5E4F", "#E8A34C"],
  },
  {
    slug: "switzerland-alpine-classic",
    name: "Switzerland Alpine Classic",
    category: "International",
    tags: ["Family", "Luxury"],
    country: "Switzerland",
    region: "Europe",
    continent: "Europe",
    days: 8,
    nights: 7,
    price: 215000,
    summary:
      "Zurich to Zermatt by scenic rail, with the Jungfraujoch and a Lake Lucerne cruise in between.",
    highlights: [
      "Glacier Express scenic rail leg",
      "Jungfraujoch — Top of Europe",
      "Lake Lucerne boat cruise",
      "Matterhorn viewpoint at Gornergrat",
    ],
    itinerary: [
      {
        title: "Arrival in Zurich",
        activities: ["Airport transfer, evening walk along the Limmat"],
      },
      {
        title: "Lucerne",
        activities: [
          "Train to Lucerne",
          "Chapel Bridge and a lake cruise",
        ],
      },
      {
        title: "Interlaken",
        activities: ["Transfer to Interlaken", "Free afternoon by Lake Thun"],
      },
      {
        title: "Jungfraujoch",
        activities: [
          "Full-day excursion to the Top of Europe",
          "Ice Palace and the Sphinx observatory",
        ],
      },
      {
        title: "Glacier Express to Zermatt",
        activities: [
          "Full-day panoramic rail journey through the Alps",
        ],
      },
      {
        title: "Zermatt",
        activities: [
          "Gornergrat cog railway for Matterhorn views",
          "Free time in the car-free village",
        ],
      },
      {
        title: "Return to Zurich",
        activities: ["Scenic train back, evening at leisure"],
      },
      {
        title: "Departure",
        activities: ["Breakfast, transfer to the airport"],
      },
    ],
    inclusions: {
      stay: "4-star hotels throughout",
      transport: "Swiss rail passes + all transfers",
      sightseeing: "Jungfraujoch and Gornergrat tickets included",
      visaIncluded: false,
    },
    coverGradient: ["#274472", "#DDEBF7"],
  },
  {
    slug: "dubai-city-and-desert",
    name: "Dubai City & Desert",
    category: "International",
    tags: ["Family", "Adventure"],
    country: "United Arab Emirates",
    region: "Middle East",
    continent: "Middle East",
    days: 5,
    nights: 4,
    price: 54999,
    summary:
      "Burj Khalifa views, a desert safari with dinner under the stars, and enough mall time to cover every wishlist.",
    highlights: [
      "Burj Khalifa At the Top",
      "Evening desert safari with BBQ dinner",
      "Dubai Marina dhow cruise",
      "Free half-day for Dubai Mall / Global Village",
    ],
    itinerary: [
      {
        title: "Arrival",
        activities: ["Airport transfer, evening at leisure"],
      },
      {
        title: "City Tour",
        activities: [
          "Burj Khalifa, Dubai Mall, and the Fountain show",
          "Old Dubai — Gold Souk and an abra ride across the Creek",
        ],
      },
      {
        title: "Desert Safari",
        activities: [
          "Dune bashing by 4x4",
          "Camel ride, BBQ dinner and a live show at the camp",
        ],
      },
      {
        title: "Marina & Free Time",
        activities: [
          "Morning free for shopping or Global Village",
          "Evening dhow cruise dinner on the Marina",
        ],
      },
      {
        title: "Departure",
        activities: ["Breakfast, transfer to the airport"],
      },
    ],
    inclusions: {
      stay: "4-star hotel, Dubai Marina",
      transport: "Private airport transfers + tour coach",
      sightseeing: "Burj Khalifa ticket, safari, and cruise included",
      visaIncluded: true,
    },
    coverGradient: ["#B9762B", "#F6D9A8"],
  },
  {
    slug: "maldives-overwater-retreat",
    name: "Maldives Overwater Retreat",
    category: "International",
    tags: ["Honeymoon", "Luxury"],
    country: "Maldives",
    region: "South Asia",
    continent: "Asia",
    days: 5,
    nights: 4,
    price: 145000,
    summary:
      "An overwater villa, a private sandbank picnic, and nothing on the schedule but the tide.",
    highlights: [
      "Overwater villa with a private deck",
      "Sunset dolphin cruise",
      "Private sandbank picnic lunch",
      "Snorkelling over the house reef",
    ],
    itinerary: [
      {
        title: "Arrival",
        activities: [
          "Seaplane transfer from Malé to the resort",
          "Villa check-in and evening at leisure",
        ],
      },
      {
        title: "Reef Day",
        activities: [
          "Guided snorkelling over the house reef",
          "Free afternoon on the deck",
        ],
      },
      {
        title: "Sandbank Picnic",
        activities: [
          "Boat out to a private sandbank for lunch",
          "Sunset dolphin-watching cruise",
        ],
      },
      {
        title: "At Leisure",
        activities: ["A full day with nothing planned — spa, reef, or hammock"],
      },
      {
        title: "Departure",
        activities: ["Breakfast, seaplane transfer back to Malé"],
      },
    ],
    inclusions: {
      stay: "Overwater villa, half-board",
      transport: "Seaplane transfers included",
      sightseeing: "Sandbank picnic and dolphin cruise included",
      visaIncluded: true,
    },
    coverGradient: ["#0B7A8C", "#A9E4D9"],
  },
  {
    slug: "vietnam-north-to-south",
    name: "Vietnam: North to South",
    category: "International",
    tags: ["Adventure", "Family"],
    country: "Vietnam",
    region: "Southeast Asia",
    continent: "Asia",
    days: 7,
    nights: 6,
    price: 71999,
    summary:
      "Halong Bay by overnight junk boat, Hoi An's lantern-lit old town, and Ho Chi Minh City to close it out.",
    highlights: [
      "Overnight cruise on Halong Bay",
      "Hoi An ancient town by lantern light",
      "Cu Chi tunnels near Ho Chi Minh City",
      "Street-food tour in Hanoi's Old Quarter",
    ],
    itinerary: [
      {
        title: "Hanoi",
        activities: ["Airport transfer", "Evening street-food walk in the Old Quarter"],
      },
      {
        title: "Halong Bay Cruise",
        activities: [
          "Drive to the bay, board an overnight junk boat",
          "Kayaking among the limestone karsts",
        ],
      },
      {
        title: "Fly to Da Nang / Hoi An",
        activities: [
          "Morning cruise activities, flight to Da Nang",
          "Evening at Hoi An's lantern-lit old town",
        ],
      },
      {
        title: "Hoi An Free Day",
        activities: ["Tailor visit, cooking class, or a beach afternoon"],
      },
      {
        title: "Fly to Ho Chi Minh City",
        activities: ["Transfer and flight south", "Evening at leisure"],
      },
      {
        title: "Cu Chi & City Tour",
        activities: [
          "Cu Chi tunnels in the morning",
          "War Remnants Museum and the Reunification Palace",
        ],
      },
      {
        title: "Departure",
        activities: ["Breakfast, transfer to the airport"],
      },
    ],
    inclusions: {
      stay: "3-star hotels + 1 night on the junk boat",
      transport: "2 domestic flights + all transfers",
      sightseeing: "All entries as listed",
      visaIncluded: false,
    },
    coverGradient: ["#245E4F", "#E8DAB2"],
  },
  {
    slug: "singapore-family-weekend",
    name: "Singapore Family Weekend",
    category: "International",
    tags: ["Family"],
    country: "Singapore",
    region: "Southeast Asia",
    continent: "Asia",
    days: 4,
    nights: 3,
    price: 58999,
    summary:
      "Gardens by the Bay, a Universal Studios day, and the Night Safari — built around what keeps kids and adults both happy.",
    highlights: [
      "Full day at Universal Studios Singapore",
      "Gardens by the Bay + Cloud Forest",
      "Night Safari at the zoo",
      "Sentosa cable car crossing",
    ],
    itinerary: [
      {
        title: "Arrival",
        activities: ["Airport transfer, evening at Gardens by the Bay"],
      },
      {
        title: "Sentosa",
        activities: [
          "Cable car over to Sentosa Island",
          "Beach time and the S.E.A. Aquarium",
        ],
      },
      {
        title: "Universal Studios",
        activities: ["Full day at the park"],
      },
      {
        title: "Night Safari & Departure",
        activities: [
          "Morning free for Orchard Road shopping",
          "Evening Night Safari before the flight home",
        ],
      },
    ],
    inclusions: {
      stay: "4-star hotel, Marina Bay area",
      transport: "Airport transfers + MRT day passes",
      sightseeing: "Universal Studios and Night Safari tickets included",
      visaIncluded: false,
    },
    coverGradient: ["#1A4C6E", "#F3C46A"],
  },
  {
    slug: "kerala-backwaters-and-hills",
    name: "Kerala Backwaters & Hills",
    category: "Domestic",
    tags: ["Family", "Honeymoon"],
    country: "India",
    state: "Kerala",
    region: "South India",
    continent: "India",
    days: 6,
    nights: 5,
    price: 34999,
    summary:
      "A houseboat night on the Alleppey backwaters, tea gardens in Munnar, and a wildlife morning at Thekkady.",
    highlights: [
      "Overnight stay on a private houseboat",
      "Tea-garden drive through Munnar",
      "Periyar wildlife boat safari",
      "Kathakali performance in Kochi",
    ],
    itinerary: [
      {
        title: "Kochi Arrival",
        activities: ["Airport pickup", "Evening Kathakali dance performance"],
      },
      {
        title: "Drive to Munnar",
        activities: ["Scenic drive through spice plantations", "Tea museum visit"],
      },
      {
        title: "Munnar Sightseeing",
        activities: ["Eravikulam National Park", "Mattupetty Dam viewpoint"],
      },
      {
        title: "Thekkady",
        activities: ["Drive to Thekkady", "Periyar Lake boat safari"],
      },
      {
        title: "Alleppey Houseboat",
        activities: ["Drive to Alleppey", "Check in to a private houseboat for the night"],
      },
      {
        title: "Departure",
        activities: ["Morning backwater views, drive to Kochi for departure"],
      },
    ],
    inclusions: {
      stay: "3-star hotels + 1 night houseboat",
      transport: "Private AC car throughout",
      sightseeing: "All entries and the safari included",
      visaIncluded: false,
    },
    coverGradient: ["#1F6E43", "#C7E8B0"],
  },
  {
    slug: "goa-beach-break",
    name: "Goa Beach Break",
    category: "Domestic",
    tags: ["Family", "Adventure"],
    country: "India",
    state: "Goa",
    region: "West India",
    continent: "India",
    days: 4,
    nights: 3,
    price: 18999,
    summary:
      "North Goa's beach shacks by day, Old Goa's churches and a sunset cruise thrown in — an easy long weekend.",
    highlights: [
      "Baga and Calangute beach time",
      "Old Goa churches (UNESCO site)",
      "Sunset cruise on the Mandovi River",
      "Anjuna flea market (seasonal)",
    ],
    itinerary: [
      {
        title: "Arrival",
        activities: ["Airport transfer, evening at Baga Beach"],
      },
      {
        title: "North Goa",
        activities: [
          "Fort Aguada and Calangute Beach",
          "Free evening at a beach shack",
        ],
      },
      {
        title: "Old Goa & Cruise",
        activities: [
          "Basilica of Bom Jesus and Se Cathedral",
          "Evening Mandovi River sunset cruise",
        ],
      },
      {
        title: "Departure",
        activities: ["Morning free, transfer to the airport"],
      },
    ],
    inclusions: {
      stay: "3-star beach resort",
      transport: "Airport transfers + private car for sightseeing",
      sightseeing: "Cruise ticket included",
      visaIncluded: false,
    },
    coverGradient: ["#0E6E8C", "#F2D06B"],
  },
  {
    slug: "rajasthan-royal-circuit",
    name: "Rajasthan Royal Circuit",
    category: "Domestic",
    tags: ["Family", "Luxury"],
    country: "India",
    state: "Rajasthan",
    region: "North India",
    continent: "India",
    days: 7,
    nights: 6,
    price: 42999,
    summary:
      "Jaipur's forts, Jodhpur's blue lanes, and a night camping in the Jaisalmer dunes — the classic desert-state loop.",
    highlights: [
      "Amber Fort by elephant or jeep",
      "Mehrangarh Fort in Jodhpur",
      "Camel safari and dune camping in Jaisalmer",
      "Jaipur's Hawa Mahal and City Palace",
    ],
    itinerary: [
      {
        title: "Jaipur Arrival",
        activities: ["Airport pickup", "Evening at leisure in the Pink City"],
      },
      {
        title: "Jaipur Sightseeing",
        activities: ["Amber Fort", "City Palace, Jantar Mantar, Hawa Mahal"],
      },
      {
        title: "Drive to Jodhpur",
        activities: ["Scenic drive", "Evening in the Blue City's old lanes"],
      },
      {
        title: "Jodhpur Sightseeing",
        activities: ["Mehrangarh Fort", "Jaswant Thada"],
      },
      {
        title: "Drive to Jaisalmer",
        activities: ["Drive through the Thar", "Jaisalmer Fort at sunset"],
      },
      {
        title: "Desert Camp",
        activities: ["Camel safari into the dunes", "Overnight desert camp with folk music"],
      },
      {
        title: "Departure",
        activities: ["Drive back to Jaisalmer, transfer to the airport"],
      },
    ],
    inclusions: {
      stay: "Heritage-style hotels + 1 night desert camp",
      transport: "Private AC car throughout",
      sightseeing: "All entries and the camel safari included",
      visaIncluded: false,
    },
    coverGradient: ["#8C4A2B", "#F2C879"],
  },
  {
    slug: "himachal-honeymoon-trail",
    name: "Himachal Honeymoon Trail",
    category: "Domestic",
    tags: ["Honeymoon"],
    country: "India",
    state: "Himachal Pradesh",
    region: "North India",
    continent: "India",
    days: 5,
    nights: 4,
    price: 28999,
    summary:
      "Mall Road evenings in Shimla and snow-line views above Manali, paced for two, not a checklist.",
    highlights: [
      "Kufri snow point above Shimla",
      "Solang Valley cable car",
      "Old Manali café afternoon",
      "Mall Road evening walks",
    ],
    itinerary: [
      {
        title: "Shimla Arrival",
        activities: ["Transfer from Chandigarh", "Evening on Mall Road"],
      },
      {
        title: "Shimla Sightseeing",
        activities: ["Kufri snow point", "Jakhoo Temple viewpoint"],
      },
      {
        title: "Drive to Manali",
        activities: ["Scenic drive through the Kullu Valley"],
      },
      {
        title: "Manali Sightseeing",
        activities: ["Solang Valley cable car", "Old Manali café hopping"],
      },
      {
        title: "Departure",
        activities: ["Morning at leisure, transfer to Chandigarh"],
      },
    ],
    inclusions: {
      stay: "4-star hotels, Shimla + Manali",
      transport: "Private car throughout",
      sightseeing: "Cable car ticket included",
      visaIncluded: false,
    },
    coverGradient: ["#2E5266", "#DCEAF2"],
  },
  {
    slug: "andaman-island-getaway",
    name: "Andaman Island Getaway",
    category: "Domestic",
    tags: ["Honeymoon", "Adventure"],
    country: "India",
    state: "Andaman and Nicobar Islands",
    region: "Bay of Bengal",
    continent: "India",
    days: 5,
    nights: 4,
    price: 39999,
    summary:
      "Radhanagar Beach at sunset, a glass-bottom boat over the reef, and Cellular Jail's evening light show.",
    highlights: [
      "Radhanagar Beach, Havelock Island",
      "Glass-bottom boat ride at Elephant Beach",
      "Cellular Jail light and sound show",
      "Snorkelling at North Bay Island",
    ],
    itinerary: [
      {
        title: "Port Blair Arrival",
        activities: ["Airport pickup", "Evening Cellular Jail light show"],
      },
      {
        title: "North Bay Island",
        activities: ["Ferry to North Bay for snorkelling", "Coral reef viewing"],
      },
      {
        title: "Havelock Island",
        activities: ["Ferry to Havelock", "Radhanagar Beach sunset"],
      },
      {
        title: "Elephant Beach",
        activities: ["Glass-bottom boat ride", "Free beach afternoon"],
      },
      {
        title: "Departure",
        activities: ["Ferry back to Port Blair, transfer to the airport"],
      },
    ],
    inclusions: {
      stay: "3-star hotels, Port Blair + Havelock",
      transport: "Ferry tickets + airport transfers",
      sightseeing: "Snorkelling and boat rides included",
      visaIncluded: false,
    },
    coverGradient: ["#0A6E7C", "#BFE8D4"],
  },
  {
    slug: "char-dham-pilgrimage",
    name: "Char Dham Pilgrimage",
    category: "Domestic",
    tags: ["Pilgrimage"],
    country: "India",
    state: "Uttarakhand",
    region: "North India",
    continent: "India",
    days: 9,
    nights: 8,
    price: 32999,
    summary:
      "The full Yamunotri–Gangotri–Kedarnath–Badrinath circuit, paced with rest days built in for the altitude.",
    highlights: [
      "Yamunotri temple trek",
      "Gangotri, source of the Ganges",
      "Kedarnath temple (helicopter option available)",
      "Badrinath temple darshan",
    ],
    itinerary: [
      {
        title: "Haridwar Arrival",
        activities: ["Pickup and evening Ganga Aarti at Har Ki Pauri"],
      },
      {
        title: "Drive to Barkot",
        activities: ["Scenic drive towards Yamunotri base"],
      },
      {
        title: "Yamunotri",
        activities: ["Trek to Yamunotri temple", "Return to Barkot"],
      },
      {
        title: "Drive to Uttarkashi",
        activities: ["Onward drive, evening at leisure"],
      },
      {
        title: "Gangotri",
        activities: ["Gangotri temple darshan", "Return to Uttarkashi"],
      },
      {
        title: "Drive to Guptkashi",
        activities: ["Long scenic drive towards the Kedarnath base"],
      },
      {
        title: "Kedarnath",
        activities: ["Trek or helicopter to Kedarnath", "Temple darshan, return to Guptkashi"],
      },
      {
        title: "Drive to Badrinath",
        activities: ["Drive via Joshimath to Badrinath"],
      },
      {
        title: "Badrinath & Departure",
        activities: ["Morning darshan", "Drive back towards Haridwar/Rishikesh"],
      },
    ],
    inclusions: {
      stay: "Simple hotels/guesthouses en route",
      transport: "Private car for the full circuit",
      sightseeing: "Temple entries as applicable",
      visaIncluded: false,
    },
    coverGradient: ["#3C5A6E", "#E8E2C8"],
  },
  {
    slug: "ladakh-high-altitude-adventure",
    name: "Ladakh High-Altitude Adventure",
    category: "Domestic",
    tags: ["Adventure"],
    country: "India",
    state: "Ladakh",
    region: "North India",
    continent: "India",
    days: 7,
    nights: 6,
    price: 47999,
    summary:
      "Pangong Lake at sunrise, the Nubra Valley's sand dunes, and monasteries perched above the Indus.",
    highlights: [
      "Pangong Tso at sunrise",
      "Nubra Valley double-hump camels",
      "Khardung La, one of the world's highest motorable passes",
      "Thiksey and Hemis monasteries",
    ],
    itinerary: [
      {
        title: "Leh Arrival",
        activities: ["Airport pickup", "Full rest day for acclimatisation"],
      },
      {
        title: "Leh Local Sightseeing",
        activities: ["Shanti Stupa", "Leh Palace and the old town market"],
      },
      {
        title: "Drive to Nubra Valley",
        activities: ["Cross Khardung La", "Evening camel ride at Hunder dunes"],
      },
      {
        title: "Nubra to Pangong",
        activities: ["Drive via Shyok route to Pangong Tso"],
      },
      {
        title: "Pangong Sunrise",
        activities: ["Sunrise by the lake", "Drive back towards Leh"],
      },
      {
        title: "Monastery Circuit",
        activities: ["Thiksey Monastery", "Hemis Monastery and Shey Palace"],
      },
      {
        title: "Departure",
        activities: ["Transfer to the airport"],
      },
    ],
    inclusions: {
      stay: "3-star hotels + 1 night camp at Pangong",
      transport: "Private SUV throughout (high-altitude ready)",
      sightseeing: "Monastery entries included",
      visaIncluded: false,
    },
    coverGradient: ["#2B4C6E", "#D8DEE8"],
  },
  {
    slug: "ooty-hill-station-getaway",
    name: "Ooty Tour Package",
    category: "Domestic",
    tags: ["Family"],
    country: "India",
    state: "Tamil Nadu",
    region: "South India",
    continent: "India",
    days: 3,
    nights: 2,
    price: 6999,
    summary:
      "Ooty Lake, the Botanical Garden, Doddabetta Peak, and a Coonoor detour — the Nilgiris in an easy long weekend.",
    highlights: [
      "Ooty Lake, Botanical Garden & Rose Garden",
      "Doddabetta Peak and a tea factory tour",
      "Coonoor sightseeing — Sim's Park, Dolphin's Nose & Lamb's Rock",
      "Pykara Lake & Falls",
    ],
    itinerary: [
      {
        title: "Arrival & Local Sightseeing",
        activities: [
          "Arrival at Coimbatore Airport/Railway Station, transfer to Ooty",
          "Hotel check-in",
          "Visit Ooty Lake, Botanical Garden & Rose Garden",
          "Evening shopping at Charring Cross",
        ],
      },
      {
        title: "Ooty & Coonoor",
        activities: [
          "Breakfast at hotel",
          "Visit Doddabetta Peak, Tea Factory & Museum",
          "Coonoor sightseeing — Sim's Park, Dolphin's Nose & Lamb's Rock",
          "Return to Ooty for the night",
        ],
      },
      {
        title: "Departure",
        activities: [
          "Breakfast",
          "Visit Pykara Lake & Falls (subject to time)",
          "Drop at Coimbatore Airport/Railway Station",
        ],
      },
    ],
    inclusions: {
      stay: "2 nights hotel in Ooty",
      transport: "Private car throughout",
      sightseeing: "All entries as per itinerary",
      visaIncluded: false,
    },
    coverGradient: ["#2E6B4F", "#BFE3C9"],
  },
  {
    slug: "kodaikanal-princess-of-hills",
    name: "Kodaikanal Tour Package",
    category: "Domestic",
    tags: ["Family"],
    country: "India",
    state: "Tamil Nadu",
    region: "South India",
    continent: "India",
    days: 3,
    nights: 2,
    price: 7499,
    summary:
      "Coaker's Walk, Pillar Rocks, Guna Caves, and Silver Cascade Falls — the Princess of Hill Stations at a relaxed pace.",
    highlights: [
      "Coaker's Walk, Bryant Park & Kodaikanal Lake",
      "Pillar Rocks and the Pine Forest",
      "Guna Caves and Moir Point",
      "Silver Cascade Falls",
    ],
    itinerary: [
      {
        title: "Arrival & Local Sightseeing",
        activities: [
          "Arrival at Madurai Airport/Railway Station, transfer to Kodaikanal",
          "Hotel check-in",
          "Visit Coaker's Walk, Bryant Park & Kodaikanal Lake",
        ],
      },
      {
        title: "Full Day Sightseeing",
        activities: [
          "Breakfast",
          "Visit Pillar Rocks, Pine Forest & Guna Caves",
          "Moir Point and Silver Cascade Falls",
        ],
      },
      {
        title: "Departure",
        activities: ["Breakfast", "Shopping & leisure", "Drop at Madurai Airport/Railway Station"],
      },
    ],
    inclusions: {
      stay: "2 nights hotel in Kodaikanal",
      transport: "Private car throughout",
      sightseeing: "All entries as per itinerary",
      visaIncluded: false,
    },
    coverGradient: ["#3B5F8A", "#CFE0F0"],
  },
  {
    slug: "munnar-tea-gardens-escape",
    name: "Munnar Tour Package",
    category: "Domestic",
    tags: ["Family", "Honeymoon"],
    country: "India",
    state: "Kerala",
    region: "South India",
    continent: "India",
    days: 3,
    nights: 2,
    price: 8499,
    summary:
      "Cheeyappara Falls on the drive in, Eravikulam National Park, Mattupetty Dam, and Kundala Lake — Munnar's tea-garden circuit.",
    highlights: [
      "Cheeyappara & Valara Waterfalls",
      "Eravikulam National Park and the Tea Museum",
      "Mattupetty Dam & Echo Point",
      "Kundala Lake",
    ],
    itinerary: [
      {
        title: "Arrival & Munnar",
        activities: [
          "Arrival at Kochi Airport/Railway Station",
          "Scenic drive to Munnar via Cheeyappara & Valara Waterfalls",
          "Hotel check-in",
        ],
      },
      {
        title: "Full Day Sightseeing",
        activities: [
          "Breakfast",
          "Visit Eravikulam National Park and the Tea Museum",
          "Mattupetty Dam, Echo Point & Kundala Lake",
        ],
      },
      {
        title: "Departure",
        activities: [
          "Breakfast",
          "Visit Blossom Park (subject to time)",
          "Drop at Kochi Airport/Railway Station",
        ],
      },
    ],
    inclusions: {
      stay: "2 nights hotel in Munnar",
      transport: "Private car throughout",
      sightseeing: "All entries as per itinerary",
      visaIncluded: false,
    },
    coverGradient: ["#1F6E43", "#C7E8B0"],
  },
  {
    slug: "sri-lanka-diwali-getaway",
    name: "Sri Lanka Diwali Getaway",
    category: "International",
    tags: ["Family", "Luxury"],
    country: "Sri Lanka",
    region: "South Asia",
    continent: "Asia",
    days: 7,
    nights: 6,
    price: 50000,
    summary:
      "Sigiriya's ancient rock fortress, a scenic hill-country train ride, and the Buddha statue at golden hour — a Diwali special in 4-star comfort.",
    highlights: [
      "Sigiriya Rock Fortress",
      "Scenic hill-country train ride",
      "Buddha statue at golden hour",
      "City tours & top attractions",
    ],
    itinerary: [
      {
        title: "Arrival in Colombo",
        activities: ["Airport pickup", "Transfer to hotel, evening at leisure"],
      },
      {
        title: "Sigiriya",
        activities: ["Sigiriya Rock Fortress climb", "Village and lake views"],
      },
      {
        title: "Hill Country",
        activities: ["Scenic train ride through tea country", "Photo stops along the route"],
      },
      {
        title: "Kandy",
        activities: ["City tour and top attractions", "Buddha statue visit at golden hour"],
      },
      {
        title: "Nuwara Eliya",
        activities: ["Tea estate visit", "Leisure day in the hills"],
      },
      {
        title: "Bentota / Beach",
        activities: ["Transfer to the coast", "Free time by the beach"],
      },
      {
        title: "Departure",
        activities: ["Breakfast", "Airport transfer"],
      },
    ],
    inclusions: {
      stay: "6 nights in 4-star hotels",
      transport: "AC vehicle with airport transfers",
      sightseeing: "City tours, top attractions, English-speaking guide",
      visaIncluded: false,
    },
    coverGradient: ["#5B2A86", "#F2A400"],
    isNew: true,
  },
  {
    slug: "sri-lanka-island-adventure",
    name: "Sri Lanka Island Adventure",
    category: "International",
    tags: ["Family", "Adventure"],
    country: "Sri Lanka",
    region: "South Asia",
    continent: "Asia",
    days: 6,
    nights: 5,
    price: 35000,
    summary:
      "One island, endless memories — Sigiriya, coastal temples, palm-lined beaches, and an elephant encounter, in 4-star hotels.",
    highlights: [
      "Sigiriya Rock Fortress",
      "Coastal stupa and temple visits",
      "Palm-lined beach time",
      "Elephant sanctuary visit",
    ],
    itinerary: [
      {
        title: "Arrival & Colombo",
        activities: ["Airport pickup", "City orientation drive"],
      },
      {
        title: "Sigiriya",
        activities: ["Sigiriya Rock Fortress", "Village tour"],
      },
      {
        title: "Kandy",
        activities: ["Temple visits", "City tour and top attractions"],
      },
      {
        title: "Elephant Sanctuary",
        activities: ["Morning elephant encounter", "Transfer to the coast"],
      },
      {
        title: "Beach Day",
        activities: ["Free day at a palm-lined beach", "Optional water sports"],
      },
      {
        title: "Departure",
        activities: ["Breakfast", "Airport transfer"],
      },
    ],
    inclusions: {
      stay: "5 nights in 4-star hotels",
      transport: "AC vehicle with airport transfers",
      sightseeing: "City tours, top attractions, English-speaking guide",
      visaIncluded: false,
    },
    coverGradient: ["#1B6E8C", "#F2D675"],
    isNew: true,
  },
  {
    slug: "singapore-explorer-tour",
    name: "Explore Singapore",
    category: "International",
    tags: ["Family", "Luxury"],
    country: "Singapore",
    region: "Southeast Asia",
    continent: "Asia",
    days: 5,
    nights: 4,
    price: 68500,
    summary:
      "Gardens by the Bay, Universal Studios, the Marina Bay Sands SkyPark, and the Spectacular Wings of Time show — unforgettable memories await.",
    highlights: [
      "Sentosa Island tour & cable car ride",
      "Universal Studios Singapore",
      "Gardens by the Bay, Cloud Forest & Flower Dome",
      "Marina Bay Sands SkyPark",
    ],
    itinerary: [
      {
        title: "Arrival",
        activities: ["Airport pickup", "Evening at Gardens by the Bay"],
      },
      {
        title: "Sentosa Island",
        activities: ["Cable car ride to Sentosa", "Spectacular Wings of Time show"],
      },
      {
        title: "Universal Studios",
        activities: ["Full day at Universal Studios Singapore"],
      },
      {
        title: "City & Gardens",
        activities: ["City tour of Singapore", "Cloud Forest Dome & Flower Dome"],
      },
      {
        title: "Departure",
        activities: ["Marina Bay Sands SkyPark", "Airport transfer"],
      },
    ],
    inclusions: {
      stay: "4 nights, comfortable stay",
      transport: "All transfers and sightseeing included",
      sightseeing: "All entry tickets included",
      visaIncluded: true,
    },
    coverGradient: ["#0B63D6", "#F2C400"],
    isNew: true,
  },
  {
    slug: "genting-highlands-kuala-lumpur",
    name: "Genting Highlands & Kuala Lumpur",
    category: "International",
    tags: ["Family", "Adventure"],
    country: "Malaysia",
    region: "Southeast Asia",
    continent: "Asia",
    days: 4,
    nights: 3,
    price: 49999,
    summary:
      "Genting SkyWorlds theme park, the Awana SkyWay cable car, Batu Caves, and the Petronas Twin Towers — unforgettable moments in the clouds and the city.",
    highlights: [
      "Genting Highlands tour & SkyWorlds Theme Park",
      "Awana SkyWay cable car",
      "Batu Caves visit",
      "Kuala Lumpur city tour & Petronas Twin Towers",
    ],
    itinerary: [
      {
        title: "Arrival & Kuala Lumpur",
        activities: ["Airport pickup", "Petronas Twin Towers photo stop", "Bukit Bintang shopping area"],
      },
      {
        title: "Genting Highlands",
        activities: ["Awana SkyWay cable car up to Genting", "Genting SkyWorlds Theme Park"],
      },
      {
        title: "Batu Caves & City",
        activities: ["Batu Caves visit", "Kuala Lumpur city tour", "KL Tower photo stop"],
      },
      {
        title: "Departure",
        activities: ["Breakfast", "Airport transfer"],
      },
    ],
    inclusions: {
      stay: "3 nights accommodation",
      transport: "All transfers and sightseeing included",
      sightseeing: "All entry tickets included (flight tickets & visa not included)",
      visaIncluded: false,
    },
    coverGradient: ["#F2A400", "#0B1A26"],
    isNew: true,
  },
  {
    slug: "vietnam-magic-tour",
    name: "Discover the Magic of Vietnam",
    category: "International",
    tags: ["Family", "Adventure"],
    country: "Vietnam",
    region: "Southeast Asia",
    continent: "Asia",
    days: 8,
    nights: 7,
    price: 46599,
    summary:
      "Hanoi's old quarter, an overnight Halong Bay cruise, Ninh Binh's limestone karsts, and Danang's Golden Bridge — breathtaking landscapes end to end.",
    highlights: [
      "Halong Bay overnight cruise",
      "Ninh Binh — Hoa Lu Ancient Capital & Tam Coc",
      "Ba Na Hills & the Golden Bridge",
      "Cu Chi Tunnels & Ho Chi Minh City",
    ],
    itinerary: [
      {
        title: "Arrival in Hanoi",
        activities: ["Airport transfer", "Half-day Hanoi city tour — Temple of Literature & Hoa Lo Prison"],
      },
      {
        title: "Ninh Binh",
        activities: ["Full-day tour of Hoa Lu Ancient Capital", "Tam Coc boat ride"],
      },
      {
        title: "Halong Bay",
        activities: ["Transfer to Halong Bay", "Board overnight cruise with lunch, dinner & activities"],
      },
      {
        title: "Halong Bay Cruise",
        activities: ["Morning activities on the bay", "Transfer back to Hanoi"],
      },
      {
        title: "Danang & Ba Na Hills",
        activities: ["Flight to Danang", "Full-day Ba Na Hills tour — Golden Bridge"],
      },
      {
        title: "Danang & Hoi An",
        activities: ["Marble Mountains, Han River & Dragon Bridge", "Hoi An Ancient Town tour"],
      },
      {
        title: "Ho Chi Minh City",
        activities: ["Flight to Ho Chi Minh City", "Half-day city tour — Notre Dame Cathedral, Central Post Office, War Remnants Museum, Ben Thanh Market"],
      },
      {
        title: "Departure",
        activities: ["Cu Chi Tunnels half-day tour", "Departure from Ho Chi Minh City"],
      },
    ],
    inclusions: {
      stay: "7 nights in 3-star hotels",
      transport: "Domestic flights (Hanoi–Danang–Ho Chi Minh City), sightseeing & transfers",
      sightseeing: "Halong Bay overnight cruise, all entry tickets, English-speaking guide",
      visaIncluded: false,
    },
    coverGradient: ["#B7141F", "#F2C400"],
    isNew: true,
  },
  {
    slug: "dubai-city-of-dreams",
    name: "Explore Dubai — City of Dreams",
    category: "International",
    tags: ["Family", "Honeymoon", "Luxury"],
    country: "United Arab Emirates",
    region: "Middle East",
    continent: "Middle East",
    days: 5,
    nights: 4,
    price: 39999,
    summary:
      "Burj Khalifa At the Top, the Dubai Frame, a desert safari with BBQ dinner, and a dhow cruise — a city of dreams, visa included.",
    highlights: [
      "Burj Khalifa At the Top & Dubai Frame",
      "Desert safari with BBQ dinner",
      "Dhow cruise dinner",
      "Atlantis The Palm (photo stop) & Dubai Mall",
    ],
    itinerary: [
      {
        title: "Arrival",
        activities: ["Airport pickup", "Evening dhow cruise dinner"],
      },
      {
        title: "Dubai City Tour",
        activities: ["Burj Khalifa At the Top", "Dubai Frame"],
      },
      {
        title: "Desert Safari",
        activities: ["Dune bashing", "BBQ dinner under the stars"],
      },
      {
        title: "Leisure & Shopping",
        activities: ["Atlantis The Palm (photo stop)", "Miracle Garden (seasonal)", "Gold Souk & Spice Souk", "Dubai Mall shopping"],
      },
      {
        title: "Departure",
        activities: ["Breakfast", "Airport transfer"],
      },
    ],
    inclusions: {
      stay: "4 nights in 3-4 star hotels",
      transport: "All transfers and sightseeing by AC vehicle",
      sightseeing: "All entry tickets, UAE tourist visa included, English-speaking guide",
      visaIncluded: true,
    },
    coverGradient: ["#1A4C6E", "#F2A400"],
    isNew: true,
  },
];
