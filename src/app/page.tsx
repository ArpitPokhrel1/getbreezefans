import type { Metadata } from "next";
import { Storefront } from "@/components/Storefront";

export const metadata: Metadata = {
  title: "Trajun Digital Atelier",
  description:
    "Explore Trajun, a premium product catalog generated from Shopify CLI product data and a Stitch MCP 3D atelier UI."
};

export default function HomePage() {
  return <Storefront page="home" />;
}
