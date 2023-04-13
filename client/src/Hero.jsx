import React from 'react';
import About from './About';

const Hero = () => {

  return (
    <div className='flex flex-col-reverse md:flex-row gap-4 items-center m-4 mt-20 md:mt-0'>
      <About />
      <div className="flex flex-col items-center md:items-start">
        <p className="text-md sm:text-2xl md:text-2xl md:indent-4 text-black font-light tracking-wider dark:text-white">Hello, I'm</p>
        <h1 className="text-6xl sm:text-8xl md:text-7xl lg:text-8xl font-extrabold text-zinc-700 tracking-tighter dark:text-gray-300">JOSHUA OW</h1>
        <p className="text-lg sm:text-3xl md:text-3xl font-light tracking-widest mt-2"><mark className='bg-teal-50 rounded-lg p-2  text-zinc-700 dark:text-white dark:bg-zinc-800'>FULL-STACK SOFTWARE ENGINEER</mark></p>
        <p className="font-light text-sm tracking-wider text-center md:text-left text-zinc-700 dark:text-white max-w-sm mt-8">
                I specialize in the meticulous design and development of visually appealing applications that prioritize scalability and performance.
            </p>
        <button className="h-12 w-48 mt-10 text-zinc-100 bg-teal-500 rounded-lg font-light text-sm tracking-wide hover:scale-110 ease-in-out duration-300 dark:bg-zinc-900 dark:text-white">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
