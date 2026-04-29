import {
  BatteryCharging,
  CheckCircle2,
  Clock3,
  Fan,
  PackageCheck,
  Plane,
  ShieldCheck,
  Sparkles,
  Truck
} from "lucide-react";
import Link from "next/link";
import { portableFan } from "@/data/product";
import { formatMoney } from "@/lib/money";
import { ProductIllustration } from "./ProductIllustration";
import { VariantCheckoutForm } from "./VariantCheckoutForm";

type StorefrontProps = {
  page: "home" | "product";
};

const trustItems = [
  { icon: ShieldCheck, label: "Secure checkout" },
  { icon: Truck, label: "U.S. delivery" },
  { icon: PackageCheck, label: "30-day returns" },
  { icon: CheckCircle2, label: "Tracked orders" }
];

const faqs = [
  {
    question: "Can I use it hands-free?",
    answer: "Yes. The compact body works handheld, on a desk, or with a lanyard for neck-style carry."
  },
  {
    question: "Is this an air conditioner?",
    answer: "No. It is a portable fan designed to move air nearby. It does not chill a room or replace medical cooling."
  },
  {
    question: "Where do you ship?",
    answer: "This storefront is built for customers in the United States, with tracked delivery details shown at checkout."
  },
  {
    question: "What is your return policy?",
    answer: "Unused or defective items can be returned within 30 days. Keep the packaging until you know the fan is right for you."
  }
];

export function Storefront({ page }: StorefrontProps) {
  const isProductPage = page === "product";

  return (
    <main>
      <Header />
      <section className="hero-section" id="top">
        <div className="hero-copy">
          <span className="eyebrow">Portable cooling for U.S. summer days</span>
          <h1>{portableFan.title}</h1>
          <p>
            A rechargeable personal fan for commutes, sports sidelines, theme parks, warehouse shifts, and travel days
            when still air gets uncomfortable.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#buy">
              Buy from {formatMoney(portableFan.priceCents)}
            </a>
            {!isProductPage ? (
              <Link className="secondary-link" href="/product/portable-turbo-fan">
                View product details
              </Link>
            ) : (
              <a className="secondary-link" href="#specs">
                See specs
              </a>
            )}
          </div>
          <div className="hero-metrics" aria-label="Product highlights">
            <span>
              <strong>5</strong>
              speeds
            </span>
            <span>
              <strong>USB</strong>
              rechargeable
            </span>
            <span>
              <strong>3</strong>
              pack options
            </span>
          </div>
        </div>
        <div className="hero-media">
          <ProductIllustration />
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

      <section className="purchase-section" id="buy">
        <div className="purchase-copy">
          <span className="eyebrow">Pack pricing</span>
          <h2>One for your bag, extras for the people who borrow yours.</h2>
          <p>
            Start with a single fan or lower the per-fan cost with a 2-pack or 3-pack. Every option uses the same Carbon
            Black fan body.
          </p>
          <div className="mini-policies">
            <p>
              <Truck size={18} aria-hidden="true" />
              Tracked U.S. shipping details are confirmed during checkout.
            </p>
            <p>
              <ShieldCheck size={18} aria-hidden="true" />
              Checkout posts directly to the secure order endpoint.
            </p>
          </div>
        </div>
        <VariantCheckoutForm />
      </section>

      <section className="benefits-section">
        <div className="section-heading">
          <span className="eyebrow">Why it works</span>
          <h2>Small enough to carry. Strong enough to matter.</h2>
        </div>
        <div className="benefit-grid">
          {portableFan.benefits.map((benefit, index) => {
            const icons = [Fan, BatteryCharging, Clock3, Sparkles];
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
          <h2>Built for the hot parts of ordinary days.</h2>
        </div>
        <div className="use-list">
          {portableFan.useCases.map((useCase) => (
            <span key={useCase}>{useCase}</span>
          ))}
        </div>
      </section>

      <section className="details-section" id="specs">
        <div className="specs-block">
          <span className="eyebrow">Specs</span>
          <h2>What is included in the design</h2>
          <dl>
            {portableFan.specs.map((spec) => (
              <div key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="shipping-block">
          <Plane size={24} aria-hidden="true" />
          <h2>Shipping and returns</h2>
          <p>
            Orders are intended for U.S. delivery with tracking. Delivery windows, taxes, and shipping options are
            confirmed at checkout before payment.
          </p>
          <p>
            Returns are accepted within 30 days for unused items or verified defects. This product is a fan, not a
            medical device or air conditioner.
          </p>
        </div>
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
        <span>Portable cooling for customers in the United States.</span>
      </footer>
    </main>
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
        <a href="#buy">Shop</a>
        <a href="#specs">Specs</a>
        <Link href="/product/portable-turbo-fan">Product</Link>
      </nav>
    </header>
  );
}
