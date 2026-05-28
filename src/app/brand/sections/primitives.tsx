import type { CSSProperties, ReactNode } from "react";

import { cn } from "@/lib/cn";


export type ClaudeSlothVariant =
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
        "border-t border-line px-8 py-[100px] text-ink min-[760px]:px-16",
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
            <div className="max-w-[440px] text-[15px] leading-[1.55] text-ink-soft">
              {sub}
            </div>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}

export function DotDivider({ color = "var(--brand-purple-200)" }: { color?: string }) {
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
          <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-soft">
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
        <div className="h-display mb-2 text-lg text-brand-purple-700">
          {title}
        </div>
        <p className="m-0 text-[13px] leading-[1.55] text-ink-soft">
          {body}
        </p>
        <div className="mt-3 font-mono text-[11px] text-brand-purple-500">
          {use}
        </div>
      </div>
    </div>
  );
}



export function BrandMark() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[linear-gradient(135deg,#8057a8,#d19ac5)] shadow-sh-sm">
      <ClaudeSloth size={30} />
    </div>
  );
}

export function HeroOrnament() {
  return (
    <div className="relative h-[360px] w-full min-w-0">
      <div className="absolute right-[30px] top-5 h-[280px] w-[220px] rotate-[6deg] rounded-[18px] bg-[linear-gradient(180deg,#c3a9d7,#8057a8)] p-6 text-[#fff9d8] shadow-sh-lg">
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

      <div className="absolute left-0 top-20 h-60 w-[220px] -rotate-[5deg] rounded-[18px] bg-[#2a1d3d] p-5 font-mono text-xs leading-[1.55] text-[#f4e4ef] shadow-sh-lg">
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
        color="var(--brand-yellow-400)"
        className="absolute right-[100px] top-0"
      />
      <Sparkle
        size={16}
        color="var(--brand-yellow-400)"
        className="absolute right-2 top-10"
      />
      <Sparkle
        size={10}
        color="var(--brand-purple-400)"
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
  color = "var(--brand-purple-200)",
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
  color = "var(--brand-yellow-200)",
  style,
}: {
  children: ReactNode;
  rotate?: number;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <div
      className="rounded px-5 py-[18px] font-script leading-[1.2] text-brand-purple-700 shadow-[0_8px_18px_rgba(70,50,90,0.12)]"
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
