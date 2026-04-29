import Link from "next/link";
import type { Metadata } from "next";
import { findContentPage } from "@/content/portable-fan-pages";

const page = findContentPage("portable-neck-fan-buying-guide");

export const metadata: Metadata = {
  title: "Portable Neck Fan Buying Guide",
  description:
    "Compare portable neck fans, handheld fans, and lanyard-ready mini fans for summer commutes, events, travel, and work bags.",
  alternates: { canonical: "/guides/portable-neck-fan-buying-guide" }
};

export default function PortableNeckFanBuyingGuidePage() {
  if (!page) return null;

  return (
    <main style={styles.main}>
      <article style={styles.article}>
        <p style={styles.eyebrow}>Buying Guide</p>
        <h1 style={styles.h1}>{page.title}</h1>
        <p style={styles.lead}>{page.description}</p>
        {page.sections.map((section) => (
          <section key={section.heading} style={styles.section}>
            <h2 style={styles.h2}>{section.heading}</h2>
            <p style={styles.p}>{section.body}</p>
            {section.bullets ? (
              <ul style={styles.list}>
                {section.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </section>
        ))}
        <nav style={styles.links} aria-label="Related pages">
          <Link href="/product/portable-turbo-fan">Shop the portable turbo fan</Link>
          <Link href="/blog/handheld-vs-neck-fan">Compare handheld vs neck fan</Link>
          <Link href="/guides/festival-commute-cooling">Read the festival and commute guide</Link>
        </nav>
      </article>
    </main>
  );
}

const styles = {
  main: { padding: "48px 20px", background: "var(--paper)" },
  article: { maxWidth: 860, margin: "0 auto", lineHeight: 1.65 },
  eyebrow: { color: "var(--accent-dark)", fontWeight: 700, margin: "0 0 12px" },
  h1: { fontSize: "clamp(2rem, 5vw, 4rem)", lineHeight: 1.05, margin: "0 0 18px" },
  lead: { fontSize: "1.18rem", color: "var(--muted)", margin: "0 0 34px" },
  section: { padding: "26px 0", borderTop: "1px solid var(--line)" },
  h2: { fontSize: "1.45rem", margin: "0 0 10px" },
  p: { margin: 0, color: "var(--ink)" },
  list: { margin: "14px 0 0", paddingLeft: 22 },
  links: { display: "grid", gap: 12, paddingTop: 26, borderTop: "1px solid var(--line)", color: "var(--accent-dark)", fontWeight: 700 }
} as const;

