export type StaticContentPage = {
  slug: string;
  href: string;
  title: string;
  description: string;
  sections: Array<{
    heading: string;
    body: string;
    bullets?: string[];
  }>;
};

export const staticContentPages: StaticContentPage[] = [
  {
    slug: "portable-neck-fan-buying-guide",
    href: "/guides/portable-neck-fan-buying-guide",
    title: "Portable Neck Fan Buying Guide",
    description:
      "A practical guide to choosing a portable neck fan, handheld fan, or hybrid lanyard fan for hot commutes, outdoor events, travel, and desk use.",
    sections: [
      {
        heading: "Start with how you carry it",
        body:
          "The best portable fan is the one you will actually bring with you. Neck and lanyard-ready fans are useful when your hands are busy, while handheld fans are simple when you want to aim airflow directly."
      },
      {
        heading: "Check the everyday details",
        body:
          "Before comparing prices, check the details that affect daily use.",
        bullets: ["Rechargeable battery", "Clear battery or mode display", "Multiple speed settings", "Desk stand or foldable body", "Weight and bag fit", "Charging cable type"]
      },
      {
        heading: "Keep expectations realistic",
        body:
          "A compact fan creates personal airflow. It is not an air conditioner, heat illness prevention device, or medical product. For outdoor heat, pair it with water, shade, sunscreen, and breaks."
      }
    ]
  },
  {
    slug: "festival-commute-cooling",
    href: "/guides/festival-commute-cooling",
    title: "Festival and Commute Cooling Guide",
    description:
      "A simple packing guide for hot festivals, concerts, theme parks, subway platforms, buses, and walking commutes.",
    sections: [
      {
        heading: "Pack for the waiting parts",
        body:
          "The hottest moments are often the lines, platforms, parking lots, and walks between stops. A small rechargeable fan can help with personal airflow while you wait."
      },
      {
        heading: "Before you leave",
        body:
          "Check the fan charge, venue battery rules, bag size rules, and whether you need a lanyard or wrist strap.",
        bullets: ["Charge the fan fully", "Bring a compact cable", "Check event bag policies", "Carry water where allowed", "Plan shade and rest breaks"]
      },
      {
        heading: "For commuters",
        body:
          "Use the fan before boarding, while waiting outdoors, or at your desk after arrival. Keep it easy to reach so it does not become dead weight in the bottom of a bag."
      }
    ]
  },
  {
    slug: "handheld-vs-neck-fan",
    href: "/blog/handheld-vs-neck-fan",
    title: "Handheld vs Neck Fan: Which Is Better for Summer?",
    description:
      "A no-hype comparison of handheld fans, neck fans, and hybrid portable fans for everyday summer use.",
    sections: [
      {
        heading: "Choose handheld for control",
        body:
          "A handheld fan is easy to aim at your face, neck, or desk area. It is a strong fit for quick errands, makeup routines, and travel bags."
      },
      {
        heading: "Choose neck or lanyard use for free hands",
        body:
          "A neck or lanyard-ready fan helps when you are holding a bag, walking, pushing a stroller, working a booth, or waiting in a long outdoor line."
      },
      {
        heading: "A hybrid fan reduces tradeoffs",
        body:
          "A compact fan that works handheld, around the neck with a lanyard, and on a desk can cover more routines than a single-purpose fan."
      }
    ]
  },
  {
    slug: "portable-fan-summer-use-cases",
    href: "/blog/portable-fan-summer-use-cases",
    title: "Portable Fan Use Cases for Summer",
    description:
      "Practical ideas for using a compact rechargeable fan at sports games, work breaks, festivals, commutes, dorms, and travel days.",
    sections: [
      {
        heading: "Sports sidelines",
        body:
          "Parents and families often sit through long outdoor games with limited shade. A 2-pack can make sense when two people need personal airflow at the same time."
      },
      {
        heading: "Work breaks",
        body:
          "Warehouse, delivery, and outdoor market workers can use a personal fan for comfort during breaks. It does not replace employer heat procedures, hydration, rest breaks, or cool-down areas."
      },
      {
        heading: "Travel, dorms, and desks",
        body:
          "A foldable fan with a stand can move from a carry-on to a hotel nightstand, dorm desk, office setup, or bedside table."
      }
    ]
  }
];

export function findContentPage(slug: string) {
  return staticContentPages.find((page) => page.slug === slug);
}

