import type { ReactNode } from "react";

import { SectionLabel } from "@/components/SectionLabel";
import { cn } from "@/lib/cn";

export interface SectionProps {
  label?: string;
  title?: string;
  children: ReactNode;
  bg?: "paper" | "lavender";
}

export function Section({
  label,
  title,
  children,
  bg = "paper",
}: SectionProps) {
  const surface =
    bg === "lavender"
      ? "bg-[rgba(224,200,240,0.55)]"
      : "bg-[rgba(255,253,242,0.7)]";

  return (
    <section
      className={cn(
        "rounded-[32px] border border-[rgba(78,52,100,0.1)] p-6 shadow-[var(--sh-md)] sm:p-8",
        surface,
      )}
    >
      {(label || title) && (
        <div className="mb-6">
          {label ? <SectionLabel>{label}</SectionLabel> : null}
          {title ? (
            <h2 className="mt-3 text-4xl uppercase leading-[0.92] text-[var(--pp-700)] sm:text-5xl">
              {title}
            </h2>
          ) : null}
        </div>
      )}
      {children}
    </section>
  );
}
