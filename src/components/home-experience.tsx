"use client";

import { primary } from "@/styles/fonts";
import Link from "next/link";
import { useStore } from "@/stores/SidebarStore";
import Expertise from "@/components/expertise";
import Resume from "@/components/resume";
import Hero from "@/components/hero";
import ScrollReveal from "@/components/scroll-reveal";

export default function HomeExperience() {
  const setSidebar = useStore((state: any) => state.setSidebar);
  const toggleLoader = useStore((state: any) => state.toggleLoader);

  const changeSite = () => {
    toggleLoader();
    setSidebar(true);
    window.setTimeout(() => {
      setSidebar(false);
      toggleLoader();
    }, 1000);
  };

  return (
    <div>
      <Hero changeSite={changeSite} />
      <Expertise changeSite={changeSite} />
      <div className="w-full flex flex-col justify-center items-center">
        <Resume />
        <ScrollReveal className="flex flex-col items-center gap-4 w-3/5 min-w-72 p-4 mb-8 rounded-lg border-primary border">
          <h2 data-reveal className="font-semibold text-3xl text-center tracking-tight">development made <span className="italic">convenient</span></h2>
          <p data-reveal className="w-3/5 font-light text-center">Need a website? A developer? An employee? Good suggestions for food? Reach out, and we&apos;ll make sure to get back to you with what you need.</p>
          <Link data-reveal className={`${primary.className} w-fit link rounded-lg border border-white p-2 pl-4 tracking-widest font-semibold hover:border-black bg-primary hover:text-black hover:bg-white hover:shadow-md shadow-blue-300/25 transition-all`} href="/connect">GET IN TOUCH</Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
