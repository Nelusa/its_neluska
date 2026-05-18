import Link from "next/link";

import { cn } from "@/lib/cn";

import {
  BrandMark,
  DotDivider,
  HeroOrnament,
  KitSection,
  MotifCard,
  RuleCard,
  SwatchRow,
} from "./primitives";

export function LegacyTopNav() {
  const links: { href: string; label: string; target?: string }[] = [
    { href: "#overview", label: "overview" },
    { href: "#voice", label: "voice" },
    { href: "#colors", label: "colors" },
    { href: "#modes", label: "modes" },
    { href: "#posts", label: "templates" },
    { href: "#strategy", label: "strategy" },
    { href: "#twitch", label: "twitch" },
  ];

  return (
    <nav className="border-b border-line bg-[oklch(0.985_0.006_80_/_0.8)] backdrop-blur-[14px]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-8 py-[14px] max-[760px]:flex-col max-[760px]:items-start">
        <div className="flex items-center gap-2.5">
          <BrandMark />
          <div>
            <div className="font-mono text-xs tracking-[0.14em]">@its_neluska</div>
            <div className="font-script text-sm leading-none text-brand-purple-500">
              brand kit
            </div>
          </div>
        </div>

        <div className="section-x-scroll ml-auto max-w-[min(100%,760px)] pb-1 max-[760px]:ml-0 max-[760px]:max-w-full">
          <div className="flex w-max min-w-full flex-nowrap justify-end gap-0.5 max-[760px]:justify-start">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.target}
                className="nav-link"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/"
              className="nav-link bg-brand-purple-50 text-brand-purple-600"
            >
              ↗ live site
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export function HeroSection() {
  return (
    <header id="overview" className="overflow-hidden px-8 pb-[120px] pt-20">
      <div className="relative mx-auto max-w-[1280px]">
        <div className="grid grid-cols-[minmax(0,1fr)] items-end gap-10 min-[980px]:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] min-[980px]:gap-[60px]">
          <div className="min-w-0">
            <div className="chip mb-6">★ Personal brand · Instagram first · Twitch when it fits</div>
            <div className="section-x-scroll w-full max-w-full pb-2">
              <h1 className="h-display m-0 whitespace-nowrap text-[clamp(36px,8vw,140px)] leading-[0.88] text-brand-purple-700">
                its_neluska
              </h1>
            </div>
            <div className="mt-3 font-script text-[clamp(36px,4vw,56px)] leading-none text-brand-rose-400">
              a soft nerd princess brand kit
            </div>
            <p className="m-0 mt-7 max-w-[560px] text-[17px] leading-[1.6] text-ink-soft">
              Dev by day, sloth at heart. Three modes –{" "}
              <strong className="text-brand-purple-600">princess</strong>,{" "}
              <strong className="text-brand-purple-600">nerd</strong>,{" "}
              <strong className="text-brand-purple-600">funny</strong> – share
              one palette and one voice, but pull different content pillars.
              This document is the operating system for everything I post.
            </p>
            <div className="mt-7 flex flex-wrap gap-2.5">
              <span
                className="chip"
                style={{
                  background: "var(--pp-100)",
                  color: "var(--pp-700)",
                  borderColor: "transparent",
                }}
              >
                ✦ princess – 45% of output
              </span>
              <span
                className="chip"
                style={{
                  background: "var(--pp-500)",
                  color: "#fff9d8",
                  borderColor: "transparent",
                }}
              >
                &lt;/&gt; nerd – 35%
              </span>
              <span
                className="chip"
                style={{
                  background: "var(--py-200)",
                  color: "var(--pp-700)",
                  borderColor: "transparent",
                }}
              >
                🦥 funny – 20%
              </span>
            </div>
          </div>

          <HeroOrnament />
        </div>
      </div>
    </header>
  );
}

const voiceCards = [
  {
    label: "the tone",
    body: "soft, warm, a little dreamy. like a voice memo from a friend who happens to know web gpu shaders.",
  },
  {
    label: "the humor",
    body: "self-deprecating about sloth energy, excited about code. never punching at anyone else.",
  },
  {
    label: "the nerd",
    body: 'show the work. show the bug. show the "aha". explain things like I\'m texting a younger sister who wants to learn.',
  },
  {
    label: "the vulnerability",
    body: "anxiety gets name-dropped when it's relevant, not performed. closed the laptop today = valid post.",
  },
];

const voiceWords = {
  do: [
    "soft",
    "cozy",
    "little",
    "pretty messy",
    "quietly obsessed",
    "a bit of a princess about it",
    "ok but hear me out",
    "i'll be normal about this... i will not",
    "✦",
    "♡",
    "🦥",
  ],
  dont: [
    "girlboss",
    "grindset",
    "slay queen",
    "disrupting",
    "hustle",
    "#blessed",
    "mindset",
    "hard pill to swallow",
    "alpha",
    "unhinged (overused)",
  ],
};

export function VoiceSection() {
  return (
    <KitSection
      id="voice"
      eyebrow="01 · VOICE"
      title="how I sound"
      sub="One voice across all three modes – only the props change. I write captions like I'd send a 2am voice memo to a friend: specific, soft, a little weird."
    >
      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-5">
        {voiceCards.map((card) => (
          <div key={card.label} className="card p-6">
            <div className="eyebrow">{card.label}</div>
            <div className="mt-2.5 text-[15px] leading-[1.55]">{card.body}</div>
          </div>
        ))}
      </div>

      <DotDivider />

      <div className="grid grid-cols-1 gap-8 min-[820px]:grid-cols-2">
        <div className="card border-transparent bg-brand-purple-50 p-7">
          <div className="eyebrow text-brand-purple-600">✓ SAY THIS</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {voiceWords.do.map((word) => (
              <span
                key={word}
                className="rounded-full bg-white px-3 py-1.5 font-body text-[13px] text-brand-purple-600"
              >
                {word}
              </span>
            ))}
          </div>
        </div>

        <div className="card border-transparent bg-[#fbe9ee] p-7">
          <div className="eyebrow text-brand-rose-400">✗ NEVER</div>
          <div className="mt-4 flex flex-wrap gap-2">
            {voiceWords.dont.map((word) => (
              <span
                key={word}
                className="rounded-full bg-white px-3 py-1.5 font-body text-[13px] text-brand-rose-400 line-through decoration-brand-rose-300"
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </div>
    </KitSection>
  );
}

const colorRows = [
  {
    name: "Princess Purple",
    note: "primary · 40% of surfaces",
    shades: [
      { hex: "#efeaf5" },
      { hex: "#e0d3ec" },
      { hex: "#c3a9d7" },
      { hex: "#a985c5" },
      { hex: "#8057a8", ink: "#fff" },
      { hex: "#624283", ink: "#fff" },
      { hex: "#45305d", ink: "#fff" },
      { hex: "#2a1d3d", ink: "#fff" },
    ],
  },
  {
    name: "Mauve Pink",
    note: "warm mid · photo overlays, chips",
    shades: [
      { hex: "#f4e4ef" },
      { hex: "#e8c5dd" },
      { hex: "#d19ac5" },
      { hex: "#a86c95", ink: "#fff" },
      { hex: "#6b3f5c", ink: "#fff" },
    ],
  },
  {
    name: "Dusty Rose",
    note: "soft mid · cozy & quote cards",
    shades: [
      { hex: "#fbe9ee" },
      { hex: "#f0cfd7" },
      { hex: "#d9a2b0" },
      { hex: "#c07e91" },
      { hex: "#945a6c", ink: "#fff" },
      { hex: "#633a48", ink: "#fff" },
    ],
  },
  {
    name: "Pastel Yellow",
    note: "accent only · sparkles, CTAs, script",
    shades: [
      { hex: "#fffdf2" },
      { hex: "#fff9d8" },
      { hex: "#fff1a8" },
      { hex: "#ffe875" },
      { hex: "#f5d648" },
      { hex: "#ccb035" },
      { hex: "#9a851f", ink: "#fff" },
    ],
  },
];

export function ColorsSection() {
  return (
    <KitSection
      id="colors"
      eyebrow="02 · PALETTE"
      title="colors"
      sub="Four families – Princess Purple as primary, Mauve & Dusty Rose for the soft side, Pastel Yellow as the single bright accent. Warm neutrals only; never cold greys."
    >
      <div className="grid gap-8">
        {colorRows.map((row) => (
          <SwatchRow key={row.name} {...row} />
        ))}
      </div>

      <DotDivider />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-4">
        <RuleCard
          eyebrow="RULE 01"
          eyebrowColor="#ffe875"
          className="border-transparent bg-[#2a1d3d] text-[#fff9d8]"
        >
          Dark purple (<span className="mono">#2a1d3d</span>) is my "dev
          mode" background. Always pair with pastel yellow accents.
        </RuleCard>
        <RuleCard eyebrow="RULE 02" className="border-transparent bg-brand-pink-50">
          Dusty rose + pastel yellow is the "cozy morning" combo. Use for
          lifestyle, food, balcony.
        </RuleCard>
        <RuleCard eyebrow="RULE 03" className="border-transparent bg-brand-yellow-100">
          Yellow is <strong>only</strong> an accent – never a dominant
          background unless it's a "vibe" post with stickers.
        </RuleCard>
        <RuleCard eyebrow="RULE 04">
          Never use pure <span className="mono">#000</span> or{" "}
          <span className="mono">#fff</span>. Use{" "}
          <span className="mono">#2a1d3d</span> and{" "}
          <span className="mono">#fffdf2</span> – warm ink & paper.
        </RuleCard>
      </div>
    </KitSection>
  );
}

const typeCards = [
  {
    eyebrow: "DISPLAY · BLANKA",
    sample: (
      <div className="h-display mt-2 text-[84px] leading-[0.88] text-brand-purple-700">
        SOFT
        <br />
        NERD
      </div>
    ),
    body: "Headlines, post titles, reel covers. Always uppercase, tight line-height (0.9). Never for body.",
    footer: "DEFAULT: Blanka",
    className: "border-transparent bg-brand-purple-50",
    footerClassName: "text-brand-purple-500",
  },
  {
    eyebrow: "BODY · AGRANDIR",
    sample: (
      <div className="mt-2 font-body text-[40px] font-semibold leading-none text-brand-purple-700">
        Aa Gg Qq
      </div>
    ),
    body: "Captions, UI, longer reads. Weights 300 / 500 / 700. Always regular-case.",
    footer: "DEFAULT: Agrandir",
    footerClassName: "text-brand-purple-500",
  },
  {
    eyebrow: "SCRIPT · MOONTIME",
    eyebrowClassName: "text-brand-rose-500",
    sample: (
      <div className="mt-2 font-script text-[64px] leading-[0.9] text-brand-rose-400">
        little things
      </div>
    ),
    body: 'The "whisper" – captions, CTAs, handwritten moments. Use sparingly, max 1 per composition.',
    footer: "DEFAULT: Moontime",
    className: "border-transparent bg-[#fbe9ee]",
    footerClassName: "text-brand-rose-500",
  },
];

const typeScale = [
  { name: "H1 · hero", cls: "h-display", size: "clamp(44px, 5.8vw, 72px)", ex: "soft launch" },
  { name: "H2 · section", cls: "h-display", size: "clamp(34px, 4vw, 48px)", ex: "builder mode" },
  { name: "H3 · card", cls: "h-display", size: 28, ex: "three.js day 3" },
  {
    name: "Body",
    cls: "body-sans",
    size: 15,
    ex: "a day in the life of a soft nerd princess, explained.",
  },
  { name: "Mono · eyebrow", cls: "mono", size: 11, ex: "★ 20.04.26 · LIVE" },
];

export function TypeSection() {
  return (
    <KitSection
      id="type"
      eyebrow="03 · TYPOGRAPHY"
      title="type system"
      sub="Three typefaces, clear roles. Blanka for impact display, Agrandir for body & UI, Moontime for handwritten accents. This kit is wired to my local font files."
    >
      <div className="grid grid-cols-1 gap-5 min-[900px]:grid-cols-[1.2fr_1fr_1fr]">
        {typeCards.map((card) => (
          <div key={card.eyebrow} className={cn("card p-8", card.className)}>
            <div className={cn("eyebrow", card.eyebrowClassName)}>
              {card.eyebrow}
            </div>
            {card.sample}
            <div className="mt-4 text-[13px] leading-[1.6] text-ink-soft">
              {card.body}
            </div>
            <div
              className={cn(
                "mt-3 font-mono text-[11px] tracking-[0.1em]",
                card.footerClassName,
              )}
            >
              {card.footer}
            </div>
          </div>
        ))}
      </div>

      <DotDivider />

      <div className="section-x-scroll pb-1">
        <div className="grid min-w-[1040px] grid-cols-5 items-stretch gap-3">
          {typeScale.map((scale) => (
            <div key={scale.name} className="card min-w-0 overflow-hidden p-[18px]">
              <div className="eyebrow text-[9px]">{scale.name}</div>
              <div
                className={scale.cls}
                style={{
                  fontSize: scale.size,
                  marginTop: 10,
                  lineHeight: 1.05,
                  color: "var(--pp-700)",
                  textTransform: scale.cls === "h-display" ? "uppercase" : "none",
                  letterSpacing: scale.cls === "mono" ? "0.14em" : undefined,
                  overflowWrap: scale.cls === "h-display" ? "normal" : "anywhere",
                }}
              >
                {scale.ex}
              </div>
            </div>
          ))}
        </div>
      </div>
    </KitSection>
  );
}

export function MotifsSection() {
  return (
    <KitSection
      id="motifs"
      eyebrow="04 · SIGNATURE VISUAL MOTIFS"
      title="the things that make it look like me"
      sub="Every brand needs 2-3 repeatable visual moves that become instantly recognizable. Mine are already on my Twitch overlays – I name them here and use them everywhere."
    >
      <div className="grid grid-cols-1 gap-5 min-[900px]:grid-cols-3">
        <MotifCard
          preview={
            <div className="contour-dark relative h-[200px]">
              <div className="absolute bottom-3 left-4 z-[1] font-mono text-[10px] uppercase tracking-[0.18em] text-brand-twitch-butter">
                01 · contour lines
              </div>
            </div>
          }
          title="TOPOGRAPHIC WAVES"
          body="Soft, flowing contour lines in a corner – never centered, never symmetric. Works on dark (purple) and light (lavender) backgrounds. Keep opacity low (5-10%) so it whispers, never shouts."
          use="use: Twitch panels · post backgrounds · story base"
        />

        <MotifCard
          preview={
            <div className="relative h-[200px] bg-brand-twitch-lav">
              <div className="halftone-beam absolute inset-0" />
              <div className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-purple-700">
                02 · halftone beam
              </div>
            </div>
          }
          title="DOT-FIELD SPOTLIGHT"
          body={'Diagonal dotted halftone – the "spotlight beam" from my Starting-Soon panel. I use it behind titles on hero posts, or as a texture on carousel covers. Pairs with contour lines.'}
          use="use: hero posts · carousel covers · reel thumbs"
        />

        <MotifCard
          preview={
            <div className="relative flex h-[200px] items-center justify-center bg-brand-twitch-deep">
              <div className="flex items-center font-display text-[84px] font-extrabold leading-none text-brand-twitch-butter">
                <span className="relative">
                  O
                  <span className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-[3px] border-brand-twitch-deep" />
                  <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-twitch-deep" />
                </span>
              </div>
              <div className="absolute bottom-3 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-twitch-butter">
                03 · target-O
              </div>
            </div>
          }
          title="TARGET-O CUTOUT"
          body={
            <>
              The "O" in OFFLINE with a crosshair target inside it – from my
              Twitch panel. This is my{" "}
              <strong>signature letterform detail</strong>. I use it sparingly: only
              in big display type on dark backgrounds.
            </>
          }
          use="use: hero titles · stream overlays · logo variants"
        />
      </div>

      <div className="mt-6 flex items-start gap-4 rounded-[var(--r-lg)] bg-paper-2 p-5">
        <div className="font-script text-[44px] leading-[0.9] text-brand-purple-600">
          rule
        </div>
        <p className="m-0 text-sm leading-[1.6] text-ink">
          <strong>Use max 2 motifs per asset.</strong> Contour + halftone = yes.
          Contour + halftone + target-O = too much. The target-O is rare – save
          it for moments that deserve a signature.
        </p>
      </div>
    </KitSection>
  );
}

const modes = [
  {
    key: "princess",
    title: "the princess",
    tagline: "soft life, high res",
    pct: 45,
    bg: "linear-gradient(135deg, var(--mp-50), var(--mp-100))",
    ink: "var(--dr-500)",
    does: "cozy setup, cafe, yoga, skincare, balcony, slow mornings, pretty food",
    feels: "warm afternoon light, lavender, oat milk, silk pillow case",
    visual: "dusty rose + mauve + script accents · photo-forward",
  },
  {
    key: "nerd",
    title: "the nerd",
    tagline: "builder mode on",
    pct: 35,
    bg: "#2a1d3d",
    ink: "#ffe875",
    does: "svelte tips, three.js reels, 3D template system, build logs, tutorials",
    feels: "2am terminal, mechanical keyboard clack, green cursor blink",
    visual: "deep purple + pastel yellow + mono · code-forward",
  },
  {
    key: "funny",
    title: "the funny one",
    tagline: "mostly sloth",
    pct: 20,
    bg: "var(--py-100)",
    ink: "var(--pp-700)",
    does: "sloth memes, confession posts, tiny disasters, Lego fails, playful chaos – stream highlights when I have them",
    feels: "slightly dissociating, mostly loving, has sent this as a reel",
    visual: "pastel yellow + sticker energy + chunky display",
  },
];

export function ModesSection() {
  return (
    <KitSection
      id="modes"
      eyebrow="05 · BRAND MODES"
      title="three modes, one me"
      sub="My differentiator is the mix. Each mode has its own visual recipe so the grid reads like a rhythm, not a blur. I rotate diagonally across the 3-column feed (see below)."
    >
      <div className="grid grid-cols-1 gap-5 min-[900px]:grid-cols-3">
        {modes.map((mode) => (
          <div
            key={mode.key}
            className="flex min-h-[420px] flex-col overflow-hidden rounded-[20px] p-8"
            style={{ background: mode.bg, color: mode.ink }}
          >
            <div className="eyebrow opacity-70" style={{ color: mode.ink }}>
              {mode.pct}% OF FEED
            </div>
            <div className="h-display mt-2.5 text-5xl leading-[0.92]">
              {mode.title}
            </div>
            <div className="mt-1 font-script text-[28px] opacity-85">
              {mode.tagline}
            </div>
            <div className="mt-6 text-[13px] leading-[1.6] opacity-90">
              <div className="mb-1 font-mono text-[10px] tracking-[0.2em] opacity-70">
                POSTS
              </div>
              {mode.does}
            </div>
            <div className="mt-4 text-[13px] leading-[1.6] opacity-90">
              <div className="mb-1 font-mono text-[10px] tracking-[0.2em] opacity-70">
                FEELS LIKE
              </div>
              <em className="font-script text-lg not-italic leading-[1.2]">
                {mode.feels}
              </em>
            </div>
            <div className="mt-auto border-t border-dashed border-current pt-3 font-mono text-[10px] tracking-[0.12em] opacity-60">
              {mode.visual}
            </div>
          </div>
        ))}
      </div>
    </KitSection>
  );
}
