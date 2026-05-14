import { Fragment, type CSSProperties, type ReactNode } from "react";

import { cn } from "@/lib/cn";

import { ClaudeSloth, Sparkle, Washi } from "./primitives";

const STORY_W = 360;
const STORY_H = 640;
const REEL_W = 240;
const REEL_H = 360;

export interface TwitchPanelData {
  slug: "about" | "schedule" | "rules" | "setup" | "socials" | "support";
  number: string;
  label: string;
  eyebrow: string;
  title: string;
  body: string;
}

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
    body: "Thanks panel for tips, subs, and wishlist support without breaking the cozy tone.",
  },
];

export const DITL = [
  {
    t: "0:00",
    shot: "alarm goes off, hand reaches for phone on lavender pillowcase",
    text: '"a day as a soft nerd princess"',
  },
  {
    t: "0:02",
    shot: "balcony door opens - plants + mug + morning light",
    text: "",
  },
  {
    t: "0:05",
    shot: "pov making oat latte, foam swirl close-up",
    text: '"coffee is a love language"',
  },
  {
    t: "0:08",
    shot: "laptop opening, terminal prompt appears",
    text: '"time to code"',
  },
  {
    t: "0:12",
    shot: "time-lapse of building the three.js desk scene",
    text: '"r3f at 10am"',
  },
  {
    t: "0:22",
    shot: "yoga mat unfurls · one slow stretch",
    text: '"5min reset"',
  },
  {
    t: "0:27",
    shot: "skincare - hand applying serum in mirror",
    text: '"serum girlies unite"',
  },
  {
    t: "0:32",
    shot: "puzzle piece click - detail",
    text: '"lunch = 30min puzzle"',
  },
  {
    t: "0:36",
    shot: "twitch setup cam on · purple key light glow",
    text: '"stream in 5"',
  },
  {
    t: "0:42",
    shot: "LOL loading screen + keyboard close-up",
    text: `"gonna lose. it's fine."`,
  },
  {
    t: "0:50",
    shot: "sloth plushie on shoulder, laptop closing sound",
    text: '"logging off ♡"',
  },
  {
    t: "0:55",
    shot: 'journal entry handwritten: "a good day."',
    text: "",
  },
  {
    t: "0:58",
    shot: 'end card · handle + "more @its_neluska"',
    text: "",
  },
];

export const SLOTH = [
  {
    t: "0-2s · HOOK",
    body: 'text: "i own 47 sloths. this is the best one." camera holds on a shelf - blurry sloths, one in focus',
  },
  {
    t: "2-10s",
    body: 'cut: pick-up shot - hands lifting the "best one" · natural light · no music, just fabric rustle',
  },
  {
    t: "10-25s",
    body: "tour: pan across shelf · quick cuts, each plushie gets 1 second · overlay with tiny name label",
  },
  {
    t: "25-40s",
    body: "details · macro shots - stitched eyes, bow ties, a mini sloth holding a puzzle piece",
  },
  {
    t: "40-50s",
    body: "pov: arranging them on the bed · ASMR clicks and fabric sounds",
  },
  {
    t: "50-58s",
    body: 'end card: "vote a favorite 🦥 (drop the number)" + 5 numbered slot polaroids',
  },
];

export const QUICK_DEV_TIP = [
  {
    t: "0-3s · HOOK",
    body: 'bold on-screen text: "stop doing X in Svelte" (pick one small bad habit devs repeat)',
  },
  {
    t: "3-15s",
    body: "screen recording: the problem – broken UI, console error, or janky interaction (no face required)",
  },
  {
    t: "15-25s",
    body: "screen recording: the fix – same frame, apply pattern (store, snippet, or component structure)",
  },
  {
    t: "25-30s",
    body: 'end card: handle @its_neluska + "save for the next refactor"',
  },
] as const;

export const PILLARS = [
  {
    pct: 35,
    name: "soft life",
    mode: "princess",
    color: "var(--mp-100)",
    ink: "var(--dr-500)",
    desc: "cozy setup, balcony, coffee, skincare, yoga, slow mornings, flowers",
    formats: ["photo dump", "aesthetic reel", "story series"],
  },
  {
    pct: 30,
    name: "builder mode",
    mode: "nerd",
    color: "var(--pp-100)",
    ink: "var(--pp-700)",
    desc: "svelte, three.js, R3F, 3D template system, build logs, quick tips",
    formats: ["60s tutorial reel", "carousel tip", "code screenshot post"],
  },
  {
    pct: 20,
    name: "sloth + personality",
    mode: "funny",
    color: "var(--py-200)",
    ink: "var(--pp-700)",
    desc: "sloth collection, Lego builds, puzzles, memes, confessions, gaming moments",
    formats: ["personality reel", "confession post", "photo with caption", "stream highlight reel"],
  },
  {
    pct: 15,
    name: "real talk",
    mode: "princess",
    color: "var(--dr-100)",
    ink: "var(--dr-500)",
    desc: "anxiety journey, women in tech, honest moments, small wins",
    formats: ["long caption post", "carousel essay", "quote card"],
  },
];

export const CAL_KEY = {
  princess: { color: "var(--mp-100)", ink: "var(--dr-500)", dot: "var(--dr-300)" },
  nerd: { color: "var(--pp-100)", ink: "var(--pp-700)", dot: "var(--pp-500)" },
  funny: { color: "var(--py-200)", ink: "var(--pp-700)", dot: "var(--dr-300)" },
  live: { color: "#2a1d3d", ink: "#ffe875", dot: "#ff6b6b" },
  stories: { color: "var(--mp-50)", ink: "var(--pp-600)", dot: "var(--pp-400)" },
  rest: { color: "transparent", ink: "var(--ink-soft)", dot: "transparent" },
} as const;

