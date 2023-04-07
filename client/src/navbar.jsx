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

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects-section");
    projectsSection.scrollIntoView({ behavior: "smooth" });
  };
  

  return (
    <nav className=" bg-white font-montserrat lowercase text-md fixed top-0 w-full z-10 shadow-lg shadow-gray-200 dark:bg-blacker dark:shadow-none">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-end h-16">
          <div className="flex space-x-7">
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="outline-none mobile-menu-button">
                {!isMenuOpen ? (
                  <GiHamburgerMenu className="text-gray-700 w-6 h-6 transition-transform duration-300" />
                ) : (
                  <IoClose className="text-gray-700 w-6 h-6 transition-transform duration-300 rotate-180 " />
                )}
              </button>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <a href="/navbars" className="text-gray-700 hover:text-gray-950 dark:text-white dark:hover:text-neutral-300">
                About
              </a>
              <a href="/navbars" className="text-gray-700 hover:text-gray-950 dark:text-white dark:hover:text-neutral-300">
                Resume
              </a>
              <Link
                to="projects-section"
                smooth={true}
                duration={500}
                spy={true}
                offset={-50}
                className='text-gray-700 hover:text-gray-950 dark:text-white dark:hover:text-neutral-300 hover:cursor-pointer'
              >
                Projects
              </Link>
              <a href="/navbars" className="text-gray-700 hover:text-gray-950 dark:text-white dark:hover:text-neutral-300">
                Contact
              </a>
               <Toggle/>
            </div>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-gray-100">
          <a href="/navbars" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
          About
          </a>
          <a href="/navbars" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
            Resume
          </a>
          <a href="/navbars" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
            Projects
          </a>
          <a href="/navbars" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">
            Contact
          </a>
         </div>
       </div>
     </nav>
  );
};

export default Navigation;              