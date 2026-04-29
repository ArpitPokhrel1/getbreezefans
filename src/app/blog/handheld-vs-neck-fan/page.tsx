import Link from "next/link";
import type { Metadata } from "next";
import { findContentPage } from "@/content/portable-fan-pages";

const page = findContentPage("handheld-vs-neck-fan");

export const metadata: Metadata = {
  title: "Handheld vs Neck Fan",
  description:
    "Compare handheld fans and neck fans for commuting, festivals, sports sidelines, desk use, travel bags, and hot work breaks.",
  alternates: { canonical: "/blog/handheld-vs-neck-fan" }
};

export default function HandheldVsNeckFanPage() {
  if (!page) return null;

  return (
    <main style={styles.main}>
      <article style={styles.article}>
        <p style={styles.eyebrow}>Comparison</p>
        <h1 style={styles.h1}>{page.title}</h1>
        <p style={styles.lead}>{page.description}</p>
        {page.sections.map((section) => (
          <section key={section.heading} style={styles.section}>
            <h2 style={styles.h2}>{section.heading}</h2>
            <p style={styles.p}>{section.body}</p>
          </section>
        ))}
        <nav style={styles.links} aria-label="Related pages">
          <Link href="/product/portable-turbo-fan">Shop a hybrid handheld and neck fan</Link>
          <Link href="/guides/portable-neck-fan-buying-guide">Read the buying guide</Link>
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
  p: { margin: 0 },
  links: { display: "grid", gap: 12, paddingTop: 26, borderTop: "1px solid var(--line)", color: "var(--accent-dark)", fontWeight: 700 }
} as const;

