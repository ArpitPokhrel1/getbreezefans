import type { Product } from "../data/product";
import { env } from "./env";

const CJ_BASE_URL = "https://developers.cjdropshipping.com/api2.0/v1";

type NullableString = string | null | undefined;

export type CjCreateOrderOptions = {
  accessToken?: NullableString;
  platformToken?: NullableString;
  productId?: NullableString;
  variantId?: NullableString;
  variantSku?: NullableString;
  logisticName?: NullableString;
};

export type CjOrderForPayload = {
  id: string;
  orderNumber: string;
  totalCents: number;
  currency: string;
  customer?: {
    email?: NullableString;
    name?: NullableString;
    phone?: NullableString;
  } | null;
  shipping?: {
    name: string;
    line1: string;
    line2?: NullableString;
    city: string;
    state: string;
    postalCode: string;
    countryCode: string;
    phone?: NullableString;
  } | null;
  items: Array<{
    productId: string;
    variantId: string;
    title: string;
    quantity: number;
    cjProductId?: NullableString;
    cjVariantId?: NullableString;
    cjSku?: NullableString;
  }>;
};

export type CjCreateOrderPayload = {
  orderNumber: string;
  shippingZip: string;
  shippingCountryCode: string;
  shippingCountry: string;
  shippingProvince: string;
  shippingCity: string;
  shippingAddress: string;
  shippingCustomerName: string;
  shippingPhone?: string;
  email?: string;
  logisticName?: string;
  products: Array<{
    productId: string;
    variantId?: string;
    sku?: string;
    quantity: number;
    productName: string;
  }>;
};

function cleanString(value: NullableString) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : undefined;
}

function assertShipping(order: CjOrderForPayload) {
  if (!order.shipping) {
    throw new Error("Cannot create CJ order without a shipping address");
  }

  return order.shipping;
}

function countryName(countryCode: string) {
  return countryCode.toUpperCase() === "US" ? "United States" : countryCode;
}

export function buildCjCreateOrderPayload(
  order: CjOrderForPayload,
  product: Product,
  options: CjCreateOrderOptions = {}
): CjCreateOrderPayload {
  const shipping = assertShipping(order);
  const address = [shipping.line1, shipping.line2].map(cleanString).filter(Boolean).join(" ");

  return {
    orderNumber: order.orderNumber,
    shippingZip: shipping.postalCode,
    shippingCountryCode: shipping.countryCode,
    shippingCountry: countryName(shipping.countryCode),
    shippingProvince: shipping.state,
    shippingCity: shipping.city,
    shippingAddress: address,
    shippingCustomerName: shipping.name,
    shippingPhone: cleanString(shipping.phone ?? order.customer?.phone),
    email: cleanString(order.customer?.email),
    logisticName: cleanString(options.logisticName),
    products: order.items.map((item) => ({
      productId: cleanString(item.cjProductId) ?? cleanString(options.productId) ?? product.cjProductId,
      variantId: cleanString(item.cjVariantId) ?? cleanString(options.variantId),
      sku: cleanString(item.cjSku) ?? cleanString(options.variantSku),
      quantity: item.quantity,
      productName: item.title
    }))
  };
}

export async function createCjOrder(order: CjOrderForPayload, product: Product) {
  const accessToken = cleanString(env.CJ_ACCESS_TOKEN);

  if (!accessToken) {
    return {
      skipped: true,
      status: "SKIPPED",
      message: "CJ_ACCESS_TOKEN is not set"
    };
  }

  if (!cleanString(product.cjProductId) || product.cjProductId.includes("supplier-pending")) {
    return {
      skipped: true,
      status: "SKIPPED",
      message: `${product.title} is not mapped to a live CJ product yet`
    };
  }

  const payload = buildCjCreateOrderPayload(order, product, {
    productId: env.CJ_PRODUCT_ID,
    variantId: env.CJ_VARIANT_ID,
    variantSku: env.CJ_VARIANT_SKU,
    logisticName: env.CJ_LOGISTIC_NAME,
    platformToken: env.CJ_PLATFORM_TOKEN
  });

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    "CJ-Access-Token": accessToken
  };

  const platformToken = cleanString(env.CJ_PLATFORM_TOKEN);
  if (platformToken) {
    headers.platformToken = platformToken;
  }

  const response = await fetch(`${CJ_BASE_URL}/shopping/order/createOrderV3`, {
    method: "POST",
    headers,
    body: JSON.stringify(payload)
  });

  const body = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(`CJ createOrderV3 failed with status ${response.status}`);
  }

  return {
    skipped: false,
    status: "CREATED",
    payload,
    response: body
  };
}

export function isCjAutoSubmitEnabled() {
  return env.CJ_AUTO_SUBMIT === "true";
}

export function isCjAutoPayEnabled() {
  return env.CJ_AUTO_PAY === "true";
}
