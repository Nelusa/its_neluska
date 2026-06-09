import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "about Neluška";

export default function Image() {
  return renderOgCard({
    eyebrow: "about me",
    title: "a little more context",
    accent: "rose",
    sloth: "sloth-dress",
  });
}
