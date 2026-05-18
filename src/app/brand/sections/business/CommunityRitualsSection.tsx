import { KitSection } from "../primitives";

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
    { phrase: '"one game at time ✨"', origin: "stream motto", when: "anytime I'm tempted to overcommit" },
    { phrase: '"no backseating"', origin: "chat rules", when: "regulars self-police newcomers" },
    { phrase: '"sloth energy only"', origin: "bio + Twitch rules", when: "vibe check, low-drama mode" },
    { phrase: '"soft launch" / "princess mode"', origin: "brand doc", when: "callback to cozy content drops" },
    { phrase: '"pookies"', origin: "my audience nickname", when: "opening streams, ending posts" },
    { phrase: '"brb loading patience"', origin: "BRB panel", when: "anytime I need a break" },
  ];

  const milestones = [
    { count: 10, name: "first sloths", reward: "personal shoutout in next stream" },
    { count: 25, name: "sloth squad", reward: "custom emote name submitted by chat" },
    { count: 50, name: "sloth colony · Twitch Affiliate path", reward: "first sub-only emote + mini-celebration stream when metrics unlock (timeline depends on stream frequency)" },
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
    "[name] ✨ I run on cozy chaos – right place if that hits",
    "chat, please welcome [name] - bring the soft vibes",
    "hi [name]! perfect timing, we're about to [next thing]",
    "ooh [name] is here! new or back – welcome to the colony anyway ♡",
  ];

  return (
    <KitSection
      id="community"
      eyebrow="27 · COMMUNITY RITUALS"
      title="the language of my people"
      sub="Communities form around repeatable moments – inside jokes, custom emotes, milestones that feel earned. This is my vocabulary layer. I use it consistently and let regulars teach newcomers."
    >
      <div className="mb-8">
        <div className="eyebrow mb-3 text-brand-purple-500">
          EMOTE NAMING CONVENTION · sloth[Action]
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-3">
          {emotes.map((emote) => (
            <div key={emote.name} className="card p-[14px]">
              <div className="mb-1 font-mono text-xs font-semibold text-brand-purple-700">
                :{emote.name}:
              </div>
              <div className="mb-1 text-xs text-ink">{emote.desc}</div>
              <div className="text-[11px] italic text-ink-soft">
                use: {emote.use}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs italic text-ink-soft">
          Commission emotes from one artist for visual consistency. Budget 2-3k
          CZK per emote. Commission order: slothLove → slothHuh → slothBonk
          first (highest daily use).
        </div>
      </div>

      <div className="mb-8 grid gap-6 min-[980px]:grid-cols-2">
        <div>
          <div className="eyebrow mb-3 text-brand-purple-500">
            INSIDE JOKES · CALLBACKS
          </div>
          <div className="grid gap-2.5">
            {insideJokes.map((joke) => (
              <div key={joke.phrase} className="card p-[14px]">
                <div className="mb-1.5 font-script text-[22px] leading-none text-brand-purple-700">
                  {joke.phrase}
                </div>
                <div className="text-[11px] leading-[1.5] text-ink-soft">
                  <strong className="text-brand-purple-500">from:</strong>{" "}
                  {joke.origin} ·{" "}
                  <strong className="text-brand-purple-500">use:</strong>{" "}
                  {joke.when}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="eyebrow mb-3 text-brand-purple-500">
            CHAT GREETING BANK
          </div>
          <div className="card p-[18px]">
            <div className="mb-2.5 text-[11px] italic text-ink-soft">
              Load these into my Twitch chatbot (StreamElements, Nightbot) as
              welcome messages. Random rotation keeps it fresh.
            </div>
            <div className="grid gap-2">
              {greetings.map((greeting) => (
                <div
                  key={greeting}
                  className="rounded-md border-l-[3px] border-brand-purple-300 bg-paper-2 px-3 py-2 text-xs text-ink"
                >
                  {greeting}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="eyebrow mb-3 text-brand-purple-500">
          FOLLOWER MILESTONES · celebration ladder
        </div>
        <div className="grid gap-2.5">
          {milestones.map((milestone) => (
            <div
              key={milestone.count}
              className="card grid items-center gap-5 px-[18px] py-[14px] min-[980px]:grid-cols-[80px_minmax(0,1fr)_minmax(0,1fr)]"
            >
              <div className="h-display text-[28px] leading-none text-brand-purple-700">
                {milestone.count}
              </div>
              <div className="font-script text-[22px] leading-none text-brand-purple-600">
                {milestone.name}
              </div>
              <div className="text-xs italic leading-[1.5] text-ink-soft">
                ✦ {milestone.reward}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card mt-7 bg-brand-purple-50 p-[22px]">
        <div className="mb-2 font-script text-[30px] leading-none text-brand-purple-700">
          my community is not an audience
        </div>
        <p className="m-0 max-w-[720px] text-[14px] leading-[1.6] text-ink">
          Audiences watch; communities participate. Every ritual here is
          designed to give regulars a way to contribute - emote names they
          suggested, greetings they use on newcomers, inside jokes they carry
          from stream to stream. When they feel ownership, they stay through
          my dry patches.
        </p>
      </div>
    </KitSection>
  );
}

