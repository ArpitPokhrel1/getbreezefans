# Portable Turbo Fan Store Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a secure, SEO-ready dropshipping storefront for the Portable Turbo Handheld and Neck Fan.

**Architecture:** Next.js App Router renders storefront and content pages. Prisma stores local order state in SQLite by default. Stripe Checkout collects payment and signed Stripe webhooks trigger optional CJ Dropshipping order creation.

**Tech Stack:** Next.js, React, TypeScript, Prisma, SQLite/Postgres-compatible data model, Stripe Checkout, CJ API, Zod, Vitest.

---

### Task 1: Shared Scaffold

**Files:**
- Create: `package.json`
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `.env.example`
- Create: `prisma/schema.prisma`
- Create: `src/data/product.ts`
- Create: `src/lib/env.ts`
- Create: `src/lib/db.ts`

- [x] Create the Next.js, TypeScript, Prisma, Stripe, and Vitest scaffold.
- [x] Add security headers and environment-variable placeholders.
- [x] Model products, orders, shipping addresses, and fulfillment events.
- [x] Install dependencies and resolve npm audit findings.

### Task 2: SEO And Content Agent

**Files:**
- Create: `docs/seo/source-notes.md`
- Create: `docs/seo/technical-content-seo.md`
- Create: `src/data/seo.ts`
- Create: `src/app/robots.ts`
- Create: `src/app/sitemap.ts`
- Optional Create: `src/app/blog/**`
- Optional Create: `src/app/guides/**`

- [ ] Research US keyword clusters and source URLs.
- [ ] Build programmatic page briefs and FAQ content.
- [ ] Add sitemap and robots output.
- [ ] Keep content compliant and non-deceptive.

### Task 3: Frontend Agent

**Files:**
- Create: `src/app/page.tsx`
- Create: `src/app/product/portable-turbo-fan/page.tsx`
- Create: `src/components/**`
- Modify: `src/app/globals.css`

- [ ] Build mobile-first home and product pages.
- [ ] Add variant/pack selection and checkout form posting to `/api/checkout`.
- [ ] Add accessible trust, benefits, specs, FAQ, and policy sections.
- [ ] Add clean local graphics without unsafe HTML or external scripts.

### Task 4: Backend Agent

**Files:**
- Create: `src/app/api/checkout/route.ts`
- Create: `src/app/api/webhooks/stripe/route.ts`
- Create: `src/server/**`
- Create: `src/lib/stripe.ts`
- Create: `src/lib/cj.ts`
- Create: `tests/**`

- [ ] Write failing tests for checkout validation and CJ payload creation.
- [ ] Implement Stripe Checkout Session creation.
- [ ] Implement signed Stripe webhook handling.
- [ ] Implement optional CJ Create Order V3 fulfillment event logging.
- [ ] Keep CJ auto-payment disabled unless explicitly configured.

### Task 5: Verification

**Files:**
- Read all changed files.

- [ ] Run `npm test`.
- [ ] Run `npx prisma generate`.
- [ ] Run `npm run build`.
- [ ] Start the dev server and provide the local URL.
