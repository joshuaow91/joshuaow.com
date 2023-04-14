import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3, faJs, faReact, faNodeJs } from "@fortawesome/free-brands-svg-icons";
import Skills from "./Skills";
import Bg from './assets/parabg.svg'

const Skillsets = () => {
  const [bgPositionY, setBgPositionY] = useState(-200);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const maxScrollPosition = 1950;

    if (scrollPosition <= maxScrollPosition) {
      setBgPositionY(scrollPosition * 0.25 - 200);
    } else {
      setBgPositionY(maxScrollPosition * 0.25 - 950);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stats = [
    { name: "JavaScript", icon: faJs },
    { name: "React", icon: faReact },
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3 },
    { name: "Node.js", icon: faNodeJs },
  ];

  return (
    <>
      <div className="flex justify-center">
        <h2 className="text-6xl font-bold tracking-tight text-center text-zinc-700 dark:text-zinc-300 uppercase md:mb-10">
          Skillsets
        </h2>
      </div>

      <div
        className="relative flex flex-col rounded-lg m-4 md:m-10 bg-teal-500 dark:bg-teal-800 lg:h-96 font-light"
        style={{
          backgroundImage: `url(${Bg})`,
          backgroundSize: "contain",
          backgroundPositionY: `${bgPositionY}px`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="md:-translate-y-16">
          <Skills />
        </div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-10 lg:gap-16 lg:translate-y-12 p-4 md:p-0 ">
          {stats.map((skill, index) => (
            <ul key={`${skill.name}-${index}`} className="flex flex-col-reverse">
              <li className="text-lg font-bold tracking-tigt text-teal-700 hover:text-teal-400 dark:text-zinc-300 dark:hover:text-zinc-100">
                <FontAwesomeIcon icon={skill.icon} className="h-24 w-24 " />
              </li>
            </ul>
          ))}
          <div className="flex gap-8">
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 fill-current text-teal-700 hover:text-teal-400 dark:text-zinc-300 dark:hover:text-zinc-100">
              <title>Tailwind CSS</title>
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skillsets;