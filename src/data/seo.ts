export type KeywordCluster = {
  id: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intent: "commercial" | "informational" | "comparison" | "seasonal";
  audience: string;
  angle: string;
  targetUrl: string;
};

export type PageBrief = {
  slug: string;
  url: string;
  type: "product" | "blog" | "guide";
  title: string;
  metaDescription: string;
  h1: string;
  primaryKeyword: string;
  searchIntent: string;
  outline: string[];
  internalLinks: string[];
  complianceNotes: string[];
};

export type SeoFaq = {
  question: string;
  answer: string;
  pageTargets: string[];
};

export type InternalLinkTarget = {
  label: string;
  href: string;
  anchors: string[];
};

export const keywordClusters: KeywordCluster[] = [
  {
    id: "portable-neck-fan",
    primaryKeyword: "portable neck fan",
    secondaryKeywords: ["neck fan", "hands free fan", "wearable fan", "rechargeable neck fan"],
    intent: "commercial",
    audience: "Shoppers who want airflow while walking, waiting, commuting, or working with both hands free.",
    angle: "Compare neck/lanyard use, battery display, portability, and noise without claiming medical cooling.",
    targetUrl: "/guides/portable-neck-fan-buying-guide"
  },
  {
    id: "handheld-fan",
    primaryKeyword: "handheld fan",
    secondaryKeywords: ["portable handheld fan", "rechargeable handheld fan", "usb fan", "personal fan"],
    intent: "comparison",
    audience: "Shoppers deciding between a classic handheld fan, a lanyard fan, and a small desk fan.",
    angle: "Explain grip comfort, desk stand use, lanyard use, charging, runtime, and bag fit.",
    targetUrl: "/blog/handheld-vs-neck-fan"
  },
  {
    id: "mini-portable-fan",
    primaryKeyword: "mini portable fan",
    secondaryKeywords: ["small portable fan", "pocket fan", "travel fan", "desk fan for travel"],
    intent: "commercial",
    audience: "Travelers, students, office workers, and commuters who need a small fan that fits in a bag.",
    angle: "Lead with size, rechargeability, folding/stand use, battery display, and everyday carry.",
    targetUrl: "/product/portable-turbo-fan"
  },
  {
    id: "turbo-handheld-fan",
    primaryKeyword: "turbo handheld fan",
    secondaryKeywords: ["high speed handheld fan", "5 speed portable fan", "digital display fan", "foldable personal fan"],
    intent: "commercial",
    audience: "Buyers comparing stronger portable fans against basic low-cost mini fans.",
    angle: "Focus on speed options, digital display, foldable format, and realistic airflow expectations.",
    targetUrl: "/product/portable-turbo-fan"
  },
  {
    id: "festival-fan",
    primaryKeyword: "festival fan",
    secondaryKeywords: ["concert fan", "portable fan for festivals", "summer concert essentials", "theme park fan"],
    intent: "seasonal",
    audience: "Festival, concert, theme park, and outdoor event visitors planning hot-weather bags.",
    angle: "Packing checklist content with bag rules, charging, lanyard use, shade, water, and backup plans.",
    targetUrl: "/guides/festival-commute-cooling"
  },
  {
    id: "commute-cooling",
    primaryKeyword: "commute cooling",
    secondaryKeywords: ["portable fan for commute", "subway fan", "walking commute fan", "summer commute essentials"],
    intent: "informational",
    audience: "U.S. commuters dealing with hot platforms, sidewalks, buses, and parking lots.",
    angle: "Everyday carry guide for airflow, battery checks, desk use after arrival, and no-spill bag packing.",
    targetUrl: "/guides/festival-commute-cooling"
  },
  {
    id: "sports-parent-cooling",
    primaryKeyword: "sports parent cooling",
    secondaryKeywords: ["sideline fan", "soccer game fan", "baseball parent essentials", "outdoor sports fan"],
    intent: "seasonal",
    audience: "Parents and families sitting through youth sports games, tournaments, and practices.",
    angle: "Sideline comfort checklist with shade, hydration, sunscreen, extra battery, and 2-pack bundles.",
    targetUrl: "/blog/portable-fan-summer-use-cases"
  },
  {
    id: "warehouse-shift-cooling",
    primaryKeyword: "warehouse shift cooling",
    secondaryKeywords: ["portable fan for warehouse", "hot work shift fan", "delivery driver fan", "work bag fan"],
    intent: "informational",
    audience: "Warehouse, delivery, vendor, and light industrial workers seeking personal comfort during breaks.",
    angle: "Personal comfort tips with strong safety disclaimer: follow employer heat procedures; fan is not PPE.",
    targetUrl: "/blog/portable-fan-summer-use-cases"
  },
  {
    id: "cooling-blanket",
    primaryKeyword: "cooling blanket",
    secondaryKeywords: ["summer cooling blanket", "lightweight blanket", "blanket for hot sleepers", "cooling throw blanket"],
    intent: "commercial",
    audience: "U.S. shoppers looking for a lighter bedding layer for warm bedrooms, sofas, dorms, and guest rooms.",
    angle: "Position as a passive lightweight summer layer, not a device that chills rooms or treats sleep issues.",
    targetUrl: "/product/cooling-blanket"
  }
];

