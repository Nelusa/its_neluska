import type { SlothVariant } from "@/components/Sloth";

export type ProjectStatus = "live" | "wip" | "archived";
export type ProjectAccent = "purple" | "rose" | "yellow" | "twitch";

export interface Project {
  slug: string;
  title: string;
  blurb: string;
  tech: string[];
  year: string;
  status: ProjectStatus;
  href: string;
  repoHref?: string;
  accent: ProjectAccent;
  slothVariant?: SlothVariant;
}

export const projects: Project[] = [
  {
    slug: "saturnin",
    title: "Saturnin",
    blurb:
      "Second brain app built for my diploma thesis — notes, knowledge graphs, and personal organization tools, all softly polished.",
    tech: ["next.js", "typescript", "mdx", "radix-ui"],
    year: "2025",
    status: "live",
    href: "https://demo.saturnin.app/",
    repoHref: "https://github.com/Nelusa/Saturnin",
    accent: "purple",
    slothVariant: "writing",
  },
  {
    slug: "frystatska-galerie",
    title: "Galerie Frýštát",
    blurb:
      "Website for a small Czech art gallery — content-managed through Sanity, designed to feel curated and quiet.",
    tech: ["next.js", "typescript", "sanity", "shadcn"],
    year: "2025–2026",
    status: "live",
    href: "https://frystatska-galerie.vercel.app/",
    repoHref: "https://github.com/Nelusa/frystatska-galerie",
    accent: "rose",
    slothVariant: "painting",
  },
  {
    slug: "lol-birthday-invite",
    title: "Epic Birthday Party",
    blurb:
      'LoL-themed interactive birthday invitation for a friend — a "summoning" loader, in-game vibes, a soft sprinkle of cozy chaos.',
    tech: ["next.js", "typescript", "framer-motion"],
    year: "2024",
    status: "live",
    href: "https://sveccz-epic-bday-party.vercel.app/",
    repoHref: "https://github.com/Nelusa/lol-birthday-invite",
    accent: "yellow",
    slothVariant: "gaming",
  },
  {
    slug: "anniversary-gallery",
    title: "Neluška + Tomík",
    blurb:
      'Anniversary gift for my boyfriend — interactive timeline of 24 "firsts" with 3D hover effects and tiny chapter stories.',
    tech: ["react", "typescript", "framer-motion"],
    year: "2025",
    status: "live",
    href: "https://neluska-tomik-gallery.vercel.app/",
    repoHref: "https://github.com/Nelusa/anniversary-gallery",
    accent: "rose",
    slothVariant: "heart",
  },
  {
    slug: "neluska-brand-kit",
    title: "neluska.dev brand kit",
    blurb:
      "Soft nerd princess brand system you're looking at right now — colors, type, sloth iconography, a journal-style brand kit page.",
    tech: ["next.js", "typescript", "tailwind"],
    year: "2026",
    status: "live",
    href: "/brand",
    accent: "purple",
    slothVariant: "princess",
  },
];
