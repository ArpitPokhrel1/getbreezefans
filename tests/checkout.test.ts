import { describe, expect, it } from "vitest";

import { checkoutRequestSchema, getCheckoutVariant } from "../src/server/checkout";

describe("checkout validation", () => {
  it("accepts a known variant and positive quantity", () => {
    const parsed = checkoutRequestSchema.parse({
      productId: "portable-turbo-fan",
      variantId: "fan-black-white-pair",
      quantity: 2
    });

    expect(parsed).toEqual({ productId: "portable-turbo-fan", variantId: "fan-black-white-pair", quantity: 2 });
    expect(getCheckoutVariant(parsed.productId, parsed.variantId).id).toBe("fan-black-white-pair");
  });

  it("coerces browser form quantity strings", () => {
    const parsed = checkoutRequestSchema.parse({
      productId: "portable-turbo-fan",
      variantId: "fan-black",
      quantity: "3"
    });

    expect(parsed).toEqual({ productId: "portable-turbo-fan", variantId: "fan-black", quantity: 3 });
  });

  it("accepts cooling blanket variants", () => {
    const parsed = checkoutRequestSchema.parse({
      productId: "cooling-blanket",
      variantId: "blanket-queen-blue",
      quantity: 1
    });

    expect(getCheckoutVariant(parsed.productId, parsed.variantId).id).toBe("blanket-queen-blue");
  });

  it("rejects unknown variants instead of falling back to a default", () => {
    expect(() =>
      checkoutRequestSchema.parse({
        productId: "portable-turbo-fan",
        variantId: "not-a-real-variant",
        quantity: 1
      })
    ).toThrow();
  });

  it("rejects invalid quantities", () => {
    expect(() =>
      checkoutRequestSchema.parse({
        productId: "portable-turbo-fan",
        variantId: "fan-black",
        quantity: 0
      })
    ).toThrow();
  });
});
