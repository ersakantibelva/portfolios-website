import { FaArrowRight } from 'react-icons/fa'
import BackButton from "../components/BackButton";
import tiaSs from "../assets/this-is-august.png";
import { Link } from 'react-router-dom';

export default function ResumePage() {
  return (
    <div className="container flex flex-col min-h-screen mx-auto">
      <BackButton route={"/"} message={"Back to home"} />
      <div className="mt-4 text-5xl font-bold text-center text-prussian-blue">
        All Projects
      </div>

      <div className='flex flex-col gap-10 my-10'>
      <div className="flex justify-around w-full">
        <div className="flex items-center w-full place-content-center">
          <img alt='' width={500} src={tiaSs} />
        </div>
        <div className="flex flex-col w-full place-content-center text-prussian-blue">
          <div className='text-2xl font-bold'>
            This Is August - ECommerce App
          </div>
          <div className='flex gap-3'>
            <div className='px-4 py-1 my-2 text-xs font-bold rounded-full text-imperial-red bg-powder-blue'>
              ReactJs
            </div>
            <div className='px-4 py-1 my-2 text-xs font-bold rounded-full text-imperial-red bg-powder-blue'>
              ExpressJs
            </div>
            <div className='px-4 py-1 my-2 text-xs font-bold rounded-full text-imperial-red bg-powder-blue'>
              TailwindCSS
            </div>
          </div>
          <div>
            ReactJs app with user and admin client-side, ExpressJs server, and
            PostgreSQl as database. Deployed with Firebase and AWS.
          </div>
          <Link to="" className='flex items-center gap-3 mt-3 font-semibold text-celadon-blue'>
            See detail
            <FaArrowRight />
          </Link>
        </div>
      </div>

      <div className="flex justify-around w-full">
        <div className="flex items-center w-full place-content-center">
          <img alt='' width={500} src={tiaSs} />
        </div>
        <div className="flex flex-col w-full place-content-center text-prussian-blue">
          <div className='text-2xl font-bold'>
            This Is August - ECommerce App
          </div>
          <div className='flex gap-3'>
            <div className='px-4 py-1 my-2 text-xs font-bold rounded-full text-imperial-red bg-powder-blue'>
              ReactJs
            </div>
            <div className='px-4 py-1 my-2 text-xs font-bold rounded-full text-imperial-red bg-powder-blue'>
              ExpressJs
            </div>
            <div className='px-4 py-1 my-2 text-xs font-bold rounded-full text-imperial-red bg-powder-blue'>
              TailwindCSS
            </div>
          </div>
          <div>
            ReactJs app with user and admin client-side, ExpressJs server, and
            PostgreSQl as database. Deployed with Firebase and AWS.
          </div>
          <Link to="" className='flex items-center gap-3 mt-3 font-semibold text-celadon-blue'>
            See detail
            <FaArrowRight />
          </Link>
        </div>
      </div>
      </div>

    </div>
  );
}
