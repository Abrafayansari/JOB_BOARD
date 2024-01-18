import React from 'react'
import Template from '../Components/Template'
import { useSelector } from 'react-redux'

export default function Home() {
  const UserState=useSelector(state=>state.User)
  return (
    <div>
      <Template>
        <div className='bg-cover h-[100vh] w-full bg-[url("./Orbit.PNG")]  '>{JSON.stringify(UserState)}</div>
        
      </Template>
    </div>
  )
}
