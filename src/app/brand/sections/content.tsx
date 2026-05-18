import {
  Calendar,
  DayInLife,
  HighlightsRow,
  HooksGrid,
  LaunchWeek,
  Pillars,
  QuickDevTipReel,
  ReelsRow,
  Rhythm,
  SlothASMR,
  StoryGrid,
} from "./data";
import { IGShowcase } from "@/app/brand/mocks/ig";
import { DotDivider, KitSection } from "./primitives";
import { FeedPreview, PostGrid9 } from "./PostMocks";

export function IGRealSection() {
  return (
    <KitSection
      id="ig-real"
      eyebrow="06 · PROFILE MOCKUP"
      title="my profile, previewed"
      sub="Three views of a fully branded profile: feed grid, opened post, fullscreen story – all using the templates from this kit. This is what a new follower sees from me in the first 10 seconds."
    >
      <IGShowcase />
    </KitSection>
  );
}

export function PostsSection() {
  return (
    <KitSection
      id="posts"
      eyebrow="07 · POST TEMPLATES"
      title="ten recipes"
      sub="Three templates per mode, plus a reel cover mock and an event card – reusable structures. I rotate these so my feed can breathe."
    >
      <PostGrid9 />
    </KitSection>
  );
}

export function FeedSection() {
  return (
    <KitSection
      id="feed"
      eyebrow="08 · FEED GRID"
      title="the rhythm"
      sub="Princess / Nerd / Funny rotating diagonally across the 3-column grid makes the profile read visually balanced at a glance."
      bg="var(--paper-2)"
    >
      <FeedPreview />
    </KitSection>
  );
}

export function StoriesSection() {
  return (
    <KitSection
      id="stories"
      eyebrow="09 · STORIES"
      title="daily stories"
      sub="Six templates cover 90% of daily stories - gm, poll, live-now, photo dump, code tip, ask-me-anything. Anything else is a remix."
    >
      <StoryGrid />
    </KitSection>
  );
}

export function HighlightsSection() {
  return (
    <KitSection
      id="highlights"
      eyebrow="10 · HIGHLIGHTS"
      title="nine covers"
      sub="Match the palette, vary the texture. Mixture of script, mono, and pure-shape icons keeps highlight row readable on a small avatar."
      bg="var(--paper-2)"
    >
      <HighlightsRow />
    </KitSection>
  );
}

export function ReelsSection() {
  return (
    <KitSection
      id="reels"
      eyebrow="11 · REEL COVERS"
      title="cover templates"
      sub="My reel cover lives in the grid forever. Four archetypes: tutorial, day-in-life, stream highlight, aesthetic. Title + mode-specific background is all I need."
    >
      <ReelsRow />
    </KitSection>
  );
}

export function ReelScriptsSection() {
  return (
    <KitSection
      id="reelscripts"
      eyebrow="12 · REEL SCRIPTS"
      title="three ready-to-shoot scripts"
      sub="Shot-by-shot timelines: Day-in-the-Life for cozy reach, Sloth ASMR for silent-scroll virality, Quick Dev Tip for batchable nerd growth. I clone the structure and swap the content."
    >
      <div className="mb-9">
        <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-purple-500">
          SCRIPT A · DAY IN THE LIFE · 60s · 13 cuts
        </div>
        <DayInLife />
      </div>
      <div className="mb-9">
        <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-purple-500">
          SCRIPT B · SLOTH COLLECTION ASMR · 58s · silent
        </div>
        <SlothASMR />
      </div>
      <div>
        <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-purple-500">
          SCRIPT C · QUICK DEV TIP · 30s · screen recording
        </div>
        <QuickDevTipReel />
      </div>
    </KitSection>
  );
}

export function StrategySection() {
  return (
    <KitSection
      id="strategy"
      eyebrow="13 · CONTENT PILLARS"
      title="what I post"
      sub="Four pillars, weighted. I don't chase trends outside these – every post I ship should fit one (or two at the intersection)."
    >
      <Pillars />
    </KitSection>
  );
}

