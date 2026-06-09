import type { SlothVariant } from "@/components/Sloth";

/**
 * The companion is a quiet presence beacon — it doesn't chatter randomly.
 * These few lines fire only on real moments: the go-live celebration and
 * the occasional pet easter-egg.
 */
export const COMPANION_LINES = {
  live: [
    "she's LIVE rn! ▶",
    "stream just went on — come hang ♡",
    "twitch o'clock 🦥",
  ],
  pet: ["ily ♡", "*happy sloth noises*", "eee ✦"],
} as const;

/** Map the current route to a sloth mood/variant. */
export function moodByPath(pathname: string): SlothVariant {
  if (pathname === "/") return "heart";
  if (pathname.startsWith("/about")) return "princess";
  if (pathname.startsWith("/work")) return "glasses";
  if (pathname.startsWith("/schedule")) return "gaming";
  if (pathname.startsWith("/twitch-panels")) return "gaming";
  if (pathname.startsWith("/brand")) return "writing";
  if (pathname.startsWith("/media")) return "heart";
  return "peek";
}

export const TWITCH_URL = "https://twitch.tv/its_neluska";
export const INSTAGRAM_URL = "https://instagram.com/its_neluska";
