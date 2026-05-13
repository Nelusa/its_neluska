import type { Metadata } from "next";

import BrandKitPage from "./BrandKitPage";

export const metadata: Metadata = {
  title: "brand",
  robots: {
    index: false,
    follow: false,
  },
};

export default function BrandPage() {
  return <BrandKitPage />;
}
