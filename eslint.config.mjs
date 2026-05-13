import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const archiveGlobs = ["public/brand-archive/**", "references/**"];
const config = [
  {
    ignores: [".next/**", "node_modules/**", ...archiveGlobs],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["src/app/brand/**/*.ts", "src/app/brand/**/*.tsx"],
    rules: {
      "@next/next/no-img-element": "off",
      "react/jsx-no-comment-textnodes": "off",
      "react/no-unescaped-entities": "off",
    },
  },
];

export default config;
