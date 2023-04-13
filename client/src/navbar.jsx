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
      <div className="fixed top-4 right-4 z-20">
        <button
          onClick={toggleMenu}
          className=" text-zinc-700  hover:text-teal-400 w-12 h-12 flex justify-center items-center rounded-lg outline-none"
        >
          {!isMenuOpen ? (
            <FontAwesomeIcon icon={faBars} className='w-6 h-6' />
          ) : (
            <FontAwesomeIcon icon={faXmark} className="w-6 h-6" />
          )}
        </button>
      </div>

      <div className={`fixed right-0 flex -top-16  mt-20 mr-4 max-w-sm text-zinc-700 bg-indigo-50 dark:bg-black dark:text-zinc-300 rounded-lg drop-shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'scale-100' : 'scale-0'}`}>
        <div className='flex flex-col'>
          <div className="py-3 px-4 justify-start items-start rounded-t-lg flex bg-teal-500 dark:bg-teal-800">
            <Toggle />
          </div>
          <div className='flex'>
            {navLinks.map(([to, label]) => (
              <Link
                key={to}
                to={to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                className="block py-2.5 px-4 cursor-pointer lowercase transition duration-200 hover:text-zinc-500 hover:underline first-of-type:rounded-bl-lg last-of-type:rounded-br-lg"
                onClick={toggleMenu}
              >
              {label}
            </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
