import React, { useState } from 'react';
import Toggle from './ModeToggle';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    ['home', 'Home'],
    ['projects-section', 'Projects'],
    ['client', 'Client Work'],
    ['contact', 'Contact'],
  ];

  return (
    <nav className="fixed w-full flex items-center justify-between z-20 sm:flex p-2 bg-white bg-opacity-90 dark:bg-opacity-90 dark:bg-zinc-900 dark:drop-shadow-none drop-shadow-md">
      <div className="z-10">
        <button
          onClick={toggleMenu}
          aria-label="navigation button"
          className="md:hidden text-zinc-700 dark:text-zinc-600 hover:text-teal-700 w-10 h-10 flex justify-center items-center rounded-lg outline-none"
        >
          {!isMenuOpen ? (
            <FontAwesomeIcon
              icon={faBars}
              className={`w-6 h-6 transform transition-transform duration-500 ${
                isMenuOpen ? 'rotate-180' : ''
              }`}
            />
          ) : (
            <FontAwesomeIcon
              icon={faTimes}
              className={`w-6 h-6 transform transition-transform duration-500 ${
                isMenuOpen ? 'rotate-180' : ''
              }`}
            />
          )}
        </button>
      </div>

      <div className="md:hidden">
        <div
          className={`${
            isMenuOpen ? 'max-h-[500px]' : 'max-h-0'
          } overflow-hidden absolute top-full left-0 w-full bg-white bg-opacity-90 dark:bg-zinc-900 drop-shadow-md dark:drop-shadow-none dark:bg-opacity-90 transition-all duration-500 ease-in-out flex-col`}
        >
          {navLinks.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              href={`#${to}`}
              className="block py-1 px-4 cursor-pointer transition duration-200 text-zinc-500 hover:text-zinc-600 dark:text-white  hover:bg-teal-500 dark:hover:bg-teal-700"
              onClick={toggleMenu}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className="hidden md:flex items-center gap-6">
        {navLinks.map(([to, label]) => (
          <Link
            key={to}
            to={to}
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            href={`#${to}`}
            className="block py-2 px-3 cursor-pointer transition duration-400 text-zinc-700 hover:bg-teal-500 dark:hover:bg-teal-700 rounded-md dark:text-white"
          >
            {label}
          </Link>
        ))}
      </div>
      <div className=" ">
        <Toggle />
      </div>
    </nav>
    );
  };
  
  export default Navigation;

