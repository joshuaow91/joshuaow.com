import React from 'react'
import Navigation from './navbar'
import './index.css'
import Hero from './Hero'


function App() {

  return (
    <div className='bg-white min-h-screen flex flex-col gap-y-20 dark:bg-blackest'>
      <div>
      <Navigation/>
      </div>
      <div> 
      <Hero />
      </div>
    </div>
  )
}

export default App