import { KitSection } from "../primitives";

export function CrisisSection() {
  const scenarios = [
    {
      title: "Stream troll · raid · hate comment",
      gut: "engage, explain, defend",
      do: [
        "Timeout 10 min (chat) or ban (Twitch)",
        "DO NOT read the comment aloud or respond on-stream",
        "Post-stream: screenshot, block, move on",
        "If multiple → enable followers-only chat (30 min minimum)",
      ],
      note: "Trolls want air. Deny oxygen. My regulars handle the rest if I stay calm.",
    },
    {
      title: "Cancel attempt · pile-on · doxxing attempt",
      gut: "respond fast, over-explain",
      do: [
        "Breathe. Wait 24h minimum before posting anything.",
        "Screenshot everything (evidence if it escalates legally)",
        "Lock down: private IG, disable Twitch chat, turn off comments",
        "If allegation is true → one apology post, direct, no excuses. I don't delete history.",
        "If allegation is false → silence + one short factual statement. No back-and-forth.",
        "Report harassment to platforms (Twitch + IG both have forms)",
      ],
      note: "Never DM or reply to accusers publicly. Trust takes years; getting dragged takes hours.",
    },
    {
      title: "Burnout · motivation crash",
      gut: "push through, post anyway",
      do: [
        'Cancel stream with one sentence: "sick day, back [next date] ♡"',
        "Schedule 1 week of IG pre-made (use content calendar backlog)",
        "NO content about being burned out - takes more than it gives",
        "Return with something small (IG story, not a reel) - rebuild momentum",
      ],
      note: "Audience forgives silence faster than they forgive forced content. Rest is strategy.",
    },
    {
      title: "Tech disaster · stream crashes · accidental IRL reveal",
      gut: "panic, apologize, re-stream",
      do: [
        "Stay calm - viewers LOVE tech fails, they're relatable",
        'Tweet/post "stream died, brb 5 min" - stay human',
        "If something personal leaked (address, face I didn't mean to show, NSFW) → end stream IMMEDIATELY",
        "Twitch contact form for VOD deletion if needed",
      ],
      note: "Tech fails = bonding opportunity. I don't over-apologize – 10 seconds max.",
    },
    {
      title: "DM creep · parasocial slide · stalker",
      gut: "be nice, respond politely",
      do: [
        "Never share: home city (Prague is fine - exact district is not), work schedule, friends' faces, pets' names",
        "Block early. Politeness is not owed.",
        "Save screenshots before blocking (if pattern escalates)",
        "If real-life threat → police. Twitch + IG also have formal channels.",
        "I tell someone I trust (partner, friend, family) – I don't carry it alone",
      ],
      note: "My safety > any viewer's feelings. Always. No exceptions.",
    },
  ];

  return (
    <KitSection
      id="crisis"
      eyebrow="23 · CRISIS PLAYBOOK"
      title="when things go sideways"
      sub="Not fun, not optional. Having a plan written down means my panic-brain doesn't have to decide. I read this once, remember where it is."
    >
      <div className="grid gap-[18px]">
        {scenarios.map((scenario, i) => (
          <div
            key={scenario.title}
            className="card grid gap-6 p-5 min-[980px]:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]"
          >
            <div>
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--dr-400)]">
                SCENARIO {String(i + 1).padStart(2, "0")}
              </div>
              <div className="h-display mb-3 text-lg leading-[1.2] text-[var(--pp-700)]">
                {scenario.title}
              </div>
              <div className="rounded-md bg-[var(--dr-50)] px-2.5 py-2 text-[11px] italic text-[var(--dr-400)]">
                Wrong instinct: {scenario.gut}
              </div>
            </div>

            <div>
              <div className="eyebrow mb-2.5 text-[var(--pp-500)]">
                DO INSTEAD
              </div>
              <ol className="m-0 list-decimal pl-5 text-[13px] leading-[1.7] text-[var(--ink)]">
                {scenario.do.map((step) => (
                  <li key={step}>{step}</li>
                ))}
              </ol>
              <div className="mt-3.5 rounded-md bg-[var(--pp-50)] px-3 py-2.5 text-xs italic leading-[1.5] text-[var(--pp-700)]">
                ♡ {scenario.note}
              </div>
            </div>
          </div>
        ))}
      </div>
    </KitSection>
  );
}

