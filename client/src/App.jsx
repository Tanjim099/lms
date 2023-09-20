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
import Denied from './pages/Denied'
import RequireAuth from './components/Auth/RequireAuth'
import CreateCourse from './pages/Course/CreateCourse'
import Profile from './pages/User/Profile'

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

      <Route path='/denied' element={<Denied />} />

      <Route path='*' element={<Notfound />} />

      <Route element={<RequireAuth allowedRoles={["ADMIN"]} />}>
        <Route path='/course/create' element={<CreateCourse />} />
      </Route>


      <Route element={<RequireAuth allowedRoles={["ADMIN", "USER"]} />}>
        <Route path='/user/profile' element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default App
