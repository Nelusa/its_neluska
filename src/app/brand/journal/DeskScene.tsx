"use client";

import { ClaudeSloth, Sparkle, Washi } from "../sections/primitives";
import { TAB_META, TAB_ORDER, type TabKey } from "./tabs";

interface DeskSceneProps {
  onSelect: (tab: TabKey) => void;
}

type ScrapbookItem = {
  tab: TabKey;
  label: string;
  rotation: number;
  washiColor: string;
  washiRotate: number;
};

const ITEMS: ScrapbookItem[] = [
  { tab: "me",   label: "who I am",        rotation: -4, washiColor: "var(--brand-purple-200)", washiRotate: -10 },
  { tab: "look", label: "how it looks",    rotation:  3, washiColor: "var(--brand-rose-200)", washiRotate:  12 },
  { tab: "post", label: "what I post",     rotation: -2, washiColor: "var(--brand-yellow-300)", washiRotate:  -8 },
  { tab: "live", label: "when I stream",   rotation:  5, washiColor: "var(--brand-twitch-lav)", washiRotate:  14 },
  { tab: "grow", label: "how I grow",      rotation: -3, washiColor: "var(--brand-purple-200)", washiRotate: -12 },
  { tab: "safe", label: "how I stay safe", rotation:  2, washiColor: "var(--brand-pink-200)", washiRotate:  10 },
];

export default function DeskScene({ onSelect }: DeskSceneProps) {
  return (
    <div
      className="journal-stage relative min-h-screen overflow-hidden pl-0 md:pl-14"
      style={{
        background: [
          "radial-gradient(circle at 1px 1px, oklch(0.85 0.02 320 / 0.35) 1px, transparent 1.5px) 0 0 / 22px 22px",
          "linear-gradient(180deg, var(--brand-purple-50) 0%, var(--paper) 100%)",
        ].join(", "),
      }}
    >
      {/* Decorative washi at top */}
      <div className="pointer-events-none absolute left-[8%] top-6">
        <Washi color="var(--brand-yellow-300)" rotate={-8} width={220} style={{ position: "relative" }} />
      </div>
      <div className="pointer-events-none absolute right-[12%] top-10">
        <Washi color="var(--brand-rose-200)" rotate={14} width={140} style={{ position: "relative" }} />
      </div>

      {/* Floating sparkles */}
      <Sparkle size={22} color="var(--brand-yellow-400)" className="float-slow pointer-events-none absolute left-[10%] top-[28%]" />
      <Sparkle size={14} color="var(--brand-purple-400)" className="float-fast pointer-events-none absolute right-[8%] top-[40%]" />
      <Sparkle size={28} color="var(--brand-rose-300)" className="float-slow pointer-events-none absolute left-[14%] bottom-[18%]" />
      <Sparkle size={12} color="var(--brand-yellow-400)" className="float-fast pointer-events-none absolute right-[18%] bottom-[26%]" />
      <Sparkle size={18} color="var(--brand-pink-300)" className="float-slow pointer-events-none absolute left-[48%] top-[14%]" />

      <div className="relative mx-auto w-full max-w-[1180px] px-4 py-[56px] sm:px-8 md:px-12 md:py-[72px]">
        <div className="mb-10 text-center md:mb-14">
          <div className="eyebrow mb-2.5">welcome to the journal</div>
          <h1
            className="h-display m-0"
            style={{ fontSize: "clamp(36px, 5vw, 64px)" }}
          >
            pick a thing
          </h1>
          <p className="mx-auto mt-3 max-w-[480px] text-[14px] leading-[1.55] text-ink-soft">
            Six chapters, six things to tap. Pick anywhere — you can always come back.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 md:gap-8">
          {ITEMS.map((item) => (
            <ScrapbookCard
              key={item.tab}
              item={item}
              onClick={() => onSelect(item.tab)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function ScrapbookCard({
  item,
  onClick,
}: {
  item: ScrapbookItem;
  onClick: () => void;
}) {
  const meta = TAB_META[item.tab];
  const isDark = item.tab === "live";
  const chapterIndex = TAB_ORDER.indexOf(item.tab) + 1;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Open chapter: ${item.label}`}
      className="scrapbook-card relative flex flex-col items-center gap-3 rounded-[24px] border border-line p-5 text-center md:p-6"
      style={
        {
          background: meta.bg,
          boxShadow: "var(--sh-md)",
          color: isDark ? "var(--brand-yellow-text)" : "var(--ink)",
          ["--rot" as string]: `${item.rotation}deg`,
        } as React.CSSProperties
      }
    >
      {/* Washi taped corner */}
      <div
        className="pointer-events-none absolute"
        style={{ top: -12, left: -18 }}
      >
        <Washi
          color={item.washiColor}
          rotate={item.washiRotate}
          width={120}
          style={{ position: "relative" }}
        />
      </div>

      {/* Chapter number stamp */}
      <div
        className="font-mono text-[10px] uppercase tracking-[0.22em] opacity-70"
        style={{ color: isDark ? "var(--brand-twitch-lav)" : "var(--brand-purple-500)" }}
      >
        ch. {String(chapterIndex).padStart(2, "0")}
      </div>

      {/* Sloth */}
      <div className="flex w-full items-center justify-center">
        <div className="sloth-frame">
          <ClaudeSloth size={200} variant={meta.slothVariant} />
        </div>
      </div>

      {/* Handwritten label */}
      <div
        style={{
          fontFamily: "var(--ff-script)",
          fontSize: "clamp(22px, 3vw, 30px)",
          color: isDark ? "var(--brand-yellow-text)" : "var(--brand-purple-600)",
          lineHeight: 1,
        }}
      >
        {item.label}
      </div>

      {/* Corner sparkle */}
      <Sparkle
        size={16}
        color={isDark ? "var(--brand-yellow-400)" : "var(--brand-yellow-400)"}
        className="pointer-events-none absolute bottom-3 right-3 opacity-80"
      />
    </button>
  );
}
