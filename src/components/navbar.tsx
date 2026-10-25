"use client";

import { useState } from "react";
import { primary, secondary } from "../styles/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useStore } from "../stores/SidebarStore";

export default function NavBar() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
  const firstPath = usePathname();
  const pathname =
    firstPath.replace(basePath, "").replace(/\/+$/, "") || "/";
  const pages = ["welcome", "projects", "connect"];
  const desktopPages = [
    { label: "projects", href: "/projects" },
    { label: "connect", href: "/connect" },
  ];
  const isPageActive = (href: string) =>
    href === "/projects"
      ? pathname === href || pathname.startsWith(`${href}/`)
      : pathname === href;
  const [chosenPage, setChosenPage] = useState(-1);
  const loaderState = useStore((state: any) => state.showLoader);
  const toggleLoaderState = useStore((state: any) => state.toggleLoader);
  const sidebarState = useStore((state: any) => state.showSidebar);
  const setSidebarState = useStore((state: any) => state.setSidebar);

  function toggleSidebar() {
    setTimeout(
      () => {
        setSidebarState(!sidebarState);
        sidebarState ? toggleLoaderState() : "";
      },
      !sidebarState ? 0 : 1000
    );
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
          <Link
            onClick={() => {
              if (idx == chosenPage) setSidebarState(!sidebarState);
              else {
                setChosenPage(idx);
                toggleSidebar();
                toggleLoaderState();
              }
            }}
            href={page == "welcome" ? "/" : "/" + page}
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
          </Link>
        ))}
        <div
          className={`flex justify-center items-center absolute w-full h-full top-0 bg-black transition-all ${
            loaderState ? "opacity-100 z-40" : "opacity-0 -z-40"
          }`}
        >
          <div className="loaderParent w-32 h-32 flex justify-start items-start rounded-full border border-primary relative">
            <img
              src={`${basePath}/custom-cursor.png`}
              className="rotate-90 w-1/3 h-1/3 object-cover object-left"
            ></img>
            <div className="absolute flex justify-center items-center w-full h-full">
              <h1
                className={`loaderChild text-3xl ${primary.className} tracking-tight pr-0.5 pb-0.5 text-center font-semibold`}
              >
                adi
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`w-full fixed overflow-y-clip flex items-start justify-center left-0 top-0 z-50`}
    >
      {Sidebar()}
      <nav
        className={`flex w-11/12 justify-between items-center h-fit py-4 backdrop-blur-3xl`}
      >
        <Link href="/" className="hidden lg:block w-20 shrink-0">
          <img
            src={`${basePath}/adi-logo.svg`}
            className="w-20 h-auto"
            alt="adi. home"
          />
        </Link>
        <img
          src={`${basePath}/custom-cursor.png`}
          className="block lg:hidden w-6 mr-20 h-auto"
        ></img>
        <div
          className={`hidden lg:flex flex-1 items-center justify-center gap-10 ${secondary.className}`}
        >
          {desktopPages.map((page) => {
            const active = isPageActive(page.href);

            return (
              <Link
                key={page.href}
                href={page.href}
                aria-current={active ? "page" : undefined}
                className={`relative py-2 text-xl font-extralight tracking-wide transition-colors ${
                  active ? "text-white" : "text-white/55 hover:text-white"
                }`}
              >
                {page.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-px bg-white transition-all duration-300 ${
                    active ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </div>
        <img
          onClick={toggleSidebar}
          src={`${basePath}/hamborgir-menu.svg`}
          className="block lg:hidden w-6 h-auto"
        ></img>
        <div className="hidden lg:flex h-full w-40 items-center justify-between">
          <a href="mailto:johnadithya008@gmail.com">
            <img
              className="h-7 navLink transition-all"
              src={`${basePath}/mail.svg`}
            ></img>
          </a>
          <a href="https://github.com/selerium">
            <img
              className="h-7 navLink transition-all"
              src={`${basePath}/github.svg`}
            ></img>
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
