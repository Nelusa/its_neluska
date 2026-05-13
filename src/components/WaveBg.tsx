import Image from "next/image";

export interface WaveBgProps {
  position?: "top-right" | "bottom-left" | "both";
  opacity?: number;
  flip?: boolean;
}

export function WaveBg({
  position = "both",
  opacity = 0.45,
  flip = false,
}: WaveBgProps) {
  const sharedTransform = flip ? "scaleX(-1)" : undefined;

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
      {(position === "bottom-left" || position === "both") && (
        <Image
          src="/assets/patterns/waves.png"
          alt=""
          width={600}
          height={480}
          className="absolute -bottom-10 -left-12 h-auto w-[55vw] max-w-[540px] object-contain"
          style={{ opacity, transform: sharedTransform }}
        />
      )}
      {(position === "top-right" || position === "both") && (
        <Image
          src="/assets/patterns/waves.png"
          alt=""
          width={600}
          height={480}
          className="absolute -right-10 -top-10 h-auto w-[45vw] max-w-[420px] object-contain"
          style={{ opacity, transform: "scaleX(-1)" }}
        />
      )}
    </div>
  );
}
