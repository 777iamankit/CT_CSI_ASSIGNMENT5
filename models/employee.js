const mongoose=require('mongoose');

const employeeSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    required:true
  },
  nationality:{
    type:String,
    default:"Indian"
  },

})

module.exports=mongoose.model('employee',employeeSchema);