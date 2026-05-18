import { KitSection } from "../primitives";

export function MonetizationSection() {
  const phases = [
    {
      tag: "Phase 0",
      when: "Month 0-3",
      name: "don't monetize · build",
      color: "var(--pp-200)",
      revenue: "0 Kč / month",
      actions: [
        "No ads, no affiliate links, no subs",
        "Goal: 3-4 IG posts per week + daily stories for 90 days – prove the rhythm before asking for money",
        "Twitch Affiliate path: 50 followers · 3 avg viewers · 500 min · 7 unique days – expect this to take longer at 1-2 streams/month",
        "Collect emails / Discord if I want (optional)",
      ],
      why: 'Monetizing too early signals "me me me" and kills trust. First I give, then I ask.',
    },
    {
      tag: "Phase 1",
      when: "Month 3-6",
      name: "soft on-ramp",
      color: "var(--tw-butter)",
      revenue: "500 – 3 000 Kč / month",
      actions: [
        "IG Shop affiliate + LTK-style links for products I actually use",
        "Ko-fi / BuyMeCoffee – one-time tips, \"buy me a boba\"",
        "Twitch Affiliate: subs (EUR 4.99 tier), bits – unlocks when stream cadence + stats hit Twitch's bar",
        "Affiliate links (Amazon, gear) – ONLY items I own",
        "Free Discord – builds community without $ pressure",
      ],
      why: "Small income = proof of concept. I don't quit my dev job. I don't chase any single brand deal.",
    },
    {
      tag: "Phase 2",
      when: "Month 6-12",
      name: "brand partnerships · selective",
      color: "var(--dr-200)",
      revenue: "3 000 – 15 000 Kč / month",
      actions: [
        "Media kit ready (1-pager PDF: audience, reach, examples, rates)",
        "Rate card: IG post 3-8k CZK · reel 8-20k · stream mention 5-15k (CZ rates)",
        "Only brands I actually use – gaming gear, café, stationery, dev tools",
        "NEVER: crypto, gambling, supplements, diet, MLM",
        "Max 1 sponsored post / month to stay authentic",
      ],
      why: "Audience forgives 1 paid / 10 organic. They hate 3 paid in a row. Ratio matters.",
    },
    {
      tag: "Phase 3",
      when: "Month 12-18",
      name: "own products",
      color: "var(--mp-100)",
      revenue: "5 000 – 30 000 Kč / month",
      actions: [
        "Digital products: Lightroom preset pack, Notion template, dev tutorial",
        "Small merch run (limited, numbered): sticker pack, sloth plushie, hoodie",
        "Paid Discord tier: exclusive streams, behind-the-scenes, Q&A",
        "Twitch Subs tier 2/3 with actual perks (custom emote, private channel)",
      ],
      why: "My own products = 80% margin. Brand deals = linear. Products = scalable.",
    },
    {
      tag: "Phase 4",
      when: "Year 2+",
      name: "full-time creator (if I want)",
      color: "var(--py-300)",
      revenue: "30 000+ Kč / month",
      actions: [
        "Revenue mix: 40% own products · 30% subs · 20% brands · 10% ad revenue",
        "Maybe hire: editor, mod, assistant - keeps me making, not managing",
        "Longer-form: YouTube tutorials, course, book",
        "Diversify: never one platform = 100% income",
      ],
      why: "Going full-time is a choice, not a destination. Many streamers stay at Phase 2 forever by choice - more freedom, less pressure.",
    },
  ];

  return (
    <KitSection
      id="monetize"
      eyebrow="25 · MONETIZATION"
      title="when & how to make money"
      sub="The wrong revenue at the wrong time kills brands. This is a 24-month phased plan - each phase has clear unlock criteria. I don't skip ahead."
      bg="var(--paper-2)"
    >
      <div className="grid gap-4">
        {phases.map((phase) => (
          <div
            key={`${phase.tag}-${phase.when}`}
            className="card relative overflow-hidden p-6"
          >
            <div
              className="absolute left-0 top-0 h-full w-1.5"
              style={{ background: phase.color }}
            />
            <div className="grid gap-6 pl-4 min-[980px]:grid-cols-[200px_minmax(0,1fr)_240px]">
              <div>
                <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-brand-purple-500">
                  {phase.tag} · {phase.when}
                </div>
                <div className="h-display mb-2.5 text-xl leading-[1.15] text-brand-purple-700">
                  {phase.name}
                </div>
                <div
                  className="inline-block rounded-md px-2.5 py-1 font-mono text-[11px] text-brand-purple-700"
                  style={{ background: phase.color }}
                >
                  {phase.revenue}
                </div>
              </div>
              <div>
                <div className="eyebrow mb-2 text-brand-purple-500">ACTIONS</div>
                <ul className="m-0 list-disc pl-[18px] text-[13px] leading-[1.7] text-ink">
                  {phase.actions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-dashed border-line bg-paper-2 px-[14px] py-3 text-xs italic leading-[1.6] text-ink-soft">
                ♡ {phase.why}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card mt-7 bg-brand-purple-50 p-6">
        <div className="mb-2 font-script text-[32px] leading-none text-brand-purple-700">
          the sacred ratio
        </div>
        <p className="m-0 max-w-[720px] text-[14px] leading-[1.6] text-ink">
          <strong>I give 10× before I ask once.</strong> Every paid post /
          brand mention / "link in bio" should be preceded by 10 posts of pure
          value (teaching, entertaining, sharing). The moment that ratio flips,
          I lose the thing I built.
        </p>
      </div>
    </KitSection>
  );
}

