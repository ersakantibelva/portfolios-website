import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="h-[calc(100%-8rem)]">
      <section class="bg-landing bg-no-repeat bg-cover bg-center bg-fixed h-full">
        <div class="backdrop-brightness-25 h-full">
          <div class="mx-auto container max-w-screen-xl px-4 py-32 lg:flex lg:items-center h-full">
            <div className="flex flex-col justify-center h-full max-w-4xl mx-auto">
              <div className="text-6xl font-semibold">
                <span className="text-powder-blue">Hi,</span>
                <span className="text-imperial-red"> I'am Belva</span>
              </div>
              <div className="mt-2 text-3xl text-powder-blue">
                a female dev, a full-stack developer, and an IT ethusiast.
              </div>
              <div className="flex gap-4 mt-6 flex-start">
                <Link to="/portfolio">
                  <div className="px-6 py-2 font-semibold rounded-full bg-powder-blue text-prussian-blue">
                    see my portfolios
                  </div>
                </Link>
                <Link to="/resume">
                  <div className="px-6 py-2 font-semibold rounded-full bg-imperial-red text-powder-blue">
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
