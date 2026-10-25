import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { primary } from "@/styles/fonts";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Expertise({ changeSite }: any) {
  const [selectedGroup, setSelectedGroup] = useState("ALL");
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const groups = [
    "ALL",
    "FRONTEND",
    "BACKEND",
    "DATABASE",
    "DEVOPS",
    "SYSTEMS",
    "UI/UX",
  ];
  const skills = [
    {
      title: "HTML",
      group: "FRONTEND",
      style: "bg-[#E34F26] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/html5.svg`}
          className="rounded-sm invert"
          alt=""
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "CSS",
      group: "FRONTEND",
      style: "bg-[#663399] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/css.svg`}
          className="rounded-sm invert"
          alt=""
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "JavaScript",
      group: "FRONTEND",
      style: "bg-[#F7DF1E] text-black",
      icon: (
        <Image
          src={`${basePath}/logos/javascript.svg`}
          className={`${
            selectedGroup !== "ALL" && selectedGroup !== "FRONTEND"
              ? "invert"
              : ""
          } rounded-sm`}
          alt=""
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "TypeScript",
      group: "FRONTEND",
      style: "bg-[#3178C6] text-black",
      icon: (
        <Image
          src={`${basePath}/logos/typescript.svg`}
          className={`${
            selectedGroup !== "ALL" && selectedGroup !== "FRONTEND"
              ? "invert"
              : ""
          } rounded-sm`}
          alt=""
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "React",
      group: "FRONTEND",
      style: "bg-[#61DAFB] text-black",
      icon: (
        <Image
          src={`${basePath}/logos/react.svg`}
          className={`${
            selectedGroup !== "ALL" && selectedGroup !== "FRONTEND"
              ? "invert"
              : ""
          } rounded-sm`}
          alt=""
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "Next.js",
      group: "FRONTEND",
      style: "bg-[#ffffff] text-black",
      icon: (
        <Image
          src={`${basePath}/logos/nextdotjs.svg`}
          className={`${
            selectedGroup !== "ALL" && selectedGroup !== "FRONTEND"
              ? "invert"
              : ""
          } rounded-sm`}
          alt=""
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "Vue",
      group: "FRONTEND",
      style: "bg-[#41B883] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/vuedotjs.svg`}
          className="rounded-sm invert"
          alt="Vue"
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "Angular",
      group: "FRONTEND",
      style: "bg-[#DD0031] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/angular.svg`}
          className="rounded-sm invert"
          alt="Angular"
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "Tailwind CSS",
      group: "FRONTEND",
      style: "bg-[#06B6D4] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/tailwindcss.svg`}
          className="rounded-sm invert"
          alt=""
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "Node.js",
      group: "BACKEND",
      style: `font-semibold bg-[#5FA04E] text-black`,
      icon: (
        <Image
          src={`${basePath}/logos/nodedotjs.svg`}
          className={`${
            selectedGroup !== "ALL" && selectedGroup !== "BACKEND"
              ? "invert"
              : ""
          } rounded-sm`}
          alt=""
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "Express",
      group: "BACKEND",
      style: "bg-[#ffffff] text-black",
      icon: (
        <Image
          src={`${basePath}/logos/express.svg`}
          className={`${
            selectedGroup !== "ALL" && selectedGroup !== "BACKEND"
              ? "invert"
              : ""
          } rounded-sm`}
          alt=""
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "Django",
      group: "BACKEND",
      style: "bg-[#092E20] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/django.svg`}
          className="rounded-sm invert"
          alt="Django"
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "Fastify",
      group: "BACKEND",
      style: "bg-[#000000] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/fastify.svg`}
          className="rounded-sm invert"
          alt="Fastify"
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "Python",
      group: "BACKEND",
      style: "bg-[#3776AB] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/python.svg`}
          className="rounded-sm invert"
          alt="Python"
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "Golang",
      group: "BACKEND",
      style: "bg-[#00ADD8] text-black",
      icon: (
        <Image
          src={`${basePath}/logos/go.svg`}
          className="rounded-sm"
          alt="Go"
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "C / C++",
      group: "SYSTEMS",
      style: "bg-[#00599C] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/cplusplus.svg`}
          className="rounded-sm invert"
          alt="C and C++"
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "MongoDB",
      group: "DATABASE",
      style: "bg-[#47A248] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/mongodb.svg`}
          className="rounded-sm invert"
          alt=""
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "PostgreSQL",
      group: "DATABASE",
      style: "bg-[#4169E1] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/postgresql.svg`}
          className="rounded-sm invert"
          alt=""
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "Docker",
      group: "DEVOPS",
      style: "bg-[#2496ED] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/docker.svg`}
          className="rounded-sm invert"
          alt=""
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "MySQL",
      group: "DATABASE",
      style: "bg-[#4479A1] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/mysql.svg`}
          className="rounded-sm invert"
          alt="MySQL"
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "AWS",
      group: "DEVOPS",
      style: "bg-[#232F3E] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/amazonwebservices.svg`}
          className="rounded-sm invert"
          alt="Amazon Web Services"
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "Supabase",
      group: "DATABASE",
      style: "bg-[#3FCF8E] text-black",
      icon: (
        <Image
          src={`${basePath}/logos/supabase.svg`}
          className={`${
            selectedGroup !== "ALL" && selectedGroup !== "DATABASE"
              ? "invert"
              : ""
          } rounded-sm`}
          alt=""
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "Figma",
      group: "UI/UX",
      style: "bg-[#F24E1E] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/figma.svg`}
          className="rounded-sm invert"
          alt=""
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "Photoshop",
      group: "UI/UX",
      style: "bg-[#8C8073] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/gimp.svg`}
          className="rounded-sm invert"
          alt=""
          width={22}
          height={22}
        />
      ),
    },
    {
      title: "Davinci Resolve",
      group: "UI/UX",
      style: "bg-[#233A51] text-white",
      icon: (
        <Image
          src={`${basePath}/logos/davinciresolve.svg`}
          className="rounded-sm invert"
          alt=""
          width={22}
          height={22}
        />
      ),
    },
  ];

  const root = useRef<HTMLDivElement>(null);
  useScrollReveal(root, {
    selector: "[data-reveal]",
    y: 26,
    duration: 300,
    stagger: 20,
  });

  return (
    <div ref={root} className="w-full flex justify-center items-center">
      <div className="w-3/5 min-w-72 min-h-dvh h-fit py-8 flex flex-col justify-center items-center gap-8">
        <h2 data-reveal className="text-2xl text-center lg:text-4xl font-semibold tracking-tighter">
          unleash your{"  "}
          <span
            style={{ backgroundImage: `url(${basePath}/gradient.png)` }}
            className={`bg-top animate-bg-move text-transparent bg-clip-text`}
          >
            creative{"  "}
          </span>
          vision
        </h2>
        <p data-reveal className="text-xl tracking-tight font-extralight text-center">
          In a day and age where there&apos;s a solution for every possible
          problem, what makes you stand out is your innovation. Your creativity
          should shine bright, that&apos;s why I desire to be challenged in
          whatever work I do. Every website is meticulously thought about,
          analysed, and considered from design to release.
        </p>
        <Link
          href="/connect"
          onClick={changeSite}
          data-reveal
          className={`${primary.className} link rounded-lg border border-white p-2 pl-4 tracking-widest font-semibold hover:border-black bg-primary hover:text-black hover:bg-white hover:shadow-md shadow-blue-300/25 transition-all`}
        >
          LET&apos;S TALK
        </Link>
        <h3 data-reveal className="font-semibold text-xl mt-8">
          my tech expertise
        </h3>
        <div data-reveal className="flex flex-wrap justify-center gap-2">
          {groups.map((group) => (
            <div
              key={group}
              className={`px-4 py-2 rounded-xl text-center flex gap-2 border transition-all cursor-pointer ${
                selectedGroup === group
                  ? "bg-white text-primary border-primary"
                  : "border-primary hover:bg-primary hover:text-white"
              }`}
              onClick={() =>
                setSelectedGroup(group === selectedGroup ? "ALL" : group)
              }
            >
              <p className="select-none">{group}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          {skills
            .sort((a, b) => a.group.localeCompare(b.group))
            .map((skill) => (
              <div key={skill.title} data-reveal>
                <div
                  className={`px-4 py-2 rounded-xl text-center flex gap-2 transition-all font-semibold ${
                    selectedGroup === "ALL" || skill.group === selectedGroup
                      ? `opacity-100 ${skill.style}`
                      : "opacity-25"
                  }
                    `}
                >
                  {skill.icon}
                  <p>{skill.title}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
