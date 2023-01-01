import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Footer() {
  return (
    <>
    <div className="flex flex-col h-32">
        <div className="h-full bg-white">
          <div className="container flex flex-col items-center justify-between h-full gap-2 px-6 py-2 mx-auto text-sm text-left lg:text-base md:flex-row xl:text-lg">
            <div className="w-full text-prussian-blue">
              <h1 className="font-medium">© Copyright 2022 Ersakanti Belva</h1>
              <h1>Built with React, and TailwindCSS</h1>
            </div>
            <div className="flex flex-col w-full text-prussian-blue md:w-1/4 lg:w-2/5">
            <a href="mailto:ersakantibelva@gmail.com" target="_blank" className="flex items-center gap-3">
              <MdEmail style={{ color: '#1D3557' }}/>
              <h1>ersakantibelva@mail.com</h1>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/ersakanti-belva/" className="flex items-center gap-3">
              <FaLinkedin style={{ color: '#1D3557' }} />
              <h1>ersakantibelva</h1>
            </a>
            <a target="_blank" href="https://github.com/ersakantibelva" className="flex items-center gap-3">
              <FaGithub style={{ color: '#1D3557' }} />
              <h1>Ersakanti Belva</h1>
            </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}