import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FFFDF2",
        ink: "#1A1625",
        "tw-lav": "#E0C8F0",
        "tw-purple": "#2A103F",
        "tw-butter": "#F5E574",
        "tw-heart": "#F4A8C0",
        "py-text": "#FFF2A3",
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
