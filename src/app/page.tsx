import type { Metadata } from "next";
import Image from "next/image";

import { HalftoneBeam } from "@/components/HalftoneBeam";
import { LinkCard } from "@/components/LinkCard";
import { Section } from "@/components/Section";
import { SiteFrame } from "@/components/SiteFrame";
import { SlothHero } from "@/components/SlothHero";
import { StatusPill } from "@/components/StatusPill";
import { getTwitchStatus } from "@/lib/twitch";

export const metadata: Metadata = {
  title: "home",
};

export const revalidate = 60;

export default async function HomePage() {
  const status = await getTwitchStatus();

  return (
    <SiteFrame bg="lavender">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div className="relative overflow-hidden rounded-[32px] border border-white/70 bg-[rgba(255,253,242,0.7)] p-6 shadow-[var(--sh-lg)] backdrop-blur sm:p-8">
          <HalftoneBeam className="absolute inset-y-0 right-0 w-1/2 opacity-60" />
          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <span className="pill">twitch streamer</span>
            <span className="pill">frontend dev</span>
            <span className="pill">cozy gamer</span>
            <span className="pill">soft nerd princess</span>
          </div>

          <div className="relative z-10 mt-6 flex flex-col gap-6">
            <div>
              <p className="eyebrow">main character energy</p>
              <h1 className="mt-3 max-w-full overflow-hidden text-[clamp(2rem,6vw,4.8rem)] uppercase leading-[0.88] text-[var(--pp-700)]">
                @its_neluska
              </h1>
              <p className="font-script text-3xl text-[var(--dr-400)] sm:text-4xl">
                soft nerd princess 🦥
              </p>
            </div>

            <p className="max-w-2xl text-base leading-7 text-[var(--ink-soft)] sm:text-lg">
              Soft, warm, a little dreamy. Cozy streams, frontend builds,
              puzzle brain moments, and a very committed sloth agenda.
            </p>

            <StatusPill status={status} />

            <div className="grid gap-3 sm:grid-cols-2">
              <LinkCard
                href="https://twitch.tv/its_neluska"
                label="watch live"
                sublabel={
                  status.isLive
                    ? status.title ?? "live now on Twitch"
                    : "offline — catch me next stream"
                }
                icon={<span aria-hidden="true">▶</span>}
                variant="primary"
              />
              <LinkCard
                href="/about"
                label="about me"
                sublabel="a longer soft-intro, photos, and fun facts"
                icon={<span aria-hidden="true">♡</span>}
                external={false}
              />
              <LinkCard
                href="https://instagram.com/its_neluska"
                label="say hi on instagram"
                sublabel="daily life, reels, little cozy things"
                icon={<span aria-hidden="true">📷</span>}
              />
              <LinkCard
                href="https://github.com/neluska"
                label="code on github"
                sublabel="react, typescript, svelte, three.js toys"
                icon={<span aria-hidden="true">&lt;/&gt;</span>}
              />
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -right-2 -top-8 hidden rotate-6 rounded-full bg-[var(--py-100)] px-5 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--pp-700)] shadow-[var(--sh-md)] sm:block">
            handmade with ♡
          </div>
          <div className="relative overflow-hidden rounded-[32px] border border-[rgba(78,52,100,0.12)] bg-[var(--paper)] p-4 shadow-[var(--sh-lg)]">
            <div className="relative overflow-hidden rounded-[24px] border border-[rgba(78,52,100,0.12)]">
              <Image
                src="/assets/photos/hero-flowers.jpg"
                alt="Neluska with flowers"
                width={1500}
                height={2000}
                priority
                className="aspect-[4/5] h-auto w-full object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 rounded-full bg-[rgba(255,253,242,0.88)] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--pp-700)] backdrop-blur">
                soft season, always
              </div>
            </div>
            <div className="relative mt-4 flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow">sloth approved</p>
                <p className="mt-2 max-w-[22ch] text-sm leading-6 text-[var(--ink-soft)]">
                  A tiny HQ for stream updates, comfy links, and the little
                  corners where code and cozy meet.
                </p>
              </div>
              <SlothHero />
            </div>
          </div>
        </div>
      </section>

      <Section
        label="✦ the main thing"
        title="where to find me"
        bg="paper"
      >
        <div className="grid gap-4 md:grid-cols-3">
          <LinkCard
            href="/schedule"
            label="stream schedule"
            sublabel="usually Tue / Thu / Sun, Prague timezone"
            icon={<span aria-hidden="true">☾</span>}
            external={false}
          />
          <LinkCard
            href="https://github.com/neluska"
            label="code experiments"
            sublabel="frontend builds, TypeScript, and little web toys"
            icon={<span aria-hidden="true">✦</span>}
          />
          <LinkCard
            href="/twitch-panels"
            label="twitch panels"
            sublabel="the full six-panel about set"
            icon={<span aria-hidden="true">☻</span>}
            external={false}
          />
        </div>
      </Section>

      <Section
        label="♡ right now"
        title="little current obsessions"
        bg="lavender"
      >
        <div className="grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="overflow-hidden rounded-[28px] border border-[rgba(78,52,100,0.1)] bg-[var(--paper)] shadow-[var(--sh-md)]">
            <div className="grid gap-0 md:grid-cols-[0.85fr_1.15fr]">
              <div className="relative min-h-64">
                <Image
                  src="/assets/photos/sloth-collection.jpg"
                  alt="A sloth collection on a bed"
                  width={3024}
                  height={4032}
                  className="h-full w-full object-cover object-[50%_58%]"
                />
              </div>
              <div className="p-6">
                <p className="eyebrow">funny mode</p>
                <h2 className="mt-3 text-3xl uppercase leading-[0.95] text-[var(--pp-700)]">
                  sloth collection tour
                </h2>
                <p className="mt-4 text-sm leading-6 text-[var(--ink-soft)] sm:text-base">
                  Quietly obsessed is the official mood. Sloth stickers,
                  puzzle pieces, and a small archive of cozy-chaotic desk
                  moments are carrying the season.
                </p>
              </div>
            </div>
          </article>

          <div className="grid gap-4">
            <article className="rounded-[28px] border border-[rgba(78,52,100,0.12)] bg-[var(--tw-purple)] p-6 text-white shadow-[var(--sh-md)]">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-[var(--tw-butter)]">
                nerd mode
              </p>
              <h2 className="mt-3 text-3xl uppercase leading-[0.95] text-[var(--tw-butter)]">
                quietly building
              </h2>
              <p className="mt-4 text-sm leading-6 text-[var(--tw-lav)]">
                React, TypeScript, Svelte, and future-three.js desk lore. The
                bug, the aha, the soft little deploy win.
              </p>
            </article>

            <article className="rounded-[28px] border border-[rgba(78,52,100,0.12)] bg-[var(--py-100)] p-6 shadow-[var(--sh-md)]">
              <p className="eyebrow">princess mode</p>
              <h2 className="mt-3 text-3xl uppercase leading-[0.95] text-[var(--pp-700)]">
                little rituals
              </h2>
              <p className="mt-4 text-sm leading-6 text-[var(--ink-soft)]">
                Coffee, balcony light, yoga mat magenta, puzzle-night energy,
                and the kind of cozy that makes debugging feel almost romantic.
              </p>
            </article>
          </div>
        </div>
      </Section>
    </SiteFrame>
  );
}
