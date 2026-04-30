import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  devIndicators: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cjdropshipping.com"
      },
      {
        protocol: "https",
        hostname: "*.cjdropshipping.com"
      },
      {
        protocol: "https",
        hostname: "img.tvcmall.com"
      },
      {
        protocol: "https",
        hostname: "assets.wfcdn.com"
      },
      {
        protocol: "https",
        hostname: "bedsurehome.com"
      },
      {
        protocol: "https",
        hostname: "images.pexels.com"
      },
      {
        protocol: "https",
        hostname: "cdn.shopify.com"
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com"
      }
    ]
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=()"
          }
        ]
      }
    ];
  }
};

export default nextConfig;
