import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faNodeJs,  } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import Self from './assets/self.jpg'
import TwindLogo from './assets/tailwind.svg'
import bgImage from './assets/parallax.svg'

  
  const About = () => {
    const [bgPositionY, setBgPositionY] = useState(-500);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScrollPosition = 950;
  
      if (scrollPosition <= maxScrollPosition) {
        setBgPositionY(scrollPosition * 0.5 - 500);
      } else {
        setBgPositionY(maxScrollPosition * 0.5 - 500);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
      
      

    const links = [
        { name: 'projects', id: 'projects-section' },
        { name: 'contact', id: 'contact' },
      ]
      const stats = [
        { name: 'JavaScript', icon: faJs },
        { name: 'React', icon: faReact },
        { name: 'HTML', icon: faHtml5 },
        { name: 'CSS', icon: faCss3 },
        { name: 'Node.js', icon: faNodeJs },
        // { name: 'MongoDB', icon: faCode}
        // { name: 'Tailwind CSS', icon: }
      ];
      

    return (
        <>
        <h1 className="flex justify-end pr-10 pb-5 md:mr-20 text-4xl font-montserrat tracking-tight uppercase font-bold text-darkBlack dark:text-white" id="about">about me</h1>
        <div className="relative pt-20">
        <div className="absolute top-0 right-0 p-5 md:p-0 flex gap-10 z-10 justify-end md:mr-20">

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
        </div>
        <div className="relative isolate overflow-hidden bg-emerald-500 dark:bg-blacker h-96  px-5 md:px-10  font-montserrat mt-28 md:mt-0"
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "contain",
            backgroundPositionY: `${bgPositionY}px`,
            backgroundRepeat: 'no-repeat',
          }}>
        <div className="relative z-10">
        <div className="absolute top-0 left-0 w-full h-full z-(-1)">
        {/* style={{ transform: `translateY(${bgPositionY}px)` }}> */}
        <div className="mx-auto max-w-7xl px-2 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 mt-20 md:mt-20">
            <h2 className="text-4xl font-bold tracking-tight text-center md:text-left text-darkBlack dark:text-white sm:text-4xl uppercase">My Skillsets</h2>
          </div>
          <div className="mx-auto mt-8 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="grid grid-cols-3 gap-4 sm:mt-10 sm:grid-cols-3 lg:grid-cols-6 place-items-center">
                {stats.map((stat, index) => (
                <div key={`${stat.name}-${index}`} className="flex flex-col-reverse">
                <dt className="text-xl leading-7 text-zinc-300 dark:text-zinc-600">{stat.name}</dt>
                <dd className="text-lg font-bold leading-9 tracking-tight text-white dark:text-white text-center">
                    <FontAwesomeIcon icon={stat.icon} className="h-10 w-10 md:h-12 md:w-12" />
                </dd>
                </div>
                ))}
                <dt className="text-xl flex flex-col items-center mb-3 text-zinc-300 dark:text-zinc-600"><img src={TwindLogo} className="w-16 h-16 " />Tailwind</dt>
              
            </dl>
          </div>
          </div>
          </div>
        </div>
      </div>
      </div>
      </>
    )
  }
  
  export default About;
  












              {/* <p className="mt-6 text-md leading-8 text-white">
                As a versatile web developer, I possess a wide range of skills that enable me to create visually appealing and 
                highly functional web applications. My skill sets include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-white py-5">
                <li>Expertise in front-end development using React and JavaScript</li>
                <li>Proficiency in crafting responsive and engaging designs with CSS and HTML</li>
                <li>Experience with back-end technologies, such as Node.js and Express</li>
                <li>Knowledge of version control systems, such as Git and GitHub</li>
                <li>Familiarity with web performance optimization techniques</li>
                <li>Strong problem-solving abilities and a keen eye for detail</li>
            </ul>
            <p className="text-md leading-8 text-white">
                I'm constantly striving to expand my skill set and stay up-to-date with the latest technologies and 
                best practices in web development. This enables me to deliver top-notch solutions for my clients and 
                contribute effectively to team projects.
            </p> */}