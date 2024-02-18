const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  postedby:{
    type:mongoose.Schema.Types.ObjectId,ref:"User",
    required:true
    
  },
  title: {
    type: String,
    required: true
  },
  category:{
type:String,
required:true
  },
  company: {
    type: String,
    required: true
  },
  location: String,
  description: {
    type: String,
    required: true
  },
  requirements: {
    type: [String],
    default: []
  },
  
  type: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'],
    required: true
  },
  salary: {
    type: Number,
  }

}, { timestamps: true });

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
