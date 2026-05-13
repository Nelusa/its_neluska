import type { ReactNode } from "react";
import Link from "next/link";

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
      className={[
        "group flex min-h-11 items-center gap-4 rounded-[22px] border px-4 py-4 shadow-[var(--sh-sm)] transition-transform duration-200 hover:-translate-y-0.5 motion-reduce:transition-none",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pp-400)] focus-visible:ring-offset-2",
        primary
          ? "border-transparent bg-[var(--tw-purple)] text-white focus-visible:ring-offset-[var(--tw-purple)]"
          : "border-[rgba(78,52,100,0.1)] bg-[rgba(255,253,242,0.88)] text-[var(--ink)] focus-visible:ring-offset-[var(--paper)]",
      ].join(" ")}
    >
      <div
        aria-hidden="true"
        className={[
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-lg",
          primary
            ? "bg-[rgba(245,229,116,0.14)] text-[var(--tw-butter)]"
            : "bg-[var(--paper-2)] text-[var(--pp-700)]",
        ].join(" ")}
      >
        {icon}
      </div>

      <div className="min-w-0 flex-1">
        <div
          className={[
            "truncate font-display text-[15px] uppercase leading-[1.05]",
            primary ? "text-white" : "text-[var(--pp-700)]",
          ].join(" ")}
        >
          {label}
        </div>
        {sublabel ? (
          <p
            className={[
              "mt-1 overflow-hidden text-sm leading-5",
              primary ? "text-[var(--py-text)]" : "text-[var(--ink-soft)]",
            ].join(" ")}
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
        className={primary ? "text-[var(--tw-butter)]" : "text-[var(--pp-400)]"}
      >
        →
      </span>
    </Link>
  );
}
