import type { Metadata } from "next";

import { ExperimentCard } from "@/components/ExperimentCard";
import { SiteFrame } from "@/components/SiteFrame";
import { experiments } from "@/lib/experiments";

export const metadata: Metadata = {
  title: "lab",
  description:
    "Frontend experiments by Neluška — 3D sketches, shaders, and other things I'm playing with.",
};

export default function LabPage() {
  return (
    <SiteFrame bg="paper">
      <section className="max-w-3xl">
        <p className="eyebrow">frontend experiments</p>
        <h1 className="mt-3 text-5xl uppercase leading-[0.9] text-brand-purple-700 sm:text-6xl">
          the lab
        </h1>
        <p className="mt-4 font-script text-3xl text-brand-rose-400">
          things I&apos;m playing with ✦
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
          Half-finished sketches, weekend shaders, and 3D experiments that may
          or may not become anything. Click through and poke around.
        </p>
      </section>

      <section
        aria-label="Experiments"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2"
      >
        {experiments.map((experiment, index) => (
          <ExperimentCard
            key={experiment.slug}
            experiment={experiment}
            index={index}
          />
        ))}
      </section>

      <section className="rounded-[28px] border border-[rgba(78,52,100,0.12)] bg-paper-2 p-6 shadow-sh-sm">
        <p className="text-sm leading-6 text-ink-soft">
          These are sketches, not products — bugs and rough edges expected.
          Built with three.js / react-three-fiber / raw GLSL. More on github.
        </p>
      </section>
    </SiteFrame>
  );
}
