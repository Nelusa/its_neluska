import type { RecipeCardData } from "@/lib/brand-kit";

const BADGE_BY_MODE = {
  princess: "bg-[var(--mp-100)] text-[var(--dr-500)]",
  nerd: "bg-[var(--tw-purple)] text-[var(--tw-butter)]",
  funny: "bg-[var(--py-100)] text-[var(--pp-700)]",
} as const;

export interface RecipeCardProps {
  recipe: RecipeCardData;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <article className="rounded-[24px] border border-[rgba(78,52,100,0.1)] bg-[rgba(255,253,242,0.92)] p-5 shadow-[var(--sh-sm)]">
      <div
        className={`inline-flex rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${BADGE_BY_MODE[recipe.mode]}`}
      >
        {recipe.mode}
      </div>
      <h3 className="mt-4 text-2xl uppercase leading-[0.95] text-[var(--pp-700)]">
        {recipe.title}
      </h3>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--pp-500)]">
        {recipe.format}
      </p>
      <p className="mt-4 text-sm leading-6 text-[var(--ink-soft)]">
        {recipe.summary}
      </p>
    </article>
  );
}
