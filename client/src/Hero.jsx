import React from 'react';
import About from './About';

const Hero = () => {

  return (
    <div className='flex flex-col-reverse md:flex-row gap-4 items-center'>
      <About />
      <div className="flex flex-col">
        <p className="text-sm sm:text-lg md:text-2xl text-black font-light tracking-wider dark:text-white">Hello, I'm</p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-extrabold text-zinc-700 tracking-tighter dark:text-white">JOSHUA OW</h1>
        <p className="text-md sm:text-xl md:text-3xl font-light text-darkBlack tracking-widest dark:text-white">FULL-STACK SOFTWARE ENGINEER</p>
        <p className="font-montserrat text-sm tracking-wider text-zinc-700 dark:text-white max-w-sm mt-8">
                I specialize in the meticulous design and development of visually appealing applications that prioritize scalability and performance.
            </p>
        <button className="h-12 w-48 mt-10 text-zinc-600 bg-indigo-200 font-montserrat text-md rounded hover:scale-105 ease-in-out duration-300">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
