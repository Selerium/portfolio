import Link from "next/link";
import { primary, secondary } from "../../styles/fonts";
import { projects } from "@/data/projects";

export default function Projects() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return (
    <div id="projects" className="min-h-dvh h-fit py-20 box-border w-full flex justify-center items-center overflow-x-clip relative z-0">
      <div className="w-11/12 h-full flex flex-col gap-10">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.3em] text-sm font-semibold text-primary">selected work</p>
          <h1 className={primary.className + " mt-3 text-4xl lg:text-6xl font-semibold tracking-tighter"}>projects &amp; case studies</h1>
          <p className="mt-4 text-lg font-light max-w-2xl">A closer look at the products, experiments, and engineering projects behind the work.</p>
        </div>
        <div className="flex flex-wrap gap-8 items-stretch">
          {projects.map((project) => (
            <article key={project.slug} className="projectList relative border rounded-lg min-h-80 min-w-72 w-80 grow flex basis-1/4 justify-center items-start overflow-clip group">
              <img className="absolute w-full h-full object-cover project-images object-top z-10 opacity-40 transition-transform duration-500 group-hover:scale-105" src={basePath + project.image} alt={project.title + " project preview"} />
              <p className={primary.className + " m-auto font-semibold text-2xl uppercase text-center z-20 tracking-widest"}>{project.title}</p>
              <div className="projectOverlay transition-all text-black p-4 absolute rounded-lg z-30 border-white bg-white h-full w-full flex flex-col gap-4 items-start overflow-y-auto">
                <h2 className={primary.className + " text-2xl uppercase tracking-widest font-semibold"}>{project.title}</h2>
                <p className={secondary.className + " text-md font-light text-justify h-fit"}>{project.description}</p>
                <div className="flex flex-wrap gap-2 w-full">
                  {project.tags.map((tag) => <span key={tag} className="p-2 min-w-fit bg-gray-300 rounded-lg font-semibold">{tag}</span>)}
                </div>
                <Link href={"/projects/" + project.slug} className="relative mt-auto transition-all cursor-pointer text-center w-full p-2 rounded-lg bg-primary text-white uppercase tracking-widest hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">VIEW CASE STUDY -&gt;</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
