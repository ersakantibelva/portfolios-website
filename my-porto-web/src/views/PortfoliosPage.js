import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import BackButton from "../components/BackButton";
import tiaSs from "../assets/this-is-august.png";
import portofolios from "../data/portfolios.json";

export default function ResumePage() {
  return (
    <div className="container flex flex-col min-h-screen mx-auto">
      <BackButton route={"/"} message={"Back to home"} />
      <div className="mt-4 text-5xl font-bold text-center text-prussian-blue">
        All Projects
      </div>

      <div className="flex flex-col gap-10 my-10">
        {portofolios &&
          portofolios.map((el) => {
            return (
              <div className="flex justify-around w-full">
                <div className="flex items-center w-full place-content-center">
                  <img alt="" width={500} src={el.imageUrl} />
                </div>
                <div className="flex flex-col w-full place-content-center text-prussian-blue">
                  <div className="text-2xl font-bold">{el.name}</div>
                  <div className="flex gap-3">
                    {el.techStack.map((ele) => {
                      return (
                      <div className="px-4 py-1 my-2 text-xs font-bold rounded-full text-imperial-red bg-powder-blue">
                        { ele }
                      </div>
                      )
                    })}
                  </div>
                  <div>
                    { el.description }
                  </div>
                  <a
                    href={el.githubLink}
                    target="_blank"
                    className="flex items-center gap-3 mt-3 font-semibold text-celadon-blue"
                  >
                    See in Github
                    <FaArrowRight />
                  </a>
                  {
                    el.deployedLink &&
                    <a
                    href={el.deployedLink}
                    target="_blank"
                    className="flex items-center gap-3 mt-3 font-semibold text-celadon-blue"
                  >
                    See website
                    <FaArrowRight />
                  </a>
                  }
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
