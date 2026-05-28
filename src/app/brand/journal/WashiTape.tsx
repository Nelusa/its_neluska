import { cn } from "@/lib/cn";

export default function WashiTape({ className }: { className?: string }) {
  return (
    <div
      className={cn("h-1 w-full rounded-sm opacity-50", className)}
      style={{
        background:
          "linear-gradient(90deg, var(--brand-rose-200), var(--brand-purple-200), var(--brand-yellow-300))",
      }}
    />
  );
}
