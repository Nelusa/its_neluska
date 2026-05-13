export type BrandModeKey = "princess" | "nerd" | "funny";

export interface VoicePoint {
  title: string;
  body: string;
}

export interface ColorFamily {
  name: string;
  note: string;
  shades: Array<{
    hex: string;
    ink?: string;
  }>;
}

export interface BrandMode {
  key: BrandModeKey;
  share: string;
  title: string;
  tagline: string;
  content: string;
  vibe: string;
  visuals: string;
}

export interface RecipeCardData {
  mode: BrandModeKey;
  title: string;
  format: string;
  summary: string;
}

export interface WeeklySlot {
  day: string;
  mode: BrandModeKey;
  title: string;
  note: string;
}

export interface TwitchPanelData {
  slug: "about" | "schedule" | "rules" | "setup" | "socials" | "support";
  number: string;
  label: string;
  eyebrow: string;
  title: string;
  body: string;
}

export const brandSignals = [
  "Personal brand",
  "Instagram + Twitch",
  "Soft nerd princess",
  "Protected owner view",
] as const;

export const voicePoints: VoicePoint[] = [
  {
    title: "the tone",
    body: "Soft, warm, a little dreamy. Like a voice memo from a friend who also knows why your deploy broke.",
  },
  {
    title: "the humor",
    body: "Self-aware, sloth-coded, never mean. The joke is usually the chaos, not another person.",
  },
  {
    title: "the nerd",
    body: "Show the work, the bug, the fix, and the tiny aha. Explain things kindly, never like a gatekeeper.",
  },
  {
    title: "the vulnerability",
    body: "Honest when relevant, never overperformed. 'Closed the laptop today' is a valid update.",
  },
];

export const sayWords = [
  "soft",
  "cozy",
  "quietly obsessed",
  "ok but hear me out",
  "pretty messy",
  "little ritual",
  "builder mode",
  "sloth energy",
];

export const avoidWords = [
  "girlboss",
  "grindset",
  "hustle",
  "disrupting",
  "mindset",
  "alpha",
  "hard pill to swallow",
  "#blessed",
];

export const colorFamilies: ColorFamily[] = [
  {
    name: "Princess Purple",
    note: "primary surfaces, titles, core identity",
    shades: [
      { hex: "#EEE6F4" },
      { hex: "#DCCDE8" },
      { hex: "#BCA3CC" },
      { hex: "#875BA4", ink: "#FFFDF2" },
      { hex: "#6D4E82", ink: "#FFFDF2" },
      { hex: "#4E3464", ink: "#FFFDF2" },
      { hex: "#2A103F", ink: "#FFFDF2" },
    ],
  },
  {
    name: "Dusty Rose",
    note: "quotes, softer lifestyle moments, feminine warmth",
    shades: [
      { hex: "#F6E8EE" },
      { hex: "#EACFDA" },
      { hex: "#D8A6B8" },
      { hex: "#B97C93", ink: "#FFFDF2" },
      { hex: "#8E5C72", ink: "#FFFDF2" },
    ],
  },
  {
    name: "Mauve Pink",
    note: "supporting fills, chips, photo overlays",
    shades: [
      { hex: "#F3E6EF" },
      { hex: "#E1BDD5" },
      { hex: "#C58BB0" },
      { hex: "#9F6D8E", ink: "#FFFDF2" },
      { hex: "#744E68", ink: "#FFFDF2" },
    ],
  },
  {
    name: "Pastel Yellow",
    note: "accent only, CTA moments, Twitch contrast",
    shades: [
      { hex: "#FFFDF6" },
      { hex: "#FFF7DA" },
      { hex: "#FFF0B2" },
      { hex: "#FCEB86" },
      { hex: "#F1E07C" },
      { hex: "#D8C765", ink: "#2A103F" },
    ],
  },
];

export const typeRoles = [
  {
    title: "Blanka",
    role: "display",
    sample: "SOFT NERD",
    note: "Headlines, cover words, major section titles. Keep it big and let the font do the work.",
  },
  {
    title: "Agrandir",
    role: "body",
    sample: "Aa Gg Qq",
    note: "Body copy, UI, captions, labels, and anything that needs to stay calm and readable.",
  },
  {
    title: "Moontime",
    role: "script",
    sample: "little things",
    note: "Whispers only. Use for one accent per composition, not entire sentences of body text.",
  },
];

export const brandModes: BrandMode[] = [
  {
    key: "princess",
    share: "40%",
    title: "the princess",
    tagline: "soft life, high res",
    content: "Cozy setup, skincare, flowers, yoga, balcony light, pretty food, slower rituals.",
    vibe: "Warm light, mauve surfaces, handwritten accents, airy spacing.",
    visuals: "Dusty rose + mauve + paper backgrounds + photo-forward layouts.",
  },
  {
    key: "nerd",
    share: "35%",
    title: "the nerd",
    tagline: "builder mode on",
    content: "Svelte, React, three.js, build logs, code tips, bug-fix stories, dev diary moments.",
    vibe: "Dark purple panels, mono labels, yellow highlights, little 'aha' moments.",
    visuals: "Deep purple + pastel yellow + structured cards + code-first compositions.",
  },
  {
    key: "funny",
    share: "25%",
    title: "the funny one",
    tagline: "mostly sloth",
    content: "LoL chaos, sloth memes, confession posts, tiny disasters, playful stream promos.",
    vibe: "Sticker energy, chunky headlines, exaggerated reactions, affectionate chaos.",
    visuals: "Pastel yellow, playful cards, one sloth per mood, bold short copy.",
  },
];

