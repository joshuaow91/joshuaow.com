import { faCss3, faHtml5, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Orderly from './assets/orderly.png'
import Img from './assets/img.png'

const Projects = () => {
  const timelineItems = [
    {
      title: "Orderly",
      label: "Team Project",
      description:
        "inventory automation",
      img: Orderly 
    },
    {
        title: "project",
        label: "Individual",
        description:
          "description",
        img: Img
      },
      {
        title: "project",
        label: "Individual",
        description:
          "description",
        img: Img
      },
  ];

  return (
    <>
    <h1 className=" flex justify-center font-montserrat font-bold mb-16 text-6xl tracking-tight text-zinc-700 dark:text-white">PROJECTS</h1>

     <ol className="relative border-l md:border-t border-gray-200 dark:border-darkBlack flex flex-col ">
      {timelineItems.map((item, index) => (
        <li key={index} className="mt-5 flex flex-col items-start px-10">
          <span className="absolute flex items-center justify-center w-7 h-7 bg-indigo-50 rounded-full -left-3  md:-top-3 ring-8 ring-neutral-100 dark:ring-gray-900 dark:bg-pink-500 dark:text-white">
            <FontAwesomeIcon icon={faCode} />
          </span>
          <h3 className="flex items-center justify-center mb-1 text-2xl font-semibold text-black dark:text-white tracking-tight">
            {item.title.toUpperCase()}
            {item.label && (
              <span className="bg-teal-100 text-zinc-700 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-darkBlack dark:text-neutral-200 ml-3">
                {item.label}
              </span>
            )}
          </h3>
          <p className=" mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500 md:justify-center flex">
            <FontAwesomeIcon icon={faReact} className="h-4 w-4"/> 
            <FontAwesomeIcon icon={faCss3} className="h-4 w-4"/> 
            <FontAwesomeIcon icon={faHtml5} className="h-4 w-4"/> 
            <FontAwesomeIcon icon={faNodeJs} className="h-4 w-4"/>
          </p>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 md:justify-center flex">
            {item.description} 
          </p>
          <div className=" max-w-md inline-flex flex-col items-center px-4 py-2 text-sm font-medium text-gray-900 bg-slate-100 border border-gray-200 rounded-lg hover:bg-slate-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-darkBlack dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-black dark:focus:ring-gray-700">
            {item.img && (
                <img src={item.img} alt={item.title} className="hover:scale-105 ease-in-out duration-300 rounded-md" />
            )}
            <div className="flex w-full justify-center gap-x-2">
            <button className="w-lg my-4 p-2 text-white dark:text-black bg-indigo-400 font-montserrat text-xs rounded hover:scale-105 ease-in-out duration-300">
            Launch Demo
            </button>
            <button className="w-lg my-4 p-2 text-white dark:text-black bg-slate-400 font-montserrat text-xs rounded hover:scale-105 ease-in-out duration-300">
            GitHub Repo
            </button>
            </div>
            </div>
        </li>
        ))}
     </ol>
    </>
            );
            };
            
            export default Projects;
