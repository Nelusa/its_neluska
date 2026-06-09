import { OG_CONTENT_TYPE, OG_SIZE, renderOgCard } from "@/lib/og";

export const runtime = "nodejs";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;
export const alt = "neluska.dev — soft nerd princess";

export default function Image() {
  return renderOgCard({
    eyebrow: "soft nerd princess",
    title: "@its_neluska",
    accent: "purple",
    sloth: "sloth-hearts",
  });
}
