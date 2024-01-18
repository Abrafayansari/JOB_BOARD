import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Jobfind() {
    const [job,setjob]=useState([])
        useEffect(() => {
      axios.get("http://localhost:8080/find-jobs").then((res)=>{
         setjob(res.data)
        
      }).catch((e)=>console.log(e))  
    }, [])
    
  return (
    <>
    <div>
        { job.map((item)=>{
            return(<>
            <div className='flex flex-col'>
        <div className='h-1/2 w-1/2 border-t-2 '>{item.title} {"     "} {item.salary}</div>
        <div className='h-1/2 w-1/2 border-b-2 '>{item.description}</div>
    </div>
            </>)
        }) 
           }
</div>
    </>
  )
}
