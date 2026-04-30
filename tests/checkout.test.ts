import { describe, expect, it } from "vitest";

import { checkoutRequestSchema, getCheckoutVariant } from "../src/server/checkout";

describe("checkout validation", () => {
  it("accepts a known variant and positive quantity", () => {
    const parsed = checkoutRequestSchema.parse({
      productId: "rotating-moon-desk-lamp",
      variantId: "moon-gray-wireless",
      quantity: 2
    });

    expect(parsed).toEqual({ productId: "rotating-moon-desk-lamp", variantId: "moon-gray-wireless", quantity: 2 });
    expect(getCheckoutVariant(parsed.productId, parsed.variantId).id).toBe("moon-gray-wireless");
  });

  it("coerces browser form quantity strings", () => {
    const parsed = checkoutRequestSchema.parse({
      productId: "rotating-moon-desk-lamp",
      variantId: "moon-gray-basic",
      quantity: "3"
    });

    expect(parsed).toEqual({ productId: "rotating-moon-desk-lamp", variantId: "moon-gray-basic", quantity: 3 });
  });

  it("accepts draft catalog variants", () => {
    const parsed = checkoutRequestSchema.parse({
      productId: "nany-quilted-shoulder-bag",
      variantId: "bag-black",
      quantity: 1
    });

    expect(getCheckoutVariant(parsed.productId, parsed.variantId).id).toBe("bag-black");
  });

  it("rejects unknown variants instead of falling back to a default", () => {
    expect(() =>
      checkoutRequestSchema.parse({
        productId: "rotating-moon-desk-lamp",
        variantId: "not-a-real-variant",
        quantity: 1
      })
    ).toThrow();
  });

  it("rejects invalid quantities", () => {
    expect(() =>
      checkoutRequestSchema.parse({
        productId: "rotating-moon-desk-lamp",
        variantId: "moon-gray-basic",
        quantity: 0
      })
    ).toThrow();
  });
});
