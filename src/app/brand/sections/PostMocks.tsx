import type { CSSProperties, ReactNode } from "react";

import {
  ClaudeSloth,
  Heart,
  Note,
  Sparkle,
  Washi,
  type ClaudeSlothVariant,
} from "./primitives";

const POST_W = 540;
const POST_H = 675;

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
      <figcaption className="flex items-center gap-2 font-mono text-[11px] tracking-[0.04em] text-ink-soft">
        <span
          className="rounded px-2 py-0.5 text-[9px] uppercase tracking-[0.18em] text-white"
          style={{
            background:
              mode === "princess"
                ? "var(--brand-purple-400)"
                : mode === "nerd"
                  ? "#2a1d3d"
                  : "var(--brand-rose-300)",
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
      bg="var(--brand-pink-50)"
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
        <div className="font-mono text-[11px] tracking-[0.1em] text-brand-rose-400">
          [ PHOTO – balcony morning ]
        </div>
      </div>
      <Washi
        color="var(--brand-yellow-200)"
        rotate={-8}
        width={160}
        style={{ top: 24, left: 70 }}
      />
      <Washi
        color="var(--brand-pink-100)"
        rotate={12}
        width={140}
        style={{ top: 24, right: 60 }}
      />
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-[10px] bg-white px-5 py-4 shadow-[0_6px_14px_rgba(100,60,100,0.08)]">
        <div>
          <div className="font-script text-[32px] leading-none text-brand-purple-500">
            saturday, slow
          </div>
          <div className="mt-1 font-mono text-[10px] tracking-[0.18em] text-brand-rose-400">
            NO THOUGHTS · ONLY LATTE
          </div>
        </div>
        <Heart size={26} color="var(--brand-rose-300)" />
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
      <div className="absolute left-10 top-10 font-mono text-[11px] tracking-[0.2em] text-brand-purple-500">
        ☾ a note to self
      </div>
      <div className="absolute left-10 right-10 top-[130px]">
        <div className="h-display text-[50px] leading-[0.95] text-brand-purple-700">
          being soft
          <br />
          is not the
          <br />
          opposite of
          <br />
          being{" "}
          <span className="font-script font-normal normal-case text-brand-rose-400">
            strong
          </span>
          .
        </div>
      </div>
      <div className="absolute bottom-9 left-10 right-10 flex items-end justify-between">
        <div className="font-mono text-[10px] tracking-[0.2em] text-brand-purple-500">
          @its_neluska
        </div>
        <ClaudeSloth size={128} variant="glasses" />
      </div>
      <Sparkle
        size={14}
        color="var(--brand-yellow-400)"
        style={{ position: "absolute", right: 60, top: 110 }}
      />
      <Sparkle
        size={8}
        color="var(--brand-yellow-400)"
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
        <div className="font-mono text-[11px] text-brand-purple-500">
          20.04.26
        </div>
      </div>
      <div className="h-display absolute left-9 right-9 top-[72px] text-[40px] leading-[0.95] text-brand-purple-700">
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
      <div className="absolute bottom-9 left-9 right-9 font-mono text-[13px] leading-[1.8] text-brand-purple-600">
        <div>✓ scene + lights</div>
        <div>✓ custom shader (it's glittery)</div>
        <div className="text-ink-soft">☐ mobile performance</div>
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
      bg="var(--brand-yellow-100)"
    >
      <div className="absolute left-9 top-9 font-mono text-[11px] tracking-[0.2em] text-brand-purple-500">
        CAROUSEL · 7 SLIDES →
      </div>
      <div className="h-display absolute left-9 right-9 top-[90px] text-[52px] leading-[0.92] text-brand-purple-700">
        svelte vs
        <br />
        react
        <br />
        for 3d web
      </div>
      <div className="absolute left-9 right-9 top-80 grid grid-cols-2 gap-3">
        <div className="rounded-[10px] bg-brand-purple-100 px-[14px] py-4">
          <div className="font-mono text-[10px] tracking-[0.16em] text-brand-purple-500">
            SVELTE
          </div>
          <div className="h-display mt-1.5 text-[28px] text-brand-purple-700">
            reactive ♡
          </div>
        </div>
        <div className="rounded-[10px] bg-white px-[14px] py-4">
          <div className="font-mono text-[10px] tracking-[0.16em] text-brand-rose-400">
            REACT
          </div>
          <div className="h-display mt-1.5 text-[28px] text-brand-rose-500">
            battle-tested
          </div>
        </div>
      </div>
      <div className="absolute bottom-[30px] right-[30px] font-script text-[28px] text-brand-purple-500">
        swipe →
      </div>
      <div className="absolute bottom-16 right-9">
        <ClaudeSloth size={126} variant="writing" />
      </div>
      <div className="absolute bottom-9 left-9 font-mono text-[11px] tracking-[0.16em] text-brand-purple-500">
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
      bg="var(--brand-rose-100)"
    >
      <div className="absolute left-10 top-10 font-mono text-[11px] tracking-[0.18em] text-brand-rose-400">
        CONFESSION #17
      </div>
      <div className="h-display absolute left-10 right-10 top-20 text-[58px] leading-[0.92] text-brand-rose-500">
        told myself
        <br />
        "just 1 more
        <br />
        puzzle piece"
      </div>
      <div className="h-display absolute left-10 right-10 top-[340px] text-4xl leading-[0.95] text-brand-purple-600">
        3 hours ago.
        <br />
        have not moved.
      </div>
      <div className="absolute bottom-[30px] left-[30px]">
        <ClaudeSloth size={178} variant="puzzles" />
      </div>
      <Note
        color="var(--brand-yellow-200)"
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
        className="absolute left-1/2 top-1/2 w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-xl border-2 border-[#ffe875] bg-[#1a0f28] p-3 shadow-sh-md"
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
      bg="var(--brand-yellow-100)"
    >
      <div className="absolute inset-[30px] grid grid-cols-3 grid-rows-4 gap-2">
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
          <div
            key={i}
            className="flex items-center justify-center rounded-[10px]"
            style={{
              background:
                i % 3 === 0
                  ? "var(--brand-pink-100)"
                  : i % 3 === 1
                    ? "var(--brand-purple-100)"
                    : "var(--brand-rose-100)",
            }}
          >
            <ClaudeSloth size={96} variant={collection[i]} />
          </div>
        ))}
      </div>
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-white px-[18px] py-[10px] font-script text-[26px] text-brand-purple-500 shadow-sh-md">
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
      bg: "var(--brand-rose-100)",
      el: (
        <div className="h-display p-[14px] text-lg leading-[0.95] text-brand-rose-500">
          confession
          <br />
          #17
        </div>
      ),
    },
    {
      bg: "var(--brand-pink-50)",
      el: (
        <div className="p-[14px] font-mono text-[10px] tracking-[0.1em] text-brand-rose-400">
          [ PHOTO ]
          <br />
          balcony am
        </div>
      ),
    },
    {
      bg: "var(--paper-2)",
      el: (
        <div className="h-display p-[14px] text-base leading-[0.95] text-brand-purple-700">
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
        <div className="h-display p-[14px] text-[14px] leading-none text-brand-purple-700">
          being
          <br />
          soft ≠
          <br />
          weak
        </div>
      ),
    },
    {
      bg: "var(--brand-yellow-100)",
      el: (
        <div className="h-display p-[14px] text-[14px] leading-none text-brand-purple-700">
          svelte vs
          <br />
          react →
        </div>
      ),
    },
    {
      bg: "var(--brand-yellow-100)",
      el: (
        <div className="grid h-full grid-cols-2 gap-1 p-2.5">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded"
              style={{
                background: i % 2 === 0 ? "var(--brand-pink-100)" : "var(--brand-purple-100)",
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
      <div className="rounded-xl border border-line bg-white p-4 shadow-sh-md">
        <div className="mb-[14px] flex items-center gap-2.5">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,#8057a8,#d19ac5)]">
            <ClaudeSloth size={36} variant="heart" />
          </div>
          <div>
            <div className="font-mono text-[13px] font-semibold">
              its_neluska
            </div>
            <div className="font-body text-xs text-ink-soft">
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
      <div className="mt-2.5 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-ink-soft">
        Feed rhythm – Princess / Nerd / Funny rotating diagonally
      </div>
    </div>
  );
}
