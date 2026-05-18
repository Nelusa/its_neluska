import Link from "next/link";

import { LinkCard } from "@/components/LinkCard";
import { SiteFrame } from "@/components/SiteFrame";

export default function MediaPage() {
  return (
    <SiteFrame bg="paper">
      <section className="max-w-3xl rounded-[32px] border border-[rgba(78,52,100,0.12)] bg-paper-2 p-8 shadow-sh-lg">
        <p className="eyebrow">protected media space</p>
        <h1 className="mt-3 text-5xl uppercase leading-[0.9] text-brand-purple-700 sm:text-6xl">
          brand hello
        </h1>
        <p className="mt-4 text-base leading-7 text-ink-soft sm:text-lg">
          This space is for brand partners and media shares. Use the links below
          for the full visual system, Twitch assets, and direct contact.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2">
        <LinkCard
          href="/brand"
          label="open brand kit"
          sublabel="full protected React kit"
          icon={<span aria-hidden="true">✦</span>}
          external={false}
        />
        <LinkCard
          href="/twitch-panels"
          label="open twitch panels"
          sublabel="panel set and stream visuals"
          icon={<span aria-hidden="true">☻</span>}
          external={false}
        />
        <LinkCard
          href="mailto:hi@neluska.dev"
          label="hi@neluska.dev"
          sublabel="collabs and brand deals"
          icon={<span aria-hidden="true">✉</span>}
        />
        <LinkCard
          href="mailto:mail@neluska.dev"
          label="mail@neluska.dev"
          sublabel="general contact"
          icon={<span aria-hidden="true">♡</span>}
        />
      </div>

      <p className="max-w-2xl text-sm leading-6 text-ink-soft">
        Need a quick summary instead of the full kit? Start with the protected
        visual guide, then reach out directly and we can tailor the deck.{" "}
        <Link
          href="/brand"
          className="font-medium text-brand-purple-700 underline decoration-[rgba(78,52,100,0.25)] underline-offset-4"
        >
          Brand kit lives here
        </Link>
        .
      </p>
    </SiteFrame>
  );
}
