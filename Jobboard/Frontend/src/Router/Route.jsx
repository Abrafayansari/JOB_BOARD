import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from '../Pages/Signup'
import Login from '../Pages/login'
import Home from '../Pages/Home'
import Jobapply from '../Pages/Jobapply'
import Jobfind from '../Pages/Jobfind'

export default function Router() {
  return (
    <div>
      <Routes>
    
    <Route path='/signup' element={<Signup />}></Route>
    <Route path='/login' element={<Login />}></Route>
    <Route path='/jobfind' element={<Jobfind />}></Route>
    <Route path='/jobapply' element={<Jobapply />}></Route>
    <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  )
}
