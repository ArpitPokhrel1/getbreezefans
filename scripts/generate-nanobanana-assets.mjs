import { GoogleGenAI } from "@google/genai";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const outDir = path.join(process.cwd(), "shopify-theme", "assets", "generated");

const prompts = [
  {
    file: "breezepod-fan-lifestyle.png",
    prompt:
      "Premium ecommerce lifestyle photograph for a portable handheld neck fan brand called BreezePod. A modern commuter placing a small white portable fan beside sunglasses and a stainless water bottle on a clean cafe table near a bright window. U.S. summer lifestyle, airy natural light, clean product advertising, no text, no logos, no cartoon style, realistic photography, soft shadows, high-end Shopify hero image."
  },
  {
    file: "breezepod-blanket-lifestyle.png",
    prompt:
      "Premium ecommerce lifestyle photograph for a lightweight summer cooling blanket. A gray breathable blanket draped naturally over a light linen sofa in a calm bright apartment, glass of water and book nearby, warm daylight, minimal interior, high-end home goods photography, no text, no logos, realistic textile detail, not cartoonish."
  },
  {
    file: "breezepod-bundle-flatlay.png",
    prompt:
      "High-end ecommerce flat lay showing a compact portable fan and a folded gray cooling blanket as a summer comfort kit. Off-white background, natural shadows, clean composition, lifestyle retail photography for a Shopify store, no text, no logos, no exaggerated discounts, realistic objects."
  }
];

async function main() {
  if (!process.env.GEMINI_API_KEY && !process.env.GOOGLE_API_KEY) {
    throw new Error("Set GEMINI_API_KEY or GOOGLE_API_KEY before generating Nano Banana assets.");
  }

  await mkdir(outDir, { recursive: true });
  const ai = new GoogleGenAI({});

  for (const item of prompts) {
    const response = await ai.models.generateContent({
      model: process.env.GEMINI_IMAGE_MODEL || "gemini-3.1-flash-image-preview",
      contents: item.prompt
    });

    const parts = response.candidates?.[0]?.content?.parts ?? [];
    const imagePart = parts.find((part) => part.inlineData?.data);

    if (!imagePart?.inlineData?.data) {
      console.warn(`No image returned for ${item.file}`);
      continue;
    }

    const buffer = Buffer.from(imagePart.inlineData.data, "base64");
    const outputPath = path.join(outDir, item.file);
    await writeFile(outputPath, buffer);
    console.log(`Generated ${outputPath}`);
  }
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
