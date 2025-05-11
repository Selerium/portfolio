import { primary } from "../styles/fonts";

export default function About() {
  const sections = ["life", "career", "hobbies", "region"];

  function sectionDivs() {
    return sections.map((section) => (
      <div key={section} className="w-1/5 grow h-4/5 bg-black cursor-pointer transition-all rounded-lg flex justify-center items-center relative">
        <div className="absolute transition-all w-full h-full rounded-lg about-hover z-10"></div>
        <h2
          className={`absolute pointer-events-none z-50 ${primary.className} tracking-widest uppercase text-2xl font-semibold`}
        >
          {section}
        </h2>
      </div>
    ));
  }

  return (
    <div
      id="about"
      className="h-dvh py-4 box-border w-full flex justify-center items-center overflow-x-clip relative z-0"
    >
      <div className="w-11/12 h-full gap-8 flex items-center">
        {sectionDivs()}
      </div>
    </div>
  );
}
