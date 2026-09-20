export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  overview: string;
  highlights: string[];
};

export const projects: Project[] = [
  {
    slug: "sta-youth-website",
    title: "sta youth website",
    description: "Website built as a creative side-project for the youth group that I lead at. Minimalist and user-friendly UX/UI that is clean and visually appealing with aspects that match the group's identity.",
    tags: ["Web Development", "Web Design", "Vue 3"],
    image: "/youth-sample.png",
    overview: "A focused website for a youth community, designed around a clean visual system and an approachable user experience.",
    highlights: ["Designed the experience around the group's visual identity.", "Focused on clear navigation and a minimal interface.", "Built as a practical web project with both design and development in mind."],
  },
  {
    slug: "junia-tourism",
    title: "junia tourism",
    description: "Website built that showcases different tours offered by Junia Tourism to help advertise and market towards the tourist audience in the locality.",
    tags: ["Web Development", "Web Design", "Zola"],
    image: "/junia-sample.png",
    overview: "A tourism-focused marketing site that presents available tours in a visual, accessible format.",
    highlights: ["Structured the site around presenting tour offerings clearly.", "Combined marketing-focused content with a visual web experience.", "Built with Zola for a lightweight static-site workflow."],
  },
  {
    slug: "cub3d",
    title: "cub3d",
    description: "A project where we built a working raycaster engine in C to render a working visual simulation similar to the style of old school Doom or Wolfenstein games.",
    tags: ["Visual Programming", "C", "42AD"],
    image: "/cub3d-sample.gif",
    overview: "A low-level graphics project centred on implementing a raycasting engine in C and turning that engine into a playable visual simulation.",
    highlights: ["Implemented a raycaster engine in C.", "Worked with real-time visual rendering rather than a traditional web UI.", "Explored the foundations behind the visual style of early first-person games."],
  },
  {
    slug: "minishell",
    title: "minishell",
    description: "Built our own shell in C, utilising existing shell executables with a few recreated ones. Also modified specific features to allow for more ease of use for certain aspects.",
    tags: ["Software Development", "C", "42AD"],
    image: "/minishell-sample.png",
    overview: "A systems-programming project that recreates core shell behaviour in C while working with existing executables and shell features.",
    highlights: ["Built a custom shell implementation in C.", "Worked with existing command-line executables and recreated selected functionality.", "Focused on making shell interactions practical and easier to use."],
  },
  {
    slug: "portfolio",
    title: "portfolio",
    description: "The site you're currently looking at. A fun project for myself to work creatively as well as showcase my work so far. Allows for me to market my own freelance work.",
    tags: ["Web Development", "Web Design", "Next.js", "React"],
    image: "/portfolio-sample.png",
    overview: "This portfolio combines a personal visual identity with a working showcase for development, design, and professional experience.",
    highlights: ["Built with Next.js and React.", "Uses animation and interaction to give the portfolio a more expressive feel.", "Designed to support both personal presentation and freelance enquiries."],
  },
  {
    slug: "inception",
    title: "inception",
    description: "Educational project involving the setup of containers (NGINX, MariaDB, WordPress) and volumes in a Docker network that helped with in-depth understanding of DevOps, CI/CD pipelines and deployments.",
    tags: ["DevOps", "Docker", "CI/CD"],
    image: "/inception-sample.png",
    overview: "A containerisation project focused on assembling a multi-service environment with Docker and understanding how the pieces work together.",
    highlights: ["Worked with NGINX, MariaDB and WordPress containers.", "Used Docker networking and volumes as part of the environment.", "Built practical understanding of deployment and DevOps workflows."],
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
