import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { primary, secondary } from "../../../styles/fonts";
import { getProject, projects } from "@/data/projects";
import ScrollReveal from "@/components/scroll-reveal";
import JsonLd from "@/components/json-ld";
import { breadcrumbSchema, projectSchema } from "@/lib/schema";
import { absoluteUrl, basePath, projectUrl } from "@/lib/site";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  const canonical = projectUrl(project.slug);
  const title = `${project.title} case study`;

  return {
    title,
    description: project.description,
    alternates: { canonical },
    openGraph: {
      type: "article",
      url: canonical,
      title: `${title} | Adi`,
      description: project.description,
      images: [
        {
          url: absoluteUrl("/og-image.png"),
          width: 1200,
          height: 630,
          alt: `${project.title} case study by Adi`,
        },
      ],
    },
    twitter: {
      title: `${title} | Adi`,
      description: project.description,
      images: [absoluteUrl("/og-image.png")],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const projectMedia = project.media || project.image;
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  return (
    <main className="w-full min-h-dvh py-16 lg:py-24 flex justify-center">
      <JsonLd
        data={[
          projectSchema(project),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Projects", path: "/projects/" },
            { name: project.title, path: `/projects/${project.slug}/` },
          ]),
        ]}
      />
      <ScrollReveal className="w-11/12 max-w-6xl">
        <article>
          <Link href="/projects" data-reveal className="link inline-flex mb-10 text-sm uppercase tracking-[0.25em] font-semibold">
            &larr; back to projects
          </Link>

        <header data-reveal className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm font-semibold text-primary">case study</p>
            <h1 className={primary.className + " mt-3 text-5xl lg:text-7xl font-semibold tracking-tighter uppercase"}>
              {project.title}
            </h1>
            <p className="mt-6 text-xl font-light leading-relaxed">{project.description}</p>
          </div>

          <div className="relative rounded-xl border border-primary overflow-hidden bg-white aspect-video">
            <Image
              src={basePath + project.image}
              alt={project.title + " project preview"}
              fill
              priority
              sizes="(max-width: 1024px) 92vw, 46vw"
              className="object-cover"
            />
          </div>
        </header>

        <div className="mt-16 grid lg:grid-cols-[1fr_280px] gap-12">
          <div className="space-y-14">
            <section data-reveal>
              <h2 className={primary.className + " text-3xl font-semibold tracking-tight"}>overview</h2>
              <p className="mt-4 text-lg font-light leading-relaxed">{project.overview}</p>
            </section>

            {project.architecture && (
              <section data-reveal>
                <h2 className={primary.className + " text-3xl font-semibold tracking-tight"}>architecture</h2>
                <div className="mt-5 rounded-xl border border-primary/40 p-5 bg-white/60">
                  <p className={secondary.className + " font-light leading-relaxed"}>{project.architecture}</p>
                </div>
              </section>
            )}

            <section data-reveal>
              <h2 className={primary.className + " text-3xl font-semibold tracking-tight"}>engineering focus</h2>
              <ul className="mt-5 space-y-3 list-disc ml-5">
                {project.engineeringFocus.map((item) => (
                  <li key={item} className="font-light leading-relaxed">{item}</li>
                ))}
              </ul>
            </section>

            <section data-reveal>
              <h2 className={primary.className + " text-3xl font-semibold tracking-tight"}>highlights</h2>
              <ul className="mt-5 space-y-3 list-disc ml-5">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="font-light leading-relaxed">{highlight}</li>
                ))}
              </ul>
            </section>

            {project.context && (
              <section data-reveal className="rounded-xl border border-primary p-6">
                <p className="uppercase tracking-[0.25em] text-xs font-semibold">project context</p>
                <p className="mt-3 font-light leading-relaxed">{project.context}</p>
              </section>
            )}

            <section data-reveal>
              <h2 className={primary.className + " text-3xl font-semibold tracking-tight"}>project media</h2>
              <p className="mt-3 text-sm uppercase tracking-widest opacity-60">Existing portfolio media</p>
              <div className="relative mt-5 rounded-xl border border-primary overflow-hidden aspect-video max-h-[620px]">
                <Image
                  src={basePath + projectMedia}
                  alt={project.title + " visual"}
                  fill
                  unoptimized={Boolean(project.media)}
                  sizes="(max-width: 1024px) 92vw, 66vw"
                  className="object-cover"
                />
              </div>
            </section>

            {/* {project.mediaNote && (
              <section className="rounded-xl border border-dashed border-primary p-6">
                <h2 className={primary.className + " text-3xl font-semibold tracking-tight"}>next-level case study content</h2>
                <p className={secondary.className + " mt-4 font-light leading-relaxed"}>{project.mediaNote}</p>
                <div className="mt-5 min-h-32 rounded-lg border border-dashed border-primary/50 flex items-center justify-center text-center text-sm uppercase tracking-widest opacity-60 px-4">
                  media / screenshots / diagrams to add
                </div>
              </section>
            )} */}
          </div>

          <aside className="lg:sticky lg:top-8 h-fit rounded-xl border border-primary p-5">
            <p className="uppercase tracking-[0.25em] text-xs font-semibold">technology &amp; focus</p>

            {project.github && (
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="mt-4 block text-sm uppercase tracking-widest font-semibold underline underline-offset-4"
              >
                view on GitHub &rarr;
              </Link>
            )}

            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-2 rounded-lg bg-primary text-white text-sm font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </aside>
        </div>

        <nav data-reveal className="mt-16 pt-8 border-t border-primary flex flex-col sm:flex-row gap-4 justify-between">
          {previous ? <Link href={"/projects/" + previous.slug} className="link">&larr; {previous.title}</Link> : <span />}
          {next ? <Link href={"/projects/" + next.slug} className="link sm:text-right">{next.title} &rarr;</Link> : <span />}
        </nav>

        <div data-reveal className="mt-10 flex justify-center">
          <Link
            href="/connect"
            className={secondary.className + " link rounded-lg border border-white p-3 tracking-widest font-semibold bg-primary text-white hover:bg-white hover:text-black hover:border-black transition-all"}
          >
            DISCUSS A PROJECT
          </Link>
        </div>
        </article>
      </ScrollReveal>
    </main>
  );
}
