import React, { useState } from 'react'
import axios from "axios"
export default function Jobapply() {
    const [Email, setEmail] = useState("");
    const [Add,setAdd]=useState("")
    const [file, setFile] = useState("");
    const handleFile = (e) => {
      setFile(e.target.files[0]);
      alert("file is changed");
    }
  return (
    <div>
      <form 
       onSubmit={async(e) => {
        e.preventDefault();
        if ( file) {
          const formData = new FormData();
         
          formData.set("Resume", file); 
         await axios.post("http://localhost:8080/uploadresume", formData);
        } else alert("please upload file");
      }}
       encType="multipart/form-data">
       
      <div class="relative flex items-center  w-[20vw] mr] rounded-full">
<input 
    type="email"
    name="email"
    required
    value={Email}
    onChange={(e) => setEmail(e.target.value)}  id="floating_outlined" className="block rounded-full px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent  border-1 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
    <label for="floating_outlined" className="absolute   text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Email</label>
</div>
{/* <label htmlFor="text">AdditionalNotes</label> */}
<textarea name="text" id="" 
 value={Add} cols="30" onChange={(e)=>setAdd(e.target.value)} className='mt-2 rounded-2xl p-4' placeholder='AdditionalNotes' rows="10"></textarea>
{/* <input
        className="text-white"
          type="file"
          name="avatar"
           value={file}
          id="avatar"
          onChange={handleFile}
          accept=".gif,.jpg,.jpeg,.png,.doc,.docx"
        />  */}
        <div class="flex items-center justify-center w-[20vw] h">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> Resume</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file"           accept=".gif,.jpg,.jpeg,.png,.doc,.docx"
 onChange={handleFile} value={file} name='Resume' class="hidden" />
    </label>
</div> 
<button type='submit'>submit</button>
      </form>
    </div>
  )
}
