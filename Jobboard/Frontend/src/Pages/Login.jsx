import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import AOS from 'aos';
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
        
        <Navbar/>
     {JSON.stringify(login)}
        <div data-aos="zoom-out" className="flex  flex-col items-center justify-center
        ">
        
      
          <form onSubmit={handle} className="h-96 border-2 mt-7 bg-[url('')] bg-cover w-96 bg-opacity- bg-white bg-opacity- rounded-2xl" >
          
    
            <div className=" flex flex-col gap-2 items-center ">
              <h2 style={{fontFamily:""}} className="text-4xl text-black  font-bold text-center  mt-10  ">Login</h2>
              
             
             
          
             
            <div className="flex justify-center mb-7 mt-16"> <label className=" " htmlFor="name"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
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
                className=" border-b hover:shadow-xl border-gray-500 focus:outline-none focus:border-blue-500 w-[]"
              /></div>
              <div className="flex">
              <label  className="" htmlFor="Pass"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
      <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
    </svg>
    </label>
              <input
                type="password"
                required
                name="pass"
                value={Password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="password"
                className=" border-b hover:shadow-xl border-gray-500 focus:outline-none focus:border-blue-500"
              /></div>
              <button type="submit"  className="  border-2  h-10 flex border-[#4440DA] hover:text-white transition-all hover:bg-[#4440DA] justify-center items-center  w-20w-[150px] p-1 text-lg mt-8 m px-6 font-sembold text-[#4440DA]    rounded-[19px]">
                Login
              </button>
             
            </div>
          </form>
         
          </div>
    
          
        </>
      )
}
