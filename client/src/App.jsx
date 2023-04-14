import React from 'react'
import Navigation from './navbar'
import './index.css'
import Hero from './Hero'
import Skillsets from './Skillsets'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'


function App() {

  return (
    <div className='bg-white flex dark:bg-blackest flex-col'>
      <div className='' id='home'>
        <Navigation/>
      </div>
      <div className='flex md:flex-row justify-evenly items-center min-h-screen'> 
        <Hero />
      </div>
      <div className=''>
        <Skillsets />
      </div>
      <div className=" md:p-14 mb-10" id='projects-section'>
        <Projects />
      </div>
      <div className='md:mt-20 '>
        <Contact />
      </div>
      <div className='dark:bg-blacker'>
        <Footer />
      </div>
    </div>
  )
}

export default App