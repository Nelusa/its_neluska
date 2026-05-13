import type { Metadata } from "next";
import Link from "next/link";

import { TwitchPanelPreview } from "@/components/brand/TwitchPanelPreview";
import { LinkCard } from "@/components/LinkCard";
import { Section } from "@/components/Section";
import { SiteFrame } from "@/components/SiteFrame";
import { twitchPanels } from "@/app/brand/sections/data";

export const metadata: Metadata = {
  title: "twitch panels",
};

export default function TwitchPanelsPage() {
  return (
    <SiteFrame bg="paper">
      <section className="rounded-[32px] border border-[rgba(78,52,100,0.1)] bg-[rgba(255,253,242,0.88)] p-6 shadow-[var(--sh-lg)] sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/brand"
            className="inline-flex items-center rounded-full bg-[var(--pp-100)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--pp-700)] transition hover:bg-[var(--pp-200)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pp-400)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
          >
            back to brand kit
          </Link>
          <span className="pill">component-based panel guide</span>
        </div>

        <h1 className="mt-6 text-[clamp(2.5rem,7vw,5.5rem)] uppercase leading-[0.9] text-[var(--pp-700)]">
          Twitch panels
        </h1>
        <p className="mt-3 font-script text-4xl text-[var(--dr-400)] sm:text-5xl">
          six useful little blocks
        </p>
        <p className="mt-6 max-w-3xl text-base leading-7 text-[var(--ink-soft)] sm:text-lg">
          This is now a real Next page too. The visual previews below are built
          from React components, so future copy or style edits live in the app
          instead of a separate static HTML file.
        </p>
      </section>

      <Section label="✦ preview" title="the six panels" bg="lavender">
        <div className="grid gap-4 xl:grid-cols-2">
          {twitchPanels.map((panel) => (
            <TwitchPanelPreview key={panel.slug} panel={panel} />
          ))}
        </div>
      </Section>

      <Section label="♡ practical" title="how to use them" bg="paper">
        <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[28px] border border-[rgba(78,52,100,0.1)] bg-[rgba(255,253,242,0.92)] p-6 shadow-[var(--sh-sm)]">
            <p className="eyebrow">export notes</p>
            <div className="mt-4 space-y-4 text-sm leading-6 text-[var(--ink-soft)]">
              <p>
                Each panel is designed as a distinct concept block: about,
                schedule, rules, setup, socials, support.
              </p>
              <p>
                If you want final PNG exports later, the cleanest next step is
                to either render these component previews to images or add a
                small export endpoint. Right now this page works as the canonical
                visual reference.
              </p>
              <p>
                The order still stays the same: about → schedule → rules →
                setup → socials → support.
              </p>
            </div>
          </article>

          <div className="grid gap-4">
            <LinkCard
              href="/brand"
              label="back to brand kit"
              sublabel="voice, modes, palette, and the bigger strategic system"
              icon={<span aria-hidden="true">✦</span>}
              external={false}
            />
            <LinkCard
              href="/media"
              label="open media route"
              sublabel="the lighter protected route for links and partner sharing"
              icon={<span aria-hidden="true">☻</span>}
              external={false}
            />
          </div>
        </div>
      </Section>
    </SiteFrame>
  );
}
