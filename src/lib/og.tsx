import { readFileSync } from "node:fs";
import { join } from "node:path";

import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

type Accent = "purple" | "rose" | "yellow" | "twitch";

interface AccentTheme {
  from: string;
  to: string;
  ink: string;
  soft: string;
  washi: [string, string, string];
}

// Hex mirror of tokens.css (satori can't read CSS variables).
const ACCENTS: Record<Accent, AccentTheme> = {
  purple: {
    from: "#EEE6F4",
    to: "#DCCDE8",
    ink: "#2A103F",
    soft: "#6D4E82",
    washi: ["#D8A6B8", "#BCA3CC", "#FCEB86"],
  },
  rose: {
    from: "#F6E8EE",
    to: "#EACFDA",
    ink: "#2A103F",
    soft: "#8E5C72",
    washi: ["#D8A6B8", "#BCA3CC", "#FCEB86"],
  },
  yellow: {
    from: "#FFF7DA",
    to: "#FFF0B2",
    ink: "#2A103F",
    soft: "#6D4E82",
    washi: ["#D8A6B8", "#BCA3CC", "#FCEB86"],
  },
  twitch: {
    from: "#2D1B4E",
    to: "#1F1238",
    ink: "#FFF2A3",
    soft: "#DCC9E8",
    washi: ["#F5E574", "#DCC9E8", "#F4A8C0"],
  },
};

// ── Asset loading (module-scope cache) ─────────────────────────────────────
const fontDir = join(process.cwd(), "src/fonts");

function loadFont(file: string): Buffer {
  return readFileSync(join(fontDir, file));
}

const blanka = loadFont("Blanka-Regular.woff");
const agrandir = loadFont("Agrandir-Bold.woff");

function slothDataUri(variant: string): string | null {
  try {
    const svg = readFileSync(
      join(process.cwd(), "public/assets/sloths/svg", `${variant}.svg`),
    );
    return `data:image/svg+xml;base64,${svg.toString("base64")}`;
  } catch {
    return null;
  }
}

interface OgCardOptions {
  eyebrow: string;
  title: string;
  accent?: Accent;
  /** filename (no extension) under public/assets/sloths/svg */
  sloth?: string;
}

export function renderOgCard({
  eyebrow,
  title,
  accent = "purple",
  sloth = "sloth-hearts",
}: OgCardOptions): ImageResponse {
  const t = ACCENTS[accent];
  const slothSrc = slothDataUri(sloth);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: `linear-gradient(135deg, ${t.from} 0%, ${t.to} 100%)`,
          fontFamily: "Agrandir",
          position: "relative",
        }}
      >
        {/* Washi stripe, top-left, rotated */}
        <div
          style={{
            position: "absolute",
            top: 40,
            left: -40,
            width: 320,
            height: 30,
            transform: "rotate(-8deg)",
            display: "flex",
          }}
        >
          <div style={{ flex: 1, background: t.washi[0] }} />
          <div style={{ flex: 1, background: t.washi[1] }} />
          <div style={{ flex: 1, background: t.washi[2] }} />
        </div>

        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            fontSize: 26,
            letterSpacing: 6,
            textTransform: "uppercase",
            color: t.soft,
          }}
        >
          {eyebrow}
        </div>

        {/* Title */}
        <div
          style={{
            display: "flex",
            fontFamily: "Blanka",
            fontSize: 104,
            lineHeight: 1,
            textTransform: "uppercase",
            color: t.ink,
            maxWidth: 760,
          }}
        >
          {title}
        </div>

        {/* Footer row: wordmark + sloth */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 30,
              letterSpacing: 4,
              textTransform: "uppercase",
              color: t.soft,
            }}
          >
            neluska.dev · soft nerd princess
          </div>
          {slothSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={slothSrc}
              width={210}
              height={118}
              alt=""
              style={{
                position: "absolute",
                right: 56,
                bottom: 48,
                borderRadius: 18,
              }}
            />
          ) : null}
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: [
        { name: "Blanka", data: blanka, weight: 400, style: "normal" },
        { name: "Agrandir", data: agrandir, weight: 700, style: "normal" },
      ],
    },
  );
}
