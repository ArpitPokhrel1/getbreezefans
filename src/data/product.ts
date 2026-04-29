export type ProductVariant = {
  id: string;
  label: string;
  color: string;
  priceCents: number;
  compareAtCents?: number;
  quantity: number;
  size?: string;
  cjVariantId?: string;
  cjSku?: string;
};

export type ProductImage = {
  src: string;
  alt: string;
  kind: "product" | "detail" | "lifestyle";
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: "fan" | "blanket";
  tagline: string;
  description: string;
  retailProductUrl: string;
  cjProductId: string;
  priceCents: number;
  compareAtCents?: number;
  currency: "usd";
  defaultVariantId: string;
  variants: ProductVariant[];
  images: ProductImage[];
  specs: Array<{ label: string; value: string }>;
  detailedSpecs: Array<{ group: string; items: Array<{ label: string; value: string }> }>;
  benefits: string[];
  useCases: string[];
  disclaimers: string[];
};

export const portableFan: Product = {
  id: "portable-turbo-fan",
  slug: "portable-turbo-fan",
  title: "Portable Turbo Handheld and Neck Fan",
  shortTitle: "BreezePod Turbo Fan",
  category: "fan",
  tagline: "Pocket airflow for commutes, lines, sidelines, and hot travel days.",
  description:
    "A compact rechargeable fan with handheld, desk, and lanyard carry modes for people who want personal airflow without carrying a full-size fan.",
  retailProductUrl:
    "https://cjdropshipping.com/product/portable-handheld-fan-speed-adjustable-turbo-mini-fan-reduced-temperature-mode-rechargeable-digital-display-foldable-personal-fan-with-night-light-suitable-for-women-men-outdoor-p-1960960181515612162.html",
  cjProductId: "1960960181515612162",
  priceCents: 2999,
  compareAtCents: 3499,
  currency: "usd",
  defaultVariantId: "fan-black",
  variants: [
    {
      id: "fan-black",
      label: "Black fan",
      color: "Carbon Black",
      priceCents: 2999,
      compareAtCents: 3499,
      quantity: 1
    },
    {
      id: "fan-white",
      label: "White fan",
      color: "Soft White",
      priceCents: 2999,
      compareAtCents: 3499,
      quantity: 1
    },
    {
      id: "fan-black-white-pair",
      label: "Black + white pair",
      color: "Mixed set",
      priceCents: 5499,
      compareAtCents: 5998,
      quantity: 2
    }
  ],
  images: [
    {
      src: "/images/portable-turbo-fan-main.webp",
      alt: "Portable turbo handheld fan product photo",
      kind: "product"
    },
    {
      src: "/images/portable-turbo-fan-detail.webp",
      alt: "Portable turbo fan side and display detail",
      kind: "detail"
    },
    {
      src: "/images/portable-turbo-fan-kit.webp",
      alt: "Portable fan real product packaging and carry view",
      kind: "lifestyle"
    }
  ],
  specs: [
    { label: "Speed control", value: "Multi-speed personal airflow" },
    { label: "Power", value: "Rechargeable USB / Type-C style charging" },
    { label: "Display", value: "Digital battery and speed readout" },
    { label: "Carry", value: "Handheld, desk, or lanyard use" },
    { label: "Colors", value: "Black and white fan options" }
  ],
  detailedSpecs: [
    {
      group: "Performance",
      items: [
        { label: "Airflow mode", value: "Adjustable personal airflow for close-range use" },
        { label: "Controls", value: "Single-hand power and speed controls" },
        { label: "Best distance", value: "Designed for personal space, not room cooling" }
      ]
    },
    {
      group: "Build",
      items: [
        { label: "Carry options", value: "Handheld grip, desk placement, lanyard-style carry" },
        { label: "Charging", value: "USB rechargeable; cable type must be verified with supplier batch" },
        { label: "Display", value: "Digital battery/speed screen on the handle" }
      ]
    },
    {
      group: "Launch checks",
      items: [
        { label: "Supplier verification", value: "Confirm black and white variant IDs in CJ before live traffic" },
        { label: "Shipping", value: "U.S. delivery window shown during checkout" },
        { label: "Guarantee", value: "10-day money-back guarantee for unused items or verified defects" }
      ]
    }
  ],
  benefits: [
    "Easy to keep in a work bag, concert bag, stroller caddy, or carry-on",
    "Black and white color options make it feel less like a novelty gadget",
    "Digital display reduces the guesswork before leaving the house",
    "Works as a desk fan after the commute instead of becoming a one-use item"
  ],
  useCases: [
    "Outdoor sports games",
    "Concert and festival lines",
    "Theme parks and travel days",
    "Hot warehouse or delivery shifts",
    "Dorm rooms and small apartments",
    "Makeup and skincare routines"
  ],
  disclaimers: [
    "This is a fan, not an air conditioner or medical cooling device.",
    "Runtime depends on speed setting, battery size, charging habits, and ambient temperature.",
    "Supplier details, stock, shipping cost, and variant IDs must be verified in CJ before launch."
  ]
};

