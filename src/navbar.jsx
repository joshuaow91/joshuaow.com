import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white font-montserrat uppercase font-medium shadow-lg shadow-slate-800 text-sm ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex space-x-7">
            {/* Hamburger menu */}
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="outline-none mobile-menu-button">
                {!isMenuOpen ? (
                  <GiHamburgerMenu className="text-gray-700 w-6 h-6 transition-transform duration-300" />
                ) : (
                  <IoClose className="text-gray-700 w-6 h-6 transition-transform duration-300 rotate-180" />
                )}
              </button>
            </div>

            {/* Navbar links */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="/navbars" className="text-gray-700 hover:text-gray-900">
                About
              </a>
              <a href="/navbars" className="text-gray-700 hover:text-gray-900">
                Resume
              </a>
              <a href="/navbars" className="text-gray-700 hover:text-gray-900">
                Projects
              </a>
              <a href="/navbars" className="text-gray-700 hover:text-gray-900">
                Contact
              </a>
            </div>
          </div>

          {/* Social icons */}
          {/* <div className="flex items-center space-x-1">
            <a href="https://www.linkedin.com/in/JoshuaOwDev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 h-6 w-6 hover:text-blue-600" />
            </a>
            <a href="https://www.twitter.com/JoshuaOwDev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitterSquare} className="text-blue-400 w-6 h-6 hover:text-blue-300" />
            </a>
            <a href="https://www.github.com//joshuaow91" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} className="text-gray-900 h-6 w-6 hover:text-gray-600" />
            </a>
            <a href="mailto:joshuaow@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareEnvelope} className="text-neutral-400 h-6 w-6 hover:text-neutral-300" />
            </a>
          </div> */}
        </div>
      </div>

      {/* Mobile menu */}
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