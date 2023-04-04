import { useState } from 'react'
import '../dist/output.css'
import Header from './Header'
import { BrowserRouter as Router } from 'react-router-dom';
import './input.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Header />
    </Router>
    </>
  )
}

export default App
