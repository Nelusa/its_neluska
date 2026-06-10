import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import localFont from "next/font/local";

import { PrincessBoot } from "@/components/room/PrincessBoot";
import { SlothCompanion } from "@/components/SlothCompanion";
import { cn } from "@/lib/cn";
import "@/styles/globals.css";

const display = localFont({
  src: "../fonts/Blanka-Regular.woff",
  variable: "--font-display",
  display: "swap",
});

const body = localFont({
  src: [
    {
      path: "../fonts/Agrandir-Regular.woff",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Agrandir-Medium.woff",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Agrandir-Bold.woff",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-body",
  display: "swap",
});

const script = localFont({
  src: "../fonts/Moontime.woff",
  variable: "--font-script",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://neluska.dev"),
  title: {
    default: "neluska ♡ soft nerd princess",
    template: "%s · neluska.dev",
  },
  description:
    "Twitch streamer & frontend dev. Cozy gaming, aesthetic coding, sloth energy.",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["cs_CZ"],
    siteName: "neluska.dev",
    images: ["/og-image.png"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(display.variable, body.variable, script.variable)}
    >
      <body>
        <a href="#main" className="skip-link">
          skip to content
        </a>
        {children}
        <SlothCompanion />
        <PrincessBoot />
        <Analytics />
      </body>
    </html>
  );
}
