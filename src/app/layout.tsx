import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "BreezePod Portable Turbo Fan",
    template: "%s | BreezePod"
  },
  description:
    "A compact portable turbo fan for commutes, sports days, travel, festivals, and hot work shifts across the United States."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-US">
      <body>{children}</body>
    </html>
  );
}
