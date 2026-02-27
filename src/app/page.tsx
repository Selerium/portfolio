"use client";

import { useState } from "react";
import { primary } from "../styles/fonts";
import Link from "next/link";
import { useStore } from "../stores/SidebarStore";

export default function Home() {
  const setSidebar = useStore((state: any) => state.setSidebar);
  const toggleLoader = useStore((state: any) => state.toggleLoader);
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

  const [imageSrcs, setImageSrcs] = useState([
    `${basePath}/youth-sample.png`,
    `${basePath}/aziza-sample.png`,
    `${basePath}/junia-sample.png`,
  ]);
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

  return (
    <div className="h-dvh py-4 box-border w-full flex flex-col justify-end items-center overflow-x-clip relative z-0">
      <div className="w-11/12 h-9/12 flex justify-center gap-4 items-center relative">
        {imageSrcs.slice(0, 3).map((img, index) => (
          <img
            src={img}
            key={index}
            className={`transition-all duration-300 absolute rounded-lg object-cover ${
              index == activeElement
                ? "z-30 max-w-8/12 min-w-56 max-h-5/6 min-h-96 sample-shadow"
                : "z-10 max-w-5/12 min-w-42 max-h-3/6 min-h-80 opacity-25"
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
      <div className="w-11/12 h-2/12 gap-4 flex justify-between relative items-center">
        <button className="cursor-pointer link" onClick={moveLeft}>
          <img src={`${basePath}/arrow.svg`}></img>
        </button>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-2xl text-center lg:text-6xl font-semibold tracking-tighter">
            your website could look like this
          </h1>
          <Link
            href="/connect"
            onClick={() => {
              toggleLoader();
              setSidebar(true);
              setTimeout(() => {
                setSidebar(false);
                toggleLoader();
              }, 3000);
            }}
            className={`link cursor-pointer text-sm lg:text-xl tracking-widest lg:tracking-widest font-semibold ${primary.className} text-center uppercase py-2 pl-2 lg:pl-7 px-1 lg:px-4 bg-primary border border-white w-fit rounded-lg`}
          >
            get a quote
          </Link>
        </div>
        <button className="cursor-pointer link" onClick={moveRight}>
          <img src={`${basePath}/arrow.svg`} className="rotate-180"></img>
        </button>
      </div>
    </div>
  );
}
