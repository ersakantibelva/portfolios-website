import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="h-[calc(100%-8rem)]">
      <section class="bg-landing bg-no-repeat bg-cover bg-center bg-fixed h-full">
        <div class="backdrop-brightness-25 h-full">
          <div class="mx-auto container max-w-screen-xl px-4 py-32 lg:flex lg:items-center h-full">
            <div className="flex flex-col justify-center h-full max-w-4xl mx-auto text-center 2xl:max-w-6xl">
              <div className="text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl">
                <span className="text-powder-blue">Hi,</span>
                <span className="text-imperial-red"> I'am Belva</span>
              </div>
              <div className="mt-2 text-2xl md:w-1/2 md:mx-auto text-powder-blue lg:text-4xl lg:w-3/5 2xl:text-7xl 2xl:w-full">
                a female dev, a full-stack developer, and an IT ethusiast.
              </div>
              <div className="flex flex-col w-3/4 gap-4 mx-auto mt-6 text-center 2xl:gap-6 md:justify-center md:flex-row flex-start lg:text-lg xl:text-xl 2xl:text-4xl">
                <Link to="/portfolio">
                  <div className="px-6 py-2 font-semibold rounded-full 2xl:py-4 2xl:px-10 bg-powder-blue text-prussian-blue">
                    see my portfolios
                  </div>
                </Link>
                <Link to="/resume">
                  <div className="px-6 py-2 font-semibold rounded-full 2xl:py-4 2xl:px-10 bg-imperial-red text-powder-blue">
                    about me
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
