export type ProductVariant = {
  id: string;
  label: string;
  color: string;
  priceCents: number;
  compareAtCents?: number;
  quantity: number;
  cjVariantId?: string;
  cjSku?: string;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  retailProductUrl: string;
  cjProductId: string;
  priceCents: number;
  compareAtCents: number;
  currency: "usd";
  variants: ProductVariant[];
  specs: Array<{ label: string; value: string }>;
  benefits: string[];
  useCases: string[];
  disclaimers: string[];
};

export const portableFan: Product = {
  id: "portable-turbo-fan",
  slug: "portable-turbo-fan",
  title: "Portable Turbo Handheld and Neck Fan",
  shortTitle: "BreezePod Turbo Fan",
  retailProductUrl:
    "https://cjdropshipping.com/product/portable-handheld-fan-speed-adjustable-turbo-mini-fan-reduced-temperature-mode-rechargeable-digital-display-foldable-personal-fan-with-night-light-suitable-for-women-men-outdoor-p-1960960181515612162.html",
  cjProductId: "1960960181515612162",
  priceCents: 2499,
  compareAtCents: 3499,
  currency: "usd",
  variants: [
    {
      id: "single-black",
      label: "1 fan",
      color: "Carbon Black",
      priceCents: 2499,
      compareAtCents: 3499,
      quantity: 1
    },
    {
      id: "two-pack",
      label: "2-pack",
      color: "Carbon Black",
      priceCents: 3999,
      compareAtCents: 5998,
      quantity: 2
    },
    {
      id: "three-pack",
      label: "3-pack",
      color: "Carbon Black",
      priceCents: 5499,
      compareAtCents: 8997,
      quantity: 3
    }
  ],
  specs: [
    { label: "Modes", value: "5 speed settings" },
    { label: "Power", value: "Rechargeable USB battery" },
    { label: "Display", value: "Digital status display" },
    { label: "Carry", value: "Handheld, desk, or lanyard use" },
    { label: "Light", value: "Night light mode" }
  ],
  benefits: [
    "Compact cooling for hot commutes, errands, and summer travel",
    "Lanyard-ready body keeps your hands free when walking or waiting in lines",
    "Desk stand shape works for dorms, offices, hotel rooms, and bedside use",
    "Digital display makes battery and mode checks easy"
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
    "Runtime depends on speed setting, battery size, and ambient temperature.",
    "Supplier details, stock, shipping cost, and variant IDs must be verified in CJ before launch."
  ]
};

export function getVariant(variantId: string | null | undefined) {
  return portableFan.variants.find((variant) => variant.id === variantId) ?? portableFan.variants[0];
}
