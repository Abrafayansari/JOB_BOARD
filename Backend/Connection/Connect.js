const mongoose=require("mongoose")
const  Connect=async()=>{
await mongoose.connect("mongodb+srv://AbdulRafay:rafay@jobboard.qudzgqd.mongodb.net/")
.then(()=> console.log("DB connected"))
.catch((e)=>console.log(e))}
module.exports=Connect