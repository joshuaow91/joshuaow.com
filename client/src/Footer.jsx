import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {

    return (     
      <footer className="bg-indigo-50 rounded-lg shadow m-4 dark:bg-blacker">
        <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
            <span className="text-sm text-white sm:text-center dark:text-gray-300">
                Made with love by Joshua Ow using <a href="https://react.dev" target="_blank" className="hover:underline">React</a> & <a href="https://tailwindcss.com" target="_blank" className="hover:underline">Tailwind</a>.
            </span>
        <ul className="flex flex-wrap items-center mt-3 sm:mt-0 space-x-2">
          <li>
            <a href="https://www.linkedin.com/in/JoshuaOwDev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6 text-white hover:text-gray-300" />
            </a>
          </li>
          <li>
            <a href="https://www.github.com//joshuaow91" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} className="h-6 w-6 text-white hover:text-gray-300" />
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/JoshuaOwDev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitterSquare} className="h-6 w-6 text-white hover:text-gray-300" />
            </a>
          </li>
          <li>
            <a href="mailto:joshuaow@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareEnvelope} className="h-6 w-6 text-white hover:text-gray-300" />
            </a>
          </li>
        </ul>
        </div>
      </footer>
    )
}

export default Footer;