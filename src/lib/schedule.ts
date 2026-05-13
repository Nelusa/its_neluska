export type StreamSlot = {
  day: "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";
  time: string;
  duration: number;
  category: "lol" | "dev" | "irl" | "chill";
  title: string;
  emoji: string;
};

export const schedule: StreamSlot[] = [
  {
    day: "tue",
    time: "20:00",
    duration: 180,
    category: "dev",
    title: "dev jam",
    emoji: "💻",
  },
  {
    day: "thu",
    time: "20:00",
    duration: 180,
    category: "lol",
    title: "LoL night",
    emoji: "🎮",
  },
  {
    day: "sun",
    time: "19:00",
    duration: 120,
    category: "irl",
    title: "občas IRL",
    emoji: "🧩",
  },
];
