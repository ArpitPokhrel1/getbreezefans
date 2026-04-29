# BreezePod Shopify Theme

This is a Shopify Online Store 2.0 theme implementation for the BreezePod storefront design.

## What is included

- Premium BreezePod layout, announcement bar, floating header, footer
- Homepage JSON template with hero, featured products, moment shopping, and trust proof sections
- Product JSON template with image gallery, variant selector, quantity input, add-to-cart, and dynamic checkout support
- Cart template
- Local real product imagery copied into `assets/`
- Editable section settings for brand copy, hero product, featured products, proof blocks, and moment cards

## Shopify setup

1. Create the fan product in Shopify with variants such as `Black fan`, `White fan`, and `Black + white pair`.
2. Create the cooling blanket product with variants such as `Throw blanket` and `Queen blanket`.
3. Upload this `shopify-theme` folder using Shopify CLI:

```bash
shopify theme push --path shopify-theme
```

4. In the Shopify theme editor, assign:
   - `BreezePod hero` hero product
   - `BreezePod featured products` first and second products
   - Moment card links to the relevant product pages

## Notes

- Keep cooling claims conservative. The theme copy describes personal airflow and passive lightweight bedding, not medical cooling.
- The product form posts to Shopify's native cart and checkout.
- Dynamic checkout buttons can be disabled in the product section settings.