export function RhythmSection() {
  const stats = [
    {
      k: "time",
      v: "1h / day",
      s: "20min create/edit · 20min schedule+caption · 20min engagement",
    },
    {
      k: "batch",
      v: "sunday",
      s: "2-3h shoot + edit session – content for the entire week",
    },
    {
      k: "posts",
      v: "3-4 / week",
      s: "quality > quantity – algorithm rewards engagement, not volume",
    },
    {
      k: "stream",
      v: "1-2× / month",
      s: "event format – drives IG content for days after",
    },
    {
      k: "stories",
      v: "2-3 daily",
      s: "low-effort, real-time – behind the scenes, polls, quick moments",
    },
    {
      k: "engagement",
      v: "20min daily",
      s: "reply to comments + DMs, comment on 10 similar accounts",
    },
  ];

  return (
    <KitSection
      id="rhythm"
      eyebrow="14 · WEEKLY RHYTHM"
      title="one hour a day, sustainably"
      sub="Monday = dev content. Wednesday = cozy or reel. Friday = personality post. Sunday = batch & rest. 3-4 posts per week + daily stories. Stream when it feels right, not because the calendar says so."
      bg="var(--paper-2)"
    >
      <Rhythm />
      <DotDivider />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {stats.map((card) => (
          <div key={card.k} className="card p-[22px]">
            <div className="eyebrow">{card.k}</div>
            <div className="h-display mt-2 text-[30px] leading-[0.95] text-brand-purple-700">
              {card.v}
            </div>
            <div className="mt-1.5 text-[13px] leading-[1.5] text-ink-soft">
              {card.s}
            </div>
          </div>
        ))}
      </div>
    </KitSection>
  );
}

export function DailyWorkflowSection() {
  const blocks = [
    {
      range: "0–20 min",
      title: "Create or edit",
      body: "Today's scheduled content from my Sunday batch – polish cuts, captions-ready.",
    },
    {
      range: "20–40 min",
      title: "Caption + schedule + stories",
      body: "Write the caption, schedule the post, publish 2–3 light stories.",
    },
    {
      range: "40–60 min",
      title: "Engagement",
      body: "Reply to all comments and DMs; leave thoughtful comments on ~10 accounts in my niche.",
    },
  ];

  return (
    <KitSection
      id="daily-workflow"
      eyebrow="15 · 1-HOUR DAILY WORKFLOW"
      title="where the hour goes"
      sub="A realistic split when I actually have sixty minutes. Batch day is where heavy lifting lives; weekdays are ship + show up."
    >
      <div className="grid gap-4 min-[760px]:grid-cols-3">
        {blocks.map((b) => (
          <div key={b.range} className="card border border-line bg-white p-6">
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-brand-purple-500">
              {b.range}
            </div>
            <div className="h-display mt-2 text-xl leading-[1.1] text-brand-purple-700">
              {b.title}
            </div>
            <p className="mb-0 mt-2 text-[13px] leading-[1.55] text-ink-soft">
              {b.body}
            </p>
          </div>
        ))}
      </div>
      <DotDivider />
      <div className="grid gap-3 rounded-[var(--r-md)] bg-brand-purple-50 p-5 text-[13px] leading-[1.6] text-ink">
        <p className="m-0">
          <strong className="text-brand-purple-700">If I only have 30 minutes,</strong> I do engagement
          only. Engagement beats posting when time is tight.
        </p>
        <p className="m-0">
          <strong className="text-brand-purple-700">If I have 0 minutes,</strong> that is ok.
          Consistency is measured in months, not in single days.
        </p>
      </div>
    </KitSection>
  );
}

export function CalendarSection() {
  return (
    <KitSection
      id="calendar"
      eyebrow="16 · MONTH 1 CALENDAR"
      title="first 28 days"
      sub="A soft launch → builder → open up → community arc. I don't ship to everything; I ship to this."
    >
      <Calendar />
    </KitSection>
  );
}

export function LaunchSection() {
  return (
    <KitSection
      id="launch"
      eyebrow="17 · LAUNCH WEEK"
      title="soft launch week"
      sub="Five feed-worthy pieces in seven days – stories fill the gaps. No mandatory stream: I add a bonus go-live in week 2–3 when I have energy."
      bg="var(--paper-2)"
    >
      <LaunchWeek />
    </KitSection>
  );
}

