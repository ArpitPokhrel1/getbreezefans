import { OrderStatus, type Prisma } from "@prisma/client";

import { getProduct } from "../data/product";
import { createCjOrder, isCjAutoPayEnabled, isCjAutoSubmitEnabled } from "../lib/cj";
import { prisma } from "../lib/db";

const orderInclude = {
  customer: true,
  shipping: true,
  items: true
} satisfies Prisma.OrderInclude;

export async function submitCjFulfillment(orderId: string) {
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: orderInclude
  });

  if (!order) {
    throw new Error(`Order not found: ${orderId}`);
  }

  if (!order.shipping) {
    await prisma.fulfillmentEvent.create({
      data: {
        orderId,
        provider: "cj",
        status: "SKIPPED",
        message: "Missing shipping address"
      }
    });
    return;
  }

  try {
    const product = getProduct(order.items[0]?.productId);
    const result = await createCjOrder(order, product);

    await prisma.fulfillmentEvent.create({
      data: {
        orderId,
        provider: "cj",
        status: result.status,
        requestJson: result.payload ? JSON.stringify(result.payload) : undefined,
        responseJson: result.response ? JSON.stringify(result.response) : undefined,
        message: result.message
      }
    });

    if (!result.skipped) {
      await prisma.order.update({
        where: { id: orderId },
        data: {
          status: OrderStatus.FULFILLMENT_SUBMITTED,
          cjStatus:
            isCjAutoSubmitEnabled() || isCjAutoPayEnabled()
              ? "CREATED_AUTO_FLOW_NOT_IMPLEMENTED"
              : "CREATED_PAYMENT_DISABLED"
        }
      });
    }
  } catch (error) {
    await prisma.order.update({
      where: { id: orderId },
      data: {
        status: OrderStatus.FULFILLMENT_FAILED,
        cjStatus: "CREATE_ORDER_FAILED"
      }
    });

    await prisma.fulfillmentEvent.create({
      data: {
        orderId,
        provider: "cj",
        status: "FAILED",
        message: error instanceof Error ? error.message : "Unknown CJ fulfillment error"
      }
    });
  }
}
