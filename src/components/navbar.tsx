"use client";

import { useState, useEffect } from "react";
import { primary, secondary } from "../styles/fonts";
import { usePathname } from "next/navigation";
import { useStore } from "../stores/SidebarStore";
import TransitionLink from "./TransitionLink";

const pages = ["welcome", "about", "projects", "connect"];

export default function NavBar() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const pathname = usePathname();
  const [chosenPage, setChosenPage] = useState(-1);
  const sidebarState = useStore((state: any) => state.showSidebar);
  const setSidebarState = useStore((state: any) => state.setSidebar);

  // Sync chosenPage with current pathname
  useEffect(() => {
    const currentPath = pathname.replace(/\/$/, ''); // Remove trailing slash
    if (currentPath === '' || currentPath === '/') {
      setChosenPage(0); // welcome
    } else {
      const pageIndex = pages.findIndex(page => `/${page}` === currentPath);
      if (pageIndex !== -1) {
        setChosenPage(pageIndex);
      }
    }
  }, [pathname]);

  // Get current page name for display
  function getCurrentPageName() {
    if (chosenPage !== -1) {
      return pages[chosenPage];
    }
    const currentPath = pathname.replace(/\/$/, ''); // Remove trailing slash
    if (currentPath === '' || currentPath === '/') {
      return "welcome";
    }
    const pageName = currentPath.substring(1); // Remove leading slash
    return pages.includes(pageName) ? pageName : "welcome";
  }

  function toggleSidebar() {
    setSidebarState(!sidebarState);
  }

  function Sidebar() {
    return (
      <div
        className={`${
          sidebarState ? "opacity-100 z-50" : "opacity-0 -z-50 translate-y-full"
        } fixed transition-all top-0 w-dvw h-dvh flex flex-col gap-12 justify-center items-center bg-black`}
      >
        <img
          className={`delayed-text
            ${
              sidebarState
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            } transition-all w-20 h-auto p-4`}
          src={`${basePath}/adi-logo.svg`}
        ></img>
        {pages.map((page, idx) => (
          <TransitionLink
            onClick={() => {
              if (idx == chosenPage) {
                setSidebarState(false);
              } else {
                setChosenPage(idx);
                setSidebarState(false);
              }
            }}
            href={page == "welcome" ? "/" : `/${page}`}
            className={`router-link transition-all cursor-pointer delayed-text text-3xl ${
              primary.className
            } ${
              sidebarState
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-full"
            } transition-all uppercase tracking-widest font-semibold`}
            key={`${page}`}
          >
            {page}
          </TransitionLink>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`w-full h-dvh absolute overflow-y-clip flex items-start justify-center left-0 top-0 py-4`}
    >
      {Sidebar()}
      <nav className={`z-40 flex w-11/12 justify-between items-center h-fit`}>
        <img
          src={`${basePath}/adi-logo.svg`}
          className="hidden lg:block w-20 mr-20 h-auto"
        ></img>
        <img
          src={`${basePath}/custom-cursor.png`}
          className="block lg:hidden w-6 mr-20 h-auto"
        ></img>
        <div
          onClick={toggleSidebar}
          className="hidden lg:flex gap-2 items-center justify-center relative nav-dropdown"
        >
          <div className="h-[1px] w-14 bg-white"></div>
          <h4
            className={`${secondary.className} transition-all cursor-pointer font-extralight text-xl glow`}
          >
            {getCurrentPageName()}
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
        <img
          onClick={toggleSidebar}
          src={`${basePath}/hamborgir-menu.svg`}
          className="block lg:hidden w-6 h-auto"
        ></img>
        <div className="hidden lg:flex h-full w-40 items-center justify-between">
          <a href="mailto:johnadithya008@gmail.com">
            <img className="h-7 navLink transition-all" src={`${basePath}/mail.svg`}></img>
          </a>
          <a href="https://github.com/selerium">
            <img className="h-7 navLink transition-all" src={`${basePath}/github.svg`}></img>
          </a>
          <a href="https://linkedin.com/in/johnadi">
            <img
              className="h-7 navLink transition-all"
              src={`${basePath}/linkedin.svg`}
            ></img>
          </a>
        </div>
      </nav>
    </div>
  );
}
