# Technical and Content SEO Launch Checklist

## Crawl and Indexation

- [ ] Set `NEXT_PUBLIC_SITE_URL` to the production HTTPS origin before launch.
- [ ] Confirm `/robots.txt` allows public pages and references `/sitemap.xml`.
- [ ] Confirm `/sitemap.xml` includes home, `/product/portable-turbo-fan`, blog posts, and guide pages.
- [ ] Submit sitemap in Google Search Console and Bing Webmaster Tools.
- [ ] Keep cart, checkout, account, order status, API, and internal admin paths out of indexation.

## Canonicals and Metadata

- [ ] Use one canonical URL per indexable page.
- [ ] Keep title tags unique, under roughly 60 characters when practical, and aligned with the page's primary keyword.
- [ ] Keep meta descriptions unique, specific, and non-hype.
- [ ] Avoid duplicate targeting: product page owns purchase intent; guides own research intent; blog posts own use-case intent.
- [ ] Use stable lowercase hyphenated URLs.

## Schema

- [ ] Add Product schema on `/product/portable-turbo-fan` only after final price, availability, images, SKU/variant IDs, shipping, and return policy are verified.
- [ ] Do not add Review or AggregateRating schema until real first-party reviews exist.
- [ ] Add FAQPage schema only for visible FAQs and only where answers are specific and stable.
- [ ] Add BreadcrumbList schema for product, blog, and guide pages when the frontend navigation is finalized.
- [ ] Validate rendered schema with Google Rich Results Test, not only static HTML or curl.

## Core Web Vitals

- [ ] Keep LCP image optimized, sized, and served with Next image handling or equivalent.
- [ ] Avoid layout shift from late-loading offer bars, product images, review widgets, and variant selectors.
- [ ] Keep third-party scripts minimal before organic validation.
- [ ] Measure desktop and mobile with PageSpeed Insights after deployment.
- [ ] Target LCP under 2.5s, INP under 200ms, and CLS under 0.1.

## Product Page Copy

- [ ] Position the fan as a personal airflow and comfort product, not an air conditioner.
- [ ] Avoid medical claims, heat illness prevention claims, or guaranteed temperature reduction.
- [ ] Verify supplier details before launch: battery capacity, charging type, speed count, weight, color variants, inventory, delivery estimates, and included accessories.
- [ ] Include plain-language disclaimers about runtime varying by setting and conditions.
- [ ] Explain use cases above the fold: commutes, sports sidelines, festivals, travel, desk/dorm, and hot shifts.
- [ ] Add bundle copy for 2-pack and 3-pack without fake scarcity.

## Internal Links

- [ ] Home links to the product page and top buying guide.
- [ ] Product page links to the buying guide, handheld vs neck fan comparison, and festival/commute guide.
- [ ] Each guide links back to the product page with natural anchors.
- [ ] Blog posts cross-link to related guides, not just the product page.
- [ ] Keep all indexable pages within three clicks of the homepage once navigation is added.

## Content Calendar

- Week 1: Publish buying guide, handheld vs neck comparison, and summer use-case blog post.
- Week 2: Publish festival/commute cooling guide and sports parent sideline checklist.
- Week 3: Publish warehouse shift comfort checklist with workplace safety disclaimers.
- Week 4: Publish travel packing guide and theme park line guide.
- Refresh weekly through July with new FAQs from Search Console queries and customer support questions.

## Measurement

- [ ] Track impressions, clicks, CTR, and queries in Google Search Console.
- [ ] Track product page conversion rate, add-to-cart rate, and guide-to-product click-through.
- [ ] Monitor keyword cannibalization between "portable neck fan", "handheld fan", "mini portable fan", and "turbo handheld fan" pages.
- [ ] Prune or consolidate thin pages instead of creating many near-duplicate use-case pages.

