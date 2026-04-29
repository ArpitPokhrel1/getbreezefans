import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./SculptRitual.module.css";

const images = {
  hero: "https://images.pexels.com/photos/6621461/pexels-photo-6621461.jpeg",
  tool: "https://images.pexels.com/photos/6621473/pexels-photo-6621473.jpeg",
  guide: "https://images.pexels.com/photos/6621334/pexels-photo-6621334.jpeg",
  depuff: "https://images.pexels.com/photos/6621479/pexels-photo-6621479.jpeg",
  sculpt: "https://images.pexels.com/photos/6621482/pexels-photo-6621482.jpeg",
  absorb: "https://images.pexels.com/photos/6621329/pexels-photo-6621329.jpeg"
};

const trust = [
  "Authentic rose quartz",
  "Ships in 48 hours",
  "30-day guarantee",
  "2,400+ happy sculptors",
  "Beginner technique card"
];

const rituals = [
  {
    number: "01",
    title: "Drain the puff. Reveal the bone.",
    copy:
      "Your lymphatic system needs help moving fluid. Three slow passes down the neck and outward across the face make the ritual feel visible before the day starts.",
    image: images.depuff,
    alt: "Close-up skincare ritual for depuffing"
  },
  {
    number: "02",
    title: "Your jawline is in there.",
    copy:
      "Gua sha helps release facial tension from clenching, stress, and screen time. The effect is a softer face, a sharper-looking jaw, and a calmer morning routine.",
    image: images.sculpt,
    alt: "Warm jawline skincare photography"
  },
  {
    number: "03",
    title: "Make your serum work harder.",
    copy:
      "The tool turns face oil or serum into a deliberate massage step, spreading product evenly while encouraging circulation and a more consistent skincare habit.",
    image: images.absorb,
    alt: "Serum and skincare texture photography"
  }
];

const faqs = [
  {
    q: "What does a gua sha tool actually do for your face?",
    a: "A gua sha tool supports lymphatic drainage, visible depuffing, facial massage, jawline sculpting, and a brighter-looking glow when used consistently for 3 to 5 minutes."
  },
  {
    q: "How do you use gua sha for beginners?",
    a: "Apply face oil first, hold the stone nearly flat at a 15-degree angle, and stroke upward and outward. Start at the neck, then move to jaw, cheeks, brow, and forehead."
  },
  {
    q: "Is rose quartz gua sha better than jade?",
    a: "Rose quartz is gentle and naturally cool, which makes it a strong starting stone for sensitive skin and daily use. Jade is firmer and can suit experienced users."
  },
  {
    q: "What is included in Face Sculpting 101?",
    a: "The PDF includes a stroke map, 5-minute morning routine, oil pairing chart, common mistakes, advanced techniques, and a 30-day progress tracker."
  }
];

const reviews = [
  ["Mina A.", "dry, sensitive skin", "The edge feels smooth, not scratchy. My morning puffiness is down and the neck strokes finally make sense."],
  ["Talia R.", "melanin-rich combination skin", "No irritation and no weird residue from the stone. The PDF made the routine easy enough to keep doing."],
  ["Priya K.", "sensitive skin", "The rose quartz stays cool long enough for under-eyes. Gentle pressure works better than I expected."]
];

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Product",
      name: "Rose Quartz Gua Sha Facial Sculpting Tool",
      brand: { "@type": "Brand", name: "Sculpt Ritual" },
      description: "Authentic rose quartz gua sha for facial massage, depuffing, and beginner face sculpting rituals.",
      material: "Rose Quartz",
      offers: {
        "@type": "Offer",
        price: "28.00",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock"
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "2400"
      }
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a }
      }))
    }
  ]
};

export const metadata: Metadata = {
  title: "Sculpt Ritual Rose Quartz Gua Sha",
  description:
    "Shop Sculpt Ritual rose quartz gua sha and the Face Sculpting 101 PDF guide for a premium five-minute skincare ritual.",
  openGraph: {
    title: "Sculpt Ritual Rose Quartz Gua Sha",
    description: "A premium rose quartz gua sha storefront with a beginner PDF guide and bundle offer.",
    images: [{ url: images.hero, width: 1200, height: 800, alt: "Sculpt Ritual skincare ritual" }]
  }
};

