import type { NextConfig } from "next";

// GitHub Pages serves this as a project page at
// https://<user>.github.io/<repo>/, so the production build needs a
// matching basePath. Local dev and `vercel`-style hosts stay at "/".
const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
const basePath = isGithubActions && repoName ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  // Every route exports as route/index.html instead of route.html, so
  // GitHub Pages (which has no clean-URL rewriting) serves both /route
  // and /route/ correctly without any ambiguity.
  trailingSlash: true,
  images: {
    // Static export has no image-optimization server; Unsplash URLs are
    // already sized via lib/utils.ts, and local assets serve as-is.
    unoptimized: true,
  },
  env: {
    // next/image renders a plain <img> under unoptimized:true, which does
    // NOT auto-prefix local src strings with basePath — lib/utils.ts reads
    // this to prefix "/images/..." paths itself.
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
