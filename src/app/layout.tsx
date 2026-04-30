import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Trajun Digital Atelier",
    template: "%s | Trajun"
  },
  description:
    "Trajun is a premium ecommerce atelier generated from live Shopify CLI product data and a Stitch MCP visual system.",
  icons: {
    icon: "/favicon.svg"
  },
  openGraph: {
    title: "Trajun Digital Atelier",
    description: "A motion-led ecommerce catalog built from Shopify Admin data and Stitch design direction.",
    type: "website",
    url: "/"
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
