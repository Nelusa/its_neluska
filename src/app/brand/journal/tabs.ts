import type { ClaudeSlothVariant } from "../sections/primitives";

export type TabKey = "me" | "look" | "post" | "live" | "grow" | "safe";

export const TAB_ORDER: TabKey[] = ["me", "look", "post", "live", "grow", "safe"];

export type TabMeta = {
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  bg: string;
  accent: string;
  slothVariant: ClaudeSlothVariant;
  icon: string;
};

export const TAB_META: Record<TabKey, TabMeta> = {
  me: {
    label: "me",
    eyebrow: "chapter 01 · identity",
    title: "who I am",
    subtitle: "The voice, the words, the feeling. Everything starts here.",
    bg: "var(--brand-purple-50)",
    accent: "var(--brand-purple-500)",
    slothVariant: "heart",
    icon: "✦",
  },
  look: {
    label: "look",
    eyebrow: "chapter 02 · visuals",
    title: "how it looks",
    subtitle: "Colors, type, motifs — the visual DNA.",
    bg: "var(--brand-rose-50)",
    accent: "var(--brand-rose-400)",
    slothVariant: "painting",
    icon: "🎨",
  },
  post: {
    label: "post",
    eyebrow: "chapter 03 · instagram",
    title: "what I post",
    subtitle: "Templates, reels, stories, calendar — the whole IG system.",
    bg: "var(--brand-yellow-50)",
    accent: "var(--brand-purple-500)",
    slothVariant: "writing",
    icon: "📸",
  },
  live: {
    label: "live",
    eyebrow: "chapter 04 · twitch",
    title: "when I stream",
    subtitle: "Overlays, panels, alerts — everything for stream nights.",
    bg: "var(--brand-twitch-deep)",
    accent: "var(--brand-yellow-text)",
    slothVariant: "gaming",
    icon: "▶",
  },
  grow: {
    label: "grow",
    eyebrow: "chapter 05 · business",
    title: "how I grow",
    subtitle: "KPIs, collabs, monetization — the long game.",
    bg: "var(--brand-purple-100)",
    accent: "var(--brand-purple-500)",
    slothVariant: "glasses",
    icon: "📈",
  },
  safe: {
    label: "safe",
    eyebrow: "chapter 06 · safety",
    title: "how I stay safe",
    subtitle: "Crisis playbook, community rules, privacy.",
    bg: "var(--brand-pink-50)",
    accent: "var(--brand-pink-400)",
    slothVariant: "camping",
    icon: "🛡",
  },
};

export function isTabKey(value: string | null | undefined): value is TabKey {
  return !!value && (TAB_ORDER as string[]).includes(value);
}
