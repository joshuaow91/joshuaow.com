import React from 'react'
import Navigation from './navbar'
import './index.css'
import Hero from './Hero'
import About from './About'
import TimelineComp from './Timeline'


function App() {

  return (
    <div className='bg-white min-h-screen flex dark:bg-blackest flex-col'>
      <div className=''>
        <Navigation/>
      </div>
      <div className='flex p-10 md:p-20 mt-20 mb-20 md:mb-0 '> 
        <Hero />
      </div>
      <div>
        {/* <Footer /> */}
        <About />
      </div>
      <div className=" p-20" id='projects-section'>
        <TimelineComp />
      </div>
    </div>
  )
}

export default App