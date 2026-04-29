import { describe, expect, it } from "vitest";

import { buildCjCreateOrderPayload } from "../src/lib/cj";
import { portableFan } from "../src/data/product";

const paidOrder = {
  id: "order_123",
  orderNumber: "BP-1001",
  totalCents: 4998,
  currency: "usd",
  customer: {
    email: "customer@example.com",
    name: "Ada Lovelace",
    phone: "5551234567"
  },
  shipping: {
    name: "Ada Lovelace",
    line1: "123 Market St",
    line2: "Apt 4",
    city: "San Francisco",
    state: "CA",
    postalCode: "94105",
    countryCode: "US",
    phone: "5551234567"
  },
  items: [
    {
      productId: portableFan.id,
      variantId: "single-black",
      title: portableFan.title,
      quantity: 2,
      cjProductId: portableFan.cjProductId,
      cjVariantId: "cj-variant-1",
      cjSku: "SKU-1"
    }
  ]
};

describe("CJ payload builder", () => {
  it("builds a Create Order V3 payload from order, shipping, customer, and product data", () => {
    const payload = buildCjCreateOrderPayload(paidOrder, portableFan, {
      logisticName: "CJPacket"
    });

    expect(payload.orderNumber).toBe("BP-1001");
    expect(payload.shippingCountryCode).toBe("US");
    expect(payload.shippingCountry).toBe("United States");
    expect(payload.shippingProvince).toBe("CA");
    expect(payload.shippingAddress).toBe("123 Market St Apt 4");
    expect(payload.logisticName).toBe("CJPacket");
    expect(payload.products).toEqual([
      {
        productId: portableFan.cjProductId,
        variantId: "cj-variant-1",
        sku: "SKU-1",
        quantity: 2,
        productName: portableFan.title
      }
    ]);
  });

  it("uses product and env fallbacks for missing CJ item fields", () => {
    const payload = buildCjCreateOrderPayload(
      {
        ...paidOrder,
        items: [
          {
            ...paidOrder.items[0],
            cjProductId: null,
            cjVariantId: null,
            cjSku: null
          }
        ]
      },
      portableFan,
      {
        variantId: "env-variant",
        variantSku: "ENV-SKU"
      }
    );

    expect(payload.products[0]).toMatchObject({
      productId: portableFan.cjProductId,
      variantId: "env-variant",
      sku: "ENV-SKU"
    });
  });

  it("does not include API tokens in the CJ payload", () => {
    const payload = buildCjCreateOrderPayload(paidOrder, portableFan, {
      accessToken: "secret-token",
      platformToken: "secret-platform"
    });

    expect(JSON.stringify(payload)).not.toContain("secret-token");
    expect(JSON.stringify(payload)).not.toContain("secret-platform");
  });
});
