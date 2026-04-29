"use client";

import { Minus, Plus, ShoppingBag, Store } from "lucide-react";
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
  const shopifyUrl = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL;
  const quantityId = `checkout-quantity-${product.id}${compact ? "-compact" : ""}`;

  const selectedVariant = useMemo(
    () => product.variants.find((variant) => variant.id === variantId) ?? product.variants[0],
    [product.variants, variantId]
  );

  const savings =
    selectedVariant.compareAtCents && selectedVariant.compareAtCents > selectedVariant.priceCents
      ? selectedVariant.compareAtCents - selectedVariant.priceCents
      : 0;

  return (
    <form className={`buy-panel${compact ? " buy-panel--compact" : ""}`} action="/api/checkout" method="post">
      <input type="hidden" name="productId" value={product.id} />
      <input type="hidden" name="variantId" value={selectedVariant.id} />
      <input type="hidden" name="quantity" value={quantity} />

      <div className="buy-panel__head">
        <div>
          <span className="eyebrow">Secure checkout</span>
          <h2>{compact ? "Choose option" : product.shortTitle}</h2>
        </div>
        <div className="price-lockup" aria-live="polite">
          <strong>{formatMoney(selectedVariant.priceCents)}</strong>
          {selectedVariant.compareAtCents ? <span>{formatMoney(selectedVariant.compareAtCents)}</span> : null}
        </div>
      </div>

      <fieldset className="variant-group">
        <legend>Product option</legend>
        {product.variants.map((variant) => {
          const checked = variant.id === selectedVariant.id;
          const perFan = variant.priceCents / variant.quantity;

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
                <small>{variant.size ? `${variant.color} - ${variant.size}` : variant.color}</small>
              </span>
              <span className="variant-choice__price">
                {formatMoney(variant.priceCents)}
                {variant.quantity > 1 ? <small>{formatMoney(perFan)} each</small> : null}
              </span>
            </label>
          );
        })}
      </fieldset>

      <div className="quantity-row">
        <label htmlFor={quantityId}>Order quantity</label>
        <div className="stepper">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
          >
            <Minus size={16} aria-hidden="true" />
          </button>
          <output id={quantityId} aria-live="polite">
            {quantity}
          </output>
          <button
            type="button"
            aria-label="Increase quantity"
            onClick={() => setQuantity((current) => Math.min(9, current + 1))}
          >
            <Plus size={16} aria-hidden="true" />
          </button>
        </div>
      </div>

      {savings ? <p className="savings">Launch price: {formatMoney(savings)} below compare-at.</p> : null}

      <button className="checkout-button" type="submit">
        <ShoppingBag size={19} aria-hidden="true" />
        Checkout with Stripe
      </button>
      {shopifyUrl ? (
        <a className="shopify-link" href={shopifyUrl} target="_blank" rel="noreferrer">
          <Store size={17} aria-hidden="true" />
          View Shopify store
        </a>
      ) : null}
      <p className="checkout-note">
        Ships to U.S. addresses. Taxes and final delivery options are shown at checkout. Covered by a 10-day
        money-back guarantee.
      </p>
    </form>
  );
}
