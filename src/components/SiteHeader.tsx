import Link from "next/link";

const nav = [
  { href: "/", label: "home" },
  { href: "/about", label: "about" },
  { href: "/schedule", label: "schedule" },
];

export function SiteHeader() {
  return (
    <header className="rounded-full border border-[rgba(78,52,100,0.12)] bg-[rgba(255,253,242,0.82)] px-4 py-3 shadow-sh-sm backdrop-blur">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-3 self-start rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
        >
          <span className="font-display text-lg uppercase text-brand-purple-700 sm:text-xl">
            Neluska
          </span>
          <span className="font-script text-2xl text-brand-rose-400">
            soft nerd princess
          </span>
        </Link>

        <nav aria-label="Primary navigation">
          <ul className="flex flex-wrap gap-2">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-11 items-center rounded-full px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-brand-purple-700 transition-colors duration-200 hover:bg-paper-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-paper"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
