import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  return (
    <div className="flex">
      <div className="">
        <p className="text-sm sm:text-lg md:text-lg text-black font-light tracking-wider dark:text-white">Hello, I'm</p>
        <h1 className="text-5xl sm:text-7xl md:text-7xl lg:text-7xl font-extrabold text-darkBlack tracking-tighter dark:text-white">JOSHUA OW</h1>
        <p className="text-md sm:text-xl md:text-xl font-light text-darkBlack tracking-widest dark:text-white">FULL-STACK SOFTWARE ENGINEER</p>

        <button className="py-3 px-8 my-6 text-neutral-50 bg-gradient-to-r from-emerald-500 via-emerald-500 to-emerald-600 font-montserrat text-xs rounded hover:scale-105 ease-in-out duration-300">
          Download Resume
        </button>

        <ul className="space-x-4 justify-start flex">
          <li>
            <a href="https://www.linkedin.com/in/JoshuaOwDev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="h-8 w-8 text-indigo-500 hover:text-indigo-400 dark:text-slate-400 dark:hover:text-slate-300" />
            </a>
          </li>
          <li>
            <a href="https://www.github.com//joshuaow91" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} className="h-8 w-8 text-indigo-500 hover:text-indigo-400 dark:text-slate-400 dark:hover:text-slate-300" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/JoshuaOwDev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitterSquare} className="h-8 w-8 text-indigo-500 hover:text-indigo-400 dark:text-slate-400 dark:hover:text-slate-300" />
            </a>
          </li>
          <li>
            <a href="mailto:joshuaow@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareEnvelope} className="h-8 w-8 text-indigo-500 hover:text-indigo-400 dark:text-slate-400 dark:hover:text-slate-300" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;


