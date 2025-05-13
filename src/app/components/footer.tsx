import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full flex justify-center items-end pt-20 p-4 z-50">
      <div className="w-11/12 flex justify-between items-start text-white">
        <img src="/adi-logo.svg" className="h-8 w-auto"></img>
        <div className="flex flex-col gap-4">
            <Link href="/">home</Link>
            <Link href="/about">about</Link>
            <Link href="/connect">connect</Link>
        </div>
        <div className="flex flex-col gap-4">
            <a href="" className="cursor-not-allowed">blog</a>
            <Link href="/projects">projects</Link>
        </div>
        <div className="flex flex-col gap-4">
            <a href="https://github.com/selerium">github</a>
            <a href="mailto:johnadithya008@gmail.com">mail</a>
            <a href="https://linkedin.com/in/johnadi">linkedin</a>
        </div>
      </div>
    </footer>
  );
}
