"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/cn";

/* ── Boot script ─────────────────────────────────────────────────────────── */

type Kind = "cmd" | "out" | "muted" | "ok";
type Seg = { text: string; kind: Kind; speed: number; pause: number };

const SCRIPT: Seg[] = [
  { text: "whoami", kind: "cmd", speed: 55, pause: 320 },
  { text: "frontend dev · sloth at heart 🦥", kind: "out", speed: 24, pause: 620 },
  { text: "sudo make me a princess", kind: "cmd", speed: 55, pause: 360 },
  { text: "[sudo] password: ••••••••", kind: "muted", speed: 30, pause: 420 },
  { text: "installing soft mode ········· done", kind: "muted", speed: 14, pause: 220 },
  { text: "loading sparkles ··········· done", kind: "muted", speed: 14, pause: 220 },
  { text: "deploying sloths ··········· done", kind: "muted", speed: 14, pause: 420 },
  { text: "✦ transformation complete ✦", kind: "ok", speed: 38, pause: 700 },
];

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

type Phase = "typing" | "bloom" | "dwell" | "fading";

function kindClass(kind: Kind): string {
  switch (kind) {
    case "cmd": return "text-white";
    case "out": return "text-brand-twitch-lav";
    case "muted": return "text-[#9c86c4]";
    case "ok": return "text-brand-twitch-butter";
  }
}