export const coolingBlanket: Product = {
  id: "cooling-blanket",
  slug: "cooling-blanket",
  title: "Lightweight Summer Cooling Blanket",
  shortTitle: "BreezePod Cooling Blanket",
  category: "blanket",
  tagline: "A lighter layer for warm bedrooms, couch naps, guest rooms, and travel.",
  description:
    "A breathable summer blanket positioned for customers who want less heat retention than a heavy comforter while still keeping a soft layer nearby.",
  retailProductUrl:
    "https://www.spoken.io/product/aqua-reversible-cooling-blanket-lightweight-summer-comforter-50-x-60-inches-056HPjC76H7tKnZ0M0gmzY",
  cjProductId: "cooling-blanket-supplier-pending",
  priceCents: 4499,
  compareAtCents: 4999,
  currency: "usd",
  defaultVariantId: "blanket-throw-gray",
  variants: [
    {
      id: "blanket-throw-gray",
      label: "Throw blanket",
      color: "Cool Gray",
      size: "50 x 70 in",
      priceCents: 4499,
      compareAtCents: 4999,
      quantity: 1
    },
    {
      id: "blanket-queen-blue",
      label: "Queen blanket",
      color: "Soft Blue",
      size: "90 x 90 in",
      priceCents: 6499,
      compareAtCents: 6999,
      quantity: 1
    }
  ],
  images: [
    {
      src: "/images/cooling-blanket-chair.jpg",
      alt: "Gray lightweight cooling blanket draped on a chair",
      kind: "product"
    },
    {
      src: "/images/cooling-blanket-sofa.jpg",
      alt: "Woman resting on a sofa under a gray cooling blanket",
      kind: "lifestyle"
    },
    {
      src: "/images/cooling-blanket-texture.jpg",
      alt: "Close-up of gray cooling blanket fabric texture",
      kind: "detail"
    }
  ],
  specs: [
    { label: "Fabric feel", value: "Lightweight, smooth summer layer" },
    { label: "Care", value: "Machine washable, supplier care label applies" },
    { label: "Sizes", value: "Throw and queen launch options" },
    { label: "Use", value: "Bed, sofa, guest room, travel, and warm-weather layering" },
    { label: "Guarantee", value: "10-day money-back guarantee" }
  ],
  detailedSpecs: [
    {
      group: "Comfort",
      items: [
        { label: "Layer type", value: "Lightweight summer blanket, not an active cooling machine" },
        { label: "Best use", value: "Warm bedrooms, couch naps, guest rooms, travel, and light cover preference" },
        { label: "Feel", value: "Smooth, breathable hand-feel; exact fabric blend must be verified by supplier" }
      ]
    },
    {
      group: "Sizing",
      items: [
        { label: "Throw", value: "Approx. 50 x 70 in for couch, travel, and solo use" },
        { label: "Queen", value: "Approx. 90 x 90 in for queen beds and shared light layering" },
        { label: "Weight", value: "Launch target: lightweight enough for summer storage and travel" }
      ]
    },
    {
      group: "Buyer expectations",
      items: [
        { label: "Cooling claim", value: "Designed to reduce heat retention compared with heavier layers" },
        { label: "Not a device", value: "Does not chill a room or actively lower body temperature" },
        { label: "Guarantee", value: "10 days to inspect feel, size, and condition" }
      ]
    }
  ],
  benefits: [
    "Gives hot sleepers a lighter option than a bulky comforter",
    "Works in the exact rooms where customers already feel the problem",
    "Easy add-on to the fan for customers building a summer comfort kit",
    "Simple sizing makes it easier to buy than fitted bedding"
  ],
  useCases: ["Warm bedrooms", "Couch naps", "Guest rooms", "Dorm rooms", "Road trips", "Summer bedding refresh"],
  disclaimers: [
    "This is a passive textile layer, not an active cooling device.",
    "Cooling feel depends on room temperature, bedding layers, humidity, and personal preference.",
    "Supplier fabric, size tolerances, care label, and fulfillment route must be verified before launch."
  ]
};

export const products = [portableFan, coolingBlanket] as const;

export function getProduct(productIdOrSlug: string | null | undefined) {
  return products.find((product) => product.id === productIdOrSlug || product.slug === productIdOrSlug) ?? portableFan;
}

export function getProductByVariant(variantId: string | null | undefined) {
  return products.find((product) => product.variants.some((variant) => variant.id === variantId)) ?? portableFan;
}

export function getVariant(productId: string | null | undefined, variantId: string | null | undefined) {
  const product = getProduct(productId);
  return product.variants.find((variant) => variant.id === variantId) ?? product.variants[0];
}
