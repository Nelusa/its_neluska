import type { Metadata } from "next";

import { ProjectCard } from "@/components/ProjectCard";
import { SiteFrame } from "@/components/SiteFrame";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "work",
  description:
    "Frontend projects by Neluška — diploma thesis app, gallery websites, interactive invitations, and the brand kit you're looking at.",
};

export default function WorkPage() {
  return (
    <SiteFrame bg="paper">
      <section className="max-w-3xl">
        <p className="eyebrow">what I've built</p>
        <h1 className="mt-3 text-5xl uppercase leading-[0.9] text-brand-purple-700 sm:text-6xl">
          little things, lovingly made
        </h1>
        <p className="mt-4 font-script text-3xl text-brand-rose-400">
          frontend projects ♡
        </p>
        <p className="mt-4 max-w-2xl text-base leading-7 text-ink-soft sm:text-lg">
          A small collection of things I've shipped — diploma work, gifts for
          people I love, and the occasional birthday invitation that got out of
          hand. Each one is a little time capsule.
        </p>
      </section>

      <section
        aria-label="Project list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} index={index} />
        ))}
      </section>

      <section className="rounded-[28px] border border-[rgba(78,52,100,0.12)] bg-paper-2 p-6 shadow-sh-sm">
        <p className="text-sm leading-6 text-ink-soft">
          More smaller experiments and works-in-progress live on GitHub.{" "}
          <a
            href="https://github.com/Nelusa"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-brand-purple-700 underline decoration-[rgba(78,52,100,0.25)] underline-offset-4"
          >
            see all on github →
          </a>
        </p>
      </section>
    </SiteFrame>
  );
}