export function PrincessBoot() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  // Initial mounted state matches isHome so on non-/ routes the overlay
  // never paints (no flash on /about, /work, …) and on / it paints
  // immediately as part of the SSR HTML.
  const [mounted, setMounted] = useState<boolean>(isHome);
  const [phase, setPhase] = useState<Phase>("typing");
  const [lines, setLines] = useState<Seg[]>([]);
  const [current, setCurrent] = useState<Seg | null>(null);
  const [partial, setPartial] = useState("");
  const cancelled = useRef(false);
  const skipFlag = useRef(false);

  useEffect(() => {
    // Only run on the homepage; on other routes hide.
    if (!isHome) {
      cancelled.current = true;
      setMounted(false);
      return;
    }
    // Skip for reduced-motion (a11y).
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduce) {
      setMounted(false);
      return;
    }

    // Fresh run: reset state and play.
    cancelled.current = false;
    skipFlag.current = false;
    setMounted(true);
    setPhase("typing");
    setLines([]);
    setCurrent(null);
    setPartial("");

    (async () => {
      for (const seg of SCRIPT) {
        if (skipFlag.current || cancelled.current) break;
        setCurrent(seg);
        for (let i = 1; i <= seg.text.length; i++) {
          if (cancelled.current || skipFlag.current) break;
          setPartial(seg.text.slice(0, i));
          await wait(seg.speed);
        }
        if (cancelled.current) return;
        if (skipFlag.current) break;
        setLines((prev) => [...prev, seg]);
        setCurrent(null);
        setPartial("");
        await wait(seg.pause);
      }
      if (cancelled.current) return;
      if (skipFlag.current) {
        finish();
        return;
      }
      setPhase("bloom");
      await wait(1150);
      if (cancelled.current) return;
      setPhase("dwell");
      await wait(700);
      if (cancelled.current) return;
      finish();
    })();

    return () => {
      cancelled.current = true;
    };
  }, [isHome]);

  function finish() {
    setPhase("fading");
    setTimeout(() => setMounted(false), 750);
  }

  const skip = () => {
    skipFlag.current = true;
    finish();
  };

  if (!mounted) return null;

  const bloomed =
    phase === "bloom" || phase === "dwell" || phase === "fading";
  const fading = phase === "fading";

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[60] overflow-hidden"
      style={{
        opacity: fading ? 0 : 1,
        transition: "opacity 740ms ease",
        pointerEvents: fading ? "none" : "auto",
      }}
    >
      {/* ── Terminal layer ──
         Stays fully opaque even during bloom; the pastel bloom circle grows
         over the top of it. This guarantees every pixel is covered by either
         the terminal or the bloom, so the homepage never peeks through until
         the whole overlay fades out at the very end. */}
      <div
        className="absolute inset-0 flex items-center justify-center p-4"
        style={{
          background:
            "radial-gradient(circle at 50% 40%, #2D1B4E, #1F1238 80%)",
          opacity: 1,
        }}
      >
        <div
          className="w-[min(680px,92vw)] overflow-hidden rounded-2xl border shadow-2xl"
          style={{
            background: "rgba(20,12,40,0.92)",
            borderColor: "rgba(220,201,232,0.18)",
          }}
        >
          {/* window chrome */}
          <div
            className="flex items-center gap-2 border-b px-4 py-3"
            style={{ borderColor: "rgba(220,201,232,0.12)" }}
          >
            <span className="h-3 w-3 rounded-full" style={{ background: "#F4A8C0" }} />
            <span className="h-3 w-3 rounded-full" style={{ background: "#F5E574" }} />
            <span className="h-3 w-3 rounded-full" style={{ background: "#9C86C4" }} />
            <span className="ml-3 font-mono text-[11px] tracking-[0.14em] text-[#9c86c4]">
              neluska — zsh
            </span>
          </div>

          {/* terminal body */}
          <div className="min-h-[280px] px-5 py-4 font-mono text-[13px] leading-[1.85] sm:text-[14px]">
            {lines.map((seg, i) => (
              <Line key={i} seg={seg} text={seg.text} />
            ))}
            {current ? <Line seg={current} text={partial} cursor /> : null}
            {!current && !bloomed && lines.length < SCRIPT.length ? (
              <span className="boot-cursor inline-block">▋</span>
            ) : null}
          </div>
        </div>

        {/* skip */}
        {!bloomed ? (
          <button
            type="button"
            onClick={skip}
            className="absolute right-5 top-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#9c86c4] transition-colors hover:text-brand-twitch-butter"
          >
            skip intro →
          </button>
        ) : null}
      </div>

      {/* ── Bloom layer ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 62% 32%, #FFF7DA 0%, #EEE6F4 38%, #EACFDA 72%, #D8A6B8 100%)",
          clipPath: bloomed
            ? "circle(150% at 50% 45%)"
            : "circle(0% at 50% 45%)",
          transition: "clip-path 1150ms cubic-bezier(0.65,0,0.35,1)",
        }}
      >
        {/* sparkles */}
        <Sparkle className="left-[18%] top-[22%]" size={26} delay="200ms" show={bloomed} />
        <Sparkle className="right-[24%] top-[18%]" size={18} delay="360ms" show={bloomed} />
        <Sparkle className="left-[44%] top-[12%]" size={14} delay="480ms" show={bloomed} />
        <Sparkle className="right-[12%] top-[40%]" size={22} delay="300ms" show={bloomed} />

        {/* Centered Moontime "welcome ♡" — the brand pečeť */}
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
          style={{
            fontFamily: "var(--ff-script)",
            fontSize: "clamp(56px, 9vw, 110px)",
            color: "var(--brand-purple-700)",
            lineHeight: 1,
            opacity: bloomed ? 1 : 0,
            transform: bloomed ? "scale(1)" : "scale(0.92)",
            transition:
              "opacity 480ms ease 380ms, transform 700ms cubic-bezier(0.2,0.8,0.2,1) 380ms",
          }}
        >
          welcome ♡
        </div>
      </div>
    </div>
  );
}

function Line({
  seg,
  text,
  cursor,
}: {
  seg: Seg;
  text: string;
  cursor?: boolean;
}) {
  return (
    <div className="whitespace-pre-wrap break-words">
      {seg.kind === "cmd" ? (
        <span className="text-brand-twitch-butter">neluska@dev ~ % </span>
      ) : null}
      <span className={kindClass(seg.kind)}>{text}</span>
      {cursor ? <span className="boot-cursor inline-block">▋</span> : null}
    </div>
  );
}

function Sparkle({
  className,
  size,
  delay,
  show,
}: {
  className: string;
  size: number;
  delay: string;
  show: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={cn("pointer-events-none absolute", className)}
      style={{
        opacity: show ? 0.9 : 0,
        transform: show ? "scale(1)" : "scale(0)",
        transition: `opacity 500ms ease ${delay}, transform 600ms cubic-bezier(0.2,0.8,0.2,1) ${delay}`,
      }}
    >
      <path
        d="M12 1 L13.6 10.4 L23 12 L13.6 13.6 L12 23 L10.4 13.6 L1 12 L10.4 10.4 Z"
        fill="var(--brand-yellow-400)"
      />
    </svg>
  );
}
