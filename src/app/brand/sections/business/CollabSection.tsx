import { KitSection } from "../primitives";

export function CollabSection() {
  const templates = [
    {
      title: "Outreach · small streamer (similar size)",
      when: "I've watched them 3+ times, chatted, they know my handle",
      dm: `hey [name]! loved that [specific thing] stream last week, the [specific moment] had me 🦥

open to a co-stream / host swap sometime? thinking [specific idea - e.g. "we both play an hour of [game], switch communities"]. no pressure, just throwing it out there ♡

- @its_neluska`,
      rule: "Mention something SPECIFIC I actually watched. Generic = deleted.",
    },
    {
      title: "Outreach · creator I admire (bigger)",
      when: "Long-term. Build presence in their chat for 2+ months first.",
      dm: `hi [name]! been lurking in chat for a while (@its_neluska, the sloth one 🦥)

not pitching anything - just wanted to say that [specific episode/post/stream] taught me [specific thing]. if they ever do community collabs / showcase small streamers, I'd love to be in the pool.

either way, thanks for the content ♡`,
      rule: "No ask on first DM. Just gratitude. The ask comes later, or organically.",
    },
    {
      title: "Brand / sponsor pitch received",
      when: 'DM offering "partnership" or free product',
      dm: `hi [name]! thanks for reaching out.

a few questions before I commit:
· what's the deliverable (post count, reel, stream mention)?
· usage rights (theirs? mine? exclusive how long?)
· compensation (flat fee, revenue share, product-only?)
· audience fit - here's a quick brand doc: [link to brand kit or media one-pager]

I only work with products I'd actually use, so happy to chat further if it feels aligned ♡`,
      rule: "NEVER accept product-only deals under $500 retail. My time is worth money.",
    },
    {
      title: "Dev collab · open-source / hackathon",
      when: "GitHub + Twitter dev circle",
      dm: `hey! working on [my project] and saw they did something similar with [their thing]. any interest in co-streaming a build session or contributing to [specific feature]?

happy to structure it however - pair programming on Twitch, async PRs, co-authored blog post. totally open.

no pressure, repo here: [link] ♡`,
      rule: "Dev collabs beat brand deals long-term - they compound (skills + portfolio + network).",
    },
  ];

  const wins = [
    "Co-stream / host raid swap",
    "IG collab post (both accounts tagged)",
    "Reel duet / remix",
    "Guest on their podcast / VOD",
    "Open-source contribution together",
    "Shared giveaway",
    "Art trade (my photo × their illustration)",
  ];

  return (
    <KitSection
      id="collabs"
      eyebrow="24 · COLLAB PLAYBOOK"
      title="how to reach out, without cringe"
      sub="Most DMs die because people make them about themselves. Lead with them, pitch specifically, and make the ask tiny. Templates below - steal and adapt."
    >
      <div className="mb-8 grid gap-[18px]">
        {templates.map((template, i) => (
          <div key={template.title} className="card p-[22px]">
            <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-brand-purple-500">
                  TEMPLATE {String(i + 1).padStart(2, "0")}
                </div>
                <div className="h-display text-[17px] leading-[1.2] text-brand-purple-700">
                  {template.title}
                </div>
              </div>
              <div className="max-w-[200px] text-right text-[11px] italic text-ink-soft">
                {template.when}
              </div>
            </div>
            <pre className="mt-3 whitespace-pre-wrap rounded-lg border border-dashed border-line bg-paper-2 px-4 py-[14px] font-body text-xs leading-[1.6] text-ink">
              {template.dm}
            </pre>
            <div className="mt-3 text-xs italic text-brand-rose-400">
              ✦ rule: {template.rule}
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-brand-purple-50 p-[22px]">
        <div className="eyebrow mb-2.5 text-brand-purple-700">
          COLLAB TYPES · WHAT TO SUGGEST
        </div>
        <div className="flex flex-wrap gap-2">
          {wins.map((win) => (
            <span
              key={win}
              className="chip"
              style={{ background: "#fff", borderColor: "var(--pp-200)" }}
            >
              {win}
            </span>
          ))}
        </div>
        <p className="mb-0 mt-[14px] text-[13px] leading-[1.6] text-ink">
          <strong>Start tiny.</strong> A single IG story tag is a collab. A
          full co-stream is a year-3 move. I don't skip steps.
        </p>
      </div>
    </KitSection>
  );
}

