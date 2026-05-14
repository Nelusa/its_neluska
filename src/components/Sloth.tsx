import Image from "next/image";

import { cn } from "@/lib/cn";

export type SlothVariant =
  | "balloons"
  | "peek"
  | "heart"
  | "coffee"
  | "code"
  | "zzz"
  | "princess"
  | "banana"
  | "camping"
  | "doodle"
  | "gaming"
  | "glasses"
  | "legoPurple"
  | "legoYellow"
  | "painting"
  | "puzzles"
  | "singing"
  | "writing";

export interface SlothProps {
  variant?: SlothVariant;
  size?: number;
  rotate?: number;
  className?: string;
}

const SLOTH_SRC: Record<SlothVariant, string> = {
  // TODO: user will provide sloth-balloons.svg etc.
  balloons: "/assets/sloths/svg/sloth-hearts.svg",
  // TODO: user will provide sloth-peek.svg etc.
  peek: "/assets/sloths/svg/sloth-doodle.svg",
  heart: "/assets/sloths/svg/sloth-hearts.svg",
  // TODO: user will provide sloth-coffee.svg etc.
  coffee: "/assets/sloths/svg/sloth-camping.svg",
  code: "/assets/sloths/svg/sloth-laptop.svg",
  zzz: "/assets/sloths/svg/sloth-sleeping.svg",
  princess: "/assets/sloths/svg/sloth-dress.svg",
  banana: "/assets/sloths/svg/sloth-banana.svg",
  camping: "/assets/sloths/svg/sloth-camping.svg",
  doodle: "/assets/sloths/svg/sloth-doodle.svg",
  gaming: "/assets/sloths/svg/sloth-gaming.svg",
  glasses: "/assets/sloths/svg/sloth-glasses.svg",
  legoPurple: "/assets/sloths/svg/sloth-lego-purple.svg",
  legoYellow: "/assets/sloths/svg/sloth-lego-yellow.svg",
  painting: "/assets/sloths/svg/sloth-painting.svg",
  puzzles: "/assets/sloths/svg/sloth-puzzles.svg",
  singing: "/assets/sloths/svg/sloth-singing.svg",
  writing: "/assets/sloths/svg/sloth-writing.svg",
};

export function Sloth({
  variant = "balloons",
  size = 120,
  rotate = 0,
  className = "",
}: SlothProps) {
  return (
    <div
      className={cn("relative shrink-0", className)}
      style={{ width: size, height: size }}
    >
      <Image
        src={SLOTH_SRC[variant]}
        alt=""
        aria-hidden="true"
        width={size}
        height={size}
        unoptimized
        className="h-full w-full object-contain"
        style={{ transform: `rotate(${rotate}deg)` }}
      />
    </div>
  );
}
