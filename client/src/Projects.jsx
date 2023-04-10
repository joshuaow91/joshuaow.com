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
    <h1 className=" flex justify-center font-montserrat font-bold mb-16 text-4xl tracking-tight text-black dark:text-white">PROJECTS</h1>
     <ol className="relative border-l md:border-t border-gray-200 dark:border-darkBlack flex flex-col md:flex-row">
      {timelineItems.map((item, index) => (
        <li key={index} className="mt-5 space-x-14">
          <span className="absolute flex items-center justify-center w-7 h-7 bg-blue-100 rounded-full -left-3  md:-top-3 ring-8 ring-neutral-100 dark:ring-gray-900 dark:bg-pink-500 dark:text-white">
            <FontAwesomeIcon icon={faCode} />
          </span>
          <h3 className="flex items-center justify-center mb-1 text-lg font-semibold text-black dark:text-white tracking-tight">
            {item.title.toUpperCase()}
            {item.label && (
              <span className="bg-indigo-500 text-white text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-darkBlack dark:text-neutral-200 ml-3">
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
          <a
            href="#"
            className=" max-w-xs inline-flex flex-col items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-darkBlack dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-black dark:focus:ring-gray-700"
            >
            {item.img && (
                <img src={item.img} alt={item.title} className="hover:scale-105 ease-in-out duration-300 rounded-md" />
            )}
            <button className="w-full my-4 p-2 text-neutral-50 dark:text-black bg-gradient-to-r from-sky-500 via-sky-400 to-sky-400 font-montserrat text-xs rounded hover:scale-105 ease-in-out duration-300">
            Launch Demo
            </button>
            </a>
        </li>
        ))}
     </ol>
    </>
            );
            };
            
            export default Projects;
