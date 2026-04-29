import type { Metadata } from "next";
import { Storefront } from "@/components/Storefront";
import { coolingBlanket } from "@/data/product";
import { formatMoney } from "@/lib/money";

export const metadata: Metadata = {
  title: coolingBlanket.title,
  description: `Buy the ${coolingBlanket.title} from ${formatMoney(
    coolingBlanket.priceCents
  )}. Lightweight summer bedding for U.S. delivery.`
};

export default function CoolingBlanketPage() {
  return <Storefront page="product" productSlug={coolingBlanket.slug} />;
}
