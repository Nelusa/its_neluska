import { Sloth } from "@/components/Sloth";
import type { TwitchPanelData } from "@/app/brand/sections/data";

export interface TwitchPanelPreviewProps {
  panel: TwitchPanelData;
}

function RuleRow({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-[11px] leading-4 text-white/90">
      <span className="mt-0.5 text-[var(--tw-butter)]">✦</span>
      <span>{text}</span>
    </div>
  );
}

export function TwitchPanelPreview({ panel }: TwitchPanelPreviewProps) {
  return (
    <article className="rounded-[28px] border border-[rgba(78,52,100,0.1)] bg-[rgba(255,253,242,0.9)] p-5 shadow-[var(--sh-sm)]">
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-[var(--pp-700)] px-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--tw-butter)]">
          {panel.number}
        </span>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--pp-500)]">
          {panel.label}
        </p>
      </div>

      <div className="relative aspect-[16/5] overflow-hidden rounded-[22px] bg-[var(--tw-purple)] p-4 text-white shadow-[var(--sh-md)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-25"
          style={{
            backgroundImage:
              "url('/assets/patterns/waves.png'), radial-gradient(circle at top right, rgba(245,229,116,0.18), transparent 22%)",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPosition: "left bottom, right top",
            backgroundSize: "55% auto, auto",
          }}
        />

        {panel.slug === "about" ? (
          <div className="relative z-10 flex h-full items-center gap-4">
            <Sloth variant="balloons" size={68} />
            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--tw-lav)]">
                {panel.eyebrow}
              </p>
              <h3 className="mt-2 text-xl uppercase leading-[0.9] text-[var(--tw-butter)]">
                {panel.title}
              </h3>
              <p className="mt-2 text-[11px] leading-4 text-white/90">
                {panel.body}
              </p>
            </div>
          </div>
        ) : null}

        {panel.slug === "schedule" ? (
          <div className="relative z-10 h-full">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--tw-lav)]">
              {panel.eyebrow}
            </p>
            <h3 className="mt-2 text-lg uppercase leading-[0.9] text-[var(--tw-butter)]">
              {panel.title}
            </h3>
            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                ["Tue", "20:00", "dev jam"],
                ["Thu", "20:00", "LoL night"],
                ["Sun", "soft", "extra"],
              ].map(([day, time, note]) => (
                <div
                  key={day}
                  className="rounded-xl border border-[rgba(245,229,116,0.18)] bg-[rgba(245,229,116,0.1)] px-2 py-2"
                >
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--tw-butter)]">
                    {day}
                  </p>
                  <p className="mt-1 text-sm uppercase leading-none text-white">
                    {time}
                  </p>
                  <p className="mt-1 text-[10px] leading-4 text-[var(--tw-lav)]">
                    {note}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {panel.slug === "rules" ? (
          <div className="relative z-10">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--tw-lav)]">
              {panel.eyebrow}
            </p>
            <h3 className="mt-2 text-lg uppercase leading-[0.9] text-[var(--tw-butter)]">
              {panel.title}
            </h3>
            <div className="mt-3 space-y-1.5">
              <RuleRow text="Be kind. No hate and no flame." />
              <RuleRow text="Respect the room and each other." />
              <RuleRow text="Backseating only when invited." />
            </div>
          </div>
        ) : null}

        {panel.slug === "setup" ? (
          <div className="relative z-10">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--tw-lav)]">
              {panel.eyebrow}
            </p>
            <h3 className="mt-2 text-lg uppercase leading-[0.9] text-[var(--tw-butter)]">
              {panel.title}
            </h3>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[
                ["keyboard", "Keychron Q1"],
                ["camera", "Sony ZV-E10"],
                ["mic", "Shure SM7B"],
                ["light", "Elgato Key Light"],
              ].map(([label, value]) => (
                <div key={label}>
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--tw-lav)]">
                    {label}
                  </p>
                  <p className="mt-1 text-[11px] leading-4 text-[var(--tw-butter)]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {panel.slug === "socials" ? (
          <div className="relative z-10">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--tw-lav)]">
              {panel.eyebrow}
            </p>
            <h3 className="mt-2 text-lg uppercase leading-[0.9] text-[var(--tw-butter)]">
              {panel.title}
            </h3>
            <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
              {[
                ["IG", "@its_neluska"],
                ["GitHub", "@Nelusa"],
                ["Web", "neluska.dev"],
                ["Discord", "soon"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-xl bg-white/6 px-2 py-2 backdrop-blur-sm"
                >
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-[var(--tw-lav)]">
                    {label}
                  </p>
                  <p className="mt-1 leading-4 text-white">{value}</p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {panel.slug === "support" ? (
          <div className="relative z-10 flex h-full items-center justify-between gap-3">
            <div className="min-w-0">
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--tw-lav)]">
                {panel.eyebrow}
              </p>
              <h3 className="mt-2 text-lg uppercase leading-[0.9] text-[var(--tw-butter)]">
                {panel.title}
              </h3>
              <p className="mt-2 text-[11px] leading-4 text-white/90">
                {panel.body}
              </p>
              <p className="mt-2 font-script text-lg text-[var(--py-300)]">
                thank you pookies
              </p>
            </div>
            <Sloth variant="balloons" size={76} rotate={-8} className="shrink-0" />
          </div>
        ) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-[var(--ink-soft)]">{panel.body}</p>
    </article>
  );
}
