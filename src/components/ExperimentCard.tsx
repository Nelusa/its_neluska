import Link from "next/link";
import type { CSSProperties } from "react";

import { cn } from "@/lib/cn";
import type { Experiment, ExperimentAccent } from "@/lib/experiments";

interface AccentStyle {
  bg: string;
  border: string;
  title: string;
  body: string;
  pillBorder: string;
  pillBg: string;
}

const ACCENT_STYLES: Record<ExperimentAccent, AccentStyle> = {
  purple: {
    bg: "bg-brand-purple-50",
    border: "border-line",
    title: "text-brand-purple-700",
    body: "text-ink-soft",
    pillBorder: "border-[rgba(78,52,100,0.18)]",
    pillBg: "bg-white/40",
  },
  rose: {
    bg: "bg-brand-rose-50",
    border: "border-line",
    title: "text-brand-purple-700",
    body: "text-ink-soft",
    pillBorder: "border-[rgba(78,52,100,0.18)]",
    pillBg: "bg-white/40",
  },
  yellow: {
    bg: "bg-brand-yellow-100",
    border: "border-line",
    title: "text-brand-purple-700",
    body: "text-ink-soft",
    pillBorder: "border-[rgba(78,52,100,0.18)]",
    pillBg: "bg-white/40",
  },
  twitch: {
    bg: "bg-brand-twitch-deep",
    border: "border-brand-twitch-purple",
    title: "text-brand-yellow-text",
    body: "text-brand-twitch-lav",
    pillBorder: "border-[rgba(245,229,116,0.3)]",
    pillBg: "bg-[rgba(245,229,116,0.06)]",
  },
};

const ROTATIONS = [-2.5, 2, -1.5, 2.5];

interface ExperimentCardProps {
  experiment: Experiment;
  index: number;
}

export function ExperimentCard({ experiment, index }: ExperimentCardProps) {
  const style = ACCENT_STYLES[experiment.accent];
  const rot = ROTATIONS[index % ROTATIONS.length];
  const isExternal = !experiment.href.startsWith("/");

  return (
    <Link
      href={experiment.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={`Open experiment: ${experiment.title}`}
      className="group block rounded-[24px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      <article
        className={cn(
          "scrapbook-card relative flex h-full flex-col gap-4 rounded-[24px] border p-6 shadow-sh-md",
          style.bg,
          style.border,
        )}
        style={{ ["--rot" as string]: `${rot}deg` } as CSSProperties}
      >
        {/* Top row: glyph + year */}
        <div className="flex items-center justify-between">
          {experiment.glyph ? (
            <span
              aria-hidden="true"
              className="text-[28px] leading-none"
            >
              {experiment.glyph}
            </span>
          ) : (
            <span />
          )}
          <span
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.22em]",
              style.body,
            )}
          >
            {experiment.year}
          </span>
        </div>

        {/* Title */}
        <h2
          className={cn(
            "font-display text-[clamp(20px,2.6vw,26px)] uppercase leading-[1.05]",
            style.title,
          )}
        >
          {experiment.title}
        </h2>

        {/* Blurb */}
        <p className={cn("text-[14px] leading-[1.55]", style.body)}>
          {experiment.blurb}
        </p>

        {/* Tech pills + open CTA */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2 pt-2">
          <div className="flex flex-wrap gap-1.5">
            {experiment.tech.map((t) => (
              <span
                key={t}
                className={cn(
                  "rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em]",
                  style.pillBorder,
                  style.pillBg,
                  style.title,
                )}
              >
                {t}
              </span>
            ))}
          </div>
          <span
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.18em]",
              style.title,
            )}
          >
            open →
          </span>
        </div>
      </article>
    </Link>
  );
}
