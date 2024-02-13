import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Template(props) {
  return (
    <div className="flex w-full flex-col">
      <Navbar/>
      <div>
        {props.children}
      </div>
      <Footer/>
    </div>
  )
}
