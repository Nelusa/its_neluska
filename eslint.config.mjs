import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

const archiveGlobs = ["public/brand-archive/**", "references/**"];
const config = [
  {
    ignores: [".next/**", "node_modules/**", ...archiveGlobs],
  },
  ...nextCoreWebVitals,
  ...nextTypescript,
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
