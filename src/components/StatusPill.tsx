"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";
import type { TwitchStatus } from "@/lib/twitch";

export interface StatusPillProps {
  status: TwitchStatus;
  refreshInterval?: number;
}

export function StatusPill({
  status,
  refreshInterval = 90000,
}: StatusPillProps) {
  const [current, setCurrent] = useState<TwitchStatus | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (refreshInterval === 0) return;

    const refresh = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/twitch-status", {
          cache: "no-store",
        });
        if (!response.ok) return;
        const nextStatus = (await response.json()) as TwitchStatus;
        setCurrent(nextStatus);
      } catch {
        // Staying on the last known state is friendlier than flashing errors.
      } finally {
        setLoading(false);
      }
    };

    const timer = window.setInterval(refresh, refreshInterval);
    return () => window.clearInterval(timer);
  }, [refreshInterval]);

  const resolved = current ?? status;

  if (loading && !resolved.title && !resolved.game && !resolved.startedAt) {
    return (
      <div className="inline-flex min-h-11 w-full max-w-sm items-center gap-3 rounded-full bg-paper px-4 py-3 shadow-sh-sm">
        <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-brand-purple-200" />
        <span className="h-3 w-40 animate-pulse rounded-full bg-brand-purple-100" />
      </div>
    );
  }

  const description = resolved.isLive
    ? resolved.title ?? "live now on Twitch"
    : "offline";

  return (
    <div
      className={cn(
        "inline-flex min-h-11 max-w-full items-center gap-3 rounded-full px-4 py-3 shadow-sh-sm",
        resolved.isLive
          ? "bg-brand-twitch-purple text-white"
          : "bg-[rgba(255,253,242,0.9)] text-brand-purple-700",
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "block h-2.5 w-2.5 rounded-full",
          resolved.isLive
            ? "animate-pulse bg-[#ef6a6a]"
            : "bg-[rgba(78,52,100,0.25)]",
        )}
      />
      <div className="min-w-0">
        <p className="truncate font-mono text-[11px] uppercase tracking-[0.18em]">
          {resolved.isLive ? "live now" : "offline"}
        </p>
        <p
          className={cn(
            "truncate text-sm",
            resolved.isLive ? "text-brand-twitch-lav" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
