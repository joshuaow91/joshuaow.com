import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import Self from './assets/self.jpg'
import TwindLogo from './assets/tailwind.svg'

  
  const About = () => {

    const links = [
        { name: 'projects', id: 'projects-section' },
        { name: 'contact', id: 'contact' },
      ]
      const stats = [
        { name: 'HTML', icon: faHtml5 },
        { name: 'CSS', icon: faCss3 },
        { name: 'JavaScript', icon: faJs },
        { name: 'React', icon: faReact },
        { name: 'Node.js', icon: faNodeJs },
        // { name: 'Tailwind CSS', icon: }
      ];
      

    return (
        <>
        <h1 className="flex justify-end pr-10 pb-5 md:mr-20 text-4xl font-montserrat tracking-tight uppercase font-bold text-black dark:text-white" id="about">about me</h1>
        <div className="relative pt-20">
        <div className="absolute top-0 right-0 p-5 md:p-0 flex gap-10 z-10 justify-end md:mr-20">
          <div className=" bg-white dark:bg-blacker md:w-1/2 p-5 rounded-md drop-shadow-lg shadow-black">
            <img src={Self} className='rounded-lg w-1/3 float-right grayscale ml-3'/>
            <p className="font-montserrat text-md text-black dark:text-white">
                Hi there! I'm a passionate software engineer who loves to code. Ever since I started my coding journey, 
                I've been captivated by the world of web development, especially React, JavaScript, and CSS. 
                It's not uncommon for me to spend hours on end immersed in coding, as I find it both engaging and fulfilling.
            </p>
          </div>
        </div>
      <div className="relative isolate overflow-hidden bg-cyan-600 dark:bg-blacker py-24 px-5 md:px-10 sm:py-32 transform -skew-y-6 font-montserrat mt-28 md:mt-0 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 transform skew-y-6">
          <div className="mx-auto max-w-2xl lg:mx-0 mt-20">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-4xl uppercase">My Skillsets</h2>
            <p className="mt-6 text-md leading-8 text-gray-300">
                As a versatile web developer, I possess a wide range of skills that enable me to create visually appealing and 
                highly functional web applications. My skill sets include, but are not limited to:
            </p>
            <ul className="list-disc pl-6 text-gray-300 py-5">
                <li>Expertise in front-end development using React and JavaScript</li>
                <li>Proficiency in crafting responsive and engaging designs with CSS and HTML</li>
                <li>Experience with back-end technologies, such as Node.js and Express</li>
                <li>Knowledge of version control systems, such as Git and GitHub</li>
                <li>Familiarity with web performance optimization techniques</li>
                <li>Strong problem-solving abilities and a keen eye for detail</li>
            </ul>
            <p className="text-md leading-8 text-gray-300">
                I'm constantly striving to expand my skill set and stay up-to-date with the latest technologies and 
                best practices in web development. This enables me to deliver top-notch solutions for my clients and 
                contribute effectively to team projects.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-2 gap-x-8 gap-y-6 text-md font-semibold leading-7 sm:grid-cols-4 md:flex lg:gap-x-10 place-items-center md:place-items-start">
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
            <dl className="mt-16 grid grid-cols-2 gap-8 sm:mt-20 sm:grid-cols-6 lg:grid-cols-6 place-items-center">
                {stats.map((stat, index) => (
                <div key={`${stat.name}-${index}`} className="flex flex-col-reverse">
                <dt className="text-xl leading-7 text-gray-300">{stat.name}</dt>
                <dd className="text-lg font-bold leading-9 tracking-tight text-white text-center">
                    <FontAwesomeIcon icon={stat.icon} className="h-12 w-12" />
                </dd>
                </div>
                ))}
                <dt className="text-xl flex flex-col items-center text-gray-300"><img src={TwindLogo} className="w-16 h-16 " /> Tailwind</dt>
              
            </dl>
          </div>
        </div>
      </div>
      </div>
      </>
    )
  }
  
  export default About;