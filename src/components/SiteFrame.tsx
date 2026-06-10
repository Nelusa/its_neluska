import type { CSSProperties, ReactNode } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WaveBg } from "@/components/WaveBg";
import { cn } from "@/lib/cn";

interface SiteFrameProps {
  children: ReactNode;
  bg?: "paper" | "lavender";
}

/* Small inline decorations — kept local so SiteFrame doesn't reach into
   the /brand route segment. */
function Sparkle({
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

function WashiStrip({
  color,
  rotate,
  width,
  className,
}: {
  color: string;
  rotate: number;
  width: number;
  className?: string;
}) {
  return (
    <div
      className={cn("h-[22px] opacity-85", className)}
      style={{
        width,
        background: color,
        transform: `rotate(${rotate}deg)`,
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(255,255,255,0.22) 0 6px, transparent 6px 12px)",
      }}
    />
  );
}

export function SiteFrame({ children, bg = "paper" }: SiteFrameProps) {
  const pageBg = bg === "lavender" ? "bg-brand-twitch-lav" : "bg-paper";

  return (
    <div className={cn("relative min-h-screen overflow-x-hidden", pageBg)}>
      <WaveBg position="both" opacity={0.45} />

      {/* Ambient scrapbook decorations — match the /brand journal vibe across
          the whole site. pointer-events-none + aria-hidden. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <WashiStrip
          color="var(--brand-yellow-300)"
          rotate={-6}
          width={200}
          className="absolute left-[8%] top-[72px]"
        />
        <WashiStrip
          color="var(--brand-rose-200)"
          rotate={10}
          width={140}
          className="absolute right-[6%] top-[120px] hidden sm:block"
        />

        <Sparkle
          size={22}
          color="var(--brand-yellow-400)"
          className="float-slow absolute left-[5%] top-[30%]"
        />
        <Sparkle
          size={14}
          color="var(--brand-purple-400)"
          className="float-fast absolute right-[6%] top-[42%]"
        />
        <Sparkle
          size={18}
          color="var(--brand-rose-300)"
          className="float-slow absolute left-[8%] top-[68%]"
        />
        <Sparkle
          size={12}
          color="var(--brand-pink-300)"
          className="float-fast absolute right-[10%] top-[78%]"
        />
        {/* Corner peek sloth removed — the global <SlothCompanion> now lives
            bottom-right across all pages. */}
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-content flex-col gap-8 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <SiteHeader />
        <main id="main" className="flex flex-1 flex-col gap-8">
          {children}
        </main>
        <SiteFooter />
      </div>
    </div>
  );
}
