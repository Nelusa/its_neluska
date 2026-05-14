export type StreamSlot = {
  day: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
  time: string;
  duration: number;
  category: "lol" | "dev" | "irl" | "chill";
  title: string;
  emoji: string;
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
  },
];