export const internalLinkTargets: InternalLinkTarget[] = [
  {
    label: "Portable Turbo Fan product page",
    href: "/product/portable-turbo-fan",
    anchors: ["portable turbo fan", "rechargeable handheld and neck fan", "BreezePod Turbo Fan"]
  },
  {
    label: "Cooling Blanket product page",
    href: "/product/cooling-blanket",
    anchors: ["cooling blanket", "lightweight summer blanket", "BreezePod Cooling Blanket"]
  },
  {
    label: "Portable neck fan buying guide",
    href: "/guides/portable-neck-fan-buying-guide",
    anchors: ["portable neck fan buying guide", "how to choose a neck fan", "hands-free fan guide"]
  },
  {
    label: "Handheld vs neck fan comparison",
    href: "/blog/handheld-vs-neck-fan",
    anchors: ["handheld vs neck fan", "compare handheld and neck fans", "best fan style for your routine"]
  },
  {
    label: "Festival and commute cooling guide",
    href: "/guides/festival-commute-cooling",
    anchors: ["festival and commute cooling guide", "portable fan for festivals and commutes", "summer carry guide"]
  },
  {
    label: "Summer portable fan use cases",
    href: "/blog/portable-fan-summer-use-cases",
    anchors: ["portable fan use cases", "sports parent and work shift fan tips", "summer personal fan ideas"]
  }
];

