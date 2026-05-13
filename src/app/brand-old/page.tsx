import type { Metadata } from "next";
import Image from "next/image";

import { ColorScale } from "@/components/brand/ColorScale";
import { ModeCard } from "@/components/brand/ModeCard";
import { RecipeCard } from "@/components/brand/RecipeCard";
import { TwitchPanelPreview } from "@/components/brand/TwitchPanelPreview";
import { LinkCard } from "@/components/LinkCard";
import { Section } from "@/components/Section";
import { SiteFrame } from "@/components/SiteFrame";
import { Sloth } from "@/components/Sloth";
import {
  avoidWords,
  brandModes,
  brandSignals,
  colorFamilies,
  deliverables,
  photoMoments,
  recipeCards,
  sayWords,
  twitchPanels,
  typeRoles,
  voicePoints,
  weeklyFlow,
} from "@/lib/brand-kit";

export const metadata: Metadata = {
  title: "brand old",
  robots: {
    index: false,
    follow: false,
  },
};

function HeroOrnament() {
  return (
    <div className="relative h-[320px] overflow-hidden rounded-[28px] border border-[rgba(78,52,100,0.08)] bg-[linear-gradient(160deg,rgba(220,205,232,0.85),rgba(255,253,242,0.95))] p-6 shadow-[var(--sh-lg)]">
      <div className="absolute right-6 top-6 w-[180px] rotate-6 rounded-[22px] bg-[linear-gradient(180deg,var(--pp-400),var(--pp-600))] p-5 text-[var(--py-text)] shadow-[var(--sh-lg)]">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-80">
          mantra
        </p>
        <p className="mt-8 text-3xl uppercase leading-[0.92]">
          being soft
          <br />
          is not weak
        </p>
      </div>

      <div className="absolute bottom-10 left-6 w-[210px] -rotate-6 rounded-[22px] bg-[var(--tw-purple)] p-5 text-[var(--py-text)] shadow-[var(--sh-lg)]">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[var(--tw-lav)]">
          stack
        </p>
        <div className="mt-4 space-y-1 font-mono text-sm leading-6">
          <div>$ whoami</div>
          <div>&gt; its_neluska</div>
          <div>&gt; dev by day</div>
          <div>&gt; sloth at heart</div>
        </div>
      </div>

      <Sloth
        variant="heart"
        size={120}
        className="absolute bottom-2 right-8 animate-bob"
      />
      <div className="absolute left-1/2 top-10 h-4 w-4 rounded-full bg-[var(--py-300)] opacity-80" />
      <div className="absolute left-[52%] top-16 h-2 w-2 rounded-full bg-[var(--pp-300)] opacity-80" />
      <div className="absolute right-20 top-28 h-3 w-3 rounded-full bg-[var(--py-300)] opacity-80" />
    </div>
  );
}

