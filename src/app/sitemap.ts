import type { MetadataRoute } from "next";
import { pageBriefs } from "@/data/seo";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const siteUrl = getSiteUrl();
  const staticUrls = ["/", "/sculpt-ritual", ...pageBriefs.map((page) => page.url)];
  const uniqueUrls = Array.from(new Set(staticUrls));

  return uniqueUrls.map((url) => ({
    url: `${siteUrl}${url}`,
    lastModified: now,
    changeFrequency: url === "/" || url.startsWith("/product/") ? "weekly" : "monthly",
    priority: url === "/" ? 1 : url.startsWith("/product/") ? 0.9 : 0.7
  }));
}
