import type { Metadata } from "next";
import { portableFan } from "@/data/product";
import { Storefront } from "@/components/Storefront";
import { formatMoney } from "@/lib/money";

export const metadata: Metadata = {
  title: portableFan.title,
  description: `Buy the ${portableFan.title} from ${formatMoney(
    portableFan.priceCents
  )}. Available as a single fan, 2-pack, or 3-pack for U.S. delivery.`
};

export default function PortableTurboFanPage() {
  return <Storefront page="product" />;
}
