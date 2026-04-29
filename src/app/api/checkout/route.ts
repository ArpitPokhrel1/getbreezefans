import { NextResponse } from "next/server";
import { ZodError } from "zod";

import { portableFan } from "@/data/product";
import { prisma } from "@/lib/db";
import { env } from "@/lib/env";
import { getSiteUrl } from "@/lib/site-url";
import { getStripe } from "@/lib/stripe";
import { checkoutRequestSchema, createOrderNumber, getCheckoutVariant } from "@/server/checkout";

async function readCheckoutBody(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return request.json();
  }

  const formData = await request.formData();
  return {
    variantId: formData.get("variantId"),
    quantity: formData.get("quantity")
  };
}

function wantsBrowserRedirect(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";
  return contentType.includes("application/x-www-form-urlencoded") || contentType.includes("multipart/form-data");
}

export async function POST(request: Request) {
  try {
    const body = checkoutRequestSchema.parse(await readCheckoutBody(request));
    const variant = getCheckoutVariant(body.variantId);
    const subtotalCents = variant.priceCents * body.quantity;

    const order = await prisma.order.create({
      data: {
        orderNumber: createOrderNumber(),
        subtotalCents,
        totalCents: subtotalCents,
        currency: portableFan.currency,
        items: {
          create: {
            productId: portableFan.id,
            variantId: variant.id,
            title: `${portableFan.title} - ${variant.label}`,
            quantity: variant.quantity * body.quantity,
            unitCents: variant.priceCents,
            totalCents: subtotalCents,
            cjProductId: portableFan.cjProductId,
            cjVariantId: variant.cjVariantId ?? env.CJ_VARIANT_ID,
            cjSku: variant.cjSku ?? env.CJ_VARIANT_SKU
          }
        }
      }
    });

    const stripe = getStripe();
    const siteUrl = getSiteUrl();
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      success_url: `${siteUrl}/product/${portableFan.slug}?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/product/${portableFan.slug}?checkout=cancelled`,
      shipping_address_collection: {
        allowed_countries: ["US"]
      },
      metadata: {
        orderId: order.id,
        variantId: variant.id
      },
      line_items: [
        {
          quantity: body.quantity,
          price_data: {
            currency: portableFan.currency,
            unit_amount: variant.priceCents,
            product_data: {
              name: `${portableFan.shortTitle} - ${variant.label}`,
              metadata: {
                productId: portableFan.id,
                variantId: variant.id
              }
            }
          }
        }
      ]
    });

    await prisma.order.update({
      where: { id: order.id },
      data: { stripeCheckoutSession: session.id }
    });

    if (wantsBrowserRedirect(request) && session.url) {
      return NextResponse.redirect(session.url, 303);
    }

    return NextResponse.json({ orderId: order.id, checkoutUrl: session.url });
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        { error: "Invalid checkout request", issues: error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    const message = error instanceof Error ? error.message : "Checkout failed";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
