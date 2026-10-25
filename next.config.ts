import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: isGithubPages ? "export" : undefined,
  basePath: isGithubPages ? "/portfolio" : "",
  assetPrefix: isGithubPages ? "/portfolio/" : "",
  trailingSlash: true,
  images: {
    unoptimized: isGithubPages,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
