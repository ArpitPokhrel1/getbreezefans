import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Storefront } from "@/components/Storefront";
import { getProduct, products } from "@/data/product";
import { formatMoney } from "@/lib/money";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);

  if (product.slug !== slug) {
    return {};
  }

  return {
    title: product.title,
    description: `${product.tagline} Starts at ${formatMoney(product.priceCents)}. Payment is not collected on the Trajun preview.`,
    alternates: { canonical: `/product/${product.slug}` },
    openGraph: {
      title: `${product.title} | Trajun`,
      description: product.description,
      images: product.images.map((image) => ({ url: image.src, width: image.width, height: image.height, alt: image.alt }))
    }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);

  if (product.slug !== slug) {
    notFound();
  }

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    brand: { "@type": "Brand", name: "Trajun" },
    image: product.images.map((image) => image.src),
    description: product.description,
    sku: product.variants[0]?.sku,
    offers: {
      "@type": "Offer",
      priceCurrency: "USD",
      price: (product.priceCents / 100).toFixed(2),
      availability: product.status === "ACTIVE" ? "https://schema.org/InStock" : "https://schema.org/PreOrder",
      url: `/product/${product.slug}`
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Storefront page="product" productSlug={product.slug} />
    </>
  );
}
