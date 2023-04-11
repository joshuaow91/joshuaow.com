import React from 'react';
import About from './About';

const Hero = () => {

  return (
    <div className='flex flex-col-reverse md:flex-row gap-4 items-center'>
      <About />
      <div className="flex flex-col">
        <p className="text-sm sm:text-lg md:text-2xl text-black font-light tracking-wider dark:text-white">Hello, I'm</p>
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-extrabold text-zinc-700 tracking-tighter dark:text-white">JOSHUA OW</h1>
        <p className="text-md sm:text-xl md:text-3xl font-light text-white tracking-widest dark:text-white"><mark className='bg-teal-100 p-1  text-zinc-700'>FULL-STACK SOFTWARE ENGINEER</mark></p>
        <p className="font-montserrat text-sm tracking-wider text-zinc-700 dark:text-white max-w-sm mt-8">
                I specialize in the meticulous design and development of visually appealing applications that prioritize scalability and performance.
            </p>
        <button className="h-12 w-48 mt-10 text-gray-600 bg-indigo-50 font-montserrat text-md rounded hover:scale-105 ease-in-out duration-300">
          Download Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