export default function SculptRitualPage() {
  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav className={styles.nav} aria-label="Sculpt Ritual navigation">
        <Link className={styles.brand} href="/sculpt-ritual">
          Sculpt Ritual
        </Link>
        <div className={styles.navLinks}>
          <a href="#shop">Shop</a>
          <a href="#ritual">The Ritual</a>
          <a href="#bundle">Bundle</a>
          <Link href="/">BreezePod</Link>
        </div>
      </nav>

      <section className={styles.hero}>
        <div>
          <p className={styles.eyebrow}>The 5-minute ritual</p>
          <h1>
            that changes
            <span className={styles.italic}>your face.</span>
          </h1>
          <p>
            Rose quartz gua sha for women who take their skincare seriously, paired with a 28-page beginner guide that
            makes every stroke feel obvious.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#shop">
              Shop the Tool - $28
            </a>
            <a className={styles.secondary} href="#bundle">
              Get the bundle - $34
            </a>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image src={images.hero} alt="Woman using gua sha in warm morning light" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
          <div className={styles.floatingNote}>
            <span>Authentic rose quartz</span>
            <strong>$28</strong>
          </div>
        </div>
      </section>

      <section className={styles.trust} aria-label="Sculpt Ritual trust signals">
        {trust.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className={styles.products} id="shop">
        <div className={styles.sectionIntro}>
          <p className={styles.eyebrow}>Start here</p>
          <h2 className={styles.sectionTitle}>One tool. One guide. A ritual you can keep.</h2>
          <p>
            A simple two-product beauty offer: a physical gua sha for the bathroom counter and a digital guide for the
            first 30 days of practice.
          </p>
        </div>
        <article className={styles.card}>
          <div className={styles.imageTile}>
            <Image src={images.tool} alt="Rose quartz gua sha facial sculpting tool" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className={styles.cardBody}>
            <span className={styles.pill}>Bestseller</span>
            <h2>Rose Quartz Gua Sha Facial Tool</h2>
            <p>Sculpts jawline. Drains puffiness. Glows your skin.</p>
            <div className={styles.price}>
              <strong>$28</strong>
              <span>$45</span>
            </div>
            <a className={styles.primary} href="#bundle">
              Add to ritual
            </a>
          </div>
        </article>
        <article className={`${styles.card} ${styles.guideCard}`}>
          <div className={styles.imageTile}>
            <Image src={images.guide} alt="Face Sculpting 101 PDF guide with skincare products" fill sizes="(max-width: 900px) 100vw, 50vw" />
          </div>
          <div className={styles.cardBody}>
            <span className={styles.pill}>Digital - instant access</span>
            <h2>Face Sculpting 101 PDF Guide</h2>
            <p>28 pages. Every technique. Every mistake to avoid.</p>
            <div className={styles.price}>
              <strong>$12</strong>
              <span>$24</span>
            </div>
            <a className={styles.secondary} href="#bundle">
              Get both - use SCULPT15
            </a>
          </div>
        </article>
      </section>

      <section className={styles.ritual} id="ritual">
        {rituals.map((item) => (
          <article className={styles.ritualItem} key={item.number}>
            <div className={styles.ritualImage}>
              <Image src={item.image} alt={item.alt} width={720} height={620} sizes="(max-width: 900px) 100vw, 48vw" />
            </div>
            <div className={styles.ritualText}>
              <span>{item.number}</span>
              <h2>{item.title}</h2>
              <p>{item.copy}</p>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.bundle} id="bundle">
        <div className={styles.bundleBox}>
          <p className={styles.eyebrow}>Limited time offer</p>
          <h2>Get the tool AND the guide.</h2>
          <p>Buy the Rose Quartz Gua Sha and Face Sculpting 101 PDF together, then use code SCULPT15 to save 15%.</p>
          <div className={styles.priceRows}>
            <div>
              <span>Gua Sha Tool</span>
              <strong>$28.00</strong>
            </div>
            <div>
              <span>PDF Guide</span>
              <strong>$12.00</strong>
            </div>
            <div>
              <span>Bundle</span>
              <strong>$34.00</strong>
            </div>
          </div>
          <div className={styles.code}>
            <span>Discount code</span>
            <strong>SCULPT15</strong>
          </div>
        </div>
      </section>

      <section className={styles.faq}>
        <div className={styles.faqGrid}>
          <div>
            <p className={styles.eyebrow}>Learn</p>
            <h2 className={styles.sectionTitle}>Questions before the first stroke.</h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq) => (
              <details key={faq.q}>
                <summary>{faq.q}</summary>
                <p>{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.reviews}>
        <p className={styles.eyebrow}>Reviews</p>
        <h2 className={styles.sectionTitle}>Skin stories, not before-and-after pressure.</h2>
        <div className={styles.reviewGrid}>
          {reviews.map(([name, skin, text]) => (
            <article className={styles.review} key={name}>
              <span className={styles.stars} aria-label="Rated 5 out of 5">
                FIVE STARS
              </span>
              <p>{text}</p>
              <strong>{name}</strong>
              <small>{skin}</small>
            </article>
          ))}
        </div>
      </section>

      <footer className={styles.footer}>
        <strong>Sculpt Ritual</strong>
        <span>Rose quartz gua sha tools and beginner face sculpting guides.</span>
      </footer>
    </main>
  );
}
