export type StreamSlot = {
  day: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
  time: string;
  duration: number;
  category: "lol" | "dev" | "irl" | "chill";
  title: string;
  emoji: string;
  /**
   * Optional concrete ISO date-time for the next occurrence of this slot.
   * When present, the companion shows a live countdown to it. When absent,
   * the slot is treated as "date TBA — announced on Instagram first".
   */
  date?: string;
};

/** Placeholder row – swap for real slots when I schedule a stream (IG stories are the announcement layer). */
export const schedule: StreamSlot[] = [
  {
    day: "sat",
    time: "20:00",
    duration: 120,
    category: "chill",
    title: "next live – date TBA (watch IG)",
    emoji: "✨",
    // date: "2026-06-13T20:00:00+02:00", // ← fill in to light up the countdown
  },
];

export type NextStream = { slot: StreamSlot; date: Date | null };

/**
 * Soonest upcoming stream. Prefers slots with a concrete future `date`
 * (sorted by closeness); otherwise falls back to the first slot as "TBA".
 */
export function getNextStream(now: Date = new Date()): NextStream | null {
  const dated = schedule
    .filter((s) => s.date)
    .map((s) => ({ slot: s, date: new Date(s.date as string) }))
    .filter((x) => !Number.isNaN(x.date.getTime()) && x.date.getTime() > now.getTime())
    .sort((a, b) => a.date.getTime() - b.date.getTime());

  if (dated[0]) return dated[0];
  return schedule[0] ? { slot: schedule[0], date: null } : null;
}

/** "in 3d 4h" / "in 5h 20m" / "in 12m" / "starting soon" */
export function formatCountdown(target: Date, now: Date = new Date()): string {
  let ms = target.getTime() - now.getTime();
  if (ms <= 0) return "starting soon";
  const d = Math.floor(ms / 86_400_000);
  ms -= d * 86_400_000;
  const h = Math.floor(ms / 3_600_000);
  ms -= h * 3_600_000;
  const m = Math.floor(ms / 60_000);
  if (d > 0) return `in ${d}d ${h}h`;
  if (h > 0) return `in ${h}h ${m}m`;
  return `in ${m}m`;
}

/** "1h 23m" since the given start time. */
export function formatUptime(start: Date, now: Date = new Date()): string {
  let ms = now.getTime() - start.getTime();
  if (ms < 0) ms = 0;
  const h = Math.floor(ms / 3_600_000);
  ms -= h * 3_600_000;
  const m = Math.floor(ms / 60_000);
  ms -= m * 60_000;
  const s = Math.floor(ms / 1000);
  if (h > 0) return `${h}h ${m}m`;
  if (m > 0) return `${m}m ${s}s`;
  return `${s}s`;
}
