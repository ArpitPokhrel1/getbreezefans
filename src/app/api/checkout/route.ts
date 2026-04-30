import { NextResponse } from "next/server";

export async function POST() {
  return NextResponse.json(
    {
      error: "Payment integration is disabled for the Trajun preview. Use the product availability request flow instead."
    },
    { status: 410 }
  );
}
