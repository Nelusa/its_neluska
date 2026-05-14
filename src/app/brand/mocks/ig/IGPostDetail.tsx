import { ClaudeSloth, Sparkle } from "@/app/brand/sections/primitives";

export function IGPostDetail() {
  return (
    <div className="flex-1 overflow-auto bg-white">
      <div className="flex items-center gap-[14px] border-b border-[#eee] px-[14px] py-2">
        <span className="text-xl">←</span>
        <div className="text-sm font-semibold">Posts</div>
      </div>

      <div className="flex items-center gap-2.5 px-[14px] py-[10px]">
        <div className="h-8 w-8 rounded-2xl bg-[linear-gradient(135deg,#875BA4,#C58BB0)] p-[1.5px]">
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#EEE6F4]">
            <ClaudeSloth size={24} variant="heart" />
          </div>
        </div>
        <div className="text-[13px] font-semibold">its_neluska</div>
        <div className="ml-auto text-base">⋯</div>
      </div>

      <div
        className="relative w-full overflow-hidden text-[#FFF7DA]"
        style={{ aspectRatio: "4 / 5", background: "linear-gradient(180deg,#875BA4,#4E3464)" }}
      >
        <div className="absolute left-5 top-5">
          <Sparkle size={18} color="#FFF7DA" />
          <Sparkle
            size={10}
            color="#FFF7DA"
            style={{ position: "relative", left: 18, top: -6 }}
          />
        </div>
        <div className="absolute left-5 top-[60px] font-mono text-[10px] tracking-[0.2em] opacity-90 min-[340px]:text-[10px]">
          20:00 – 22:00 / 20.04.2026
        </div>
        <div className="h-display absolute left-5 right-5 top-[100px] text-[44px] leading-[0.9]">
          first
          <br />
          stream
          <br />
          today
        </div>
        <div className="absolute bottom-4 right-3">
          <ClaudeSloth size={90} variant="heart" />
        </div>
        <div className="absolute bottom-5 left-5 font-script text-[22px] text-[#FCEB86]">
          catch me there ✿
        </div>
        <div className="absolute right-[14px] top-[14px] rounded-[10px] bg-[rgba(0,0,0,0.5)] px-2 py-[3px] text-[10px] text-white">
          1/4
        </div>
      </div>

      <div className="flex items-center gap-[14px] px-[14px] py-[10px] text-[22px]">
        <span>♡</span>
        <span>💬</span>
        <span className="-rotate-[30deg]">➤</span>
        <span className="ml-auto">⎆</span>
      </div>
      <div className="px-[14px] text-[13px]">
        <div className="font-bold">
          Liked by <span>nyx.codes</span> and <span>486 others</span>
        </div>
        <div className="mt-1.5 leading-[1.45]">
          <span className="font-bold">its_neluska</span> ok so i'm doing the
          scary thing ✦ first twitch stream TONIGHT. we'll vibe, i'll lose at
          LOL, someone will get carried away and build a whole landing page in
          svelte on the side. no pressure, all warmth, maybe a sloth makes an
          appearance.
        </div>
        <div className="mt-1.5 font-semibold text-[#875BA4]">
          #softnerd #womenintech #twitchstreamer #threejs
        </div>
        <div className="mt-2 text-[11px] text-[#888]">View all 42 comments</div>
        <div className="mt-1.5 text-[11px] text-[#888]">2 HOURS AGO</div>
      </div>
      <div className="h-10" />
    </div>
  );
}
