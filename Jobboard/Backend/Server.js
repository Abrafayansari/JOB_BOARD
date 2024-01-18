const express=require("express")
const cors=require("cors");
const app=express()
const {router}=require('./Router/Router');
const Connect = require("./Connection/Connect");
const port = 8080
app.use(cors())
app.use(express.json())
app.use(router)

Connect()

app.listen(port,()=>{
    console.log(`Server started on port no: ${port}`)
})