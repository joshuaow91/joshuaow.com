import React, { useState } from 'react';
import Toggle from './ModeToggle';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

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
    <nav className=" flex flex-row-reverse items-center justify-between mx-2 z-20 sm:flex">
      <div className=' '> 
        <Toggle />
      </div>
      <div className=" z-20">
        <button
          onClick={toggleMenu}
          aria-label='navigation button'
          className="text-zinc-700 dark:text-zinc-600 hover:text-teal-400 w-10 h-10 flex justify-center items-center rounded-lg outline-none"
        >
          {!isMenuOpen ? (
            <FontAwesomeIcon icon={faBars} className={`w-6 h-6 transform transition-transform duration-500 ${isMenuOpen ? 'rotate-180' : ''}`} />
          ) : (
            <FontAwesomeIcon icon={faXmark} className={`w-6 h-6 transform transition-transform duration-500 ${isMenuOpen ? 'rotate-180' : ''}`} />
          )}
        </button>
      </div>

      <div className={`fixed flex items-start top-2 left-2 max-w-sm text-zinc-700 bg-zinc-200 dark:bg-black dark:text-zinc-300 rounded-lg drop-shadow-lg transform transition-transform duration-500 ${isMenuOpen ? 'scale-100' : 'scale-0'}`}>
          <div className='pl-8'>
            {navLinks.map(([to, label]) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                href={`#${to}`}
                className="block py-1 px-4 cursor-pointer lowercase transition duration-200 text-zinc-800 dark:text-white hover:underline "
                onClick={toggleMenu}
              >
                {label}
              </Link>
            ))}
          </div>
      </div>
    </nav>
  );
};

export default Navigation;
