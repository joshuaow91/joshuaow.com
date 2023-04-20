import { faCss3, faHtml5, faJira, faJsSquare, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Orderly from '../public/images/orderly.avif';
import Nasa from '../public/images/nasa.avif';

const Projects = () => {
  return (
    <>
      <h1 className="flex justify-center font-montserrat font-bold  sm:mb-5 text-6xl tracking-tight text-zinc-700 dark:text-white">
        PROJECTS
      </h1>

      <div className="relative lg:border-l lg:border-t border-gray-200 dark:border-darkBlack flex flex-col gap-14 lg:gap-36 p-4 lg:p-0">
        <div className="flex flex-col items-start ">
          <span className="hidden absolute lg:flex items-center justify-center w-7 h-7 bg-teal-500 text-zinc-100 rounded-full -left-3 -top-3 ring-8 ring-teal-100 dark:ring-zinc-900 dark:bg-teal-800 dark:text-white">
            <FontAwesomeIcon icon={faCode} />
          </span>
        </div>

      <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center">
        <div className="flex flex-col lg:w-1/3 p-4 bg-white rounded-lg drop-shadow-lg lg:translate-x-10 mb-10 lg:mb-0 dark:bg-black -translate-y-16 mx-4 lg:mx-0 lg:-translate-y-0">
          <h2 className="flex items-center flex-col gap-4 justify-center mb-1 text-4xl font-semibold text-black dark:text-white tracking-tight">
            Orderly.pro
          </h2>
          <p className="mb-4 text-md font-light text-zinc-600 dark:text-gray-400 lg:justify-center flex p-4 indent-3">
          Orderly is an application that solves the problems for businesses that run out of stock. Created to help businesses automate product orders when their in-stock quantity reaches a target level. Upon placing an order, users receive notifications with the expected arrival dates.
          </p>
          <p className="mb-2 text-sm font-normal leading-none text-zinc-400 dark:text-gray-500 justify-evenly flex">
            <FontAwesomeIcon icon={faReact} className="h-8 w-8" />
            <FontAwesomeIcon icon={faCss3} className="h-8 w-8" />
            <FontAwesomeIcon icon={faHtml5} className="h-8 w-8" />
            <FontAwesomeIcon icon={faNodeJs} className="h-8 w-8" />
          </p>
          <div className="flex w-full justify-evenly">
              <a 
                href="https://orderly.pro/" 
                target="_blank"
                className=" flex items-center my-4 p-3 px-8 text-black dark:text-zinc-300 border-4 hover:border-slate-300  text-sm tracking-wider rounded-lg hover:scale-105 ease-in-out duration-300">
                Live Demo
              </a>
              <a 
                href="https://github.com/joshuaow91/orderly"
                target="_blank" 
                className="items-center flex my-4 p-2 px-8 text-black dark:text-zinc-300 border-4 hover:border-slate-300 text-sm tracking-wider rounded-lg hover:scale-105 ease-in-out duration-300">
                GitHub
              </a>
            </div>
        </div>

          <div className="mb-6 lg:mb-0 lg:w-2/3 inline-flex flex-col items-center p-6 pb-20 lg:pb-8 lg:p-8 lg:py-8 lg:pl-20 text-gray-900 bg-teal-500 rounded-lg dark:bg-teal-700">
            <img src={Orderly} alt="Orderly" className="hover:scale-125 lg:hover:-translate-x-12 ease-in-out duration-300 rounded drop-shadow-2xl shadow-blackest" loading="lazy"/>
          </div>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-evenly items-center">
        <div className="flex flex-col lg:w-1/3 p-4 bg-white rounded-lg drop-shadow-lg lg:translate-x-10 dark:bg-black -translate-y-16 mx-4 lg:mx-0 lg:-translate-y-0">
          <h2 className="flex items-center justify-center mb-1 text-2xl font-semibold text-black dark:text-white tracking-tight">
            Dallas Astronomy Club
            {/* <span className="bg-teal-100 text-zinc-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-darkBlack dark:text-neutral-200 ml-3">
            </span> */}
          </h2>
          <p className="mb-4 text-md font-light text-zinc-600 dark:text-gray-400 lg:justify-center flex p-4 indent-3">
          This project features the NASA Picture of the Day by leveraging the NASA API and is designed with a strong emphasis on delivering a visually appealing and intuitive user experience, utilizing JavaScript, HTML, and CSS.          </p>
          <p className="mb-2 text-sm font-normal leading-none text-zinc-400 dark:text-gray-500 justify-evenly flex">
            <FontAwesomeIcon icon={faJsSquare} className="h-8 w-8" />
            <FontAwesomeIcon icon={faCss3} className="h-8 w-8" />
            <FontAwesomeIcon icon={faHtml5} className="h-8 w-8" />
          </p>
          <div className="flex w-full justify-evenly">
              <a 
                href="https://dallas-astronomy-club.netlify.app/"
                target="_blank" 
                className="flex items-center my-4 p-3 px-8 text-black dark:text-zinc-300 border-4 hover:border-slate-300  text-sm tracking-wider rounded-lg hover:scale-105 ease-in-out duration-300">
                Live Demo
              </a>
              <a 
                href="https://github.com/joshuaow91/DallasAstronomyClub"
                target="_blank" 
                className="flex items-center my-4 p-2 px-8 text-black dark:text-zinc-300 border-4 hover:border-slate-300 text-sm tracking-wider rounded-lg hover:scale-105 ease-in-out duration-300">
                GitHub
              </a>
            </div>
        </div>

          <div className="mb-6 lg:mb-0 lg:w-2/3 inline-flex flex-col items-center p-6 pb-20 lg:pb-8 lg:p-8 lg:py-8 lg:pl-20 text-gray-900 bg-teal-500 rounded-lg dark:bg-teal-700">
            <img src={Nasa} alt="Orderly" className="hover:scale-125 lg:hover:-translate-x-12 ease-in-out duration-300 rounded drop-shadow-2xl " loading="lazy" />
          </div>
      </div>

    </div>
    </>
  );
};

export default Projects;