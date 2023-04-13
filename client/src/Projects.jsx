import { faCss3, faHtml5, faJira, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Orderly from './assets/orderly.png';
import Nasa from './assets/nasa.png';
import Img from './assets/img.png';

const Projects = () => {
  return (
    <>
      <h1 className="flex justify-center font-montserrat font-bold mb-10 text-6xl tracking-tight text-zinc-700 dark:text-white">
        PROJECTS
      </h1>

      <div className="relative lg:border-l lg:border-t border-gray-200 dark:border-darkBlack flex flex-col lg:gap-16 p-4 lg:p-0">
        <div className="flex flex-col items-start ">
          <span className="hidden absolute lg:flex items-center justify-center w-7 h-7 bg-slate-200 text-zinc-700 rounded-full -left-3 -top-3 ring-8 ring-slate-100 dark:ring-gray-900 dark:bg-teal-500 dark:text-white">
            <FontAwesomeIcon icon={faCode} />
          </span>
        </div>

      <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center">
        <div className="flex flex-col lg:w-1/3 p-4 bg-white rounded-lg drop-shadow-lg lg:translate-x-10 mb-10 lg:mb-0 dark:bg-black">
          <h3 className="flex items-center flex-col gap-4 justify-center mb-1 text-4xl font-semibold text-black dark:text-white tracking-tight">
            Orderly.app
            <span className="bg-teal-100 text-zinc-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-darkBlack dark:text-neutral-200 ml-3">
              Collaborative 
            </span>
          </h3>
          <p className="mb-4 text-md font-light text-zinc-600 dark:text-gray-400 lg:justify-center flex p-4 indent-3">
          Orderly is an application that helps businesses automate product orders when their in-stock quantity reaches a target level. Upon placing an order, users receive notifications with the expected arrival dates.
          </p>
          <p className="mb-2 text-sm font-normal leading-none text-zinc-400 dark:text-gray-500 justify-evenly flex">
            <FontAwesomeIcon icon={faReact} className="h-8 w-8" />
            <FontAwesomeIcon icon={faCss3} className="h-8 w-8" />
            <FontAwesomeIcon icon={faHtml5} className="h-8 w-8" />
            <FontAwesomeIcon icon={faNodeJs} className="h-8 w-8" />
          </p>
          <div className="flex w-full justify-evenly">
              <button className=" my-4 p-3 px-8 text-black dark:text-black border-4 hover:border-slate-300  text-sm tracking-wider rounded-lg hover:scale-105 ease-in-out duration-300">
                Live Demo
              </button>
              <button className=" my-4 p-2 px-8 text-black dark:text-black border-4 hover:border-slate-300 text-sm tracking-wider rounded-lg hover:scale-105 ease-in-out duration-300">
                GitHub
              </button>
            </div>
        </div>

          <div className="mb-6 lg:mb-0 lg:w-2/3 inline-flex flex-col items-center p-6 lg:p-8 lg:py-14 lg:pl-20 text-gray-900 bg-teal-400 rounded-lg dark:bg-teal-700">
            <img src={Orderly} alt="Orderly" className="hover:scale-125 ease-in-out duration-300 rounded-md drop-shadow-2xl shadow-blackest" />
          </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center">
        <div className="flex flex-col lg:w-1/3 p-4 bg-white rounded-lg drop-shadow-lg lg:translate-x-10 dark:bg-black">
          <h3 className="flex items-center justify-center mb-1 text-2xl font-semibold text-black dark:text-white tracking-tight">
            Dallas Astronomy Club
            {/* <span className="bg-teal-100 text-zinc-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-darkBlack dark:text-neutral-200 ml-3">
            </span> */}
          </h3>
          <p className="mb-4 text-md font-light text-zinc-600 dark:text-gray-400 lg:justify-center flex p-4 indent-3">
          This project features the NASA Picture of the Day by leveraging the NASA API and is designed with a strong emphasis on delivering a visually appealing and intuitive user experience, utilizing JavaScript, HTML, and CSS.          </p>
          <p className="mb-2 text-sm font-normal leading-none text-zinc-400 dark:text-gray-500 justify-evenly flex">
            <FontAwesomeIcon icon={faJsSquare} className="h-8 w-8" />
            <FontAwesomeIcon icon={faCss3} className="h-8 w-8" />
            <FontAwesomeIcon icon={faHtml5} className="h-8 w-8" />
          </p>
          <div className="flex w-full justify-evenly">
              <button className=" my-4 p-3 px-8 text-black dark:text-black border-4 hover:border-slate-300  text-sm tracking-wider rounded-lg hover:scale-105 ease-in-out duration-300">
                Live Demo
              </button>
              <button className=" my-4 p-2 px-8 text-black dark:text-black border-4 hover:border-slate-300 text-sm tracking-wider rounded-lg hover:scale-105 ease-in-out duration-300">
                GitHub
              </button>
            </div>
        </div>

          <div className="mb-6 lg:mb-0 lg:w-2/3 inline-flex flex-col items-center p-6 lg:p-8 lg:py-8 lg:pl-20 text-gray-900 bg-teal-400 rounded-lg dark:bg-teal-700">
            <img src={Nasa} alt="Orderly" className="hover:scale-125 ease-in-out duration-300 rounded-md drop-shadow-2xl" />
          </div>
      </div>

    </div>
    </>
  );
};

export default Projects;