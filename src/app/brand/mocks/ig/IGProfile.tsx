import { ClaudeSloth } from "@/app/brand/sections/primitives";

export function IGProfile() {
  const tiles = [
    {
      bg: "linear-gradient(180deg,#875BA4,#4E3464)",
      inner: (
        <div className="h-display p-[10px] text-xl leading-[0.88] text-[#FFF7DA]">
          first
          <br />
          stream
        </div>
      ),
      isReel: false,
    },
    {
      bg: "#2A103F",
      inner: (
        <div className="p-[10px] font-mono text-[10px] leading-[1.3] text-[#FCEB86]">
          $ svelte
          <br />
          tip 04
        </div>
      ),
      isReel: false,
    },
    {
      bg: "#EACFDA",
      inner: (
        <div className="h-display p-[10px] text-[15px] leading-[0.95] text-[#8E5C72]">
          confession
          <br />
          #17
        </div>
      ),
      isReel: true,
    },
    {
      bg: "#F6E8EE",
      inner: (
        <div className="flex h-full items-center justify-center p-[10px]">
          <div
            className="flex h-full w-full items-center justify-center rounded"
            style={{
              background:
                "repeating-linear-gradient(135deg,#EACFDA 0 6px,#F6E8EE 6px 12px)",
              fontFamily: "var(--ff-mono)",
              fontSize: 8,
              color: "#8E5C72",
            }}
          >
            [ oat latte ]
          </div>
        </div>
      ),
      isReel: false,
    },
    {
      bg: "#EEE6F4",
      inner: (
        <div className="h-display p-[10px] text-xs leading-[0.95] text-[#2A103F]">
          three.js
          <br />
          build log
          <br />→ day 3
        </div>
      ),
      isReel: false,
    },
    {
      bg: "#4E3464",
      inner: (
        <div className="p-[10px] font-mono text-[9px] leading-[1.6] tracking-[0.14em] text-[#FCEB86]">
          ● LIVE
          <br />
          TWITCH
          <br />
          losing lol
        </div>
      ),
      isReel: true,
    },
    {
      bg: "#DCCDE8",
      inner: (
        <div className="h-display p-[10px] text-[11px] leading-none text-[#2A103F]">
          being
          <br />
          soft ≠
          <br />
          weak
        </div>
      ),
      isReel: false,
    },
    {
      bg: "#FFF7DA",
      inner: (
        <div className="h-display p-[10px] text-[11px] leading-none text-[#2A103F]">
          svelte vs
          <br />
          react →
          <br />
          for 3d
        </div>
      ),
      isReel: false,
    },
    {
      bg: "#FFF0B2",
      inner: (
        <div className="grid h-full grid-cols-2 gap-[3px] p-[6px]">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-[3px]"
              style={{ background: i % 2 === 0 ? "#E1BDD5" : "#DCCDE8" }}
            >
              <ClaudeSloth
                size={18}
                variant={(["peek", "heart", "banana", "glasses"] as const)[i]}
              />
            </div>
          ))}
        </div>
      ),
      isReel: true,
    },
  ];

  const highlights = [
    {
      label: "cozy",
      bg: "linear-gradient(135deg,#F6E8EE,#EACFDA)",
      icon: (
        <div className="font-script text-xl leading-none text-[#8E5C72]">c</div>
      ),
    },
    {
      label: "dev",
      bg: "#2A103F",
      icon: (
        <div className="font-mono text-xs leading-none text-[#FCEB86]">
          &lt;/&gt;
        </div>
      ),
    },
    {
      label: "sloths",
      bg: "#FFF7DA",
      icon: <ClaudeSloth size={38} variant="heart" />,
    },
    {
      label: "stream",
      bg: "linear-gradient(135deg,#875BA4,#4E3464)",
      icon: (
        <div className="h-[6px] w-[6px] rounded-full bg-[#ff6b6b] shadow-[0_0_0_3px_rgba(255,107,107,0.3)]" />
      ),
    },
    {
      label: "lego",
      bg: "#E1BDD5",
      icon: (
        <div className="grid grid-cols-2 gap-[2px]">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-[5px] w-[5px] rounded-[3px] bg-[#875BA4]"
            />
          ))}
        </div>
      ),
    },
    {
      label: "yoga",
      bg: "linear-gradient(135deg,#DCCDE8,#BCA3CC)",
      icon: (
        <div className="font-script text-[22px] leading-none text-[#2A103F]">
          ❀
        </div>
      ),
    },
  ];

  return (
    <div className="flex-1 overflow-auto bg-white">
      <div className="flex items-center justify-between border-b border-[#eee] px-4 py-2">
        <div
          className="flex items-center gap-1 text-[17px] font-semibold"
          style={{ fontFamily: '"Billabong", cursive' }}
        >
          <span>its_neluska</span>
          <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M7 10l5 5 5-5"
              stroke="#000"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="flex gap-4">
          <span className="text-xl">+</span>
          <span className="text-[18px]">☰</span>
        </div>
      </div>

      <div className="px-4 pb-2 pt-[14px]">
        <div className="flex items-center gap-6">
          <div className="h-[86px] w-[86px] rounded-[43px] bg-[linear-gradient(135deg,#875BA4,#C58BB0,#FCEB86)] p-[3px]">
            <div className="h-full w-full rounded-full bg-white p-[2px]">
              <div className="flex h-full w-full items-center justify-center rounded-full bg-[#EEE6F4]">
                <ClaudeSloth size={62} variant="heart" />
              </div>
            </div>
          </div>
          <div className="flex flex-1 justify-around">
            {[
              { n: "47", l: "posts" },
              { n: "3,208", l: "followers" },
              { n: "421", l: "following" },
            ].map((stat) => (
              <div key={stat.l} className="text-center">
                <div className="text-[15px] font-bold">{stat.n}</div>
                <div className="text-xs text-[#555]">{stat.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-3 text-[13px] leading-[1.35]">
          <div className="font-bold">neluska ✦</div>
          <div className="mt-px font-body text-[#262626]">
            soft nerd princess
          </div>
          <div className="font-body text-[#262626]">
            dev by day · sloth at heart 🦥
          </div>
          <div className="font-body text-[#262626]">
            svelte + three.js + too many puzzle pieces
          </div>
          <div className="mt-[3px] font-semibold text-[#875BA4]">
            ↳ twitch.tv/its_neluska
          </div>
        </div>

        <div className="mt-3 flex gap-1.5">
          <div className="flex-1 rounded-lg bg-[#875BA4] py-[7px] text-center text-[13px] font-semibold text-white">
            Follow
          </div>
          <div className="flex-1 rounded-lg bg-[#EFEFEF] py-[7px] text-center text-[13px] font-semibold">
            Message
          </div>
          <div className="w-[30px] rounded-lg bg-[#EFEFEF] py-[7px] text-center text-[13px] font-semibold">
            ▾
          </div>
        </div>

        <div className="mt-[14px] flex gap-[14px] overflow-x-auto">
          {highlights.map((highlight) => (
            <div
              key={highlight.label}
              className="flex shrink-0 flex-col items-center gap-1"
            >
              <div
                className="flex h-[62px] w-[62px] items-center justify-center rounded-[31px] border-[1.5px] border-[#eee] p-[3px]"
                style={{ background: highlight.bg }}
              >
                <div
                  className="flex h-full w-full items-center justify-center rounded-full"
                  style={{ background: highlight.bg }}
                >
                  {highlight.icon}
                </div>
              </div>
              <div className="text-[11px]">{highlight.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-1 flex border-y border-[#eee]">
        <div className="flex-1 border-b border-black py-2 text-center">⊞</div>
        <div className="flex-1 py-2 text-center text-[#888]">▶</div>
        <div className="flex-1 py-2 text-center text-[#888]">♡</div>
      </div>

      <div className="grid grid-cols-3 gap-[1.5px] p-[1.5px]">
        {tiles.map((tile, i) => (
          <div
            key={i}
            className="relative overflow-hidden"
            style={{ aspectRatio: "1 / 1", background: tile.bg }}
          >
            {tile.inner}
            {tile.isReel ? (
              <div className="absolute right-[6px] top-1 text-[9px] text-white shadow-[0_1px_2px_rgba(0,0,0,0.4)]">
                ▶
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
