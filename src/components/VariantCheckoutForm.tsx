"use client";

import { Check, Minus, Plus, Send } from "lucide-react";
import { useMemo, useState } from "react";
import type { Product } from "@/data/product";
import { formatMoney } from "@/lib/money";

type VariantCheckoutFormProps = {
  product: Product;
  compact?: boolean;
};

export function VariantCheckoutForm({ product, compact = false }: VariantCheckoutFormProps) {
  const [variantId, setVariantId] = useState(product.defaultVariantId);
  const [quantity, setQuantity] = useState(1);
  const quantityId = `request-quantity-${product.id}${compact ? "-compact" : ""}`;

  const selectedVariant = useMemo(
    () => product.variants.find((variant) => variant.id === variantId) ?? product.variants[0],
    [product.variants, variantId]
  );

  return (
    <form
      className={`buy-panel${compact ? " buy-panel--compact" : ""}`}
      action={`mailto:studio@trajun.local?subject=Trajun availability request: ${encodeURIComponent(product.title)}`}
      method="post"
      encType="text/plain"
    >
      <input type="hidden" name="productId" value={product.id} />
      <input type="hidden" name="variantId" value={selectedVariant.id} />
      <input type="hidden" name="quantity" value={quantity} />

      <div className="buy-panel__head">
        <div>
          <span className="eyebrow">Private request</span>
          <h2>{compact ? "Choose finish" : product.shortTitle}</h2>
        </div>
        <div className="price-lockup" aria-live="polite">
          <strong>{formatMoney(selectedVariant.priceCents)}</strong>
          {product.status === "DRAFT" ? <span>Draft item</span> : null}
        </div>
      </div>

      <fieldset className="variant-group">
        <legend>Configuration</legend>
        {product.variants.slice(0, compact ? 3 : 6).map((variant) => {
          const checked = variant.id === selectedVariant.id;

          return (
            <label className={`variant-choice${checked ? " is-selected" : ""}`} key={variant.id}>
              <input
                type="radio"
                name="selectedVariant"
                value={variant.id}
                checked={checked}
                onChange={() => setVariantId(variant.id)}
              />
              <span>
                <strong>{variant.label}</strong>
                <small>{variant.sku ? `SKU ${variant.sku}` : "Shopify synced variant"}</small>
              </span>
              <span className="variant-choice__price">{formatMoney(variant.priceCents)}</span>
            </label>
          );
        })}
      </fieldset>

      <div className="quantity-row">
        <label htmlFor={quantityId}>Request quantity</label>
        <div className="stepper">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
          >
            <Minus size={15} strokeWidth={1.5} aria-hidden="true" />
          </button>
          <output id={quantityId} aria-live="polite">
            {quantity}
          </output>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity((current) => Math.min(12, current + 1))}
          >
            <Plus size={15} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </div>

      <p className="savings">
        <Check size={16} strokeWidth={1.5} aria-hidden="true" />
        No payment is collected on this site. This sends a product availability request.
      </p>

      <button className="checkout-button" type="submit">
        <span>Request availability</span>
        <span className="button-disc">
          <Send size={15} strokeWidth={1.5} aria-hidden="true" />
        </span>
      </button>

      <p className="checkout-note">
        Shopify Admin data is synced into this catalog, but payment integration is intentionally disabled until you ask
        for it.
      </p>
    </form>
  );
}
