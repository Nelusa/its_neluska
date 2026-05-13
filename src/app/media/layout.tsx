import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
  title: "media",
};

export default function MediaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
