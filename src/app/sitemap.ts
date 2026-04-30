import type { MetadataRoute } from "next";
import { products } from "@/data/product";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const siteUrl = getSiteUrl();
  const staticUrls = ["/", ...products.map((product) => `/product/${product.slug}`)];
  const uniqueUrls = Array.from(new Set(staticUrls));

  return uniqueUrls.map((url) => ({
    url: `${siteUrl}${url}`,
    lastModified: now,
    changeFrequency: url === "/" || url.startsWith("/product/") ? "weekly" : "monthly",
    priority: url === "/" ? 1 : url.startsWith("/product/") ? 0.9 : 0.7
  }));
}
