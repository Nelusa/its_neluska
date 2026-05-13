import type { Metadata } from "next";
import Image from "next/image";

import { LinkCard } from "@/components/LinkCard";
import { Section } from "@/components/Section";
import { SiteFrame } from "@/components/SiteFrame";
import { Sloth } from "@/components/Sloth";

export const metadata: Metadata = {
  title: "about",
};

export default function AboutPage() {
  return (
    <SiteFrame bg="paper">
      <section className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="relative overflow-hidden rounded-[32px] border border-[rgba(78,52,100,0.12)] bg-[var(--paper-2)] p-4 shadow-[var(--sh-lg)]">
          <Image
            src="/assets/photos/cherry-blossom.jpg"
            alt="Neluska under cherry blossoms"
            width={3024}
            height={4032}
            className="h-auto w-full rounded-[24px] object-cover"
          />
          <div className="absolute bottom-8 left-8 rounded-full bg-[rgba(255,253,242,0.88)] px-4 py-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--pp-700)] backdrop-blur">
            Prague / CZ
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <p className="eyebrow">about me</p>
            <h1 className="mt-3 max-w-[12ch] text-5xl uppercase leading-[0.9] text-[var(--pp-700)] sm:text-6xl">
              a little more context
            </h1>
            <p className="mt-3 font-script text-3xl text-[var(--dr-400)]">
              soft, warm, a little dreamy
            </p>
          </div>

          <div className="space-y-4 text-base leading-7 text-[var(--ink-soft)]">
            <p>
              I&apos;m Neluska, a frontend dev and streamer from Prague who likes
              things a bit cozy, a bit weird, and very lovingly made. Think
              voice memo energy, not tech-bro energy.
            </p>
            <p>
              The nerd part is real: I like showing the work, the bug, and the
              tiny aha moment that made the whole thing click. If something
              breaks, it usually becomes part of the story instead of a reason
              to disappear.
            </p>
            <p>
              The soft part is real too: puzzles, flowers, balcony light, yoga,
              comfy game nights, and a very committed sloth collection. I&apos;m on
              a beginner LoL journey, which means there is joy, chaos, and no
              flaming allowed.
            </p>
            <p>
              Mostly I just like making corners of the internet feel kind,
              pretty messy, and quietly obsessed in the best way.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <LinkCard
              href="https://twitch.tv/its_neluska"
              label="watch live"
              sublabel="the cozy stream home base"
              icon={<span aria-hidden="true">▶</span>}
            />
            <LinkCard
              href="https://instagram.com/its_neluska"
              label="say hi on instagram"
              sublabel="daily life and reels"
              icon={<span aria-hidden="true">📷</span>}
            />
          </div>
        </div>
      </section>

      <Section label="✦ a bit more me" title="what that actually means" bg="lavender">
        <div className="grid gap-4 md:grid-cols-3">
          <article className="rounded-[28px] border border-[rgba(78,52,100,0.1)] bg-[var(--paper)] p-6 shadow-[var(--sh-md)]">
            <div className="mb-4">
              <Sloth variant="heart" size={84} className="ml-auto" />
            </div>
            <h2 className="text-2xl uppercase leading-[0.95] text-[var(--pp-700)]">
              sloths = brand language
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
              The sloths are not just cute decoration. They work like little
              reaction emojis for the whole visual identity: one mood, one
              sloth, one clear feeling.
            </p>
          </article>

          <article className="rounded-[28px] border border-[rgba(78,52,100,0.1)] bg-[var(--paper)] p-6 shadow-[var(--sh-md)]">
            <h2 className="text-2xl uppercase leading-[0.95] text-[var(--pp-700)]">
              puzzle brain is real
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
              I genuinely love puzzles and little problem-solving rituals. That
              same energy shows up in code too, just with a few more tabs open.
            </p>
          </article>

          <article className="rounded-[28px] border border-[rgba(78,52,100,0.1)] bg-[var(--paper)] p-6 shadow-[var(--sh-md)]">
            <h2 className="text-2xl uppercase leading-[0.95] text-[var(--pp-700)]">
              learning in public
            </h2>
            <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
              The LoL journey is still beginner territory, which is honestly
              part of the point. It makes the streams more human, more playful,
              and less perform-y.
            </p>
          </article>
        </div>
      </Section>

      <Section label="♡ contacts" title="the useful bits" bg="paper">
        <div className="grid gap-4 md:grid-cols-2">
          <article className="rounded-[28px] border border-[rgba(78,52,100,0.1)] bg-[var(--paper-2)] p-6 shadow-[var(--sh-md)]">
            <p className="eyebrow">business</p>
            <p className="mt-3 text-2xl uppercase leading-[0.95] text-[var(--pp-700)]">
              hi@neluska.dev
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
              For collabs, partnerships, and brand conversations.
            </p>
          </article>

          <article className="rounded-[28px] border border-[rgba(78,52,100,0.1)] bg-[var(--paper-2)] p-6 shadow-[var(--sh-md)]">
            <p className="eyebrow">general contact</p>
            <p className="mt-3 text-2xl uppercase leading-[0.95] text-[var(--pp-700)]">
              mail@neluska.dev
            </p>
            <p className="mt-3 text-sm leading-6 text-[var(--ink-soft)]">
              For everything else soft, nerdy, or in-between.
            </p>
          </article>
        </div>
      </Section>
    </SiteFrame>
  );
}
