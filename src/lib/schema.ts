import type { Project } from "@/data/projects";
import {
  absoluteUrl,
  person,
  projectUrl,
  siteDescription,
  siteName,
} from "./site";

function personDetails() {
  return {
    "@type": "Person",
    name: person.name,
    alternateName: person.alternateName,
    jobTitle: person.jobTitle,
    description: person.description,
    url: absoluteUrl("/"),
    email: `mailto:${person.email}`,
    sameAs: person.sameAs,
    knowsAbout: person.knowsAbout,
    seeks: {
      "@type": "Demand",
      name: "Full-stack developer roles in London and the United Kingdom",
    },
  };
}

export function personSchema() {
  return {
    "@context": "https://schema.org",
    ...personDetails(),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    description: siteDescription,
    url: absoluteUrl("/"),
    inLanguage: "en-GB",
    author: personDetails(),
  };
}

export function profilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    name: `${person.name} — Full-Stack Developer`,
    description: siteDescription,
    url: absoluteUrl("/"),
    inLanguage: "en-GB",
    mainEntity: personDetails(),
  };
}

export function projectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: projectUrl(project.slug),
    image: absoluteUrl(project.image),
    keywords: project.tags.join(", "),
    inLanguage: "en-GB",
    author: personDetails(),
    creator: personDetails(),
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}
