import React from "react";
import Self from './assets/self.jpg'
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
        <div className="flex flex-col-reverse gap-2  bg-indigo-50 dark:bg-blacker max-w-xs m-4 rounded-lg drop-shadow-md shadow-black">
            {/* <div className="flex items-center p-4">
                <p className="font-montserrat text-sm tracking-wider text-zinc-700 dark:text-white">
                    I specialize in the meticulous design and development of visually appealing applications that prioritize scalability and performance.
                </p>
            </div> */}

          <div className="flex flex-col items-center gap-4 bg-indigo-50 p-4 rounded-lg rounded-l-none ">
            <img src={Self} className='rounded-lg grayscale object-cover object-center w-full h-auto max-w-md max-h-md' />
            {/* <p className="font-montserrat text-sm tracking-wider text-zinc-700 dark:text-white">
                I specialize in the meticulous design and development of visually appealing applications that prioritize scalability and performance.
            </p> */}
            <ul className="space-x-4 flex">
                {socials.map((social, index) => (
                <li key={index}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={social.icon} className="h-8 w-8 text-indigo-200 hover:text-indigo-500 dark:text-slate-400 dark:hover:text-slate-300" />
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