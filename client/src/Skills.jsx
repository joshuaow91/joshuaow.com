import { faLaptopCode, faMobileScreen, faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Skills = () => {

    return (
        <div className="grid grid-cols-1 m-4 md:grid-cols-3 gap-8 font-light">

            <div className="bg-indigo-50 hover:bg-zinc-50 hover:scale-105 ease-in-out duration-300 dark:bg-zinc-800 drop-shadow-lg shadow-black rounded-lg p-2 max-w-s flex md:flex-col md:justify-center md:text-center items-center gap-4 lg:flex-row lg:text-left">
                <FontAwesomeIcon icon={faLaptopCode} className="text-6xl md:text-5xl bg-teal-50 rounded-3xl text-slate-400 p-3 dark:bg-blacker dark:text-darkBlack"/>
                <p className="text-gray-600 dark:text-zinc-400 text-sm flex flex-col">
                <span className="text-lg font-semibold dark:text-zinc-300 tracking-tight">Web/App Dev</span>
                Full Stack, encompassing wireframes, UI/UX design, and complete applications.
                </p>
            </div>
            <div className="bg-indigo-50 hover:bg-zinc-50 hover:scale-105 ease-in-out duration-300 dark:bg-zinc-800 drop-shadow-lg shadow-black rounded-lg p-4 max-w-s flex md:flex-col md:justify-center md:text-center items-center gap-4 lg:flex-row lg:text-left">
                <FontAwesomeIcon icon={faMobileScreen} className="text-6xl md:text-5xl bg-teal-50 rounded-3xl text-slate-400 p-4  dark:bg-blacker dark:text-darkBlack"/>
                <p className="text-gray-600 dark:text-zinc-400 text-sm flex flex-col">
                <span className="text-lg font-semibold dark:text-zinc-300 tracking-tight">Responsive Design</span>
                Aesthetically pleasing, efficient navigation for users & search engines on all devices.
                </p>
            </div>
            <div className="bg-indigo-50 hover:bg-zinc-50 hover:scale-105 ease-in-out duration-300 dark:bg-zinc-800 drop-shadow-lg shadow-black rounded-lg p-4 max-w-s flex md:flex-col md:justify-center md:text-center items-center gap-4 lg:flex-row lg:text-left">
                <FontAwesomeIcon icon={faPaintBrush} className="text-6xl md:text-5xl bg-teal-50 rounded-3xl text-slate-400 p-4 dark:bg-blacker dark:text-darkBlack"/>
                <p className="text-gray-700 dark:text-zinc-400 text-sm flex flex-col">
                <span className="text-lg font-semibold dark:text-zinc-300 tracking-tight">UI/UX Design</span>
                User-focused, tailored experiences with intuitive navigation.
                </p>
            </div>
        </div>
    )
}

export default Skills;