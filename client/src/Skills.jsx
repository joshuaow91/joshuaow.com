import { faCodepen, faWindows } from "@fortawesome/free-brands-svg-icons";
import { faCode, faCodeBranch, faLaptopCode, faPaperPlane, faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Skills = () => {

    return (
        <div className="grid grid-cols-1 m-4 lg:grid-cols-3 gap-3 font-montserrat">

            <div className="bg-white dark:bg-darkBlack drop-shadow-lg shadow-black rounded-lg p-4 max-w-s flex items-center gap-4">
                <FontAwesomeIcon icon={faLaptopCode} className="text-6xl bg-indigo-500 rounded-full text-accent p-6 h-18 w-16"/>
                <p className="text-gray-600 dark:text-gray-300 text-sm flex flex-col">
                <span className="text-lg font-semibold dark:text-white tracking-tight">Web/App Devolpment</span>
                Front-end and back-end web development and design, from wireframes and UI/UX design, 
                to Full Stack Web Applications.
                </p>
            </div>
            <div className="bg-white dark:bg-darkBlack drop-shadow-lg shadow-black rounded-lg p-4 max-w-s flex items-center gap-4">
                <FontAwesomeIcon icon={faPaperPlane} className="text-6xl bg-indigo-500 rounded-full text-accent p-6 h-18 w-16"/>
                <p className="text-gray-600 dark:text-gray-300 text-sm flex flex-col">
                <span className="text-lg font-semibold dark:text-white tracking-tight">Web/App Devolpment</span>
                Front-end and back-end web development and design, from wireframes and UI/UX design, 
                to Full Stack Web Applications.
                </p>
            </div>
            <div className="bg-white dark:bg-darkBlack drop-shadow-lg shadow-black rounded-lg p-4 max-w-s flex items-center gap-4">
                <FontAwesomeIcon icon={faRocket} className="text-6xl bg-indigo-500 rounded-full text-accent p-6 h-18 w-16"/>
                <p className="text-gray-600 dark:text-gray-300 text-sm flex flex-col">
                <span className="text-lg font-semibold dark:text-white tracking-tight">Web/App Devolpment</span>
                Front-end and back-end web development and design, from wireframes and UI/UX design, 
                to Full Stack Web Applications.
                </p>
            </div>
        </div>
    )
}

export default Skills;