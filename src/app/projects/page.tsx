import { primary, secondary } from "../../styles/fonts";
import { supabase } from "@/stores/supabase";

export default async function Projects() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  // const [ viewProjectText, setViewProjectText ] = useState('VIEW PROJECT ->');

  const projectList = [
    {
      title: "sta youth website",
      description:
        "Website built as a creative side-project for the youth group that I lead at. Minimilist and user-friendly UX/UI that is clean and visually appealing with aspects that match the group's identity.",
      tags: ["Web Development", "Web Design", "Vue 3"],
      image: "/youth-sample.png",
    },
    {
      title: "junia tourism",
      description:
        "Website built that showcases different tours offered by Junia Tourism to help advertise and market towards the tourist audience in the locality.",
      tags: ["Web Development", "Web Design", "Zola"],
      image: "/junia-sample.png",
    },
    {
      title: "cub3d",
      description:
        "A project where we built a working raycaster engine in C to render a working visual simulation similar to the style of old school Doom or Wolfenstein games.",
      tags: ["Visual Progrmaming", "C", "42AD"],
      image: "/cub3d-sample.gif",
    },
    {
      title: "minishell",
      description:
        "Built our own shell in C, utilising existing shell executables with a few recreated ones. Also modified specific features to allow for more ease of use for certain aspects.",
      tags: ["Software Development", "C", "42AD"],
      image: "/minishell-sample.png",
    },
    {
      title: "portfolio",
      description:
        "The site you're currently looking at. A fun project for myself to work creatively as well as showcase my work so far. Allows for me to market my own freelance work.",
      tags: ["Web Development", "Web Design", "Next.js", "React"],
      image: "/portfolio-sample.png",
    },
    {
      title: "inception",
      description:
        "Educational project involving the setup of containers (NGINX, MariaDB, WordPress) and volumes in a Docker network that helped with in-depth understanding of DevOps, CI/CD pipelines and deployments.",
      tags: ["DevOps", "Docker", "CI/CD"],
      image: "/inception-sample.png",
    },
  ];

  let { data: projectData } = await supabase.from('projects').select('title, description, tags, image_url')

  function projectListDivs() {
    return projectList.map((project, idx) => (
      <div
        key={idx}
        className="projectList relative border rounded-lg h-80 min-w-72 w-80 grow flex basis-1/4 justify-center items-center overflow-y-clip"
      >
        <img
          className="absolute w-full h-full object-cover project-images object-top z-10 opacity-40"
          src={`${basePath}${project.image}`}
        ></img>
        <p
          className={`${primary.className} font-semibold text-2xl uppercase text-center z-20 tracking-widest border-gray-300`}
        >
          {project.title}
        </p>
        <div className="projectOverlay transition-all text-black p-4 absolute rounded-lg z-30 border-white bg-white h-full w-full flex flex-col justify-between items-start">
          <h2
            className={`${primary.className} text-2xl uppercase tracking-widest font-semibold`}
          >
            {project.title}
          </h2>
          <p
            className={`${secondary.className} text-md font-light text-justify h-18 overflow-y-auto`}
          >
            {project.description}
          </p>
          <div className="flex gap-2 overflow-x-auto w-full">
            {project.tags.map((tag, index) => (
              <p
                key={index}
                className="p-2 min-w-fit bg-gray-300 rounded-lg font-semibold"
              >
                {tag}
              </p>
            ))}
          </div>
          <button
            className="relative transition-all cursor-not-allowed text-center w-full p-2 rounded-lg opacity-75 bg-primary text-white uppercase tracking-widest"
          >
            {'VIEW PROJECT ->'}
          </button>
          {/* <Link href="/" className="cursor-pointer text-center w-full p-2 rounded-lg bg-primary text-white uppercase tracking-widest">
            {"view project " + "->"}
          </Link> */}
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
