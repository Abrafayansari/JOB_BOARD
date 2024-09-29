import React, { useEffect, useState,useRef } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { FaPlus } from "react-icons/fa";
import { Button, Checkbox, Label, Modal, ModalHeader, TextInput } from 'flowbite-react';
import CustomDropdown from './Dropdown'
import Login from '../Pages/Login';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const emailInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleScroll() {
      
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
   const active=" border-b-4  border-[#f06f35]"
   const logi="border-2  h-10 flex border-[#f06f35] hover:text-white transition-all hover:bg-[#f06f35] justify-center items-center rounded-full w-20"
   const logit="text-white bg-[#f06f35] border-2  h-10 flex transition-all justify-center items-center rounded-full w-20"
const normal="border-[#ede5e6] border-transparent border-b-4  hover:border-[#f06f35]"
  const Ink=()=>{
   
    return<>
  <NavLink className={({isActive})=>isActive?active:normal} to={"/signup"}>Signup</NavLink>
      <NavLink onClick={() => setOpenModal(true)} className={({isActive})=>isActive?logit:logi} >login</NavLink>
  </>}
  const UserState=useSelector(state=>state.User)
  return (
    <div  className={`flex border-b-2  bg-${scrolled ? 'white' : '[#ede5e6]'} sticky z-30 left-0 top-0 h-16 items-center font-semibold  bg- justify-between p-9`}>
      
      <div className='text-2xl font-bold text-[#f06f35]'>JOBSTER. 
      <Modal className='' show={openModal} size="md" popup onClose={() => setOpenModal(false)} initialFocus={emailInputRef}>
        <Modal.Header className=' text-4xl text-[#f06f35]'>
        {/* <h2 style={{fontFamily:""}} className="text-4xl ml-[11vw] text-black  font-bold text-center  mt-10  ">Login</h2> */}
          </Modal.Header>
        <Modal.Body className='px-14'>
          <Login/>
        </Modal.Body>
      </Modal>
      </div>
      {/* <div className='flex justify-evenly gap-12'></div> */}
      <div className='md:flex justify-center items-center hidden  gap-12'><ToastContainer/>
     
     <div className='flex flex-col'>  <NavLink to={"/"} className={({isActive})=>isActive?`${active}`:`${normal}`}>Home</NavLink>

      
      </div>
      <NavLink to={"/about"} className={({isActive})=>isActive?active:normal}>About</NavLink>
      {UserState.loginuser?.isEmployee==true?<NavLink className={({isActive})=>isActive?active:normal} to={"/jobfind"}>Find a job</NavLink>:<NavLink className={({isActive})=>isActive?active:normal} to={"/jobfind"}>Explore</NavLink>}{
UserState.loginuser?.Username?<CustomDropdown/> :<Ink/>
      }
      </div>
    </div>
  )
}