export default function BrandPage() {
  return (
    <SiteFrame bg="paper">
      <section className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr] xl:items-center">
        <div className="rounded-[32px] border border-[rgba(78,52,100,0.1)] bg-[rgba(255,253,242,0.88)] p-6 shadow-[var(--sh-lg)] sm:p-8">
          <p className="eyebrow">protected brand kit</p>
          <h1 className="mt-3 text-[clamp(2.6rem,7vw,5.8rem)] uppercase leading-[0.9] text-[var(--pp-700)]">
            Neluska
          </h1>
          <p className="mt-3 font-script text-4xl text-[var(--dr-400)] sm:text-5xl">
            soft nerd princess system
          </p>
          <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--ink-soft)] sm:text-lg">
            This is the component-based owner kit: voice, colors, typography,
            content rhythm, Twitch assets, and the practical pieces you actually
            need when editing or sharing the brand.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {brandSignals.map((signal) => (
              <span key={signal} className="pill">
                {signal}
              </span>
            ))}
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            <LinkCard
              href="/media"
              label="open media view"
              sublabel="the share-friendlier route for links and partner context"
              icon={<span aria-hidden="true">✦</span>}
              external={false}
            />
            <LinkCard
              href="/twitch-panels"
              label="open twitch panels"
              sublabel="component-based preview of the six info panels"
              icon={<span aria-hidden="true">☻</span>}
              external={false}
            />
          </div>
        </div>

        <HeroOrnament />
      </section>

      <Section label="✦ voice" title="how the brand sounds" bg="paper">
        <div className="grid gap-4 lg:grid-cols-4">
          {voicePoints.map((point) => (
            <article
              key={point.title}
              className="rounded-[24px] border border-[rgba(78,52,100,0.1)] bg-white p-5 shadow-[var(--sh-sm)]"
            >
              <p className="eyebrow">{point.title}</p>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                {point.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          <article className="rounded-[28px] bg-[var(--pp-50)] p-6 shadow-[var(--sh-sm)]">
            <p className="eyebrow">say this</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {sayWords.map((word) => (
                <span
                  key={word}
                  className="rounded-full bg-white px-3 py-2 text-sm text-[var(--pp-600)] shadow-[var(--sh-sm)]"
                >
                  {word}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-[28px] bg-[var(--dr-50)] p-6 shadow-[var(--sh-sm)]">
            <p className="eyebrow">skip this</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {avoidWords.map((word) => (
                <span
                  key={word}
                  className="rounded-full bg-white px-3 py-2 text-sm text-[var(--dr-400)] line-through decoration-[var(--dr-300)] shadow-[var(--sh-sm)]"
                >
                  {word}
                </span>
              ))}
            </div>
          </article>
        </div>
      </Section>

      <Section label="♡ visual system" title="palette and typography" bg="lavender">
        <div className="space-y-4">
          {colorFamilies.map((family) => (
            <ColorScale key={family.name} family={family} />
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {typeRoles.map((role) => (
            <article
              key={role.title}
              className="rounded-[28px] border border-[rgba(78,52,100,0.1)] bg-[rgba(255,253,242,0.94)] p-6 shadow-[var(--sh-sm)]"
            >
              <p className="eyebrow">
                {role.title} · {role.role}
              </p>
              <div
                className={[
                  "mt-4 text-[var(--pp-700)]",
                  role.role === "display" ? "text-5xl uppercase leading-[0.88]" : "",
                  role.role === "body" ? "font-body text-4xl font-medium leading-none" : "",
                  role.role === "script" ? "font-script text-5xl leading-none text-[var(--dr-400)]" : "",
                ].join(" ")}
              >
                {role.sample}
              </div>
              <p className="mt-4 text-sm leading-6 text-[var(--ink-soft)]">
                {role.note}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section label="✦ modes" title="three modes, one person" bg="paper">
        <div className="grid gap-4 xl:grid-cols-3">
          {brandModes.map((mode) => (
            <ModeCard key={mode.key} mode={mode} />
          ))}
        </div>
      </Section>

      <Section label="♡ content" title="nine reusable recipes" bg="lavender">
        <p className="max-w-3xl text-base leading-7 text-[var(--ink-soft)]">
          Instead of inventing a fresh visual language every time, rotate these
          recipe types. Same structure, different words. That keeps the feed
          recognizable without feeling repetitive.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {recipeCards.map((recipe) => (
            <RecipeCard key={`${recipe.mode}-${recipe.title}`} recipe={recipe} />
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-3 xl:grid-cols-6">
          {weeklyFlow.map((slot) => (
            <article
              key={`${slot.day}-${slot.title}`}
              className="rounded-[22px] border border-[rgba(78,52,100,0.1)] bg-white p-4 shadow-[var(--sh-sm)]"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--pp-500)]">
                {slot.day}
              </p>
              <h3 className="mt-3 text-xl uppercase leading-[0.95] text-[var(--pp-700)]">
                {slot.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
                {slot.note}
              </p>
            </article>
          ))}
        </div>
      </Section>

      <Section label="✦ assets" title="what already exists" bg="paper">
        <div className="grid gap-4 xl:grid-cols-[1.1fr_0.9fr]">
          <article className="rounded-[28px] border border-[rgba(78,52,100,0.1)] bg-[rgba(255,253,242,0.94)] p-6 shadow-[var(--sh-sm)]">
            <p className="eyebrow">photo library</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <div className="overflow-hidden rounded-[22px] border border-[rgba(78,52,100,0.08)]">
                <Image
                  src="/assets/photos/hero-flowers.jpg"
                  alt="Neluska with flowers"
                  width={1500}
                  height={2000}
                  className="aspect-[4/5] h-full w-full object-cover"
                />
              </div>
              <div className="grid gap-3">
                <div className="overflow-hidden rounded-[22px] border border-[rgba(78,52,100,0.08)]">
                  <Image
                    src="/assets/photos/cherry-blossom.jpg"
                    alt="Neluska under cherry blossoms"
                    width={3024}
                    height={4032}
                    className="aspect-[4/3] h-full w-full object-cover"
                  />
                </div>
                <div className="overflow-hidden rounded-[22px] border border-[rgba(78,52,100,0.08)]">
                  <Image
                    src="/assets/photos/sloth-collection.jpg"
                    alt="Sloth collection on a bed"
                    width={3024}
                    height={4032}
                    className="aspect-[4/3] h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {photoMoments.map((moment) => (
                <article
                  key={moment.title}
                  className="rounded-[20px] bg-[var(--paper-2)] p-4"
                >
                  <p className="eyebrow">{moment.title}</p>
                  <p className="mt-2 text-sm leading-6 text-[var(--ink-soft)]">
                    {moment.note}
                  </p>
                </article>
              ))}
            </div>
          </article>

          <article className="rounded-[28px] border border-[rgba(78,52,100,0.1)] bg-[rgba(255,253,242,0.94)] p-6 shadow-[var(--sh-sm)]">
            <p className="eyebrow">delivery checklist</p>
            <div className="mt-4 space-y-3">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="flex gap-3 rounded-[18px] bg-[var(--paper-2)] px-4 py-3 text-sm leading-6 text-[var(--ink-soft)]"
                >
                  <span className="mt-1 text-[var(--pp-500)]">✦</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-[22px] bg-[var(--tw-purple)] p-5 text-white">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[var(--tw-butter)]">
                route logic
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--tw-lav)]">
                `/brand` stays owner-protected, while `/media` remains the safer
                route for sharing links with collaborators. Same system, less
                internal clutter.
              </p>
            </div>
          </article>
        </div>
      </Section>

      <Section label="♡ Twitch" title="panel bundle overview" bg="lavender">
        <div className="grid gap-4 xl:grid-cols-2">
          {twitchPanels.map((panel) => (
            <TwitchPanelPreview key={panel.slug} panel={panel} />
          ))}
        </div>
      </Section>
    </SiteFrame>
  );
}
