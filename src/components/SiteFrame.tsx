import type { ReactNode } from "react";

import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WaveBg } from "@/components/WaveBg";

interface SiteFrameProps {
  children: ReactNode;
  bg?: "paper" | "lavender";
}

export function SiteFrame({ children, bg = "paper" }: SiteFrameProps) {
  const pageBg = bg === "lavender" ? "bg-[var(--tw-lav)]" : "bg-[var(--paper)]";

  return (
    <div className={`min-h-screen overflow-x-hidden ${pageBg}`}>
      <WaveBg position="both" opacity={0.45} />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-content flex-col gap-8 px-4 pb-10 pt-6 sm:px-6 lg:px-8">
        <SiteHeader />
        <main className="flex flex-1 flex-col gap-8">{children}</main>
        <SiteFooter />
      </div>
    </div>
  );
}
