"use client";

import { usePathname } from "next/navigation";

/**
 * Next.js App Router template.tsx re-mounts its children on every navigation,
 * which retriggers CSS animations. `key={pathname}` makes sure the slide-in
 * animation fires even when navigating between sibling routes that share the
 * same layout.
 *
 * Inside /brand, the JournalLayout drives its own tab-switch animation via
 * `.journal-stage` — that's state-based, not route-based, so it doesn't
 * conflict with this wrapper.
 */
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-slide-in">
      {children}
    </div>
  );
}
