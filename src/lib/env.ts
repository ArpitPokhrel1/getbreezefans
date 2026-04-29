import { z } from "zod";

const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("http://localhost:3000"),
  DATABASE_URL: z.string().min(1).default("file:./dev.db"),
  STRIPE_SECRET_KEY: z.string().optional(),
  STRIPE_WEBHOOK_SECRET: z.string().optional(),
  CJ_ACCESS_TOKEN: z.string().optional(),
  CJ_PLATFORM_TOKEN: z.string().optional(),
  CJ_PRODUCT_ID: z.string().optional(),
  CJ_VARIANT_ID: z.string().optional(),
  CJ_VARIANT_SKU: z.string().optional(),
  CJ_LOGISTIC_NAME: z.string().optional(),
  CJ_AUTO_SUBMIT: z.string().optional(),
  CJ_AUTO_PAY: z.string().optional()
});

export const env = envSchema.parse(process.env);

export function requireEnv(name: keyof typeof env) {
  const value = env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}
