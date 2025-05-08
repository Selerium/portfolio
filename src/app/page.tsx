"use client";

import { useState } from "react";
import { secondary } from "./fonts";

export default function Home() {
  const [imageSrcs, setImageSrcs] = useState([
    "/youth-sample.png",
    "/aziza-sample.png",
    "/junia-sample.png",
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
    // console.log(`${leftElement} - ${activeElement} - ${rightElement}`);
  }

  function moveRight() {
    let n = activeElement + 1;
    if (n == imageSrcs.length) n = 0;
    setActiveElement(n);
    setLeftElement(n - 1 < 0 ? imageSrcs.length - 1 : n - 1);
    setRightElement(n + 1 == imageSrcs.length ? 0 : n + 1);
    // console.log(`${leftElement} - ${activeElement} - ${rightElement}`);
  }

  return (
    <div className="h-dvh py-4 box-border w-11/12 flex flex-col justify-end items-center">
      <div className="w-full h-9/12 flex justify-center gap-4 items-center relative">
        {imageSrcs.slice(0, 3).map((img, index) => (
          <img
            src={img}
            key={index}
            className={`transition-all duration-300 absolute rounded-lg object-cover ${
              index == activeElement ? "z-30 h-5/6 sample-shadow" : "z-10 h-3/6 opacity-25"
            }
            ${
              index == leftElement ? '-translate-x-full cursor-pointer' : ''
            }
            ${
              index == rightElement ? 'translate-x-full cursor-pointer' : ''
            }
            `}
            onClick={index == leftElement ? moveLeft : index == rightElement ? moveRight : console.log}
          ></img>
        ))}
        <div className="w-50 h-50 bg-shadow -top-1/6 -left-1/6 z-0 absolute bg-secondary rounded-full"></div>
        <div className="w-50 h-50 bg-shadow -bottom-1/6 -right-1/6 z-0 absolute bg-secondary rounded-full"></div>
      </div>
      <div className="w-full h-2/12 flex justify-between items-center">
        <button className="cursor-pointer link" onClick={moveLeft}><img src="/arrow.svg"></img></button>
        <div className="flex flex-col justify-center items-center gap-4">
          <h1 className="text-6xl font-semibold tracking-tighter">your website could look like this</h1>
          <button className={`link cursor-pointer text-xl tracking-widest font-semibold ${secondary.className} uppercase py-2 px-4 bg-primary border border-white w-fit rounded-lg`}>get a quote</button>
        </div>
        <button className="cursor-pointer link" onClick={moveRight}><img src="/arrow.svg" className="rotate-180"></img></button>
      </div>
    </div>
  );
}
