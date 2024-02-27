import React, { useEffect, useState } from 'react'
import Template from '../Components/Template'
import { useSelector } from 'react-redux'
import { IoCodeSlash } from "react-icons/io5";
import { FaChartLine, FaSearch } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { FaRegCalendar } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi";
import { HiArrowNarrowRight } from "react-icons/hi";  
import { FaChartPie } from "react-icons/fa";
import { BsCalculator } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import getlogo from "./Logo"
import axios from "axios"
import job from "../data/data.json"
import Navbar from '../Components/Navbar';
export default function Home() {
  const [secjob,setsecjob]=useState([])
const Axis=async()=>{
await axios.get("http://localhost:8080/find-jobs")
.then((res)=>{
  
  setsecjob(res.data)})
.catch((e)=>console.log(e))
}
const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US',options);
};
useEffect(() => {
 Axis()
}, [])
console.log(secjob)


  const getIcon = (iconName) => {
    switch (iconName) {
      case 'AiOutlineCode':
        return <IoCodeSlash  className='h-[7vh]  w-[7vw]' />;
      case 'GiNurse':
        return <FaUserDoctor  className='h-[7vh] hover:text-white w-[7vw]'/>
      case 'FaMarketing':
        return <HiSpeakerphone   className='h-[7vh] hover:text-white w-[7vw]'/>;
      case 'MdBuild':
        return <BsCalculator  className='h-[7vh] hover:text-white w-[7vw]'/>;
      case 'GiCook':
        return <FaChartPie  className='h-[7vh] hover:text-white w-[7vw]'/>;
      case 'FaChartLine':
        return <FaRegCalendar  className='h-[7vh] hover:text-white  w-[7vw]'/>;
      case 'GiTeacher':
        return <GiTeacher className='h-[7vh] hover:text-white  w-[7vw]' />;
      case 'FaTools':
        return <FaChartLine className='h-[7vh] hover:text-white  w-[7vw]' />;
      default:
        return null;
    }
  };

  const UserState=useSelector(state=>state.User)
  return (
    <div>
      <Navbar/>
        <div className='bg-cover flex h-[120vh] w-[100%] bg-[#ede5e6]  '>
         <div className='h-full  flex flex-col  w-full'> <h1 className='ml-[4vw] text-6xl mt-32 font-bold w-[45vw] '>Find the perfect </h1><h1 className='text-6xl font-bold ml-[4vw] w-[45vw] '>job for you</h1>
         <h1 className='ml-[4vw] mt-10 text-xl text-[#323233]'>Search your career opportunity through 12,800 jobs</h1> 
         
         <div className='w-[30vw] flex bg-white justify-evenly items-center h-20 rounded-full shadow-lg mt-12 ml-[4vw]  '>
          <div><input  placeholder='Looking for a job? Start here...' className='h-10 w-[20vw] focus:outline-none border-white active:border-white' type="search" name="search" id="search" /></div>
         
          <div className='bg-[#f06f35]  h-[50px] w-[50px] flex justify-center items-center rounded-full'><FaSearch className=' text-white' /></div>
          </div>
          <div className='flex mt-10 text-lg font-medium ml-[4vw] items-center'><TiTick />Bring to the table win-win survival</div>
          <div className='flex mt-4 text-lg font-medium ml-[4vw] items-center'><TiTick />Capitalize on low hanging fruit to identify</div>
          <div className='flex mt-4 text-lg font-medium ml-[4vw] items-center'><TiTick />But I must explain to you how all this</div></div>
          <div className='h-full w-full'>
          <img className='h-[100%]  w-[100%]' src="./job,.png" alt="" />
          </div>
        </div>
        <div className='h-[170vh]'>
          <h1 className='text-5xl font-bold mt-20  ml-[4vw]'>Search by Category
</h1>
<h1 className='ml-[4vw] mt-5 text-[#464646]'>Search your career opportunity with our categories</h1>

        <div className='grid sm:grid-cols-5 mt-32 gap-y-3 w-[90vw] gap-3  overflow-hidden ml-[4vw]'>
  {job.map((item,index)=>{
return(
<div key={index} className='h-64 rounded-3xl bg-[#ede5e6] text-[#f06f35] m-[0.5vw] flex flex-col justify-center items-center w-[15vw] overflow-hidden' >
  <div className='h-[50%] flex justify-center mt-4 w-full'>
    <div className='h-[17vh] w-[8vw] hover:bg-[#f06f35] flex justify-center items-center rounded-3xl bg-white'>
    {/* <img className='h-20 text-[#f06f35]' src={item.photo} alt="" /> */}
    <div className='h-[17vh] w-[8vw] hover:text-white flex rounded-3xl hover:bg-[#f06f35] justify-center items-center'>{getIcon(item.icon)}</div>
    </div>
  </div>
  <div  className='h-[50%] text-center'>
<h1 className='text-xl text-black cursor-pointer  hover:text-[#f06f35]  mt-2'>{item.title}</h1>
<h1 className='text-gray-500 mt-5'>Open positions 1</h1>
  </div>
</div>

)
  })}
</div>
<button className='bg-[#f06f35] flex items-center gap-3 ml-[7vw] mt-20   px-4 rounded-2xl w-52  text-white h-16 p-2 text-left font-bold text-xl'> Explore More <HiArrowNarrowRight /></button>

        </div>
        <div className='h-[320vh] flex flex-col  w-full bg-[#ede5e6]'>
          <div className='mt-20'>
          <h1 className='text-5xl font-bold ml-[4vw] '>Featured Job Offers</h1>
          <h1 className='ml-[4vw] mt-5 font-bold text-[#464646]'>Search your career opportunity through 12,800 jobs</h1>

         
 {Array.isArray(secjob)? <div className='grid sm:grid-cols-4 gap-2 gap-y-4 ml-[4vw] mt-32'> {secjob.slice(0, 8).map((item,index)=>{
    return <div key={index}  className=' bg-white relative  rounded-3xl w-[22vw] h-[500px]'>
<div style={{transition: "all",backgroundImage: `url(${item.bgimage})`}} className={`h-[40%]  w-full bg-cover rounded-3xl border-black`}> 
<div  className='h-[6vw] w-[6vw] absolute  right-5 rounded-3xl mt-32 z-1 '>
  <img className='h-[6vw] w-[6vw]   rounded-3xl z-1 ' src={`https://api.dicebear.com/7.x/icons/svg?seed=${item.company}`} alt="" />
</div>
</div>
<div>
  <div className='flex ml-9 mt-3 items-center gap-2'><span className='h-8 w-8 rounded-2xl bg-[#ede5e6] flex justify-center items-center border-black'>{getlogo(item.category)}</span> <h1 className='text-sm'>{item.category}</h1></div>
  <div className='ml-9 mt-6 '>
    <h1 className='text-xl font-bold'>{item.title}</h1>
    <div className='flex gap-3 mt-4 items-center'><span><FaGlobeAmericas /></span> <h1 className=''>{item.location}</h1> <span  className=' text-gray-500'>{item.type}</span></div>
  </div>
  <div className='mt-6 ml-9'><span>$</span>{item.salary[0]/1000}k - ${item.salary[1]/1000}k /year</div>
  <h1 className='ml-9 text-sm font-thin text-gray-500 mt-5'>{formatDate(item.createdAt)}{"   "}by</h1>
  <h1 className='ml-9 text-sm font-bold mt-1 '>{item.company}</h1>
</div>
    </div>
  })}</div>:console.log("error")}


          </div>
        </div>

        
    
    </div>
  )
}
