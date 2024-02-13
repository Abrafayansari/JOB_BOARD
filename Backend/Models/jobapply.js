const mongoose = require('mongoose');


const jobApplySchema = new mongoose.Schema({
  job:{
type:mongoose.Schema.Types.ObjectId,ref:"Job",
required:true
  },
applicant:{
type:mongoose.Schema.Types.ObjectId,ref:"User",
required:true
},
  email: {
    type: String,
    required: true
  },
  resumeUrl: {
    type: String,
    required: true
  },

  additionalNotes: {
    type: String
  },
  status: {
    type: String,
    enum: ['pending', 'accepted', 'rejected'],
    default: 'pending'
  },
  
});

const JobApply = mongoose.model('JobApply', jobApplySchema);

module.exports = JobApply ;