export const recipeCards: RecipeCardData[] = [
  {
    mode: "princess",
    title: "soft announcement",
    format: "launches, streams, updates",
    summary: "Gradient backdrop, big display line, one script whisper, one sloth accent.",
  },
  {
    mode: "princess",
    title: "photo frame",
    format: "cafe, setup, balcony, skincare",
    summary: "A real photo with soft tape, a gentle caption tile, and one feminine accent.",
  },
  {
    mode: "princess",
    title: "quote card",
    format: "feelings, little mantras",
    summary: "Large display statement with one emphasized handwritten word and plenty of paper space.",
  },
  {
    mode: "nerd",
    title: "terminal tip",
    format: "quick code lesson",
    summary: "Dark panel, mono scaffolding, one bright payoff line, and a clear teaching hook.",
  },
  {
    mode: "nerd",
    title: "build log",
    format: "behind the scenes",
    summary: "Progress snapshot, what shipped, what broke, what is next.",
  },
  {
    mode: "nerd",
    title: "compare carousel",
    format: "React vs Svelte, tool picks",
    summary: "One strong cover statement plus two opposing columns that invite a swipe.",
  },
  {
    mode: "funny",
    title: "chaos confession",
    format: "relatable micro-disaster",
    summary: "A dramatic headline, one sloth reaction, and a sticky-note energy aside.",
  },
  {
    mode: "funny",
    title: "stream promo",
    format: "live now, LoL night, cozy chaos",
    summary: "Loud enough to stop the scroll, still obviously in-brand and affectionate.",
  },
  {
    mode: "funny",
    title: "pure vibe post",
    format: "sloth wall, sticker dump",
    summary: "No agenda, just recognisable brand language and playful grid energy.",
  },
];

export const weeklyFlow: WeeklySlot[] = [
  {
    day: "Mon",
    mode: "nerd",
    title: "build log or quick tip",
    note: "Start the week in builder mode and anchor the profile with expertise.",
  },
  {
    day: "Tue",
    mode: "funny",
    title: "stream meme or confession",
    note: "Tease stream energy and keep the feed from becoming too polished.",
  },
  {
    day: "Wed",
    mode: "princess",
    title: "soft lifestyle photo",
    note: "Reset the visual rhythm with a real-life moment and warm photography.",
  },
  {
    day: "Thu",
    mode: "nerd",
    title: "tutorial or carousel hook",
    note: "Teach something useful or document an 'aha' from the week.",
  },
  {
    day: "Fri",
    mode: "princess",
    title: "quote or ritual post",
    note: "Lean into the mood board side of the brand without losing personality.",
  },
  {
    day: "Weekend",
    mode: "funny",
    title: "clips, sloths, chaos",
    note: "Low-pressure, high-recognition content that keeps the feed alive.",
  },
];

export const deliverables = [
  "Protected brand kit for internal or partner review",
  "Media-facing route with only the most useful links",
  "Twitch panels overview with export guidance",
  "Local brand fonts wired into the real app",
  "Reusable sections so future edits happen in one place",
];

export const photoMoments = [
  {
    title: "hero flowers",
    note: "Soft profile imagery with high emotional warmth and enough paper space for layout overlays.",
  },
  {
    title: "cherry blossom portrait",
    note: "The prettiest lifestyle anchor. Good for About, collab decks, and softer announcement cards.",
  },
  {
    title: "sloth bed archive",
    note: "Pure brand-language asset. It instantly explains the sloth obsession without any extra copy.",
  },
  {
    title: "breakfast + yoga moments",
    note: "These keep the princess mode grounded in real-life rituals instead of only graphics.",
  },
];

export const twitchPanels: TwitchPanelData[] = [
  {
    slug: "about",
    number: "01",
    label: "about me",
    eyebrow: "About · ahoj pookies",
    title: "soft nerd princess",
    body: "Frontend dev by day, sloth 24/7, beginner LoL journey, no flaming.",
  },
  {
    slug: "schedule",
    number: "02",
    label: "schedule",
    eyebrow: "Streaming rhythm · Prague time",
    title: "catch me live",
    body: "Usually Tue and Thu around 20:00, with occasional cozy Sunday extras.",
  },
  {
    slug: "rules",
    number: "03",
    label: "chat rules",
    eyebrow: "Sloth energy only",
    title: "be kind",
    body: "No hate, no spam, and backseating only when invited. Keep it gentle and fun.",
  },
  {
    slug: "setup",
    number: "04",
    label: "my setup",
    eyebrow: "Gear · updated 2026",
    title: "my setup",
    body: "Keychron Q1, Sony ZV-E10, Shure SM7B, Elgato lighting and cozy chaos.",
  },
  {
    slug: "socials",
    number: "05",
    label: "socials",
    eyebrow: "Find me elsewhere",
    title: "say hi",
    body: "Instagram for daily life, GitHub for code, and neluska.dev as the home base.",
  },
  {
    slug: "support",
    number: "06",
    label: "support",
    eyebrow: "Tips · subs · little help",
    title: "support the stream",
    body: "Thank-you panel for tips, subs, and wishlist support without breaking the cozy tone.",
  },
];
