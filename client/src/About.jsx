import React from "react";
import Ai from './assets/aiself.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const About = () => {

      const socials = [
        { icon: faLinkedin, href: 'https://www.linkedin.com/in/JoshuaOwDev' },
        { icon: faTwitterSquare, href: 'https://www.twitter.com/JoshuaOwDev' },
        { icon: faGithubSquare, href: 'https://www.github.com/joshuaow91' },
        { icon: faEnvelopeSquare, href: 'mailto:joshuaow@gmail.com' },
      ]

    return (
        <>
        <div className="flex flex-col-reverse gap-2  bg-indigo-50 dark:bg-blacker max-w-xs m-4 rounded-lg drop-shadow-lg shadow-black" id="about">
          <div className="flex flex-col items-center gap-4 bg-indigo-50 p-4 rounded-lg dark:bg-zinc-800 ">
            <img src={Ai} className='rounded-lg grayscale object-cover object-center w-full h-auto max-w-md max-h-md' loading="lazy"/>
            <ul className="space-x-2 flex">
                {socials.map((social, index) => (
                <li key={index}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={social.icon} className="h-8 w-8 text-zinc-300 hover:text-teal-500 dark:text-zinc-600 dark:hover:text-zinc-700" />
                  </a>
                </li>
                ))}
            </ul>
          </div>
        </div>
      </>
    )
}

export default About;