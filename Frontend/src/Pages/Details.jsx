import React from 'react'
import { useSelector } from 'react-redux'
import Template from '../Components/Template'
import getlogo from './Logo'

export default function Details() {
 

  const jobstate=useSelector(state=>state.Job)
  return (
    <Template>
    <div className='flex flex-col h-[190vh]'>
      
  <div className='flex flex-col mt- relative justify-center items-center w-full'>
    <div className='h-[70vh] rounded-3xl  w-[80vw]'>
    <div style={{backgroundImage:`url(${jobstate.currentjob.bgimage})`}} className='h-[65vh] rounded-3xl bg-cover w-[80vw]'></div>
    </div>
    <div className='h-[8vw] w-[8vw] absolute left-44 mt-[60vh]  rounded-3xl bg-red-800 border-2 border-white'></div>
  </div> 
  
    <div className=" m w-[88vw] ml-[8vw] flex gap-x-[30vw] items-center bg-white p-4">
      <div className="flex items-center  space-x-4">
       
        <div className=''>
          <h1 className="text-4xl font-bold ">{jobstate.currentjob.title}</h1>
          <p className="mt-2 text-gray-500">by <span className='text-[#f06f35] font-bold'>{jobstate.currentjob.company}</span> in <span className='text-[#f06f35]'>{jobstate.currentjob.location}</span></p>
          <div className="flex items-center space-x-1">
            {/* <LocateIcon className="text-gray-500" /> */}
            <span className="text-sm mt-4 flex items-center gap-2 text-gray-500"><span className='w-6 rounded-xl h-6 bg-[#ede5e6] flex justify-center items-center'>{getlogo(jobstate.currentjob.jobcategory)}</span> {jobstate.currentjob.jobcategory}</span>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-[5vw] space-x-4">
        <div className=" flex flex-col "><button className='h-10 p-2 text-white mb-2 rounded-full w-28 bg-[#f06f35]'>Apply Now</button> <span className='text-gray-500 text-sm'>June 7, 2022</span></div>
        <div className='w-[15vw] flex flex-col p-4 h-56 bg-[#ede5e6] rounded-3xl'>
<h1 className='text-sm  text-gray-700 '>Location</h1>
<h1 className='mb-5 font-semibold'>{jobstate.currentjob.location}</h1>
<h1 className='text-sm  text-gray-700 '>Employment type</h1>
<h1 className='mb-5 font-semibold'>{jobstate.currentjob.jobtype}</h1>
<h1 className='text-sm  text-gray-700 '>Salary</h1>
<h1 className='mb-5 font-semibold'>${jobstate.currentjob.salary[0]/1000}k - ${jobstate.currentjob.salary[1]/1000}k /year</h1>
</div>
      </div>
    
    </div>
    <div className=' p-5  h-full w-[63vw] ml-[8vw]'>
<h1 className='text-lg font-bold '>Overview</h1>
<p className='mt-3 text-sm'>{jobstate.currentjob.description}</p>
<h1 className='text-lg mt-10 font-bold '>Requirements</h1>
<p className='mt-3 text-sm'>{jobstate.currentjob.requirements}</p>
<button className='h-16 p-2 text-white mb-2 rounded-full w-40 mt-36 bg-[#f06f35]'>Apply Now</button>
    </div>
    </div>
    </Template>
  )
}