export const pageBriefs: PageBrief[] = [
  {
    slug: "portable-turbo-fan",
    url: "/product/portable-turbo-fan",
    type: "product",
    title: "Portable Turbo Handheld and Neck Fan",
    metaDescription:
      "Shop a compact rechargeable turbo fan for commutes, sports sidelines, festivals, travel, desk use, and hot work breaks.",
    h1: "Portable Turbo Handheld and Neck Fan",
    primaryKeyword: "turbo handheld fan",
    searchIntent: "Ready-to-buy shoppers comparing compact portable fans for summer routines.",
    outline: [
      "Hero with product, price, bundle options, and realistic comfort positioning",
      "Use cases: commute, sports sidelines, festivals, travel, desk, warehouse breaks",
      "Specs: speed settings, rechargeable battery, digital display, lanyard/desk modes",
      "Bundle module for single, 2-pack, and 3-pack",
      "FAQ and compliance disclaimers"
    ],
    internalLinks: [
      "/guides/portable-neck-fan-buying-guide",
      "/blog/handheld-vs-neck-fan",
      "/guides/festival-commute-cooling"
    ],
    complianceNotes: [
      "Do not call it an air conditioner.",
      "Do not guarantee temperature reduction.",
      "Do not imply workplace heat illness protection or medical use.",
      "Verify battery capacity, runtime, charging type, stock, and delivery estimates before publishing final specs."
    ]
  },
  {
    slug: "cooling-blanket",
    url: "/product/cooling-blanket",
    type: "product",
    title: "Lightweight Summer Cooling Blanket",
    metaDescription:
      "Shop a lightweight summer cooling blanket for warm bedrooms, sofas, guest rooms, dorms, and travel with a 10-day guarantee.",
    h1: "Lightweight Summer Cooling Blanket",
    primaryKeyword: "cooling blanket",
    searchIntent: "Ready-to-buy shoppers comparing lighter bedding for warm rooms and summer sleep setups.",
    outline: [
      "Hero with product photo, throw and queen options, and realistic passive-cooling positioning",
      "Use cases: warm bedrooms, couch naps, guest rooms, dorm rooms, road trips",
      "Specs: sizing, fabric feel, care expectations, and supplier verification notes",
      "Checkout module with Stripe and Shopify link option",
      "FAQ and compliance disclaimers"
    ],
    internalLinks: ["/product/portable-turbo-fan", "/guides/festival-commute-cooling"],
    complianceNotes: [
      "Do not imply active refrigeration or guaranteed body-temperature reduction.",
      "Avoid medical sleep claims.",
      "Verify fabric blend, size tolerance, care instructions, stock, and fulfillment route before launch."
    ]
  },
  {
    slug: "portable-neck-fan-buying-guide",
    url: "/guides/portable-neck-fan-buying-guide",
    type: "guide",
    title: "Portable Neck Fan Buying Guide",
    metaDescription:
      "Compare portable neck fans, handheld fans, and lanyard-ready mini fans for summer commutes, events, travel, and work bags.",
    h1: "Portable Neck Fan Buying Guide",
    primaryKeyword: "portable neck fan",
    searchIntent: "Research-stage shoppers deciding which personal fan format fits their routine.",
    outline: [
      "Who a portable neck fan is for",
      "Neck fan vs handheld fan vs desk fan",
      "Battery, charging, display, speed, weight, and noise checks",
      "Where a lanyard-ready turbo fan fits",
      "FAQs and link to product page"
    ],
    internalLinks: ["/product/portable-turbo-fan", "/blog/handheld-vs-neck-fan", "/guides/festival-commute-cooling"],
    complianceNotes: [
      "Frame recommendations as comfort and airflow guidance.",
      "Avoid ranking claims unless backed by first-party testing.",
      "Mention heat safety basics for outdoor use."
    ]
  },
  {
    slug: "handheld-vs-neck-fan",
    url: "/blog/handheld-vs-neck-fan",
    type: "blog",
    title: "Handheld vs Neck Fan: Which Is Better for Summer?",
    metaDescription:
      "Compare handheld fans and neck fans for commuting, festivals, sports sidelines, desk use, travel bags, and hot work breaks.",
    h1: "Handheld vs Neck Fan",
    primaryKeyword: "handheld vs neck fan",
    searchIntent: "Comparison shoppers who know they want a portable fan but are choosing a format.",
    outline: [
      "Quick answer by use case",
      "When handheld works best",
      "When neck or lanyard use works best",
      "Why hybrid handheld/neck/desk formats reduce tradeoffs",
      "Internal links to guide and product"
    ],
    internalLinks: ["/product/portable-turbo-fan", "/guides/portable-neck-fan-buying-guide"],
    complianceNotes: ["Avoid fake testing data.", "Keep language subjective and scenario-based."]
  },
  {
    slug: "festival-commute-cooling",
    url: "/guides/festival-commute-cooling",
    type: "guide",
    title: "Festival and Commute Cooling Guide",
    metaDescription:
      "Pack smarter for hot concerts, festivals, theme parks, buses, trains, and walking commutes with a compact personal fan checklist.",
    h1: "Festival and Commute Cooling Guide",
    primaryKeyword: "festival fan",
    searchIntent: "Seasonal planning searches for outdoor events and hot daily transit.",
    outline: [
      "What to pack before leaving",
      "How to use a portable fan in lines, platforms, and crowds",
      "Charging and bag-size reminders",
      "Safety basics: water, shade, breaks, sunscreen",
      "Product link and related comparison"
    ],
    internalLinks: ["/product/portable-turbo-fan", "/blog/handheld-vs-neck-fan", "/blog/portable-fan-summer-use-cases"],
    complianceNotes: [
      "Do not suggest a fan replaces hydration, shade, medical advice, or venue safety guidance.",
      "Avoid implying acceptance under every event bag policy."
    ]
  },
  {
    slug: "portable-fan-summer-use-cases",
    url: "/blog/portable-fan-summer-use-cases",
    type: "blog",
    title: "Portable Fan Use Cases for Summer",
    metaDescription:
      "Ideas for using a compact rechargeable fan during sports games, work breaks, travel days, dorm life, errands, and outdoor events.",
    h1: "Portable Fan Use Cases for Summer",
    primaryKeyword: "mini portable fan",
    searchIntent: "Top-of-funnel shoppers looking for practical reasons to carry a personal fan.",
    outline: [
      "Sports parent sidelines",
      "Warehouse and delivery breaks with safety disclaimer",
      "Commuting and errands",
      "Travel, dorm, and desk use",
      "Product and guide links"
    ],
    internalLinks: ["/product/portable-turbo-fan", "/guides/festival-commute-cooling"],
    complianceNotes: [
      "No guaranteed cooling performance.",
      "For work-shift content, state that employer heat policies and hydration/rest breaks matter first."
    ]
  }
];

