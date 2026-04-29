import {
  BatteryCharging,
  BedDouble,
  CheckCircle2,
  Clock3,
  Droplets,
  Fan,
  PackageCheck,
  Plane,
  ShieldCheck,
  Truck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { coolingBlanket, getProduct, portableFan, products, type Product } from "@/data/product";
import { formatMoney } from "@/lib/money";
import { VariantCheckoutForm } from "./VariantCheckoutForm";

type StorefrontProps = {
  page: "home" | "product";
  productSlug?: string;
};

const trustItems = [
  { icon: ShieldCheck, label: "Secure checkout" },
  { icon: Truck, label: "U.S. delivery" },
  { icon: PackageCheck, label: "10-day guarantee" },
  { icon: CheckCircle2, label: "Tracked orders" }
];

const faqs = [
  {
    question: "Is BreezePod a Shopify store too?",
    answer:
      "The storefront can link to Shopify through NEXT_PUBLIC_SHOPIFY_STORE_URL. Stripe checkout remains available in this app while Shopify is configured."
  },
  {
    question: "What does the 10-day money-back guarantee cover?",
    answer:
      "Customers have 10 days from delivery to inspect the product. Unused items and verified defects can be returned under the posted policy."
  },
  {
    question: "Are these medical cooling products?",
    answer:
      "No. The fan moves air nearby and the blanket is a passive lightweight textile. Neither product replaces AC, hydration, shade, or medical guidance."
  },
  {
    question: "Why sell a fan and blanket together?",
    answer:
      "They solve different parts of summer discomfort: personal airflow outside the home and lighter bedding inside the home."
  }
];

export function Storefront({ page, productSlug = "portable-turbo-fan" }: StorefrontProps) {
  const isProductPage = page === "product";
  const activeProduct = getProduct(productSlug);
  const heroProduct = isProductPage ? activeProduct : portableFan;
  const secondaryProduct = heroProduct.id === portableFan.id ? coolingBlanket : portableFan;
  const shopifyUrl = process.env.NEXT_PUBLIC_SHOPIFY_STORE_URL;

  return (
    <main>
      <AnnouncementBar />
      <Header />
      <MobileBuyBar product={heroProduct} />
      <section className="hero-section" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Summer comfort, built for real routines</span>
          <h1>{isProductPage ? heroProduct.title : "Cooler commutes. Lighter nights."}</h1>
          <p>{isProductPage ? heroProduct.description : "BreezePod pairs a real portable neck fan with a lightweight cooling blanket so customers can solve the two summer moments they actually complain about: moving through heat and trying to rest in it."}</p>
          <div className="hero-actions">
            <a className="primary-link" href="#buy">
              Shop from {formatMoney(heroProduct.priceCents)}
            </a>
            <a className="secondary-link" href="#specs">
              See specifications
            </a>
            {shopifyUrl ? (
              <a className="secondary-link" href={shopifyUrl} target="_blank" rel="noreferrer">
                Shopify store
              </a>
            ) : null}
          </div>
          <div className="hero-metrics" aria-label="Product highlights">
            <span>
              <strong>US</strong>
              tracked delivery
            </span>
            <span>
              <strong>10</strong>
              day inspection
            </span>
            <span>
              <strong>Stripe</strong>
              secure checkout
            </span>
          </div>
        </div>
        <div className="hero-media">
          <ProductMedia product={heroProduct} />
        </div>
      </section>

      <section className="trust-strip" aria-label="Store policies">
        {trustItems.map((item) => (
          <div key={item.label}>
            <item.icon size={19} aria-hidden="true" />
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      {!isProductPage ? (
        <section className="collection-section" id="shop">
          <div className="section-heading section-heading--wide">
            <span className="eyebrow">Launch collection</span>
            <h2>Two products, one summer comfort story.</h2>
            <p>
              The fan earns the impulse buy. The blanket increases order value without stretching the brand into random
              gadgets.
            </p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ) : null}

      <section className="purchase-section" id="buy">
        <div className="purchase-copy">
          <span className="eyebrow">Checkout</span>
          <h2>{isProductPage ? activeProduct.tagline : "Choose the product that matches the moment."}</h2>
          <p>{isProductPage ? activeProduct.description : "Customers do not need a giant sale to believe a summer problem exists. Keep pricing credible, explain the tradeoffs, and let the 10-day guarantee reduce hesitation."}</p>
          <div className="mini-policies">
            <p>
              <Truck size={18} aria-hidden="true" />
              Tracked U.S. shipping details are confirmed during checkout.
            </p>
            <p>
              <ShieldCheck size={18} aria-hidden="true" />
              Stripe checkout is active; Shopify link is configurable.
            </p>
          </div>
        </div>
        <VariantCheckoutForm product={activeProduct} />
      </section>

      <section className="benefits-section">
        <div className="section-heading">
          <span className="eyebrow">Why buyers say yes</span>
          <h2>Specific use cases beat generic summer hype.</h2>
        </div>
        <div className="benefit-grid">
          {activeProduct.benefits.map((benefit, index) => {
            const icons = [Fan, BatteryCharging, Clock3, Droplets];
            const Icon = icons[index % icons.length];
            return (
              <article key={benefit}>
                <Icon size={22} aria-hidden="true" />
                <p>{benefit}</p>
              </article>
            );
          })}
        </div>
      </section>

      <section className="use-section">
        <div>
          <span className="eyebrow">Use cases</span>
          <h2>{activeProduct.category === "fan" ? "For the hot parts of ordinary days." : "For warm rooms and lighter sleep setups."}</h2>
        </div>
        <div className="use-list">
          {activeProduct.useCases.map((useCase) => (
            <span key={useCase}>{useCase}</span>
          ))}
        </div>
      </section>

      <section className="moment-section">
        <div className="section-heading section-heading--wide">
          <span className="eyebrow">Shop by moment</span>
          <h2>Make the use case obvious before the customer compares prices.</h2>
        </div>
        <div className="moment-grid">
          {[
            { title: "Hot commute", copy: "A compact fan for train platforms, parking lots, walks, and errands.", product: portableFan },
            { title: "Desk or patio", copy: "Personal airflow close by without setting up a full-size fan.", product: portableFan },
            { title: "Warm bedroom", copy: "A lighter layer when a comforter feels too heavy for summer.", product: coolingBlanket },
            { title: "Guest room reset", copy: "An easy seasonal add-on for visitors, dorms, and couch naps.", product: coolingBlanket }
          ].map((moment) => (
            <article key={moment.title} className="moment-card">
              <Image
                src={moment.product.images[0].src}
                alt={moment.product.images[0].alt}
                width={520}
                height={420}
                unoptimized
                sizes="(max-width: 800px) 100vw, 25vw"
              />
              <div>
                <h3>{moment.title}</h3>
                <p>{moment.copy}</p>
                <Link href={`/product/${moment.product.slug}`}>{moment.product.shortTitle}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="details-section" id="specs">
        <div className="specs-block">
          <span className="eyebrow">Specs</span>
          <h2>Detailed specifications</h2>
          <dl>
            {activeProduct.specs.map((spec) => (
              <div key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="shipping-block">
          <Plane size={24} aria-hidden="true" />
          <h2>10-day guarantee</h2>
          <p>
            Orders are intended for U.S. delivery with tracking. Delivery windows, taxes, and shipping options are
            confirmed at checkout before payment.
          </p>
          <p>
            The guarantee gives customers 10 days from delivery to inspect product feel, color, size, and condition.
            It does not cover misuse or normal preference changes after use.
          </p>
        </div>
      </section>

      <section className="proof-section">
        <div className="section-heading">
          <span className="eyebrow">Why it feels credible</span>
          <h2>Honest product pages convert better than oversized promises.</h2>
        </div>
        <div className="proof-grid">
          <article>
            <strong>Real specifications</strong>
            <p>Color, sizing, use cases, care expectations, and supplier verification notes are written plainly.</p>
          </article>
          <article>
            <strong>Clear limits</strong>
            <p>The fan is personal airflow and the blanket is a passive textile layer, not medical cooling equipment.</p>
          </article>
          <article>
            <strong>Checkout trust</strong>
            <p>Stripe checkout, U.S. delivery focus, tracked orders, and the 10-day inspection window sit close to purchase.</p>
          </article>
        </div>
      </section>

      <section className="spec-matrix">
        {activeProduct.detailedSpecs.map((group) => (
          <article key={group.group}>
            <h3>{group.group}</h3>
            <dl>
              {group.items.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </section>

      <section className="cross-sell-section">
        <div>
          <span className="eyebrow">Complete the summer kit</span>
          <h2>{secondaryProduct.title}</h2>
          <p>{secondaryProduct.description}</p>
          <Link className="secondary-link" href={`/product/${secondaryProduct.slug}`}>
            View {secondaryProduct.category === "fan" ? "fan" : "blanket"}
          </Link>
        </div>
        <ProductCard product={secondaryProduct} compact />
      </section>

      <section className="faq-section">
        <div className="section-heading">
          <span className="eyebrow">FAQ</span>
          <h2>Questions before checkout</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <footer className="site-footer">
        <strong>BreezePod</strong>
        <span>Professional summer comfort products for customers in the United States.</span>
      </footer>
    </main>
  );
}

function AnnouncementBar() {
  return (
    <div className="announcement-bar">
      <span>Tracked delivery</span>
      <span>10-day guarantee</span>
      <span>Secure Stripe checkout</span>
    </div>
  );
}

function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="BreezePod home">
        <span aria-hidden="true" />
        BreezePod
      </Link>
      <nav aria-label="Main navigation">
        <a href="/#shop">Shop</a>
        <a href="#specs">Specs</a>
        <Link href="/product/portable-turbo-fan">Product</Link>
      </nav>
    </header>
  );
}

function MobileBuyBar({ product }: { product: Product }) {
  return (
    <aside className="mobile-buy-bar" aria-label="Quick checkout">
      <div>
        <strong>{product.shortTitle}</strong>
        <span>From {formatMoney(product.priceCents)}</span>
      </div>
      <a href="#buy">Shop now</a>
    </aside>
  );
}

function ProductMedia({ product }: { product: Product }) {
  const [primary, secondary, tertiary] = product.images;

  return (
    <div className="photo-board">
      <div className="photo-board__main">
        <Image
          src={primary.src}
          alt={primary.alt}
          width={860}
          height={860}
          priority
          unoptimized
          sizes="(max-width: 900px) 100vw, 48vw"
        />
      </div>
      <div className="photo-board__caption">
        <strong>{product.shortTitle}</strong>
        <span>{product.tagline}</span>
      </div>
      {secondary ? (
        <div className="photo-board__mini photo-board__mini--top">
          <Image src={secondary.src} alt={secondary.alt} width={420} height={420} unoptimized sizes="180px" />
        </div>
      ) : null}
      {tertiary ? (
        <div className="photo-board__mini photo-board__mini--bottom">
          <Image src={tertiary.src} alt={tertiary.alt} width={420} height={420} unoptimized sizes="180px" />
        </div>
      ) : null}
    </div>
  );
}

function ProductCard({ product, compact = false }: { product: Product; compact?: boolean }) {
  const Icon = product.category === "fan" ? Fan : BedDouble;

  return (
    <article className={`product-card${compact ? " product-card--compact" : ""}`}>
      <Link href={`/product/${product.slug}`} className="product-card__media" aria-label={`View ${product.title}`}>
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          width={720}
          height={720}
          unoptimized
          sizes="(max-width: 800px) 100vw, 42vw"
        />
      </Link>
      <div className="product-card__body">
        <span className="product-card__category">
          <Icon size={17} aria-hidden="true" />
          {product.category === "fan" ? "Neck fan" : "Cooling blanket"}
        </span>
        <h3>{product.title}</h3>
        <p>{product.tagline}</p>
        <div className="product-card__footer">
          <strong>{formatMoney(product.priceCents)}</strong>
          <Link href={`/product/${product.slug}`}>View details</Link>
        </div>
      </div>
      {!compact ? <VariantCheckoutForm product={product} compact /> : null}
    </article>
  );
}
