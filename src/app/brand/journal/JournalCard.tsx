"use client";

import { useId, useState, type ReactNode } from "react";

import { cn } from "@/lib/cn";

interface JournalCardProps {
  title: string;
  subtitle?: string;
  defaultOpen?: boolean;
  children: ReactNode;
}

export default function JournalCard({
  title,
  subtitle,
  defaultOpen = true,
  children,
}: JournalCardProps) {
  const [open, setOpen] = useState(defaultOpen);
  const bodyId = useId();

  return (
    <div data-journal-card className={cn("card p-[14px]")}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={bodyId}
        className="flex w-full items-baseline justify-between gap-3 bg-transparent text-left"
      >
        <div className="min-w-0">
          <div className="text-[15px] font-medium leading-tight text-brand-purple-700">
            {title}
          </div>
          {subtitle ? (
            <div className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
              {subtitle}
            </div>
          ) : null}
        </div>
        <span
          aria-hidden="true"
          className="ml-2 inline-block shrink-0 text-base text-brand-purple-500 transition-transform"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          ↓
        </span>
      </button>

      <div
        id={bodyId}
        className="journal-card-body mt-2"
        data-open={open ? "true" : "false"}
      >
        <div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
