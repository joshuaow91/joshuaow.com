import React from "react";
import { Link } from "react-scroll";
import Self from './assets/self.jpg'

const About = () => {

    const links = [
        { name: 'projects', id: 'projects-section' },
        { name: 'contact', id: 'contact' },
      ]

    return (
        <>
      {/* <h1 className="flex justify-end pr-10 pb-5 md:mr-20 text-4xl font-montserrat tracking-tight uppercase font-bold text-darkBlack dark:text-white" id="about">about me</h1> */}
      {/* <div className="relative pt-20"> */}
      {/* <div className="absolute top-0 right-0 p-5 md:p-0 flex gap-10 z-10 justify-end md:mr-20"> */}

        <div className=" bg-white dark:bg-blacker sm:max-w-lg  md:max-w-sm lg:max-w-lg p-5 rounded-md drop-shadow-lg shadow-black">

          <img src={Self} className='rounded-lg w-1/3 float-right grayscale ml-3 max-w-1/2'/>
          <p className="font-montserrat text-md text-black dark:text-white">
          Eager software engineer with a love for web development, skilled in JavaScript, and truly enjoy immersive coding sessions.
              {/* Hi there! I'm a passionate software engineer who loves to code. Ever since I started my coding journey,  */}
              {/* I've been captivated by the world of web development, especially React, JavaScript, and CSS. 
              It's not uncommon for me to spend hours on end immersed in coding, as I find it both engaging and fulfilling. */}
          </p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-md font-semibold leading-7 sm:grid-cols-4 md:flex lg:gap-x-10 mt-4 place-items-center md:place-items-start">
          {links.map((link, index) => (
              <Link
                  key={`${link.name}-${index}`}
                  to={link.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-50}
                  className="text-blacker hover:text-black dark:text-white dark:hover:text-neutral-300 hover:cursor-pointer"
              >
                  {link.name} <span aria-hidden="true">&rarr;</span>
              </Link>
          ))}
          </div>
        </div>
      {/* </div> */}
      {/* </div> */}
      </>
    )
}

export default About;