"use client"

import Link from "next/link";
import { useStore } from "../stores/SidebarStore";
import { useRouter } from "next/router";

export default function Footer() {
  const {basePath} = useRouter();
  const loader = useStore((state: any) => state.toggleLoader);
  const sidebar = useStore((state: any) => state.setSidebar);
  
  function showLoader() {
    loader();
    sidebar(true);
    setTimeout(() => {
      loader();
      sidebar(false);
    }, 3000);
  }

  return (
    <footer className="w-full flex justify-center items-end py-20 z-30 border-t border-gray-300 relative">
      <div className="absolute bg-black opacity-75 w-full h-full top-0 z-30"></div>
      <div className="w-11/12 flex flex-col lg:flex-row justify-between z-40 items-center gap-8 lg:gap-0 lg:items-start text-white">
        <img src={`/${basePath}/adi-logo.svg`} className="h-8 w-auto"></img>
        <div className="flex flex-row lg:flex-col gap-4">
          <Link onClick={showLoader} href="/">home</Link>
          <Link onClick={showLoader} href="/about">about</Link>
          <Link onClick={showLoader} href="/connect">connect</Link>
        </div>
        <div className="flex flex-row lg:flex-col gap-4">
          <a className="relative cursor-not-allowed text-gray-300">
            blog<span className="pointer-events-none transition-all absolute w-30 -top-1.5 left-2/3 px-2 py-1 bg-white text-black border border-primary text-center rounded-lg z-50">coming soon!</span>
          </a>
          <Link onClick={showLoader} href="/projects">projects</Link>
        </div>
        <div className="flex flex-row lg:flex-col gap-4">
          <Link href="https://github.com/selerium">github</Link>
          <Link href="mailto:johnadithya008@gmail.com">mail</Link>
          <Link href="https://linkedin.com/in/johnadi">linkedin</Link>
        </div>
      </div>
    </footer>
  );
}
