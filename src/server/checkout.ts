import { z } from "zod";

import { getProduct, products } from "../data/product";

const productIds = products.map((product) => product.id);
const variantIds = products.flatMap((product) => product.variants.map((variant) => variant.id));

export const checkoutRequestSchema = z.object({
  productId: z.string().refine((productId) => productIds.includes(productId), {
    message: "Unknown product"
  }),
  variantId: z.string().refine((variantId) => variantIds.includes(variantId), {
    message: "Unknown product variant"
  }),
  quantity: z.coerce.number().int().min(1).max(10)
});

export type CheckoutRequest = z.infer<typeof checkoutRequestSchema>;

export function getCheckoutProduct(productId: string) {
  const product = getProduct(productId);

  if (product.id !== productId) {
    throw new Error(`Unknown product: ${productId}`);
  }

  return product;
}

export function getCheckoutVariant(productId: string, variantId: string) {
  const product = getCheckoutProduct(productId);
  const variant = product.variants.find((item) => item.id === variantId);

  if (!variant) {
    throw new Error(`Unknown product variant for ${productId}: ${variantId}`);
  }

  return variant;
}

export function createOrderNumber() {
  const random = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `TJ-${Date.now()}-${random}`;
}
