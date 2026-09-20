import Link from "next/link";
import { notFound } from "next/navigation";
import { primary, secondary } from "../../../styles/fonts";
import { getProject, projects } from "@/data/projects";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[currentIndex - 1];
  const next = projects[currentIndex + 1];

  return (
    <main className="w-full min-h-dvh py-16 lg:py-24 flex justify-center">
      <article className="w-11/12 max-w-6xl">
        <Link href="/projects" className="link inline-flex mb-10 text-sm uppercase tracking-[0.25em] font-semibold">&larr; back to projects</Link>
        <header className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-end">
          <div>
            <p className="uppercase tracking-[0.3em] text-sm font-semibold text-primary">case study</p>
            <h1 className={primary.className + " mt-3 text-5xl lg:text-7xl font-semibold tracking-tighter uppercase"}>{project.title}</h1>
            <p className="mt-6 text-xl font-light leading-relaxed">{project.description}</p>
          </div>
          <div className="rounded-xl border border-primary overflow-hidden bg-white">
            <img src={basePath + project.image} alt={project.title + " project preview"} className="w-full aspect-video object-cover" />
          </div>
        </header>

        <div className="mt-16 grid lg:grid-cols-[1fr_280px] gap-12">
          <div className="space-y-14">
            <section>
              <h2 className={primary.className + " text-3xl font-semibold tracking-tight"}>overview</h2>
              <p className="mt-4 text-lg font-light leading-relaxed">{project.overview}</p>
            </section>
            <section>
              <h2 className={primary.className + " text-3xl font-semibold tracking-tight"}>highlights</h2>
              <ul className="mt-5 space-y-3 list-disc ml-5">
                {project.highlights.map((highlight) => <li key={highlight} className="font-light leading-relaxed">{highlight}</li>)}
              </ul>
            </section>
            <section>
              <h2 className={primary.className + " text-3xl font-semibold tracking-tight"}>project media</h2>
              <p className="mt-3 text-sm uppercase tracking-widest opacity-60">Existing portfolio media</p>
              <div className="mt-5 rounded-xl border border-primary overflow-hidden">
                <img src={basePath + project.image} alt={project.title + " visual"} className="w-full max-h-[620px] object-cover" />
              </div>
            </section>
            {project.mediaNote && (<section className="rounded-xl border border-dashed border-primary p-6">
              <h2 className={primary.className + " text-3xl font-semibold tracking-tight"}>next-level case study content</h2>
              <p className={secondary.className + " mt-4 font-light leading-relaxed"}>Add screenshots, short screen recordings, architecture diagrams, technical decisions, challenges, outcomes, performance notes, accessibility details, and live/GitHub links here as each project gets documented.</p>
            </section>
          </div>
          <aside className="lg:sticky lg:top-8 h-fit rounded-xl border border-primary p-5">
            <p className="uppercase tracking-[0.25em] text-xs font-semibold">technology &amp; focus</p>
            {project.github && (\n              <Link href={project.github} target="_blank" rel="noreferrer" className="mt-4 block text-sm uppercase tracking-widest font-semibold underline underline-offset-4">view on GitHub &rarr;</Link>\n            )}\n            <div className="flex flex-wrap gap-2 mt-4">
              {project.tags.map((tag) => <span key={tag} className="px-3 py-2 rounded-lg bg-primary text-white text-sm font-semibold">{tag}</span>)}
            </div>
          </aside>
        </div>

        <nav className="mt-16 pt-8 border-t border-primary flex flex-col sm:flex-row gap-4 justify-between">
          {previous ? <Link href={"/projects/" + previous.slug} className="link">&larr; {previous.title}</Link> : <span />}
          {next ? <Link href={"/projects/" + next.slug} className="link sm:text-right">{next.title} &rarr;</Link> : <span />}
        </nav>
        <div className="mt-10 flex justify-center">
          <Link href="/connect" className={secondary.className + " link rounded-lg border border-white p-3 tracking-widest font-semibold bg-primary text-white hover:bg-white hover:text-black hover:border-black transition-all"}>DISCUSS A PROJECT</Link>
        </div>
      </article>
    </main>
  );
}
