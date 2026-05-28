"use client";

import { useEffect, useRef, useState } from "react";

import { ClaudeSloth, Sparkle, Washi } from "../sections/primitives";

const STORAGE_KEY = "neluska-journal-opened";

interface JournalCoverProps {
  onOpen: () => void;
}

export default function JournalCover({ onOpen }: JournalCoverProps) {
  const [show, setShow] = useState<boolean | null>(null);
  const [opening, setOpening] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const opened = window.localStorage.getItem(STORAGE_KEY);
      if (opened) {
        setShow(false);
        onOpen();
        return;
      }
    } catch {
      // ignore
    }
    setShow(true);
  }, [onOpen]);

  if (show !== true) return null;

  const handleOpen = () => {
    if (opening) return;
    setOpening(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // ignore
    }
    const el = ref.current;
    const finish = () => {
      setShow(false);
      onOpen();
    };
    if (!el) {
      window.setTimeout(finish, 520);
      return;
    }
    const onEnd = () => {
      el.removeEventListener("transitionend", onEnd);
      finish();
    };
    el.addEventListener("transitionend", onEnd);
    // fallback in case transitionend never fires
    window.setTimeout(finish, 700);
  };

  return (
    <button
      type="button"
      onClick={handleOpen}
      aria-label="Open journal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-paper p-6"
      style={{ background: "var(--paper)" }}
    >
      <div
        ref={ref}
        className="journal-cover relative flex h-[min(640px,85vh)] w-[min(440px,90vw)] flex-col items-center justify-center overflow-hidden rounded-[28px] px-8 py-10"
        data-opening={opening ? "true" : "false"}
        style={{
          background: "var(--paper)",
          border: "1px solid var(--line)",
          boxShadow: "var(--sh-lg)",
        }}
      >
        <Washi
          color="var(--brand-yellow-300)"
          rotate={-12}
          width={180}
          style={{ top: 18, left: -30 }}
        />
        <Sparkle
          size={22}
          color="var(--brand-yellow-400)"
          className="float-slow pointer-events-none absolute right-6 top-10"
        />
        <Sparkle
          size={14}
          color="var(--brand-purple-400)"
          className="float-fast pointer-events-none absolute left-8 top-24"
        />
        <Sparkle
          size={18}
          color="var(--brand-rose-300)"
          className="float-slow pointer-events-none absolute right-12 bottom-32"
        />

        <div
          className="text-center"
          style={{
            fontFamily: "var(--ff-script)",
            fontSize: "clamp(36px, 9vw, 56px)",
            color: "var(--brand-purple-500)",
            lineHeight: 1,
          }}
        >
          its_neluska
        </div>

        <div
          className="h-display mt-10"
          style={{
            fontSize: "clamp(36px, 8vw, 56px)",
            color: "var(--brand-purple-700)",
            textAlign: "center",
          }}
        >
          brand
          <br />
          kit
        </div>

        <div className="mt-8 font-mono text-[11px] uppercase tracking-[0.22em] text-ink-soft">
          2026 · soft nerd princess
        </div>

        <div className="mt-10 font-mono text-[10px] uppercase tracking-[0.18em] text-brand-purple-400">
          ↳ tap to open
        </div>

        <div
          className="absolute bottom-4 right-4"
          style={{ transform: "rotate(-8deg)" }}
          aria-hidden="true"
        >
          <ClaudeSloth size={160} variant="heart" />
        </div>
      </div>
    </button>
  );
}
