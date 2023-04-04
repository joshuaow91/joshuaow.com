import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import { Link, NavLink } from "react-router-dom";

const Header = () => {
    const [slideIndex, setSlideIndex] = useState(0);
  
    const handleSlideChange = (index) => {
      setSlideIndex(index);
    };
  
    return (
      <header className="bg-white dark:bg-gray-800">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <div className="flex items-center">
            <Link to="/" className="text-gray-800 font-bold text-xl tracking-tight">
              Your Logo
            </Link>
          </div>
          <nav className="hidden md:flex justify-center space-x-6">
            <Link
              to="/"
              className={`text-gray-800 hover:text-gray-600 font-medium ${
                slideIndex === 0 ? 'text-gray-900' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className={`text-gray-800 hover:text-gray-600 font-medium ${
                slideIndex === 1 ? 'text-gray-900' : ''
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className={`text-gray-800 hover:text-gray-600 font-medium ${
                slideIndex === 2 ? 'text-gray-900' : ''
              }`}
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center justify-end">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="ml-4 text-gray-600 hover:text-gray-800">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="ml-4 text-gray-600 hover:text-gray-800">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
        <Carousel showThumbs={false} onChange={handleSlideChange}>
          <div>
            <h2>Project 1</h2>
            <p>Description of project 1</p>
          </div>
          <div>
            <h2>Project 2</h2>
            <p>Description of project 2</p>
          </div>
          <div>
            <h2>Project 3</h2>
            <p>Description of project 3</p>
          </div>
        </Carousel>
      </header>
  );
};

export default Header;
