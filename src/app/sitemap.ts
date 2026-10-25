import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { absoluteUrl, projectUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: absoluteUrl("/projects/"),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: absoluteUrl("/connect/"),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: projectUrl(project.slug),
    changeFrequency: "yearly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...projectRoutes];
}
