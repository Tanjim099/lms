import { useEffect } from 'react'
import './App.css'
import toast from 'react-hot-toast'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Notfound from './pages/Notfound'
import Signup from './pages/Signup'
import Signin from './pages/Signin'
import Contact from './pages/Contact'
import CourseList from './pages/Course/CourseList'
import CourseDescription from './pages/Course/CourseDescription'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/courses' element={<CourseList />} />
      <Route path='/course/description' element={<CourseDescription />} />
      <Route path='/about' element={<AboutUs />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/login' element={<Signin />} />
      <Route path='*' element={<Notfound />} />
    </Routes>
  )
}

export default App
