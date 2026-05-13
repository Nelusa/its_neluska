import { access, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const projectDir = process.cwd();
const distDir = path.join(projectDir, ".next");
const buildIdPath = path.join(distDir, "BUILD_ID");
const manifestPath = path.join(distDir, "required-server-files.json");

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function collectFiles() {
  const candidates = [
    "app-build-manifest.json",
    "build-manifest.json",
    "prerender-manifest.json",
    "react-loadable-manifest.json",
    "routes-manifest.json",
    "server/app-paths-manifest.json",
    "server/middleware-build-manifest.js",
    "server/middleware-manifest.json",
    "server/middleware-react-loadable-manifest.js",
    "server/next-font-manifest.js",
    "server/next-font-manifest.json",
    "server/pages-manifest.json",
    "server/server-reference-manifest.js",
    "server/server-reference-manifest.json",
    "BUILD_ID",
    "required-server-files.json",
  ];

  const existing = [];

  for (const relativePath of candidates) {
    if (await exists(path.join(distDir, relativePath))) {
      existing.push(path.posix.join(".next", relativePath));
    }
  }

  return existing;
}

async function ensureBuildId() {
  if (await exists(buildIdPath)) return;
  const buildId = `neluska-${Date.now()}`;
  await writeFile(buildIdPath, `${buildId}\n`, "utf8");
}

async function ensureRequiredServerFiles() {
  if (await exists(manifestPath)) return;

  const staticDirEntries = await readdir(path.join(distDir, "static")).catch(() => []);
  const files = await collectFiles();

  const manifest = {
    version: 1,
    config: {
      distDir: ".next",
      assetPrefix: "",
      basePath: "",
      trailingSlash: false,
      cleanDistDir: true,
      compress: true,
      pageExtensions: ["tsx", "ts", "jsx", "js"],
      images: {
        unoptimized: false,
      },
      experimental: {
        cacheHandlers: {},
        isExperimentalCompile: false,
        trustHostHeader: false,
      },
    },
    appDir: projectDir,
    relativeAppDir: "",
    files: [
      ...files,
      ...staticDirEntries.map((entry) => path.posix.join(".next", "static", entry)),
    ],
    ignore: [],
  };

  await writeFile(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
}

await ensureBuildId();
await ensureRequiredServerFiles();
