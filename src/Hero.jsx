import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import { faSquareEnvelope } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {

    return (
        <div className='flex flex-col p-20 bg-gradient-to-r from-green-300 to-purple-400 font-montserrat text-white'>
            <span className='text-md text-slate-600 font-extralight'>Hello, I'm</span>
            <span className='text-4xl font-extrabold'>JOSHUA OW</span>
            <span className='text-xl font-thin text-slate-700'>SOFTWARE ENGINEER</span>
            <div className="flex items-center space-x-1">
            <a href="https://www.linkedin.com/in/JoshuaOwDev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-blue-700 h-6 w-6 hover:text-blue-600" />
            </a>
            <a href="https://www.twitter.com/JoshuaOwDev" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitterSquare} className="text-blue-400 w-6 h-6 hover:text-blue-300" />
            </a>
            <a href="https://www.github.com//joshuaow91" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} className="text-gray-900 h-6 w-6 hover:text-gray-600" />
            </a>
            <a href="mailto:joshuaow@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faSquareEnvelope} className="text-pink-400 h-6 w-6 hover:text-pink-300" />
            </a>
          </div>
            <button>
                Learn more
            </button>
        </div>
    )
}

export default Hero;