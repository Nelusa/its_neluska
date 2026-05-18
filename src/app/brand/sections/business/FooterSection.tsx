import Link from "next/link";

export function FooterSection() {
  return (
    <footer className="border-t border-line bg-paper px-8 py-12 min-[760px]:px-16">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-4 text-center">
        <div className="eyebrow">28 · footer</div>
        <div className="font-script text-[40px] leading-none text-brand-purple-600">
          soft nerd princess, fully packed
        </div>
        <p className="mx-auto max-w-[760px] text-[15px] leading-[1.65] text-ink-soft">
          This kit is now the living version of the brand system: voice,
          templates, Twitch, safety, business, rituals, and the tiny details
          that make it feel like me.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          <Link
            href="/"
            className="nav-link bg-brand-purple-50 text-brand-purple-600"
          >
            ↗ live site
          </Link>
          <Link
            href="/media"
            className="nav-link bg-white text-brand-purple-600"
          >
            ↗ media
          </Link>
        </div>
      </div>
    </footer>
  );
}
