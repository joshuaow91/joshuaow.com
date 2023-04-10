import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import Toggle from './ModeToggle';
import { Link } from 'react-scroll';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    ["home", "home"],
    ["about", "about"],
    ["projects-section", "Projects"],
    ["contact", "contact"],
  ];

  return (
    <nav className="fixed w-full mx-auto top-0 drop-shadow-lg shadow-black z-20">
      <div className={`bg-indigo-500 font-montserrat lowercase text-md px-4 h-16 flex justify-between rounded-lg items-center space-x-7 mx-4 mt-4  dark:bg-blacker dark:shadow-none dark:bg-opacity-95 bg-opacity-95 ${isMenuOpen ? 'rounded-b-none' : 'rounded-lg'}`}>
        <button
          onClick={toggleMenu}
          className="outline-none md:hidden"
        >
          {!isMenuOpen ? (
            <GiHamburgerMenu className="text-gray-700 w-6 h-6" />
          ) : (
            <IoClose className="text-gray-700 w-6 h-6" />
          )}
        </button>
        <div className="hidden md:flex items-center space-x-4">
          {navLinks.map(([to, label]) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-50}
              className="text-white hover:text-gray-200 dark:text-white dark:hover:text-neutral-300 hover:cursor-pointer"
            >
              {label}
            </Link>
          ))}
        </div>
        <div className='hidden md:flex'>
          <Toggle />
        </div>
        <div className="md:hidden flex items-center">
          <Toggle />
        </div>
      </div>

      <div className={`md:hidden bg-gray-100 dark:bg-black dark:text-white mx-4 rounded-b-lg ${isMenuOpen ? 'block' : 'hidden'}`}>
        {navLinks.map(([to, label]) => (
          <Link
            key={to}
            to={to}
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            className="block py-2.5 px-4 last-of-type:rounded-b-lg  cursor-pointer lowercase transition duration-200 hover:bg-blacker"
          >
            {label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
