
const mongoose = require ('mongoose');

const DoctorSchema = new mongoose.Schema (
    {
   userId:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"User",
    required :true
    
   },
   specialization:{
    type: String,
    required :true
   }, 
   bio:{
    type: String,
   },
   workingHours:{
    type: String,
   },

  },
  { timestamps: true },
);

module.exports = mongoose.model("Doctor" ,DoctorSchema);