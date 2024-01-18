const mongoose=require("mongoose")
// const bcrypt =require("bcrypt")
// const salt=2
const UserSchema=new mongoose.Schema({
    Username:String,
    Email: String, 
    Password:String,
    isEmployee:Boolean

})

// loginSchema.pre("save",async function(next){
//     this.password=await bcrypt.hash(this.password,salt)
//     next()
// })
const UserModel=mongoose.model("User",UserSchema)
module.exports=UserModel