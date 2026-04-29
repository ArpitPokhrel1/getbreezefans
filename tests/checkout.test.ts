import { describe, expect, it } from "vitest";

import { checkoutRequestSchema, getCheckoutVariant } from "../src/server/checkout";

describe("checkout validation", () => {
  it("accepts a known variant and positive quantity", () => {
    const parsed = checkoutRequestSchema.parse({
      variantId: "two-pack",
      quantity: 2
    });

    expect(parsed).toEqual({ variantId: "two-pack", quantity: 2 });
    expect(getCheckoutVariant(parsed.variantId).id).toBe("two-pack");
  });

  it("coerces browser form quantity strings", () => {
    const parsed = checkoutRequestSchema.parse({
      variantId: "single-black",
      quantity: "3"
    });

    expect(parsed).toEqual({ variantId: "single-black", quantity: 3 });
  });

  it("rejects unknown variants instead of falling back to a default", () => {
    expect(() =>
      checkoutRequestSchema.parse({
        variantId: "not-a-real-variant",
        quantity: 1
      })
    ).toThrow();
  });

  it("rejects invalid quantities", () => {
    expect(() =>
      checkoutRequestSchema.parse({
        variantId: "single-black",
        quantity: 0
      })
    ).toThrow();
  });
});
