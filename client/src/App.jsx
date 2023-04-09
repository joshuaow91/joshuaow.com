import React from 'react'
import Navigation from './navbar'
import './index.css'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import Skills from './Skills'


function App() {

  return (
    <div className='bg-white min-h-screen flex dark:bg-blackest flex-col'>
      <div className='mb-20' id='home'>
        <Navigation/>
      </div>
      <div className='flex p-10 md:p-20 mt-20 mb-20 md:mb-0'> 
        <Hero />
      </div>
      <div className='my-20 lg:relative'>
        <About />
        <div className=' lg:absolute lg:-bottom-32 xl:-bottom-28'>
        <Skills />
        </div>
      </div>
      <div className=" p-20 mt-20 mb-10" id='projects-section'>
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