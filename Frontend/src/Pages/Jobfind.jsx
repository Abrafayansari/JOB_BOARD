import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Template from "../Components/Template"
import axios from 'axios'
import getlogo from "./Logo"
import { Spinner } from 'flowbite-react';import Swal from 'sweetalert2'
import { FaGlobeAmericas, FaLongArrowAltRight, FaSearch } from "react-icons/fa"
import { JOB } from '../Redux/Action'

export default function Jobfind() {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US',options);
  };
  const dispatch =useDispatch()
  const navigate=useNavigate()
const jobstate=useSelector(state=>state.Job)
const userstate=useSelector(state=>state.User)
    const [job,setjob]=useState([])
    const [search, setsearch] = useState(null)
    const [checkbox, setcheckbox] = useState(null)
    const [loading, setloading] = useState(true)

    const queryParams = {
      title: search ,
    
    };
    const queryParams2 = {
      type: checkbox ,
    
    };
const Axis=async(e)=>{
  await axios.get("http://localhost:8080/find-jobs").then((res)=>{
    setjob(res.data)
    setloading(false)
 }).catch((e)=>console.log(e))  
}

        useEffect(() => {
     Axis()
    }, [])
    const searchquery2=async(e)=>{
      e.preventDefault()
      await axios.get("http://localhost:8080/find-jobs",{params:queryParams2}).then((res)=>{
  setjob(res.data)
  setloading(false)
}).catch((error)=>{setjob(`No Result for type"${checkbox}"`)})
    }

    const searchquery=async(e)=>{
      e.preventDefault()
      await axios.get("http://localhost:8080/find-jobs",{params:queryParams}).then((res)=>{
  setjob(res.data)
  setloading(false)
}).catch((error)=>{setjob(`No Result for "${search}"`)})
    }
  return (
    <>
    <Template>
      <form onSubmit={searchquery}  className='w-full h-[50vh] flex flex-col bg-[#ede5e6]'>
<h1 className='ml-[4vw] text-6xl font-bold mt-9'>Jobs</h1>
<h1 className='ml-[4vw] mt-3 text-[#464646]'>Search your career opportunity through 12,800 jobs</h1>
<div className='w-[30vw] flex bg-white justify-evenly items-center h-20 rounded-full shadow-lg mt-12 ml-[4vw]  '>
          <div><input required value={search} onChange={(e)=>setsearch(e.target.value)}  placeholder='Looking for a job? Start here...' className='h-10 w-[20vw] focus:outline-none border-white active:border-white' type="search" name="search" id="search" /></div>
          <button type='submit' className='bg-[#f06f35]  h-[50px] w-[50px] flex justify-center items-center rounded-full'><FaSearch className=' text-white' /></button>
          </div>
      </form>
    <div className='flex flex-wrap gap-7 ml-[4vw] min-h-[70vh] mt-32'>
      <div className='bg-[#ede5e6] rounded-3xl h-[60vh] p-5 w-[25vw]'>
  <h1 className='mt-4 ml-5 font-bold text-xl'>Types of Employment</h1>
 <form onSubmit={searchquery2} className='ml-5 mt-2 g '>
 <label className='mt-2 text-lg'><input onChange={(e)=>setcheckbox(e.target.value)}  className='m-3' type="checkbox" name="jobType" value="Contract"/> Contract</label><br/>
  <label className='mt-2 text-lg'><input onChange={(e)=>setcheckbox(e.target.value)} className='m-3' type="checkbox" name="jobType" value="Internship"/> Internship</label><br/>
  <label className='mt-2 text-lg'><input onChange={(e)=>setcheckbox(e.target.value)}  className='m-3'  type="checkbox" name="jobType" value="Freelance"/> Freelance</label><br/>
  <label className='mt-2 text-lg'><input onChange={(e)=>setcheckbox(e.target.value)} className='m-3'  type="checkbox" name="jobType" value="Part-time"/> Part-time</label><br/>
  <label className='mt-2 text-lg'><input onChange={(e)=>setcheckbox(e.target.value)}  className='m-3' type="checkbox" name="jobType" value="Full-time"/> Full-time</label><br/>
  <button className='h-10 text-center px-4 py-2 mt-8 ml-[2vw] text-white  rounded-full w-24  bg-[#f06f35]' type='submit'>submit</button>
 </form>
 
</div>

{loading == false?Array.isArray(job)?job.map((item,index)=>{
    return <div 
    onClick={() => {
      dispatch({  
        type: JOB,
        payload: { jobid: item._id, title: item.title, salary: item.salary, location: item.location, bgimage: item.bgimage, description: item.description,jobcategory:item.category,jobtype:item.type,requirements:item.requirements,company:item.company }
      })
    navigate("/details") 
    }}
    key={index} className='border-[1px] shadow-lg bg-white relative  rounded-3xl   w-[28vw] h-[75vh]'>
<div style={{transition: "all",backgroundImage: `url(${item.bgimage})`}} className={`h-[40%]  w-full bg-cover rounded-3xl border-black`}> 
<div  className='h-[6vw] w-[6vw] absolute  right-5 rounded-3xl mt-32 z-1 '>
  <img className='h-[6vw] w-[6vw] rounded-3xl z-1 ' src={`https://api.dicebear.com/7.x/icons/svg?seed=${item.salary}`} alt="" />
</div>
</div>
<div>
  <div className='flex ml-9 mt-3 items-center gap-2'><span className='h-8 w-8 rounded-2xl bg-[#ede5e6] flex justify-center items-center border-black'>{getlogo(item.category)}</span> <h1 className='text-sm'>{item.category}</h1></div>
  <div className='ml-9 mt-6 '>
    <h1 className='text-xl font-bold'>{item.title}</h1>
    <div className='flex gap-3 mt-4 items-center'><span><FaGlobeAmericas /></span> <h1 className=''>{item.location}</h1> <span  className='ml-28 text-gray-500'>{item.type}</span></div>
  </div>
  <div className='mt-6 ml-9'><span>$</span>{item.salary[0]/1000}k - ${item.salary[1]/1000}k /year</div>
  <h1 className='ml-9 text-sm font-thin text-gray-500 mt-5'>{formatDate(item.createdAt)}{"   "}by</h1>
  <h1 className='ml-9 text-sm font-bold mt-1 '>{item.company}</h1>
</div>
    </div>
  }):<h1 className='text-xl ml-[20vw] mt-9'>
   {job}
  </h1>:<div className='ml-[30vw] mt-28'> <Spinner  aria-label="Default status example" /></div> }


</div>
</Template>
    </>
  )
}