export const MONTH = [
  { d: "Mon 20", t: "nerd", label: 'Carousel · "hi, I\'m Neluska" intro', notes: "7 slides · princess / nerd / funny" },
  { d: "Tue 21", t: "stories", label: "Stories only", notes: "BTS, polls, what I'm building" },
  { d: "Wed 22", t: "funny", label: "Reel · sloth puzzle unboxing", notes: "trending cozy audio · ~45s" },
  { d: "Thu 23", t: "stories", label: "Stories only", notes: "engagement – reply, comment on niche accounts" },
  { d: "Fri 24", t: "nerd", label: "Post · svelte tip (terminal style)", notes: "save-worthy · tag @sveltesociety" },
  { d: "Sat 25", t: "stories", label: "Stories only", notes: "optional soft moment – no feed pressure" },
  { d: "Sun 26", t: "rest", label: "batch + plan next week", notes: "2-3h · shoot & edit 3-4 reels, schedule" },
  { d: "Mon 27", t: "nerd", label: "Reel · quick dev tip (screen cap)", notes: "30s · hook in first 3s" },
  { d: "Tue 28", t: "stories", label: "Stories only", notes: "balcony / coffee / work-in-progress" },
  { d: "Wed 29", t: "princess", label: "Post · cozy desk setup tour", notes: "photo or carousel · warm caption" },
  { d: "Thu 30", t: "live", label: "LIVE EVENT · dev or cozy stream", notes: "1-2× / month max · mine for reels after" },
  { d: "Fri 01", t: "stories", label: "Stories only", notes: '"LIVE NOW" if streaming · else skip' },
  { d: "Sat 02", t: "funny", label: "Reel · Lego fail or sloth bit", notes: "low effort · high recognition" },
  { d: "Sun 03", t: "rest", label: "batch + rest", notes: "no feed post · prep week 3" },
  { d: "Mon 04", t: "princess", label: "Post · real talk (anxiety + dev)", notes: "long caption · honest, no pity" },
  { d: "Tue 05", t: "stories", label: "Stories only", notes: "question sticker · AMA answers" },
  { d: "Wed 06", t: "nerd", label: "Carousel · build log #2", notes: "3D template progress" },
  { d: "Thu 07", t: "stories", label: "Stories only", notes: "comment on 10 accounts · community" },
  { d: "Fri 08", t: "princess", label: 'Post · quote card · "soft is strong"', notes: "save + share" },
  { d: "Sat 09", t: "stories", label: "Stories only", notes: "photo dump preview in stories" },
  { d: "Sun 10", t: "rest", label: "batch + rest", notes: "" },
  { d: "Mon 11", t: "stories", label: "Stories only", notes: "week 4 teaser · soft check-in" },
  { d: "Tue 12", t: "funny", label: "Reel · sloth collection tour", notes: "poll: pick a favorite" },
  { d: "Wed 13", t: "nerd", label: "Post · template system reveal", notes: "link in bio" },
  { d: "Thu 14", t: "live", label: "LIVE EVENT · puzzle + chill", notes: "2nd stream this month max · mine clips after" },
  { d: "Fri 15", t: "princess", label: "Photo · friday little things", notes: "low-lift · keeps feed warm" },
  { d: "Sat 16", t: "funny", label: "Reel · first-month recap", notes: "stats + thanks" },
  { d: "Sun 17", t: "rest", label: "batch + plan month 2", notes: "" },
] as const;

