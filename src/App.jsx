import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter , Routes , Route, Link} from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Vans from './assets/pages/Vans'
import "./server"
function App() {
  
  return (
    <BrowserRouter>
        <header>
          <Link className='site-logo' to='/'>#VANLIFE</Link>
          <nav>
            <Link to='/about'>About</Link>
            <Link to='/vans'>Vans</Link>
          </nav>
        </header>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/vans' element={<Vans/>} />
      </Routes>
    </BrowserRouter>
  )
   
}

export default App
