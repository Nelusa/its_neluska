import { KitSection } from "../primitives";

export function CalendarRitualsSection() {
  const weekly = [
    {
      day: "Mon",
      theme: "Builder Monday",
      what: "Dev post or reel – tip, build log, code moment",
      emoji: "💻",
    },
    {
      day: "Tue",
      theme: "Stories only",
      what: "Behind the scenes, polls, what I'm working on",
      emoji: "📱",
    },
    {
      day: "Wed",
      theme: "Cozy Wednesday",
      what: "Lifestyle photo, yoga, balcony, aesthetic reel",
      emoji: "🌸",
    },
    {
      day: "Thu",
      theme: "Stories only",
      what: "Engagement day – reply to DMs, comment on others",
      emoji: "💬",
    },
    {
      day: "Fri",
      theme: "Personality Friday",
      what: "Sloth content, confession, Lego, fun post",
      emoji: "🦥",
    },
    {
      day: "Sat",
      theme: "Optional post",
      what: "Photo dump or stream highlight (if I streamed this week)",
      emoji: "✨",
    },
    {
      day: "Sun",
      theme: "Batch Sunday",
      what: "2-3h shoot + edit + schedule the week. Rest after.",
      emoji: "☕",
    },
  ];

  const monthly = [
    {
      when: "Week 1",
      beat: "New pillar post - princess, nerd, or funny",
      purpose: "Rotate modes to stay balanced",
    },
    {
      when: "Week 2",
      beat: "Collab / community moment (shoutout, guest, trade)",
      purpose: "Network growth + breaks solo-creator loop",
    },
    {
      when: "Week 3",
      beat: "Educational carousel or long reel (save-worthy)",
      purpose: "Drive saves + shares (algo gold)",
    },
    {
      when: "Week 4",
      beat: "Personal / vulnerable moment (behind the scenes)",
      purpose: "Deepens parasocial bond responsibly",
    },
  ];

  const seasonal = [
    { when: "Jan", what: "Year-in-review post · 2026 goals (vague is fine)", vibe: "reflective" },
    { when: "Feb", what: "Galentine's post (community > romance)", vibe: "soft" },
    { when: "Mar", what: "Spring reset - balcony rearrange, new preset drop?", vibe: "fresh" },
    { when: "Apr", what: "Easter / long weekend – puzzle marathon content (IG + optional cozy stream)", vibe: "cozy" },
    { when: "May-Jun", what: "Summer slow-down, fewer live events, more outdoor photos + reels", vibe: "breathing" },
    { when: "Jul-Aug", what: "Pause / travel content, pre-scheduled posts", vibe: "soft abandonment" },
    { when: "Sep", what: "Back to builder mode - new project, autumn reset", vibe: "momentum" },
    { when: "Oct", what: "Cozy aesthetic peak: pumpkin, coffee, candles, sweaters", vibe: "prime" },
    { when: "Nov", what: "Charity or sub-goal stream if it fits my calendar · year-end IG push", vibe: "generous" },
    { when: "Dec", what: "Subdued holiday posts · NYE reflection reel · quiet week", vibe: "gratitude" },
  ];

  return (
    <KitSection
      id="calritual"
      eyebrow="26 · CONTENT CALENDAR"
      title="a year-long rhythm, not a grind"
      sub="Three nested cycles: weekly (days of the week), monthly (beats that rotate), seasonal (energy shifts). I follow the shape, fill in the specifics – I never have to stare at an empty post slot again."
    >
      <div className="mb-9">
        <div className="eyebrow mb-3 text-brand-purple-500">WEEKLY SHAPE</div>
        <div className="section-x-scroll pb-2">
          <div className="grid min-w-[980px] grid-cols-7 gap-2.5">
            {weekly.map((day) => (
              <div key={day.day} className="card p-[14px]">
                <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-brand-purple-500">
                  {day.day}
                </div>
                <div className="mb-1 text-[22px]">{day.emoji}</div>
                <div className="h-display mb-1.5 text-[13px] leading-[1.2] text-brand-purple-700">
                  {day.theme}
                </div>
                <div className="text-[11px] leading-[1.5] text-ink-soft">
                  {day.what}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-9 grid gap-6 min-[980px]:grid-cols-2">
        <div>
          <div className="eyebrow mb-3 text-brand-purple-500">MONTHLY BEATS</div>
          <div className="grid gap-2.5">
            {monthly.map((item) => (
              <div
                key={item.when}
                className="card grid items-center gap-[14px] p-[14px] min-[680px]:grid-cols-[80px_1fr]"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-brand-purple-600">
                  {item.when}
                </div>
                <div>
                  <div className="mb-0.5 text-[13px] font-semibold text-ink">
                    {item.beat}
                  </div>
                  <div className="text-[11px] italic text-ink-soft">
                    {item.purpose}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="eyebrow mb-3 text-brand-purple-500">
            SEASONAL ENERGY
          </div>
          <div className="grid gap-2">
            {seasonal.map((item) => (
              <div
                key={item.when}
                className="grid gap-2 rounded-md border border-dashed border-line bg-paper-2 px-[14px] py-2.5 min-[680px]:grid-cols-[70px_1fr_80px]"
              >
                <div className="font-mono text-[11px] text-brand-purple-600">
                  {item.when}
                </div>
                <div className="text-xs text-ink">{item.what}</div>
                <div className="text-right font-script text-[14px] text-brand-rose-400">
                  {item.vibe}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card bg-brand-yellow-200 p-[22px]">
        <div className="mb-2 font-script text-[30px] leading-none text-brand-purple-700">
          the 40% rule
        </div>
        <p className="m-0 text-[14px] leading-[1.6] text-brand-purple-700">
          <strong>Plan 40%, improvise 60%.</strong> The calendar is scaffolding,
          not a cage. If on Monday I feel like posting a Saturday vibe, I do it.
          The weekly shape catches me when I'm stuck – it doesn't dictate when
          I'm flowing.
        </p>
      </div>
    </KitSection>
  );
}

