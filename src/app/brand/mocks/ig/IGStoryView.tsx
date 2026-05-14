import { ClaudeSloth } from "@/app/brand/sections/primitives";

export function IGStoryView() {
  return (
    <div
      className="relative flex-1 overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg,#BCA3CC 0%,#DCCDE8 60%,#FFF7DA 100%)",
      }}
    >
      <div className="absolute left-[10px] right-[10px] top-2 z-10 flex gap-[3px]">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="h-0.5 flex-1 rounded-[2px]"
            style={{
              background:
                i === 1 ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)",
            }}
          />
        ))}
      </div>

      <div className="absolute left-3 right-3 top-6 z-10 flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-[14px] bg-[#EEE6F4]">
          <ClaudeSloth size={22} variant="heart" />
        </div>
        <div className="text-xs font-semibold text-[#2A103F]">
          its_neluska · <span className="font-normal">2h</span>
        </div>
        <div className="ml-auto text-sm text-[#2A103F]">✕</div>
      </div>

      <div className="absolute left-[18px] top-[60px] font-mono text-[9px] tracking-[0.24em] text-[#4E3464]">
        ★ 20.04.26 · MONDAY
      </div>
      <div className="h-display absolute left-[18px] right-[18px] top-[110px] text-[44px] leading-[0.9] text-[#2A103F]">
        good
        <br />
        morning
        <br />
        friends
      </div>
      <div className="absolute left-[18px] right-[18px] top-[290px] font-script text-[28px] leading-none text-[#8E5C72]">
        coffee first ·
        <br />
        then chaos
      </div>

      <div className="absolute bottom-[70px] right-[14px]">
        <ClaudeSloth size={76} variant="camping" />
      </div>

      <div className="absolute bottom-4 left-3 right-3 flex items-center gap-2">
        <div className="flex h-9 flex-1 items-center rounded-[18px] border border-[rgba(42,16,63,0.3)] px-[14px] text-xs text-[rgba(42,16,63,0.6)]">
          Reply to neluska...
        </div>
        <span className="text-[22px] text-[#2A103F]">♡</span>
        <span className="-rotate-[30deg] text-[22px] text-[#2A103F]">➤</span>
      </div>
    </div>
  );
}
