import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "neluska.dev brand kit";

export default function Image() {
  return renderOgCard({
    eyebrow: "brand kit · 2026",
    title: "the soft nerd journal",
    accent: "purple",
    sloth: "sloth-writing",
  });
}
