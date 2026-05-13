import type { ColorFamily } from "@/lib/brand-kit";

export interface ColorScaleProps {
  family: ColorFamily;
}

export function ColorScale({ family }: ColorScaleProps) {
  return (
    <article className="rounded-[28px] border border-[rgba(78,52,100,0.1)] bg-[rgba(255,253,242,0.9)] p-5 shadow-[var(--sh-sm)]">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">{family.name}</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--ink-soft)]">
            {family.note}
          </p>
        </div>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-7">
        {family.shades.map((shade) => (
          <div
            key={shade.hex}
            className="overflow-hidden rounded-[20px] border border-black/5 shadow-[var(--sh-sm)]"
          >
            <div
              className="h-20 w-full"
              style={{ backgroundColor: shade.hex }}
            />
            <div className="bg-white px-3 py-3">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--pp-700)]">
                {shade.hex}
              </p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
