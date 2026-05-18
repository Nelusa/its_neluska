import Link from "next/link";

import { SiteFrame } from "@/components/SiteFrame";

export default function NotFound() {
  return (
    <SiteFrame bg="paper">
      <section className="max-w-2xl rounded-[32px] border border-[rgba(78,52,100,0.12)] bg-paper-2 p-8 shadow-sh-lg">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-5xl uppercase leading-[0.9] text-brand-purple-700 sm:text-6xl">
          this page wandered off 🦥
        </h1>
        <p className="mt-4 text-base leading-7 text-ink-soft sm:text-lg">
          try the home
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(78,52,100,0.12)] bg-paper px-5 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-purple-700 shadow-sh-sm transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-paper-2"
        >
          back to home
        </Link>
      </section>
    </SiteFrame>
  );
}
