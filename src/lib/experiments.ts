export type ExperimentAccent = "purple" | "rose" | "yellow" | "twitch";

export interface Experiment {
  slug: string;
  title: string;
  blurb: string;
  tech: string[];
  year: string;
  href: string;
  accent: ExperimentAccent;
  /** Single emoji or symbol shown as the card's preview glyph. */
  glyph?: string;
}

export const experiments: Experiment[] = [
  {
    slug: "room",
    title: "cozy 3D room",
    blurb:
      "An interactive R3F desk scene — laptop, monitor, mic, ring light, sloth lamp. Drag to look around, click objects to navigate. Built from my own 3D template.",
    tech: ["three.js", "r3f", "drei"],
    year: "2026",
    href: "/lab/room",
    accent: "purple",
    glyph: "🪑",
  },
];
