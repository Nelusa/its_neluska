import { cn } from "@/lib/cn";

interface HalftoneBeamProps {
  className?: string;
}

export function HalftoneBeam({ className = "" }: HalftoneBeamProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none halftone-beam", className)}
    />
  );
}
