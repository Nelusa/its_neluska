import type { BrandMode } from "@/lib/brand-kit";

const SURFACE_BY_MODE = {
  princess:
    "bg-[linear-gradient(135deg,rgba(243,230,239,0.96),rgba(225,189,213,0.96))] text-[var(--dr-500)]",
  nerd: "bg-[var(--tw-purple)] text-[var(--tw-butter)]",
  funny: "bg-[var(--py-100)] text-[var(--pp-700)]",
} as const;

export interface ModeCardProps {
  mode: BrandMode;
}

export function ModeCard({ mode }: ModeCardProps) {
  return (
    <article
      className={`relative overflow-hidden rounded-[28px] border border-[rgba(78,52,100,0.08)] p-6 shadow-[var(--sh-md)] ${SURFACE_BY_MODE[mode.key]}`}
    >
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-70">
        {mode.share} of feed
      </p>
      <h3 className="mt-3 text-3xl uppercase leading-[0.92]">{mode.title}</h3>
      <p className="mt-2 font-script text-3xl leading-none opacity-90">
        {mode.tagline}
      </p>

      <div className="mt-6 space-y-4 text-sm leading-6">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">
            posts
          </p>
          <p className="mt-2 opacity-95">{mode.content}</p>
        </div>

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] opacity-70">
            feels like
          </p>
          <p className="mt-2 opacity-95">{mode.vibe}</p>
        </div>
      </div>

      <div className="mt-6 border-t border-current/15 pt-4">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-75">
          visual rule
        </p>
        <p className="mt-2 text-sm leading-6 opacity-95">{mode.visuals}</p>
      </div>
    </article>
  );
}
