import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa"
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
    <div className="flex flex-col h-32">
        <div className="h-full bg-white">
          <div className="container flex items-center justify-between h-full px-6 py-2 mx-auto text-left">
            <div className="w-1/2 text-prussian-blue">
              <h1 className="font-medium">© Copyright 2022 Ersakanti Belva</h1>
              <h1>Built with React, Redux, and TailwindCSS</h1>
            </div>
            <div className="flex flex-col w-1/4">
            <div className="flex items-center gap-3">
              <MdEmail style={{ color: '#1D3557' }}/>
              <h1>ersakantibelva@mail.com</h1>
            </div>
            <Link to="https://www.linkedin.com/in/ersakanti-belva/" className="flex items-center gap-3">
              <FaLinkedin style={{ color: '#1D3557' }} />
              <h1>ersakantibelva</h1>
            </Link>
            <Link to="https://github.com/ersakantibelva" className="flex items-center gap-3">
              <FaGithub style={{ color: '#1D3557' }} />
              <h1>Ersakanti Belva</h1>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}