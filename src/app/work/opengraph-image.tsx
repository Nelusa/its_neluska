import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "work by Neluška";

export default function Image() {
  return renderOgCard({
    eyebrow: "what I've built",
    title: "little things, lovingly made",
    accent: "yellow",
    sloth: "sloth-glasses",
  });
}