export const faqs: SeoFaq[] = [
  {
    question: "Is a portable neck fan the same as an air conditioner?",
    answer:
      "No. A portable neck fan creates personal airflow. It should not be described as an air conditioner or as a medical cooling device.",
    pageTargets: ["/product/portable-turbo-fan", "/guides/portable-neck-fan-buying-guide"]
  },
  {
    question: "What should I check before buying a rechargeable handheld fan?",
    answer:
      "Check the speed settings, charging type, battery display, weight, noise expectations, whether it can stand on a desk, and whether it includes a lanyard or carry option.",
    pageTargets: ["/guides/portable-neck-fan-buying-guide", "/blog/handheld-vs-neck-fan"]
  },
  {
    question: "Can I bring a portable fan to a festival or stadium?",
    answer:
      "Rules vary by venue. Check the event's bag and battery policy before packing any rechargeable fan.",
    pageTargets: ["/guides/festival-commute-cooling"]
  },
  {
    question: "Is a personal fan enough for hot work shifts?",
    answer:
      "A personal fan may help with comfort during breaks, but it does not replace employer heat procedures, water, shade or cool areas, rest breaks, or medical guidance.",
    pageTargets: ["/blog/portable-fan-summer-use-cases"]
  },
  {
    question: "Who is a 2-pack portable fan bundle best for?",
    answer:
      "A 2-pack can make sense for couples, parents and kids at sports games, travel partners, or keeping one fan in a work bag and one at home.",
    pageTargets: ["/product/portable-turbo-fan", "/blog/portable-fan-summer-use-cases"]
  }
];

export const contentCalendar = [
  {
    week: "Week 1",
    focus: "Launch purchase and research intent pages",
    pages: ["/product/portable-turbo-fan", "/guides/portable-neck-fan-buying-guide", "/blog/handheld-vs-neck-fan"]
  },
  {
    week: "Week 2",
    focus: "Seasonal use-case content",
    pages: ["/guides/festival-commute-cooling", "/blog/portable-fan-summer-use-cases"]
  },
  {
    week: "Week 3",
    focus: "Long-tail audience expansions",
    pages: ["/guides/sports-parent-sideline-cooling", "/guides/warehouse-shift-comfort-checklist"]
  },
  {
    week: "Week 4",
    focus: "Travel and event expansions",
    pages: ["/guides/theme-park-line-fan-guide", "/guides/summer-travel-portable-fan"]
  }
];
