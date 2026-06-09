"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const RoomScene = dynamic(
  () => import("./RoomScene").then((m) => m.RoomScene),
  {
    ssr: false,
    loading: () => <RoomLoading />,
  },
);

function RoomLoading() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-brand-purple-500">
        warming up the room…
      </span>
    </div>
  );
}

/** Detect whether we can/should render WebGL. */
function use3DCapable(): boolean | null {
  const [capable, setCapable] = useState<boolean | null>(null);

  useEffect(() => {
    // Respect reduced-motion + small screens → 2D fallback.
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const small = window.matchMedia("(max-width: 767px)").matches;
    if (reduce || small) {
      setCapable(false);
      return;
    }
    // WebGL support probe.
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl2") || canvas.getContext("webgl");
      setCapable(Boolean(gl));
    } catch {
      setCapable(false);
    }
  }, []);

  return capable;
}

interface RoomLandingProps {
  /** 2D fallback rendered on mobile / reduced-motion / no-WebGL. */
  fallback: React.ReactNode;
}

export function RoomLanding({ fallback }: RoomLandingProps) {
  const capable = use3DCapable();
  const router = useRouter();
  const [hovered, setHovered] = useState<string | null>(null);

  const nav = useMemo(
    () => ({
      onNavigate: (href: string) => router.push(href),
      onHover: (label: string | null) => setHovered(label),
    }),
    [router],
  );

  // Until we know, render the fallback (also the SSR/first-paint content).
  if (capable !== true) {
    return <>{fallback}</>;
  }

  return (
    <div
      className="relative h-[100svh] w-full overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 60% 30%, var(--brand-purple-50), var(--brand-rose-50) 55%, var(--paper) 100%)",
      }}
    >
      <RoomScene nav={nav} />

      {/* Soft left scrim so the title sits in its own zone and the desk
          stays clear on the right (no more text-over-monitor overlap). */}
      <div
        className="pointer-events-none absolute inset-0 z-[5]"
        style={{
          background:
            "linear-gradient(100deg, var(--brand-purple-50) 0%, rgba(244,240,250,0.82) 26%, rgba(244,240,250,0) 50%)",
        }}
      />

      {/* Text overlay */}
      <div className="pointer-events-none absolute left-[6%] top-1/2 z-10 max-w-[44%] -translate-y-1/2">
        <p className="eyebrow mb-2">welcome to my corner</p>
        <h1
          className="h-display m-0 text-brand-purple-700"
          style={{ fontSize: "clamp(32px, 4.4vw, 58px)", lineHeight: 0.92 }}
        >
          neluska&apos;s
          <br />
          room
        </h1>
        <p className="mt-4 max-w-[22ch] text-[15px] leading-[1.5] text-ink-soft">
          drag to look around · tap the things on the desk to explore
        </p>
      </div>

      {/* Hover label chip (bottom center) */}
      <div className="pointer-events-none absolute bottom-6 left-1/2 z-10 -translate-x-1/2">
        {hovered ? (
          <span className="rounded-full border border-brand-purple-200 bg-paper/95 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-purple-700 shadow-sh-sm backdrop-blur">
            open {hovered} →
          </span>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-brand-purple-500">
            drag to look · click a thing to enter
          </span>
        )}
      </div>
    </div>
  );
}
