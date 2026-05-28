"use client";

import { cn } from "@/lib/cn";

import { ClaudeSloth } from "../sections/primitives";
import { TAB_META, TAB_ORDER, type TabKey } from "./tabs";

interface JournalTabsProps {
  activeTab: TabKey | null;
  onSelect: (tab: TabKey | null) => void;
}

export default function JournalTabs({ activeTab, onSelect }: JournalTabsProps) {
  return (
    <>
      {/* Desktop: vertical left sidebar */}
      <aside
        aria-label="Journal chapters"
        className="fixed left-0 top-0 bottom-0 z-40 hidden w-14 flex-col items-stretch border-r border-line bg-paper md:flex"
      >
        <button
          type="button"
          onClick={() => onSelect(null)}
          aria-label="Back to desk"
          aria-current={activeTab === null ? "page" : undefined}
          className={cn(
            "flex h-14 items-center justify-center border-b border-line text-[14px] transition-colors",
            activeTab === null
              ? "bg-paper text-brand-purple-700"
              : "bg-[var(--brand-purple-50)] text-brand-purple-500 hover:bg-[var(--brand-purple-100)]",
          )}
        >
          ⌂
        </button>

        <div className="flex flex-1 flex-col">
          {TAB_ORDER.map((key, i) => {
            const meta = TAB_META[key];
            const isActive = activeTab === key;
            const isLast = i === TAB_ORDER.length - 1;
            // Indicator color contrasts with the tab's own bg
            const indicatorColor =
              key === "live" ? "var(--brand-twitch-butter)" : "var(--brand-purple-700)";
            return (
              <button
                key={key}
                type="button"
                onClick={() => onSelect(key)}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative flex flex-1 items-center justify-center border-b border-line transition-all last:border-b-0",
                  isActive
                    ? "z-10 font-bold"
                    : "opacity-75 hover:opacity-100",
                )}
                style={{
                  background: meta.bg,
                  color: isActive ? meta.accent : meta.accent,
                  ...(isActive
                    ? {
                        boxShadow: `inset 6px 0 0 0 ${indicatorColor}, 2px 0 6px oklch(0.3 0.05 310 / 0.12)`,
                        transform: "translateX(4px)",
                        borderRight: "0",
                      }
                    : {}),
                }}
              >
                {/* Active indicator: triangle arrow on the right edge */}
                {isActive ? (
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-[7px] top-1/2 h-0 w-0 -translate-y-1/2"
                    style={{
                      borderTop: "7px solid transparent",
                      borderBottom: "7px solid transparent",
                      borderLeft: `7px solid ${indicatorColor}`,
                    }}
                  />
                ) : null}
                <span className="journal-tab-text">{meta.label}</span>
                {isLast ? (
                  <span
                    className="pointer-events-none absolute -right-1 bottom-1"
                    style={{ transform: "rotate(-8deg)" }}
                    aria-hidden="true"
                  >
                    <ClaudeSloth size={20} variant="peek" />
                  </span>
                ) : null}
              </button>
            );
          })}
        </div>
      </aside>

      {/* Mobile: bottom tab bar */}
      <nav
        aria-label="Journal chapters"
        className="fixed bottom-0 left-0 right-0 z-40 flex h-14 items-stretch border-t border-line md:hidden"
        style={{
          background: "color-mix(in oklab, var(--paper) 80%, transparent)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <button
          type="button"
          onClick={() => onSelect(null)}
          aria-label="Back to desk"
          aria-current={activeTab === null ? "page" : undefined}
          className="relative flex flex-1 flex-col items-center justify-center text-base"
        >
          <span aria-hidden="true">⌂</span>
          {activeTab === null ? (
            <span
              aria-hidden="true"
              className="mt-1 h-1 w-1 rounded-full bg-brand-purple-500"
            />
          ) : null}
        </button>
        {TAB_ORDER.map((key) => {
          const meta = TAB_META[key];
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onSelect(key)}
              aria-current={isActive ? "page" : undefined}
              aria-label={meta.label}
              className="relative flex flex-1 flex-col items-center justify-center text-base"
            >
              <span aria-hidden="true">{meta.icon}</span>
              {isActive ? (
                <span
                  aria-hidden="true"
                  className="mt-1 h-1 w-1 rounded-full"
                  style={{ background: meta.accent }}
                />
              ) : null}
            </button>
          );
        })}
      </nav>
    </>
  );
}
