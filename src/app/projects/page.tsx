import Link from "next/link";
import { primary, secondary } from "../styles/fonts";

export default function Projects() {
  const projectList = [
    {
      title: "project name",
      description:
        "This contains information about the project itself. Ideally, a summary of what the project pertains, what was the final deliverable, and essentially the purpose of the project itself.",
      tags: ["category", "tool", "framework", "info"],
    },
    {
      title: "project name",
      description:
        "This contains information about the project itself. Ideally, a summary of what the project pertains, what was the final deliverable, and essentially the purpose of the project itself.",
      tags: ["category", "tool", "framework", "info"],
    },
    {
      title: "project name",
      description:
        "This contains information about the project itself. Ideally, a summary of what the project pertains, what was the final deliverable, and essentially the purpose of the project itself.",
      tags: ["category", "tool", "framework", "info"],
    },
    {
      title: "project name",
      description:
        "This contains information about the project itself. Ideally, a summary of what the project pertains, what was the final deliverable, and essentially the purpose of the project itself.",
      tags: ["category", "tool", "framework", "info"],
    },
    {
      title: "project name",
      description:
        "This contains information about the project itself. Ideally, a summary of what the project pertains, what was the final deliverable, and essentially the purpose of the project itself.",
      tags: ["category", "tool", "framework", "info"],
    },
    {
      title: "project name",
      description:
        "This contains information about the project itself. Ideally, a summary of what the project pertains, what was the final deliverable, and essentially the purpose of the project itself.",
      tags: ["category", "tool", "framework", "info"],
    },
  ];

  function projectListDivs() {
    return projectList.map((project, idx) => (
      <div key={idx} className="projectList relative border rounded-lg h-80 w-80 grow flex basis-1/4 justify-center items-center overflow-y-clip">
        <p
          className={`${primary.className} font-semibold text-2xl uppercase text-center tracking-widest border-gray-300`}
        >
          {project.title}
        </p>
        <div className="projectOverlay transition-all text-black p-4 absolute rounded-lg z-10 border-white bg-white h-full w-full flex flex-col justify-between items-start">
          <h2
            className={`${primary.className} text-2xl uppercase tracking-widest font-semibold`}
          >
            {project.title}
          </h2>
          <p
            className={`${secondary.className} text-md font-light text-justify line-clamp-3`}
          >
            {project.description}
          </p>
          <div className="flex gap-4">
            {project.tags.map((tag, index) => (
              <p key={index} className="p-2 bg-gray-300 rounded-lg font-semibold">{tag}</p>
            ))}
          </div>
          <Link href="/" className="cursor-pointer text-center w-full p-2 rounded-lg bg-primary text-white uppercase tracking-widest">
            {"view project " + "->"}
          </Link>
        </div>
      </div>
    ));
  }

  return (
    <div
      id="projects"
      className="h-dvh py-4 box-border w-full flex justify-center items-center overflow-x-clip relative z-0"
    >
      <div className="w-11/12 h-5/6 flex flex-wrap gap-8 items-center overflow-y-auto">
        {projectListDivs()}
      </div>
    </div>
  );
}
