const cloudinary=require("cloudinary").v2
const dotenv=require("dotenv")
const fs=require("fs");
const JobApplyModel = require("./Models/jobapply");
const JobApply = require("./Models/jobapply");
dotenv.config()
cloudinary.config({
    cloud_name: "dd3ujnv1p",
    api_key: "539384279699944",
    api_secret: "fr9wBEwuOVxB5TA7nlhEL2hnjn8",
    secure: true,
  });
exports.uploads= async (req, res) => {
  cloudinary.uploader.upload(req.file.path).then(async(result) => {
    const { url, secure_url } = result;
    const {job,applicant,email,additionalNotes,status}=req.body
    const send =await JobApply.create({
      resumeUrl:url,job:job,applicant:applicant,email:email,additionalNotes:additionalNotes,status:status
    })
    fs.unlink(`${req.file.path}`, (err) => {
      console.log(err);
    })
    res.json(send);
  }).catch((e)=>console.log(e))

  
}