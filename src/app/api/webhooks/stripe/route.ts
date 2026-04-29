import { OrderStatus } from "@prisma/client";
import { NextResponse } from "next/server";
import type Stripe from "stripe";

import { prisma } from "@/lib/db";
import { env, requireEnv } from "@/lib/env";
import { getStripe } from "@/lib/stripe";
import { submitCjFulfillment } from "@/server/fulfillment";

export const dynamic = "force-dynamic";

function readShipping(session: Stripe.Checkout.Session) {
  const details = session.customer_details;
  const address = details?.address;

  if (!details?.name || !address?.line1 || !address.city || !address.state || !address.postal_code) {
    return null;
  }

  return {
    name: details.name,
    line1: address.line1,
    line2: address.line2,
    city: address.city,
    state: address.state,
    postalCode: address.postal_code,
    countryCode: address.country ?? "US",
    phone: details.phone
  };
}

async function handleCheckoutCompleted(session: Stripe.Checkout.Session) {
  const orderId = session.metadata?.orderId;

  if (!orderId) {
    return;
  }

  const customerEmail = session.customer_details?.email;
  const customerName = session.customer_details?.name;
  const customerPhone = session.customer_details?.phone;
  const shipping = readShipping(session);

  const customer = customerEmail
    ? await prisma.customer.upsert({
        where: { email: customerEmail },
        update: {
          name: customerName,
          phone: customerPhone
        },
        create: {
          email: customerEmail,
          name: customerName,
          phone: customerPhone
        }
      })
    : null;

  await prisma.order.update({
    where: { id: orderId },
    data: {
      status: OrderStatus.FULFILLMENT_PENDING,
      customerId: customer?.id,
      stripeCheckoutSession: session.id,
      stripePaymentIntent:
        typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id,
      shipping: shipping
        ? {
            upsert: {
              create: shipping,
              update: shipping
            }
          }
        : undefined
    }
  });

  await prisma.fulfillmentEvent.create({
    data: {
      orderId,
      provider: "stripe",
      status: "PAID",
      message: "checkout.session.completed"
    }
  });

  if (env.CJ_ACCESS_TOKEN) {
    await submitCjFulfillment(orderId);
    return;
  }

  await prisma.fulfillmentEvent.create({
    data: {
      orderId,
      provider: "cj",
      status: "SKIPPED",
      message: "CJ_ACCESS_TOKEN is not set"
    }
  });
}

export async function POST(request: Request) {
  const signature = request.headers.get("stripe-signature");

  if (!signature) {
    return NextResponse.json({ error: "Missing Stripe signature" }, { status: 400 });
  }

  let event: Stripe.Event;

  try {
    event = getStripe().webhooks.constructEvent(
      await request.text(),
      signature,
      requireEnv("STRIPE_WEBHOOK_SECRET")
    );
  } catch {
    return NextResponse.json({ error: "Invalid Stripe signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    await handleCheckoutCompleted(event.data.object);
  }

  return NextResponse.json({ received: true });
}
