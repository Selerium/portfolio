import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

console.log(`process.env.GITHUB_PAGES: ${isGithubPages}`);

const nextConfig: NextConfig = {
  basePath: isGithubPages ? '/portfolio' : '',
  assetPrefix: isGithubPages ? '/portfolio/' : '',
  output: "export",
  trailingSlash: true
};

export default nextConfig;
