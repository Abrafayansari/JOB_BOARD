import React from 'react'
import { IoCodeSlash } from "react-icons/io5";
import { FaChartLine} from "react-icons/fa";
import { FaRegCalendar } from "react-icons/fa";
import { VscTools } from "react-icons/vsc";
import { FaChartBar } from "react-icons/fa";
import { HiSpeakerphone } from "react-icons/hi"; 
import { FaChartPie } from "react-icons/fa";
import { BsCalculator } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import { FaHeadset } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
const getlogo = (category) => {
    switch (category) {
      case 'Software Development':
        return <IoCodeSlash className='h-5 w-5' />;
      case 'Healthcare':
        return <FaUserDoctor className='h-5 w-5' />;
      case 'Marketing':
        return <HiSpeakerphone className='h-5 w-5' />;
      case 'Accounting':
        return <BsCalculator className='h-5 w-5' />;
      case 'Business Development':
        return <FaChartPie className='h-5 w-5' />;
      case 'Project Management':
        return <FaRegCalendar className='h-5 w-5' />;
      case 'Education':
        return <GiTeacher className='h-5 w-5' />;
        case 'Engineering':
        return <VscTools  className='h-5 w-5' />;
        case 'Sales':
        return <FaChartBar  className='h-5 w-5' />;
        case 'Customer Service':
          return <FaHeadset   className='h-5 w-5' />;
      case 'Finance':
        return <FaChartLine className='h-5 w-5' />;
      default:
        return null;
    }
  };
  export default getlogo