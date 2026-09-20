# Selerium — Developer Portfolio

A personal developer portfolio built with **Next.js, React, TypeScript, Tailwind CSS, and Anime.js**.

The site is designed to do more than display a list of projects. It presents selected work as **technical case studies**, with an emphasis on architecture, engineering decisions, systems thinking, and the practical problems behind each project.

## What this portfolio showcases

* Full-stack web application development
* Backend and API design
* PostgreSQL, Prisma, and relational data modelling
* Docker, Docker Compose, Nginx, networking, and deployment
* Authentication and role-based application workflows
* WebSockets and interactive application state
* Systems programming in C
* Low-level concepts including processes, pipes, signals, memory management, and file descriptors
* Frontend architecture, responsive UI, animation, and accessibility
* Translating product requirements and visual designs into working software

## Architecture

At a high level, the portfolio uses the Next.js App Router with structured project data driving both the project index and individual case-study pages.

```text
src/
├── app/
│   ├── page.tsx                 # Homepage
│   ├── projects/
│   │   ├── page.tsx             # Project index
│   │   └── [slug]/page.tsx      # Dynamic case studies
│   └── connect/                 # Contact page
├── components/                  # Reusable UI sections
├── data/
│   └── projects.ts              # Structured project/case-study data
├── stores/                      # Client-side application state
└── styles/                      # Fonts and global styling
```

Project information is kept separately from presentation so that new case studies can be added without duplicating page structure.

## Tech Stack

| Area       | Technologies                             |
| ---------- | ---------------------------------------- |
| Framework  | Next.js 15, React, TypeScript            |
| Styling    | Tailwind CSS                             |
| Animation  | Anime.js                                 |
| Routing    | Next.js App Router                       |
| Tooling    | ESLint, PostCSS, npm                     |
| Deployment | Compatible with standard Next.js hosting |

## Getting Started

### Requirements

* Node.js
* npm

### Installation

```bash
git clone https://github.com/Selerium/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

Open http://localhost:3000.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

| Path                               | Purpose                                                     |
| ---------------------------------- | ----------------------------------------------------------- |
| `src/app/page.tsx`                 | Homepage and interactive hero/carousel                      |
| `src/app/projects/page.tsx`        | Project listing                                             |
| `src/app/projects/[slug]/page.tsx` | Individual project case studies                             |
| `src/data/projects.ts`             | Project metadata, technical details, and case-study content |
| `src/components/`                  | Reusable portfolio sections                                 |
| `src/styles/`                      | Fonts and global styling                                    |
| `public/`                          | Project imagery and static assets                           |

## Accessibility & Interaction

The portfolio uses motion as part of its visual identity while accounting for users who prefer reduced motion.

Interactive elements such as the homepage project carousel use accessible controls, while the case-study pages are structured so that the technical content remains readable without relying on animation.

## Adding a Project

Project content lives in `src/data/projects.ts`.

A project can include:

* Title and slug
* Description and overview
* Technology tags
* Project image
* Architecture
* Engineering focus
* Key implementation highlights
* Project context
* GitHub repository
* Suggested screenshots, diagrams, recordings, or other media

This keeps the project index and individual case-study pages automatically in sync.

## License

This repository contains my personal portfolio and project presentation. Unless otherwise stated, the project content and design is personal work.
