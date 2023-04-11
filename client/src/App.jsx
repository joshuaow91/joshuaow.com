import React from 'react'
import Navigation from './navbar'
import './index.css'
import Hero from './Hero'
import Skillsets from './Skillsets'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Skills from './Skills'


function App() {

  return (
    <div className='bg-white min-h-screen flex dark:bg-black flex-col'>
      <div className='' id='home'>
        <Navigation/>
      </div>
      <div className='flex md:flex-row justify-evenly items-center min-h-screen '> 
        <Hero />
      </div>
      <div className='  lg:relative'>
        <Skillsets />
        <div className=' lg:absolute lg:-bottom-32 xl:-bottom-28'>
        <Skills />
        </div>
      </div>
      <div className=" p-10 md:p-20 md:mt-20 mb-10" id='projects-section'>
        <Projects />
      </div>
      <div className=''>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App