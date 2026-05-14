import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/cn";

const POST_W = 540;
const POST_H = 675;

type ClaudeSlothVariant =
  | "peek"
  | "heart"
  | "coffee"
  | "code"
  | "zzz"
  | "balloon"
  | "princess"
  | "gaming"
  | "puzzles"
  | "glasses"
  | "writing"
  | "painting"
  | "singing"
  | "camping"
  | "doodle"
  | "banana"
  | "legoPurple"
  | "legoYellow";

const CLAUDE_SLOTH_SRC: Record<ClaudeSlothVariant, string> = {
  peek: "/assets/sloths/svg/sloth-doodle.svg",
  heart: "/assets/sloths/svg/sloth-hearts.svg",
  coffee: "/assets/sloths/svg/sloth-camping.svg",
  code: "/assets/sloths/svg/sloth-laptop.svg",
  zzz: "/assets/sloths/svg/sloth-sleeping.svg",
  balloon: "/assets/sloths/svg/sloth-hearts.svg",
  princess: "/assets/sloths/svg/sloth-dress.svg",
  gaming: "/assets/sloths/svg/sloth-gaming.svg",
  puzzles: "/assets/sloths/svg/sloth-puzzles.svg",
  glasses: "/assets/sloths/svg/sloth-glasses.svg",
  writing: "/assets/sloths/svg/sloth-writing.svg",
  painting: "/assets/sloths/svg/sloth-painting.svg",
  singing: "/assets/sloths/svg/sloth-singing.svg",
  camping: "/assets/sloths/svg/sloth-camping.svg",
  doodle: "/assets/sloths/svg/sloth-doodle.svg",
  banana: "/assets/sloths/svg/sloth-banana.svg",
  legoPurple: "/assets/sloths/svg/sloth-lego-purple.svg",
  legoYellow: "/assets/sloths/svg/sloth-lego-yellow.svg",
};

