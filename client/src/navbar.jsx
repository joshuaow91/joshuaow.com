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
    <nav className="fixed w-full top-0 z-10">
      <div className="fixed top-4 right-4 z-20">
        <button
          onClick={toggleMenu}
          className="bg-indigo-500 text-accent w-12 h-12 flex justify-center items-center rounded-lg outline-none"
        >
          {!isMenuOpen ? (
            <GiHamburgerMenu className="w-6 h-6" />
          ) : (
            <IoClose className="w-6 h-6" />
          )}
        </button>
      </div>

      <div className={`fixed right-0 -top-16 pt-14 mt-20 mr-4 max-w-sm text-indigo-500 bg-white dark:bg-black dark:text-white rounded-lg drop-shadow-lg transform transition-transform duration-300 ${isMenuOpen ? 'scale-100' : 'scale-0'}`}>
        {navLinks.map(([to, label]) => (
          <Link
            key={to}
            to={to}
            smooth={true}
            duration={500}
            spy={true}
            offset={-50}
            className="block py-2.5 px-4 rounded-lg cursor-pointer lowercase transition duration-200 hover:text-accent hover:bg-indigo-500"
            onClick={toggleMenu}
          >
            {label}
          </Link>
        ))}
        <div className="py-2 px-4">
          <Toggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
