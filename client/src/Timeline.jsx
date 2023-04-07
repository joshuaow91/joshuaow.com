import { faCss3, faHtml5, faJs, faNodeJs, faReact } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const TimelineComp = () => {
  const timelineItems = [
    {
      title: "orderly",
      label: "latest",
      description:
        "inventory automation",
      img: '/src/assets/orderly.png' 
    },
    {
        title: "project",
        label: "title",
        description:
          "description",
        img: '/src/assets/img.png'
      },
      {
        title: "project",
        label: "title",
        description:
          "description",
        img: '/src/assets/img.png'
      },
  ];

  return (
    <>
    <h1 className=" flex justify-end font-montserrat font-bold mb-6 text-4xl dark:text-white">PROJECTS</h1>
     <ol className="relative border-t border-gray-200 dark:border-gray-700 flex">
      {timelineItems.map((item, index) => (
        <li key={index} className="mt-5 space-x-10">
          <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -top-3 ring-8 ring-neutral-100 dark:ring-gray-900 dark:bg-blue-900">
            <FontAwesomeIcon icon={faCode} />
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
            {item.title}
            {item.label && (
              <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ml-3">
                {item.label}
              </span>
            )}
          </h3>
          <p className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
            <FontAwesomeIcon icon={faReact} className="h-4 w-4"/> 
            <FontAwesomeIcon icon={faCss3} className="h-4 w-4"/> 
            <FontAwesomeIcon icon={faHtml5} className="h-4 w-4"/> 
            <FontAwesomeIcon icon={faNodeJs} className="h-4 w-4"/>
          </p>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
            {item.description} 
          </p>
          <a
            href="#"
            className=" max-w-xs inline-flex flex-col items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
            >
            {item.img && (
                <img src={item.img} alt={item.title} className="hover:scale-105 ease-in-out duration-300 rounded-md" />
            )}
            <button className="w-full my-4 p-2 text-neutral-50 bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-400 font-montserrat text-xs rounded hover:scale-105 ease-in-out duration-300">
            Launch Demo
            </button>
            </a>
        </li>
        ))}
     </ol>
    </>
            );
            };
            
            export default TimelineComp;
