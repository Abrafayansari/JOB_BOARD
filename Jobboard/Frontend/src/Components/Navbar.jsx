import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
export default function Navbar() {
  const UserState=useSelector(state=>state.User)
  return (
    <div className='flex border-b-2 h-16 items-center font-semibold  justify-between p-9'>
      <div><img src="./Logo.PNG" className='h-10 ' alt="" /></div>
      {/* <div className='flex justify-evenly gap-12'></div> */}
      <div className='md:flex justify-center items-center hidden  gap-12'><ToastContainer/>
      <Link to={"/"} className='underline decoration-4 decoration-solid   decoration-[#4440DA] p-4'>Home</Link>
      <Link>About</Link>
      {UserState.loginuser?.isEmployee==true?<Link to={"/jobfind"}>Find a job</Link>:<Link>Post a job</Link>}
      <Link to={"/signup"}>Signup</Link>
      <Link className='border-2  h-10 flex border-[#4440DA] hover:text-white transition-all hover:bg-[#4440DA] justify-center items-center rounded-full w-20' to={"/login"}>login</Link></div>
    </div>
  )
}
