import type { Metadata } from "next";

import { Section } from "@/components/Section";
import { SiteFrame } from "@/components/SiteFrame";
import { schedule } from "@/lib/schedule";

export const metadata: Metadata = {
  title: "schedule",
};

const categoryCopy: Record<
  (typeof schedule)[number]["category"],
  { label: string; accent: string; bg: string }
> = {
  dev: {
    label: "dev jam",
    accent: "var(--tw-butter)",
    bg: "var(--tw-purple)",
  },
  lol: {
    label: "LoL night",
    accent: "var(--tw-heart)",
    bg: "var(--paper-2)",
  },
  irl: {
    label: "IRL / puzzle",
    accent: "var(--pp-500)",
    bg: "var(--py-100)",
  },
  chill: {
    label: "chill",
    accent: "var(--dr-400)",
    bg: "var(--paper)",
  },
};

const dayLabel: Record<(typeof schedule)[number]["day"], string> = {
  mon: "Mon",
  tue: "Tue",
  wed: "Wed",
  thu: "Thu",
  fri: "Fri",
  sat: "Sat",
  sun: "Sun",
};

function timeWindow(time: string) {
  const hour = Number.parseInt(time.split(":")[0] ?? "20", 10);
  if (hour < 12) return "morning";
  if (hour < 17) return "afternoon";
  if (hour < 21) return "evening";
  return "late";
}

export default function SchedulePage() {
  return (
    <SiteFrame bg="paper">
      <section className="max-w-3xl">
        <p className="eyebrow">live events</p>
        <h1 className="mt-3 text-5xl uppercase leading-[0.9] text-[var(--pp-700)] sm:text-6xl">
          catch me live
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--ink-soft)] sm:text-lg">
          Streams are occasional events, not a weekly grid. Timezone CET / CEST
          (Prague). Exact dates land on Instagram first; Twitch notifications
          ping the exact go-live minute.
        </p>
      </section>

      <Section label="✦ heads up" title="next slot" bg="lavender">
        <div className="grid gap-4 md:grid-cols-3">
          {schedule.map((slot) => {
            const style = categoryCopy[slot.category];
            const isDark = style.bg === "var(--tw-purple)";

            return (
              <article
                key={`${slot.day}-${slot.title}`}
                className="rounded-[28px] border border-[rgba(78,52,100,0.12)] p-6 shadow-[var(--sh-md)]"
                style={{
                  background: style.bg,
                  color: isDark ? "#fff" : "var(--ink)",
                }}
              >
                <p
                  className="font-mono text-[11px] uppercase tracking-[0.22em]"
                  style={{ color: isDark ? "var(--tw-lav)" : "var(--pp-500)" }}
                >
                  {dayLabel[slot.day]} {timeWindow(slot.time)}
                </p>
                <h2
                  className="mt-3 text-3xl uppercase leading-[0.95]"
                  style={{ color: isDark ? style.accent : "var(--pp-700)" }}
                >
                  {style.label}
                </h2>
                <p
                  className="mt-3 text-sm leading-6"
                  style={{ color: isDark ? "var(--tw-lav)" : "var(--ink-soft)" }}
                >
                  {slot.emoji} {slot.title} · around {slot.time} · about{" "}
                  {Math.round(slot.duration / 60)}h of cozy chaos.
                </p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section label="♡ note" title="gentle disclaimer" bg="paper">
        <article className="max-w-2xl rounded-[28px] border border-[rgba(78,52,100,0.12)] bg-[var(--paper-2)] p-6 shadow-[var(--sh-md)]">
          <p className="text-sm leading-7 text-[var(--ink-soft)]">
            Schedule may shift with life, energy, and the occasional sloth pace.
            Notifications on Twitch stay the best ping for the exact go-live
            moment.
          </p>
        </article>
      </Section>
    </SiteFrame>
  );
}
