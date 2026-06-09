/**
 * Neluška's "now board" — the little status the sloth companion shows when
 * she isn't live on Twitch (i.e. most of the time). Instagram-first, because
 * IG is the main channel and Twitch is the occasional bonus.
 *
 * ── How to update ────────────────────────────────────────────────────────
 * Just edit the values below whenever something changes. Set any field to
 * `null` to hide it. 2-minute job, full control over the wording.
 *
 * ── How to automate later (optional) ─────────────────────────────────────
 * The `instagram` field is shaped to match what a service like Behold.so
 * (https://behold.so) returns for your latest post (caption + permalink +
 * optional image). When you want auto-updating, connect IG to Behold, then
 * swap this static value for a fetch of their JSON feed — the companion UI
 * stays exactly the same.
 */

export type NowBoard = {
  /** OOTD / current vibe — one soft line. */
  vibe: string | null;
  /** What you're currently building / coding. */
  building: string | null;
  /** Latest Instagram post (manual for now, Behold-shaped for later). */
  instagram: {
    caption: string;
    url: string;
    /** Optional image URL (auto-filled later if you wire up IG). */
    image?: string;
  } | null;
};

export const now: NowBoard = {
  vibe: "today: lavender knit + matcha, debugging in bed ♡",
  building: "polishing this very site ✦",
  instagram: {
    caption: "new reel — cozy desk reset 🦥",
    url: "https://instagram.com/its_neluska",
  },
};
