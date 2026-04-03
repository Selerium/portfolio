import { animate, createScope, onScroll, stagger } from "animejs";
import { useEffect, useRef, useState } from "react";

export default function Resume() {
  const [selectedOption, setSelectedOption] = useState("ALL");

  const options = ["ALL", "DEVELOPER", "MENTOR", "STUDENT"];
  const resumeList = [
    {
      title: "Software Developer",
      type: "DEVELOPER",
      organization: "Ratchet Capital",
      location: "Abu Dhabi, U.A.E.",
      summary:
        "Full-stack developer responsible for designing and building multiple web platforms, contributing to frontend and backend integration while guiding technical decisions and maintaining team code quality through structured reviews and agile practices.",
      points: [
        "Created and implemented UI/UX designs for multiple websites",
        "Developed frontend in Vue, Next.JS; backend with Go and Supabase",
        "Planned and architected through the system design process for various applications",
        "Conducted periodic sprint plannings and code reviews to ensure quality code and team alignment",
      ],
      startDate: "Aug 2024",
      endDate: "Present",
    },
    {
      title: "Frontend Developer",
      type: "DEVELOPER",
      organization: "Kalvad DevOps",
      location: "Dubai, U.A.E.",
      summary:
        "Frontend-focused developer who improved performance and SEO while delivering multiple client websites, redesigning interfaces, and integrating APIs to create responsive and scalable web applications.",
      points: [
        "Increased SEO and performance for client websites, enhancing web traffic.",
        "Developed 4 websites for clients using Angular, Hugo & Zola",
        "Conducted UX/UI redesign of client projects to align with modern trends",
        "Managed client projects and facilitated regular team meetings for consistency",
        "Integrated dynamic functionality via REST APIs",
      ],
      startDate: "July 2023",
      endDate: "July 2024",
    },
    {
      title: "Software Developer",
      type: "DEVELOPER",
      organization: "Self-employed",
      location: "Remote",
      summary:
        "Freelance developer and designer delivering tailored web solutions, combining UI/UX design, full-stack development, and consulting to help clients build functional and cost-effective platforms.",
      points: [
        "Designed creative Figma prototypes based on client requirements and concepts",
        "Utilised Vue and Supabase to create websites for events along with Stripe integration",
        "Offered consulting on web solutions, business direction, and hosting services",
        "Built websites and web applications for individuals required simple, low-cost platforms",
      ],
      startDate: "September 2023",
      endDate: "Present",
    },
    {
      title: "Technology Advisor",
      type: "DEVELOPER",
      organization: "Print&Go",
      location: "Remote",
      summary:
        "Provided early-stage technical direction for a startup, contributing to foundational web development, product strategy, and quality assurance for MVPs and branding initiatives.",
      points: [
        "Bootstrapped the team with initial HTML and CSS structure & designs for their app",
        "Provided strategic guidance on product tech requirements and feasibility",
        "Conducted quality checks on MVPs, branding materials, and business planning",
      ],
      startDate: "March 2020",
      endDate: "Present",
    },
    {
      title: "Youth and Community Director",
      type: "MENTOR",
      organization: "St. Andrew’s Church",
      location: "Abu Dhabi, U.A.E.",
      summary:
        "Volunteer leader mentoring youth and managing community initiatives, combining teaching, leadership, and team coordination to foster personal development and a supportive environment.",
      points: [
        "Mentored and taught over 40 teenagers in self-help, mentorship, and theological studies",
        "Led a team of volunteers to create a supportive environment for youth development",
      ],
      startDate: "March 2022",
      endDate: "Present",
    },
    {
      title: "Bachelor’s Degree",
      type: "STUDENT",
      organization: "Canadian University Dubai",
      location: "Dubai, U.A.E.",
      summary:
        "Comprehensive engineering program covering software development, networking, and business fundamentals, complemented by a capstone project focused on improving enterprise software systems.",
      points: [
        "Coursework - Software Development, Data Science, Networking, Business Management",
        "Capstone Project - collaborated with a health insurance claims software company to enhance legacy systems and propose innovative solutions; worked with Java Spring Boot and performed code quality checks",
        "Engaged heavily in student clubs focused on music, mental health, and sports",
      ],
      startDate: "2019",
      endDate: "2024",
    },
    {
      title: "Level 6 Diploma",
      type: "STUDENT",
      organization: "42AbuDhabi",
      location: "Abu Dhabi, U.A.E.",
      summary:
        "Hands-on, peer-to-peer computer science program focused on practical software engineering, low-level programming, and problem-solving, completed alongside professional work experience.",
      points: [
        "Coursework – Entrepreneurship, Advanced and Discrete Math, ICT, Business Planning",
        "Peer-to-peer education in programming, computer architecture, and Linux shell scripting",
        "Acquired skills in web development, C/C++, troubleshooting, and Git",
      ],
      startDate: "2022",
      endDate: "Present",
    },
  ];

  const root = useRef(null);
  const scope = useRef(null as any);
  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      const animation = animate(".resumeCard", {
        opacity: [0, 1],
        transformX: [100, 0],
        duration: 300,
        delay: stagger(50),
        autoplay: onScroll({
          enter: "bottom bottom",
        }),
        onComplete: () => {
          animation.revert();
        },
      });
    });

    return () => scope.current.revert();
  }, []);

  return (
    <div
      ref={root}
      className="w-3/5 min-w-72 h-fit flex flex-col gap-4 transition-all pb-8"
    >
      <h2 className="text-2xl lg:text-4xl font-semibold tracking-tighter order-first">
        my resume
      </h2>
      <div className="flex flex-wrap gap-2 order-first">
        {options.map((option) => (
          <div
            key={option}
            className={`px-4 py-2 rounded-xl text-center flex gap-2 border transition-all cursor-pointer ${
              selectedOption === option
                ? "bg-white text-primary border-primary"
                : "border-primary hover:bg-primary hover:text-white"
            }`}
            onClick={() =>
              setSelectedOption(option === selectedOption ? "ALL" : option)
            }
          >
            <p className="select-none">{option}</p>
          </div>
        ))}
      </div>
      {resumeList.map((item) => (
        <div
          key={`${item.title}${item.organization}`}
          className={`resumeCard flex lg:flex-row flex-col rounded-lg border border-primary transition-all bg-primary ${
            selectedOption === "ALL" || item.type === selectedOption
              ? "opacity-100"
              : "h-0 opacity-0 absolute bottom-0"
          }`}
        >
          <div className="lg:w-1/2 flex flex-col gap-2 p-4">
            <div>
              <div className="flex gap-2">
                <p className="tracking-tight font-semibold text-2xl lowercase">
                  {item.title}
                </p>
                <p className="py-1 px-2 h-fit rounded-lg bg-secondary">
                  {item.type}
                </p>
              </div>
              <p className="font-light">
                {item.organization} |{" "}
                <span className="italic">{item.location}</span>
              </p>
            </div>
            <p className="font-light">{item.summary}</p>
          </div>
          <div className="lg:w-1/2 flex flex-col justify-start gap-2 p-4 bg-white text-black rounded-lg">
            <p className="py-1 px-2 border border-primary rounded-lg w-fit">
              {item.endDate === "Present"
                ? `since ${item.startDate} `
                : `${item.startDate} - ${item.endDate}`}
            </p>
            <ul className="list-disc ml-4">
              {item.points.map((point) => (
                <li key={point} className="font-light">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
