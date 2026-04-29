import type { MetadataRoute } from "next";
import { pageBriefs } from "@/data/seo";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticUrls = ["/", ...pageBriefs.map((page) => page.url)];
  const uniqueUrls = Array.from(new Set(staticUrls));

  return uniqueUrls.map((url) => ({
    url: `${siteUrl}${url}`,
    lastModified: now,
    changeFrequency: url === "/" || url.startsWith("/product/") ? "weekly" : "monthly",
    priority: url === "/" ? 1 : url.startsWith("/product/") ? 0.9 : 0.7
  }));
}

