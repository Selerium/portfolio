"use client"

import Link from "next/link";
import TransitionLink from "./TransitionLink";

export default function Footer() {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

  return (
    <footer className="w-full flex justify-center items-end py-20 z-30 border-t border-gray-300 relative">
      <div className="absolute bg-black opacity-75 w-full h-full top-0 z-30"></div>
      <div className="w-11/12 flex flex-col lg:flex-row justify-between z-40 items-center gap-8 lg:gap-0 lg:items-start text-white">
        <img src={`${basePath}/adi-logo.svg`} className="h-8 w-auto"></img>
        <div className="flex flex-row lg:flex-col gap-4">
          <TransitionLink href="/">home</TransitionLink>
          <TransitionLink href="/about">about</TransitionLink>
          <TransitionLink href="/connect">connect</TransitionLink>
        </div>
        <div className="flex flex-row lg:flex-col gap-4">
          <a className="relative cursor-not-allowed text-gray-300">
            blog<span className="pointer-events-none transition-all absolute w-30 -top-1.5 left-2/3 px-2 py-1 bg-white text-black border border-primary text-center rounded-lg z-50">coming soon!</span>
          </a>
          <TransitionLink href="/projects">projects</TransitionLink>
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
