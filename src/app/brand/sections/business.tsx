import Link from "next/link";

import { KitSection } from "./primitives";

export function SlothSystemSection() {
  const slothGallery = [
    {
      src: "/assets/sloths/svg/sloth-dress.svg",
      name: "princess sloth",
      use: "soft life, skincare, cozy outfit, self-care posts",
    },
    {
      src: "/assets/sloths/svg/sloth-laptop.svg",
      name: "dev sloth",
      use: "code moments, deploys, tutorials, build logs",
    },
    {
      src: "/assets/sloths/svg/sloth-gaming.svg",
      name: "gamer sloth",
      use: "Twitch, LoL clips, late-night stream promos",
    },
    {
      src: "/assets/sloths/svg/sloth-puzzles.svg",
      name: "puzzle sloth",
      use: "problem solving, puzzle reels, debugging frustration",
    },
    {
      src: "/assets/sloths/svg/sloth-sleeping.svg",
      name: "sleepy sloth",
      use: "low energy days, late nights, soft sign-offs",
    },
    {
      src: "/assets/sloths/svg/sloth-hearts.svg",
      name: "heart sloth",
      use: "thank-yous, milestones, community warmth",
    },
    {
      src: "/assets/sloths/svg/sloth-glasses.svg",
      name: "glasses sloth",
      use: "educational posts, reviews, notes, smart-girl mode",
    },
    {
      src: "/assets/sloths/svg/sloth-writing.svg",
      name: "writing sloth",
      use: "planning, captions, scripts, content calendar",
    },
    {
      src: "/assets/sloths/svg/sloth-painting.svg",
      name: "painting sloth",
      use: "creative process, design, photo presets, moodboards",
    },
    {
      src: "/assets/sloths/svg/sloth-singing.svg",
      name: "singing sloth",
      use: "voice, stream energy, silly reaction content",
    },
    {
      src: "/assets/sloths/svg/sloth-banana.svg",
      name: "banana sloth",
      use: "funny posts, chaotic wins, confession energy",
    },
    {
      src: "/assets/sloths/svg/sloth-camping.svg",
      name: "camping sloth",
      use: "offline time, cozy reset, slow weekend posts",
    },
    {
      src: "/assets/sloths/svg/sloth-lego-purple.svg",
      name: "purple lego sloth",
      use: "purple brand moments, desk setup, playful build days",
    },
    {
      src: "/assets/sloths/svg/sloth-lego-yellow.svg",
      name: "yellow lego sloth",
      use: "bright accents, launch moments, playful CTAs",
    },
    {
      src: "/assets/sloths/svg/sloth-doodle.svg",
      name: "doodle sloth",
      use: "generic sticker, corner mascot, low-stakes filler",
    },
  ];

  const workflow = [
    {
      n: "01",
      title: "Open master template",
      body: 'In Canva, keep ONE master file with all templates (post, carousel, story, reel cover) as pages. Duplicate the page you need instead of starting fresh.',
      tag: 'save as "neluska ~ master"',
    },
    {
      n: "02",
      title: "Pull sloth from Elements",
      body: `Search "sloth" in your Elements → favorites. Drop onto template. Pick the variant that matches today's mood (princess / gamer / cozy).`,
      tag: "keep to ONE sloth per post",
    },
    {
      n: "03",
      title: "Swap text + photo",
      body: "Headline in Blanka, body in Agrandir, handwritten tag in Moontime. Photo = today's photo after preset applied (see section 18). Keep layout.",
      tag: "text fixed, content variable",
    },
    {
      n: "04",
      title: "Export + schedule",
      body: "Export as PNG (posts/stories) or MP4 (reels). Upload to scheduler (Later, Buffer, Meta Business Suite). Batch 7 posts at a time.",
      tag: "batch Sunday for the week",
    },
  ];

  const dos = [
    "One sloth per post - never a crowd scene",
    "Match mood: cozy post = cozy sloth, dev post = dev sloth",
    "Keep sloth at corner or lower-right, not centered",
    "Use the same sloth across a carousel (1 sloth, 8 slides)",
  ];

  const donts = [
    "Don't center the sloth - breaks composition",
    "Don't use 3+ sloths unless the post IS about collection",
    "Don't rotate or flip - keep canonical orientation",
    "Don't put sloth over face / food - it covers the hero",
  ];

  return (
    <KitSection
      id="slothpack"
      eyebrow="20 · SLOTH STICKER SYSTEM"
      title="the cast of characters"
      sub="Your sloths are the most identifiable element of your brand - more than logo, font, or color. Use them like reaction emojis: one per post, matched to the mood."
    >
      <div className="mb-8 grid gap-3 min-[640px]:grid-cols-2 min-[980px]:grid-cols-3">
        {slothGallery.map((sloth) => (
          <div key={sloth.name} className="card grid grid-cols-[132px_1fr] items-center gap-4 p-4 max-[520px]:grid-cols-[112px_1fr]">
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-[var(--pp-50)] p-0.5">
              <img src={sloth.src} alt="" className="h-[150%] w-[150%] max-w-none object-contain" />
            </div>
            <div>
              <div className="h-display mb-1.5 text-[14px] leading-[1.15] text-[var(--pp-700)]">
                {sloth.name}
              </div>
              <div className="text-xs leading-[1.45] text-[var(--ink-soft)]">
                {sloth.use}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-7">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--pp-500)]">
          Canva → IG workflow (the 4-step ritual)
        </div>
        <div className="grid gap-5 min-[760px]:grid-cols-2 min-[1120px]:grid-cols-4">
          {workflow.map((step) => (
            <div
              key={step.n}
              className="border-l-2 border-[var(--pp-200)] pl-[14px]"
            >
              <div className="mb-1.5 font-mono text-[11px] tracking-[0.15em] text-[var(--pp-400)]">
                STEP {step.n}
              </div>
              <div className="h-display mb-2 text-base text-[var(--pp-700)]">
                {step.title}
              </div>
              <p className="mb-2.5 text-[12.5px] leading-[1.55] text-[var(--ink-soft)]">
                {step.body}
              </p>
              <div className="font-mono text-[10px] tracking-[0.05em] text-[var(--dr-400)]">
                ↳ {step.tag}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 min-[880px]:grid-cols-2">
        <div className="rounded-[var(--r-lg)] bg-[rgba(245,229,116,0.15)] p-5">
          <div className="h-display mb-2.5 text-sm text-[var(--pp-700)]">
            SLOTH RULES · DO
          </div>
          <ul className="m-0 list-disc pl-[18px] text-[13px] leading-[1.7] text-[var(--ink)]">
            {dos.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[var(--r-lg)] bg-[rgba(244,168,192,0.15)] p-5">
          <div className="h-display mb-2.5 text-sm text-[var(--pp-700)]">
            SLOTH RULES · DON'T
          </div>
          <ul className="m-0 list-disc pl-[18px] text-[13px] leading-[1.7] text-[var(--ink)]">
            {donts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </KitSection>
  );
}

export function KPISection() {
  const quarterly = [
    {
      ch: "Instagram",
      metric: "Followers",
      q1: "500",
      q2: "1.5k",
      q3: "3k",
      q4: "5k",
      north: "reach + discovery",
    },
    {
      ch: "Instagram",
      metric: "Reel avg views",
      q1: "300",
      q2: "1k",
      q3: "3k",
      q4: "8k",
      north: "hook quality",
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
      q1: "100",
      q2: "300",
      q3: "700",
      q4: "1.5k",
      north: "community growth",
    },
    {
      ch: "Twitch",
      metric: "Avg concurrent",
      q1: "3-5",
      q2: "8-12",
      q3: "15-25",
      q4: "30-50",
      north: "retention + raid-worthy",
    },
    {
      ch: "Twitch",
      metric: "Affiliate?",
      q1: "-",
      q2: "✓",
      q3: "✓",
      q4: "✓",
      north: "unlock subs/bits at 50 followers · 3 avg · 500 min · 7 unique days",
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
      why: "Don't sail by stars you can't see",
    },
    {
      when: "Never",
      what: "Compare to other creators you admire",
      why: "Envy is a content-killer. Stay in your lane.",
    },
  ];

  return (
    <KitSection
      id="kpis"
      eyebrow="21 · KPI DASHBOARD"
      title="what success looks like"
      sub="Brand without metrics is vibes. Here's what you measure, when you measure, and what's healthy vs concerning. Year 1 targets are realistic - not moonshot, not beige."
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
                    className={i === 0 ? "" : "border-t border-[var(--line)]"}
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
          hack saves you. Burnout is the silent brand-killer.
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
      note: "Trolls want air. Deny oxygen. Your regulars will handle the rest if you seem calm.",
    },
    {
      title: "Cancel attempt · pile-on · doxxing attempt",
      gut: "respond fast, over-explain",
      do: [
        "Breathe. Wait 24h minimum before posting anything.",
        "Screenshot everything (evidence if it escalates legally)",
        "Lock down: private IG, disable Twitch chat, turn off comments",
        "If allegation is true → one apology post, direct, no excuses. Don't delete history.",
        "If allegation is false → silence + one short factual statement. No back-and-forth.",
        "Report harassment to platforms (Twitch + IG both have forms)",
      ],
      note: "Never DM or reply to accusers publicly. Trust takes years; getting dragged takes hours.",
    },
    {
      title: "Burnout · motivation crash",
      gut: "push through, post anyway",
      do: [
        'Cancel stream with one sentence: "sick day, see you [next date] ♡"',
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
        "If something personal leaked (address, face you didn't mean, NSFW) → end stream IMMEDIATELY",
        "Twitch contact form for VOD deletion if needed",
      ],
      note: "Tech fails = bonding opportunity. Don't over-apologize - 10 seconds max.",
    },
    {
      title: "DM creep · parasocial slide · stalker",
      gut: "be nice, respond politely",
      do: [
        "Never share: home city (Prague is fine - exact district is not), work schedule, friends' faces, pets' names",
        "Block early. Politeness is not owed.",
        "Save screenshots before blocking (if pattern escalates)",
        "If real-life threat → police. Twitch + IG also have formal channels.",
        "Tell someone you trust (partner, friend, family) - don't carry it alone",
      ],
      note: "Your safety > any viewer's feelings. Always. No exceptions.",
    },
  ];

  return (
    <KitSection
      id="crisis"
      eyebrow="22 · CRISIS PLAYBOOK"
      title="when things go sideways"
      sub="Not fun, not optional. Having a plan written down means your panic-brain doesn't have to decide. Read this once, remember where it is."
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
                Don't: {scenario.gut}
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

export function CollabSection() {
  const templates = [
    {
      title: "Outreach · small streamer (similar size)",
      when: "You've watched them 3+ times, chatted, they know your handle",
      dm: `hey [name]! loved your [specific thing] stream last week, the [specific moment] had me 🦥

would you be down for a co-stream / host swap sometime? thinking [specific idea - e.g. "we both play an hour of [game], switch communities"]. no pressure, just throwing it out there ♡

- @its_neluska`,
      rule: "Mention something SPECIFIC you actually watched. Generic = deleted.",
    },
    {
      title: "Outreach · creator you admire (bigger)",
      when: "Long-term. Build presence in their chat for 2+ months first.",
      dm: `hi [name]! been lurking in your streams for a while (@its_neluska, the sloth one 🦥)

not pitching anything - just wanted to say your [specific episode/post/stream] taught me [specific thing]. if you ever do community collabs / showcase small streamers, I'd love to be in the pool.

either way, thanks for the content ♡`,
      rule: "No ask on first DM. Just gratitude. The ask comes later, or organically.",
    },
    {
      title: "Brand / sponsor pitch received",
      when: 'DM offering "partnership" or free product',
      dm: `hi [name]! thanks for reaching out.

a few questions before I commit:
· what's the deliverable (post count, reel, stream mention)?
· usage rights (yours? mine? exclusive how long?)
· compensation (flat fee, revenue share, product-only?)
· audience fit - here's a quick brand doc: [link to brand kit or media one-pager]

I only work with products I'd actually use, so happy to chat further if it feels aligned ♡`,
      rule: "NEVER accept product-only deals under $500 retail. Your time is worth money.",
    },
    {
      title: "Dev collab · open-source / hackathon",
      when: "GitHub + Twitter dev circle",
      dm: `hey! working on [your project] and saw you did something similar with [their thing]. any interest in co-streaming a build session or contributing to [specific feature]?

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
    "Art trade (your photo × their illustration)",
  ];

  return (
    <KitSection
      id="collabs"
      eyebrow="23 · COLLAB PLAYBOOK"
      title="how to reach out, without cringe"
      sub="Most DMs die because people make them about themselves. Lead with them, pitch specifically, and make the ask tiny. Templates below - steal and adapt."
    >
      <div className="mb-8 grid gap-[18px]">
        {templates.map((template, i) => (
          <div key={template.title} className="card p-[22px]">
            <div className="mb-2.5 flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--pp-500)]">
                  TEMPLATE {String(i + 1).padStart(2, "0")}
                </div>
                <div className="h-display text-[17px] leading-[1.2] text-[var(--pp-700)]">
                  {template.title}
                </div>
              </div>
              <div className="max-w-[200px] text-right text-[11px] italic text-[var(--ink-soft)]">
                {template.when}
              </div>
            </div>
            <pre className="mt-3 whitespace-pre-wrap rounded-lg border border-dashed border-[var(--line)] bg-[var(--paper-2)] px-4 py-[14px] font-body text-xs leading-[1.6] text-[var(--ink)]">
              {template.dm}
            </pre>
            <div className="mt-3 text-xs italic text-[var(--dr-400)]">
              ✦ rule: {template.rule}
            </div>
          </div>
        ))}
      </div>

      <div className="card bg-[var(--pp-50)] p-[22px]">
        <div className="eyebrow mb-2.5 text-[var(--pp-700)]">
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
        <p className="mb-0 mt-[14px] text-[13px] leading-[1.6] text-[var(--ink)]">
          <strong>Start tiny.</strong> A single IG story tag is a collab. A
          full co-stream is a year-3 move. Don't skip steps.
        </p>
      </div>
    </KitSection>
  );
}

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
        "Goal: unlock Twitch Affiliate (50 followers · 3 avg viewers · 500 min · 7 unique days)",
        "Collect emails / Discord if you want (optional)",
      ],
      why: 'Monetizing too early signals "me me me" and kills trust. First you give, then you ask.',
    },
    {
      tag: "Phase 1",
      when: "Month 3-6",
      name: "soft on-ramp",
      color: "var(--tw-butter)",
      revenue: "500 – 3 000 Kč / month",
      actions: [
        "Twitch Affiliate: subs (EUR 4.99 tier), bits",
        'Ko-fi / BuyMeCoffee page - one-time tips, "buy me a boba"',
        "Affiliate links (Amazon, Twitch Gear) - ONLY items you own",
        "Free Discord - builds community without $ pressure",
      ],
      why: "Small income = proof of concept. Don't quit your dev job. Don't chase any single brand deal.",
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
        "Only brands you actually use — gaming gear, café, stationery, dev tools",
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
      why: "Your own products = 80% margin. Brand deals = linear. Products = scalable.",
    },
    {
      tag: "Phase 4",
      when: "Year 2+",
      name: "full-time creator (if you want)",
      color: "var(--py-300)",
      revenue: "30 000+ Kč / month",
      actions: [
        "Revenue mix: 40% own products · 30% subs · 20% brands · 10% ad revenue",
        "Maybe hire: editor, mod, assistant - keeps you making, not managing",
        "Longer-form: YouTube tutorials, course, book",
        "Diversify: never one platform = 100% income",
      ],
      why: "Going full-time is a choice, not a destination. Many streamers stay at Phase 2 forever by choice - more freedom, less pressure.",
    },
  ];

  return (
    <KitSection
      id="monetize"
      eyebrow="24 · MONETIZATION"
      title="when & how to make money"
      sub="The wrong revenue at the wrong time kills brands. This is a 24-month phased plan - each phase has clear unlock criteria. Don't skip ahead."
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
                <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--pp-500)]">
                  {phase.tag} · {phase.when}
                </div>
                <div className="h-display mb-2.5 text-xl leading-[1.15] text-[var(--pp-700)]">
                  {phase.name}
                </div>
                <div
                  className="inline-block rounded-md px-2.5 py-1 font-mono text-[11px] text-[var(--pp-700)]"
                  style={{ background: phase.color }}
                >
                  {phase.revenue}
                </div>
              </div>
              <div>
                <div className="eyebrow mb-2 text-[var(--pp-500)]">ACTIONS</div>
                <ul className="m-0 list-disc pl-[18px] text-[13px] leading-[1.7] text-[var(--ink)]">
                  {phase.actions.map((action) => (
                    <li key={action}>{action}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-lg border border-dashed border-[var(--line)] bg-[var(--paper-2)] px-[14px] py-3 text-xs italic leading-[1.6] text-[var(--ink-soft)]">
                ♡ {phase.why}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card mt-7 bg-[var(--pp-50)] p-6">
        <div className="mb-2 font-script text-[32px] leading-none text-[var(--pp-700)]">
          the sacred ratio
        </div>
        <p className="m-0 max-w-[720px] text-[14px] leading-[1.6] text-[var(--ink)]">
          <strong>Give 10× before you ask once.</strong> Every paid post /
          brand mention / "link in bio" should be preceded by 10 posts of pure
          value (teaching, entertaining, sharing). The moment that ratio flips,
          you lose the thing you built.
        </p>
      </div>
    </KitSection>
  );
}

export function CalendarRitualsSection() {
  const weekly = [
    {
      day: "Mon",
      theme: "Builder Monday",
      what: "Dev progress, new project, code snippet, bug-fight story",
      emoji: "💻",
    },
    {
      day: "Tue",
      theme: "Twitch night",
      what: "Dev jam stream 20:00 · IG story countdown + post after",
      emoji: "🎮",
    },
    {
      day: "Wed",
      theme: "Soft mid-week",
      what: "Cozy photo (balcony, coffee, sloth, OOTD) - low-effort, high-aesthetic",
      emoji: "🦥",
    },
    {
      day: "Thu",
      theme: "Twitch night",
      what: "LoL night stream 20:00 · clip the best moment for Fri reel",
      emoji: "🎮",
    },
    {
      day: "Fri",
      theme: "Reel Friday",
      what: "Weekly reel: recap, scenario A/B/C, stream highlight, dev tutorial",
      emoji: "🎬",
    },
    {
      day: "Sat",
      theme: "Sloth Saturday",
      what: "IRL chill post — café, puzzle, Lego, reading, sloth plushie photo",
      emoji: "🧩",
    },
    {
      day: "Sun",
      theme: "Slow Sunday",
      what: "Week-in-review story · reflection · next week teaser · IG grid plan",
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
    { when: "Apr", what: "Easter / long weekend puzzle marathon stream", vibe: "cozy" },
    { when: "May-Jun", what: "Summer slow-down, fewer streams, more outdoor photos", vibe: "breathing" },
    { when: "Jul-Aug", what: "Pause / travel content, pre-scheduled posts", vibe: "soft abandonment" },
    { when: "Sep", what: "Back to builder mode - new project, autumn reset", vibe: "momentum" },
    { when: "Oct", what: "Cozy aesthetic peak: pumpkin, coffee, candles, sweaters", vibe: "prime" },
    { when: "Nov", what: "Sub-a-thon month · charity stream · year-end push", vibe: "generous" },
    { when: "Dec", what: "Subdued holiday posts · NYE reflection reel · quiet week", vibe: "gratitude" },
  ];

  return (
    <KitSection
      id="calritual"
      eyebrow="25 · CONTENT CALENDAR"
      title="a year-long rhythm, not a grind"
      sub="Three nested cycles: weekly (days of the week), monthly (beats that rotate), seasonal (energy shifts). Follow the shape, fill in the specifics. You'll never stare at an empty post slot again."
    >
      <div className="mb-9">
        <div className="eyebrow mb-3 text-[var(--pp-500)]">WEEKLY SHAPE</div>
        <div className="section-x-scroll pb-2">
          <div className="grid min-w-[980px] grid-cols-7 gap-2.5">
            {weekly.map((day) => (
              <div key={day.day} className="card p-[14px]">
                <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--pp-500)]">
                  {day.day}
                </div>
                <div className="mb-1 text-[22px]">{day.emoji}</div>
                <div className="h-display mb-1.5 text-[13px] leading-[1.2] text-[var(--pp-700)]">
                  {day.theme}
                </div>
                <div className="text-[11px] leading-[1.5] text-[var(--ink-soft)]">
                  {day.what}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mb-9 grid gap-6 min-[980px]:grid-cols-2">
        <div>
          <div className="eyebrow mb-3 text-[var(--pp-500)]">MONTHLY BEATS</div>
          <div className="grid gap-2.5">
            {monthly.map((item) => (
              <div
                key={item.when}
                className="card grid items-center gap-[14px] p-[14px] min-[680px]:grid-cols-[80px_1fr]"
              >
                <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[var(--pp-600)]">
                  {item.when}
                </div>
                <div>
                  <div className="mb-0.5 text-[13px] font-semibold text-[var(--ink)]">
                    {item.beat}
                  </div>
                  <div className="text-[11px] italic text-[var(--ink-soft)]">
                    {item.purpose}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="eyebrow mb-3 text-[var(--pp-500)]">
            SEASONAL ENERGY
          </div>
          <div className="grid gap-2">
            {seasonal.map((item) => (
              <div
                key={item.when}
                className="grid gap-2 rounded-md border border-dashed border-[var(--line)] bg-[var(--paper-2)] px-[14px] py-2.5 min-[680px]:grid-cols-[70px_1fr_80px]"
              >
                <div className="font-mono text-[11px] text-[var(--pp-600)]">
                  {item.when}
                </div>
                <div className="text-xs text-[var(--ink)]">{item.what}</div>
                <div className="text-right font-script text-[14px] text-[var(--dr-400)]">
                  {item.vibe}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card bg-[var(--py-200)] p-[22px]">
        <div className="mb-2 font-script text-[30px] leading-none text-[var(--pp-700)]">
          the 40% rule
        </div>
        <p className="m-0 text-[14px] leading-[1.6] text-[var(--pp-700)]">
          <strong>Plan 40%, improvise 60%.</strong> The calendar is scaffolding,
          not a cage. If Monday you feel like posting a Saturday vibe, do it.
          The weekly shape catches you when you're stuck, it doesn't dictate
          when you're flowing.
        </p>
      </div>
    </KitSection>
  );
}

export function CommunityRitualsSection() {
  const emotes = [
    { name: "slothLove", desc: "sloth holding a tiny heart", use: "positive reaction, follow, sub" },
    { name: "slothHuh", desc: "sloth head tilt, confused", use: "when chat doesn't get it" },
    { name: "slothBonk", desc: "sloth with tiny mallet", use: "backseating penalty (playful)" },
    { name: "slothSip", desc: "sloth drinking tea", use: "spicy chat moment, gossip" },
    { name: "slothZzz", desc: "sloth sleeping on keyboard", use: "late-night stream vibes" },
    { name: "slothCode", desc: "sloth with laptop", use: "dev stream, code reveal" },
    { name: "slothParty", desc: "sloth with balloons (kit asset)", use: "sub anniversary, milestones" },
    { name: "slothWin", desc: "sloth holding trophy", use: "LoL win, shipped PR, done the thing" },
  ];

  const insideJokes = [
    { phrase: '"one game at time ✨"', origin: "stream motto", when: "anytime you're tempted to overcommit" },
    { phrase: '"no backseating"', origin: "chat rules", when: "regulars self-police newcomers" },
    { phrase: '"sloth energy only"', origin: "bio + Twitch rules", when: "vibe check, low-drama mode" },
    { phrase: '"soft launch" / "princess mode"', origin: "brand doc", when: "callback to cozy content drops" },
    { phrase: '"pookies"', origin: "your audience nickname", when: "opening streams, ending posts" },
    { phrase: '"brb loading patience"', origin: "BRB panel", when: "anytime you need a break" },
  ];

  const milestones = [
    { count: 10, name: "first sloths", reward: "personal shoutout in next stream" },
    { count: 25, name: "sloth squad", reward: "custom emote name submitted by chat" },
    { count: 50, name: "sloth colony · Twitch Affiliate unlock", reward: "first sub-only emote designed + sub-a-thon mini-stream" },
    { count: 100, name: "hundred slothies", reward: "giveaway: signed sticker pack" },
    { count: 250, name: "princess court", reward: "24h special stream: puzzle + LoL + dev + Q&A" },
    { count: 500, name: "soft launch milestone", reward: "merch drop (limited, numbered)" },
    { count: 1000, name: "thousand slothies - core", reward: "in-person meetup in Prague, if logistics allow" },
  ];

  const greetings = [
    "welcome to the cozy corner, [name] ♡ grab a virtual boba",
    "heyyy [name]! pull up a chair, we're doing [current activity] ✨",
    "[name] just joined the sloth colony 🦥 make yourself at home",
    "new face! hi [name], sloth energy only here, chat rules in panels ♡",
    "[name] ✨ if you like cozy chaos you're in the right place",
    "chat, please welcome [name] - bring the soft vibes",
    "hi [name]! perfect timing, we're about to [next thing]",
    "ooh [name] is here! we missed you - wait no you're new, but welcome anyway ♡",
  ];

  return (
    <KitSection
      id="community"
      eyebrow="26 · COMMUNITY RITUALS"
      title="the language of your people"
      sub="Communities form around repeatable moments - inside jokes, custom emotes, milestones that feel earned. This is the vocabulary layer. Use it consistently, let regulars teach newcomers."
    >
      <div className="mb-8">
        <div className="eyebrow mb-3 text-[var(--pp-500)]">
          EMOTE NAMING CONVENTION · sloth[Action]
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
          {emotes.map((emote) => (
            <div key={emote.name} className="card p-[14px]">
              <div className="mb-1 font-mono text-xs font-semibold text-[var(--pp-700)]">
                :{emote.name}:
              </div>
              <div className="mb-1 text-xs text-[var(--ink)]">{emote.desc}</div>
              <div className="text-[11px] italic text-[var(--ink-soft)]">
                use: {emote.use}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs italic text-[var(--ink-soft)]">
          Commission emotes from one artist for visual consistency. Budget 2-3k
          CZK per emote. Commission order: slothLove → slothHuh → slothBonk
          first (highest daily use).
        </div>
      </div>

      <div className="mb-8 grid gap-6 min-[980px]:grid-cols-2">
        <div>
          <div className="eyebrow mb-3 text-[var(--pp-500)]">
            INSIDE JOKES · CALLBACKS
          </div>
          <div className="grid gap-2.5">
            {insideJokes.map((joke) => (
              <div key={joke.phrase} className="card p-[14px]">
                <div className="mb-1.5 font-script text-[22px] leading-none text-[var(--pp-700)]">
                  {joke.phrase}
                </div>
                <div className="text-[11px] leading-[1.5] text-[var(--ink-soft)]">
                  <strong className="text-[var(--pp-500)]">from:</strong>{" "}
                  {joke.origin} ·{" "}
                  <strong className="text-[var(--pp-500)]">use:</strong>{" "}
                  {joke.when}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="eyebrow mb-3 text-[var(--pp-500)]">
            CHAT GREETING BANK
          </div>
          <div className="card p-[18px]">
            <div className="mb-2.5 text-[11px] italic text-[var(--ink-soft)]">
              Load these into your Twitch chatbot (StreamElements, Nightbot) as
              welcome messages. Random rotation keeps it fresh.
            </div>
            <div className="grid gap-2">
              {greetings.map((greeting) => (
                <div
                  key={greeting}
                  className="rounded-md border-l-[3px] border-[var(--pp-300)] bg-[var(--paper-2)] px-3 py-2 text-xs text-[var(--ink)]"
                >
                  {greeting}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="eyebrow mb-3 text-[var(--pp-500)]">
          FOLLOWER MILESTONES · celebration ladder
        </div>
        <div className="grid gap-2.5">
          {milestones.map((milestone) => (
            <div
              key={milestone.count}
              className="card grid items-center gap-5 px-[18px] py-[14px] min-[980px]:grid-cols-[80px_minmax(0,1fr)_minmax(0,1fr)]"
            >
              <div className="h-display text-[28px] leading-none text-[var(--pp-700)]">
                {milestone.count}
              </div>
              <div className="font-script text-[22px] leading-none text-[var(--pp-600)]">
                {milestone.name}
              </div>
              <div className="text-xs italic leading-[1.5] text-[var(--ink-soft)]">
                ✦ {milestone.reward}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card mt-7 bg-[var(--pp-50)] p-[22px]">
        <div className="mb-2 font-script text-[30px] leading-none text-[var(--pp-700)]">
          your community is not an audience
        </div>
        <p className="m-0 max-w-[720px] text-[14px] leading-[1.6] text-[var(--ink)]">
          Audiences watch; communities participate. Every ritual here is
          designed to give regulars a way to contribute - emote names they
          suggested, greetings they use on newcomers, inside jokes they carry
          from stream to stream. When they feel ownership, they stay through
          your dry patches.
        </p>
      </div>
    </KitSection>
  );
}

export function PrivacySection() {
  const routes = [
    { path: "neluska.dev/", access: "public", who: "all visitors", color: "var(--pp-200)", ink: "var(--pp-700)" },
    { path: "/about  ·  /schedule  ·  /twitch-panels", access: "public", who: "all visitors", color: "var(--pp-200)", ink: "var(--pp-700)" },
    { path: "/brand", access: "owner-only", who: "only you · password-gated", color: "var(--dr-300)", ink: "#fff" },
    { path: "/media", access: "password-gated", who: "you + brands you DM the password", color: "var(--py-300)", ink: "var(--pp-700)" },
    { path: "/admin (later)", access: "owner-only", who: "only you", color: "var(--dr-400)", ink: "#fff" },
  ];

  const neverPublish = [
    { item: "Full real name", why: "identity theft · stalker escalation" },
    { item: "Exact address / district", why: '"Prague" is fine · neighborhood is not' },
    { item: "Employer name", why: "boundary between dev job & creator life" },
    { item: "Family / partner / close friends' full names", why: "they didn't sign up for this" },
    { item: "Photos with windows, street signs, house numbers", why: "reverse-search finds location" },
    { item: "Car license plate, keys (photographed)", why: "both are trivially exploitable" },
    { item: "Birth date + birthplace (full)", why: "security-question fuel" },
    { item: 'Exact stream start time ("20:00")', why: 'use pattern ("Tue evening") - when you\'re not live, you\'re alone' },
    { item: "Screenshot of phone calendar", why: "reveals full schedule, contacts, locations" },
    { item: "Receipt / package photos", why: "QR codes & addresses survive cropping" },
  ];

  const checklist2fa = [
    { service: "Twitch", how: "Settings → Security → 2FA (authenticator app, not SMS)" },
    { service: "Instagram", how: "Settings → Security → Two-factor authentication → Authenticator app" },
    { service: "Email (all accounts)", how: "Authenticator app + backup codes in 1Password" },
    { service: "GitHub", how: "Settings → Password & authentication → Two-factor (Authenticator)" },
    { service: "Domain registrar (Cloudflare)", how: "Profile → Authentication → TOTP" },
    { service: "Vercel", how: "Account Settings → Authentication → 2FA" },
    { service: "Password manager", how: "1Password / Bitwarden · strong master · 2FA on account itself" },
    { service: "Bank / payment apps", how: "any app that touches money - non-negotiable" },
  ];

  const redFlags = [
    { sign: 'DM with urgent "brand deal" + video-call TODAY', action: "Delete. Real brands go email + contract." },
    { sign: "Login / password-reset emails you didn't request", action: "Change password immediately · check active sessions · enable 2FA if not already" },
    { sign: "Viewer in chat knows something you never said publicly", action: "Screenshot · block · audit privacy on all accounts · tell someone you trust" },
    { sign: "Package / sticker appears at your door you didn't order", action: "Don't open near the door · photograph · report to police if suspicious" },
    { sign: "Fake account impersonating you", action: "Report via platform · post warning from verified account · screenshot for evidence" },
    { sign: "New follower in all platforms at once + likes old posts", action: "Not automatically bad · but watch · block if boundary-crossing" },
  ];

  const bestPractices = [
    { title: "Brand-deal email", body: "hi@neluska.dev · Cloudflare Email Routing (free) forwards to personal inbox · NEVER share personal email with brands" },
    { title: "P.O. Box for merch", body: "Česká pošta ~350 Kč/rok · use for fan mail, brand samples, merch return address · never home address" },
    { title: "EXIF-clean photos", body: "Before uploading directly (not via IG/Twitch): strip with exiftool or mat2 · removes GPS, device, timestamps" },
    { title: "WHOIS privacy", body: "Cloudflare: included free · other registrars: pay extra but MUST have · without it, your name+address on your domain is public" },
    { title: "Separate handles", body: "@its_neluska for public · separate personal account (nickname only, private, friends only) · NEVER cross-link" },
    { title: "Stream setup audit", body: "Every 2 weeks: walk around your streaming spot on camera · check reflections in monitors, windows, sunglasses, TV screen · check whiteboards / notes / calendar in frame" },
  ];

  return (
    <KitSection
      id="privacy"
      eyebrow="27 · PRIVACY & SAFETY"
      title="keeping your life yours"
      sub="You're going to be visible. That's the job. But visibility ≠ exposure. These are the guardrails that let you stream, post, and still walk to the café without thinking about it."
    >
      <div className="mb-9">
        <div className="eyebrow mb-3 text-[var(--pp-500)]">
          DOMAIN ACCESS MAP · neluska.dev
        </div>
        <div className="grid gap-2">
          {routes.map((route) => (
            <div key={route.path} className="card overflow-hidden p-0">
              <div className="grid items-stretch min-[980px]:grid-cols-[2fr_1fr_2fr_80px]">
                <div className="px-[18px] py-[14px] font-mono text-[13px] text-[var(--ink)]">
                  {route.path}
                </div>
                <div
                  className="flex items-center justify-center px-3 py-[14px] font-mono text-[10px] uppercase tracking-[0.15em]"
                  style={{ background: route.color, color: route.ink }}
                >
                  {route.access}
                </div>
                <div className="flex items-center px-[18px] py-[14px] text-xs text-[var(--ink-soft)]">
                  {route.who}
                </div>
                <div className="flex items-center justify-center border-l border-dashed border-[var(--line)] px-3 py-[14px] text-lg">
                  {route.access === "public"
                    ? "🌍"
                    : route.access === "owner-only"
                      ? "🔒"
                      : "🔑"}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 rounded-lg bg-[var(--pp-50)] px-4 py-3 text-xs leading-[1.6] text-[var(--pp-700)]">
          <strong>Current state:</strong> web live brzy na{" "}
          <span className="mono">neluska.dev</span>. Brand kit bude za HTTP
          Basic Auth — heslo jen ty. Když budeš chtít poslat brand kit brandu,
          (a) pošli heslo v DM, nebo (b) duplikuj jako{" "}
          <span className="mono">/media</span> s jiným heslem.
        </div>
      </div>

      <div className="mb-9">
        <div className="eyebrow mb-3 text-[var(--dr-400)]">
          ✗ NEVER PUBLISH · anywhere, ever
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-2.5">
          {neverPublish.map((item) => (
            <div
              key={item.item}
              className="rounded-lg border border-dashed border-[var(--dr-200)] bg-[#fbe9ee] px-4 py-3"
            >
              <div className="mb-1 text-[13px] font-semibold text-[var(--dr-500)]">
                {item.item}
              </div>
              <div className="text-[11px] italic leading-[1.5] text-[var(--ink-soft)]">
                {item.why}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-9">
        <div className="eyebrow mb-3 text-[var(--pp-500)]">
          ✓ 2FA CHECKLIST · enable on day one
        </div>
        <div className="card overflow-hidden p-0">
          <div className="section-x-scroll">
            <table className="min-w-[900px] w-full border-collapse text-[13px]">
              <thead>
                <tr className="bg-[var(--pp-50)] text-left">
                  <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--pp-700)]">
                    Service
                  </th>
                  <th className="px-4 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--pp-700)]">
                    How
                  </th>
                  <th className="w-[60px] px-4 py-3 text-center font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--pp-700)]">
                    ✓
                  </th>
                </tr>
              </thead>
              <tbody>
                {checklist2fa.map((item, i) => (
                  <tr
                    key={item.service}
                    className={i === 0 ? "" : "border-t border-[var(--line)]"}
                  >
                    <td className="px-4 py-2.5 font-semibold text-[var(--ink)]">
                      {item.service}
                    </td>
                    <td className="px-4 py-2.5 text-xs text-[var(--ink-soft)]">
                      {item.how}
                    </td>
                    <td className="px-4 py-2.5 text-center text-base text-[var(--ink-soft)]">
                      ☐
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="mt-2.5 text-[11px] italic text-[var(--ink-soft)]">
          Authenticator app (Authy, 1Password, Aegis) &gt; SMS. SMS lze ukrást
          přes SIM-swap útok.
        </div>
      </div>

      <div className="mb-9">
        <div className="eyebrow mb-3 text-[var(--dr-400)]">
          🚨 RED FLAGS · what to do
        </div>
        <div className="grid gap-2.5">
          {redFlags.map((flag) => (
            <div
              key={flag.sign}
              className="card grid gap-5 p-4 min-[980px]:grid-cols-[1.2fr_1fr]"
            >
              <div className="flex items-start gap-2.5">
                <span className="shrink-0 text-lg">🚩</span>
                <div className="text-[13px] leading-[1.5] text-[var(--ink)]">
                  {flag.sign}
                </div>
              </div>
              <div className="rounded-md bg-[var(--pp-50)] px-3 py-2.5 text-xs leading-[1.5] text-[var(--pp-700)]">
                <strong className="mb-1 block font-mono text-[10px] uppercase tracking-[0.15em] text-[var(--pp-500)]">
                  Action
                </strong>
                {flag.action}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <div className="eyebrow mb-3 text-[var(--pp-500)]">
          ♡ BEST PRACTICES · set up once, benefit forever
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-3">
          {bestPractices.map((item) => (
            <div key={item.title} className="card p-4">
              <div className="h-display mb-2 text-[15px] leading-[1.2] text-[var(--pp-700)]">
                {item.title}
              </div>
              <div className="text-xs leading-[1.6] text-[var(--ink-soft)]">
                {item.body}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card mt-7 bg-[var(--pp-50)] p-[22px]">
        <div className="mb-2 font-script text-[30px] leading-none text-[var(--pp-700)]">
          your safety &gt; any viewer&apos;s feelings
        </div>
        <p className="m-0 max-w-[720px] text-[14px] leading-[1.6] text-[var(--ink)]">
          You don&apos;t owe anyone an explanation for a block, a deleted
          comment, a canceled stream, a private account. People who get it will
          understand. People who don&apos;t get it weren&apos;t going to stay
          anyway. This is a long game - protect the person who has to wake up
          tomorrow and do it again.
        </p>
      </div>
    </KitSection>
  );
}

export function FooterSection() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--paper)] px-8 py-12 min-[760px]:px-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 text-center">
        <div className="eyebrow">27 · footer</div>
        <div className="font-script text-[40px] leading-none text-[var(--pp-600)]">
          soft nerd princess, fully packed
        </div>
        <p className="mx-auto max-w-[760px] text-[15px] leading-[1.65] text-[var(--ink-soft)]">
          This kit is now the living version of the brand system: voice,
          templates, Twitch, safety, business, rituals, and the tiny details
          that make it feel like you.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <Link
            href="/"
            className="nav-link bg-[var(--pp-50)] text-[var(--pp-600)]"
          >
            ↗ live site
          </Link>
          <Link
            href="/media"
            className="nav-link bg-white text-[var(--pp-600)]"
          >
            ↗ media
          </Link>
        </div>
      </div>
    </footer>
  );
}
