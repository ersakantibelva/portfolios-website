import { Link } from "react-router-dom";
import githubLogo from "../assets/github-mark.png";
import portoLogo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-20 flex items-center h-16 bg-white">
      <div className="container top-0 grid w-full h-16 grid-cols-4 mx-auto">
        <Link to="/" className="flex items-center max-h-full overflow-hidden flex-start">
          <img src={portoLogo} width="220" alt="" />
        </Link>
        <div className="flex items-center justify-around w-full col-start-4 font-semibold text-prussian-blue">
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
