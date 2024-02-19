import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Template from "../Components/Template"
import axios from 'axios'
import getlogo from "./Logo"
import Swal from 'sweetalert2'
import { FaGlobeAmericas, FaLongArrowAltRight, FaSearch } from "react-icons/fa"
import { JOB } from '../Redux/Action'

export default function Jobfind() {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US',options);
  };
  const navigate=useNavigate()
const jobstate=useSelector(state=>state.Job)
const userstate=useSelector(state=>state.User)
    const [job,setjob]=useState([])
const Axis=async()=>{
  await axios.get("http://localhost:8080/find-jobs").then((res)=>{
    setjob(res.data)
   
 }).catch((e)=>console.log(e))  
}
        useEffect(() => {
     Axis()
    }, [])
    
  return (
    <>
    <Template>
      <div className='w-full h-[50vh] flex flex-col bg-[#ede5e6]'>
<h1 className='ml-[4vw] text-6xl font-bold mt-9'>Jobs</h1>
<h1 className='ml-[4vw] mt-3 text-[#464646]'>Search your career opportunity through 12,800 jobs</h1>
<div className='w-[30vw] flex bg-white justify-evenly items-center h-20 rounded-full shadow-lg mt-12 ml-[4vw]  '>
          <div><input  placeholder='Looking for a job? Start here...' className='h-10 w-[20vw] focus:outline-none border-white active:border-white' type="search" name="search" id="search" /></div>
         
          <div className='bg-[#f06f35]  h-[50px] w-[50px] flex justify-center items-center rounded-full'><FaSearch className=' text-white' /></div>
          </div>
      </div>
    <div className='flex flex-wrap gap-7 ml-[4vw] mt-32'>
      <div className='bg-[#ede5e6] rounded-3xl h-[80vh] w-[25vw]'>
  <h1 className='mt-4 ml-5 font-bold text-xl'>Types of Employment</h1>
 <div className='ml-5 mt-2 gap-5 '>
 <label className='mt-3 text-lg'><input className='m-4' type="checkbox" name="jobType" value="contract"/> Contract</label><br/>
  <label className='mt-3 text-lg'><input className='m-4' type="checkbox" name="jobType" value="internship"/> Internship</label><br/>
  <label className='mt-3 text-lg'><input  className='m-4'  type="checkbox" name="jobType" value="freelance"/> Freelance</label><br/>
  <label className='mt-3 text-lg'><input className='m-4'  type="checkbox" name="jobType" value="part-time"/> Part-time</label><br/>
  <label className='mt-3 text-lg'><input  className='m-4' type="checkbox" name="jobType" value="full-time"/> Full-time</label><br/>
 </div>
 
</div>
{job.map((item,index)=>{
    return <div key={index} className='border-[1px] shadow-lg bg-white relative  rounded-3xl   w-[28vw] h-[75vh]'>
<div style={{transition: "all",backgroundImage: `url(${item.bgimage})`}} className={`h-[40%]  w-full bg-cover rounded-3xl border-black`}> 
<div  className='h-[6vw] w-[6vw] absolute  right-5 rounded-3xl mt-32 z-1 '>
  <img className='h-[6vw] w-[6vw] rounded-3xl z-1 ' src={`https://api.dicebear.com/7.x/icons/svg?seed=${item.title}`} alt="" />
</div>
</div>
<div>
  <div className='flex ml-9 mt-3 items-center gap-2'><span className='h-8 w-8 rounded-2xl bg-[#ede5e6] flex justify-center items-center border-black'>{getlogo(item.category)}</span> <h1 className='text-sm'>{item.category}</h1></div>
  <div className='ml-9 mt-6 '>
    <h1 className='text-xl font-bold'>{item.title}</h1>
    <div className='flex gap-3 mt-4 items-center'><span><FaGlobeAmericas /></span> <h1 className=''>{item.location}</h1> <span  className='ml-28 text-gray-500'>{item.type}</span></div>
  </div>
  <div className='mt-6 ml-9'><span>$</span>{item.salary[0]}/yr-${item.salary[1]}/yr</div>
  <h1 className='ml-9 text-sm font-thin text-gray-500 mt-5'>{formatDate(item.createdAt)}{"   "}by</h1>
  <h1 className='ml-9 text-sm font-bold mt-1 '>{item.company}</h1>
</div>
    </div>
  })}


</div>
</Template>
    </>
  )
}
