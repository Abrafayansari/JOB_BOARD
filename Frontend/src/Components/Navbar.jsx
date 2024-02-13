import React from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import CustomDropdown from './Dropdown'
export default function Navbar() {
   const active=" border-b-4  border-[#4440DA]"
   const logi="border-2  h-10 flex border-[#4440DA] hover:text-white transition-all hover:bg-[#4440DA] justify-center items-center rounded-full w-20"
   const logit="text-white bg-[#4440DA] border-2  h-10 flex transition-all justify-center items-center rounded-full w-20"
const normal="border-white  border-b-4  hover:border-[#4440DA]"
  const Ink=()=>{
   
    return<>
  <NavLink className={({isActive})=>isActive?active:normal} to={"/signup"}>Signup</NavLink>
      <NavLink className={({isActive})=>isActive?logit:logi} to={"/login"}>login</NavLink>
  </>}
  const UserState=useSelector(state=>state.User)
  return (
    <div className='flex border-b-2 h-16 items-center font-semibold  justify-between p-9'>
      <div><img src="./Logo.PNG" className='h-10 ' alt="" /></div>
      {/* <div className='flex justify-evenly gap-12'></div> */}
      <div className='md:flex justify-center items-center hidden  gap-12'><ToastContainer/>
     
     <div className='flex flex-col'>  <NavLink to={"/"} className={({isActive})=>isActive?active:normal}>Home</NavLink>

      <div  className='acha  '></div>
      </div>
      <NavLink to={"/about"} className={({isActive})=>isActive?active:normal}>About</NavLink>
      {UserState.loginuser?.isEmployee==true?<NavLink className={({isActive})=>isActive?active:normal} to={"/jobfind"}>Find a job</NavLink>:<NavLink className={({isActive})=>isActive?active:normal} to={"/jobpost"}>Post a job</NavLink>}{
UserState.loginuser?.Username? <CustomDropdown/> :<Ink/>
      }
      </div>
    </div>
  )
}
