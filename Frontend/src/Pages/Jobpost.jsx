// src/components/JobApplicationForm.js
import React, { useState } from 'react';
import Template from '../Components/Template';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const Jobpost = () => {
  // const getlogo = (logo) => {
  //   switch (logo) {
  //     case formData.category=="Software Engineering":
  //       return <IoCodeSlash  className='h-[7vh]  w-[7vw]' />;
  //     case formData.category=='Health Care':
  //       return <FaUserDoctor  className='h-[7vh] hover:text-white w-[7vw]'/>
  //     case formData.category=='Marketing Manager':
  //       return <HiSpeakerphone   className='h-[7vh] hover:text-white w-[7vw]'/>;
  //     case formData.category=='Accounting':
  //       return <BsCalculator  className='h-[7vh] hover:text-white w-[7vw]'/>;
  //     case formData.category=='Business Development':
  //       return <FaChartPie  className='h-[7vh] hover:text-white w-[7vw]'/>;
  //     case formData.category== 'Project Management':
  //       return <FaRegCalendar  className='h-[7vh] hover:text-white  w-[7vw]'/>;
  //     case formData.category=='Teacher':
  //       return <GiTeacher className='h-[7vh] hover:text-white  w-[7vw]' />;
  //     case formData.category=='Finance':
  //       return <FaChartLine className='h-[7vh] hover:text-white  w-[7vw]' />;
  //     default:
  //       return null;
  //   }
  // };
  const Userstate=useSelector(state=>state.User)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    salary: '',
    logo:"",
    bgimage:"",
    category:"",  
    type: '',
    requirements: '',
    location: '',
    company: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/create-job",{
      postedby:Userstate.loginuser.userid,
      title:formData.title,
      category:formData.category,
      company:formData.company,
bgimage:formData.bgimage,
      location:formData.location,
      description:formData.description,
      requirements:formData.requirements,
      type:formData.type,
      salary:formData.salary

    }).then((res)=>{
      console.log(res);
      return toast.success("job created")
      
    }).catch((e)=>console.log(e))
    
   
  };

  return (
    <Template>
      <div className='h-[60vh] w-full bg-slate-500 flex justify-center items-center '> <h1 className='text-6xl font-semibold'>
        Post A Job
        </h1></div>
    <div className=" mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
      <form className='w-[40vw] ml-[15vw]'  onSubmit={handleSubmit}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-xl font-medium  text-black">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 p-2 border-2 rounded-md w-full"
            required
          />
        </div>
  <div className='mb-4'>
    <label htmlFor="category" className="block text-xl font-medium  text-black">
            Job category
          </label>
  <select
  id="category"
  name="category"
  value={formData.category}
  onChange={handleChange}
  className="mt-1 p-2 border rounded-md w-full"
  required
>
  <option value="">Select Job Category</option>
  <option value="Software Development">Software Development</option>
  <option value="Marketing">Marketing</option>
  <option value="Finance">Finance</option>
  <option value="Healthcare">Healthcare</option>
  <option value="Education">Education</option>
  <option value="Engineering">Engineering</option>
  <option value="Sales">Sales</option>
  <option value="Customer Service">Customer Service</option>
  <option value="Human Resources">Human Resources</option>
  <option value="Design">Design</option>
  <option value="Information Technology">Information Technology</option>
  <option value="Business Development">Business Development</option>
  <option value="Operations">Operations</option>
  <option value="Research and Development">Research and Development</option>
   <option value="Other">Other</option>
</select></div>

        {/* Description */}
        <div className="mb-4">
          <label htmlFor="description" className="block text-xl font-medium  text-black">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        {/* Salary */}
        <div className="mb-4">
          <label htmlFor="salary" className="block text-xl font-medium  text-black">
            Salary
          </label>
          <input
            type="text"
            id="salary"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        {/* Job Type */}
        <div className="mb-4">
          <label htmlFor="type" className="block text-xl font-medium  text-black">
            Job Type
          </label>
          <select
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          >
            <option value="">Select Job Type</option>
            <option value="Full-time">Full Time</option>
            <option value="Part-time">Part-Time</option>
            <option value="Contract">Contract</option>
            <option value="Freelance">Freelance</option>
            <option value="Internship">Internship</option>
          </select>
        </div>

        {/* Requirements */}
        <div className="mb-4">
          <label htmlFor="requirements" className="block text-xl font-medium  text-black">
            Requirements
          </label>
          <textarea
            id="requirements"
            name="requirements"
            value={formData.requirements}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label htmlFor="location" className="block text-xl font-medium  text-black">
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        {/* Company */}
        <div className="mb-4">
          <label htmlFor="company" className="block text-xl font-medium  text-black">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="bgimage" className="block text-xl font-medium  text-black">
            Background Image <span>(url)</span>
          </label>
          <textarea
            id="bgimage"
            name="bgimage"
            value={formData.bgimage}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="px-4 py-2 bg-[#4440DA] text-white rounded-md  focus:outline-none focus:ring focus:border-blue-300"
          >
            POST
          </button>
        </div>
      </form>
    </div></Template>
  );
};

export default Jobpost;
