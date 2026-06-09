"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";

import { Sloth } from "@/components/Sloth";
import { cn } from "@/lib/cn";
import {
  COMPANION_LINES,
  INSTAGRAM_URL,
  moodByPath,
  TWITCH_URL,
} from "@/lib/companion-lines";
import {
  formatCountdown,
  formatUptime,
  getNextStream,
} from "@/lib/schedule";
import { now as nowBoard } from "@/lib/now";
import { projects } from "@/lib/projects";

const DISMISS_KEY = "neluska-sloth-dismissed";
const CELEBRATED_KEY = "neluska-sloth-celebrated";
/** Idle this long (offline, card closed) → the sloth dozes off. */
const SLEEP_MS = 15_000;

type Status = {
  isLive: boolean;
  title: string | null;
  game: string | null;
  viewers: number;
  startedAt: string | null;
};

const OFFLINE: Status = {
  isLive: false,
  title: null,
  game: null,
  viewers: 0,
  startedAt: null,
};

type Particle = { id: number; emoji: string; drift: string; spin: string };

function pick<T>(arr: readonly T[]): T {
  return arr[Math.floor(Math.random() * arr.length)] as T;
}

export function SlothCompanion() {
  const pathname = usePathname() ?? "/";
  const [mounted, setMounted] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [status, setStatus] = useState<Status>(OFFLINE);
  const [now, setNow] = useState(() => Date.now());

  const [hoverOpen, setHoverOpen] = useState(false);
  const [pinned, setPinned] = useState(false);
  const [asleep, setAsleep] = useState(false);
  const [tilt, setTilt] = useState(0);
  const [hopping, setHopping] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [bubble, setBubble] = useState<string | null>(null);

  const wrapRef = useRef<HTMLDivElement>(null);
  const particleId = useRef(0);
  const lastActive = useRef(Date.now());
  const celebrated = useRef<string | null>(null);
  const bubbleTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const hopTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const { isLive } = status;
  const cardOpen = isLive || hoverOpen || pinned;
  const baseMood = moodByPath(pathname);
  const mood = isLive ? "heart" : asleep ? "zzz" : baseMood;
  const next = useMemo(() => getNextStream(), []);

  // Secondary "now" lines that gently cycle beneath the IG headline.
  const extras = useMemo(() => {
    const out: { label: string; text: string; href?: string }[] = [];
    if (nowBoard.vibe) out.push({ label: "vibe", text: nowBoard.vibe });
    if (nowBoard.building)
      out.push({ label: "building", text: nowBoard.building });
    const latest = projects[0];
    if (latest)
      out.push({
        label: "shipped",
        text: latest.title,
        href: latest.href,
      });
    if (next?.date)
      out.push({
        label: "next stream",
        text: `${next.slot.title} · ${formatCountdown(next.date)}`,
        href: "/schedule",
      });
    return out;
  }, [next]);
  const [extraIdx, setExtraIdx] = useState(0);

  // ── Mount + persisted state ────────────────────────────────────────────
  useEffect(() => {
    setMounted(true);
    try {
      setDismissed(window.localStorage.getItem(DISMISS_KEY) === "1");
      celebrated.current = window.localStorage.getItem(CELEBRATED_KEY);
    } catch {
      /* ignore */
    }
    setReduceMotion(
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false,
    );
  }, []);

  // ── Helpers ──────────────────────────────────────────────────────────────
  const say = useCallback((text: string, ms = 4500) => {
    setBubble(text);
    if (bubbleTimer.current) clearTimeout(bubbleTimer.current);
    bubbleTimer.current = setTimeout(() => setBubble(null), ms);
  }, []);

  const burst = useCallback(
    (count: number) => {
      if (reduceMotion) return;
      const made: Particle[] = Array.from({ length: count }, () => ({
        id: particleId.current++,
        emoji: pick(["♡", "♡", "✦", "🦥"]),
        drift: `${Math.round((Math.random() - 0.5) * 72)}px`,
        spin: `${Math.round((Math.random() - 0.5) * 50)}deg`,
      }));
      setParticles((p) => [...p, ...made]);
      const ids = new Set(made.map((b) => b.id));
      setTimeout(
        () => setParticles((p) => p.filter((x) => !ids.has(x.id))),
        950,
      );
    },
    [reduceMotion],
  );

  const hop = useCallback(() => {
    if (reduceMotion) return;
    setHopping(true);
    if (hopTimer.current) clearTimeout(hopTimer.current);
    hopTimer.current = setTimeout(() => setHopping(false), 560);
  }, [reduceMotion]);

  const markActive = useCallback(() => {
    lastActive.current = Date.now();
    setAsleep(false);
  }, []);

  // ── Twitch live polling + the go-live celebration ────────────────────────
  useEffect(() => {
    if (dismissed) return;
    let active = true;
    const check = async () => {
      try {
        const res = await fetch("/api/twitch-status");
        if (!res.ok) return;
        const data: Partial<Status> = await res.json();
        if (!active) return;
        const fresh: Status = {
          isLive: Boolean(data.isLive),
          title: data.title ?? null,
          game: data.game ?? null,
          viewers: data.viewers ?? 0,
          startedAt: data.startedAt ?? null,
        };
        setStatus(fresh);

        // ✦ go-live moment — fire once per unique stream (by startedAt)
        if (
          fresh.isLive &&
          fresh.startedAt &&
          celebrated.current !== fresh.startedAt
        ) {
          celebrated.current = fresh.startedAt;
          try {
            window.localStorage.setItem(CELEBRATED_KEY, fresh.startedAt);
          } catch {
            /* ignore */
          }
          setAsleep(false);
          hop();
          burst(9);
          say(pick(COMPANION_LINES.live), 6000);
        }
      } catch {
        /* offline / ignore */
      }
    };
    check();
    const id = setInterval(check, 90_000);
    return () => {
      active = false;
      clearInterval(id);
    };
  }, [dismissed, burst, hop, say]);

  // ── 1s tick (for uptime / countdown) only while a card is visible ────────
  useEffect(() => {
    if (!cardOpen) return;
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, [cardOpen]);

  // ── Gently cycle the secondary "now" line in the offline card ────────────
  useEffect(() => {
    if (isLive || !cardOpen || extras.length < 2 || reduceMotion) return;
    const id = setInterval(
      () => setExtraIdx((i) => (i + 1) % extras.length),
      3500,
    );
    return () => clearInterval(id);
  }, [isLive, cardOpen, extras.length, reduceMotion]);

  // ── Idle → doze off (offline, card closed) ───────────────────────────────
  useEffect(() => {
    if (dismissed || isLive) return;
    const id = setInterval(() => {
      if (cardOpen) return;
      if (Date.now() - lastActive.current > SLEEP_MS) setAsleep(true);
    }, 2500);
    return () => clearInterval(id);
  }, [dismissed, isLive, cardOpen]);

  // ── Cursor tilt + wake ───────────────────────────────────────────────────
  useEffect(() => {
    if (dismissed || reduceMotion) return;
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      markActive();
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const el = wrapRef.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        const cx = r.left + r.width / 2;
        const cy = r.top + r.height / 2;
        const angle = Math.atan2(e.clientY - cy, e.clientX - cx);
        const lean = Math.cos(angle) * 8;
        setTilt(Math.max(-8, Math.min(8, lean)));
      });
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [dismissed, reduceMotion, markActive]);

  // ── Interactions ─────────────────────────────────────────────────────────
  const handleSlothClick = useCallback(() => {
    markActive();
    if (isLive) {
      window.open(TWITCH_URL, "_blank", "noopener,noreferrer");
      burst(4);
      return;
    }
    setPinned((p) => !p);
    burst(2);
    if (Math.random() < 0.5) say(pick(COMPANION_LINES.pet), 2200);
  }, [isLive, markActive, burst, say]);

  const handleDismiss = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setDismissed(true);
    setBubble(null);
    try {
      window.localStorage.setItem(DISMISS_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  const handleRestore = useCallback(() => {
    setDismissed(false);
    lastActive.current = Date.now();
    setAsleep(false);
    try {
      window.localStorage.removeItem(DISMISS_KEY);
    } catch {
      /* ignore */
    }
  }, []);

  if (!mounted) return null;

  if (dismissed) {
    return (
      <button
        type="button"
        onClick={handleRestore}
        aria-label="Bring back the sloth companion"
        className="fixed bottom-4 right-3 z-50 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper/90 text-base shadow-sh-sm backdrop-blur transition-transform hover:scale-110 md:right-5"
      >
        <span aria-hidden="true">🦥</span>
      </button>
    );
  }

  const transform = reduceMotion
    ? undefined
    : `rotate(${asleep ? 6 : tilt}deg)`;

  const nowDate = new Date(now);

  return (
    <div
      ref={wrapRef}
      onMouseEnter={() => {
        if (!isLive) setHoverOpen(true);
        markActive();
      }}
      onMouseLeave={() => setHoverOpen(false)}
      className={cn(
        "fixed bottom-[72px] right-3 z-50 flex flex-col items-end md:bottom-5 md:right-5",
        !reduceMotion && "companion-enter",
      )}
      style={{ width: 250 }}
    >
      {/* ── Status card ── */}
      {cardOpen ? (
        <div
          className="companion-bubble mb-2 w-[230px] overflow-hidden rounded-2xl border border-line bg-paper/97 shadow-sh-lg backdrop-blur"
          style={{ pointerEvents: "auto" }}
        >
          {isLive ? (
            <div className="p-3.5">
              <div className="flex items-center gap-2">
                <span className="companion-dot-live h-2 w-2 rounded-full bg-brand-rose-400" />
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-rose-400">
                  live now
                </span>
                {status.viewers > 0 ? (
                  <span className="ml-auto font-mono text-[10px] text-ink-soft">
                    ♥ {status.viewers.toLocaleString()}
                  </span>
                ) : null}
              </div>

              <p className="mt-2 line-clamp-2 text-[13px] font-medium leading-snug text-brand-purple-700">
                {status.title ?? "streaming something cozy"}
              </p>
              <p className="mt-1 font-mono text-[11px] text-ink-soft">
                {status.game ? `${status.game} · ` : ""}
                {status.startedAt
                  ? `live ${formatUptime(new Date(status.startedAt), nowDate)}`
                  : "live now"}
              </p>

              <a
                href={TWITCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 flex items-center justify-center gap-1.5 rounded-full bg-brand-twitch-purple px-3 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-white transition-transform hover:scale-[1.03]"
              >
                watch now ▶
              </a>
            </div>
          ) : (
            <div className="p-3.5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-brand-purple-300" />
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink-soft">
                  what i&apos;m up to
                </span>
              </div>

              {/* IG headline — the main channel */}
              {nowBoard.instagram ? (
                <a
                  href={nowBoard.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brand-rose-400">
                    latest on instagram ♡
                  </p>
                  <p className="mt-1 line-clamp-2 min-h-[2.25rem] text-[13px] font-medium leading-snug text-brand-purple-700">
                    {nowBoard.instagram.caption}
                  </p>
                </a>
              ) : (
                <p className="mt-2 text-[13px] font-medium leading-snug text-brand-purple-700">
                  soft season, always ♡
                </p>
              )}

              {/* Rotating secondary "now" line */}
              {extras[extraIdx] ? (
                <div className="mt-2.5 border-t border-line pt-2">
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-purple-400">
                    {extras[extraIdx]!.label}
                  </p>
                  <div className="min-h-[2rem]">
                    {extras[extraIdx]!.href ? (
                      <a
                        href={extras[extraIdx]!.href}
                        className="line-clamp-2 text-[12px] leading-snug text-ink-soft transition-colors hover:text-brand-purple-700"
                      >
                        {extras[extraIdx]!.text}
                      </a>
                    ) : (
                      <p className="line-clamp-2 text-[12px] leading-snug text-ink-soft">
                        {extras[extraIdx]!.text}
                      </p>
                    )}
                  </div>
                </div>
              ) : null}

              {/* Footer links */}
              <div className="mt-3 flex gap-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full bg-brand-rose-50 px-3 py-1.5 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-brand-purple-700 transition-colors hover:bg-brand-rose-100"
                >
                  instagram
                </a>
                <a
                  href={TWITCH_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-full border border-line px-3 py-1.5 text-center font-mono text-[10px] uppercase tracking-[0.14em] text-brand-purple-700 transition-colors hover:bg-brand-purple-50"
                >
                  twitch
                </a>
              </div>
            </div>
          )}
        </div>
      ) : bubble ? (
        // celebration / pet line when the card isn't open
        <div className="companion-bubble mb-2 max-w-[190px] rounded-2xl border border-line bg-paper/95 px-3 py-2 text-center font-mono text-[10px] leading-snug text-brand-purple-700 shadow-sh-md backdrop-blur">
          {bubble}
        </div>
      ) : null}

      {/* ── Sloth ── */}
      <div className={cn("relative", !reduceMotion && "float-slow")}>
        {asleep && !isLive && !reduceMotion
          ? [0, 1, 2].map((i) => (
              <span
                key={i}
                aria-hidden="true"
                className="companion-z pointer-events-none absolute -top-1 left-1/2 font-mono text-brand-purple-400"
                style={{ fontSize: 10 + i * 3, animationDelay: `${i * 0.7}s` }}
              >
                z
              </span>
            ))
          : null}

        {particles.map((p) => (
          <span
            key={p.id}
            aria-hidden="true"
            className="companion-particle pointer-events-none absolute left-1/2 top-2 text-sm"
            style={
              {
                ["--drift" as string]: p.drift,
                ["--spin" as string]: p.spin,
              } as React.CSSProperties
            }
          >
            {p.emoji}
          </span>
        ))}

        <button
          type="button"
          onClick={handleSlothClick}
          aria-label={
            isLive
              ? "Neluška is live on Twitch — watch now"
              : "Neluška is offline — see the next stream"
          }
          className={cn(
            "relative block rounded-full transition-transform duration-150 hover:scale-[1.06]",
            isLive && "companion-live-ring",
          )}
          style={{ transform }}
        >
          <span className={cn("block", hopping && "companion-wiggle")}>
            <Sloth size={72} variant={mood} />
          </span>

          {/* LIVE pill */}
          {isLive ? (
            <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 rounded-full bg-brand-rose-400 px-2 py-0.5 font-mono text-[8px] font-bold uppercase tracking-[0.14em] text-white shadow-sh-sm">
              live
            </span>
          ) : null}
        </button>

        {/* dismiss */}
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="Hide the sloth companion"
          className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-paper text-[10px] text-ink-soft opacity-0 shadow-sh-sm transition-opacity hover:opacity-100 focus-visible:opacity-100"
        >
          <span aria-hidden="true">×</span>
        </button>
      </div>
    </div>
  );
}
