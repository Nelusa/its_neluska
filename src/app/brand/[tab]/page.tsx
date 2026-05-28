import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BrandKitPage from "../BrandKitPage";

const VALID_TABS = new Set(["me", "look", "post", "live", "grow", "safe"]);

export const metadata: Metadata = {
  title: "brand",
  robots: { index: false, follow: false },
};

export function generateStaticParams() {
  return Array.from(VALID_TABS).map((tab) => ({ tab }));
}

export default async function BrandTabPage({
  params,
}: {
  params: Promise<{ tab: string }>;
}) {
  const { tab } = await params;
  if (!VALID_TABS.has(tab)) notFound();
  return <BrandKitPage />;
}
