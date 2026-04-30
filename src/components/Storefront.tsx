"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Box, Gem, Menu, Search, ShieldCheck, SlidersHorizontal, Sparkles, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { featuredProduct, getProduct, products, type Product } from "@/data/product";
import { formatMoney } from "@/lib/money";
import { VariantCheckoutForm } from "./VariantCheckoutForm";

type StorefrontProps = {
  page: "home" | "product";
  productSlug?: string;
};

const collections = ["All", "Lighting", "Electronics", "Outerwear", "DIY Objects", "Home Decor", "Bags"];

const fadeUp = {
  hidden: { opacity: 0, y: 44, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
};

export function Storefront({ page, productSlug }: StorefrontProps) {
  const reduceMotion = useReducedMotion();
  const isProductPage = page === "product";
  const activeProduct = isProductPage ? getProduct(productSlug) : featuredProduct;
  const [category, setCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  const visibleProducts = useMemo(
    () => products.filter((product) => category === "All" || product.category === category),
    [category]
  );

  return (
    <main>
      <Header open={menuOpen} onToggle={() => setMenuOpen((current) => !current)} />
      {menuOpen ? <MobileMenu onClose={() => setMenuOpen(false)} /> : null}

      <section className="hero-section" id="top">
        <motion.div
          className="hero-copy"
          initial={reduceMotion ? false : "hidden"}
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
        >
          <span className="eyebrow">Trajun Digital Atelier</span>
          <h1>
            Curated objects from Shopify data, staged like a private 3D gallery.
          </h1>
          <p>
            Trajun turns the fetched Shopify product list and the Stitch atelier direction into a cinematic ecommerce
            storefront. Payments are paused; product requests stay intentional until checkout is approved.
          </p>
          <div className="hero-actions">
            <a className="primary-link" href="#collection">
              <span>View collection</span>
              <span className="button-disc">
                <ArrowUpRight size={16} strokeWidth={1.5} aria-hidden="true" />
              </span>
            </a>
            <Link className="secondary-link" href={`/product/${activeProduct.slug}`}>
              Featured object
            </Link>
          </div>
          <div className="hero-metrics" aria-label="Catalog signals">
            <span>
              <strong>{products.length}</strong>
              products synced
            </span>
            <span>
              <strong>{products.filter((product) => product.status === "ACTIVE").length}</strong>
              active listings
            </span>
            <span>
              <strong>0</strong>
              payment buttons
            </span>
          </div>
        </motion.div>

        <motion.div
          className="hero-media"
          initial={reduceMotion ? false : { opacity: 0, y: 30, rotateX: 8 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1, ease: [0.32, 0.72, 0, 1], delay: 0.1 }}
        >
          <ProductStage product={activeProduct} />
        </motion.div>
      </section>

      <section className="trust-strip" aria-label="Store policies">
        <div>
          <ShieldCheck size={18} strokeWidth={1.5} aria-hidden="true" />
          <span>Payment-free preview</span>
        </div>
        <div>
          <Box size={18} strokeWidth={1.5} aria-hidden="true" />
          <span>Shopify CLI sourced</span>
        </div>
        <div>
          <Gem size={18} strokeWidth={1.5} aria-hidden="true" />
          <span>Stitch atelier styling</span>
        </div>
        <div>
          <Sparkles size={18} strokeWidth={1.5} aria-hidden="true" />
          <span>Framer Motion 3D</span>
        </div>
      </section>

      {!isProductPage ? (
        <>
          <section className="collection-section" id="collection">
            <div className="section-heading section-heading--wide">
              <span className="eyebrow">Live catalog</span>
              <h2>Objects pulled from the Shopify Admin API, edited for a premium storefront.</h2>
              <p>
                Product titles, prices, variants, media, statuses, and details were fetched through Shopify CLI. The
                visual system comes from the Trajun Stitch project.
              </p>
            </div>
            <div className="filter-rail" aria-label="Collection filters">
              <SlidersHorizontal size={17} strokeWidth={1.5} aria-hidden="true" />
              {collections.map((item) => (
                <button className={item === category ? "is-active" : ""} key={item} type="button" onClick={() => setCategory(item)}>
                  {item}
                </button>
              ))}
            </div>
            <div className="product-grid">
              {visibleProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          </section>
          <AtelierCharacter />
        </>
      ) : (
        <ProductDetail product={activeProduct} />
      )}

      <section className="proof-section">
        <div className="section-heading">
          <span className="eyebrow">Automation notes</span>
          <h2>Built from three connected sources.</h2>
        </div>
        <div className="proof-grid">
          <article>
            <strong>Shopify CLI</strong>
            <p>Fetched live product list, variants, prices, statuses, and media from `petchews-2.myshopify.com`.</p>
          </article>
          <article>
            <strong>Stitch MCP</strong>
            <p>Used the existing “Trajun Premium 3D Storefront” project as the visual source of truth.</p>
          </article>
          <article>
            <strong>SEO layer</strong>
            <p>Metadata, product semantics, headings, canonical routes, and sitemap entries now target Trajun.</p>
          </article>
        </div>
      </section>

      <footer className="site-footer">
        <strong>Trajun</strong>
        <span>Digital atelier ecommerce preview. No payment integration is active.</span>
      </footer>
    </main>
  );
}

function Header({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Trajun home">
        <span aria-hidden="true">T</span>
        Trajun
      </Link>
      <nav aria-label="Main navigation">
        <a href="/#collection">Collection</a>
        <a href="/#sources">Sources</a>
        <Link href="/product/rotating-moon-desk-lamp">Moon Lamp</Link>
      </nav>
      <button className="icon-button" type="button" aria-label={open ? "Close menu" : "Open menu"} onClick={onToggle}>
        {open ? <X size={18} strokeWidth={1.5} aria-hidden="true" /> : <Menu size={18} strokeWidth={1.5} aria-hidden="true" />}
      </button>
    </header>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <motion.div
      className="mobile-menu"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
    >
      {["Collection", "Featured", "Sources"].map((item, index) => (
        <motion.a
          href={item === "Featured" ? "/product/rotating-moon-desk-lamp" : `/#${item.toLowerCase()}`}
          key={item}
          onClick={onClose}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08 * index, duration: 0.6, ease: [0.32, 0.72, 0, 1] }}
        >
          {item}
        </motion.a>
      ))}
    </motion.div>
  );
}

function ProductStage({ product }: { product: Product }) {
  return (
    <div className="stage-shell">
      <motion.div
        className="stage-card"
        animate={{ rotateY: [-6, 6, -6], rotateX: [2, -2, 2] }}
        transition={{ duration: 8, repeat: Infinity, ease: [0.45, 0, 0.2, 1] }}
      >
        <div className="stage-orbit" aria-hidden="true" />
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          width={product.images[0].width}
          height={product.images[0].height}
          priority
          unoptimized
          sizes="(max-width: 900px) 92vw, 42vw"
        />
        <div className="stage-caption">
          <span>{product.category}</span>
          <strong>{product.shortTitle}</strong>
          <small>{formatMoney(product.priceCents)}</small>
        </div>
      </motion.div>
    </div>
  );
}

function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <motion.article
      className={`product-card${index % 5 === 0 ? " product-card--feature" : ""}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.8, delay: Math.min(index * 0.05, 0.3), ease: [0.32, 0.72, 0, 1] }}
    >
      <Link href={`/product/${product.slug}`} className="product-card__media" aria-label={`View ${product.title}`}>
        <Image
          src={product.images[0].src}
          alt={product.images[0].alt}
          width={product.images[0].width}
          height={product.images[0].height}
          unoptimized
          sizes="(max-width: 800px) 100vw, 36vw"
        />
      </Link>
      <div className="product-card__body">
        <span className="product-card__category">
          {product.category}
          <small>{product.status}</small>
        </span>
        <h3>{product.title}</h3>
        <p>{product.tagline}</p>
        <div className="product-card__footer">
          <strong>{formatMoney(product.priceCents)}</strong>
          <Link href={`/product/${product.slug}`}>
            Inspect <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}

function ProductDetail({ product }: { product: Product }) {
  return (
    <>
      <section className="purchase-section" id="request">
        <div className="purchase-copy">
          <span className="eyebrow">Product detail</span>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className="mini-policies">
            {product.bestFor.map((item) => (
              <p key={item}>
                <Search size={17} strokeWidth={1.5} aria-hidden="true" />
                {item}
              </p>
            ))}
          </div>
        </div>
        <VariantCheckoutForm product={product} />
      </section>

      <section className="details-section" id="specs">
        <div className="specs-block">
          <span className="eyebrow">Inside data</span>
          <h2>Specifications</h2>
          <dl>
            {product.specs.map((spec) => (
              <div key={spec.label}>
                <dt>{spec.label}</dt>
                <dd>{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="shipping-block">
          <Box size={22} strokeWidth={1.5} aria-hidden="true" />
          <h2>Features</h2>
          {product.features.map((feature) => (
            <p key={feature}>{feature}</p>
          ))}
        </div>
      </section>
    </>
  );
}

function AtelierCharacter() {
  return (
    <section className="character-section" id="sources" aria-label="Animated Trajun curator">
      <div className="section-heading">
        <span className="eyebrow">Motion system</span>
        <h2>A small 3D curator keeps the gallery alive without blocking the products.</h2>
      </div>
      <motion.div
        className="curator"
        initial={{ opacity: 0, y: 36 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.32, 0.72, 0, 1] }}
      >
        <motion.span className="curator__head" animate={{ y: [-5, 5, -5] }} transition={{ duration: 3.4, repeat: Infinity, ease: [0.45, 0, 0.2, 1] }} />
        <motion.span className="curator__body" animate={{ rotateY: [-10, 10, -10] }} transition={{ duration: 4.8, repeat: Infinity, ease: [0.45, 0, 0.2, 1] }} />
        <motion.span className="curator__wand" animate={{ rotate: [-8, 8, -8] }} transition={{ duration: 3.2, repeat: Infinity, ease: [0.45, 0, 0.2, 1] }} />
        <p>Stitch visuals, Shopify listings, and SEO structure coordinated into one Trajun storefront.</p>
      </motion.div>
    </section>
  );
}
