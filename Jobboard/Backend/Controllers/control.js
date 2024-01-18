const Job = require("../Models/Job")
const UserModel = require("../Models/User")
exports.create=async(req,res)=>{
    const { Username, Email, Password,isEmployee } = req.body
    const exist=await UserModel.find({Email:Email})
    if(exist.length>=1){
        res.status(404).json({
            message:"User Already Exist"
        })
    }else{
        const created=await UserModel.create({Username:Username,Email:Email,Password:Password,isEmployee:isEmployee})
        res.json(created)
    }
    
    }
    exports.find=async(req,res)=>{
        const  {  Email, Password } = req.body
        const found=await UserModel.find({Email:Email,Password:Password})
        if(found.length>=1){
            res.json(found).status(200)
        }else{
            res.json({
                message:"User not Exist"
            }).status(404)
        }
       
    }
     exports.createjob = async (req, res) => {
        try {
          const {
            title,
            company,
            location,
            description,
            requirements,
            type,
            salary,
            applicationDeadline,
          } = req.body;
          const newJob = await Job.create({
            title,
            company,
            location,
            description,
            requirements,
            type,
            salary,
            applicationDeadline,
          });
      
          res.json(newJob);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      };
      exports.findjob=async (req, res) => {
        try {
          const jobs = await Job.find();
          res.json(jobs);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      }