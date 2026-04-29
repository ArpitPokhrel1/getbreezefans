import type { Metadata } from "next";
import { Storefront } from "@/components/Storefront";

export const metadata: Metadata = {
  title: "Portable Turbo Fan for Summer Travel",
  description:
    "Shop the BreezePod Portable Turbo Handheld and Neck Fan for U.S. commutes, theme parks, sports days, and hot work shifts."
};

export default function HomePage() {
  return <Storefront page="home" />;
}
