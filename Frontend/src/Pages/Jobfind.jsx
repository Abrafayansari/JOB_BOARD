import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import Template from "../Components/Template"
import axios from 'axios'
import Swal from 'sweetalert2'
import { FaLongArrowAltRight } from "react-icons/fa"
import { JOB } from '../Redux/Action'

export default function Jobfind() {
  const navigate=useNavigate()
const jobstate=useSelector(state=>state.Job)
const userstate=useSelector(state=>state.User)
    const [job,setjob]=useState([])

        useEffect(() => {
      axios.get("http://localhost:8080/find-jobs").then((res)=>{
         setjob(res.data)
        
      }).catch((e)=>console.log(e))  
    }, [])
    
  return (
    <>
    <Template>
    <div  className='flex flex-wrap justify-evenly gap-x-6 w-[87vw] ml-[6vw]'>
    {job.map((item) => {
        return (

          <div key={item.id} className='h-[550px] rounded-2xl mt-9 w-[365px]  flex flex-col bg-white'>
            {userstate.loginuser?.Username ? <Link to={""}
              onClick={() => {
                dispatch({
                  type: JOB,
                  payload: { jobid: item._id,title:item.title,company:item.company, salary: item.salary, description: item.description, location: item.location, description: item.description }
                })
              }}
              className='h-64 rounded-t-2xl  bg-cover '>
             <img
  src={`https://api.dicebear.com/7.x/shapes/svg?seed=${item.title}`}
  className='h-64  w-[45vw] content-center'
  alt="avatar" />
            </Link> : <Link to={"/signup"}
              onClick={() => {
                Swal.fire({
                  title: 'please Register first ',
                  text: 'Unauthorized access you are not Registered',
                  icon: 'error',
                })
              }}
              className='h-64 rounded-t-2xl  bg-cover '>
             <img
  src="https://api.dicebear.com/7.x/shapes/svg?seed=Kitty"
  className='h-64  w-[45vw] content-center'
  alt="avatar" />
            </Link>}

            <div className='flex flex-col w-[350px]'>
              <div className='flex text-[21.6px] font-bold mt-11 text-[#415161]'><h1>{item.title} in {"    "}{item.company}</h1></div>
              <div className='flex items-center  text-[#4440DA] mt-5'> <span className='text-lg'>{item.salary}$</span> <h1 className='text-xs mt-2' ></h1> <h1 className='ml-[8vw] '>
                
                {userstate.loginuser?.Username ?<button onClick={()=>navigate("/details")} className='flex justify-center items-center bg-[#4440DA] text-white rounded-sm  p-2'>Apply Now<FaLongArrowAltRight className='ml-3' /> </button>:<button onClick={()=>{Swal.fire({
                  title: 'please Register first ',
                  text: 'Unauthorized access you are not Registered',
                  icon: 'error',
                });navigate("/signup")}} className='flex justify-center items-center bg-[#4440DA] text-white rounded-sm  p-2'>Apply Now<FaLongArrowAltRight className='ml-3' /> </button>}</h1></div>
              <div className='mt-3'><p>{item.description}</p></div>
            </div>
          </div>


        )
      })}
</div></Template>
    </>
  )
}
