export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  overview: string;
  highlights: string[];
  engineeringFocus: string[];
  architecture?: string;
  context?: string;
  github?: string;
  mediaNote?: string;
};

export const projects: Project[] = [
  {
    slug: "crosscurrent-events-platform",
    title: "crosscurrent events platform",
    description: "A full-stack event management platform for registrations, administration, payments, attendee management, and operational workflows.",
    tags: ["Next.js", "React", "Express", "TypeScript", "Prisma", "PostgreSQL", "Docker", "Nginx"],
    image: "/crosscurrent-sample.png",
    github: "https://github.com/Selerium/crosscurrent-events-platform",
    overview: "A production-oriented application built around real operational requirements rather than a simple CRUD demonstration. The platform separates the web client, API, database, and public-facing proxy while supporting the different states and workflows involved in event registration.",
    architecture: "Next.js / React frontend → Nginx reverse proxy and TLS → Express/TypeScript API → Prisma/PostgreSQL, with the stack orchestrated through Docker Compose.",
    context: "Actively developed around evolving registration, payment, and administrative requirements.",
    highlights: [
      "Registration and attendee management with search, filtering, sorting, profile navigation, and parent information.",
      "Payment workflows covering Stripe, manually marked payments, and early-bird eligibility rather than treating payment as a single boolean state.",
      "Email delivery, file uploads, and ExcelJS data export for operational workflows.",
      "Clear separation between frontend, API, database, and infrastructure services.",
    ],
    engineeringFocus: [
      "Designing application state around real business workflows and exceptions.",
      "Maintaining boundaries between frontend, API, persistence, and infrastructure.",
      "Building reproducible development and deployment environments with Docker Compose.",
      "Integrating external services such as Stripe and Resend without coupling them to the core domain model.",
    ],
    mediaNote: "Add admin dashboard screenshots, registration/payment state diagrams, the service architecture diagram, and a short end-to-end registration walkthrough."
  },
  {
    slug: "eduai",
    title: "EduAI",
    description: "A full-stack educational assistant prototype combining authentication, classes, teacher workflows, gamification, student experiences, and AI-oriented functionality.",
    tags: ["Next.js", "React", "Express", "TypeScript", "Prisma", "PostgreSQL", "WebSockets", "Docker"],
    image: "/eduai-sample.png",
    github: "https://github.com/Selerium/innovation-challenge",
    overview: "An end-to-end TypeScript monorepo that brings a web client, API, database, authentication, shared packages, live communication, and role-specific workflows into one coherent application architecture.",
    architecture: "Next.js web client ↔ HTTP/WebSocket ↔ Express server ↔ Prisma/PostgreSQL, with shared TypeScript packages and Docker Compose coordinating the environment.",
    context: "Prototype completed as an end-to-end application rather than an isolated frontend exercise.",
    highlights: [
      "Student and teacher workflows, classes, gamification, authentication, seeded data, and AI-oriented functionality.",
      "pnpm workspace with separate web and server applications plus a shared package.",
      "Better Auth, Zod validation, Prisma/PostgreSQL persistence, and WebSocket support.",
      "Explicit loading, error, and empty states for authenticated, role-specific workflows.",
    ],
    engineeringFocus: [
      "Monorepo boundaries that keep frontend and backend development explicit while sharing types and utilities.",
      "Designing application state and UX for authenticated, role-specific flows.",
      "Combining request/response APIs with WebSocket-based interactive behaviour.",
      "Containerizing the web app, API, and database into a repeatable development environment.",
    ],
    mediaNote: "Add teacher dashboard and student journey screenshots, AI interaction examples, WebSocket/live-state visuals, and the monorepo architecture diagram."
  },
  {
    slug: "transcendence",
    title: "transcendence",
    description: "A full-stack multiplayer Pong platform built as a 42 Common Core project, combining a browser SPA, Django API, PostgreSQL, Docker, and Nginx.",
    tags: ["JavaScript", "Django", "PostgreSQL", "Docker", "Nginx", "Multiplayer"],
    image: "/transcendence-sample.gif",
    github: "https://github.com/Selerium/transcendence",
    overview: "A multi-service web application that moves beyond isolated exercises into a browser client, backend API, relational persistence, deployment layer, multiplayer gameplay, and user-to-user functionality working together.",
    architecture: "Browser SPA → Nginx frontend/API proxy → Django backend → PostgreSQL, with all services connected through a Docker network and persistent volumes.",
    context: "Built as the final project of the 42 Abu Dhabi Common Core curriculum.",
    highlights: [
      "Multiplayer Pong gameplay and tournament participation.",
      "Accounts, profiles, friends, achievements, messaging, and OAuth-related backend areas.",
      "Django API with separate application areas for users, friends, achievements, matches, messages, and OAuth.",
      "Frontend built with JavaScript, HTML, and CSS without relying on a modern frontend framework.",
    ],
    engineeringFocus: [
      "Coordinating a browser application, backend API, relational database, and reverse proxy.",
      "Building interactive multiplayer functionality rather than a static interface.",
      "Structuring a larger client-side application with lower-level web technologies.",
      "Managing Docker networking, persistent volumes, and service boundaries.",
    ],
    mediaNote: "Add gameplay footage, tournament flow screenshots, profile/social screens, API/service architecture, and a deployment/networking diagram."
  },
  {
    slug: "express-prisma-nginx-docker",
    title: "express + prisma + nginx + docker",
    description: "A reusable Dockerized backend foundation for Express applications with PostgreSQL, Prisma, authentication, transactional email, and an Nginx reverse proxy.",
    tags: ["Express", "Prisma", "PostgreSQL", "Nginx", "Docker"],
    image: "/express-prisma-nginx-docker.png",
    github: "https://github.com/Selerium/express-prisma-nginx-docker",
    overview: "A reusable backend and infrastructure foundation that packages recurring application concerns into a repeatable starting point instead of rebuilding authentication, persistence, reverse proxying, and environment setup for every project.",
    architecture: "Internet → Nginx HTTP/HTTPS → Express backend → PostgreSQL/Prisma, with Resend available for transactional email and Docker Compose managing the services.",
    context: "Designed as a reusable starting point for Express + PostgreSQL applications.",
    highlights: [
      "Registration, login, email verification, password recovery, profile management, account settings, onboarding, and auth-state navigation.",
      "Prisma-backed PostgreSQL persistence with a customizable user model.",
      "Development and production modes with HTTP locally and HTTPS plus HTTP-to-HTTPS redirection in production.",
      "Persistent database storage and optional transactional email through Resend.",
    ],
    engineeringFocus: [
      "Turning repeated backend and infrastructure concerns into a reusable foundation.",
      "Separating development and production behaviour through configuration.",
      "Understanding reverse proxying, TLS, persistence, and container orchestration.",
      "Creating application infrastructure that can support domain-specific features on top.",
    ],
    mediaNote: "Add the architecture diagram, authentication flow, Nginx routing/TLS diagram, and a short development-to-production configuration walkthrough."
  },
  {
    slug: "inception",
    title: "inception",
    description: "A containerisation project involving NGINX, MariaDB, WordPress, Docker networking, and persistent volumes.",
    tags: ["DevOps", "Docker", "CI/CD"],
    image: "/inception-sample.png",
    github: "https://github.com/Selerium/inception",
    overview: "A 42 infrastructure project focused on understanding how a multi-service application is assembled and deployed with containers, networking, persistent storage, and a reverse proxy.",
    highlights: [
      "Worked with NGINX, MariaDB, and WordPress as separate services.",
      "Used Docker networking and volumes to connect services and preserve data.",
      "Developed practical understanding of service isolation and deployment-oriented configuration.",
    ],
    engineeringFocus: [
      "Container orchestration and service-to-service networking.",
      "Persistent storage and separation of application responsibilities.",
      "Reverse proxy and deployment fundamentals.",
    ],
    mediaNote: "Add the Docker service diagram, Nginx routing, volume/network layout, and a short explanation of how the containers start and communicate."
  },
  {
    slug: "minishell",
    title: "minishell",
    description: "A Unix shell implementation in C covering parsing, expansion, redirections, pipelines, processes, signals, and memory management.",
    tags: ["C", "Systems Programming", "Unix", "42AD"],
    image: "/minishell-sample.png",
    github: "https://github.com/Selerium/minishell",
    overview: "A low-level systems project that rebuilds core shell behaviour instead of delegating process execution and parsing to a high-level runtime. The code is split into parsing, expansion, execution, built-ins, redirection, signal handling, and cleanup responsibilities.",
    architecture: "User input → syntax validation → parsing/tokenisation → quote handling and expansion → redirections/pipelines → command lookup/execution → process and signal management.",
    context: "Built as part of the 42 Abu Dhabi curriculum.",
    highlights: [
      "Command execution through PATH plus built-ins including echo, cd, pwd, export, unset, env, and exit.",
      "Pipes, input/output redirections, environment expansion, quoting, syntax validation, and signal handling.",
      "Separate components for parsing, expansion, execution, built-ins, redirections, signals, and memory cleanup.",
      "Valgrind tooling for leak checking and file-descriptor tracking.",
    ],
    engineeringFocus: [
      "Unix process creation and process control.",
      "File descriptors, pipes, redirections, and signal semantics.",
      "Memory ownership, cleanup across execution paths, and low-level debugging.",
      "Building a non-trivial command interpreter without relying on a high-level process runner.",
    ],
    mediaNote: "Add a shell demo recording, parsing/execution pipeline diagram, examples of pipes and redirections, and a short note on memory/signal handling."
  },
  {
    slug: "cub3d",
    title: "cub3d",
    description: "A C raycasting project that renders a real-time visual simulation inspired by early first-person games.",
    tags: ["C", "Graphics", "Raycasting", "42AD"],
    image: "/cub3d-sample.gif",
    github: "https://github.com/Selerium/cub3d",
    overview: "A low-level graphics project centred on implementing a raycasting engine in C and turning the maths and rendering pipeline into an interactive first-person environment.",
    highlights: [
      "Implemented a raycaster engine in C.",
      "Worked with real-time rendering and graphics primitives rather than a conventional web interface.",
      "Applied computational geometry concepts to transform a 2D map into a first-person visual representation.",
    ],
    engineeringFocus: [
      "Low-level C programming and graphics-oriented problem solving.",
      "Real-time rendering and performance-sensitive loops.",
      "Translating mathematical concepts into an interactive visual system.",
    ],
    mediaNote: "Add the existing gameplay GIF plus a raycasting/rendering diagram and a short explanation of the frame-generation pipeline."
  },
  {
    slug: "portfolio",
    title: "portfolio",
    description: "The portfolio site itself: a Next.js and React project combining personal branding, project case studies, animation, and freelance presentation.",
    tags: ["Next.js", "React", "TypeScript", "Anime.js", "Web Design"],
    image: "/portfolio-sample.png",
    github: "https://github.com/Selerium/portfolio",
    overview: "A working product as well as a showcase: the site uses Next.js and React to present projects, case studies, experience, and contact pathways with a deliberately expressive visual system.",
    highlights: [
      "Next.js and React application with reusable project data and dynamic case-study routes.",
      "Anime.js interactions and motion designed around the portfolio's visual identity.",
      "Structured project pages that can be extended with screenshots, diagrams, recordings, and technical notes.",
    ],
    engineeringFocus: [
      "Component-driven frontend architecture and dynamic routing.",
      "Interaction design, accessibility considerations, and reduced-motion support.",
      "Presenting technical work as readable case studies rather than only image galleries.",
    ],
    mediaNote: "Keep the existing portfolio visual as the hero, then add screenshots of the homepage motion, project listing, and a representative case study."
  },
  {
    slug: "sta-youth-website",
    title: "sta youth website",
    description: "A minimalist landing page for a youth ministry, built with Vue and Tailwind around a clear visual identity.",
    tags: ["Vue", "Tailwind CSS", "Web Design"],
    image: "/youth-sample.png",
    github: "https://github.com/Selerium/sta-youth-website",
    overview: "A focused client-style landing page that combines a simple information architecture with a visual identity designed for a youth community.",
    context: "A practical side project for a youth ministry.",
    highlights: [
      "Built with Vue and Tailwind CSS.",
      "Focused the interface around clear content hierarchy and a minimal visual system.",
      "Combined implementation and visual design decisions around an identifiable audience.",
    ],
    engineeringFocus: [
      "Responsive frontend implementation.",
      "Utility-first styling and visual consistency.",
      "Designing around a specific audience and content goal.",
    ],
    mediaNote: "Add the existing site visual plus a small before/after or design-system section if additional screenshots are available."
  },
  {
    slug: "junia-tourism",
    title: "junia tourism",
    description: "A static tourism marketing site built with vanilla HTML/CSS/JS and Zola, with the visual design created from scratch in Figma.",
    tags: ["HTML", "CSS", "JavaScript", "Zola", "Figma"],
    image: "/junia-sample.png",
    github: "https://github.com/Selerium/junia",
    overview: "A lightweight static-site project designed to showcase tourism offerings while keeping the implementation simple, fast, and easy to deploy.",
    context: "Design created from scratch in Figma before implementation.",
    highlights: [
      "Built with vanilla HTML, CSS, and JavaScript.",
      "Uses Zola as a static-site generator.",
      "Covered both visual design and implementation, from Figma through to a runnable site.",
    ],
    engineeringFocus: [
      "Static-site architecture and build tooling.",
      "Translating an original Figma design into a responsive web implementation.",
      "Keeping a marketing site lightweight without unnecessary framework overhead.",
    ],
    mediaNote: "Add the Figma design, final site screenshots, and a small section showing the design-to-implementation process."
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
