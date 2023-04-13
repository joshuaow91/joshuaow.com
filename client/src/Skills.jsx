import { faCodepen, faWindows } from "@fortawesome/free-brands-svg-icons";
import { faCode, faCodeBranch, faLaptopCode, faPaperPlane, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Skills = () => {

    return (
        <div className="grid grid-cols-1 m-8 lg:grid-cols-3 gap-8 font-light">

            <div className="bg-indigo-50 hover:bg-zinc-100 hover:scale-105 ease-in-out duration-300 dark:bg-zinc-800 drop-shadow-lg shadow-black rounded-lg p-4 max-w-s flex items-center gap-4">
                <FontAwesomeIcon icon={faLaptopCode} className="text-6xl bg-teal-50 rounded-full text-slate-400 p-6 h-18 w-16 dark:bg-blacker dark:text-darkBlack"/>
                <p className="text-gray-600 dark:text-zinc-600 text-sm flex flex-col">
                <span className="text-lg font-semibold dark:text-zinc-300 tracking-tight">Web/App Devolpment</span>
                Front-end and back-end web development and design, from wireframes and UI/UX design, 
                to Full Stack Web Applications.
                </p>
            </div>
            <div className="bg-indigo-50 hover:bg-zinc-100 hover:scale-105 ease-in-out duration-300 dark:bg-zinc-800 drop-shadow-lg shadow-black rounded-lg p-4 max-w-s flex items-center gap-4">
                <FontAwesomeIcon icon={faPaperPlane} className="text-6xl bg-teal-50 rounded-full text-slate-400 p-6 h-18 w-16 dark:bg-blacker dark:text-darkBlack"/>
                <p className="text-gray-600 dark:text-zinc-600 text-sm flex flex-col">
                <span className="text-lg font-semibold dark:text-zinc-300 tracking-tight">Responsive Design</span>
                Built to look and perform beautifully on all types of devices, with a page structure that 
                is logical and helps users (and search engines) browse efficiently.
                </p>
            </div>
            <div className="bg-indigo-50 hover:bg-zinc-100 hover:scale-105 ease-in-out duration-300 dark:bg-zinc-800 drop-shadow-lg shadow-black rounded-lg p-4 max-w-s flex items-center gap-4">
                <FontAwesomeIcon icon={faRocket} className="text-6xl bg-teal-50 rounded-full text-slate-400 p-6 h-18 w-16 dark:bg-blacker dark:text-darkBlack"/>
                <p className="text-gray-600 dark:text-zinc-600 text-sm flex flex-col">
                <span className="text-lg font-semibold dark:text-zinc-300 tracking-tight">UI/UX Design</span>
                Human-centered approach to all design decisions so that products feel custom built for the target audience and is easy-to-navigate.
                </p>
            </div>
        </div>
    )
}

export default Skills;