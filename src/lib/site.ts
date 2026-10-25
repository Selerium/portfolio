const rawSiteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://selerium.github.io";

export const siteUrl = rawSiteUrl.replace(/\/+$/, "");
export const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(
  /\/+$/,
  ""
);

export const siteName = "Adi — Full-Stack Developer";
export const siteTitle =
  "Full-Stack Developer relocating to London | Adi";
export const siteDescription =
  "Full-stack developer specialising in React, Next.js, TypeScript, Node.js, PostgreSQL and Docker. Relocating to London and open to software engineering roles across the UK.";

export const person = {
  name: "John Adithya",
  alternateName: "Adi",
  jobTitle: "Full-Stack Developer",
  email: "johnadithya008@gmail.com",
  description:
    "Full-stack developer building production web applications with React, Next.js, TypeScript, Node.js, PostgreSQL and Docker. Relocating to London and available for software engineering roles across the UK.",
  sameAs: [
    "https://github.com/selerium",
    "https://linkedin.com/in/johnadi",
  ],
  knowsAbout: [
    "Full-stack development",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MySQL",
    "Docker",
    "Nginx",
    "Python",
    "Golang",
    "C",
    "C++",
    "Vue",
    "Angular",
    "Django",
    "Fastify",
    "AWS",
  ],
};

export function absoluteUrl(pathname = "/") {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${siteUrl}${basePath}${path}`;
}

export function projectUrl(slug: string) {
  return absoluteUrl(`/projects/${slug}/`);
}
