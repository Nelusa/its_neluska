import { cn } from "@/lib/cn";

import { ClaudeSloth, type ClaudeSlothVariant } from "../sections/primitives";

export default function SlothSticker({
  variant,
  size = 60,
  rotate = -8,
  className,
}: {
  variant: ClaudeSlothVariant;
  size?: number;
  rotate?: number;
  className?: string;
}) {
  return (
    <div
      className={cn("pointer-events-none absolute opacity-40", className)}
      style={{ transform: `rotate(${rotate}deg)` }}
      aria-hidden="true"
    >
      <ClaudeSloth size={size} variant={variant} />
    </div>
  );
}
