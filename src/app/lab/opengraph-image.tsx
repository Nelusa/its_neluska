import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "the lab — Neluška's frontend experiments";

export default function Image() {
  return renderOgCard({
    eyebrow: "frontend experiments",
    title: "things I'm playing with",
    accent: "purple",
    sloth: "sloth-laptop",
  });
}
