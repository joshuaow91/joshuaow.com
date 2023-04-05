import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <div className="flex items-center">
          <Link to="/" className="text-gray-800 font-bold text-xl tracking-tight">
            Your Logo
          </Link>
        </div>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-800 hover:text-gray-600 font-medium">
            Home
          </Link>
          <Link to="/portfolio" className="text-gray-800 hover:text-gray-600 font-medium">
            Portfolio
          </Link>
          <Link to="/contact" className="text-gray-800 hover:text-gray-600 font-medium">
            Contact
          </Link>
        </nav>
        <div className="flex items-center">
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
      <Carousel showThumbs={false}>
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
