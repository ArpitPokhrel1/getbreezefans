import type { Metadata } from "next";
import { Storefront } from "@/components/Storefront";

export const metadata: Metadata = {
  title: "BreezePod Summer Comfort Shop",
  description:
    "Shop BreezePod portable neck fans and lightweight cooling blankets for U.S. commutes, travel days, warm rooms, and summer routines."
};

export default function HomePage() {
  return <Storefront page="home" />;
}