export const LAUNCH = [
  {
    day: "DAY 1 · MON",
    type: "INTRO POST · carousel 7 slides",
    color: "#EEE6F4",
    ink: "#2A103F",
    title: "hi, i'm neluska ✦",
    slides: [
      { t: "hi, i'm neluska ✦", note: "cover · big script + sloth peeking in corner" },
      { t: "dev by day", note: 'purple gradient · mono subtitle: "svelte · three.js · r3f"' },
      { t: "sloth at heart", note: "yellow bg · sloth sticker wall (my stickers)" },
      { t: "things i love", note: "grid: puzzles, lego, yoga, oat lattes, bad code" },
      { t: "things i post", note: "3 circles: princess / nerd / funny – chart style" },
      { t: "find me ✿", note: "Instagram @its_neluska primary · Twitch when I stream" },
      { t: "let's be soft together", note: 'cta: follow + comment "🦥"' },
    ],
    caption:
      `i've been online forever but somehow never like this. intro post: i build 3D websites, i hoard sloth plushies, i cry at code reviews and at sunsets equally. most days I'm on Instagram – reels, cozy desk, dev tips. streams happen sometimes and they're extra. my aesthetic is "what if my dev life was also a princess movie." ✿ comments: one weird tiny collection – i'll go first in stories.`,
    hashtags:
      "#softnerd #womenintech #svelte #threejs #cozyaesthetic #sloth #frontenddev",
  },
  {
    day: "DAY 2 · TUE",
    type: "STORY SET · 4-5 stories",
    color: "#F6E8EE",
    ink: "#8E5C72",
    title: "morning on the balcony",
    slides: [
      { t: "gm", note: 'photo of coffee · script "coffee first · then chaos"' },
      { t: "what today looks like", note: 'photo · checklist · "batch sunday · 3 posts · stories"' },
      { t: "poll: what should i build today?", note: "poll – three.js scene vs svelte tutorial" },
      { t: "between meetings", note: 'photo of laptop + plushie · "still 3 bugs in"' },
      { t: "soft close", note: "no stream countdown – maybe \"catch me on the feed\" (or skip)" },
    ],
    caption: "[stories – no caption, just tone]",
    hashtags: "",
  },
  {
    day: "DAY 3 · WED",
    type: "REEL · 45s",
    color: "#FFF7DA",
    ink: "#2A103F",
    title: "unboxing a 1000-piece sloth puzzle",
    slides: [
      { t: "0-3s · HOOK", note: 'close-up: puzzle box lid opening, text overlay "1000 pieces. 1 sloth. 0 braincells."' },
      { t: "3-10s", note: "time-lapse pouring pieces, washi tape sound, cozy ASMR feel" },
      { t: "10-25s", note: "cut to sorting by color – princess purple pieces, pastel yellow pieces, etc." },
      { t: "25-35s", note: "pov hands working, natural light, plant in bg" },
      { t: "35-45s · PAYOFF", note: "time skip: me + finished puzzle + sloth plushie lookalike side by side" },
    ],
    caption:
      "the line between \"hobby\" and \"mental health coping mechanism\" is blurry in this house 🦥 what's my rainy-day move? (drop yours in the comments.)",
    hashtags: "#cozyhobby #puzzlegirl #slothlover #softaesthetic #asmrpuzzle",
  },
  {
    day: "DAY 4 · THU",
    type: "POST OR REEL · desk / day-in-life",
    color: "#E0D3EC",
    ink: "#2A103F",
    title: "where the magic (and bugs) happen",
    slides: [
      { t: "wide shot", note: "desk tour – plants, lamp, keyboard, sloth, monitor wallpaper" },
      { t: "detail stack", note: "macro: keycaps, cable management, coffee ring coaster" },
      { t: "reel alt", note: "OR 30s vertical: pan across desk + text \"my whole personality fits on 120cm\"" },
    ],
    caption:
      "come sit at my desk for a second ✿ this is where the pastel meets the terminal. what's the one desk object I'd save in a fire? (obviously the sloth.)",
    hashtags: "#desksetup #cozygaming #womenintech #devlife #softaesthetic",
  },
  {
    day: "DAY 5 · FRI",
    type: "NERD POST · terminal",
    color: "#2A103F",
    ink: "#FCEB86",
    title: "svelte tip: one-liner I'll actually use",
    slides: [
      { t: "hook graphic", note: "terminal post w/ $mood writable store · yellow accent" },
      { t: "caption", note: "write up WHEN to use it + link to svelte docs" },
    ],
    caption:
      "stores are a mood ♡ literally. saving this for the next time I have 7 components all needing the same state. no prop drilling, no vibe killing. (and yes, i'll die on this hill.)",
    hashtags: "#svelte #sveltejs #webdev #frontenddev #100daysofcode",
  },
  {
    day: "DAY 6 · SAT",
    type: "LIGHT · stories + optional dump",
    color: "#EACFDA",
    ink: "#8E5C72",
    title: "if I have one more photo in me",
    slides: [
      { t: "stories", note: "3 slides max – balcony, coffee, work-in-progress" },
      { t: "optional carousel", note: "skip if tired – 3-4 photos is enough for week one" },
      { t: "BONUS · stream", note: "if I go live this week, amazing – if not, I schedule a cozy stream for week 2-3" },
    ],
    caption:
      "soft launch doesn't mean empty tank. I post if I have a spoon left; if not, stories-only Saturday is valid. ♡",
    hashtags: "#softlaunch #cozygirl #womenintech",
  },
  {
    day: "DAY 7 · SUN",
    type: "REST + BATCH",
    color: "#DCCDE8",
    ink: "#2A103F",
    title: "plan week 2",
    slides: [
      { t: "no feed post", note: "rest day · engage in stories only (reply to DMs)" },
      { t: "batch session", note: "2-3h: shoot 3-4 reels or photos · edit · schedule Mon-Fri" },
      { t: "close the laptop by 8pm", note: "non-negotiable ♡" },
    ],
    caption: "",
    hashtags: "",
  },
] as const;

export const HOOKS = [
  { mode: "princess", h: "the cozy dev corner tour I didn't know I needed ✦" },
  { mode: "princess", h: "POV: I'm the backend girl with a pastel aesthetic" },
  { mode: "princess", h: "romanticizing debugging at 2am with oat milk latte" },
  { mode: "nerd", h: "i rewrote my portfolio in svelte. here's what broke." },
  { mode: "nerd", h: "three.js tutorials lied to me. here's what actually worked." },
  { mode: "nerd", h: "one file. 40 lines. a whole 3D scene." },
  { mode: "funny", h: "signs I'm a dev AND a sloth (all of them apply)" },
  { mode: "funny", h: "me: i'll just stream for an hour. five hours later..." },
  { mode: "funny", h: "rating my own code as if it's a boyfriend" },
  { mode: "princess", h: "a love letter to the women in tech who go first" },
  { mode: "nerd", h: "if react is my bestie, svelte is my therapist" },
  { mode: "funny", h: "the LOL ranked arc no one asked for, narrated by me" },
] as const;

