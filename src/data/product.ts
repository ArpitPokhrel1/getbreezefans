export type ProductVariant = {
  id: string;
  label: string;
  priceCents: number;
  compareAtCents?: number;
  sku?: string;
  selectedOptions?: Array<{ name: string; value: string }>;
};

export type ProductImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type Product = {
  id: string;
  shopifyId?: string;
  slug: string;
  handle: string;
  title: string;
  shortTitle: string;
  category: string;
  status: "ACTIVE" | "DRAFT";
  vendor: string;
  tagline: string;
  description: string;
  priceCents: number;
  compareAtCents?: number;
  currency: "usd";
  defaultVariantId: string;
  variants: ProductVariant[];
  images: ProductImage[];
  tags: string[];
  bestFor: string[];
  features: string[];
  specs: Array<{ label: string; value: string }>;
  provenance: "shopify-cli" | "stitch-mcp";
};

function cents(value: string) {
  return Math.round(Number(value) * 100);
}

const shopifyPublicationId = "gid://shopify/Publication/174138261735";

export const products: Product[] = [
  {
    id: "rotating-moon-desk-lamp",
    shopifyId: "gid://shopify/Product/9527137992935",
    slug: "rotating-moon-desk-lamp",
    handle: "rotating-moon-desk-lamp-with-wireless-charging",
    title: "Rotating Moon Desk Lamp with Wireless Charging",
    shortTitle: "Rotating Moon Desk Lamp",
    category: "Lighting",
    status: "ACTIVE",
    vendor: "PetChews",
    tagline: "A sculptural lunar lamp with warm ambient light and wireless charging variants.",
    description:
      "A tactile desk lamp built around a floating moon form, soft interior glow, and a compact base for bedside tables, studies, and display shelves.",
    priceCents: cents("88.32"),
    compareAtCents: cents("93.12"),
    currency: "usd",
    defaultVariantId: "moon-gray-basic",
    variants: [
      { id: "moon-gray-basic", label: "Gray / Basic Style", priceCents: cents("88.32"), compareAtCents: cents("88.32"), sku: "FIAEJ08" },
      { id: "moon-gray-wireless", label: "Gray / Wireless Charger Style", priceCents: cents("93.12"), compareAtCents: cents("93.12"), sku: "AZOQP6OWT" },
      { id: "moon-white-basic", label: "White / Basic Style", priceCents: cents("88.32"), compareAtCents: cents("88.32"), sku: "LNV2ISF01" },
      { id: "moon-white-wireless", label: "White / Wireless Charger Style", priceCents: cents("93.12"), compareAtCents: cents("93.12"), sku: "KOZGTKPEP" }
    ],
    images: [
      {
        src: "https://cdn.shopify.com/s/files/1/0790/0679/3959/files/99b6494540449cbff4a2ef43003c.png?v=1777569242",
        alt: "Luxury rotating moon desk lamp glowing above a dark base",
        width: 547,
        height: 564
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0790/0679/3959/files/77d4d2804805985ae6049ee95abc.png?v=1777569252",
        alt: "Rotating moon desk lamp base and moon detail",
        width: 532,
        height: 484
      }
    ],
    tags: ["desk lamp", "wireless charging", "ambient lighting", "gift lighting"],
    bestFor: ["Bedside lighting", "Study desks", "Gift shoppers", "Ambient display shelves"],
    features: ["Warm moon-style glow", "Wireless charging variant", "Gray and white finishes", "Compact sculptural base"],
    specs: [
      { label: "Shopify product", value: "Active" },
      { label: "Publication", value: shopifyPublicationId },
      { label: "Variants", value: "Gray or white, basic or wireless charging" },
      { label: "Source", value: "Shopify CLI plus Stitch product screen" }
    ],
    provenance: "shopify-cli"
  },
  {
    id: "retro-mini-hd-camera",
    shopifyId: "gid://shopify/Product/9527134716135",
    slug: "retro-mini-hd-camera",
    handle: "retro-mini-1080p-hd-camera-with-screen",
    title: "Retro Mini 1080p HD Camera with Screen",
    shortTitle: "Retro Mini HD Camera",
    category: "Electronics",
    status: "ACTIVE",
    vendor: "PetChews",
    tagline: "A pocket-size retro camera for short video, travel clips, and simple gifting.",
    description:
      "A compact 1080p HD camera with a built-in display, loop recording, microSD support, and a small retro profile for casual everyday capture.",
    priceCents: cents("72.87"),
    compareAtCents: cents("108.80"),
    currency: "usd",
    defaultVariantId: "camera-no-card",
    variants: [
      { id: "camera-no-card", label: "Black / No memory card", priceCents: cents("72.87"), compareAtCents: cents("72.87"), sku: "OKH5NZ8" },
      { id: "camera-16g", label: "Black / With 16G memory card", priceCents: cents("84.82"), compareAtCents: cents("84.82"), sku: "BQIH8U0SA" },
      { id: "camera-32g", label: "Black / With 32G memory card", priceCents: cents("90.82"), compareAtCents: cents("90.82"), sku: "KQ5M70BXV" },
      { id: "camera-64g", label: "Black / With 64G memory card", priceCents: cents("96.81"), compareAtCents: cents("96.81"), sku: "UZ3ESCYI9" },
      { id: "camera-128g", label: "Black / With 128G memory card", priceCents: cents("108.80"), compareAtCents: cents("108.80"), sku: "C3M4JR0VG" }
    ],
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0790/0679/3959/files/e7e99ad44ecb8271f5660fb4522f.png?v=1777569229", alt: "Retro mini black HD camera with display", width: 542, height: 647 },
      { src: "https://cdn.shopify.com/s/files/1/0790/0679/3959/files/494668044bb7acdfc7184da77a0b.png?v=1777569238", alt: "Retro mini camera alternate product angle", width: 542, height: 647 }
    ],
    tags: ["1080p camera", "retro camera", "portable camera", "travel camera"],
    bestFor: ["Travel clips", "School and hiking", "Gift shoppers", "Simple one-button recording"],
    features: ["1080p HD photo and video", "Built-in display", "MicroSD support from 8GB to 512GB", "Loop recording"],
    specs: [
      { label: "Battery", value: "200mAh, about 2 to 3 hours depending on settings" },
      { label: "Microphone", value: "Mono" },
      { label: "Stabilization", value: "Electronic anti-shake" },
      { label: "Package", value: "400 x 200 x 100 mm" }
    ],
    provenance: "shopify-cli"
  },
  {
    id: "arcticshield-winter-jacket",
    shopifyId: "gid://shopify/Product/9527136092391",
    slug: "arcticshield-winter-jacket",
    handle: "arcticshield-mens-winter-cotton-dress-jacket",
    title: "ArcticShield Men's Winter Cotton Dress Jacket",
    shortTitle: "ArcticShield Dress Jacket",
    category: "Outerwear",
    status: "ACTIVE",
    vendor: "PetChews",
    tagline: "A structured cold-weather jacket for polished winter layering.",
    description:
      "A cotton dress jacket positioned for shoppers who want a cleaner winter silhouette than casual puffers while keeping everyday warmth in mind.",
    priceCents: cents("168.34"),
    compareAtCents: cents("170.53"),
    currency: "usd",
    defaultVariantId: "jacket-black-m",
    variants: [
      { id: "jacket-black-m", label: "Black / M", priceCents: cents("168.34"), compareAtCents: cents("168.34"), sku: "80N8O44" },
      { id: "jacket-black-l", label: "Black / L", priceCents: cents("169.47"), compareAtCents: cents("169.47"), sku: "5QWRA649G" },
      { id: "jacket-black-xl", label: "Black / XL", priceCents: cents("170.53"), compareAtCents: cents("170.53"), sku: "NTKBDVH31" },
      { id: "jacket-khaki-m", label: "Khaki / M", priceCents: cents("168.34"), compareAtCents: cents("168.34"), sku: "NY38RXKZN" },
      { id: "jacket-white-m", label: "White / M", priceCents: cents("168.34"), compareAtCents: cents("168.34"), sku: "DPJ7G347W" }
    ],
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0790/0679/3959/files/1e371bf24f43b8c240c59a7885cb.png?v=1777569254", alt: "Men's winter cotton dress jacket product view", width: 464, height: 461 },
      { src: "https://cdn.shopify.com/s/files/1/0790/0679/3959/files/5c395fe14f10b47ec8df4da8ed6b.png?v=1777569264", alt: "ArcticShield jacket alternate color view", width: 575, height: 532 }
    ],
    tags: ["winter jacket", "cotton jacket", "mens outerwear", "dress jacket"],
    bestFor: ["Commutes", "Winter errands", "Smart casual outfits", "Gift wardrobes"],
    features: ["Structured profile", "Multiple colors", "M to XL variants", "Cold-weather layering"],
    specs: [
      { label: "Colors", value: "Black, khaki, white, and new seasonal variants" },
      { label: "Sizes", value: "M, L, XL from fetched Shopify variants" },
      { label: "Status", value: "Active in Shopify" }
    ],
    provenance: "shopify-cli"
  },
  {
    id: "rolife-corner-bookstore-kit",
    shopifyId: "gid://shopify/Product/9527138386151",
    slug: "rolife-corner-bookstore-kit",
    handle: "robotime-rolife-corner-bookstore-diy-miniature-kit",
    title: "Robotime Rolife Corner Bookstore DIY Miniature Kit",
    shortTitle: "Corner Bookstore Kit",
    category: "DIY Objects",
    status: "ACTIVE",
    vendor: "PetChews",
    tagline: "A detailed miniature bookstore kit for slow craft sessions and display shelves.",
    description:
      "A hands-on DIY miniature kit for people who like patient assembly, detailed interiors, and display-worthy craft objects.",
    priceCents: cents("167.01"),
    compareAtCents: cents("167.01"),
    currency: "usd",
    defaultVariantId: "bookstore-dg164",
    variants: [{ id: "bookstore-dg164", label: "DG164", priceCents: cents("167.01"), compareAtCents: cents("167.01"), sku: "DEGLNHE" }],
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0790/0679/3959/files/82c6d7104b92b5c245dd9d22ef3e.webp?v=1777569252", alt: "Robotime Rolife corner bookstore miniature kit", width: 800, height: 800 },
      { src: "https://cdn.shopify.com/s/files/1/0790/0679/3959/files/6afcff7744459f24a50d731349ce.webp?v=1777569253", alt: "Corner bookstore miniature kit assembled display", width: 800, height: 800 }
    ],
    tags: ["miniature kit", "DIY kit", "bookstore model", "craft gift"],
    bestFor: ["Slow craft evenings", "Display shelves", "Gift projects", "Book lovers"],
    features: ["Detailed bookstore scene", "Single DG164 variant", "Display-friendly build", "Giftable hobby object"],
    specs: [
      { label: "Variant", value: "DG164" },
      { label: "Status", value: "Active in Shopify" },
      { label: "Category", value: "DIY miniature kit" }
    ],
    provenance: "shopify-cli"
  },
  {
    id: "soft-shaggy-area-rug",
    shopifyId: "gid://shopify/Product/9527141400807",
    slug: "soft-shaggy-area-rug",
    handle: "soft-shaggy-area-rug",
    title: "Soft Shaggy Area Rug",
    shortTitle: "Soft Shaggy Area Rug",
    category: "Home Decor",
    status: "ACTIVE",
    vendor: "PetChews",
    tagline: "Plush texture for bedrooms, dorms, nurseries, and small lounge spaces.",
    description:
      "A soft shaggy area rug intended to warm up hard flooring and add visual texture beside a bed, sofa, reading chair, or dorm setup.",
    priceCents: cents("43.31"),
    compareAtCents: cents("62.71"),
    currency: "usd",
    defaultVariantId: "rug-bag-40x60",
    variants: [
      { id: "rug-bag-40x60", label: "A Bag Of US Dollars / 40x60cm", priceCents: cents("43.31"), compareAtCents: cents("43.31"), sku: "35UCILZ" },
      { id: "rug-bag-50x80", label: "A Bag Of US Dollars / 50x80cm", priceCents: cents("62.71"), compareAtCents: cents("62.71"), sku: "EWO1DCR5F" },
      { id: "rug-stack-40x60", label: "A Stack Of US Dollars / 40x60cm", priceCents: cents("43.31"), compareAtCents: cents("43.31"), sku: "QFVANZAVF" },
      { id: "rug-stack-50x80", label: "A Stack Of US Dollars / 50x80cm", priceCents: cents("62.71"), compareAtCents: cents("62.71"), sku: "AGPYRU9BO" }
    ],
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0790/0679/3959/files/364779f9448bb1cde7937d9e9208.png?v=1777569277", alt: "Soft shaggy area rug product image", width: 800, height: 800 },
      { src: "https://cdn.shopify.com/s/files/1/0790/0679/3959/files/46680528451dab7d38bbbd0ae402.png?v=1777569287", alt: "Soft shaggy rug alternate design", width: 800, height: 800 }
    ],
    tags: ["bedroom rug", "cozy room decor", "dorm rug", "fluffy rug"],
    bestFor: ["Bedrooms", "Dorm rooms", "Nurseries", "Living room accents"],
    features: ["Shaggy texture", "Two size families", "Soft underfoot feel", "Casual accent styling"],
    specs: [
      { label: "Sizes", value: "40x60cm and 50x80cm" },
      { label: "Use", value: "Floor, bedroom, lounge, nursery, or dorm accent" },
      { label: "Status", value: "Active in Shopify" }
    ],
    provenance: "shopify-cli"
  },
  {
    id: "nany-quilted-shoulder-bag",
    shopifyId: "gid://shopify/Product/9527150837991",
    slug: "nany-quilted-shoulder-bag",
    handle: "nany-quilted-shoulder-bag",
    title: "Nany Quilted Shoulder Bag",
    shortTitle: "Nany Quilted Shoulder Bag",
    category: "Bags",
    status: "DRAFT",
    vendor: "PetChews",
    tagline: "A compact quilted handbag with a chain strap and crossbody-ready profile.",
    description:
      "A structured vegan leather shoulder bag for essentials, evenings out, and everyday outfits where a large tote would be too much.",
    priceCents: cents("126.95"),
    compareAtCents: cents("126.95"),
    currency: "usd",
    defaultVariantId: "bag-caramel",
    variants: [
      { id: "bag-caramel", label: "Caramel", priceCents: cents("126.95"), compareAtCents: cents("126.95"), sku: "H0106.4" },
      { id: "bag-black", label: "Black", priceCents: cents("126.95"), compareAtCents: cents("126.95"), sku: "H0106" }
    ],
    images: [
      { src: "https://cdn.shopify.com/s/files/1/0790/0679/3959/files/2b42916c4554b0fc5b91a4568ab3.jpg?v=1777569368", alt: "Nany quilted shoulder bag", width: 640, height: 640 },
      { src: "https://cdn.shopify.com/s/files/1/0790/0679/3959/files/1111f3ff4d11aac6174653a50dbc.jpg?v=1777569377", alt: "Quilted shoulder bag alternate angle", width: 800, height: 800 }
    ],
    tags: ["quilted shoulder bag", "chain strap bag", "crossbody bag", "vegan leather bag"],
    bestFor: ["Evenings out", "Compact carry", "Everyday outfits", "Black or caramel styling"],
    features: ["Quilted vegan leather look", "Rivet chain strap", "Shoulder or crossbody wear", "9 in x 3.4 in x 7 in"],
    specs: [
      { label: "Dimensions", value: "9 in L x 3.4 in W x 7 in H" },
      { label: "Colors", value: "Black and caramel" },
      { label: "Status", value: "Draft in Shopify" }
    ],
    provenance: "shopify-cli"
  }
];

export const featuredProduct = products[0];

export function getProduct(productIdOrSlug: string | null | undefined) {
  return products.find((product) => product.id === productIdOrSlug || product.slug === productIdOrSlug || product.handle === productIdOrSlug) ?? featuredProduct;
}

export function getProductByVariant(variantId: string | null | undefined) {
  return products.find((product) => product.variants.some((variant) => variant.id === variantId)) ?? featuredProduct;
}

export function getVariant(productId: string | null | undefined, variantId: string | null | undefined) {
  const product = getProduct(productId);
  return product.variants.find((variant) => variant.id === variantId) ?? product.variants[0];
}
