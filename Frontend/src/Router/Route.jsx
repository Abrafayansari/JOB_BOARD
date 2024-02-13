import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/login'
import Home from '../Pages/Home'
import Jobpost from '../Pages/Jobpost'
import Jobfind from '../Pages/Jobfind'
import About from '../Pages/About'
import Details from '../Pages/Details'

export default function Router() {
  return (
    <div>
      <Routes>
    
    <Route path='/signup' element={<Signup />}></Route>
    <Route path='/details' element={<Details />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/jobfind' element={<Jobfind />}></Route>
    <Route path='/jobpost' element={<Jobpost />}></Route>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
      </Routes>
    </div>
  )
}
