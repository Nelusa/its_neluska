import { KitSection } from "../primitives";

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
      body: 'In Canva, keep ONE master file with all templates (post, carousel, story, reel cover) as pages. Duplicate the page I need instead of starting fresh.',
      tag: 'save as "neluska ~ master"',
    },
    {
      n: "02",
      title: "Pull sloth from Elements",
      body: `Search "sloth" in my Elements → favorites. Drop onto template. Pick the variant that matches today's mood (princess / gamer / cozy).`,
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
    "I don't center the sloth – it breaks composition",
    "I don't use 3+ sloths unless the post IS about collection",
    "I don't rotate or flip – keep canonical orientation",
    "I don't put sloth over face / food – it covers the hero",
  ];

  return (
    <KitSection
      id="slothpack"
      eyebrow="21 · SLOTH STICKER SYSTEM"
      title="the cast of characters"
      sub="My sloths are the most identifiable element of my brand – more than logo, font, or color. I use them like reaction emojis: one per post, matched to the mood."
    >
      <div className="mb-8 grid gap-3 min-[640px]:grid-cols-2 min-[980px]:grid-cols-3">
        {slothGallery.map((sloth) => (
          <div key={sloth.name} className="card grid grid-cols-[132px_1fr] items-center gap-4 p-4 max-[520px]:grid-cols-[112px_1fr]">
            <div className="flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-brand-purple-50 p-0.5">
              <img src={sloth.src} alt="" className="h-[150%] w-[150%] max-w-none object-contain" />
            </div>
            <div>
              <div className="h-display mb-1.5 text-[14px] leading-[1.15] text-brand-purple-700">
                {sloth.name}
              </div>
              <div className="text-xs leading-[1.45] text-ink-soft">
                {sloth.use}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-7">
        <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-purple-500">
          Canva → IG workflow (the 4-step ritual)
        </div>
        <div className="grid gap-5 min-[760px]:grid-cols-2 min-[1120px]:grid-cols-4">
          {workflow.map((step) => (
            <div
              key={step.n}
              className="border-l-2 border-brand-purple-200 pl-[14px]"
            >
              <div className="mb-1.5 font-mono text-[11px] tracking-[0.15em] text-brand-purple-400">
                STEP {step.n}
              </div>
              <div className="h-display mb-2 text-base text-brand-purple-700">
                {step.title}
              </div>
              <p className="mb-2.5 text-[12.5px] leading-[1.55] text-ink-soft">
                {step.body}
              </p>
              <div className="font-mono text-[10px] tracking-[0.05em] text-brand-rose-400">
                ↳ {step.tag}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-4 min-[880px]:grid-cols-2">
        <div className="rounded-[var(--r-lg)] bg-[rgba(245,229,116,0.15)] p-5">
          <div className="h-display mb-2.5 text-sm text-brand-purple-700">
            SLOTH RULES · DO
          </div>
          <ul className="m-0 list-disc pl-[18px] text-[13px] leading-[1.7] text-ink">
            {dos.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-[var(--r-lg)] bg-[rgba(244,168,192,0.15)] p-5">
          <div className="h-display mb-2.5 text-sm text-brand-purple-700">
            SLOTH RULES · DON'T
          </div>
          <ul className="m-0 list-disc pl-[18px] text-[13px] leading-[1.7] text-ink">
            {donts.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </KitSection>
  );
}

