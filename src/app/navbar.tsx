import { primary, secondary } from "./layout";
import './links.css'

export default function NavBar() {
  return (
    <nav className={`flex justify-between items-center h-11`}>
      <img src="/adi-logo.svg" className="w-20 mr-20 h-auto"></img>
      <div className="w-10/12 flex gap-2 items-center justify-center ">
        <div className="h-[1px] w-14 bg-white"></div>
        <h4 className={`${secondary.className} font-extralight text-xl glow`}>
          welcome
        </h4>
        <div className="h-[1px] w-14 bg-white"></div>
      </div>
      <div className="h-full w-40 flex items-center justify-between">
        <a href='mailto:johnadithya008@gmail.com'><img className="h-7 link" src="mail.svg"></img></a>
        <a href='https://github.com/selerium'><img className="h-7 link" src="github.svg"></img></a>
        <a href='https://linkedin.com/in/johnadi'><img className="h-7 link" src="linkedin.svg"></img></a>
      </div>
    </nav>
  );
}
