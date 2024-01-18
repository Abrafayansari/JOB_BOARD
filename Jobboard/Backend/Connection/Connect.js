const mongoose=require("mongoose")
const  Connect=async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/JobBoard").then(()=> console.log("DB connected"))
.catch((e)=>console.log(e))}
module.exports=Connect