export function DayInLife() {
  return (
    <div className="rounded-[20px] bg-[#2A103F] p-8 text-[#FFF7DA]">
      <div className="mb-5 flex flex-wrap items-baseline gap-4">
        <div className="h-display text-[36px] leading-[0.92] text-[#FCEB86]">
          day in the life · reel
        </div>
        <div className="font-mono text-[11px] tracking-[0.14em] text-[#BCA3CC]">
          60s · 13 cuts · trending cozy audio
        </div>
      </div>

      <div className="section-x-scroll pb-2">
        <div className="grid min-w-[900px] grid-cols-[60px_minmax(220px,1fr)_minmax(320px,1.5fr)] gap-3 text-[13px]">
          <div className="font-mono text-[10px] tracking-[0.12em] opacity-50">
            TIME
          </div>
          <div className="font-mono text-[10px] tracking-[0.12em] opacity-50">
            SHOT
          </div>
          <div className="font-mono text-[10px] tracking-[0.12em] opacity-50">
            TEXT OVERLAY
          </div>

          {DITL.map((row, i) => (
            <Fragment key={i}>
              <div className="border-t border-dashed border-[rgba(255,247,218,0.15)] py-2.5 font-mono text-[11px] text-[#FCEB86] opacity-90">
                {row.t}
              </div>
              <div className="border-t border-dashed border-[rgba(255,247,218,0.15)] py-2.5 leading-[1.45]">
                {row.shot}
              </div>
              <div
                className={cn(
                  "border-t border-dashed border-[rgba(255,247,218,0.15)] py-2.5 leading-[1.45] text-[#E1BDD5]",
                  row.text && "italic",
                )}
              >
                {row.text || "–"}
              </div>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="mt-6 rounded-xl bg-[rgba(255,247,218,0.08)] px-4 py-[14px]">
        <div className="mb-1.5 font-mono text-[9px] tracking-[0.2em] text-[#FCEB86]">
          CAPTION
        </div>
        <div className="text-[13px] leading-[1.55]">
          "pov: I'm a dev but I'm also kind of a 1950s heroine in a
          romance novel. a day in my little life 🦥✨"
        </div>
      </div>
    </div>
  );
}

export function SlothASMR() {
  return (
    <div className="rounded-[20px] bg-[#FFF7DA] p-8">
      <div className="h-display text-[36px] leading-[0.92] text-[#2A103F]">
        sloth collection · asmr reveal
      </div>
      <div className="mt-1.5 font-mono text-[11px] tracking-[0.14em] text-[#8E5C72]">
        58s · silent · no music · max reach format
      </div>
      <div className="mt-5 grid gap-2.5">
        {SLOTH.map((step, i) => (
          <div
            key={i}
            className="grid gap-4 rounded-xl bg-white px-[18px] py-[14px] min-[680px]:grid-cols-[100px_1fr]"
          >
            <div className="font-mono text-[11px] tracking-[0.12em] text-[#8E5C72]">
              {step.t}
            </div>
            <div className="text-[13px] leading-[1.5] text-[#2A103F]">
              {step.body}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl bg-[#EEE6F4] px-4 py-[14px]">
        <div className="mb-1.5 font-mono text-[9px] tracking-[0.2em] text-[#4E3464]">
          CAPTION
        </div>
        <div className="text-[13px] leading-[1.55] text-[#2A103F]">
          "ok so this is a problem 🦥 drop a number in the comments
          and i'll name that sloth. (yes they have names.)"
        </div>
      </div>
    </div>
  );
}

export function QuickDevTipReel() {
  return (
    <div className="rounded-[20px] bg-[#2A103F] p-8 text-[#FFF7DA]">
      <div className="mb-5 flex flex-wrap items-baseline gap-4">
        <div className="h-display text-[36px] leading-[0.92] text-[#FCEB86]">
          quick dev tip · reel
        </div>
        <div className="font-mono text-[11px] tracking-[0.14em] text-[#BCA3CC]">
          30s · screen-first · batch-friendly
        </div>
      </div>

      <div className="grid gap-2.5">
        {QUICK_DEV_TIP.map((step, i) => (
          <div
            key={i}
            className="grid gap-4 rounded-xl bg-[rgba(255,247,218,0.08)] px-[18px] py-[14px] min-[680px]:grid-cols-[100px_1fr]"
          >
            <div className="font-mono text-[11px] tracking-[0.12em] text-[#FCEB86]">
              {step.t}
            </div>
            <div className="text-[13px] leading-[1.5] text-[#E1BDD5]">{step.body}</div>
          </div>
        ))}
      </div>
      <div className="mt-6 rounded-xl bg-[rgba(255,247,218,0.08)] px-4 py-[14px]">
        <div className="mb-1.5 font-mono text-[9px] tracking-[0.2em] text-[#FCEB86]">
          CAPTION
        </div>
        <div className="text-[13px] leading-[1.55]">
          "tiny svelte thing that saved my sanity this week. save it for the next time I'm copy-pasting the same prop chain 🦥"
        </div>
      </div>
    </div>
  );
}

export function Pillars() {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-5">
      {PILLARS.map((pillar) => (
        <div
          key={pillar.name}
          className="card border-transparent p-6"
          style={{ background: pillar.color, color: pillar.ink }}
        >
          <div className="flex items-baseline justify-between">
            <div className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-80">
              {pillar.mode}
            </div>
            <div className="font-mono text-[11px] opacity-80">{pillar.pct}%</div>
          </div>
          <div className="h-display mt-2 text-[36px] leading-[0.95]">
            {pillar.name}
          </div>
          <div className="mt-2.5 text-[13px] leading-[1.5] opacity-[0.82]">
            {pillar.desc}
          </div>
          <div className="mt-[14px] flex flex-wrap gap-1.5">
            {pillar.formats.map((format) => (
              <span
                key={format}
                className="rounded-full px-2 py-1 font-mono text-[9px] uppercase tracking-[0.1em]"
                style={{
                  background: "rgba(255,255,255,0.5)",
                  color: pillar.ink,
                }}
              >
                {format}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Rhythm() {
  const days = [
    { d: "mon", items: [{ t: "dev post or reel", m: "nerd" }, { t: "2-3 stories", m: "princess" }] },
    { d: "tue", items: [{ t: "stories only", m: "stories" }, { t: "BTS · polls", m: "princess" }] },
    { d: "wed", items: [{ t: "cozy / aesthetic", m: "princess" }, { t: "2-3 stories", m: "stories" }] },
    { d: "thu", items: [{ t: "stories only", m: "stories" }, { t: "engagement", m: "funny" }] },
    { d: "fri", items: [{ t: "personality post", m: "funny" }, { t: "2-3 stories", m: "princess" }] },
    {
      d: "sat",
      items: [
        { t: "optional post / clip", m: "funny" },
        { t: "or stories only", m: "stories" },
      ],
    },
    { d: "sun", items: [{ t: "batch 2-3h", m: "rest" }, { t: "rest", m: "rest" }] },
  ] as const;

  return (
    <div className="section-x-scroll pb-2">
      <div className="grid min-w-[980px] grid-cols-7 gap-3">
        {days.map((day) => (
          <div
            key={day.d}
            className="rounded-[14px] border border-[var(--line)] bg-white p-[14px]"
          >
            <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)]">
              {day.d}
            </div>
            {day.items.map((item, i) => {
              const key = CAL_KEY[item.m];
              return (
                <div
                  key={i}
                  className="mb-1.5 rounded-lg px-2.5 py-2 text-xs font-medium"
                  style={{
                    background: item.m === "rest" ? "var(--paper-2)" : key.color,
                    color: key.ink,
                  }}
                >
                  {item.t}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
}

export function Calendar() {
  return (
    <div className="rounded-[20px] border border-[var(--line)] bg-white p-6 shadow-[var(--sh-md)]">
      <div className="section-x-scroll pb-2">
        <div className="grid min-w-[900px] grid-cols-7 gap-2.5">
          {["mon", "tue", "wed", "thu", "fri", "sat", "sun"].map((day) => (
            <div
              key={day}
              className="px-1 pb-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--ink-soft)]"
            >
              {day}
            </div>
          ))}
          {MONTH.map((entry, i) => {
            const k = CAL_KEY[entry.t];
            return (
              <div
                key={i}
                className={cn(
                  "flex min-h-[130px] flex-col gap-1.5 rounded-[10px] p-3",
                  entry.t === "rest" && "border border-dashed border-[var(--line)]",
                  entry.t === "stories" && "border border-solid border-[var(--line)]",
                )}
                style={{
                  background: entry.t === "rest" ? "var(--paper-2)" : k.color,
                  color: k.ink,
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] tracking-[0.08em] opacity-70">
                    {entry.d}
                  </span>
                  {k.dot !== "transparent" ? (
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: k.dot }}
                    />
                  ) : null}
                </div>
                <div className="font-display text-[13px] font-bold leading-[1.1]">
                  {entry.label}
                </div>
                {entry.notes ? (
                  <div className="mt-auto text-[10px] leading-[1.4] opacity-70">
                    {entry.notes}
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-[0.12em] text-[var(--ink-soft)]">
        <span>
          <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full bg-[var(--mp-100)] align-[-1px]" />
          princess
        </span>
        <span>
          <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full bg-[var(--pp-100)] align-[-1px]" />
          nerd
        </span>
        <span>
          <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full bg-[var(--py-200)] align-[-1px]" />
          funny
        </span>
        <span>
          <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full bg-[var(--mp-50)] align-[-1px] ring-1 ring-[var(--line)]" />
          stories only
        </span>
        <span>
          <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full bg-[#2a1d3d] align-[-1px]" />
          live event
        </span>
        <span>
          <span className="mr-1.5 inline-block h-2.5 w-2.5 rounded-full border border-dashed border-[var(--line)] bg-[var(--paper-2)] align-[-1px]" />
          rest
        </span>
      </div>
    </div>
  );
}

export function LaunchWeek() {
  return (
    <div className="grid gap-4">
      {LAUNCH.map((day, i) => (
        <div
          key={i}
          className="grid gap-8 rounded-[20px] border border-transparent p-7 min-[980px]:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
          style={{ background: day.color, color: day.ink }}
        >
          <div>
            <div className="font-mono text-[10px] tracking-[0.22em] opacity-70">
              {day.day}
            </div>
            <div className="h-display mt-2 text-[32px] leading-[0.92]">
              {day.title}
            </div>
            <div className="mt-2.5 inline-block rounded-full bg-[rgba(255,255,255,0.6)] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em]">
              {day.type}
            </div>
            {day.caption ? (
              <div className="mt-4 rounded-[10px] bg-[rgba(255,255,255,0.65)] px-[14px] py-3 text-xs italic leading-[1.55]">
                <div className="mb-1.5 font-mono text-[9px] not-italic tracking-[0.2em] opacity-60">
                  CAPTION
                </div>
                "{day.caption}"
                {day.hashtags ? (
                  <div className="mt-2 text-[11px] not-italic opacity-70">
                    {day.hashtags}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>

          <div>
            <div className="mb-2.5 font-mono text-[10px] uppercase tracking-[0.2em] opacity-60">
              Shot list / slides
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-2">
              {day.slides.map((slide, j) => (
                <div
                  key={j}
                  className="rounded-[10px] bg-[rgba(255,255,255,0.7)] px-3 py-2.5 text-[11px] leading-[1.4]"
                >
                  <div className="mb-1 font-display text-xs font-bold">
                    {j + 1}. {slide.t}
                  </div>
                  <div className="font-body opacity-75">{slide.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function HooksGrid() {
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-[14px]">
      {HOOKS.map((hook, i) => {
        const k = CAL_KEY[hook.mode];
        return (
          <div
            key={i}
            className="flex items-start gap-3 rounded-[14px] border border-[var(--line)] bg-white px-5 py-[18px]"
          >
            <span
              className="mt-0.5 shrink-0 rounded px-2 py-[3px] font-mono text-[9px] uppercase tracking-[0.16em]"
              style={{ background: k.color, color: k.ink }}
            >
              {hook.mode}
            </span>
            <div className="font-display text-[15px] font-bold leading-[1.25] text-[var(--pp-700)]">
              "{hook.h}"
            </div>
          </div>
        );
      })}
    </div>
  );
}

function StoryFrame({
  bg = "#efeaf5",
  children,
  label,
  style,
}: {
  bg?: string;
  children: ReactNode;
  label: string;
  style?: CSSProperties;
}) {
  return (
    <figure className="m-0 flex flex-col gap-2">
      <div
        className="relative overflow-hidden rounded-[24px] shadow-[var(--sh-md)]"
        style={{
          width: STORY_W,
          height: STORY_H,
          background: bg,
          color: "var(--ink)",
          ...style,
        }}
      >
        <div className="absolute left-0 right-0 top-0 z-[5] flex h-6 gap-1 px-3 pt-1.5">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="h-0.5 flex-1 rounded-full"
              style={{
                background:
                  i === 1
                    ? "rgba(255,255,255,0.9)"
                    : "rgba(255,255,255,0.4)",
              }}
            />
          ))}
        </div>
        {children}
      </div>
      <figcaption className="font-mono text-[10px] tracking-[0.06em] text-[var(--ink-soft)]">
        {label}
      </figcaption>
    </figure>
  );
}

function StoryGM() {
  return (
    <StoryFrame
      label="gm · daily check-in"
      bg="linear-gradient(180deg,#c3a9d7 0%, #e0d3ec 60%, #fff9d8 100%)"
    >
      <div className="absolute left-6 top-9 font-mono text-[10px] tracking-[0.24em] text-[#45305d]">
        ★ 20.04.26 · MONDAY
      </div>
      <div className="h-display absolute left-6 right-6 top-[110px] text-[56px] leading-[0.9] text-[#2a1d3d]">
        good
        <br />
        morning
        <br />
        friends
      </div>
      <div className="font-script absolute left-6 right-6 top-[330px] text-4xl leading-none text-[var(--dr-400)]">
        coffee first ·
        <br />
        then chaos
      </div>
      <div className="absolute bottom-10 left-6 right-6 flex items-center justify-between rounded-2xl bg-[rgba(255,255,255,0.7)] px-4 py-[14px] backdrop-blur-[8px]">
        <div className="font-mono text-[11px] tracking-[0.12em] text-[var(--pp-600)]">
          HOW ARE YOU?
        </div>
        <div className="font-body text-[11px] text-[var(--ink-soft)]">
          tap to reply
        </div>
      </div>
      <div className="absolute bottom-[130px] right-5">
        <ClaudeSloth size={90} variant="camping" />
      </div>
    </StoryFrame>
  );
}

function StoryPoll() {
  return (
    <StoryFrame
      label="poll · engagement driver"
      bg="#2a1d3d"
      style={{ color: "#f4e4ef" }}
    >
      <div className="absolute left-6 top-9 font-mono text-[10px] tracking-[0.2em] text-[#ffe875]">
        ?? POLL TIME
      </div>
      <div className="h-display absolute left-6 right-6 top-[90px] text-[40px] leading-[0.95] text-[#ffe875]">
        today's
        <br />
        stream:
      </div>
      <div className="absolute left-6 right-6 top-60 flex flex-col gap-[14px]">
        <div className="flex items-center justify-between rounded-2xl border border-[rgba(255,249,216,0.2)] bg-[rgba(255,249,216,0.12)] px-5 py-[18px]">
          <div className="font-display text-[22px] leading-none text-[#fff9d8]">
            LOL ranked
          </div>
          <div className="font-mono text-xs text-[#c3a9d7]">62%</div>
        </div>
        <div className="flex items-center justify-between rounded-2xl border border-[rgba(255,249,216,0.3)] bg-[rgba(255,249,216,0.22)] px-5 py-[18px]">
          <div className="font-display text-[22px] leading-none text-[#fff9d8]">
            building ✦
          </div>
          <div className="font-mono text-xs text-[#ffe875]">38%</div>
        </div>
      </div>
      <div className="font-script absolute bottom-10 left-6 right-6 text-center text-[28px] text-[#d19ac5]">
        help me decide ⋆
      </div>
    </StoryFrame>
  );
}

function StoryLiveNow() {
  return (
    <StoryFrame label="live now · ping followers" bg="var(--py-100)">
      <div className="absolute left-6 top-9 flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-[#d14a6a] shadow-[0_0_0_6px_rgba(209,74,106,0.2)]" />
        <div className="font-mono text-[10px] tracking-[0.24em] text-[var(--dr-500)]">
          LIVE · TWITCH
        </div>
      </div>
      <div className="h-display absolute left-6 right-6 top-[100px] text-[56px] leading-[0.88] text-[var(--pp-700)]">
        losing
        <br />
        ranked
        <br />
        again
      </div>
      <div className="absolute left-6 right-6 top-[380px] flex items-center justify-between rounded-[14px] bg-white px-4 py-[14px] shadow-[var(--sh-md)]">
        <div>
          <div className="font-mono text-[9px] tracking-[0.2em] text-[var(--dr-400)]">
            TWITCH.TV
          </div>
          <div className="h-display text-[20px] text-[var(--pp-700)]">
            its_neluska
          </div>
        </div>
        <div className="rounded-full bg-[var(--pp-500)] px-[14px] py-2 font-mono text-[11px] tracking-[0.12em] text-[#fff9d8]">
          JOIN →
        </div>
      </div>
      <div className="font-script absolute bottom-[60px] left-1/2 -translate-x-1/2 text-[26px] text-[var(--pp-500)]">
        come be silly ✿
      </div>
    </StoryFrame>
  );
}

function StoryPhotoDump() {
  return (
    <StoryFrame label="photo dump · recap" bg="#fbe9ee">
      <div className="absolute left-6 right-6 top-9 font-mono text-[10px] tracking-[0.2em] text-[var(--dr-400)]">
        ✦ WEEK 16 DUMP
      </div>
      <div className="h-display absolute left-6 right-6 top-16 text-[32px] leading-[0.95] text-[var(--dr-500)]">
        little
        <br />
        things
      </div>
      <div
        className="absolute left-5 top-[180px] flex h-[220px] w-40 items-center justify-center rounded-[10px] font-mono text-[9px] text-[var(--dr-400)] shadow-[var(--sh-md)]"
        style={{
          background:
            "repeating-linear-gradient(45deg, #f0cfd7 0 8px, #fbe9ee 8px 16px)",
          transform: "rotate(-4deg)",
        }}
      >
        [ IMG 1 ]
      </div>
      <div
        className="absolute right-[14px] top-[220px] flex h-[200px] w-[140px] items-center justify-center rounded-[10px] font-mono text-[9px] text-[var(--dr-400)] shadow-[var(--sh-md)]"
        style={{
          background:
            "repeating-linear-gradient(135deg, var(--mp-100) 0 8px, var(--mp-50) 8px 16px)",
          transform: "rotate(6deg)",
        }}
      >
        [ IMG 2 ]
      </div>
      <Washi
        rotate={-10}
        width={80}
        style={{ top: 172, left: 50 }}
        color="var(--py-300)"
      />
      <Washi
        rotate={12}
        width={80}
        style={{ top: 212, right: 30 }}
        color="var(--pp-200)"
      />
      <div className="font-script absolute bottom-10 left-6 right-6 text-center text-[28px] text-[var(--dr-400)]">
        no thoughts, just vibes
      </div>
    </StoryFrame>
  );
}

function StoryCodeTip() {
  return (
    <StoryFrame label="code tip · quick win" bg="var(--paper-2)">
      <div className="absolute left-6 top-10 font-mono text-[10px] tracking-[0.2em] text-[var(--pp-500)]">
        TIP · 60s
      </div>
      <div className="h-display absolute left-6 right-6 top-[70px] text-[32px] leading-[0.95] text-[var(--pp-700)]">
        one line
        <br />
        of svelte
        <br />
        i can't
        <br />
        live without
      </div>
      <div className="absolute left-6 right-6 top-[300px] rounded-[14px] bg-[#2a1d3d] p-[18px] font-mono text-[13px] leading-[1.55] text-[#f4e4ef]">
        <div className="text-[#c3a9d7]">// {"{#await promise}"}</div>
        <div>
          <span className="text-[#ffe875]">{"{#await"}</span> loadStuff()
          <span className="text-[#ffe875]">{"}"}</span>
        </div>
        <div>&nbsp;&nbsp;loading ♡</div>
        <div>
          <span className="text-[#ffe875]">{"{:then"}</span> data
          <span className="text-[#ffe875]">{"}"}</span>
        </div>
        <div>&nbsp;&nbsp;{"{data}"}</div>
        <div>
          <span className="text-[#ffe875]">{"{/await}"}</span>
        </div>
      </div>
      <div className="absolute bottom-10 left-6 right-6 rounded-[14px] bg-[rgba(255,255,255,0.8)] px-4 py-3 text-center font-body text-[13px] text-[var(--pp-600)]">
        save this for my next svelte project ✦
      </div>
    </StoryFrame>
  );
}

function StoryQuestion() {
  return (
    <StoryFrame
      label="question sticker · ama"
      bg="linear-gradient(180deg,#8057a8,#45305d)"
      style={{ color: "#fff9d8" }}
    >
      <div className="absolute left-6 top-10 font-mono text-[10px] tracking-[0.22em] text-[#ffe875]">
        ⁂ ASK ME ANYTHING
      </div>
      <div className="h-display absolute left-6 right-6 top-[100px] text-[48px] leading-[0.95] text-[#fff9d8]">
        what should
        <br />
        I build
        <br />
        next?
      </div>
      <div className="absolute left-6 right-6 top-80 rounded-[20px] border border-[rgba(255,255,255,0.25)] bg-[rgba(255,255,255,0.15)] px-[18px] py-5 backdrop-blur-[12px]">
        <div className="mb-2.5 font-mono text-[10px] tracking-[0.18em] text-[#ffe875]">
          @ITS_NELUSKA ASKS
        </div>
        <div className="font-display text-lg leading-[1.15] text-[#fff9d8]">
          Ask me about code, sloths, or my tragic LOL elo...
        </div>
        <div className="mt-3 inline-block rounded-full bg-[rgba(255,255,255,0.15)] px-[14px] py-2 font-body text-xs text-[rgba(255,249,216,0.7)]">
          type something...
        </div>
      </div>
      <Sparkle
        size={20}
        color="#ffe875"
        style={{ position: "absolute", top: 80, right: 40 }}
      />
      <Sparkle
        size={12}
        color="#ffe875"
        style={{ position: "absolute", top: 60, right: 72 }}
      />
    </StoryFrame>
  );
}

export function StoryGrid() {
  return (
    <div className="section-x-scroll pb-2">
      <div className="grid w-max grid-cols-3 gap-7">
        <StoryGM />
        <StoryPoll />
        <StoryLiveNow />
        <StoryPhotoDump />
        <StoryCodeTip />
        <StoryQuestion />
      </div>
    </div>
  );
}

function HighlightCover({
  label,
  bg,
  children,
}: {
  label: string;
  bg: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <div
        className="relative flex h-[132px] w-[132px] items-center justify-center overflow-hidden rounded-full border-[3px] border-white shadow-[0_0_0_1px_var(--line),var(--sh-md)]"
        style={{ background: bg }}
      >
        {children}
      </div>
      <div className="font-mono text-[11px] lowercase tracking-[0.12em] text-[var(--ink-soft)]">
        {label}
      </div>
    </div>
  );
}

function HighlightSloth({
  variant,
  size = 190,
}: {
  variant: React.ComponentProps<typeof ClaudeSloth>["variant"];
  size?: number;
}) {
  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <ClaudeSloth size={size} variant={variant} />
    </div>
  );
}

export function HighlightsRow() {
  return (
    <div className="flex flex-wrap justify-center gap-7">
      <HighlightCover
        label="✦ cozy"
        bg="linear-gradient(135deg,#fbe9ee,#f0cfd7)"
      >
        <HighlightSloth variant="camping" />
      </HighlightCover>
      <HighlightCover label="✦ dev" bg="#2a1d3d">
        <HighlightSloth variant="code" />
      </HighlightCover>
      <HighlightCover label="✦ sloths" bg="var(--py-100)">
        <HighlightSloth variant="heart" />
      </HighlightCover>
      <HighlightCover
        label="✦ stream"
        bg="linear-gradient(135deg,#8057a8,#624283)"
      >
        <HighlightSloth variant="gaming" />
      </HighlightCover>
      <HighlightCover label="✦ builds" bg="var(--paper-2)">
        <HighlightSloth variant="painting" />
      </HighlightCover>
      <HighlightCover label="✦ lego" bg="var(--mp-100)">
        <HighlightSloth variant="legoPurple" />
      </HighlightCover>
      <HighlightCover
        label="✦ yoga"
        bg="linear-gradient(135deg,#e0d3ec,#c3a9d7)"
      >
        <HighlightSloth variant="princess" />
      </HighlightCover>
      <HighlightCover label="✦ food" bg="#fff9d8">
        <HighlightSloth variant="banana" />
      </HighlightCover>
      <HighlightCover label="✦ lol" bg="var(--pp-700)">
        <HighlightSloth variant="singing" />
      </HighlightCover>
    </div>
  );
}

function ReelsCover({
  children,
  bg,
  label,
  style,
}: {
  children: ReactNode;
  bg: string;
  label: string;
  style?: CSSProperties;
}) {
  return (
    <figure className="m-0 flex flex-col gap-2">
      <div
        className="relative overflow-hidden rounded-[14px] shadow-[var(--sh-md)]"
        style={{
          width: REEL_W,
          height: REEL_H,
          background: bg,
          ...style,
        }}
      >
        {children}
      </div>
      <figcaption className="font-mono text-[10px] tracking-[0.08em] text-[var(--ink-soft)]">
        {label}
      </figcaption>
    </figure>
  );
}

export function ReelsRow() {
  return (
    <div className="section-x-scroll pb-2">
      <div className="grid w-max grid-cols-4 gap-6">
        <ReelsCover label="tutorial" bg="#2a1d3d">
          <div className="absolute left-4 top-4 font-mono text-[9px] tracking-[0.2em] text-[#ffe875]">
            REEL · 60s
          </div>
          <div className="h-display absolute left-4 right-4 top-[70px] text-[34px] leading-[0.9] text-[#ffe875]">
            my first
            <br />
            three.js
            <br />
            scene ✧
          </div>
          <div className="absolute bottom-4 left-4 font-mono text-[10px] text-[#c3a9d7]">
            PART 1/3 →
          </div>
        </ReelsCover>

        <ReelsCover
          label="day in life"
          bg="linear-gradient(180deg,#fbe9ee,#f0cfd7)"
        >
          <div className="absolute left-4 top-4 font-mono text-[9px] tracking-[0.2em] text-[var(--dr-500)]">
            VLOG
          </div>
          <div className="h-display absolute left-4 right-4 top-[60px] text-[30px] leading-[0.9] text-[var(--dr-500)]">
            a day as a
            <br />
            soft nerd
            <br />
            princess
          </div>
          <div className="absolute bottom-4 right-4">
            <ClaudeSloth size={96} variant="princess" />
          </div>
        </ReelsCover>

        <ReelsCover label="stream highlight" bg="#45305d">
          <div className="absolute left-4 top-4 flex items-center gap-1.5">
            <div className="h-2 w-2 rounded-full bg-[#ff6b6b]" />
            <span className="font-mono text-[9px] tracking-[0.22em] text-[#ffe875]">
              CLIP
            </span>
          </div>
          <div className="h-display absolute left-4 right-4 top-[70px] text-[34px] leading-[0.9] text-[#ffe875]">
            i didn't
            <br />
            see that
            <br />
            teemo
          </div>
          <div className="font-script absolute bottom-4 left-4 text-[22px] text-[#f0cfd7]">
            pain ♡
          </div>
        </ReelsCover>

        <ReelsCover label="aesthetic" bg="var(--py-100)">
          <div className="absolute left-4 top-4 font-mono text-[9px] tracking-[0.2em] text-[var(--pp-500)]">
            ASMR · SILENT
          </div>
          <div className="h-display absolute left-4 right-4 top-[60px] text-[30px] leading-[0.9] text-[var(--pp-700)]">
            unboxing
            <br />
            1000-piece
            <br />
            puzzle
          </div>
          <div className="absolute bottom-[70px] right-4">
            <ClaudeSloth size={104} variant="puzzles" />
          </div>
          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-4 gap-1">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <div
                key={i}
                className="rounded-[3px]"
                style={{
                  aspectRatio: "1/1",
                  background: [
                    "var(--pp-200)",
                    "var(--mp-200)",
                    "var(--dr-200)",
                    "var(--py-300)",
                  ][i % 4],
                  clipPath:
                    "polygon(30% 0, 70% 0, 70% 30%, 100% 30%, 100% 70%, 70% 70%, 70% 100%, 30% 100%, 30% 70%, 0 70%, 0 30%, 30% 30%)",
                }}
              />
            ))}
          </div>
        </ReelsCover>
      </div>
    </div>
  );
}
