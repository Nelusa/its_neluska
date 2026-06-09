import type { Metadata } from "next";
import Link from "next/link";

import { RoomLanding } from "@/components/room/RoomLanding";

export const metadata: Metadata = {
  title: "cozy 3D room · lab",
  description:
    "An interactive R3F desk scene. Drag to look around — click objects to navigate.",
};

function RoomFallback() {
  return (
    <div
      className="flex min-h-[100svh] flex-col items-center justify-center gap-6 px-6 py-16 text-center"
      style={{
        background:
          "radial-gradient(circle at 60% 30%, var(--brand-purple-50), var(--brand-rose-50) 55%, var(--paper) 100%)",
      }}
    >
      <p className="eyebrow">experiment · lab</p>
      <h1
        className="h-display m-0 text-brand-purple-700"
        style={{ fontSize: "clamp(40px, 9vw, 72px)", lineHeight: 0.9 }}
      >
        cozy 3D room
      </h1>
      <p className="max-w-[30ch] text-[15px] leading-[1.5] text-ink-soft">
        The 3D scene needs a bigger screen + WebGL. Hop on a desktop to
        explore.
      </p>
      <Link
        href="/lab"
        className="rounded-full border border-brand-purple-200 bg-paper px-5 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-purple-700 shadow-sh-sm"
      >
        ← back to lab
      </Link>
    </div>
  );
}

export default function LabRoomPage() {
  return <RoomLanding fallback={<RoomFallback />} />;
}
