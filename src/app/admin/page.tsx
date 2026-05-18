import { SiteFrame } from "@/components/SiteFrame";

export default function AdminPage() {
  return (
    <SiteFrame bg="paper">
      <section className="max-w-3xl rounded-[32px] border border-[rgba(78,52,100,0.12)] bg-paper-2 p-8 shadow-sh-lg">
        <p className="eyebrow">owner-only</p>
        <h1 className="mt-3 text-5xl uppercase leading-[0.9] text-brand-purple-700 sm:text-6xl">
          owner tools
        </h1>
        <p className="mt-4 text-base leading-7 text-ink-soft sm:text-lg">
          Protected space for future internal tools and content management.
          Keeping this route private now means phase two can land cleanly.
        </p>
      </section>
    </SiteFrame>
  );
}
