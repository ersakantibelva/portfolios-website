import { Link } from "react-router-dom";
import githubLogo from "../assets/github-mark.png";
import portoLogo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-20 flex items-center h-16 bg-white">
      <div className="container top-0 grid w-full h-16 grid-cols-4 mx-auto">
        <Link to="/" className="flex items-center w-3/4 overflow-hidden lg:4/5 xl:w-1/2 flex-start justify-self-center">
          <img src={portoLogo} alt="" />
        </Link>
        <div className="flex items-center justify-around w-full col-span-3 col-start-2 font-semibold md:col-span-2 md:col-start-3 lg:col-span-1 lg:col-start-4 text-prussian-blue">
          <Link to="/">
            <div>home</div>
          </Link>
          <Link to="/portfolio">
            <div>portfolios</div>
          </Link>
          <Link to="/resume">
            <div>about</div>
          </Link>
          <a href="https://github.com/ersakantibelva" target="_blank">
            <img alt="" src={githubLogo} width="36" />
          </a>
        </div>
      </div>
    </div>
  );
}
