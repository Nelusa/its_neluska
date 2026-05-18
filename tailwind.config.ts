import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "brand-purple": {
          50: "var(--pp-50)",
          100: "var(--pp-100)",
          200: "var(--pp-200)",
          300: "var(--pp-300)",
          400: "var(--pp-400)",
          500: "var(--pp-500)",
          600: "var(--pp-600)",
          700: "var(--pp-700)",
        },
        "brand-yellow": {
          50: "var(--py-50)",
          100: "var(--py-100)",
          200: "var(--py-200)",
          300: "var(--py-300)",
          400: "var(--py-400)",
          500: "var(--py-500)",
          600: "var(--py-600)",
          text: "var(--py-text)",
        },
        "brand-rose": {
          50: "var(--dr-50)",
          100: "var(--dr-100)",
          200: "var(--dr-200)",
          300: "var(--dr-300)",
          400: "var(--dr-400)",
          500: "var(--dr-500)",
        },
        "brand-pink": {
          50: "var(--mp-50)",
          100: "var(--mp-100)",
          200: "var(--mp-200)",
          300: "var(--mp-300)",
          400: "var(--mp-400)",
        },
        brand: {
          twitch: {
            deep: "var(--tw-deep)",
            "deep-2": "var(--tw-deep-2)",
            purple: "var(--tw-purple)",
            lav: "var(--tw-lav)",
            butter: "var(--tw-butter)",
            heart: "var(--tw-heart)",
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
