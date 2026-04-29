const LOCAL_SITE_URL = "http://localhost:3000";

export function getSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL ?? process.env.VERCEL_URL;

  if (vercelHost) {
    if (!configured || configured.includes("localhost") || configured.includes("127.0.0.1")) {
      return `https://${vercelHost}`;
    }
  }

  return configured ?? LOCAL_SITE_URL;
}
