"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

type TocItem = {
  id: string;
  index: string;
  label: string;
};

const tocItems: TocItem[] = [
  { id: "voice", index: "01", label: "voice" },
  { id: "colors", index: "02", label: "colors" },
  { id: "type", index: "03", label: "type" },
  { id: "motifs", index: "04", label: "motifs" },
  { id: "modes", index: "05", label: "modes" },
  { id: "ig-real", index: "06", label: "mockup" },
  { id: "posts", index: "07", label: "posts" },
  { id: "feed", index: "08", label: "feed" },
  { id: "stories", index: "09", label: "stories" },
  { id: "highlights", index: "10", label: "highlights" },
  { id: "reels", index: "11", label: "reel covers" },
  { id: "reelscripts", index: "12", label: "reel scripts" },
  { id: "strategy", index: "13", label: "pillars" },
  { id: "rhythm", index: "14", label: "rhythm" },
  { id: "daily-workflow", index: "15", label: "daily hour" },
  { id: "calendar", index: "16", label: "calendar" },
  { id: "launch", index: "17", label: "launch" },
  { id: "realphoto", index: "18", label: "photo" },
  { id: "hooks", index: "19", label: "hooks" },
  { id: "twitch", index: "20", label: "twitch" },
  { id: "slothpack", index: "21", label: "sloths" },
  { id: "kpis", index: "22", label: "KPIs" },
  { id: "crisis", index: "23", label: "crisis" },
  { id: "collabs", index: "24", label: "collabs" },
  { id: "monetize", index: "25", label: "money" },
  { id: "calritual", index: "26", label: "calendar" },
  { id: "community", index: "27", label: "rituals" },
  { id: "privacy", index: "28", label: "privacy" },
];

export default function BrandKitChrome() {
  const [activeId, setActiveId] = useState("");
  const [showBackTop, setShowBackTop] = useState(false);

  useEffect(() => {
    const update = () => {
      const viewportY = window.scrollY + 120;
      let current = "";

      tocItems.forEach((item) => {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= viewportY) {
          current = item.id;
        }
      });

      setActiveId(current);
      setShowBackTop(window.scrollY > 600);
    };

    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <>
      <aside
        className="fixed left-5 top-1/2 z-40 hidden max-h-[80vh] w-[180px] -translate-y-1/2 overflow-y-auto rounded-[14px] border border-line bg-[rgba(255,253,246,0.85)] p-[14px_10px] font-mono text-[10.5px] tracking-[0.08em] shadow-sh-sm backdrop-blur-[12px] min-[1401px]:block"
        aria-label="Brand kit sections"
      >
        <div className="mb-2 pl-1.5 text-[9px] uppercase tracking-[0.2em] text-brand-purple-500">
          Brand Kit · 28
        </div>
        {tocItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "mb-px block rounded-md px-2 py-1 leading-[1.35] text-ink-soft no-underline transition hover:bg-brand-purple-50 hover:text-brand-purple-700",
              activeId === item.id && "bg-brand-purple-100 text-brand-purple-700",
            )}
          >
            <small className="mr-1 text-[9px] tracking-[0.14em] text-brand-purple-400">
              {item.index}
            </small>
            {item.label}
          </a>
        ))}
        <div className="mt-2.5 border-t border-dashed border-line pt-2">
          <Link
            href="/"
            className="mb-px block rounded-md px-2 py-1 leading-[1.35] text-brand-purple-600 no-underline transition hover:bg-brand-purple-50"
          >
            ↗ live site
          </Link>
        </div>
      </aside>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={cn(
          "fixed bottom-5 left-5 z-40 hidden h-11 w-11 items-center justify-center rounded-full border-0 bg-brand-purple-500 text-base text-[#fff9d8] shadow-sh-md transition-opacity hover:bg-brand-purple-600 min-[1401px]:flex",
          showBackTop
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
        )}
      >
        ↑
      </button>
    </>
  );
}
