import type { ReactNode } from "react";
import Link from "next/link";

import { cn } from "@/lib/cn";

export interface LinkCardProps {
  href: string;
  label: string;
  sublabel?: string;
  icon?: ReactNode;
  variant?: "primary" | "default";
  external?: boolean;
}

export function LinkCard({
  href,
  label,
  sublabel,
  icon,
  variant = "default",
  external,
}: LinkCardProps) {
  const isExternal = external ?? !href.startsWith("/");
  const primary = variant === "primary";

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer noopener" : undefined}
      className={cn(
        "group flex min-h-11 items-center gap-4 rounded-[22px] border px-4 py-4 shadow-sh-sm transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple-400 focus-visible:ring-offset-2",
        primary
          ? "border-transparent bg-brand-twitch-purple text-white focus-visible:ring-offset-brand-twitch-purple"
          : "border-[rgba(78,52,100,0.1)] bg-[rgba(255,253,242,0.88)] text-ink focus-visible:ring-offset-paper",
      )}
    >
      <div
        aria-hidden="true"
        className={cn(
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg",
          primary
            ? "bg-[rgba(245,229,116,0.14)] text-brand-twitch-butter"
            : "bg-paper-2 text-brand-purple-700",
        )}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <div
          className={cn(
            "truncate font-display text-[15px] uppercase leading-[1.05]",
            primary ? "text-white" : "text-brand-purple-700",
          )}
        >
          {label}
        </div>
        {sublabel ? (
          <p
            className={cn(
              "mt-1 overflow-hidden text-sm leading-5",
              primary ? "text-brand-yellow-text" : "text-ink-soft",
            )}
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {sublabel}
          </p>
        ) : null}
      </div>

      <span
        aria-hidden="true"
        className={primary ? "text-brand-twitch-butter" : "text-brand-purple-400"}
      >
        →
      </span>
    </Link>
  );
}
