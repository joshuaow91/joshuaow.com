import React from 'react'
import Navigation from './navbar'
import './index.css'
import Hero from './Hero'
import About from './About'


function App() {

  return (
    <div className='bg-white min-h-screen flex dark:bg-blackest flex-col'>
      <div>
        <Navigation/>
      </div>
      <div className='flex gap-20 p-20 mt-20 mx-auto'> 
        <Hero />
      </div>
      <div>
        {/* <Footer /> */}
        <About />
      </div>
    </div>
  )
}

export default App