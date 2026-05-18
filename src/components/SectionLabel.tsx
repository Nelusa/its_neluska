import type { ReactNode } from "react";

interface SectionLabelProps {
  children: ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-brand-purple-500">
      <span className="h-px flex-1 bg-[rgba(78,52,100,0.15)]" />
      <span>{children}</span>
      <span className="h-px flex-1 bg-[rgba(78,52,100,0.15)]" />
    </div>
  );
}
