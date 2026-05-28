import Link from "next/link";
import type { CSSProperties } from "react";

import { Sloth } from "@/components/Sloth";
import { cn } from "@/lib/cn";
import type { Project, ProjectAccent, ProjectStatus } from "@/lib/projects";

interface AccentStyle {
  bg: string;
  border: string;
  title: string;
  body: string;
  pillBorder: string;
  pillBg: string;
  washiClass: string;
  washiRotate: number;
}

const ACCENT_STYLES: Record<ProjectAccent, AccentStyle> = {
  purple: {
    bg: "bg-brand-purple-50",
    border: "border-line",
    title: "text-brand-purple-700",
    body: "text-ink-soft",
    pillBorder: "border-[rgba(78,52,100,0.18)]",
    pillBg: "bg-white/40",
    washiClass: "bg-brand-yellow-300",
    washiRotate: -10,
  },
  rose: {
    bg: "bg-brand-rose-50",
    border: "border-line",
    title: "text-brand-purple-700",
    body: "text-ink-soft",
    pillBorder: "border-[rgba(78,52,100,0.18)]",
    pillBg: "bg-white/40",
    washiClass: "bg-brand-purple-200",
    washiRotate: 12,
  },
  yellow: {
    bg: "bg-brand-yellow-100",
    border: "border-line",
    title: "text-brand-purple-700",
    body: "text-ink-soft",
    pillBorder: "border-[rgba(78,52,100,0.18)]",
    pillBg: "bg-white/40",
    washiClass: "bg-brand-rose-200",
    washiRotate: -8,
  },
  twitch: {
    bg: "bg-brand-twitch-deep",
    border: "border-brand-twitch-purple",
    title: "text-brand-yellow-text",
    body: "text-brand-twitch-lav",
    pillBorder: "border-[rgba(245,229,116,0.3)]",
    pillBg: "bg-[rgba(245,229,116,0.06)]",
    washiClass: "bg-brand-twitch-butter",
    washiRotate: 10,
  },
};

const STATUS_ICON: Record<ProjectStatus, string> = {
  live: "✦",
  wip: "⌥",
  archived: "✕",
};

const STATUS_LABEL: Record<ProjectStatus, string> = {
  live: "live",
  wip: "wip",
  archived: "archived",
};

const ROTATIONS = [-3, 2.5, -2, 3.5, -2.5, 2];

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const style = ACCENT_STYLES[project.accent];
  const rot = ROTATIONS[index % ROTATIONS.length];
  const isExternal = !project.href.startsWith("/");

  return (
    <Link
      href={project.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={`Open project: ${project.title}`}
      className="group block rounded-[24px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
    >
      <article
        className={cn(
          "scrapbook-card relative flex h-full flex-col gap-4 rounded-[24px] border p-6 shadow-sh-md",
          style.bg,
          style.border,
          project.status === "archived" && "opacity-70",
        )}
        // Inline style ONLY for the per-index rotation via --rot CSS variable.
        // Tailwind can't generate arbitrary rotation values at runtime.
        style={{ ["--rot" as string]: `${rot}deg` } as CSSProperties}
      >
        {/* Washi tape in top-left corner — Tailwind for color, inline for rotation */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-4 -top-2.5"
        >
          <div
            className={cn(
              "h-[20px] w-[110px] opacity-90",
              style.washiClass,
            )}
            style={{
              transform: `rotate(${style.washiRotate}deg)`,
              backgroundImage:
                "repeating-linear-gradient(90deg, rgba(255,255,255,0.22) 0 6px, transparent 6px 12px)",
            }}
          />
        </div>

        {/* Top row: year + status pill */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <span
            className={cn(
              "font-mono text-[10px] uppercase tracking-[0.22em]",
              style.body,
            )}
          >
            {project.year}
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.18em]",
              style.pillBorder,
              style.body,
            )}
          >
            <span aria-hidden="true">{STATUS_ICON[project.status]}</span>
            {STATUS_LABEL[project.status]}
          </span>
        </div>

        {/* Title */}
        <h2
          className={cn(
            "font-display text-[clamp(22px,3vw,28px)] uppercase leading-[1.05]",
            style.title,
          )}
        >
          {project.title}
        </h2>

        {/* Blurb */}
        <p className={cn("text-[14px] leading-[1.55]", style.body)}>
          {project.blurb}
        </p>

        {/* Tech pills */}
        <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
          {project.tech.map((t) => (
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

        {/* Optional sloth decoration */}
        {project.slothVariant ? (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-3 right-3 opacity-60"
            style={{ transform: "rotate(-6deg)" }}
          >
            <Sloth size={48} variant={project.slothVariant} />
          </div>
        ) : null}
      </article>
    </Link>
  );
}
