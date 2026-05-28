import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "brand-purple": {
          50: "var(--brand-purple-50)",
          100: "var(--brand-purple-100)",
          200: "var(--brand-purple-200)",
          300: "var(--brand-purple-300)",
          400: "var(--brand-purple-400)",
          500: "var(--brand-purple-500)",
          600: "var(--brand-purple-600)",
          700: "var(--brand-purple-700)",
        },
        "brand-yellow": {
          50: "var(--brand-yellow-50)",
          100: "var(--brand-yellow-100)",
          200: "var(--brand-yellow-200)",
          300: "var(--brand-yellow-300)",
          400: "var(--brand-yellow-400)",
          500: "var(--brand-yellow-500)",
          600: "var(--brand-yellow-600)",
          text: "var(--brand-yellow-text)",
        },
        "brand-rose": {
          50: "var(--brand-rose-50)",
          100: "var(--brand-rose-100)",
          200: "var(--brand-rose-200)",
          300: "var(--brand-rose-300)",
          400: "var(--brand-rose-400)",
          500: "var(--brand-rose-500)",
        },
        "brand-pink": {
          50: "var(--brand-pink-50)",
          100: "var(--brand-pink-100)",
          200: "var(--brand-pink-200)",
          300: "var(--brand-pink-300)",
          400: "var(--brand-pink-400)",
        },
        brand: {
          twitch: {
            deep: "var(--brand-twitch-deep)",
            "deep-2": "var(--brand-twitch-deep-2)",
            purple: "var(--brand-twitch-purple)",
            lav: "var(--brand-twitch-lav)",
            butter: "var(--brand-twitch-butter)",
            heart: "var(--brand-twitch-heart)",
          },
        },
        ink: {
          DEFAULT: "var(--ink)",
          soft: "var(--ink-soft)",
        },
        paper: {
          DEFAULT: "var(--paper)",
          2: "var(--paper-2)",
          3: "var(--paper-3)",
        },
        line: "var(--line)",
      },
      boxShadow: {
        "sh-sm": "var(--sh-sm)",
        "sh-md": "var(--sh-md)",
        "sh-lg": "var(--sh-lg)",
      },
      fontFamily: {
        display: "var(--ff-display)",
        body: "var(--ff-body)",
        script: "var(--ff-script)",
        mono: "var(--ff-mono)",
      },
      maxWidth: {
        content: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
