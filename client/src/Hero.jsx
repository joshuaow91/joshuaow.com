import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {

    return (
        <div className=' bg-neutral-100 flex flex-col p-20 text-white'>
          <div className=' flex flex-col'>
            <span className='text-xs text-slate-800 font-extralight'>Hello, I'm</span>
            <span className='text-5xl font-extrabold text-slate-800'>JOSHUA OW</span>
            <span className='text-lg font-thin text-slate-800'>SOFTWARE ENGINEER</span>
            <div className="inline-flex">
              <button className="py-2 px-4 my-4 bg-pink-500 hover:bg-pink-600 font-montserrat text-xs rounded hover:scale-105 ease-in duration-300">
                Download Resume
              </button>
            </div>
          </div>
            <div className="flex items-center space-x-1">
            <a href="https://www.linkedin.com/in/JoshuaOwDev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-lime-400 hover:text-lime-500 " />
            </a>
            <a href="https://www.twitter.com/JoshuaOwDev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitterSquare} className="h-6 w-6 text-lime-400 hover:text-lime-500" />
            </a>
            <a href="https://www.github.com//joshuaow91" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} className="h-6 w-6 text-lime-400 hover:text-lime-500" />
            </a>
            <a href="mailto:joshuaow@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareEnvelope} className="h-6 w-6 text-lime-400 hover:text-lime-500" />
            </a>
          </div>
        </div>
    )
}

export default Hero;