export function KitSection({
  id,
  eyebrow,
  title,
  sub,
  children,
  bg = "var(--paper)",
  className,
}: {
  id: string;
  eyebrow: string;
  title: string;
  sub?: string;
  children: ReactNode;
  bg?: string;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-[var(--line)] px-8 py-[100px] text-[var(--ink)] min-[760px]:px-16",
        className,
      )}
      style={{ background: bg }}
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12 flex flex-wrap items-baseline justify-between gap-4">
          <div>
            <div className="eyebrow mb-2.5">{eyebrow}</div>
            <h2 className="h-display m-0 text-[clamp(40px,6vw,72px)]">
              {title}
            </h2>
          </div>
          {sub ? (
            <div className="max-w-[440px] text-[15px] leading-[1.55] text-[var(--ink-soft)]">
              {sub}
            </div>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function DotDivider({ color = "var(--pp-200)" }: { color?: string }) {
  return (
    <div
      className="my-10 h-px border-t-2 border-dotted"
      style={{ borderColor: color }}
    />
  );
}

export function SwatchRow({
  name,
  shades,
  note,
}: {
  name: string;
  shades: { hex: string; ink?: string }[];
  note?: string;
}) {
  return (
    <div className="grid items-center gap-6 min-[760px]:grid-cols-[180px_minmax(0,1fr)]">
      <div>
        <div className="font-display text-xl font-extrabold uppercase leading-[0.92]">
          {name}
        </div>
        {note ? (
          <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--ink-soft)]">
            {note}
          </div>
        ) : null}
      </div>

      <div className="section-x-scroll pb-1">
        <div
          className="grid min-w-[680px] gap-2"
          style={{
            gridTemplateColumns: `repeat(${shades.length}, minmax(0, 1fr))`,
          }}
        >
          {shades.map((shade) => (
            <div
              key={shade.hex}
              className="flex h-[72px] flex-col justify-end rounded-[10px] p-2 font-mono text-[9px] tracking-[0.06em] shadow-[inset_0_0_0_1px_rgba(0,0,0,0.04)]"
              style={{ background: shade.hex, color: shade.ink || "#2a1d3d" }}
            >
              <div className="opacity-80">{shade.hex.toUpperCase()}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function RuleCard({
  eyebrow,
  eyebrowColor,
  className = "",
  children,
}: {
  eyebrow: string;
  eyebrowColor?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div className={cn("card p-[18px]", className)}>
      <div className="eyebrow" style={{ color: eyebrowColor }}>
        {eyebrow}
      </div>
      <div className="mt-2 text-[15px] leading-[1.45]">{children}</div>
    </div>
  );
}

export function MotifCard({
  preview,
  title,
  body,
  use,
}: {
  preview: ReactNode;
  title: string;
  body: ReactNode;
  use: string;
}) {
  return (
    <div className="card overflow-hidden p-0">
      {preview}
      <div className="p-5">
        <div className="h-display mb-2 text-lg text-[var(--pp-700)]">
          {title}
        </div>
        <p className="m-0 text-[13px] leading-[1.55] text-[var(--ink-soft)]">
          {body}
        </p>
        <div className="mt-3 font-mono text-[11px] text-[var(--pp-500)]">
          {use}
        </div>
      </div>
    </div>
  );
}

function IGPhoneFrame({
  children,
  width = 320,
}: {
  children: ReactNode;
  width?: number;
}) {
  const height = width * 2.16;

  return (
    <div
      className="relative"
      style={{
        width,
        height,
        borderRadius: 44,
        background: "#1a0f28",
        padding: 10,
        boxShadow:
          "0 30px 60px rgba(42,16,63,0.3), 0 0 0 1px rgba(42,16,63,0.2)",
      }}
    >
      <div
        className="relative flex h-full w-full flex-col overflow-hidden rounded-[34px] bg-white"
      >
        <div className="absolute left-1/2 top-2 z-50 h-[26px] w-[100px] -translate-x-1/2 rounded-[20px] bg-black" />
        <div
          className="flex h-11 shrink-0 items-center justify-between px-6 text-[13px] font-semibold"
          style={{ fontFamily: "-apple-system, system-ui" }}
        >
          <span>9:41</span>
          <span className="w-[100px]" />
          <span className="tracking-[1px]">●●●●</span>
        </div>
        {children}
      </div>
    </div>
  );
}

function IGProfile() {
  const tiles = [
    {
      bg: "linear-gradient(180deg,#875BA4,#4E3464)",
      inner: (
        <div className="h-display p-[10px] text-xl leading-[0.88] text-[#FFF7DA]">
          first
          <br />
          stream
        </div>
      ),
      isReel: false,
    },
    {
      bg: "#2A103F",
      inner: (
        <div className="p-[10px] font-mono text-[10px] leading-[1.3] text-[#FCEB86]">
          $ svelte
          <br />
          tip 04
        </div>
      ),
      isReel: false,
    },
    {
      bg: "#EACFDA",
      inner: (
        <div className="h-display p-[10px] text-[15px] leading-[0.95] text-[#8E5C72]">
          confession
          <br />
          #17
        </div>
      ),
      isReel: true,
    },
    {
      bg: "#F6E8EE",
      inner: (
        <div className="flex h-full items-center justify-center p-[10px]">
          <div
            className="flex h-full w-full items-center justify-center rounded"
            style={{
              background:
                "repeating-linear-gradient(135deg,#EACFDA 0 6px,#F6E8EE 6px 12px)",
              fontFamily: "var(--ff-mono)",
              fontSize: 8,
              color: "#8E5C72",
            }}
          >
            [ oat latte ]
          </div>
        </div>
      ),
      isReel: false,
    },
    {
      bg: "#EEE6F4",
      inner: (
        <div className="h-display p-[10px] text-xs leading-[0.95] text-[#2A103F]">
          three.js
          <br />
          build log
          <br />→ day 3
        </div>
      ),
      isReel: false,
    },
    {
      bg: "#4E3464",
      inner: (
        <div className="p-[10px] font-mono text-[9px] leading-[1.6] tracking-[0.14em] text-[#FCEB86]">
          ● LIVE
          <br />
          TWITCH
          <br />
          losing lol
        </div>
      ),
      isReel: true,
    },
    {
      bg: "#DCCDE8",
      inner: (
        <div className="h-display p-[10px] text-[11px] leading-none text-[#2A103F]">
          being
          <br />
          soft ≠
          <br />
          weak
        </div>
      ),
      isReel: false,
    },
    {
      bg: "#FFF7DA",
      inner: (
        <div className="h-display p-[10px] text-[11px] leading-none text-[#2A103F]">
          svelte vs
          <br />
          react →
          <br />
          for 3d
        </div>
      ),
      isReel: false,
    },
    {
      bg: "#FFF0B2",
      inner: (
        <div className="grid h-full grid-cols-2 gap-[3px] p-[6px]">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-[3px]"
              style={{ background: i % 2 === 0 ? "#E1BDD5" : "#DCCDE8" }}
            >
              <ClaudeSloth
                size={18}
                variant={(["peek", "heart", "banana", "glasses"] as const)[i]}
              />
            </div>
          ))}
        </div>
      ),
      isReel: true,
    },
  ];

  const highlights = [
    {
      label: "cozy",
      bg: "linear-gradient(135deg,#F6E8EE,#EACFDA)",
      icon: (
        <div className="font-script text-xl leading-none text-[#8E5C72]">c</div>
      ),
    },
    {
      label: "dev",
      bg: "#2A103F",
      icon: (
        <div className="font-mono text-xs leading-none text-[#FCEB86]">
          &lt;/&gt;
        </div>
      ),
    },
    {
      label: "sloths",
      bg: "#FFF7DA",
      icon: <ClaudeSloth size={38} variant="heart" />,
    },
    {
      label: "stream",
      bg: "linear-gradient(135deg,#875BA4,#4E3464)",
      icon: (
        <div className="h-[6px] w-[6px] rounded-full bg-[#ff6b6b] shadow-[0_0_0_3px_rgba(255,107,107,0.3)]" />
      ),
    },
    {
      label: "lego",
      bg: "#E1BDD5",
      icon: (
        <div className="grid grid-cols-2 gap-[2px]">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-[5px] w-[5px] rounded-[3px] bg-[#875BA4]"
            />
          ))}
        </div>
      ),
    },
    {
      label: "yoga",
      bg: "linear-gradient(135deg,#DCCDE8,#BCA3CC)",
      icon: (
        <div className="font-script text-[22px] leading-none text-[#2A103F]">
          ❀
        </div>
      ),
    },
  ];

  return (
    <div className="flex-1 overflow-auto bg-white">
      <div className="flex items-center justify-between border-b border-[#eee] px-4 py-2">
        <div
          className="flex items-center gap-1 text-[17px] font-semibold"
          style={{ fontFamily: '"Billabong", cursive' }}
        >
          <span>its_neluska</span>
          <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M7 10l5 5 5-5"
              stroke="#000"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex gap-4">
          <span className="text-xl">+</span>
          <span className="text-[18px]">☰</span>
        </div>
      </div>

      <div className="px-4 pb-2 pt-[14px]">
        <div className="flex items-center gap-6">
          <div className="h-[86px] w-[86px] rounded-[43px] bg-[linear-gradient(135deg,#875BA4,#C58BB0,#FCEB86)] p-[3px]">
            <div className="h-full w-full rounded-full bg-white p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#EEE6F4]">
                <ClaudeSloth size={62} variant="heart" />
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-around">
            {[
              { n: "47", l: "posts" },
              { n: "3,208", l: "followers" },
              { n: "421", l: "following" },
            ].map((stat) => (
              <div key={stat.l} className="text-center">
                <div className="text-[15px] font-bold">{stat.n}</div>
                <div className="text-xs text-[#555]">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 text-[13px] leading-[1.35]">
          <div className="font-bold">neluska ✦</div>
          <div className="mt-px font-body text-[#262626]">
            soft nerd princess
          </div>
          <div className="font-body text-[#262626]">
            dev by day · sloth at heart 🦥
          </div>
          <div className="font-body text-[#262626]">
            svelte + three.js + too many puzzle pieces
          </div>
          <div className="mt-[3px] font-semibold text-[#875BA4]">
            ↳ twitch.tv/its_neluska
          </div>
        </div>

        <div className="mt-3 flex gap-1.5">
          <div className="flex-1 rounded-lg bg-[#875BA4] py-[7px] text-center text-[13px] font-semibold text-white">
            Follow
          </div>
          <div className="flex-1 rounded-lg bg-[#EFEFEF] py-[7px] text-center text-[13px] font-semibold">
            Message
          </div>
          <div className="w-[30px] rounded-lg bg-[#EFEFEF] py-[7px] text-center text-[13px] font-semibold">
            ▾
          </div>
        </div>

        <div className="mt-[14px] flex gap-[14px] overflow-x-auto">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="flex shrink-0 flex-col items-center gap-1"
            >
              <div
                className="flex h-[62px] w-[62px] items-center justify-center rounded-[31px] border-[1.5px] border-[#eee] p-[3px]"
                style={{ background: highlight.bg }}
              >
                <div
                  className="flex h-full w-full items-center justify-center rounded-full"
                  style={{ background: highlight.bg }}
                >
                  {highlight.icon}
                </div>
              </div>
              <div className="text-[11px]">{highlight.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-1 flex border-y border-[#eee]">
        <div className="flex-1 border-b border-black py-2 text-center">⊞</div>
        <div className="flex-1 py-2 text-center text-[#888]">▶</div>
        <div className="flex-1 py-2 text-center text-[#888]">♡</div>
      </div>

      <div className="grid grid-cols-3 gap-[1.5px] p-[1.5px]">
        {tiles.map((tile, i) => (
          <div
            key={i}
            className="relative overflow-hidden"
            style={{ aspectRatio: "1 / 1", background: tile.bg }}
          >
            {tile.inner}
            {tile.isReel ? (
              <div className="absolute right-[6px] top-1 text-[9px] text-white shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                ▶
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function IGPostDetail() {
  return (
    <div className="flex-1 overflow-auto bg-white">
      <div className="flex items-center gap-[14px] border-b border-[#eee] px-[14px] py-2">
        <span className="text-xl">←</span>
        <div className="text-sm font-semibold">Posts</div>
      </div>

      <div className="flex items-center gap-2.5 px-[14px] py-[10px]">
        <div className="h-8 w-8 rounded-2xl bg-[linear-gradient(135deg,#875BA4,#C58BB0)] p-[1.5px]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#EEE6F4]">
            <ClaudeSloth size={24} variant="heart" />
          </div>
        </div>
        <div className="text-[13px] font-semibold">its_neluska</div>
        <div className="ml-auto text-base">⋯</div>
      </div>

      <div
        className="relative w-full overflow-hidden text-[#FFF7DA]"
        style={{ aspectRatio: "4 / 5", background: "linear-gradient(180deg,#875BA4,#4E3464)" }}
      >
        <div className="absolute left-5 top-5">
          <Sparkle size={18} color="#FFF7DA" />
          <Sparkle
            size={10}
            color="#FFF7DA"
            style={{ position: "relative", left: 18, top: -6 }}
          />
        </div>
        <div className="absolute left-5 top-[60px] font-mono text-[10px] tracking-[0.2em] opacity-90 min-[340px]:text-[10px]">
          20:00 – 22:00 / 20.04.2026
        </div>
        <div className="h-display absolute left-5 right-5 top-[100px] text-[44px] leading-[0.9]">
          first
          <br />
          stream
          <br />
          today
        </div>
        <div className="absolute bottom-4 right-3">
          <ClaudeSloth size={90} variant="heart" />
        </div>
        <div className="absolute bottom-5 left-5 font-script text-[22px] text-[#FCEB86]">
          catch me there ✿
        </div>
        <div className="absolute right-[14px] top-[14px] rounded-[10px] bg-[rgba(0,0,0,0.5)] px-2 py-[3px] text-[10px] text-white">
          1/4
        </div>
      </div>

      <div className="flex items-center gap-[14px] px-[14px] py-[10px] text-[22px]">
        <span>♡</span>
        <span>💬</span>
        <span className="-rotate-[30deg]">➤</span>
        <span className="ml-auto">⎆</span>
      </div>
      <div className="px-[14px] text-[13px]">
        <div className="font-bold">
          Liked by <span>nyx.codes</span> and <span>486 others</span>
        </div>
        <div className="mt-1.5 leading-[1.45]">
          <span className="font-bold">its_neluska</span> ok so i'm doing the
          scary thing ✦ first twitch stream TONIGHT. we'll vibe, i'll lose at
          LOL, someone will get carried away and build a whole landing page in
          svelte on the side. no pressure, all warmth, maybe a sloth makes an
          appearance.
        </div>
        <div className="mt-1.5 font-semibold text-[#875BA4]">
          #softnerd #womenintech #twitchstreamer #threejs
        </div>
        <div className="mt-2 text-[11px] text-[#888]">View all 42 comments</div>
        <div className="mt-1.5 text-[11px] text-[#888]">2 HOURS AGO</div>
      </div>
      <div className="h-10" />
    </div>
  );
}

function IGStoryView() {
  return (
    <div
      className="relative flex-1 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,#BCA3CC 0%,#DCCDE8 60%,#FFF7DA 100%)",
      }}
    >
      <div className="absolute left-[10px] right-[10px] top-2 z-10 flex gap-[3px]">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-0.5 flex-1 rounded-[2px]"
            style={{
              background:
                i === 1 ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)",
            }}
          />
        ))}
      </div>

      <div className="absolute left-3 right-3 top-6 z-10 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-[14px] bg-[#EEE6F4]">
          <ClaudeSloth size={22} variant="heart" />
        </div>
        <div className="text-xs font-semibold text-[#2A103F]">
          its_neluska · <span className="font-normal">2h</span>
        </div>
        <div className="ml-auto text-sm text-[#2A103F]">✕</div>
      </div>

      <div className="absolute left-[18px] top-[60px] font-mono text-[9px] tracking-[0.24em] text-[#4E3464]">
        ★ 20.04.26 · MONDAY
      </div>
      <div className="h-display absolute left-[18px] right-[18px] top-[110px] text-[44px] leading-[0.9] text-[#2A103F]">
        good
        <br />
        morning
        <br />
        friends
      </div>
      <div className="absolute left-[18px] right-[18px] top-[290px] font-script text-[28px] leading-none text-[#8E5C72]">
        coffee first ·
        <br />
        then chaos
      </div>

      <div className="absolute bottom-[70px] right-[14px]">
        <ClaudeSloth size={76} variant="camping" />
      </div>

      <div className="absolute bottom-4 left-3 right-3 flex items-center gap-2">
        <div className="flex h-9 flex-1 items-center rounded-[18px] border border-[rgba(42,16,63,0.3)] px-[14px] text-xs text-[rgba(42,16,63,0.6)]">
          Reply to neluska...
        </div>
        <span className="text-[22px] text-[#2A103F]">♡</span>
        <span className="-rotate-[30deg] text-[22px] text-[#2A103F]">➤</span>
      </div>
    </div>
  );
}

export function IGShowcase() {
  const views = [
    {
      label: "profile · grid view",
      content: <IGProfile />,
    },
    {
      label: "post · detail view",
      content: <IGPostDetail />,
    },
    {
      label: "story · fullscreen",
      content: <IGStoryView />,
    },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-9 py-5">
      {views.map((view) => (
        <div key={view.label} className="text-center">
          <IGPhoneFrame>{view.content}</IGPhoneFrame>
          <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--ink-soft)]">
            {view.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function PostFrame({
  bg = "#efeaf5",
  children,
  label,
  mode,
  pad = 36,
  style = {},
}: {
  bg?: string;
  children: ReactNode;
  label: string;
  mode: "princess" | "nerd" | "funny";
  pad?: number;
  style?: CSSProperties;
}) {
  return (
    <figure className="m-0 flex flex-col gap-2.5">
      <div
        className="relative overflow-hidden rounded-[18px]"
        style={{
          width: POST_W,
          height: POST_H,
          background: bg,
          padding: pad,
          color: "var(--ink)",
          boxShadow: "var(--sh-md)",
          ...style,
        }}
      >
        {children}
      </div>
      <figcaption className="flex items-center gap-2 font-mono text-[11px] tracking-[0.04em] text-[var(--ink-soft)]">
        <span
          className="rounded px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-white"
          style={{
            background:
              mode === "princess"
                ? "var(--pp-400)"
                : mode === "nerd"
                  ? "#2a1d3d"
                  : "var(--dr-300)",
          }}
        >
          {mode}
        </span>
        <span>{label}</span>
      </figcaption>
    </figure>
  );
}

function PostSoftAnnounce() {
  return (
    <PostFrame
      mode="princess"
      label="soft announce · launches, drops, events"
      bg="linear-gradient(180deg,#8057a8 0%, #624283 100%)"
      style={{ color: "#fff9d8" }}
    >
      <div className="absolute left-9 top-9 text-[#fff9d8]">
        <Sparkle size={28} />
        <Sparkle
          size={14}
          style={{ position: "relative", left: 28, top: -8 }}
        />
        <Sparkle
          size={10}
          style={{ position: "relative", left: 8, top: 16 }}
        />
      </div>
      <div className="absolute left-9 top-[130px] font-mono text-[13px] tracking-[0.2em] opacity-80">
        20:00 – 22:00 / 20.04.2026
      </div>
      <div className="h-display absolute left-9 right-9 top-[180px] text-[78px] leading-[0.9] text-[#fff9d8]">
        new
        <br />
        reel
        <br />
        today
      </div>
      <div className="absolute bottom-[30px] right-[30px]">
        <ClaudeSloth size={165} variant="heart" />
      </div>
      <div className="absolute bottom-10 left-9 font-script text-[28px] text-[#ffe875]">
        catch me there ✿
      </div>
    </PostFrame>
  );
}

function PostSoftPhoto() {
  return (
    <PostFrame
      mode="princess"
      label="photo frame · cafe, skincare, balcony, setup"
      bg="var(--mp-50)"
    >
      <div
        className="absolute rounded-lg"
        style={{
          inset: 36,
          background:
            "repeating-linear-gradient(135deg, #f0cfd7 0 10px, #fbe9ee 10px 20px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="font-mono text-[11px] tracking-[0.1em] text-[var(--dr-400)]">
          [ PHOTO – balcony morning ]
        </div>
      </div>
      <Washi
        color="var(--py-200)"
        rotate={-8}
        width={160}
        style={{ top: 24, left: 70 }}
      />
      <Washi
        color="var(--mp-100)"
        rotate={12}
        width={140}
        style={{ top: 24, right: 60 }}
      />
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-[10px] bg-white px-5 py-4 shadow-[0_6px_14px_rgba(100,60,100,0.08)]">
        <div>
          <div className="font-script text-[32px] leading-none text-[var(--pp-500)]">
            saturday, slow
          </div>
          <div className="mt-1 font-mono text-[10px] tracking-[0.18em] text-[var(--dr-400)]">
            NO THOUGHTS · ONLY LATTE
          </div>
        </div>
        <Heart size={26} color="var(--dr-300)" />
      </div>
      <div className="absolute right-10 top-16">
        <ClaudeSloth size={135} variant="princess" />
      </div>
    </PostFrame>
  );
}

function PostQuote() {
  return (
    <PostFrame
      mode="princess"
      label="quote · feelings, mantras, soft wisdom"
      bg="#e0d3ec"
    >
      <div className="absolute left-10 top-10 font-mono text-[11px] tracking-[0.2em] text-[var(--pp-500)]">
        ☾ a note to self
      </div>
      <div className="absolute left-10 right-10 top-[130px]">
        <div className="h-display text-[50px] leading-[0.95] text-[var(--pp-700)]">
          being soft
          <br />
          is not the
          <br />
          opposite of
          <br />
          being{" "}
          <span className="font-script font-normal normal-case text-[var(--dr-400)]">
            strong
          </span>
          .
        </div>
      </div>
      <div className="absolute bottom-9 left-10 right-10 flex items-end justify-between">
        <div className="font-mono text-[10px] tracking-[0.2em] text-[var(--pp-500)]">
          @its_neluska
        </div>
        <ClaudeSloth size={128} variant="glasses" />
      </div>
      <Sparkle
        size={14}
        color="var(--py-400)"
        style={{ position: "absolute", right: 60, top: 110 }}
      />
      <Sparkle
        size={8}
        color="var(--py-400)"
        style={{ position: "absolute", right: 110, top: 80 }}
      />
    </PostFrame>
  );
}

function PostTerminal() {
  return (
    <PostFrame
      mode="nerd"
      label="code snippet · tip, gotcha, 1-line tutorial"
      bg="#2a1d3d"
      style={{ color: "#f4e4ef" }}
    >
      <div className="absolute left-9 top-8 flex items-center gap-2">
        <span className="h-2.5 w-2.5 rounded-full bg-[#d9a2b0]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffe875]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#a985c5]" />
        <span className="ml-2 font-mono text-[11px] tracking-[0.12em] text-[#c3a9d7]">
          ~/svelte-tip
        </span>
      </div>
      <div className="absolute left-9 right-9 top-[90px] font-mono text-[17px] leading-[1.55]">
        <div className="text-[#ffe875]">
          $ <span className="text-[#f4e4ef]">svelte stores, but make it</span>
        </div>
        <div className="ml-[14px] mt-1 text-[#c3a9d7]">/* sparkly ✨ */</div>
        <div className="mt-4">
          <span className="text-[#d19ac5]">export</span>{" "}
          <span className="text-[#ffe875]">const</span> mood =
          <br />
          &nbsp;&nbsp;<span className="text-[#a985c5]">writable</span>(
          <span className="text-[#ffe875]">'soft'</span>);
        </div>
        <div className="mt-4 text-[#c3a9d7]">// then anywhere:</div>
        <div>
          $mood = <span className="text-[#ffe875]">'focused'</span>;
        </div>
      </div>
      <div className="h-display absolute bottom-10 left-9 right-9 text-4xl leading-[0.95] text-[#ffe875]">
        svelte stores
        <br />
        are a mood ✧
      </div>
      <div className="absolute bottom-8 right-8">
        <ClaudeSloth size={138} variant="code" />
      </div>
    </PostFrame>
  );
}

function PostBuildLog() {
  return (
    <PostFrame
      mode="nerd"
      label="build log · behind the scenes, progress"
      bg="var(--paper-2)"
    >
      <div className="absolute left-9 right-9 top-8 flex items-center justify-between">
        <div className="pill">BUILD LOG #04</div>
        <div className="font-mono text-[11px] text-[var(--pp-500)]">
          20.04.26
        </div>
      </div>
      <div className="h-display absolute left-9 right-9 top-[72px] text-[40px] leading-[0.95] text-[var(--pp-700)]">
        three.js
        <br />
        portfolio
        <br />
        v2 → day 3
      </div>
      <div className="absolute left-9 right-9 top-[280px] flex h-[170px] items-center justify-center rounded-xl bg-[linear-gradient(135deg,#45305d,#8057a8)]">
        <div className="font-mono text-[11px] tracking-[0.12em] text-[#fff9d8] opacity-90">
          [ WebGL scene preview ]
        </div>
        <div className="absolute h-20 w-20 rounded-full border border-dashed border-[rgba(255,249,216,0.3)]" />
      </div>
      <div className="absolute bottom-9 left-9 right-9 font-mono text-[13px] leading-[1.8] text-[var(--pp-600)]">
        <div>✓ scene + lights</div>
        <div>✓ custom shader (it's glittery)</div>
        <div className="text-[var(--ink-soft)]">☐ mobile performance</div>
      </div>
      <div className="absolute right-8 top-8">
        <ClaudeSloth size={130} variant="painting" />
      </div>
    </PostFrame>
  );
}

function PostCompare() {
  return (
    <PostFrame
      mode="nerd"
      label="carousel intro · edu, hot takes"
      bg="var(--py-100)"
    >
      <div className="absolute left-9 top-9 font-mono text-[11px] tracking-[0.2em] text-[var(--pp-500)]">
        CAROUSEL · 7 SLIDES →
      </div>
      <div className="h-display absolute left-9 right-9 top-[90px] text-[52px] leading-[0.92] text-[var(--pp-700)]">
        svelte vs
        <br />
        react
        <br />
        for 3d web
      </div>
      <div className="absolute left-9 right-9 top-80 grid grid-cols-2 gap-3">
        <div className="rounded-[10px] bg-[var(--pp-100)] px-[14px] py-4">
          <div className="font-mono text-[10px] tracking-[0.16em] text-[var(--pp-500)]">
            SVELTE
          </div>
          <div className="h-display mt-1.5 text-[28px] text-[var(--pp-700)]">
            reactive ♡
          </div>
        </div>
        <div className="rounded-[10px] bg-white px-[14px] py-4">
          <div className="font-mono text-[10px] tracking-[0.16em] text-[var(--dr-400)]">
            REACT
          </div>
          <div className="h-display mt-1.5 text-[28px] text-[var(--dr-500)]">
            battle-tested
          </div>
        </div>
      </div>
      <div className="absolute bottom-[30px] right-[30px] font-script text-[28px] text-[var(--pp-500)]">
        swipe →
      </div>
      <div className="absolute bottom-16 right-9">
        <ClaudeSloth size={126} variant="writing" />
      </div>
      <div className="absolute bottom-9 left-9 font-mono text-[11px] tracking-[0.16em] text-[var(--pp-500)]">
        @its_neluska
      </div>
    </PostFrame>
  );
}

function PostChaos() {
  return (
    <PostFrame
      mode="funny"
      label="confession · relatable chaos, sloth energy"
      bg="var(--dr-100)"
    >
      <div className="absolute left-10 top-10 font-mono text-[11px] tracking-[0.18em] text-[var(--dr-400)]">
        CONFESSION #17
      </div>
      <div className="h-display absolute left-10 right-10 top-20 text-[58px] leading-[0.92] text-[var(--dr-500)]">
        told myself
        <br />
        "just 1 more
        <br />
        puzzle piece"
      </div>
      <div className="h-display absolute left-10 right-10 top-[340px] text-4xl leading-[0.95] text-[var(--pp-600)]">
        3 hours ago.
        <br />
        have not moved.
      </div>
      <div className="absolute bottom-[30px] left-[30px]">
        <ClaudeSloth size={178} variant="puzzles" />
      </div>
      <Note
        color="var(--py-200)"
        rotate={6}
        style={{ position: "absolute", right: 36, top: 36, fontSize: 18 }}
      >
        send help 🦥
      </Note>
    </PostFrame>
  );
}

function PostStream() {
  return (
    <PostFrame
      mode="funny"
      label="event announcement · stream, collab, or drop"
      bg="#45305d"
      style={{ color: "#fff9d8" }}
    >
      <div className="absolute left-9 top-9 flex items-center gap-2">
        <div className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b] shadow-[0_0_0_6px_rgba(255,107,107,0.25)]" />
        <div className="font-mono text-[11px] tracking-[0.2em] text-[#ffe875]">
          SPECIAL EVENT
        </div>
      </div>
      <div className="h-display absolute left-9 right-9 top-[90px] text-[68px] leading-[0.9] text-[#ffe875]">
        live
        <br />
        tonight
        <br />
        20:00
        <br />
        ✿
      </div>
      <div className="absolute bottom-9 left-9 right-9 flex items-end justify-between">
        <div>
          <div className="font-mono text-[11px] tracking-[0.2em] text-[#c3a9d7]">
            TWITCH.TV/
          </div>
          <div className="h-display text-[22px] text-[#fff9d8]">
            its_neluska
          </div>
        </div>
        <ClaudeSloth size={148} variant="gaming" />
        <div className="font-script text-[28px] text-[#f0cfd7]">tune in ✿</div>
      </div>
    </PostFrame>
  );
}

function PostReelCover() {
  return (
    <PostFrame
      mode="nerd"
      label="reel cover · 9:16 title safe for grid"
      bg="linear-gradient(180deg,#2a1d3d 0%,#45305d 100%)"
      style={{ color: "#fff9d8" }}
    >
      <div
        className="absolute left-1/2 top-1/2 w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-xl border-2 border-[#ffe875] bg-[#1a0f28] p-3 shadow-[var(--sh-md)]"
        style={{ aspectRatio: "9 / 16" }}
      >
        <div className="font-mono text-[9px] tracking-[0.2em] text-[#c3a9d7]">
          REEL COVER
        </div>
        <div className="mt-10 h-display text-center text-[34px] leading-[0.95] text-[#ffe875]">
          60s
          <br />
          dev tip
        </div>
        <div className="absolute bottom-3 left-0 right-0 text-center font-mono text-[10px] text-[#c3a9d7]">
          @its_neluska
        </div>
      </div>
      <div className="absolute right-6 top-6 max-w-[120px] text-right font-mono text-[10px] leading-snug text-[#c3a9d7]">
        safe zone · thumbs
      </div>
    </PostFrame>
  );
}

function PostVibe() {
  const collection: ClaudeSlothVariant[] = [
    "doodle",
    "heart",
    "camping",
    "code",
    "zzz",
    "princess",
    "gaming",
    "puzzles",
    "glasses",
    "writing",
    "painting",
    "singing",
  ];

  return (
    <PostFrame
      mode="funny"
      label="vibe post · pure aesthetic, no agenda"
      bg="var(--py-100)"
    >
      <div className="absolute inset-[30px] grid grid-cols-3 grid-rows-4 gap-2">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-[10px]"
            style={{
              background:
                i % 3 === 0
                  ? "var(--mp-100)"
                  : i % 3 === 1
                    ? "var(--pp-100)"
                    : "var(--dr-100)",
            }}
          >
            <ClaudeSloth size={96} variant={collection[i]} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white px-[18px] py-[10px] font-script text-[26px] text-[var(--pp-500)] shadow-[var(--sh-md)]">
        the collection
      </div>
    </PostFrame>
  );
}

export function PostGrid9() {
  const posts = [
    <PostSoftAnnounce key="soft-announce" />,
    <PostTerminal key="terminal" />,
    <PostChaos key="chaos" />,
    <PostSoftPhoto key="soft-photo" />,
    <PostBuildLog key="build-log" />,
    <PostStream key="stream" />,
    <PostReelCover key="reel-cover" />,
    <PostQuote key="quote" />,
    <PostCompare key="compare" />,
    <PostVibe key="vibe" />,
  ];

  return (
    <div className="section-x-scroll pb-[14px]">
      <div className="grid min-w-full w-max grid-cols-[repeat(3,540px)] gap-7 [scroll-snap-type:x_proximity]">
        {posts.map((post, i) => (
          <div key={i} className="[scroll-snap-align:start]">
            {post}
          </div>
        ))}
      </div>
    </div>
  );
}

export function FeedPreview() {
  const tiles = [
    {
      bg: "linear-gradient(180deg,#8057a8,#624283)",
      el: (
        <div className="h-display p-[14px] text-[22px] leading-[0.9] text-[#fff9d8]">
          first
          <br />
          stream
        </div>
      ),
    },
    {
      bg: "#2a1d3d",
      el: (
        <div className="p-[14px] font-mono text-[11px] text-[#ffe875]">
          $ svelte
          <br />
          tip 04
        </div>
      ),
    },
    {
      bg: "var(--dr-100)",
      el: (
        <div className="h-display p-[14px] text-lg leading-[0.95] text-[var(--dr-500)]">
          confession
          <br />
          #17
        </div>
      ),
    },
    {
      bg: "var(--mp-50)",
      el: (
        <div className="p-[14px] font-mono text-[10px] tracking-[0.1em] text-[var(--dr-400)]">
          [ PHOTO ]
          <br />
          balcony am
        </div>
      ),
    },
    {
      bg: "var(--paper-2)",
      el: (
        <div className="h-display p-[14px] text-base leading-[0.95] text-[var(--pp-700)]">
          build log
          <br />
          three.js
        </div>
      ),
    },
    {
      bg: "#45305d",
      el: (
        <div className="p-[14px] font-mono text-[10px] tracking-[0.14em] text-[#ffe875]">
          ● LIVE
          <br />
          TWITCH
        </div>
      ),
    },
    {
      bg: "#e0d3ec",
      el: (
        <div className="h-display p-[14px] text-[14px] leading-none text-[var(--pp-700)]">
          being
          <br />
          soft ≠
          <br />
          weak
        </div>
      ),
    },
    {
      bg: "var(--py-100)",
      el: (
        <div className="h-display p-[14px] text-[14px] leading-none text-[var(--pp-700)]">
          svelte vs
          <br />
          react →
        </div>
      ),
    },
    {
      bg: "var(--py-100)",
      el: (
        <div className="grid h-full grid-cols-2 gap-1 p-2.5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded"
              style={{
                background: i % 2 === 0 ? "var(--mp-100)" : "var(--pp-100)",
              }}
            >
              <ClaudeSloth size={26} />
            </div>
          ))}
        </div>
      ),
    },
  ];

  return (
    <div className="mx-auto max-w-[360px]">
      <div className="rounded-xl border border-[var(--line)] bg-white p-4 shadow-[var(--sh-md)]">
        <div className="mb-[14px] flex items-center gap-2.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#8057a8,#d19ac5)]">
            <ClaudeSloth size={36} variant="heart" />
          </div>
          <div>
            <div className="font-mono text-[13px] font-semibold">
              its_neluska
            </div>
            <div className="font-body text-xs text-[var(--ink-soft)]">
              soft nerd princess ✦ dev by day ✦ sloth at heart
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[3px]">
          {tiles.map((tile, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded"
              style={{ aspectRatio: "1 / 1.25", background: tile.bg }}
            >
              {tile.el}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-2.5 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--ink-soft)]">
        Feed rhythm – Princess / Nerd / Funny rotating diagonally
      </div>
    </div>
  );
}

export function BrandMark() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#8057a8,#d19ac5)] shadow-[var(--sh-sm)]">
      <ClaudeSloth size={30} />
    </div>
  );
}

export function HeroOrnament() {
  return (
    <div className="relative h-[360px] w-full min-w-0">
      <div className="absolute right-[30px] top-5 h-[280px] w-[220px] rotate-[6deg] rounded-[18px] bg-[linear-gradient(180deg,#c3a9d7,#8057a8)] p-6 text-[#fff9d8] shadow-[var(--sh-lg)]">
        <div className="font-mono text-[10px] tracking-[0.2em] opacity-85">
          ☾ MANTRA
        </div>
        <div className="h-display mt-10 text-[30px] leading-[0.95]">
          being
          <br />
          soft is
          <br />
          not weak
        </div>
      </div>

      <div className="absolute left-0 top-20 h-60 w-[220px] -rotate-[5deg] rounded-[18px] bg-[#2a1d3d] p-5 font-mono text-xs leading-[1.55] text-[#f4e4ef] shadow-[var(--sh-lg)]">
        <div className="text-[#ffe875]">
          $ <span className="text-[#c3a9d7]">whoami</span>
        </div>
        <div className="mt-2">
          &gt; <span className="text-[#ffe875]">its_neluska</span>
        </div>
        <div>&gt; soft nerd princess</div>
        <div>&gt; dev by day</div>
        <div>&gt; sloth at heart ♡</div>
        <div className="mt-3.5 text-[#c3a9d7]">// stack:</div>
        <div>svelte · three · r3f</div>
        <div className="mt-1.5 inline-block h-[11px] w-1.5 animate-[blink_1.1s_steps(1)_infinite] bg-[#ffe875] align-middle" />
      </div>

      <div className="floaty absolute bottom-0 right-10">
        <ClaudeSloth size={120} variant="heart" />
      </div>
      <Sparkle
        size={28}
        color="var(--py-400)"
        className="absolute right-[100px] top-0"
      />
      <Sparkle
        size={16}
        color="var(--py-400)"
        className="absolute right-2 top-10"
      />
      <Sparkle
        size={10}
        color="var(--pp-400)"
        className="absolute left-20 top-[70px]"
      />
    </div>
  );
}

export function ClaudeSloth({
  size = 64,
  variant = "peek",
}: {
  size?: number;
  variant?: ClaudeSlothVariant;
}) {
  const rotationByVariant = {
    peek: -6,
    heart: 0,
    coffee: 5,
    code: -3,
    zzz: 8,
    balloon: 0,
    princess: -2,
    gaming: -4,
    puzzles: 3,
    glasses: -2,
    writing: 2,
    painting: -3,
    singing: 3,
    camping: 5,
    doodle: -6,
    banana: -4,
    legoPurple: 2,
    legoYellow: -2,
  };
  const transform =
    variant === "coffee"
      ? `scaleX(-1) rotate(${rotationByVariant[variant]}deg)`
      : `rotate(${rotationByVariant[variant]}deg)`;

  return (
    <div
      className="relative flex items-center justify-center overflow-visible"
      style={{ width: size, height: size }}
    >
      <img
        src={CLAUDE_SLOTH_SRC[variant]}
        alt=""
        className="h-full w-full object-contain"
        style={{
          transform,
          filter:
            variant === "zzz" ? "saturate(0.85) brightness(1.02)" : "none",
        }}
      />
    </div>
  );
}

export function Sparkle({
  size,
  color = "currentColor",
  className,
  style,
}: {
  size: number;
  color?: string;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={style}
      aria-hidden="true"
    >
      <path
        d="M12 1 L13.6 10.4 L23 12 L13.6 13.6 L12 23 L10.4 13.6 L1 12 L10.4 10.4 Z"
        fill={color}
      />
    </svg>
  );
}

export function Heart({
  size = 14,
  color = "currentColor",
  style,
}: {
  size?: number;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      style={style}
      aria-hidden="true"
    >
      <path
        d="M12 21s-8-5.5-8-11.5A4.5 4.5 0 0 1 12 7a4.5 4.5 0 0 1 8 2.5C20 15.5 12 21 12 21z"
        fill={color}
      />
    </svg>
  );
}

export function Washi({
  color = "var(--pp-200)",
  rotate = -6,
  width = 120,
  style,
}: {
  color?: string;
  rotate?: number;
  width?: number;
  style?: CSSProperties;
}) {
  return (
    <div
      className="absolute h-[22px] opacity-85"
      style={{
        width,
        background: color,
        transform: `rotate(${rotate}deg)`,
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(255,255,255,0.22) 0 6px, transparent 6px 12px)",
        ...style,
      }}
    />
  );
}

export function Note({
  children,
  rotate = -2,
  color = "var(--py-200)",
  style,
}: {
  children: ReactNode;
  rotate?: number;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className="rounded px-5 py-[18px] font-script leading-[1.2] text-[var(--pp-700)] shadow-[0_8px_18px_rgba(70,50,90,0.12)]"
      style={{
        background: color,
        transform: `rotate(${rotate}deg)`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
