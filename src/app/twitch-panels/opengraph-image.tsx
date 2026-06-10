import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "Neluška's Twitch panels";

export default function Image() {
  return renderOgCard({
    eyebrow: "twitch · about panels",
    title: "the cozy six-panel set",
    accent: "twitch",
    sloth: "sloth-gaming",
  });
}
