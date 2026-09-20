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
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);
    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);
    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      scope.current?.revert();
      return;
    }

    scope.current = createScope({ root }).add(() => {
      const split = splitText("h1", { words: { wrap: "visible" } });
      set(split.words, { opacity: 0 });
      split.$target.classList.remove("invisible");

      animate(".imageCards", {
        opacity: [0, 1],
        delay: stagger(80),
        easing: "easeOutQuad",
        duration: 450,
      });

      animate(split.words, {
        translateY: [18, 0],
        opacity: [0, 1],
        duration: 550,
        easing: "easeOutCubic",
        delay: stagger(65),
      });

      animate(".callToAction", {
        translateY: [12, 0],
        opacity: [0, 1],
        delay: 450,
        duration: 350,
        easing: "easeOutCubic",
      });
    });

    return () => scope.current?.revert();
  }, [reducedMotion]);

  const setSidebar = useStore((state: any) => state.setSidebar);
  const toggleLoader = useStore((state: any) => state.toggleLoader);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const imageSrcs = [
    `${basePath}/youth-sample.png`,
    `${basePath}/aziza-sample.png`,
    `${basePath}/junia-sample.png`,
  ];
  const [activeElement, setActiveElement] = useState(1);

  const setActive = (index: number) => {
    setActiveElement((index + imageSrcs.length) % imageSrcs.length);
  };
  const moveLeft = () => setActive(activeElement - 1);
  const moveRight = () => setActive(activeElement + 1);

  const changeSite = () => {
    toggleLoader();
    setSidebar(true);
    window.setTimeout(() => {
      setSidebar(false);
      toggleLoader();
    }, 1000);
  };

  return (
    <div ref={root}>
      <div className="h-dvh py-4 box-border w-full flex flex-col justify-end items-center overflow-x-clip relative z-0">
        <div className="w-11/12 h-9/12 flex justify-center gap-4 items-center relative">
          {imageSrcs.map((img, index) => {
            const isActive = index === activeElement;
            const isLeft = index === (activeElement - 1 + imageSrcs.length) % imageSrcs.length;
            const isRight = index === (activeElement + 1) % imageSrcs.length;

            return (
              <button
                type="button"
                key={img}
                aria-label={isLeft ? "Show previous project" : isRight ? "Show next project" : "Current project preview"}
                aria-current={isActive}
                disabled={isActive}
                className={`imageCards transition-all duration-500 absolute rounded-lg overflow-hidden ${
                  isActive
                    ? "z-10 max-w-8/12 min-w-56 max-h-5/6 min-h-96 sample-shadow"
                    : "z-0 max-w-5/12 min-w-42 max-h-3/6 min-h-80 opacity-25"
                } ${
                  isLeft ? "-translate-x-full cursor-pointer" : ""
                } ${
                  isRight ? "translate-x-full cursor-pointer" : ""
                }`}
                onClick={isLeft ? moveLeft : isRight ? moveRight : undefined}
              >
                <img
                  src={img}
                  draggable={false}
                  alt={isActive ? "Featured project preview" : "Project preview"}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
        </div>
        <div className="w-11/12 h-2/12 gap-4 flex justify-between relative items-center z-0">
          <button aria-label="Previous project" className="not-lg:hidden callToAction opacity-0 cursor-pointer link" onClick={moveLeft}>
            <img src={`${basePath}/arrow.svg`} alt="" />
          </button>
          <div className="w-full flex flex-col justify-center items-center gap-4">
            <h1 className="invisible text-2xl text-center lg:text-6xl font-semibold tracking-tighter">
              your website could look like this
            </h1>
            <Link href="/connect" onClick={changeSite} className={`callToAction opacity-0 link rounded-lg border border-white p-2 pl-4 tracking-widest font-semibold hover:border-black bg-primary hover:text-black hover:bg-white hover:shadow-md shadow-blue-300/25 transition-all ${primary.className}`}>
              GET A QUOTE
            </Link>
          </div>
          <button aria-label="Next project" className="not-lg:hidden callToAction opacity-0 cursor-pointer link" onClick={moveRight}>
            <img src={`${basePath}/arrow.svg`} alt="" className="rotate-180" />
          </button>
        </div>
      </div>
      <Expertise changeSite={changeSite} />
      <div className="w-full flex flex-col justify-center items-center">
        <Resume />
        <div className="flex flex-col items-center gap-4 w-3/5 min-w-72 p-4 mb-8 rounded-lg border-primary border">
          <h2 className="font-semibold text-3xl text-center tracking-tight">development made <span className="italic">convenient</span></h2>
          <p className="w-3/5 font-light text-center">Need a website? A developer? An employee? Good suggestions for food? Reach out, and we&apos;ll make sure to get back to you with what you need.</p>
          <Link className={`${primary.className} w-fit link rounded-lg border border-white p-2 pl-4 tracking-widest font-semibold hover:border-black bg-primary hover:text-black hover:bg-white hover:shadow-md shadow-blue-300/25 transition-all`} href="/connect">GET IN TOUCH</Link>
        </div>
      </div>
    </div>
  );
}
