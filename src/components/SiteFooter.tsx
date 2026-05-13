import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(78,52,100,0.12)] pt-6">
      <p className="text-center font-script text-3xl text-[var(--pp-600)]">
        thanks for hanging with this sloth ♡
      </p>
      <p className="mt-3 text-center font-mono text-[10px] uppercase tracking-[0.24em] text-[var(--pp-500)]">
        © 2026 neluska.dev · made with ♡ and slothenergy
      </p>
      <div className="mt-4 flex items-center justify-center gap-2 text-center">
        <Link
          href="/brand"
          className="inline-flex min-h-8 items-center rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--pp-500)] opacity-35 transition duration-200 hover:bg-[var(--paper-2)] hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pp-400)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
        >
          quiet corner: brand
        </Link>
        <Link
          href="/media"
          className="inline-flex min-h-8 items-center rounded-full px-3 py-1 font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--pp-500)] opacity-35 transition duration-200 hover:bg-[var(--paper-2)] hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--pp-400)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)]"
        >
          quiet corner: media
        </Link>
      </div>
    </footer>
  );
}
