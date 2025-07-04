"use client";

import { useState } from "react";
import { primary, secondary } from "../styles/fonts";

export default function About() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  const sections = [
    {
      title: "life",
      description:
        "I’m a young & passionate creative that loves to develop solutions that are intuitive but also aesthetically pleasing - because what’s more important than a good first impression? I’m passionate about way too many things so I end up dabbling into every interest I have. After all, if God’s given you one shot at life, you gotta make the most of it.",
    },
    {
      title: "career",
      description:
        "I currently work as a software developer for a start-up that combines Web3 and Web2 technologies together. I also do freelance web development and help new companies with tech consultation and advice as they may need. I have extensive knowledge of C, C++, Python and C# for Unity. Tech stuff aside, I work as the youth director at my local church.",
    },
    {
      title: "hobbies",
      description:
        "My interests lie in (honestly too many) creative fields. I’ve always been an avid reader and a consumer of all sorts of media - as long as there’s a story to tell, I’ll be there to listen. I dabble in photography and videography, as well as music and sound production, working on music and other recordings in my own free time.",
    },
    {
      title: "region",
      description:
        "I currently live and work in the United Arab Emirates, but I’m originally from India. I’ve worked remotely for international companies that have teams spread across the globe. I would consider relocating for a job, but nothing beats home. I adapt to all time zones and plan my schedule accordingly, delivering quality work on time, every time.",
    },
  ];
  const [activeSection, setActiveSection] = useState(-1);

  function clickSection(value: number) {
    if (activeSection == value) setActiveSection(-1);
    else setActiveSection(value);
  }

  function sectionDivs() {
    return sections.map((section, idx) => (
      <div
        key={section.title}
        onClick={() => clickSection(idx)}
        className={`${
          idx == activeSection ? "w-full h-full lg:w-2/5" : "h-1/6"
        } w-full lg:w-1/5 grow lg:h-4/5 cursor-pointer transition-all rounded-lg flex justify-center items-center relative`}
      >
        <div
          className={`absolute transition-all about-hover overflow-y-clip flex flex-col justify-center items-center w-full h-full rounded-lg z-50`}
        >
          <div className="absolute w-full h-full z-10 not-lg:bg-black not-lg:opacity-50 layer-gradient rounded-lg"></div>
          <img src={`${basePath}/portfolio-images/${section.title}.png`} className={`object-cover rounded-lg h-full w-full opacity-75 ${idx == activeSection ? 'grayscale-0' : 'grayscale-100'}`}></img>
          <h2
            className={`${idx == activeSection ? 'top-2 hidden lg:block lg:top-10' : 'lg:top-1/2'} mix-blend-normal transition-all absolute z-30 pointer-events-none ${primary.className} w-5/6 text-center tracking-widest uppercase text-2xl lg:text-4xl font-semibold`}
          >
            {section.title}
          </h2>
          <p
            className={`${
          idx == activeSection ? "opacity-100 lg:bottom-10" : "opacity-0 bottom-1/2"
        } absolute z-30 pointer-events-none transition-all ${secondary.className} w-11/12 lg:w-5/6 text-center text-md font-light`}
          >
            {section.description}
          </p>
        </div>
      </div>
    ));
  }

  return (
    <div
      id="about"
      className="h-dvh py-4 box-border w-full flex justify-center items-center overflow-x-clip relative z-0"
    >
      <div className="w-11/12 h-5/6 lg:h-full gap-8 flex flex-col lg:flex-row items-center">
        {sectionDivs()}
      </div>
    </div>
  );
}
