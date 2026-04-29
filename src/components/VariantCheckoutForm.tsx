"use client";

import { Minus, Plus, ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";
import { portableFan } from "@/data/product";
import { formatMoney } from "@/lib/money";

export function VariantCheckoutForm() {
  const [variantId, setVariantId] = useState(portableFan.variants[1]?.id ?? portableFan.variants[0].id);
  const [quantity, setQuantity] = useState(1);

  const selectedVariant = useMemo(
    () => portableFan.variants.find((variant) => variant.id === variantId) ?? portableFan.variants[0],
    [variantId]
  );

  const savings =
    selectedVariant.compareAtCents && selectedVariant.compareAtCents > selectedVariant.priceCents
      ? selectedVariant.compareAtCents - selectedVariant.priceCents
      : 0;

  return (
    <form className="buy-panel" action="/api/checkout" method="post">
      <input type="hidden" name="productId" value={portableFan.id} />
      <input type="hidden" name="variantId" value={selectedVariant.id} />
      <input type="hidden" name="quantity" value={quantity} />

      <div className="buy-panel__head">
        <div>
          <span className="eyebrow">Summer-ready stock</span>
          <h2>Choose your pack</h2>
        </div>
        <div className="price-lockup" aria-live="polite">
          <strong>{formatMoney(selectedVariant.priceCents)}</strong>
          {selectedVariant.compareAtCents ? <span>{formatMoney(selectedVariant.compareAtCents)}</span> : null}
        </div>
      </div>

      <fieldset className="variant-group">
        <legend>Pack option</legend>
        {portableFan.variants.map((variant) => {
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
                <small>{variant.color}</small>
              </span>
              <span className="variant-choice__price">
                {formatMoney(variant.priceCents)}
                <small>{formatMoney(perFan)} each</small>
              </span>
            </label>
          );
        })}
      </fieldset>

      <div className="quantity-row">
        <label htmlFor="checkout-quantity">Order quantity</label>
        <div className="stepper">
          <button
            type="button"
            aria-label="Decrease quantity"
            onClick={() => setQuantity((current) => Math.max(1, current - 1))}
          >
            <Minus size={16} aria-hidden="true" />
          </button>
          <output id="checkout-quantity" aria-live="polite">
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

      {savings ? <p className="savings">You save {formatMoney(savings)} on this pack.</p> : null}

      <button className="checkout-button" type="submit">
        <ShoppingBag size={19} aria-hidden="true" />
        Checkout securely
      </button>
      <p className="checkout-note">Ships to U.S. addresses. Taxes and final delivery options are shown at checkout.</p>
    </form>
  );
}
