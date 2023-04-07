import React from 'react'
import Navigation from './navbar'
import './index.css'
import Hero from './Hero'
import TimelineComp from './Timeline'


function App() {

  return (
    <div className='bg-white min-h-screen flex dark:bg-blackest'>
      <div>
      <Navigation/>
      </div>
      <div className='flex gap-20 p-20 mx-auto'> 
        <div className='flex justify-start w- pt-20 mt-20  '>
          <Hero />
        </div>
     
      </div>
    </div>
  )
}

export default App