import { cn } from "@/lib/cn";

import { KitSection } from "../primitives";

export function KPISection() {
  const quarterly = [
    {
      ch: "Instagram",
      metric: "Followers",
      q1: "600",
      q2: "2k",
      q3: "4k",
      q4: "6k",
      north: "reach + discovery (IG-first)",
    },
    {
      ch: "Instagram",
      metric: "IG Reels avg views",
      q1: "400",
      q2: "1.2k",
      q3: "3.5k",
      q4: "9k",
      north: "hook quality + saves",
    },
    {
      ch: "Instagram",
      metric: "Save rate",
      q1: "2%",
      q2: "3%",
      q3: "4%",
      q4: "5%",
      north: "value depth",
    },
    {
      ch: "Twitch",
      metric: "Followers",
      q1: "50",
      q2: "100",
      q3: "200",
      q4: "400",
      north: "community growth (low-frequency streams)",
    },
    {
      ch: "Twitch",
      metric: "Avg concurrent",
      q1: "2-3",
      q2: "5-8",
      q3: "8-12",
      q4: "12-20",
      north: "retention when I go live",
    },
    {
      ch: "Twitch",
      metric: "Affiliate?",
      q1: "-",
      q2: "-",
      q3: "✓",
      q4: "✓",
      north: "50 followers · 3 avg · 500 min · 7 unique days – slower at 1-2 streams/mo",
    },
    {
      ch: "Web",
      metric: "Monthly visits",
      q1: "100",
      q2: "500",
      q3: "1.5k",
      q4: "3k",
      north: "brand search",
    },
    {
      ch: "GitHub",
      metric: "Stars on 1 repo",
      q1: "10",
      q2: "50",
      q3: "150",
      q4: "400",
      north: "dev cred",
    },
  ];

  const healthChecks = [
    {
      when: "Weekly (Sunday)",
      what: "IG insights + Twitch dashboard screenshot",
      why: "Spot trends before they become problems",
    },
    {
      when: "Monthly",
      what: "Review top 3 / bottom 3 posts - why?",
      why: "Double-down on what works, cut what doesn't",
    },
    {
      when: "Quarterly",
      what: "Full KPI table vs. target - adjust strategy",
      why: "I don't sail by stars I can't see",
    },
    {
      when: "Never",
      what: "Compare myself to other creators I admire",
      why: "Envy is a content-killer. I stay in my lane.",
    },
  ];

  return (
    <KitSection
      id="kpis"
      eyebrow="22 · KPI DASHBOARD"
      title="what success looks like"
      sub="Brand without metrics is vibes. Here's what I measure, when I measure, and what's healthy vs concerning. Year 1 targets are realistic - not moonshot, not beige."
      bg="var(--paper-2)"
    >
      <div className="mb-8">
        <div className="eyebrow mb-3 text-[var(--pp-500)]">
          YEAR 1 QUARTERLY TARGETS
        </div>
        <div className="card overflow-hidden p-0">
          <div className="section-x-scroll">
            <table className="min-w-[980px] w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-[var(--pp-50)] text-left">
                  {[
                    "Channel",
                    "Metric",
                    "Q1",
                    "Q2",
                    "Q3",
                    "Q4",
                    "North star",
                  ].map((head, i) => (
                    <th
                      key={head}
                      className="font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--pp-700)]"
                      style={{
                        padding:
                          i >= 2 && i <= 5 ? "12px 8px" : "12px 14px",
                        textAlign: i >= 2 && i <= 5 ? "center" : "left",
                      }}
                    >
                      {head}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {quarterly.map((row, i) => (
                  <tr
                    key={`${row.ch}-${row.metric}`}
                    className={cn(i !== 0 && "border-t border-[var(--line)]")}
                  >
                    <td className="px-[14px] py-2.5 font-mono text-[11px] text-[var(--pp-600)]">
                      {row.ch}
                    </td>
                    <td className="px-[14px] py-2.5 text-[var(--ink)]">
                      {row.metric}
                    </td>
                    <td className="px-2 py-2.5 text-center font-mono text-xs text-[var(--ink-soft)]">
                      {row.q1}
                    </td>
                    <td className="px-2 py-2.5 text-center font-mono text-xs text-[var(--ink-soft)]">
                      {row.q2}
                    </td>
                    <td className="px-2 py-2.5 text-center font-mono text-xs text-[var(--ink-soft)]">
                      {row.q3}
                    </td>
                    <td className="px-2 py-2.5 text-center font-mono text-xs font-semibold text-[var(--pp-700)]">
                      {row.q4}
                    </td>
                    <td className="px-[14px] py-2.5 text-xs italic text-[var(--ink-soft)]">
                      {row.north}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card mb-8 bg-[var(--pp-50)] p-6">
        <div className="font-script text-4xl leading-none text-[var(--pp-700)]">
          the only metric that really matters
        </div>
        <p className="mb-0 mt-2.5 max-w-[640px] text-[14px] leading-[1.6] text-[var(--ink)]">
          <strong>Did I enjoy making this?</strong> If yes, 80% of the other
          numbers will take care of themselves over 18 months. If no, no growth
          hack saves me. Burnout is the silent brand-killer.
        </p>
      </div>

      <div>
        <div className="eyebrow mb-3 text-[var(--pp-500)]">
          HEALTH-CHECK RHYTHM
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-[14px]">
          {healthChecks.map((item) => (
            <div key={item.when} className="card p-4">
              <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--pp-500)]">
                {item.when}
              </div>
              <div className="mb-1 text-[13px] font-semibold text-[var(--ink)]">
                {item.what}
              </div>
              <div className="text-xs leading-[1.5] text-[var(--ink-soft)]">
                {item.why}
              </div>
            </div>
          ))}
        </div>
      </div>
    </KitSection>
  );
}

