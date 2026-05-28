import type { ReactNode } from "react";

import SlothSticker from "./SlothSticker";
import WashiTape from "./WashiTape";
import { TAB_META, TAB_ORDER, type TabKey } from "./tabs";

interface JournalPageProps {
  tab: TabKey;
  children: ReactNode;
}

export default function JournalPage({ tab, children }: JournalPageProps) {
  const meta = TAB_META[tab];
  const isDark = tab === "live";
  const pageNum = TAB_ORDER.indexOf(tab) + 1;
  const total = TAB_ORDER.length;

  return (
    <div
      data-tab={tab}
      className="journal-stage relative min-h-screen pb-24 pl-0 md:pl-14"
      style={{
        background: meta.bg,
        color: isDark ? "var(--brand-yellow-text)" : undefined,
      }}
    >
      <div className="relative mx-auto w-full max-w-[1280px] px-4 py-[56px] sm:px-8 md:px-16 md:py-[72px]">
        {/* Page number stamp */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-6 flex flex-col items-end gap-1 sm:right-8 md:right-16"
        >
          <div
            className="h-1 w-14 rounded-sm opacity-60"
            style={{
              background:
                "linear-gradient(90deg, var(--brand-rose-200), var(--brand-purple-200), var(--brand-yellow-300))",
              transform: "rotate(-8deg)",
            }}
          />
          <div
            className="font-mono text-[11px] uppercase tracking-[0.22em]"
            style={{
              color: isDark ? "var(--brand-twitch-lav)" : "var(--ink-soft)",
            }}
          >
            p. {String(pageNum).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>
        </div>

        <header className="mb-8">
          <div
            className="eyebrow mb-2.5"
            style={isDark ? { color: "var(--brand-twitch-lav)" } : undefined}
          >
            {meta.eyebrow}
          </div>
          <h1
            className="h-display m-0"
            style={{
              fontSize: "clamp(40px, 6vw, 72px)",
              color: isDark ? "var(--brand-yellow-text)" : "var(--ink)",
            }}
          >
            {meta.title}
          </h1>
          <p
            className="mt-4 max-w-[560px] text-[15px] leading-[1.55]"
            style={{
              color: isDark ? "var(--brand-twitch-lav)" : "var(--ink-soft)",
            }}
          >
            {meta.subtitle}
          </p>
        </header>

        <div className="journal-masonry">{children}</div>

        <div className="mt-16">
          <WashiTape />
        </div>
      </div>

      <div
        data-page-sloth
        className="pointer-events-none absolute bottom-20 right-6 md:right-14 float-slow"
      >
        <SlothSticker variant={meta.slothVariant} size={240} className="!relative" />
      </div>
    </div>
  );
}
