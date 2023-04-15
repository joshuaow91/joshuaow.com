import React from "react";
import Ai from './assets/aiavatar.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';

const About = () => {

      const socials = [
        { icon: faLinkedin, href: 'https://www.linkedin.com/in/JoshuaOwDev' , aria: 'linked in profile link'},
        { icon: faTwitterSquare, href: 'https://www.twitter.com/JoshuaOwDev' , aria: 'twitter profile link'},
        { icon: faGithubSquare, href: 'https://www.github.com/joshuaow91' , aria: 'github profile link'},
        { icon: faEnvelopeSquare, href: 'mailto:joshuaow@gmail.com' , aria: 'send me an email'},
      ]

    return (
        <>
        <div className="flex flex-col-reverse gap-2  bg-indigo-50 dark:bg-blacker max-w-xs m-4 rounded-lg drop-shadow-lg shadow-black" id="about">
          <div className="flex flex-col items-center gap-4 bg-indigo-50 p-4 rounded-lg dark:bg-zinc-800 ">
            <img src={Ai} className='rounded-lg grayscale object-cover object-center w-64 h-64' alt="Critical" loading="eager"/>
            <ul className="space-x-4 flex">
                {socials.map((social, index) => (
                <li key={index}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={social.icon} aria-label={social.aria} className="h-8 w-8 text-zinc-400 hover:text-teal-500 dark:text-zinc-600 dark:hover:text-zinc-700" />
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