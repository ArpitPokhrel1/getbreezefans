import { z } from "zod";

import { portableFan } from "../data/product";

const variantIds = portableFan.variants.map((variant) => variant.id);

export const checkoutRequestSchema = z.object({
  variantId: z.string().refine((variantId) => variantIds.includes(variantId), {
    message: "Unknown product variant"
  }),
  quantity: z.coerce.number().int().min(1).max(10)
});

export type CheckoutRequest = z.infer<typeof checkoutRequestSchema>;

export function getCheckoutVariant(variantId: string) {
  const variant = portableFan.variants.find((item) => item.id === variantId);

  if (!variant) {
    throw new Error(`Unknown product variant: ${variantId}`);
  }

  return variant;
}

export function createOrderNumber() {
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `BP-${Date.now()}-${random}`;
}
