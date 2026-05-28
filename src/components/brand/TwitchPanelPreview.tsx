import type { ReactNode } from "react";

import { Sloth } from "@/components/Sloth";
import type { TwitchPanelData } from "@/app/brand/sections/data";

export interface TwitchPanelPreviewProps {
  panel: TwitchPanelData;
}

/* ────────────────────────────────────────────────────────────── *
 *  Hard-coded preview data (mirrors what's shown on Twitch panels)
 * ────────────────────────────────────────────────────────────── */

const SCHEDULE_SLOTS: Array<[day: string, time: string, note: string]> = [
  ["Tue", "20:00", "dev jam"],
  ["Thu", "20:00", "LoL night"],
  ["Sun", "soft", "extra"],
];

const RULES: string[] = [
  "Be kind. No hate and no flame.",
  "Respect the room and each other.",
  "Backseating only when invited.",
];

const SETUP_GEAR: Array<[label: string, value: string]> = [
  ["keyboard", "Keychron Q1"],
  ["camera", "Sony ZV-E10"],
  ["mic", "Shure SM7B"],
  ["light", "Elgato Key Light"],
];

const SOCIALS: Array<[label: string, value: string]> = [
  ["IG", "@its_neluska"],
  ["GitHub", "@Nelusa"],
  ["Web", "neluska.dev"],
  ["Discord", "soon"],
];

/* ────────────────────────────────────────────────────────────── *
 *  Small shared bits
 * ────────────────────────────────────────────────────────────── */

function PanelEyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-brand-twitch-lav">
      {children}
    </p>
  );
}

function PanelTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-2 text-lg uppercase leading-[0.9] text-brand-twitch-butter">
      {children}
    </h3>
  );
}

function RuleRow({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 text-[11px] leading-4 text-white/90">
      <span className="mt-0.5 text-brand-twitch-butter">✦</span>
      <span>{text}</span>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────── *
 *  Per-slug renderers
 * ────────────────────────────────────────────────────────────── */

function PanelAbout({ panel }: { panel: TwitchPanelData }) {
  return (
    <div className="relative z-10 flex h-full items-center gap-4">
      <Sloth variant="balloons" size={68} />
      <div className="min-w-0">
        <PanelEyebrow>{panel.eyebrow}</PanelEyebrow>
        <h3 className="mt-2 text-xl uppercase leading-[0.9] text-brand-twitch-butter">
          {panel.title}
        </h3>
        <p className="mt-2 text-[11px] leading-4 text-white/90">{panel.body}</p>
      </div>
    </div>
  );
}

function PanelSchedule({ panel }: { panel: TwitchPanelData }) {
  return (
    <div className="relative z-10 h-full">
      <PanelEyebrow>{panel.eyebrow}</PanelEyebrow>
      <PanelTitle>{panel.title}</PanelTitle>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {SCHEDULE_SLOTS.map(([day, time, note]) => (
          <div
            key={day}
            className="rounded-xl border border-[rgba(245,229,116,0.18)] bg-[rgba(245,229,116,0.1)] px-2 py-2"
          >
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-brand-twitch-butter">
              {day}
            </p>
            <p className="mt-1 text-sm uppercase leading-none text-white">
              {time}
            </p>
            <p className="mt-1 text-[10px] leading-4 text-brand-twitch-lav">
              {note}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PanelRules({ panel }: { panel: TwitchPanelData }) {
  return (
    <div className="relative z-10">
      <PanelEyebrow>{panel.eyebrow}</PanelEyebrow>
      <PanelTitle>{panel.title}</PanelTitle>
      <div className="mt-3 space-y-1.5">
        {RULES.map((text) => (
          <RuleRow key={text} text={text} />
        ))}
      </div>
    </div>
  );
}

function PanelSetup({ panel }: { panel: TwitchPanelData }) {
  return (
    <div className="relative z-10">
      <PanelEyebrow>{panel.eyebrow}</PanelEyebrow>
      <PanelTitle>{panel.title}</PanelTitle>
      <div className="mt-3 grid grid-cols-2 gap-2">
        {SETUP_GEAR.map(([label, value]) => (
          <div key={label}>
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-brand-twitch-lav">
              {label}
            </p>
            <p className="mt-1 text-[11px] leading-4 text-brand-twitch-butter">
              {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PanelSocials({ panel }: { panel: TwitchPanelData }) {
  return (
    <div className="relative z-10">
      <PanelEyebrow>{panel.eyebrow}</PanelEyebrow>
      <PanelTitle>{panel.title}</PanelTitle>
      <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
        {SOCIALS.map(([label, value]) => (
          <div
            key={label}
            className="rounded-xl bg-white/6 px-2 py-2 backdrop-blur-sm"
          >
            <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-brand-twitch-lav">
              {label}
            </p>
            <p className="mt-1 leading-4 text-white">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PanelSupport({ panel }: { panel: TwitchPanelData }) {
  return (
    <div className="relative z-10 flex h-full items-center justify-between gap-3">
      <div className="min-w-0">
        <PanelEyebrow>{panel.eyebrow}</PanelEyebrow>
        <PanelTitle>{panel.title}</PanelTitle>
        <p className="mt-2 text-[11px] leading-4 text-white/90">{panel.body}</p>
        <p className="mt-2 font-script text-lg text-brand-yellow-300">
          thanks pookies
        </p>
      </div>
      <Sloth
        variant="balloons"
        size={76}
        rotate={-8}
        className="shrink-0"
      />
    </div>
  );
}

const PANEL_RENDERERS: Record<
  string,
  (panel: TwitchPanelData) => ReactNode
> = {
  about: (p) => <PanelAbout panel={p} />,
  schedule: (p) => <PanelSchedule panel={p} />,
  rules: (p) => <PanelRules panel={p} />,
  setup: (p) => <PanelSetup panel={p} />,
  socials: (p) => <PanelSocials panel={p} />,
  support: (p) => <PanelSupport panel={p} />,
};

/* ────────────────────────────────────────────────────────────── *
 *  Public component
 * ────────────────────────────────────────────────────────────── */

export function TwitchPanelPreview({ panel }: TwitchPanelPreviewProps) {
  const renderInner = PANEL_RENDERERS[panel.slug];

  return (
    <article className="rounded-[28px] border border-[rgba(78,52,100,0.1)] bg-[rgba(255,253,242,0.9)] p-5 shadow-sh-sm">
      <div className="mb-4 flex items-center gap-3">
        <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-brand-purple-700 px-2 font-mono text-[10px] uppercase tracking-[0.16em] text-brand-twitch-butter">
          {panel.number}
        </span>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-purple-500">
          {panel.label}
        </p>
      </div>

      <div className="relative aspect-[16/5] overflow-hidden rounded-[22px] bg-brand-twitch-purple p-4 text-white shadow-sh-md">
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

        {renderInner ? renderInner(panel) : null}
      </div>

      <p className="mt-4 text-sm leading-6 text-ink-soft">{panel.body}</p>
    </article>
  );
}
