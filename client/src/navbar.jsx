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
    <nav className="fixed w-full top-0 z-10">
      <div className='fixed top-3 left-3'> 
        <Toggle />
      </div>
      <div className="fixed top-4 right-4 z-20">
        <button
          onClick={toggleMenu}
          className="text-zinc-700 dark:text-zinc-600 hover:text-teal-400 w-12 h-12 flex justify-center items-center rounded-lg outline-none"
        >
          {!isMenuOpen ? (
            <FontAwesomeIcon icon={faBars} className={`w-6 h-6 transform transition-transform duration-500 ${isMenuOpen ? 'rotate-180' : ''}`} />
          ) : (
            <FontAwesomeIcon icon={faXmark} className={`w-6 h-6 transform transition-transform duration-500 ${isMenuOpen ? 'rotate-180' : ''}`} />
          )}
        </button>
      </div>

      <div className={`fixed right-0 flex -top-16  mt-20 mr-4 max-w-sm text-zinc-700 bg-indigo-50 dark:bg-black dark:text-zinc-300 rounded-lg drop-shadow-lg transform transition-transform duration-500 ${isMenuOpen ? 'scale-100' : 'scale-0'}`}>
          <div className='flex pr-10'>
            {navLinks.map(([to, label]) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                className="block py-3 px-4 cursor-pointer lowercase transition duration-200 hover:text-zinc-100 hover:bg-teal-600 first-of-type:rounded-l-lg"
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
