import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import TimelineComp from './Timeline';

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10">
      <div className="">
        <p className="text-md text-black font-light tracking-wider dark:text-white">Hello, I'm</p>
        <h1 className="text-5xl font-extrabold text-black tracking-tighter dark:text-white">JOSHUA OW</h1>
        <p className="text-lg font-light text-darkBlack tracking-widest dark:text-white">FULL-STACK SOFTWARE ENGINEER</p>

        <button className="py-2.5 px-4 my-4 text-neutral-50 bg-gradient-to-r from-pink-500 via-pink-500 to-pink-600 font-montserrat text-xs rounded hover:scale-105 ease-in-out duration-300">
          Download Resume
        </button>

        <ul className="space-x-4 justify-start flex">
          <li>
            <a href="https://www.linkedin.com/in/JoshuaOwDev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-cyan-500 hover:text-cyan-600" />
            </a>
          </li>
          <li>
            <a href="https://www.github.com//joshuaow91" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} className="h-6 w-6 text-cyan-500 hover:text-cyan-600" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/JoshuaOwDev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitterSquare} className="h-6 w-6 text-cyan-500 hover:text-cyan-600" />
            </a>
          </li>
          <li>
            <a href="mailto:joshuaow@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareEnvelope} className="h-6 w-6 text-cyan-500 hover:text-cyan-600" />
            </a>
          </li>
        </ul>
      </div>
      <div className="" id='projects-section'>
        <TimelineComp />
      </div>
    </div>
  );
};

export default Hero;