export function RealPhotoSection() {
  const photos = [
    {
      src: "/assets/photos/cherry-blossom.jpg",
      label: "cherry blossom",
      mood: "princess",
      note: "Pastel sky, soft pink - keep hue UNTOUCHED, just lift shadows",
      fallback: "CHERRY BLOSSOM PHOTO MISSING",
    },
    {
      src: "/assets/photos/breakfast-bowl.jpg",
      label: "breakfast bowl",
      mood: "cozy",
      note: "Wood warmth - pull orange saturation down -10 to avoid garish yellow",
      fallback: "BREAKFAST BOWL PHOTO MISSING",
    },
    {
      src: "/assets/photos/yoga-mat.jpg",
      label: "yoga mat",
      mood: "princess",
      note: "Magenta is MY brand color - let it pop; desaturate floor only",
      fallback: "YOGA MAT PHOTO MISSING",
    },
    {
      src: "/assets/photos/sloth-collection.jpg",
      label: "sloth collection",
      mood: "funny",
      note: "B&W bedding is chaos - crop tighter or blur with f1.4 in Lightroom",
      fallback: "SLOTH COLLECTION PHOTO MISSING",
    },
  ];

  const preset = [
    ["Exposure", "+0.15"],
    ["Contrast", "-8"],
    ["Highlights", "-25"],
    ["Shadows", "+35"],
    ["Whites", "+10"],
    ["Blacks", "-12"],
    ["Texture", "+8"],
    ["Clarity", "-5"],
    ["Vibrance", "+12"],
    ["Saturation", "-6"],
    ["Temp", "+4 (warm)"],
    ["Tint", "+3 (magenta)"],
  ];

  const lightTimes = [
    ["7-9h", "soft morning", "var(--tw-heart)", false],
    ["10-12h", "ok", "var(--py-300)", false],
    ["12-15h", "harsh - skip", "var(--dr-200)", true],
    ["17-19h", "golden hour ★", "var(--py-500)", false],
    ["19-21h", "blue hour", "var(--pp-300)", false],
  ] as const;

  return (
    <KitSection
      id="realphoto"
      eyebrow="18 · MY PHOTOS – BEFORE/AFTER"
      title="one filter across everything"
      sub="My raw photos are gorgeous but inconsistent - yoga mat is sultry-magenta, cherry blossom is pastel-sky, breakfast is woodsy-warm. One preset unifies them into a single feed language."
      bg="var(--paper-2)"
    >
      <div className="mb-7 grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4">
        {photos.map((photo) => (
          <div key={photo.src} className="card overflow-hidden p-0">
            <div className="relative bg-paper-3 pb-[125%]">
              <div className="absolute inset-0 flex items-center justify-center bg-paper-3 px-8 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-brand-purple-500">
                {photo.fallback}
              </div>
              <img
                src={photo.src}
                alt={photo.label}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute left-2.5 top-2.5 rounded-full bg-[rgba(255,255,255,0.92)] px-2 py-[3px] font-mono text-[9px] uppercase tracking-[0.15em] text-brand-purple-700">
                {photo.mood}
              </div>
            </div>
            <div className="px-[14px] py-3">
              <div className="mb-1 font-mono text-[10px] uppercase tracking-[0.1em] text-brand-purple-500">
                {photo.label}
              </div>
              <div className="text-[11.5px] leading-[1.45] text-ink-soft">
                {photo.note}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-5 min-[980px]:grid-cols-2">
        <div className="card p-6">
          <div className="mb-3 font-mono text-[11px] tracking-[0.2em] text-brand-purple-500">
            LIGHTROOM PRESET · "soft nerd"
          </div>
          <div className="grid grid-cols-1 gap-x-2 gap-y-0 text-[12.5px] font-mono min-[560px]:grid-cols-2">
            {preset.map(([k, v]) => (
              <div
                key={k}
                className="flex justify-between border-b border-dashed border-line py-[5px]"
              >
                <span className="text-ink-soft">{k}</span>
                <span className="font-semibold text-brand-purple-700">{v}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-[var(--r-md)] bg-paper-2 px-[14px] py-3 text-xs leading-[1.5] text-ink-soft">
            <strong className="text-brand-purple-700">HSL · Orange:</strong> hue
            {" "}
            -6, sat -10, lum +8 ·{" "}
            <strong className="text-brand-purple-700">Purple:</strong> hue -4,
            sat +5, lum +2 ·{" "}
            <strong className="text-brand-purple-700">Magenta:</strong> sat +8
            (if skin tones, only +4)
          </div>
        </div>

        <div className="grid gap-4">
          <div className="card p-5">
            <div className="h-display mb-2.5 text-base text-brand-purple-700">
              LIGHT · shoot this time of day
            </div>
            <div className="grid grid-cols-5 gap-2.5">
              {lightTimes.map(([time, label, color, avoid]) => (
                <div key={time} className="text-center">
                  <div
                    className="relative mb-1.5 h-10 overflow-hidden rounded-[var(--r-sm)]"
                    style={{ background: color }}
                  >
                    {avoid ? (
                      <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(0,0,0,0.15)_4px,rgba(0,0,0,0.15)_6px)]" />
                    ) : null}
                  </div>
                  <div className="font-mono text-[10px] text-brand-purple-700">
                    {time}
                  </div>
                  <div className="text-[10px] leading-[1.2] text-ink-soft">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-5">
            <div className="h-display mb-2.5 text-base text-brand-purple-700">
              BACKGROUND · KEEP / KILL
            </div>
            <div className="grid gap-3 text-xs min-[560px]:grid-cols-2">
              <div>
                <div className="mb-1.5 font-mono text-[10px] tracking-[0.15em] text-brand-purple-500">
                  KEEP ✓
                </div>
                <ul className="m-0 list-disc pl-4 leading-[1.6] text-ink">
                  <li>Light wood floor</li>
                  <li>Balcony / natural light</li>
                  <li>Solid bedding / plain sheet</li>
                  <li>Cafe marble or neutral</li>
                </ul>
              </div>
              <div>
                <div className="mb-1.5 font-mono text-[10px] tracking-[0.15em] text-brand-rose-400">
                  KILL ✗
                </div>
                <ul className="m-0 list-disc pl-4 leading-[1.6] text-ink">
                  <li>Black & white patterns</li>
                  <li>Cluttered shelves behind</li>
                  <li>Mixed color lighting</li>
                  <li>Yellow indoor bulb only</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </KitSection>
  );
}

export function HooksSection() {
  return (
    <KitSection
      id="hooks"
      eyebrow="19 · HOOKS LIBRARY"
      title="captions & openers"
      sub="Twelve ready-to-steal hooks - four per mode. Remix freely."
    >
      <HooksGrid />
    </KitSection>
  );
}

export function TwitchSection() {
  const done = [
    {
      src: "/assets/twitch/starting-soon.png",
      alt: "Starting soon",
      file: "starting-soon.png",
      note: "1920×1080 · lavender + contour",
    },
    {
      src: "/assets/twitch/offline.png",
      alt: "Offline banner",
      file: "offline-banner.png",
      note: "1200×480 · deep purple + target-O",
    },
    {
      src: "/assets/twitch/alerts.png",
      alt: "Alerts",
      file: "alert-overlays",
      note: "follow / sub / donation",
    },
  ];

  const todo = [
    {
      title: "Scene frame - JUST CHATTING",
      spec: "1920×1080 · full-screen cam, contour border, handle bottom-left",
      why: "Used when I'm just talking, reviewing a puzzle piece, or doing IRL segments.",
    },
    {
      title: "Scene frame - GAMING",
      spec: "Cam bubble top-left 400×300 · bottom bar with recent follower + game title",
      why: "Default LoL / cozy-game scene. Keep chrome minimal so gameplay breathes.",
    },
    {
      title: "BRB / Pee break panel",
      spec: '1920×1080 · sloth with a tea cup · "brb - loading patience"',
      why: "I need this every stream. Makes the pause on-brand instead of awkward.",
    },
    {
      title: "Stream-ending panel",
      spec: '1920×1080 · "thanks for hanging with this sloth 🦥" + socials',
      why: "Ends stream warmly. Ends = most rewatched moment on VODs.",
    },
    {
      title: "Sub-goal / bits-goal overlay",
      spec: "Horizontal bar · butter-yellow fill · sloth emoji at target",
      why: "Gives viewers a reason to support. Sloth progresses along the bar as goal fills.",
    },
    {
      title: "Info panels (under stream)",
      spec: "6× panels · about, schedule, rules, socials, setup, donate",
      why: "Fills the offline-profile area. Uses contour pattern + my headshot.",
    },
    {
      title: "Chatbot greeting messages",
      spec: "Text only · 8-10 variants",
      why: "Bot welcomes new chatters in my voice. I write them myself.",
    },
  ];

  const funnel = [
    ["1", "I post on IG consistently", "3-4 posts/week + daily stories – this is where new people find me"],
    ["2", "Stream as an event", "1-2× per month – announce via IG stories, make it feel special"],
    ["3", "Mine stream for reels", "OpusClip or CapCut: auto-clip best moments into 15-60s vertical reels"],
    ["4", "Cross-post everywhere", "Same reel → IG Reels + TikTok + YouTube Shorts – zero extra work"],
  ];

  return (
    <section
      id="twitch"
      className="border-t border-line px-8 py-[100px] min-[760px]:px-16"
      style={{ background: "var(--tw-deep)", color: "#fff" }}
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-12">
          <div
            className="eyebrow mb-2.5"
            style={{ color: "var(--tw-butter)" }}
          >
            20 · TWITCH PACKAGE
          </div>
          <h2 className="h-display m-0 text-[clamp(40px,6vw,72px)] text-white">
            the stream, wrapped
          </h2>
          <p className="mb-0 mt-4 max-w-[560px] text-[15px] leading-[1.55] text-brand-twitch-lav">
            Twitch is my community space and content source. I stream when I can – every session feeds my Instagram for days.
          </p>
        </div>

        <div className="mb-8 grid gap-6 min-[980px]:grid-cols-2">
          <div>
            <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-twitch-butter">
              ✓ DONE
            </div>
            {done.map((item) => (
              <div
                key={item.file}
                className="mt-3 overflow-hidden rounded-[var(--r-md)] border border-[rgba(220,201,232,0.15)] bg-[rgba(255,255,255,0.04)] first:mt-0"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="block w-full"
                />
                <div className="px-4 py-3 font-mono text-[11px] text-brand-twitch-lav">
                  <strong className="text-white">{item.file}</strong> ·{" "}
                  {item.note}
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="mb-2.5 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-twitch-heart">
              ○ TO DO - recommended additions
            </div>
            <div className="flex flex-col gap-3">
              {todo.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[var(--r-md)] border border-dashed border-[rgba(245,229,116,0.3)] bg-[rgba(245,229,116,0.05)] p-[14px]"
                >
                  <div className="mb-1 font-display text-sm uppercase text-brand-twitch-butter">
                    {item.title}
                  </div>
                  <div className="mb-2 font-mono text-[10px] tracking-[0.05em] text-brand-twitch-lav opacity-70">
                    {item.spec}
                  </div>
                  <div className="text-xs leading-[1.5] text-[rgba(255,255,255,0.7)]">
                    {item.why}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-[var(--r-lg)] border border-[rgba(245,229,116,0.2)] bg-[rgba(245,229,116,0.08)] p-6">
          <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-brand-twitch-butter">
            IG-first funnel
          </div>
          <div className="grid gap-4 min-[760px]:grid-cols-2 min-[1120px]:grid-cols-4">
            {funnel.map(([n, title, desc]) => (
              <div key={n}>
                <div className="h-display mb-1 text-[32px] text-brand-twitch-butter">
                  {n}
                </div>
                <div className="mb-1 text-[13px] font-bold text-white">
                  {title}
                </div>
                <div className="text-xs leading-[1.45] text-brand-twitch-lav">
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
