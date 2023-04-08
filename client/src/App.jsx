import React from 'react'
import Navigation from './navbar'
import './index.css'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'


function App() {

  return (
    <div className='bg-white min-h-screen flex dark:bg-blackest flex-col'>
      <div className='' id='home'>
        <Navigation/>
      </div>
      <div className='flex p-10 md:p-20 mt-20 mb-20 md:mb-0 '> 
        <Hero />
      </div>
      <div>
        {/* <Footer /> */}
        <About />
      </div>
      <div className=" p-20 mb-10" id='projects-section'>
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