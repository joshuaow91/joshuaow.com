import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faNodeJs,  } from "@fortawesome/free-brands-svg-icons";
import TwindLogo from './assets/tailwind.svg'
import bgImage from './assets/parallax.svg'

  
  const Skillsets = () => {
    const [bgPositionY, setBgPositionY] = useState(-250);
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScrollPosition = 950;
  
      if (scrollPosition <= maxScrollPosition) {
        setBgPositionY(scrollPosition * 0.25 - 250);
      } else {
        setBgPositionY(maxScrollPosition * 0.25 - 950);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    

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
        <div className="relative isolate overflow-hidden bg-white dark:bg-blacker h-96  px-5  font-light "
          style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: "cover",
            backgroundPositionY: `${bgPositionY}px`,
            backgroundRepeat: 'no-repeat',
          }}>
        <div className="relative z-10">
        <div className="absolute top-0 left-0 w-full h-full z-(-1)">
        {/* style={{ transform: `translateY(${bgPositionY}px)` }}> */}
        <div className="mx-auto max-w-7xl px-2">
          <div className="mx-auto max-full flex justify-center">
            <h2 className="text-6xl font-bold tracking-tight text-center text-zinc-700 dark:text-white uppercase">Skillsets</h2>
          </div>
          <div className="mx-auto mt-8 max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="grid grid-cols-2 gap-4 sm:mt-10 sm:grid-cols-3 lg:grid-cols-5 place-items-center">
                {stats.map((skill, index) => (
                <div key={`${skill.name}-${index}`} className="flex flex-col-reverse">
                <dt className="text-lg leading-7 text-teal-800 dark:text-zinc-600">{skill.name}</dt>
                <dd className="text-lg font-bold leading-9 tracking-tight text-teal-400 dark:text-white text-center">
                    <FontAwesomeIcon icon={skill.icon} className="h-10 w-10 md:h-20 md:w-20" />
                </dd>
                </div>
                ))}
                {/* <dt className="text-lg flex flex-col items-center mb-3 text-teal-800 dark:text-zinc-600"><img src={TwindLogo} className="w-16 h-16 " />Tailwind</dt> */}
            </dl>
          </div>
          </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Skillsets;
  












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