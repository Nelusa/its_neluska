import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "stream schedule";

export default function Image() {
  return renderOgCard({
    eyebrow: "live events",
    title: "catch me live",
    accent: "twitch",
    sloth: "sloth-gaming",
  });
}
