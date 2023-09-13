import { useEffect } from 'react'
import './App.css'
import toast from 'react-hot-toast'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Notfound from './pages/Notfound'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
  )
}

export default App
