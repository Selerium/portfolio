"use client"

import { useState } from "react";
import { primary, secondary } from "../styles/fonts";
import "../styles/links.css";
import Link from "next/link";
import { usePathname } from "next/navigation";


export default function NavBar() {
  const pages = ['welcome', 'about', 'projects', 'connect'];
  const [chosenPage, setChosenPage] = useState(0);
  const [showSidebar, setShowSidebar] = useState(false);

  function toggleSidebar() {
    setShowSidebar(!showSidebar);
    console.log(usePathname());
  }

  function Sidebar() {
    return (
      <div className={`${showSidebar ? 'opacity-100 z-50' : 'opacity-0 -z-50 translate-y-full'} absolute transition-all top-0 w-dvw h-dvh flex flex-col gap-12 justify-center items-center bg-black`}>
        <img className={`delayed-text ${showSidebar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} transition-all w-20 h-auto p-4`} src="/adi-logo.svg"></img>
        {pages.map((page, idx) => <Link onClickCapture={() => setChosenPage(idx)} href={page == 'welcome' ? '/' : page} className={`cursor-pointer delayed-text text-3xl ${primary.className} ${showSidebar ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-full'} transition-all uppercase tracking-widest font-semibold`} key={`${page}`} onClick={toggleSidebar}>{ page }</Link>)}
      </div>
    )
  }

  return (
    <div
      className={`z-40 w-full fixed flex items-center justify-center left-0 top-0 py-4`}
    >
      {
        Sidebar()
      }
      <nav className={`flex w-11/12 justify-between items-center h-fit`}>
        <img src="/adi-logo.svg" className="w-20 mr-20 h-auto"></img>
        <div onClick={toggleSidebar} className="flex gap-2 items-center justify-center relative nav-dropdown">
          <div className="h-[1px] w-14 bg-white"></div>
          <h4 className={`${secondary.className} transition-all cursor-pointer font-extralight text-xl glow`}>
            { pages[chosenPage] }
          </h4>
          <div className="h-[1px] w-14 bg-white"></div>
          <svg
            viewBox="0 0 10 5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute translate-y-5 w-3 transition-all cursor-pointer"
          >
            <path d="M1 1L5 4L9 1" stroke="white" />
          </svg>
        </div>
        <div className="h-full w-40 flex items-center justify-between">
          <a href="mailto:johnadithya008@gmail.com">
            <img className="h-7 link" src="mail.svg"></img>
          </a>
          <a href="https://github.com/selerium">
            <img className="h-7 link" src="github.svg"></img>
          </a>
          <a href="https://linkedin.com/in/johnadi">
            <img className="h-7 link" src="linkedin.svg"></img>
          </a>
        </div>
      </nav>
    </div>
  );
}
