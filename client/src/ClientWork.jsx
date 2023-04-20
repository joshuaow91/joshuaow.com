import { faCss3, faHtml5, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Tdesktop from '../public/images/tdesktop.png'
import Tmobile from '../public/images/ttradesmobile.jpeg'

const ClientWork = () => {
  return (
    <>
      <h1 className="flex justify-center font-montserrat font-bold  sm:mb-5 text-5xl sm:text-6xl tracking-tight text-zinc-700 dark:text-white">
        CLIENT WORK
      </h1>

      <div className="relative lg:border-l lg:border-t border-gray-200 dark:border-darkBlack flex flex-col p-4 lg:p-0">
        <div className="flex flex-col items-start ">
          <span className="hidden absolute lg:flex items-center justify-center w-7 h-7 bg-teal-500 text-zinc-100 rounded-full -left-3 -top-3 ring-8 ring-teal-100 dark:ring-zinc-900 dark:bg-teal-800 dark:text-white">
            <FontAwesomeIcon icon={faCode} />
          </span>
        </div>

      <div className="flex flex-col-reverse  justify-evenly items-center mt-14">
        <div className="flex flex-col lg:w-5/6 p-4 bg-white rounded-lg drop-shadow-lg  dark:bg-black -translate-y-16 mx-4 ">
          <h2 className="flex items-center flex-col gap-4 justify-center mb-1 text-4xl font-semibold text-black dark:text-white tracking-tight">
            TTrades.com
          </h2>
          <p className=" text-md font-light text-zinc-600 dark:text-gray-400 lg:justify-center flex py-2 px-4 indent-1">
          This is a mobile-first, custom link hub for a client operating as a content creator in the financial industry. 
        </p>
<p className="text-md font-light text-zinc-600 dark:text-gray-400 lg:justify-center flex py-2 px-4 ">
One of the highlights of this project was the integration of the YouTube API, which automatically fetched data from the client's most recent YouTube videos. This feature allowed for real-time updates and showcased the client's latest content, ensuring their audience remained engaged and informed.
</p>
<p className=" text-md font-light text-zinc-600 dark:text-gray-400 lg:justify-center flex py-2 px-4 ">
By delivering a tailored solution, this project not only enhanced the client's brand identity but also offered an easily scalable platform to accommodate future growth and the potential addition of new features or services. 
</p>
<p className="mb-4 text-md font-light text-zinc-600 dark:text-gray-400 lg:justify-center flex py-2 px-4 ">
The end result was a visually appealing, functional, and easily maintainable link hub that catered to the specific needs of the client and their target audience.

          </p>
          <p className="mb-2 text-sm font-normal leading-none text-zinc-400 dark:text-gray-500 justify-center gap-x-10 items-center flex">
            <FontAwesomeIcon icon={faReact} className="h-8 w-8" />
            <FontAwesomeIcon icon={faCss3} className="h-8 w-8" />
            <FontAwesomeIcon icon={faHtml5} className="h-8 w-8" />
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 fill-current text-zinc-400 dark:text-gray-500">
              <title>Tailwind CSS</title>
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
            </svg>
          </p>
          <div className="flex w-full justify-center">
              <a 
                href="https://ttrades.netlify.app/" 
                target="_blank"
                className=" flex items-center my-4 p-3 px-8 text-black dark:text-zinc-300 border-4 hover:border-slate-300  text-sm tracking-wider rounded-lg hover:scale-105 ease-in-out duration-300">
                Live Demo
              </a>
            </div>
        </div>

          <div className="mb-6 lg:w-2/3 inline-flex items-center p-6 pb-20  text-gray-900 bg-teal-500 rounded-lg dark:bg-teal-700 gap-x-2">
          <img src={Tdesktop} alt="Orderly" className="w-3/4 hover:scale-125 ease-in-out duration-300 rounded drop-shadow-2xl shadow-blackest" loading="lazy"/>
            <img src={Tmobile} alt="Orderly" className="w-1/4 hover:scale-125 ease-in-out duration-300 rounded drop-shadow-2xl shadow-blackest" loading="lazy"/>
          </div>
      </div>


    </div>
    </>
  );
};

export default ClientWork;