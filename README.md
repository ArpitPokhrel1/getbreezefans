# BreezePod Portable Fan Store

Next.js ecommerce storefront for a US dropshipping test of the Portable Turbo Handheld and Neck Fan.

Live site: https://getbreezefans.vercel.app  
GitHub: https://github.com/ArpitPokhrel1/getbreezefans

## What Is Included

- Mobile-first product storefront and product page
- SEO content pages, sitemap, robots, keyword clusters, and launch checklist
- Stripe Checkout API route for one-time payments
- Signed Stripe webhook route for paid-order handling
- Prisma order database schema with local SQLite default
- CJ Dropshipping Create Order V3 client and fulfillment event logging
- Tests for checkout validation and CJ payload generation

## Local Setup

```bash
npm install
npm run db:init:sqlite
npm run dev
```

Open http://127.0.0.1:3000.

## Required Environment Variables

Copy `.env.example` to `.env` for local development and set real values before accepting payments:

```bash
DATABASE_URL=file:./dev.db
NEXT_PUBLIC_SITE_URL=http://localhost:3000
STRIPE_SECRET_KEY=sk_test_or_live_value
STRIPE_WEBHOOK_SECRET=whsec_value
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_or_live_value
CJ_ACCESS_TOKEN=your_cj_access_token
CJ_PRODUCT_ID=1960960181515612162
CJ_VARIANT_ID=verified_cj_variant_id
CJ_VARIANT_SKU=verified_cj_sku
CJ_LOGISTIC_NAME=verified_logistics_channel
```

## Production Notes

Use Vercel environment variables for production secrets. Do not rely on local `.env` files for live deployments.

SQLite is included for local development because the request allowed local SQLite/Postgres. For a live Vercel checkout flow, use a hosted Postgres database and update `prisma/schema.prisma` from `provider = "sqlite"` to `provider = "postgresql"` before taking real payments.

CJ order creation is only attempted after Stripe confirms payment by webhook and only when `CJ_ACCESS_TOKEN` is set. CJ auto-payment is intentionally not implemented; verify supplier variant IDs, stock, shipping channel, cost, delivery window, and test order behavior inside CJ before enabling live traffic.

## Verification

```bash
npm test
npx tsc --noEmit
npm audit --audit-level=moderate
npm run build
```
