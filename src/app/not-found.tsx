import Link from "next/link";

import { SiteFrame } from "@/components/SiteFrame";

export default function NotFound() {
  return (
    <SiteFrame bg="paper">
      <section className="max-w-2xl rounded-[32px] border border-[rgba(78,52,100,0.12)] bg-[var(--paper-2)] p-8 shadow-[var(--sh-lg)]">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-5xl uppercase leading-[0.9] text-[var(--pp-700)] sm:text-6xl">
          this page wandered off 🦥
        </h1>
        <p className="mt-4 text-base leading-7 text-[var(--ink-soft)] sm:text-lg">
          try the home
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(78,52,100,0.12)] bg-[var(--paper)] px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[var(--pp-700)] shadow-[var(--sh-sm)] transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pp-400)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper-2)]"
        >
          back to home
        </Link>
      </section>
    </SiteFrame>
  );
}
