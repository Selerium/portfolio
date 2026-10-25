import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { primary, secondary } from "@/styles/fonts";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/scroll-reveal";
import JsonLd from "@/components/json-ld";
import { breadcrumbSchema } from "@/lib/schema";
import { absoluteUrl, basePath, projectUrl } from "@/lib/site";

const pageTitle = "Projects & Case Studies";
const pageDescription =
  "Full-stack, backend, systems and infrastructure case studies from Adi, a developer relocating to London and open to software engineering roles across the UK.";

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: absoluteUrl("/projects/") },
  openGraph: {
    url: absoluteUrl("/projects/"),
    title: `${pageTitle} | Adi`,
    description: pageDescription,
  },
  twitter: {
    title: `${pageTitle} | Adi`,
    description: pageDescription,
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: pageTitle,
  description: pageDescription,
  url: absoluteUrl("/projects/"),
  inLanguage: "en-GB",
  hasPart: projects.map((project) => ({
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: projectUrl(project.slug),
  })),
};

export default function Projects() {
  return (
    <div
      id="projects"
      className="min-h-dvh h-fit py-20 box-border w-full flex justify-center items-center overflow-x-clip relative z-0"
    >
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects/" },
          ]),
          collectionSchema,
        ]}
      />
      <ScrollReveal className="w-11/12 h-full flex flex-col gap-10">
        <div data-reveal className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-primary">
            selected work
          </p>
          <h1
            className={
              primary.className +
              " mt-3 text-4xl lg:text-6xl font-semibold tracking-tighter"
            }
          >
            projects &amp; case studies
          </h1>
          <p className="mt-4 text-lg font-light">
            A closer look at the products, systems, and engineering projects
            behind the work — ordered to surface the most relevant full-stack,
            backend, and infrastructure experience first.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 items-stretch">
          {projects.map((project) => (
            <article
              data-reveal
              key={project.slug}
              className="projectList relative border rounded-lg min-h-80 flex justify-center items-start overflow-clip group"
            >
              <Image
                className="object-cover project-images object-top z-10 opacity-40 transition-transform duration-500 group-hover:scale-105"
                src={basePath + project.image}
                alt={`${project.title} project preview`}
                fill
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 46vw, (max-width: 1280px) 30vw, 23vw"
              />
              <p
                className={
                  primary.className +
                  " m-auto font-semibold text-2xl uppercase text-center z-20 tracking-widest"
                }
              >
                {project.title}
              </p>
              <div className="projectOverlay transition-all text-black p-4 absolute rounded-lg z-30 border-white bg-white h-full w-full flex flex-col gap-4 items-start overflow-y-auto">
                <h2
                  className={
                    primary.className +
                    " text-2xl uppercase tracking-widest font-semibold"
                  }
                >
                  {project.title}
                </h2>
                <p
                  className={
                    secondary.className +
                    " text-md font-light text-justify h-fit"
                  }
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 w-full">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="p-2 min-w-fit bg-gray-300 rounded-lg font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href={"/projects/" + project.slug}
                  className="relative mt-auto transition-all cursor-pointer text-center w-full p-2 rounded-lg bg-primary text-white uppercase tracking-widest hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                >
                  VIEW CASE STUDY -&gt;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
