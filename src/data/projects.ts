export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  overview: string;
  highlights: string[];
  github?: string;
  mediaNote?: string;
};

export const projects: Project[] = [
  {
    slug: "sta-youth-website",
    title: "sta youth website",
    description: "Website built as a creative side-project for the youth group that I lead at. Minimalist and user-friendly UX/UI that is clean and visually appealing with aspects that match the group's identity.",
    tags: ["Web Development", "Web Design", "Vue 3"],
    image: "/youth-sample.png",
    github: "https://github.com/Selerium/sta-youth-website",
    overview: "A focused website for a youth community, designed around a clean visual system and an approachable user experience.",
    highlights: ["Designed the experience around the group's visual identity.", "Focused on clear navigation and a minimal interface.", "Built as a practical web project with both design and development in mind."],
  },
  {
    slug: "junia-tourism",
    title: "junia tourism",
    description: "Website built that showcases different tours offered by Junia Tourism to help advertise and market towards the tourist audience in the locality.",
    tags: ["Web Development", "Web Design", "Zola"],
    image: "/junia-sample.png",
    github: "https://github.com/Selerium/junia-tourism",
    overview: "A tourism-focused marketing site that presents available tours in a visual, accessible format.",
    highlights: ["Structured the site around presenting tour offerings clearly.", "Combined marketing-focused content with a visual web experience.", "Built with Zola for a lightweight static-site workflow."],
  },
  {
    slug: "cub3d",
    title: "cub3d",
    description: "A project where we built a working raycaster engine in C to render a working visual simulation similar to the style of old school Doom or Wolfenstein games.",
    tags: ["Visual Programming", "C", "42AD"],
    image: "/cub3d-sample.gif",
    github: "https://github.com/Selerium/cub3d",
    overview: "A low-level graphics project centred on implementing a raycasting engine in C and turning that engine into a playable visual simulation.",
    highlights: ["Implemented a raycaster engine in C.", "Worked with real-time visual rendering rather than a traditional web UI.", "Explored the foundations behind the visual style of early first-person games."],
  },
  {
    slug: "minishell",
    title: "minishell",
    description: "Built our own shell in C, utilising existing shell executables with a few recreated ones. Also modified specific features to allow for more ease of use for certain aspects.",
    tags: ["Software Development", "C", "42AD"],
    image: "/minishell-sample.png",
    github: "https://github.com/Selerium/minishell",
    overview: "A systems-programming project that recreates core shell behaviour in C while working with existing executables and shell features.",
    highlights: ["Built a custom shell implementation in C.", "Worked with existing command-line executables and recreated selected functionality.", "Focused on making shell interactions practical and easier to use."],
  },
  {
    slug: "portfolio",
    title: "portfolio",
    description: "The site you're currently looking at. A fun project for myself to work creatively as well as showcase my work so far. Allows for me to market my own freelance work.",
    tags: ["Web Development", "Web Design", "Next.js", "React"],
    image: "/portfolio-sample.png",
    github: "https://github.com/Selerium/portfolio",
    overview: "This portfolio combines a personal visual identity with a working showcase for development, design, and professional experience.",
    highlights: ["Built with Next.js and React.", "Uses animation and interaction to give the portfolio a more expressive feel.", "Designed to support both personal presentation and freelance enquiries."],
  },
  {
    slug: "inception",
    title: "inception",
    description: "Educational project involving the setup of containers (NGINX, MariaDB, WordPress) and volumes in a Docker network that helped with in-depth understanding of DevOps, CI/CD pipelines and deployments.",
    tags: ["DevOps", "Docker", "CI/CD"],
    image: "/inception-sample.png",
    github: "https://github.com/Selerium/inception",
    overview: "A containerisation project focused on assembling a multi-service environment with Docker and understanding how the pieces work together.",
    highlights: ["Worked with NGINX, MariaDB and WordPress containers.", "Used Docker networking and volumes as part of the environment.", "Built practical understanding of deployment and DevOps workflows."],
  },
  {
    slug: "crosscurrent-events-platform",
    title: "crosscurrent events platform",
    description: "A full-stack event management platform for registrations, administration, payments, attendee management, and operational workflows.",
    tags: ["Next.js", "React", "Express", "TypeScript", "Prisma", "PostgreSQL", "Docker", "Nginx"],
    image: "/portfolio-sample.png",
    github: "https://github.com/Selerium/crosscurrent-events-platform",
    overview: "A production-oriented full-stack platform built around real event-registration workflows rather than a simple CRUD interface. The frontend, API, database, and reverse proxy are separated into distinct services and run through Docker Compose.",
    highlights: ["Registration and attendee management with search, filtering, sorting, and profile workflows.", "Stripe and manual payment handling, including early-bird registration logic.", "Express/TypeScript API backed by Prisma and PostgreSQL.", "Nginx provides the public-facing reverse proxy and HTTPS layer.", "Integrations include Stripe, Resend, ExcelJS, and file uploads."],
    mediaNote: "Add registration/admin dashboard screenshots, payment-flow diagrams, architecture diagrams, and a short walkthrough of an end-to-end registration."
  },
  {
    slug: "eduai",
    title: "EduAI",
    description: "A full-stack educational assistant prototype combining authentication, classes, teacher workflows, gamification, student experiences, and AI-oriented functionality.",
    tags: ["Next.js", "React", "Express", "TypeScript", "Prisma", "PostgreSQL", "WebSockets", "Docker"],
    image: "/portfolio-sample.png",
    github: "https://github.com/Selerium/innovation-challenge",
    overview: "A TypeScript monorepo containing separate web and server applications plus shared packages. The prototype brings together authenticated student and teacher workflows, classes, gamification, database persistence, WebSockets, and AI-oriented functionality.",
    highlights: ["pnpm workspace separating the web client, server, and shared code.", "Next.js/React frontend with Tailwind, shadcn/ui, Zod, and explicit loading/error/empty states.", "Express/TypeScript server using Prisma and PostgreSQL.", "Better Auth and WebSocket support for authenticated, interactive workflows.", "Docker Compose coordinates PostgreSQL, the API, and web application."],
    mediaNote: "Add teacher dashboard screenshots, student journey screens, AI interaction examples, WebSocket/live-state visuals, and a monorepo architecture diagram."
  },
  {
    slug: "express-prisma-nginx-docker",
    title: "express + prisma + nginx + docker",
    description: "A reusable Dockerized backend foundation for Express applications with PostgreSQL, Prisma, authentication, transactional email, and an Nginx reverse proxy.",
    tags: ["Express", "Prisma", "PostgreSQL", "Nginx", "Docker"],
    image: "/inception-sample.png",
    github: "https://github.com/Selerium/express-prisma-nginx-docker",
    overview: "A reusable backend and infrastructure starter that packages common application concerns into a repeatable foundation: authentication, account flows, PostgreSQL/Prisma, reverse proxying, HTTPS, and development/production separation.",
    highlights: ["Authentication foundations including registration, login, verification, password recovery, and profile management.", "Prisma-backed PostgreSQL persistence.", "Nginx reverse proxy with HTTP/HTTPS production configuration.", "Docker Compose manages the application services and persistent database.", "Development and production behaviour can be switched through configuration."],
    mediaNote: "Add an architecture diagram, Nginx routing diagram, authentication-flow screenshots, and a short deployment/configuration walkthrough."
  },
  {
    slug: "transcendence",
    title: "transcendence",
    description: "A full-stack multiplayer Pong platform built as a 42 Common Core project, combining a browser SPA, Django API, PostgreSQL, Docker, and Nginx.",
    tags: ["JavaScript", "Django", "PostgreSQL", "Docker", "Nginx", "Multiplayer"],
    image: "/cub3d-sample.gif",
    github: "https://github.com/Selerium/transcendence",
    overview: "A multi-service web application where the browser client, Django backend, PostgreSQL database, and Nginx deployment layer work together to provide multiplayer Pong and social platform features.",
    highlights: ["Multiplayer Pong gameplay and tournament participation.", "Accounts, profiles, friends, achievements, and messaging.", "Django API with separate application areas for users, friends, achievements, matches, messaging, and OAuth.", "Docker Compose networking across frontend, backend, and PostgreSQL services.", "Frontend implemented with JavaScript, HTML, and CSS without relying on a modern frontend framework."],
    mediaNote: "Add gameplay screenshots/video, tournament flow, multiplayer architecture diagram, social/profile screens, and a deployment/networking diagram."
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
