import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === 'true';

const nextConfig: NextConfig = {
  basePath: isGithubPages ? '/your-repo-name' : '',
  assetPrefix: isGithubPages ? '/your-repo-name/' : '',
};

export default nextConfig;
