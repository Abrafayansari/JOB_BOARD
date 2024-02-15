import React from 'react'
import Template from '../Components/Template'
import { useSelector } from 'react-redux'
import { FaSearch } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";
export default function Home() {
  const UserState=useSelector(state=>state.User)
  return (
    <div>
      <Template>
        <div className='bg-cover flex h-[100vh] w-[100%] bg-[#ede5e6]  '>
         <div className='h-full  flex flex-col  w-full'> <h1 className='ml-[4vw] text-6xl mt-32 font-bold w-[45vw] '>Find the perfect </h1><h1 className='text-6xl font-bold ml-[4vw] w-[45vw] '>job for you</h1>
         <h1 className='ml-[4vw] mt-10 text-xl text-[#323233]'>Search your career opportunity through 12,800 jobs</h1> 
         
         <div className='w-[30vw] flex bg-white justify-evenly items-center h-20 rounded-full shadow-lg mt-12 ml-[4vw]  '>
          <div><input  placeholder='Looking for a job? Start here...' className='h-10 w-[20vw] focus:outline-none border-white active:border-white' type="search" name="search" id="search" /></div>
         
          <div className='bg-[#f06f35]  h-[50px] w-[50px] flex justify-center items-center rounded-full'><FaSearch className=' text-white' /></div>
          </div><div>
          
          </div></div>
          <div className='h-full w-full'>
          <img className='h-[100%]   w-[90%]' src="./job,.png" alt="" />
          </div>
        </div>
        
      </Template>
    </div>
  )
}
