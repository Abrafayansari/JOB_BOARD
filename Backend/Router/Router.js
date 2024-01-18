const express =require("express")
const { create, find, createjob, findjob } = require("../Controllers/control")

const router=express.Router()
router.post("/createuser",create)
router.post("/finduser",find)
router.post('/create-job',createjob)
router.get("/find-jobs",findjob)
module.exports={router}