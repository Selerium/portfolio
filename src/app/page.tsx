"use client";

import { useEffect, useRef, useState } from "react";
import { primary } from "../styles/fonts";
import Link from "next/link";
import { useStore } from "../stores/SidebarStore";
import Expertise from "@/components/expertise";
import Resume from "@/components/resume";
import { animate, createScope, set, splitText, stagger } from "animejs";

export default function Home() {
  const root = useRef(null);
  const scope = useRef(null as any);

  useEffect(() => {
    scope.current = createScope({ root }).add((self) => {
      const split = splitText("h1", {
        words: { wrap: "visible" },
      });

      set(split.words, {
        opacity: 0,
      });
      split.$target.classList.remove("invisible");

      animate(".imageCards", {
        filter: ["opacity(0)", "opacity(1)"],
        translateY: [100, 0],
        delay: stagger(50),
        easing: "easeOutQuad",
        duration: 150,
      });

      animate(split.words, {
        translateY: [10, 0],
        opacity: [0, 1],
        duration: 450,
        easing: "easeIn",
        delay: stagger(50),
      });

      animate(".callToAction", {
        translateY: [10, 0],
        opacity: [0, 1],
        delay: 300,
        duration: 150,
      });
    });

    return () => scope.current.revert();
  }, []);

  const setSidebar = useStore((state: any) => state.setSidebar);
  const toggleLoader = useStore((state: any) => state.toggleLoader);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const imageSrcs = [
    `${basePath}/youth-sample.png`,
    `${basePath}/aziza-sample.png`,
    `${basePath}/junia-sample.png`,
  ];
  const [leftElement, setLeftElement] = useState(0);
  const [activeElement, setActiveElement] = useState(1);
  const [rightElement, setRightElement] = useState(2);

  function moveLeft() {
    let n = activeElement - 1;
    if (n < 0) n = imageSrcs.length - 1;
    setActiveElement(n);
    setLeftElement(n - 1 < 0 ? imageSrcs.length - 1 : n - 1);
    setRightElement(n + 1 == imageSrcs.length ? 0 : n + 1);
  }

  function moveRight() {
    let n = activeElement + 1;
    if (n == imageSrcs.length) n = 0;
    setActiveElement(n);
    setLeftElement(n - 1 < 0 ? imageSrcs.length - 1 : n - 1);
    setRightElement(n + 1 == imageSrcs.length ? 0 : n + 1);
  }

  const changeSite = (e: any) => {
    toggleLoader();
    setSidebar(true);
    setTimeout(() => {
      setSidebar(false);
      toggleLoader();
    }, 1000);
  };

  return (
    <div ref={root}>
      <div className="h-dvh py-4 box-border w-full flex flex-col justify-end items-center overflow-x-clip relative z-0">
        <div className="w-11/12 h-9/12 flex justify-center gap-4 items-center relative">
          {imageSrcs.slice(0, 3).map((img, index) => (
            <img
              src={img}
              key={index}
              draggable={false}
              style={{ filter: "opacity(0" }}
              className={`imageCards transition-all duration-300 absolute rounded-lg object-cover ${
                index == activeElement
                  ? "z-10 max-w-8/12 min-w-56 max-h-5/6 min-h-96 sample-shadow"
                  : "z-0 max-w-5/12 min-w-42 max-h-3/6 min-h-80 opacity-25"
              }
            ${index == leftElement ? "-translate-x-full cursor-pointer" : ""}
            ${index == rightElement ? "translate-x-full cursor-pointer" : ""}
            object-cover
            `}
              onClick={
                index == leftElement
                  ? moveLeft
                  : index == rightElement
                  ? moveRight
                  : console.log
              }
            ></img>
          ))}
        </div>
        <div className="w-11/12 h-2/12 gap-4 flex justify-between relative items-center z-0">
          <button
            className="not-lg:hidden callToAction opacity-0 cursor-pointer link"
            onClick={moveLeft}
          >
            <img src={`${basePath}/arrow.svg`}></img>
          </button>
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <h1 className="invisible text-2xl text-center lg:text-6xl font-semibold tracking-tighter">
              your website could look like this
            </h1>
            <Link
              href="/connect"
              onClick={changeSite}
              className={`callToAction opacity-0 link rounded-lg border border-white p-2 pl-4 tracking-widest font-semibold hover:border-black bg-primary hover:text-black hover:bg-white hover:shadow-md shadow-blue-300/25 transition-all ${primary.className}`}
            >
              GET A QUOTE
            </Link>
          </div>
          <button
            className="not-lg:hidden callToAction opacity-0 cursor-pointer link"
            onClick={moveRight}
          >
            <img src={`${basePath}/arrow.svg`} className="rotate-180"></img>
          </button>
        </div>
      </div>
      <Expertise changeSite={changeSite} />
      <div className="w-full flex flex-col justify-center items-center">
        <Resume />
        <div className="flex flex-col items-center gap-4 w-3/5 min-w-72 p-4 mb-8 rounded-lg border-primary border">
          <h2 className="font-semibold text-3xl text-center tracking-tight">
            development made <span className="italic">convenient</span>
          </h2>
          <p className="w-3/5 font-light text-center">
            Need a website? A developer? An employee? Good suggestions for food?
            Reach out, and we&apos;ll make sure to get back to you with what you
            need.
          </p>
          <Link
            className={`${primary.className} w-fit link rounded-lg border border-white p-2 pl-4 tracking-widest font-semibold hover:border-black bg-primary hover:text-black hover:bg-white hover:shadow-md shadow-blue-300/25 transition-all`}
            href="/connect"
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
    </div>
  );
}
