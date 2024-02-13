import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AOS from 'aos';
import axios from "axios"
import 'aos/dist/aos.css';
import Template from "../Components/Template";
import { useDispatch } from "react-redux";
import { USER } from "../Redux/Action";


function Signup() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
            easing: 'ease-out-back',
            offset: 120,
        });
    }, []);
    const [Username, setUsername] = useState("")
    const [Email, setEmail] = useState("")
    const dispatch = useDispatch()
    const [Password, setPassword] = useState("")
    const [isEmployee, setIsEmployee] = useState(false);
    const handleCheckboxChange = () => {
        setIsEmployee(!isEmployee);
    };
    const navigate = useNavigate()
    const handle = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/createuser", {
            Username: Username, Email: Email, Password: Password, isEmployee: isEmployee
        }).then((response) => {
            dispatch({
                type: USER,
                payload: { Username: Username, Email: Email, Password: Password, userid: response.data._id, isEmployee: isEmployee, }
            })
            toast.success("User created")
            setTimeout(() => {
                navigate("/")
            }, 3000)
        }).catch((e) => {
            console.log(e)
            toast.error("User already exist with this Email")
        })
        setUsername(""),
            setPassword(""),
            setEmail("")
    }
    return (
        <>
            <Template>
                <div className="flex justify-center h-[80vh] items-center bg-slate-400">
                    <div data-aos="zoom-out" className=" ">



                        <form data-aos="zoom-out" className="    justify-center  items-center w-96    mt-[38px]  rounded-2xl  bg-white border-2  " onSubmit={handle}>
                            <div className="flex  flex-col h-96 w-96 justify-between items-center">
                                <h1 className="  text-2xl font-bold mt-9  text-black ">Ready to join? Us</h1>


                                {/* <h4>Fullname</h4> */}
                                <div className="flex flex-col justify-center items-center text-left gap-y-8">
                                    <div className="flex"> <label className="text-black" htmlFor="name"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                                    </svg>
                                    </label>
                                        <input
                                            required
                                            value={Username}
                                            name="name"
                                            onChange={(e) => setUsername(e.target.value)}
                                            className="border-b border-gray-500 focus:outline-none focus:border-blue-500"
                                            type="text"
                                            placeholder="Username"
                                        /></div>
                                    {/* <h4>Email</h4> */}
                                    <div className="flex" >

                                        <label className=" text-black" htmlFor="email"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                        </svg>
                                        </label>
                                        <input
                                            required
                                            value={Email}
                                            name="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="border-b border-gray-500 focus:outline-none focus:border-blue-500"
                                            type="email"
                                            placeholder="your@gmail.com"
                                        /></div>
                                    {/* <h4>password</h4> */}
                                    <div className="flex">
                                        <label className="text-black" htmlFor="pass"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                            <path fill-rule="evenodd" d="M12 1.5a5.25 5.25 0 0 0-5.25 5.25v3a3 3 0 0 0-3 3v6.75a3 3 0 0 0 3 3h10.5a3 3 0 0 0 3-3v-6.75a3 3 0 0 0-3-3v-3c0-2.9-2.35-5.25-5.25-5.25Zm3.75 8.25v-3a3.75 3.75 0 1 0-7.5 0v3h7.5Z" clip-rule="evenodd" />
                                        </svg>
                                        </label>
                                        <input
                                            name="pass"
                                            required
                                            value={Password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="border-b border-gray-500 focus:outline-none focus:border-blue-500"
                                            type="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="flex gap-4 text-lg font-medium ml-5">
                                        <input
                                            className="block"
                                            type="checkbox"
                                            name="isEmployee"
                                            id="isEmployee"
                                            checked={isEmployee}
                                            onChange={handleCheckboxChange}
                                        />
                                        <p>Signup as an employee</p>
                                    </div></div>

                                <button
                                    type="submit"
                                    className=" border-2 mb-4 h-10 flex border-[#4440DA] hover:text-white transition-all hover:bg-[#4440DA] justify-center items-center  w-20w-[150px] p-1 text-lg  px-6 font-sembold text-[#4440DA]    rounded-[19px]"
                                >
                                    Sign up
                                </button>
                            </div>
                            <div className="flex justify-between ">
                               <span className="text-lg ml-14 mb-4 text-black font-aemibold">
                                    Already have an account?<Link to={"/login"} className="text-black font-bold decoration-black  underline">{"                                                  "}login</Link>
                                </span>
                            </div>
                        </form>
                </div> </div></Template>
        </>
    );
}

export default Signup
