import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import AOS from 'aos';
import { RiLockPasswordFill } from "react-icons/ri";
import 'aos/dist/aos.css';
import { useNavigate } from 'react-router-dom';
export default function Login() {
     useEffect(() => {
    AOS.init({duration: 2000,
    easing: 'ease-out-back', 
    offset: 120,});
  }, []);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [login,setlogin]=useState([])
  const navigate=useNavigate()
  const data=[{...Login,Email,Password}]
  const handle= (e)=>{
e.preventDefault()
    setlogin(data)
  }
    return (
        <>
        <div /*data-aos="zoom-out"*/ className="flex  flex-col items-center justify-center
        ">
        
      <img className='h-[20vh]' src="https://pixelprime.co/themes/jobster-wp/demo-8/wp-content/themes/jobster/images/signin-fig.png" alt="" />
      <h1 className='text-2xl mt-2 font-bold'>Welcome back!</h1>
          <form onSubmit={handle} className="h-96 mt-7 bg-[url('')] bg-cover w-96 bg-white rounded-2xl" >
 <div className=" flex flex-col gap-2 items-center ">
         {/* <div className="flex justify-center mb-7 mt-16"> <label className=" " htmlFor="name"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
    </svg>
    </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className=" rounded-full hover:shadow-xl border-gray-500 focus:outline-none focus:border-blue-500 w-[25vw]"
              /></div> */}
              
<div class="relative flex items-center  w-[20vw] mr] rounded-full">
<input 
    type="email"
    name="email"
    required
    value={Email}
    onChange={(e) => setEmail(e.target.value)}  id="floating_outlined" className="block rounded-full px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_outlined" className="absolute   text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
</div>
<div class="relative mt-2 w-[20vw]">
    <input 
    type="password"
    required
    name="pass"
    value={Password}
    onChange={(e)=>setPassword(e.target.value)} id="floating_outlined" className="block  px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-full border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_outlined" className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
</div>
              <button type="submit"  className="  border-2  h-10 flex border-[#4440DA] hover:text-white transition-all hover:bg-[#4440DA] justify-center items-center  w-20w-[150px] p-1 text-lg mt-8 m px-6 font-sembold text-[#4440DA]    rounded-[19px]">
                Login
              </button>
            </div>
          </form>
         </div>
 </>
      )
}
