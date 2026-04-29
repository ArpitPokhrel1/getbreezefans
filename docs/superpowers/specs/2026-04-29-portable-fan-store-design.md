# Portable Turbo Fan Store Design

Date: 2026-04-29  
Market: United States  
Product: Portable Turbo Handheld and Neck Fan

## Goal

Build a focused US ecommerce ecosystem for the first product in `dropshipping-shopify-us-product-research.md`: a portable turbo handheld / neck fan positioned for summer commutes, sports games, concerts, travel, dorms, and hot work shifts.

## Architecture

The store is a Next.js App Router application with TypeScript, Prisma, and SQLite by default. Stripe Checkout handles payment collection through hosted checkout. Prisma records pending and paid orders locally, and the Stripe webhook is the only trusted source for payment completion. CJ Dropshipping fulfillment is implemented as an optional server-side integration behind environment variables.

## Security And Operations

No API keys are committed or invented. Stripe and CJ secrets are read from `.env`. Checkout input is validated server-side, security headers are set in `next.config.ts`, Stripe webhooks require signature verification, and CJ order submission happens only after Stripe confirms payment. CJ auto-payment remains disabled unless explicitly enabled with environment variables after supplier, variant, stock, shipping, and balance checks.

## SEO And Content

The SEO system targets US summer intent clusters: portable neck fan, handheld fan, mini portable fan, turbo fan, rechargeable fan, festival fan, commute cooling, sports parent cooling, warehouse shift cooling, and travel cooling. Pages must avoid medical claims, fake reviews, and guaranteed temperature-reduction claims.

## UX Direction

The storefront is mobile-first, minimal, and trustworthy. It should show the product clearly, present pack offers, explain realistic use cases, disclose shipping/returns plainly, and route checkout through Stripe. Visuals can use clean local product illustrations when verified supplier media is unavailable.

## Fulfillment Boundary

The CJ product page may require login, so the source of truth for launch is the CJ developer API plus merchant-side CJ account verification. Before live sales, the merchant must set CJ product/variant IDs, choose logistics, place a test order, and confirm shipping times and return handling.
