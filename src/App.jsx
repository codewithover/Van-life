import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Routes , Route, Link} from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
function App() {
  
  return (
    <BrowserRouter>
        <header>
          <Link className='site-logo' to='/'>#VANLIFE</Link>
          <nav>
            <Link to='/about'>About</Link>
          </nav>
        </header>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
    </BrowserRouter>
  )
   
}

export default App
